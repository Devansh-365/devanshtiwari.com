import { SITE_INFO } from "@/config/site"
import { getAllFilesFrontMatter } from "@/lib/mdx"

export const revalidate = false
export const dynamic = "force-static"

export async function GET() {
  let posts: Array<{ slug: string; title: string; date: string; summary?: string }> = []

  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    posts = allPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      summary: p.summary || "",
    }))
  } catch {
    posts = []
  }

  const itemsXml = posts
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.title)}</title>
          <link>${SITE_INFO.url}/blog/${post.slug}</link>
          <description>${escapeXml(post.summary || "")}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid>${SITE_INFO.url}/blog/${post.slug}</guid>
        </item>`
    )
    .join("\n")

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${SITE_INFO.name}</title>
      <link>${SITE_INFO.url}</link>
      <description>${SITE_INFO.description}</description>
      <language>en-us</language>
      <atom:link href="${SITE_INFO.url}/rss" rel="self" type="application/rss+xml" />
      ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "text/xml",
    },
  })
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
