import { Metadata } from "next"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { getMediumPosts } from "@/lib/medium"
import { generateBlogCollectionSchemas } from "@/lib/schema"
import { BlogPageClient } from "./blog-page-client"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing on cost-optimized LLM infrastructure, multi-provider AI routing, product engineering, and shipping AI products end-to-end.",
  alternates: { canonical: "/blog" },
}

// Revalidate every minute so scheduled posts appear promptly after their
// publish time. ISR only regenerates on request, so this tightens the window
// between publish-time and first-visitor-sees-it on a low-traffic site.
export const revalidate = 60

export default async function BlogPage() {
  // Fetch local MDX posts
  let localPosts: Array<{
    slug: string
    title: string
    date: string
    summary: string
    tags: string[]
    readingTime?: { text: string }
    source: "local"
    href: string
  }> = []

  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    localPosts = allPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      summary: p.summary || "",
      tags: p.tags || [],
      readingTime: p.readingTime,
      source: "local" as const,
      href: `/blog/${p.slug}`,
    }))
  } catch {
    localPosts = []
  }

  // Fetch Medium posts
  const mediumPosts = await getMediumPosts()
  const mediumMapped = mediumPosts.map((p) => ({
    slug: p.link,
    title: p.title,
    date: p.date,
    summary: p.summary,
    tags: [] as string[],
    readingTime: undefined,
    source: "medium" as const,
    href: p.link,
  }))

  // Deduplicate: if a Medium post title matches a local post, keep only the local one
  const localTitles = new Set(localPosts.map((p) => p.title.toLowerCase().trim()))
  const dedupedMedium = mediumMapped.filter(
    (p) => !localTitles.has(p.title.toLowerCase().trim())
  )

  // Merge and sort by date (newest first)
  const allPosts = [...localPosts, ...dedupedMedium].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  const schemas = generateBlogCollectionSchemas(allPosts)

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <BlogPageClient posts={allPosts} />
    </>
  )
}
