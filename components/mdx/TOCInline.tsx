"use client"

import { useState } from "react"
import { ChevronDownIcon, ListIcon } from "lucide-react"
import { Toc } from "@/types/Toc"
import { cn } from "@/lib/utils"

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

  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i")

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value)
  )

  if (filteredToc.length === 0) return null

  const tocList = (
    <ul className="not-prose space-y-1">
      {filteredToc.map((heading) => (
        <li
          key={heading.value}
          className={cn(
            heading.depth >= indentDepth && "ml-4"
          )}
        >
          <a
            className={cn(
              "inline-flex items-center gap-2 rounded-md px-2 py-1.5 font-sans text-sm text-muted-foreground no-underline transition-colors hover:bg-accent/50 hover:text-foreground",
              heading.depth === 2 && "font-medium",
              heading.depth >= 3 && "text-xs"
            )}
            href={heading.url}
          >
            {heading.depth >= 3 && (
              <span className="h-px w-3 bg-muted-foreground/30" />
            )}
            {heading.value}
          </a>
        </li>
      ))}
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
        {isOpen && (
          <div id="toc-content" className="border-t border-line px-4 py-3">
            {tocList}
          </div>
        )}
      </div>
    )
  }

  return tocList
}

export default TOCInline
