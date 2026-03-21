"use client"

import { cn } from "@/lib/utils"

export function ProfileCover() {
  return (
    <div
      className={cn(
        "aspect-[2/1] border-x border-line select-none sm:aspect-[3/1]",
        "flex items-center justify-center text-foreground",
        "screen-line-top screen-line-bottom",
        "bg-[radial-gradient(hsl(var(--foreground)/0.05)_1px,transparent_0)] [background-size:10px_10px] bg-center"
      )}
    >
      <div
        id="js-cover-mark"
        className="flex h-14 w-14 items-center justify-center rounded-xl bg-foreground text-2xl font-bold text-background sm:h-16 sm:w-16 sm:text-3xl"
      >
        DT
      </div>
    </div>
  )
}
