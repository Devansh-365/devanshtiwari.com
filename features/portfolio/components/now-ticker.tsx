"use client"

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee"
import { NOW_ITEMS } from "@/features/portfolio/data/now"

export function NowTicker() {
  return (
    <div className="flex items-stretch border-x border-b border-line">
      <div className="inline-flex shrink-0 items-center gap-2 border-r border-line bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:px-4">
        <Dot />
        Now
      </div>
      <Marquee className="flex-1">
        <MarqueeContent speed={28} pauseOnHover autoFill loop={0}>
          {NOW_ITEMS.map((item, i) => (
            <MarqueeItem key={i} className="mx-6 flex items-center">
              <span className="font-mono text-xs text-muted-foreground">
                {item}
              </span>
              <span aria-hidden className="ml-6 text-line">
                /
              </span>
            </MarqueeItem>
          ))}
        </MarqueeContent>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
      </Marquee>
    </div>
  )
}

function Dot() {
  return (
    <span className="relative inline-flex h-1.5 w-1.5">
      <span className="absolute inset-0 animate-ping rounded-full bg-foreground/40" />
      <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
    </span>
  )
}
