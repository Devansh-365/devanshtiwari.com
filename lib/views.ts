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

export async function getViewCounts(
  slugs: string[]
): Promise<Record<string, number>> {
  if (slugs.length === 0) return {}

  const counts: Record<string, number> = {}
  slugs.forEach((slug) => {
    counts[slug] = 0
  })

  try {
    const res = await dynamo.send(
      new BatchGetItemCommand({
        RequestItems: {
          [TABLE]: {
            Keys: slugs.map((slug) => ({ pk: { S: `views:${slug}` } })),
          },
        },
      })
    )

    for (const item of res.Responses?.[TABLE] ?? []) {
      const slug = item.pk.S!.replace('views:', '')
      counts[slug] = item.count ? parseInt(item.count.N!, 10) : 0
    }
  } catch {
    // Return zeros on failure — never crash the page render
  }

  return counts
}
