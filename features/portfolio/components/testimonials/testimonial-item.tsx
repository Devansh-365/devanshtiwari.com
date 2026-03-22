import Image from "next/image"
import { cn } from "@/lib/utils"
import type { Testimonial } from "../../types/testimonials"

function getInitials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

export function TestimonialItem({
  className,
  authorAvatar,
  authorName,
  authorTagline,
  url,
  quote,
}: Testimonial & { className?: string }) {
  const Wrapper = url && url !== "#" ? "a" : "div"
  const linkProps =
    url && url !== "#"
      ? { href: url, target: "_blank" as const, rel: "noopener" }
      : {}

  return (
    <Wrapper
      {...linkProps}
      className={cn(
        "flex h-[280px] flex-col rounded-xl border border-line p-4 transition-colors ease-out hover:bg-accent/50 sm:h-[240px]",
        className
      )}
    >
      <p className="text-sm leading-relaxed text-foreground">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-auto flex items-center gap-2 pt-3">
        {authorAvatar ? (
          <Image
            src={authorAvatar}
            alt={authorName}
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
            unoptimized
          />
        ) : (
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted font-mono text-[10px] font-medium text-muted-foreground">
            {getInitials(authorName)}
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-xs font-medium">{authorName}</p>
          {authorTagline && (
            <p className="truncate text-[10px] text-muted-foreground">
              {authorTagline}
            </p>
          )}
        </div>
      </div>
    </Wrapper>
  )
}
