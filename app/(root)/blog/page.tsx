import { Metadata } from "next"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { BlogPageClient } from "./blog-page-client"

export const metadata: Metadata = {
  title: "Blog",
  description: "A collection of articles on development, design, and ideas.",
}

export default async function BlogPage() {
  let posts: Array<{ slug: string; title: string; date: string; summary: string; tags: string[]; readingTime?: { text: string } }> = []
  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    posts = allPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      summary: p.summary || "",
      tags: p.tags || [],
      readingTime: p.readingTime,
    }))
  } catch { posts = [] }

  return <BlogPageClient posts={posts} />
}
