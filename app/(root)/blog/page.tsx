import { Metadata } from "next"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { getMediumPosts } from "@/lib/medium"
import { BlogPageClient } from "./blog-page-client"

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
  alternates: { canonical: "/blog" },
}

// Revalidate hourly so scheduled posts appear when their publish date passes
// without requiring a manual rebuild.
export const revalidate = 3600

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

  return <BlogPageClient posts={allPosts} />
}
