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
      <div className="prose prose-lg max-w-none px-4 dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:leading-7 prose-a:underline prose-a:underline-offset-4 prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-pre:bg-zinc-900 prose-pre:text-zinc-100 prose-img:rounded-xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          {title}
        </h1>

        {(date || readingTime?.text) && (
          <div className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
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
          <p className="text-muted-foreground">{summary}</p>
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
