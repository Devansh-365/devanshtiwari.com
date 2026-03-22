import { SITE_INFO } from "@/config/site"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { getMediumPosts } from "@/lib/medium"

export const revalidate = false

export async function GET() {
  let localPosts: Array<{ title: string; link: string; date: string; summary: string }> = []

  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    localPosts = allPosts.map((p) => ({
      title: p.title,
      link: `${SITE_INFO.url}/blog/${p.slug}`,
      date: p.date,
      summary: p.summary || "",
    }))
  } catch {
    localPosts = []
  }

  let mediumPosts: Array<{ title: string; link: string; date: string; summary: string }> = []
  try {
    const posts = await getMediumPosts()
    mediumPosts = posts.map((p) => ({
      title: p.title,
      link: p.link,
      date: p.date,
      summary: p.summary,
    }))
  } catch {
    mediumPosts = []
  }

  const allPosts = [...localPosts, ...mediumPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const itemsXml = allPosts
    .map(
      (post) =>
        `<item>
          <title>${escapeXml(post.title)}</title>
          <link>${post.link}</link>
          <description>${escapeXml(post.summary)}</description>
          <pubDate>${new Date(post.date).toUTCString()}</pubDate>
          <guid>${post.link}</guid>
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
