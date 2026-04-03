import { Metadata } from "next"
import { notFound } from "next/navigation"
import Script from "next/script"

import { siteConfig } from "@/config/site"
import { getAllFilesFrontMatter, getFileBySlug } from "@/lib/mdx"
import { generateBlogPostSchema, generateBreadcrumbs } from "@/lib/schema"
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
    const post = await getFileBySlug<PostFrontMatter>("blog", slug)
    const frontMatter = post.frontMatter as PostFrontMatter
    const customImages = frontMatter?.images || []
    const ogImage = customImages.length > 0
      ? customImages[0].startsWith("http")
        ? customImages[0]
        : `${siteConfig.siteUrl}${customImages[0]}`
      : undefined

    return {
      title: frontMatter?.title || "Blog Post",
      description: frontMatter?.summary || "",
      authors: [{ name: siteConfig.author }],
      openGraph: {
        title: frontMatter?.title || "Blog Post",
        description: frontMatter?.summary || "",
        type: "article",
        publishedTime: frontMatter?.date || undefined,
        modifiedTime: frontMatter?.lastmod || frontMatter?.date || undefined,
        url: `${siteConfig.siteUrl}/blog/${slug}`,
        siteName: siteConfig.name,
        ...(ogImage && {
          images: [{ url: ogImage, width: 1200, height: 630, alt: frontMatter?.title || "Blog Post" }],
        }),
        authors: [siteConfig.author],
      },
      twitter: {
        card: "summary_large_image",
        title: frontMatter?.title || "Blog Post",
        description: frontMatter?.summary || "",
        ...(ogImage && { images: [ogImage] }),
        creator: siteConfig.twitterHandle,
      },
      alternates: {
        canonical: frontMatter?.canonicalUrl || `${siteConfig.siteUrl}/blog/${slug}`,
      },
    }
  } catch {
    return {
      title: "Blog Post",
    }
  }
}

interface BlogPost {
  mdxSource: string
  toc: { value: string; url: string; depth: number }[]
  frontMatter: PostFrontMatter
}

const BlogPostPage = async (props: BlogPostPageProps) => {
  const params = await props.params
  const slug = params.slug

  // Get the current post
  let post: BlogPost
  try {
    post = (await getFileBySlug<PostFrontMatter>("blog", slug)) as BlogPost
  } catch (error) {
    console.error("Error loading blog post:", error)
    notFound()
  }

  const { mdxSource, toc, frontMatter } = post

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

  // Generate breadcrumb + article + FAQ schemas
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: frontMatter.title },
  ])

  const schemas = generateBlogPostSchema({
    title: frontMatter.title,
    summary: frontMatter.summary,
    date: frontMatter.date,
    lastmod: frontMatter.lastmod,
    slug,
    images: frontMatter.images,
    toc,
    mdxSource,
  })

  return (
    <>
      <Script
        id="blog-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      {schemas.map((schema, i) => (
        <Script
          key={i}
          id={`blog-schema-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <PostLayout frontMatter={frontMatter} toc={toc} prev={prev} next={next}>
        <MDXLayoutRenderer mdxSource={mdxSource} />
      </PostLayout>
    </>
  )
}

export default BlogPostPage
