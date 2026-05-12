# Blog Post Outline: View Counter

**Title:** How I added view counts to my Next.js blog for $0/month

---

## 1. Intro

The problem: every solution I found reached for a managed service (Upstash, PlanetScale, Supabase). I wanted something I actually owned, with no per-request pricing surprises and no vendor to go down or change their free tier. DynamoDB PAY_PER_REQUEST at portfolio traffic is effectively free.

---

## 2. The data model

Single table, two row types. Explain why one table works here — counter rows vs dedup rows, the TTL trick for expiry without a cron job. Show the key pattern (`views:/blog/slug`, `dedup:/blog/slug:hash`).

---

## 3. Deduplication without storing PII

Why you can't just count raw requests. The SHA-256 IP hash approach — what it protects against, why 16 hex chars is enough for a dedup key, how TTL-based expiry gives you daily unique counts without ever persisting an IP address.

---

## 4. The tracking endpoint

Walk through `POST /api/track` — conditional write for dedup, atomic `UpdateItem ADD` for the counter. The `ConditionalCheckFailedException` pattern. Why `200` vs `204` matters for the client.

---

## 5. Reading counts without killing your ISR

Why `revalidateTag` after every track would be wrong. How ISR + 60s revalidation batches reads naturally. `BatchGetItem` for the blog list, single `GetItem` for the post page. The 100-key chunk limit and `UnprocessedKeys` retry.

---

## 6. Optimistic UI

The 5-second delay to filter bounces. Why the count only increments on `200` (new view) not `204` (dedup). The `PostViewWrapper` pattern — server renders the initial count, client increments on confirmed track. `useCallback` for stable references.

---

## 7. Infrastructure as code

CDK stack — one table, PAY_PER_REQUEST, TTL attribute, RETAIN policy. Why RETAIN matters (don't accidentally delete your data on stack teardown). Scoped IAM policy — minimum permissions, table ARN output for easy copy-paste.

---

## 8. What it costs

DynamoDB always-free tier: 25 GB storage + 200 million requests/month, forever, no credit card expiry. At 10k views/month you're using 0.005% of the free request quota. The "~$0/month" framing is underselling it — it's $0, full stop, unless you go massively viral. Even then, PAY_PER_REQUEST is $1.25 per million writes and $0.25 per million reads, so 1 million views would cost roughly $1.50. The real cost is the AWS account setup time, not the bill.

---

## 9. Closing

What you'd change at scale (GSI for time-series, separate table for dedup at high write volume). Link to the repo / relevant files.
