import { NextRequest, NextResponse } from 'next/server'
import { ScanCommand } from '@aws-sdk/client-dynamodb'
import { dynamo } from '@/lib/dynamodb'

const TABLE = process.env.DYNAMODB_TABLE_NAME!
const ADMIN_SECRET = process.env.ADMIN_SECRET

export async function GET(req: NextRequest) {
  // --- auth ---
  if (!ADMIN_SECRET) {
    return NextResponse.json({ error: 'ADMIN_SECRET not configured' }, { status: 500 })
  }

  const provided = req.headers.get('x-admin-secret')
  if (!provided || provided !== ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // --- scan all counter rows (pk starts with "views:") ---
  const items: { slug: string; views: number }[] = []
  let lastKey: Record<string, { S?: string; N?: string }> | undefined

  do {
    const res = await dynamo.send(
      new ScanCommand({
        TableName: TABLE,
        FilterExpression: 'begins_with(pk, :prefix)',
        ExpressionAttributeValues: { ':prefix': { S: 'views:' } },
        ProjectionExpression: 'pk, #c',
        ExpressionAttributeNames: { '#c': 'count' },
        ExclusiveStartKey: lastKey,
      })
    )

    for (const item of res.Items ?? []) {
      const slug = item.pk.S!.replace('views:', '')
      const views = item.count ? parseInt(item.count.N!, 10) : 0
      items.push({ slug, views })
    }

    lastKey = res.LastEvaluatedKey as typeof lastKey
  } while (lastKey)

  // sort most-viewed first
  items.sort((a, b) => b.views - a.views)

  return NextResponse.json({ total: items.length, data: items })
}
