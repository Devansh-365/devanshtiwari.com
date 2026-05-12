import { ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import type { Post } from "../types"

type PostCardProps = {
  post: Post
  /**
   * compact — title + meta only (used in homepage preview panel)
   * full    — title + meta + summary (used in /blog list)
   */
  variant?: "compact" | "full"
}

function formatViews(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return String(n)
}

export function PostCard({ post, variant = "full" }: PostCardProps) {
  const isMedium = post.source === "medium"

  const inner = (
    <div className="flex flex-col gap-1 p-2">
      <div className="flex items-center gap-1.5">
        <h3 className="text-[15px] font-medium leading-snug text-balance group-hover:text-primary sm:text-base">
          {post.title}
        </h3>
        {isMedium && (
          <ExternalLinkIcon className="h-3 w-3 shrink-0 text-muted-foreground" />
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
        {!isMedium && post.views !== undefined && post.views > 0 && (
          <>
            <span>·</span>
            <span>{formatViews(post.views)} views</span>
          </>
        )}
        {isMedium && (
          <>
            <span>·</span>
            <span>Medium</span>
          </>
        )}
      </div>

      {variant === "full" && post.summary && (
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {post.summary}
        </p>
      )}
    </div>
  )

  const className =
    "group flex cursor-pointer flex-col gap-2 p-2 transition-colors ease-out hover:bg-accent/50 screen-line-top screen-line-bottom"

  if (isMedium) {
    return (
      <a href={post.href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    )
  }

  return (
    <Link href={post.href} className={className}>
      {inner}
    </Link>
  )
}
