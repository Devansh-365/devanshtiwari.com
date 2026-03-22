import { Metadata } from "next"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { getMediumPosts } from "@/lib/medium"
import { BlogPageClient } from "./blog-page-client"

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
  alternates: { canonical: "/blog" },
}

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

  // Merge and sort by date (newest first)
  const allPosts = [...localPosts, ...mediumMapped].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return <BlogPageClient posts={allPosts} />
}
