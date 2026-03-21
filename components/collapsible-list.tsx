"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type CollapsibleListProps<T> = {
  items: T[]
  max: number
  renderItem: (item: T) => React.ReactNode
}

export function CollapsibleList<T extends { id: string }>({ items, max, renderItem }: CollapsibleListProps<T>) {
  const [showAll, setShowAll] = useState(false)
  const visibleItems = showAll ? items : items.slice(0, max)
  const hasMore = items.length > max

  return (
    <div>
      {visibleItems.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
      {hasMore && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="screen-line-top flex w-full items-center justify-center gap-1 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Show {items.length - max} more
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
