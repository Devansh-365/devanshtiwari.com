import { Metadata } from "next"
import { getAllPosts } from "@/features/blog/lib/posts"
import { getViewCounts } from "@/lib/views"
import { generateBlogCollectionSchemas } from "@/lib/schema"
import { PostList } from "@/features/blog/components/post-list"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles on development, design, and ideas by Devansh Tiwari.",
}

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getAllPosts()

  const localSlugs = posts
    .filter((p) => p.source === "local")
    .map((p) => `/blog/${p.slug}`)

  const viewCounts = await getViewCounts(localSlugs)

  const enrichedPosts = posts.map((p) => ({
    ...p,
    views: p.source === "local" ? (viewCounts[`/blog/${p.slug}`] ?? 0) : undefined,
  }))

  const schemas = generateBlogCollectionSchemas(enrichedPosts)

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PostList posts={enrichedPosts} />
    </>
  )
}
