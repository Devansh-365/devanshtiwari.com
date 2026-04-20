import { siteConfig } from "@/config/site"
import type { Toc } from "@/types/Toc"
import type { WorkProject } from "@/features/work/types/project"

// ── Shared helpers ──

const PROGRAMMING_LANGUAGES = [
  "TypeScript", "JavaScript", "Python", "Go", "SQL", "Rust", "Java", "C++",
]

/** Resolves a relative or absolute image path to a full URL */
function resolveImageUrl(src: string): string {
  return src.startsWith("http") ? src : `${siteConfig.siteUrl}${src}`
}

/** Shared author reference linking back to the Person entity in layout.tsx */
function authorRef() {
  return {
    "@type": "Person" as const,
    "@id": `${siteConfig.siteUrl}/#person`,
    name: siteConfig.author,
    url: siteConfig.siteUrl,
  }
}

// ── Breadcrumbs ──

/**
 * Generates BreadcrumbList JSON-LD schema.
 *
 * Usage:
 *   generateBreadcrumbs([
 *     { name: "Home", href: "/" },
 *     { name: "Work", href: "/work" },
 *     { name: "UnifyHQ" },
 *   ])
 *
 * Last item has no href (current page).
 * Google displays these in search results as: Home > Work > UnifyHQ
 */
export function generateBreadcrumbs(
  items: { name: string; href?: string }[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.href && { item: `${siteConfig.siteUrl}${item.href}` }),
    })),
  }
}

// ── Work Projects ──

/**
 * Generates all JSON-LD schemas for a work project page.
 * Returns an array of schema objects (breadcrumbs + project).
 *
 * Automatically picks the right @type:
 *   - SoftwareApplication if the project has a liveUrl or githubUrl
 *   - CreativeWork otherwise
 *
 * To add a new project: just add it to WORK_PROJECTS in projects.ts.
 * This function handles the rest.
 */
export function generateWorkProjectSchemas(project: WorkProject) {
  const slug = project.slug
  const isSoftware = !!(project.liveUrl || project.githubUrl)

  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: project.title },
  ])

  const languages = project.tech
    .filter((t) => PROGRAMMING_LANGUAGES.includes(t))

  const projectSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": isSoftware ? "SoftwareApplication" : "CreativeWork",
    name: project.title,
    description: project.oneLiner,
    url: project.liveUrl || `${siteConfig.siteUrl}/work/${slug}`,
    author: authorRef(),
  }

  // Software-specific fields
  if (isSoftware) {
    projectSchema.applicationCategory = "WebApplication"
    projectSchema.operatingSystem = "Web"
    if (project.liveUrl) projectSchema.installUrl = project.liveUrl
    projectSchema.offers = {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    }
  }

  if (project.githubUrl) {
    projectSchema.codeRepository = project.githubUrl
  }

  if (project.thumbnail) {
    projectSchema.image = resolveImageUrl(project.thumbnail)
  }

  if (project.tech.length > 0) {
    projectSchema.keywords = project.tech.join(", ")
  }

  if (languages.length > 0) {
    projectSchema.programmingLanguage = languages.join(", ")
  }

  if (project.stats && project.stats.length > 0) {
    projectSchema.abstract = project.stats
      .map((s) => `${s.value} ${s.label}`)
      .join(". ") + "."
  }

  return [breadcrumbs, projectSchema]
}

// ── Work Collection ──

/**
 * Generates CollectionPage + ItemList schema for the /work index page.
 * Lets Google understand it as a portfolio of projects.
 */
export function generateWorkCollectionSchemas(projects: WorkProject[]) {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Work" },
  ])

  const itemList = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.siteUrl}/work`,
    url: `${siteConfig.siteUrl}/work`,
    name: "Work",
    description:
      "Real products shipped for real clients. Not case studies. Actual systems running in production.",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    about: authorRef(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${siteConfig.siteUrl}/work/${p.slug}`,
        name: p.title,
      })),
    },
  }

  return [breadcrumbs, itemList]
}

// ── Blog Collection ──

/**
 * Generates Blog + ItemList schema for the /blog index page.
 */
export function generateBlogCollectionSchemas(
  posts: { slug: string; title: string; date: string; summary?: string; href: string }[]
) {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Blog" },
  ])

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${siteConfig.siteUrl}/blog`,
    url: `${siteConfig.siteUrl}/blog`,
    name: `${siteConfig.author} — Blog`,
    description:
      "Writing on cost-optimized LLM infrastructure, multi-provider AI routing, product engineering, and shipping AI products end-to-end.",
    isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
    author: authorRef(),
    publisher: {
      "@type": "Organization",
      name: siteConfig.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}${siteConfig.siteLogo}`,
      },
    },
    blogPost: posts.slice(0, 20).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: p.href.startsWith("http") ? p.href : `${siteConfig.siteUrl}${p.href}`,
      datePublished: p.date ? new Date(p.date).toISOString() : undefined,
      description: p.summary,
      author: authorRef(),
    })),
  }

  return [breadcrumbs, blogSchema]
}

// ── Blog Posts ──

/**
 * Extracts FAQ schema from blog post TOC + raw MDX content.
 *
 * Fully automatic: any blog post with question headings (ending with ?)
 * gets FAQPage schema. No manual frontmatter config needed.
 */
export function generateFAQSchema(
  toc: Toc,
  mdxSource: string
): Record<string, unknown> | null {
  const questionHeadings = toc.filter(
    (h) => h.value.trim().endsWith("?") && h.depth <= 3
  )

  if (questionHeadings.length === 0) return null

  const lines = mdxSource.split("\n")

  const faqItems = questionHeadings
    .map((heading) => {
      const answer = extractFirstParagraph(lines, heading.value)
      if (!answer) return null
      return {
        "@type": "Question",
        name: heading.value,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      }
    })
    .filter(Boolean)

  if (faqItems.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  }
}

/**
 * Generates all JSON-LD schemas for a blog post page.
 * Returns an array: [breadcrumbs, article, faq?]
 *
 * FAQ schema is auto-detected from question-based headings.
 * To get FAQ schema: just write headings that end with "?"
 */
export function generateBlogPostSchemas({
  title,
  summary,
  date,
  lastmod,
  slug,
  images,
  toc,
  mdxSource,
}: {
  title: string
  summary?: string
  date?: string
  lastmod?: string
  slug: string
  images?: string[]
  toc: Toc
  mdxSource: string
}) {
  const postUrl = `${siteConfig.siteUrl}/blog/${slug}`

  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: title },
  ])

  const postImages = (images || [siteConfig.socialBanner]).map((img) => ({
    "@type": "ImageObject",
    url: resolveImageUrl(img),
  }))

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    headline: title,
    description: summary,
    image: postImages,
    datePublished: date ? new Date(date).toISOString() : undefined,
    dateModified: lastmod
      ? new Date(lastmod).toISOString()
      : date
        ? new Date(date).toISOString()
        : undefined,
    author: authorRef(),
    publisher: {
      "@type": "Organization",
      name: siteConfig.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.siteUrl}${siteConfig.siteLogo}`,
      },
    },
  }

  const faqSchema = generateFAQSchema(toc, mdxSource)

  return faqSchema
    ? [breadcrumbs, articleSchema, faqSchema]
    : [breadcrumbs, articleSchema]
}

// ── Internal helpers ──

function extractFirstParagraph(
  lines: string[],
  headingText: string
): string | null {
  const headingIndex = lines.findIndex((line) => {
    const stripped = line.replace(/^#{1,6}\s+/, "").trim()
    return stripped === headingText
  })

  if (headingIndex === -1) return null

  const paragraphLines: string[] = []
  let foundContent = false

  for (let i = headingIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim()

    if (line.startsWith("#")) break
    if (!line && !foundContent) continue
    if (!line && foundContent) break
    if (line.startsWith("![") || line.startsWith("```") || line.startsWith("<")) break
    if (line.startsWith("- ") || line.startsWith("* ") || line.match(/^\d+\./)) break

    foundContent = true
    paragraphLines.push(line)
  }

  if (paragraphLines.length === 0) return null

  return paragraphLines
    .join(" ")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim()
}
