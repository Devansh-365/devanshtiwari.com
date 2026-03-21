"use client"

import { SearchIcon, XIcon } from "lucide-react"
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
      <div className="relative pt-4">
        {filtered.length >= 2 && (
          <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-line" />
            <div className="border-l border-line" />
          </div>
        )}

        <div className={cn(
          "grid grid-cols-1 gap-4",
          filtered.length >= 2 && "sm:grid-cols-2"
        )}>
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={cn(
                "group flex cursor-pointer flex-col gap-2 p-2 transition-colors ease-out hover:bg-accent/50",
                "screen-line-top screen-line-bottom"
              )}
            >
              <div className="flex flex-col gap-1 p-2">
                <h3 className="text-lg font-medium leading-snug text-balance">
                  {post.title}
                </h3>
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
                </div>
              </div>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="screen-line-top screen-line-bottom p-4">
              <p className="font-mono text-sm">No posts found.</p>
            </div>
          )}
        </div>
      </div>

      <div className="h-4" />
    </div>
  )
}
