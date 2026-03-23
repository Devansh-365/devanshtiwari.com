"use client"

import { ExternalLinkIcon, SearchIcon, XIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

type Post = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime?: { text: string }
  source?: "local" | "medium"
  href?: string
}

function PostCard({ post }: { post: Post }) {
  const isMedium = post.source === "medium"
  const href = post.href || `/blog/${post.slug}`

  const card = (
    <div className="flex flex-col gap-1 p-2">
      <div className="flex items-center gap-1.5">
        <h2 className="text-lg font-medium leading-snug text-balance">
          {post.title}
        </h2>
        {isMedium && (
          <ExternalLinkIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
        )}
      </div>
      <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
        <time dateTime={post.date}>
          {new Date(post.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        {post.readingTime?.text && (
          <>
            <span>·</span>
            <span>{post.readingTime.text}</span>
          </>
        )}
        {isMedium && (
          <>
            <span>·</span>
            <span>Medium</span>
          </>
        )}
      </div>
    </div>
  )

  if (isMedium) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex cursor-pointer flex-col gap-2 p-2 transition-colors ease-out hover:bg-accent/50 screen-line-top screen-line-bottom"
      >
        {card}
      </a>
    )
  }

  return (
    <Link
      href={href}
      className="group flex cursor-pointer flex-col gap-2 p-2 transition-colors ease-out hover:bg-accent/50 screen-line-top screen-line-bottom"
    >
      {card}
    </Link>
  )
}

export function BlogPageClient({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("")

  const filtered = query
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.summary.toLowerCase().includes(query.toLowerCase())
      )
    : posts

  return (
    <div className="min-h-svh">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl font-semibold leading-none tracking-tight">
          Blog
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          A collection of articles on development, design, and ideas.
        </p>
      </div>

      <div className="screen-line-top screen-line-bottom p-2">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search Blog…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setQuery("")
            }}
            aria-label="Search blog posts"
            className="flex h-9 w-full rounded-lg border border-input bg-background px-3 py-1 pl-9 pr-9 text-sm shadow-none transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring dark:bg-input/30"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground"
              aria-label="Clear"
            >
              <XIcon className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Post grid */}
      {(() => {
        const isOdd = filtered.length % 2 !== 0 && filtered.length > 0
        const gridPosts = isOdd ? filtered.slice(0, -1) : filtered
        const lastOddPost = isOdd ? filtered[filtered.length - 1] : null

        return (
          <div className="pt-4">
            {/* Paired grid */}
            {gridPosts.length >= 2 && (
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                  <div className="border-r border-line" />
                  <div className="border-l border-line" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {gridPosts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                  ))}
                </div>
              </div>
            )}

            {/* Single post outside the grid — no divider */}
            {lastOddPost && (
              <PostCard post={lastOddPost} />
            )}

            {/* Single post (when only 1 result) */}
            {gridPosts.length < 2 && !lastOddPost && filtered.length === 1 && (
              <PostCard post={filtered[0]} />
            )}

            {filtered.length === 0 && (
              <div className="screen-line-top screen-line-bottom p-4">
                <p className="font-mono text-sm">No posts found.</p>
              </div>
            )}
          </div>
        )
      })()}

      <div className="h-4" />
    </div>
  )
}
