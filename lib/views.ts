import { GetItemCommand, BatchGetItemCommand } from '@aws-sdk/client-dynamodb'
import { dynamo } from './dynamodb'

const TABLE = process.env.DYNAMODB_TABLE_NAME!

export async function getViewCount(slug: string): Promise<number> {
  try {
    const res = await dynamo.send(
      new GetItemCommand({
        TableName: TABLE,
        Key: { pk: { S: `views:${slug}` } },
      })
    )
    return res.Item?.count ? parseInt(res.Item.count.N!, 10) : 0
  } catch {
    return 0
  }
}

// DynamoDB hard limit: 100 keys per BatchGetItem request
const BATCH_LIMIT = 100

export async function getViewCounts(
  slugs: string[]
): Promise<Record<string, number>> {
  if (slugs.length === 0) return {}

  const counts: Record<string, number> = {}
  slugs.forEach((slug) => { counts[slug] = 0 })

  // Chunk into batches of 100
  for (let i = 0; i < slugs.length; i += BATCH_LIMIT) {
    const chunk = slugs.slice(i, i + BATCH_LIMIT)
    await fetchBatch(chunk, counts)
  }

  return counts
}

async function fetchBatch(
  slugs: string[],
  counts: Record<string, number>
): Promise<void> {
  let keys = slugs.map((slug) => ({ pk: { S: `views:${slug}` } }))

  // Retry loop handles UnprocessedKeys returned under load
  while (keys.length > 0) {
    try {
      const res = await dynamo.send(
        new BatchGetItemCommand({
          RequestItems: { [TABLE]: { Keys: keys } },
        })
      )

      for (const item of res.Responses?.[TABLE] ?? []) {
        const slug = item.pk.S!.replace('views:', '')
        counts[slug] = item.count ? parseInt(item.count.N!, 10) : 0
      }

      // If DynamoDB returned unprocessed keys, retry just those
      const unprocessed = res.UnprocessedKeys?.[TABLE]?.Keys
      keys = unprocessed ?? []
    } catch {
      // Return zeros for this batch on failure — never crash the page render
      break
    }
  }
}
