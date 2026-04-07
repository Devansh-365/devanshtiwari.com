"use client"

import Link from "next/link"
import { ReactNode } from "react"
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"
import { ContactBar } from "@/components/contact-bar"

import { PostFrontMatter } from "@/types/PostFrontMatter"
import { Toc } from "@/types/Toc"
import TOCInline from "@/components/mdx/TOCInline"

interface Props {
  frontMatter: PostFrontMatter
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  toc?: Toc
  children: ReactNode
}

export default function PostLayout({
  frontMatter,
  next,
  prev,
  toc,
  children,
}: Props) {
  const { title, summary, date, readingTime } = frontMatter

  return (
    <>
      {/* Back link + nav */}
      <div className="flex items-center justify-between p-2 pl-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Blog
        </Link>

        <div className="flex items-center gap-2">
          {prev && (
            <Link
              href={`/blog/${prev.slug}`}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:text-foreground"
              title={`Previous: ${prev.title}`}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Link>
          )}
          {next && (
            <Link
              href={`/blog/${next.slug}`}
              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-secondary text-muted-foreground transition-colors hover:text-foreground"
              title={`Next: ${next.title}`}
            >
              <ArrowRightIcon className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Link>
          )}
        </div>
      </div>

      {/* Separator stripe */}
      <div className="screen-line-top screen-line-bottom relative h-8 overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] [background-size:10px_10px]" />
      </div>

      {/* Prose content area */}
      <div className={[
        "prose prose-sm max-w-none px-4 font-mono dark:prose-invert",
        // Base text — mono, muted (matches ProseMono used across portfolio)
        "text-sm text-muted-foreground",
        // Headings — sans, foreground, tight tracking
        "prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground",
        "prose-h1:text-3xl prose-h2:text-xl prose-h3:text-lg",
        // Paragraphs — mono, muted, relaxed
        "prose-p:font-mono prose-p:text-sm prose-p:leading-relaxed prose-p:text-muted-foreground",
        // Lists — mono, muted
        "prose-li:font-mono prose-li:text-sm prose-li:text-muted-foreground prose-li:marker:text-muted-foreground/50",
        // Blockquote — mono, border accent
        "prose-blockquote:font-mono prose-blockquote:border-l-2 prose-blockquote:border-primary/30 prose-blockquote:pl-4 prose-blockquote:not-italic prose-blockquote:text-foreground/80",
        // Links — foreground, underline
        "prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-muted-foreground/30 hover:prose-a:decoration-foreground",
        // Strong — foreground weight
        "prose-strong:font-semibold prose-strong:text-foreground",
        // Inline code — only target code NOT inside pre (preserves shiki tokens)
        "[&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-muted [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-xs [&_:not(pre)>code]:font-normal [&_:not(pre)>code]:text-foreground [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none",
        // Pre block container — let shiki handle colors via Pre.tsx wrapper
        "prose-pre:!bg-transparent prose-pre:!p-0 prose-pre:!border-0",
        // Images
        "prose-img:rounded-xl",
        // Table — reset prose defaults, our Table components handle styling
        "[&_table]:!my-0 [&_thead]:!border-none [&_tr]:!border-none [&_th]:!px-4 [&_th]:!py-3 [&_td]:!px-4 [&_td]:!py-3",
      ].join(" ")}>
        <h1 className="font-sans text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>

        {(date || readingTime?.text) && (
          <div className="not-prose flex items-center gap-2 font-mono text-xs text-muted-foreground">
            {date && (
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            )}
            {date && readingTime?.text && <span>·</span>}
            {readingTime?.text && <span>{readingTime.text}</span>}
          </div>
        )}

        {summary && (
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">{summary}</p>
        )}

        {toc && toc.length > 0 && (
          <TOCInline toc={toc} asDisclosure />
        )}

        <div>{children}</div>
      </div>

      {/* Contact */}
      <ContactBar />

      {/* Footer spacer */}
      <div className="screen-line-top h-4 w-full" />
    </>
  )
}
