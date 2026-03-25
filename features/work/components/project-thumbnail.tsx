import Image from "next/image"
import { ParallaxImage } from "@/components/parallax-image"

type ProjectThumbnailProps = {
  src: string
  alt: string
  url?: string
  /** "browser" for app screenshots, "banner" for marketing/hero images */
  type?: "browser" | "banner"
  /** "card" for listing, "detail" for project page */
  variant?: "card" | "detail"
}

/** Fixed aspect for both variants — keeps cards aligned */
const ASPECT = "aspect-[16/10]"

export function ProjectThumbnail({
  src,
  alt,
  url,
  type = "browser",
  variant = "card",
}: ProjectThumbnailProps) {
  if (type === "banner") {
    return <BannerThumbnail src={src} alt={alt} variant={variant} />
  }
  return <BrowserThumbnail src={src} alt={alt} url={url} variant={variant} />
}

/** Shared stage background used by both variants */
function ThumbnailStage({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-neutral-100 dark:bg-[hsl(0_0%_6%)] ${ASPECT} ${className}`}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 dark:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(0 0% 0% / 0.04) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(0 0% 100% / 0.07) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* Top-center glow */}
      <div className="pointer-events-none absolute -top-16 left-1/2 h-32 w-[60%] -translate-x-1/2 rounded-full bg-black/[0.02] blur-[60px] dark:bg-white/[0.04]" />

      {/* Bottom fade into stage bg */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-neutral-100 to-transparent dark:from-[hsl(0_0%_6%)]" />

      {children}
    </div>
  )
}

function BrowserThumbnail({
  src,
  alt,
  url,
  variant,
}: {
  src: string
  alt: string
  url?: string
  variant: "card" | "detail"
}) {
  const pad = variant === "card" ? "px-3 pt-4 sm:px-4" : "px-5 pt-5 sm:px-6"

  return (
    <ThumbnailStage>
      <div className={`absolute inset-0 flex flex-col ${pad}`}>
        {/* Browser chrome */}
        <div className="relative min-h-0 flex-1 select-none overflow-hidden rounded-t-lg border border-b-0 border-black/[0.08] bg-white shadow-[0_-4px_30px_rgba(0,0,0,0.08)] dark:border-white/[0.06] dark:bg-[hsl(0_0%_9%)] dark:shadow-[0_-4px_30px_rgba(0,0,0,0.4)]">
          {/* Title bar */}
          <div className="flex shrink-0 items-center px-3 py-[7px]">
            <div className="flex items-center gap-[5px]">
              <div className="h-[7px] w-[7px] rounded-full bg-black/[0.08] dark:bg-white/[0.08]" />
              <div className="h-[7px] w-[7px] rounded-full bg-black/[0.08] dark:bg-white/[0.08]" />
              <div className="h-[7px] w-[7px] rounded-full bg-black/[0.08] dark:bg-white/[0.08]" />
            </div>

            {url && (
              <div className="absolute inset-x-12 flex justify-center">
                <div className="flex h-[18px] items-center rounded-[5px] bg-black/[0.04] px-2.5 dark:bg-white/[0.04]">
                  <span className="truncate font-mono text-[8px] tracking-wide text-black/25 dark:text-white/20">
                    {url}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-black/[0.06] dark:bg-white/[0.04]" />

          {/* Screenshot with parallax */}
          <ParallaxImage
            src={src}
            alt={alt}
            width={1200}
            height={750}
            className="w-full object-cover object-top"
            strength={10}
          />
        </div>
      </div>
    </ThumbnailStage>
  )
}

function BannerThumbnail({
  src,
  alt,
  variant,
}: {
  src: string
  alt: string
  variant: "card" | "detail"
}) {
  const pad = variant === "card" ? "p-3 sm:p-4" : "p-4 sm:p-6"

  return (
    <ThumbnailStage>
      <div className={`absolute inset-0 flex items-center justify-center ${pad}`}>
        {/* Floating image card */}
        <div className="relative h-full w-full select-none overflow-hidden rounded-lg border border-black/[0.08] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:border-white/[0.06] dark:bg-[hsl(0_0%_9%)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            unoptimized={src.startsWith("http")}
          />
          {/* Top highlight */}
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]" />
        </div>
      </div>
    </ThumbnailStage>
  )
}
