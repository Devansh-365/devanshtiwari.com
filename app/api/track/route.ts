import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import { PutItemCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb'
import { dynamo } from '@/lib/dynamodb'

const TABLE = process.env.DYNAMODB_TABLE_NAME!
const VALID_SLUG = /^\/[\w\-.\/]{1,200}$/

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json()

    if (!slug || !VALID_SLUG.test(slug)) {
      return new NextResponse(null, { status: 400 })
    }

    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
    const hash = createHash('sha256').update(ip).digest('hex').slice(0, 16)
    const dedupKey = `dedup:${slug}:${hash}`
    const ttl = Math.floor(Date.now() / 1000) + 86400

    try {
      await dynamo.send(
        new PutItemCommand({
          TableName: TABLE,
          Item: {
            pk: { S: dedupKey },
            ttl: { N: String(ttl) },
          },
          ConditionExpression: 'attribute_not_exists(pk)',
        })
      )
    } catch (e: unknown) {
      if (e instanceof Error && e.name === 'ConditionalCheckFailedException') {
        return new NextResponse(null, { status: 204 })
      }
      throw e
    }

    await dynamo.send(
      new UpdateItemCommand({
        TableName: TABLE,
        Key: { pk: { S: `views:${slug}` } },
        UpdateExpression: 'ADD #c :inc',
        ExpressionAttributeNames: { '#c': 'count' },
        ExpressionAttributeValues: { ':inc': { N: '1' } },
      })
    )

    return new NextResponse(null, { status: 200 })
  } catch {
    return new NextResponse(null, { status: 500 })
  }
}
