import Parser from "rss-parser"
import { cache } from "react"

const MEDIUM_FEED_URL = "https://medium.com/feed/@devanshtiwari365"

// Hide Medium posts published after this date. Newer posts live on this blog
// natively and shouldn't double-appear via the Medium feed.
const MEDIUM_CUTOFF = new Date("2026-03-15T23:59:59Z").getTime()

export type MediumPost = {
  title: string
  link: string
  date: string
  summary: string
  source: "medium"
}

export const getMediumPosts = cache(async (): Promise<MediumPost[]> => {
  try {
    const parser = new Parser()
    const feed = await parser.parseURL(MEDIUM_FEED_URL)

    return (feed.items || [])
      .map((item) => ({
        title: item.title || "Untitled",
        link: item.link || "",
        date: item.pubDate
          ? new Date(item.pubDate).toISOString()
          : new Date().toISOString(),
        summary: extractSummary(item["content:encoded"] || item.contentSnippet || ""),
        source: "medium" as const,
      }))
      .filter((post) => new Date(post.date).getTime() <= MEDIUM_CUTOFF)
  } catch (error) {
    console.error("Failed to fetch Medium posts:", error)
    return []
  }
})

function extractSummary(html: string): string {
  // Strip HTML tags and get first 160 chars
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim()
  return text.length > 160 ? text.slice(0, 157) + "..." : text
}
