import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx"
import { PostFrontMatter } from "@/types/PostFrontMatter"
import Draft from "@/components/mdx/Draft"
import { MDXLayoutRenderer } from "@/components/mdx/MDXComponents"
import PostLayout from "@/components/blog/post-layout"

type BlogPostPageProps = {
  params: Promise<{
    slug: string
  }>
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    const posts = await getAllFilesFrontMatter("blog")
    return posts.map((post) => ({
      slug: post.slug,
    }))
  } catch {
    return []
  }
}

// Generate metadata for SEO
export async function generateMetadata(
  props: BlogPostPageProps
): Promise<Metadata> {
  try {
    const params = await props.params
    const slug = params.slug
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const post = (await getFileBySlug<PostFrontMatter>("blog", slug)) as any
    const frontMatter = post.frontMatter

    return {
      title: frontMatter?.title || "Blog Post",
      description: frontMatter?.summary || "",
      openGraph: {
        title: frontMatter?.title || "Blog Post",
        description: frontMatter?.summary || "",
        type: "article",
        publishedTime: frontMatter?.date || undefined,
      },
    }
  } catch {
    return {
      title: "Blog Post",
    }
  }
}

const BlogPostPage = async (props: BlogPostPageProps) => {
  const params = await props.params
  const slug = params.slug

  // Get the current post
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let post: any
  try {
    post = await getFileBySlug<PostFrontMatter>("blog", slug)
  } catch (error) {
    console.error("Error loading blog post:", error)
    notFound()
  }

  if (!post) {
    notFound()
  }

  const { mdxSource, toc } = post
  const frontMatter = post.frontMatter as PostFrontMatter

  // Check if post is a draft
  if (frontMatter?.draft === true) {
    return <Draft />
  }

  // Get all posts for prev/next navigation
  let prev: { slug: string; title: string } | undefined = undefined
  let next: { slug: string; title: string } | undefined = undefined

  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    const postIndex = allPosts.findIndex((p) => p.slug === slug)

    if (postIndex !== -1) {
      const prevPost = allPosts[postIndex + 1]
      const nextPost = allPosts[postIndex - 1]
      prev = prevPost
        ? { slug: prevPost.slug, title: prevPost.title }
        : undefined
      next = nextPost
        ? { slug: nextPost.slug, title: nextPost.title }
        : undefined
    }
  } catch {
    // Navigation posts not critical, continue without them
  }

  return (
    <PostLayout frontMatter={frontMatter} toc={toc} prev={prev} next={next}>
      <MDXLayoutRenderer mdxSource={mdxSource} />
    </PostLayout>
  )
}

export default BlogPostPage
