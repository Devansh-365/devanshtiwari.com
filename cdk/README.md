# View Counter Infrastructure

AWS CDK stack that provisions the DynamoDB table used by the blog view counter.

## Table Design

Single table `portfolio-views` with two row types:

| Row type | pk | ttl |
|----------|----|-----|
| Counter | `views:/blog/slug` | none |
| Dedup | `dedup:/blog/slug:iphash` | 24 h |

Counter rows use `count` (Number) attribute incremented atomically.
Dedup rows use a TTL so each IP can register one view per 24-hour window
without storing PII (IP is hashed with SHA-256).

## Deploy

```bash
cd cdk
npm install
npm run build
npx cdk bootstrap   # first time only
npx cdk deploy
```

## Environment variables (Next.js)

After deploying, add to `.env.local` / Vercel env:

```
AWS_REGION=ap-south-1
AWS_ACCESS_KEY_ID=...
AWS_SECRET_ACCESS_KEY=...
DYNAMODB_TABLE_NAME=portfolio-views
ADMIN_SECRET=<random-secret-for-admin-api>
```

Create an IAM user with the following policy scoped to the table ARN output by the stack:

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

## Admin endpoint

`GET /api/admin/views` returns all view counts sorted by most-viewed.
Protected by the `x-admin-secret` header.

```bash
curl https://yoursite.com/api/admin/views \
  -H "x-admin-secret: <your-ADMIN_SECRET>"
```

Example response:

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
