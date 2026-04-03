import { siteConfig } from "@/config/site"
import type { Toc } from "@/types/Toc"

/**
 * Extracts FAQ schema from blog post TOC + raw MDX content.
 *
 * How it works:
 * 1. Scans TOC for question-style headings (ends with ?)
 * 2. Finds the first paragraph after each question heading in the MDX source
 * 3. Returns a valid FAQPage JSON-LD schema
 *
 * This is fully automatic — any blog post with question headings gets FAQ schema.
 * No manual frontmatter config needed.
 */
export function generateFAQSchema(
  toc: Toc,
  mdxSource: string
): Record<string, unknown> | null {
  // Find all question-based headings
  const questionHeadings = toc.filter(
    (h) => h.value.trim().endsWith("?") && h.depth <= 3
  )

  if (questionHeadings.length === 0) return null

  // Split MDX into lines for paragraph extraction
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
 * Finds the first non-empty paragraph after a markdown heading.
 * Handles ## and ### headings. Strips markdown formatting from the answer.
 */
function extractFirstParagraph(
  lines: string[],
  headingText: string
): string | null {
  // Find the line that contains this heading
  const headingIndex = lines.findIndex((line) => {
    const stripped = line.replace(/^#{1,6}\s+/, "").trim()
    return stripped === headingText
  })

  if (headingIndex === -1) return null

  // Collect the first paragraph after the heading
  // A paragraph is consecutive non-empty, non-heading, non-list-marker lines
  const paragraphLines: string[] = []
  let foundContent = false

  for (let i = headingIndex + 1; i < lines.length; i++) {
    const line = lines[i].trim()

    // Stop at next heading
    if (line.startsWith("#")) break

    // Skip empty lines before content starts
    if (!line && !foundContent) continue

    // Empty line after content means paragraph ended
    if (!line && foundContent) break

    // Skip markdown images, code blocks, html
    if (line.startsWith("![") || line.startsWith("```") || line.startsWith("<")) break

    // Skip list items — take only prose paragraphs
    if (line.startsWith("- ") || line.startsWith("* ") || line.match(/^\d+\./)) break

    foundContent = true
    paragraphLines.push(line)
  }

  if (paragraphLines.length === 0) return null

  // Clean markdown formatting
  return paragraphLines
    .join(" ")
    .replace(/\*\*(.*?)\*\*/g, "$1") // bold
    .replace(/\*(.*?)\*/g, "$1") // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/`([^`]+)`/g, "$1") // inline code
    .trim()
}

/**
 * Generates the full Article + FAQ combined schema for a blog post.
 * Call this from the blog post page component.
 */
export function generateBlogPostSchema({
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
  const postImages = (images || [siteConfig.socialBanner]).map((img) => ({
    "@type": "ImageObject",
    url: img.startsWith("http") ? img : `${siteConfig.siteUrl}${img}`,
  }))

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    headline: title,
    description: summary,
    image: postImages,
    datePublished: date ? new Date(date).toISOString() : undefined,
    dateModified: lastmod
      ? new Date(lastmod).toISOString()
      : date
        ? new Date(date).toISOString()
        : undefined,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: siteConfig.author,
      url: siteConfig.siteUrl,
    },
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

  // Return array of schemas — both get injected as separate script tags
  return faqSchema ? [articleSchema, faqSchema] : [articleSchema]
}
