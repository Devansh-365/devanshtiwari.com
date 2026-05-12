"use client"

import { SearchIcon, XIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { PostCard } from "./post-card"
import type { Post } from "../types"

export function PostList({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.tags || []))
  ).sort()

  const filtered = posts.filter((p) => {
    const matchesQuery =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase())
    const matchesTag = !activeTag || (p.tags || []).includes(activeTag)
    return matchesQuery && matchesTag
  })

  return (
    <div className="min-h-svh">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl font-semibold leading-none tracking-tight">Blog</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          A collection of articles on development, design, and ideas.
        </p>
      </div>

      {/* Search */}
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
            autoFocus
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

      {/* Tag filter */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 screen-line-bottom">
          <button
            onClick={() => setActiveTag(null)}
            className={cn(
              "cursor-pointer rounded-md px-2.5 py-0.5 font-mono text-xs font-medium transition-colors",
              !activeTag
                ? "bg-foreground text-background"
                : "border border-line text-muted-foreground hover:text-foreground"
            )}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={cn(
                "cursor-pointer rounded-md px-2.5 py-0.5 font-mono text-xs font-medium transition-colors",
                activeTag === tag
                  ? "bg-foreground text-background"
                  : "border border-line text-muted-foreground hover:text-foreground"
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Post grid */}
      {(() => {
        const isOdd = filtered.length % 2 !== 0 && filtered.length > 0
        const gridPosts = isOdd ? filtered.slice(0, -1) : filtered
        const lastOddPost = isOdd ? filtered[filtered.length - 1] : null

        return (
          <div className="pt-4">
            {gridPosts.length >= 2 && (
              <div className="relative">
                <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
                  <div className="border-r border-line" />
                  <div className="border-l border-line" />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {gridPosts.map((post) => (
                    <PostCard key={post.href} post={post} variant="full" />
                  ))}
                </div>
              </div>
            )}

            {lastOddPost && <PostCard post={lastOddPost} variant="full" />}

            {gridPosts.length < 2 && !lastOddPost && filtered.length === 1 && (
              <PostCard post={filtered[0]} variant="full" />
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
