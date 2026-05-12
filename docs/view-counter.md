# Blog Post View Counter

A serverless view counter for blog posts using Next.js API routes + DynamoDB. No third-party service, no Lambda, no extra runtime — runs entirely within the existing Vercel deployment.

---

## How it works

### Tracking (client-side)

- `ViewTracker` component renders invisible on every blog post page
- Fires a POST to `/api/track` after a 5-second delay to filter bounces
- Sends the slug (`/blog/post-name`)

### Deduplication

- On each track request, the visitor's IP is hashed with SHA-256 (first 16 hex chars)
- A dedup row is written to DynamoDB with a 24-hour TTL
- If the row already exists (`ConditionalCheckFailedException`), the request is silently dropped
- No PII stored — just a hash that expires

### Counting

- On a new unique view, the counter row is atomically incremented via `UpdateItem ADD`
- Counter rows never expire

### Reading (server-side)

- Blog post pages (`/blog/[slug]`) fetch a single count via `GetItem` during ISR revalidation (60s)
- Blog list page fetches all counts in one `BatchGetItem` call, chunked at 100 keys, with `UnprocessedKeys` retry

---

## API surface

| Route | Method | Auth | Purpose |
|-------|--------|------|---------|
| `/api/track` | POST | none | Record a view |
| `/api/views` | GET | none | Batch-fetch counts for up to 50 slugs |
| `/api/admin/views` | GET | `x-admin-secret` header | Full scan, sorted by most-viewed |

### Admin endpoint usage

```bash
curl https://yoursite.com/api/admin/views \
  -H "x-admin-secret: <your-ADMIN_SECRET>"
```

Response:

```json
{
  "total": 3,
  "data": [
    { "slug": "/blog/my-most-read-post", "views": 423 },
    { "slug": "/blog/another-post", "views": 87 },
    { "slug": "/blog/new-post", "views": 4 }
  ]
}
```

---

## DynamoDB table design

Single table `portfolio-views` with two row types:

| Row type | pk | ttl |
|----------|----|-----|
| Counter | `views:/blog/slug` | none |
| Dedup | `dedup:/blog/slug:iphash` | 24 h |

Counter rows use a `count` (Number) attribute incremented atomically.
Dedup rows expire automatically via DynamoDB TTL — one view per IP per 24-hour window.

---

## Infrastructure

CDK stack lives in `cdk/`. Provisions the DynamoDB table with:

- Billing: PAY_PER_REQUEST
- Region: `ap-south-1`
- TTL attribute: `ttl`
- Removal policy: `RETAIN` (table survives stack deletion)
- Outputs: table name + ARN

### Deploy

```bash
cd cdk
npm install
npm run build
npx cdk bootstrap   # first time only
npx cdk deploy
```

---

## Environment variables

Add to `.env.local` / Vercel project settings:

```
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
DYNAMODB_TABLE_NAME=portfolio-views
ADMIN_SECRET=
```

### IAM policy

Create a dedicated IAM user scoped to the table ARN output by the CDK stack:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "dynamodb:GetItem",
        "dynamodb:BatchGetItem",
        "dynamodb:PutItem",
        "dynamodb:UpdateItem",
        "dynamodb:Scan"
      ],
      "Resource": "<PortolioViewsTableArn>"
    }
  ]
}
```

---

## Key files

| File | Purpose |
|------|---------|
| `lib/dynamodb.ts` | DynamoDB client singleton |
| `lib/views.ts` | `getViewCount` / `getViewCounts` helpers |
| `app/api/track/route.ts` | POST — dedup + atomic increment |
| `app/api/views/route.ts` | GET — public batch-fetch (max 50 slugs) |
| `app/api/admin/views/route.ts` | GET — full scan, secret-protected |
| `features/blog/components/view-tracker.tsx` | Client component, 5s delay |
| `cdk/` | CDK infrastructure |
