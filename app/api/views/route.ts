import { NextRequest, NextResponse } from 'next/server'
import { getViewCounts } from '@/lib/views'

const VALID_SLUG = /^\/[\w\-.\/]{1,200}$/

export async function GET(req: NextRequest) {
  const slugsParam = req.nextUrl.searchParams.get('slugs')

  if (!slugsParam) {
    return NextResponse.json({})
  }

  const slugs = slugsParam
    .split(',')
    .map((s) => s.trim())
    .filter((s) => VALID_SLUG.test(s))
    .slice(0, 50) // max 50 slugs per request

  const counts = await getViewCounts(slugs)
  return NextResponse.json(counts)
}
