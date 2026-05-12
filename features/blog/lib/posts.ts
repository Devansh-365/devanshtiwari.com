import { unstable_cache } from "next/cache"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { getMediumPosts } from "@/lib/medium"
import type { Post } from "../types"

async function fetchAllPosts(): Promise<Post[]> {
  // Local MDX posts
  let localPosts: Post[] = []
  try {
    const all = await getAllFilesFrontMatter("blog")
    localPosts = all.map((p) => ({
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

  // Medium posts
  let mediumPosts: Post[] = []
  try {
    const posts = await getMediumPosts()
    mediumPosts = posts.map((p) => ({
      slug: p.link,
      title: p.title,
      date: p.date,
      summary: p.summary,
      tags: [],
      source: "medium" as const,
      href: p.link,
    }))
  } catch {
    mediumPosts = []
  }

  // Deduplicate: local post wins if titles match
  const localTitles = new Set(localPosts.map((p) => p.title.toLowerCase().trim()))
  const dedupedMedium = mediumPosts.filter(
    (p) => !localTitles.has(p.title.toLowerCase().trim())
  )

  // Sort newest first
  return [...localPosts, ...dedupedMedium].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

/**
 * Cached across requests (1 hour revalidation).
 * Use this in all server components — both the homepage preview and the /blog page.
 */
export const getAllPosts = unstable_cache(fetchAllPosts, ["blog-posts"], {
  revalidate: 3600,
  tags: ["blog"],
})
