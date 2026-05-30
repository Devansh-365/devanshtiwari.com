"use client"

import { useState, useCallback } from "react"
import { ChevronDownIcon, ListIcon } from "lucide-react"
import { Toc } from "@/types/Toc"
import { cn } from "@/lib/utils"

const HEADER_OFFSET = 72 // sticky header height + breathing room

interface TOCInlineProps {
  toc: Toc
  indentDepth?: number
  fromHeading?: number
  toHeading?: number
  asDisclosure?: boolean
  exclude?: string | string[]
}

const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = "",
}: TOCInlineProps) => {
  const [isOpen, setIsOpen] = useState(true)
  const [activeId, setActiveId] = useState<string | null>(null)

  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i")

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  )

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
      e.preventDefault()

      const id = url.replace("#", "")
      const el = document.getElementById(id)
      if (!el) return

      setActiveId(id)

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET

      window.scrollTo({
        top,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      })

      // Update URL hash without jumping
      window.history.pushState(null, "", url)

      // Clear active highlight after scroll settles
      setTimeout(() => setActiveId(null), 1500)
    },
    []
  )

  if (filteredToc.length === 0) return null

  const tocList = (
    <ul className="not-prose space-y-0.5">
      {filteredToc.map((heading) => {
        const id = heading.url.replace("#", "")
        const isActive = activeId === id

        return (
          <li
            key={heading.value}
            className={cn(heading.depth >= indentDepth && "ml-4")}
          >
            <a
              className={cn(
                "inline-flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 font-sans text-sm text-muted-foreground no-underline transition-all duration-200 hover:bg-accent/50 hover:text-foreground",
                heading.depth === 2 && "font-medium",
                heading.depth >= 3 && "text-xs",
                isActive &&
                  "bg-primary/10 text-foreground"
              )}
              href={heading.url}
              onClick={(e) => handleClick(e, heading.url)}
            >
              {heading.depth >= 3 && (
                <span
                  className={cn(
                    "h-px w-3 transition-colors duration-200",
                    isActive
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  )}
                />
              )}
              {heading.value}
            </a>
          </li>
        )
      })}
    </ul>
  )

  if (asDisclosure) {
    return (
      <div className="not-prose my-6 rounded-lg border border-line bg-muted/20">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-accent/30"
          aria-expanded={isOpen}
          aria-controls="toc-content"
        >
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-muted-foreground/15 bg-muted text-muted-foreground">
            <ListIcon className="h-3.5 w-3.5" />
          </div>
          <span className="flex-1 font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Table of Contents
          </span>
          <ChevronDownIcon
            className={cn(
              "h-4 w-4 text-muted-foreground transition-transform duration-200",
              !isOpen && "-rotate-90"
            )}
          />
        </button>
        <div
          id="toc-content"
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen
              ? "grid-rows-[1fr] border-t border-line opacity-100"
              : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div className="px-4 py-3">{tocList}</div>
          </div>
        </div>
      </div>
    )
  }

  return tocList
}

export default TOCInline
