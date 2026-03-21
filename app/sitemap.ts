import { type MetadataRoute } from "next"
import { url } from "@/lib"
import { getAllFilesFrontMatter } from "@/lib/mdx"

export default async function sitemap() {
  const staticMap: MetadataRoute.Sitemap = [
    {
      url: url("/").href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: url("/blog").href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: url("/resume").href,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]

  // Blog posts
  let blogMap: MetadataRoute.Sitemap = []
  try {
    const posts = await getAllFilesFrontMatter("blog")
    blogMap = posts.map((post) => ({
      url: url(`/blog/${post.slug}`).href,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  } catch {
    blogMap = []
  }

  // Work projects
  const { WORK_PROJECTS } = await import("@/features/work/data/projects")
  const workMap: MetadataRoute.Sitemap = [
    {
      url: url("/work").href,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    ...WORK_PROJECTS.map((p) => ({
      url: url(`/work/${p.slug}`).href,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]

  return [...staticMap, ...blogMap, ...workMap]
}
