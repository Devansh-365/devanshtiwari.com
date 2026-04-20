"use client"

import Image from "next/image"
import { USER } from "@/features/portfolio/data/user"
import { TextFlip } from "@/components/text-flip"
import { TextReveal } from "@/components/text-reveal"
import { LiveClock } from "@/components/live-clock"

export function ProfileHeader() {
  return (
    <div className="screen-line-bottom border-x border-line">
      <div className="flex items-start justify-between gap-4 px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="flex min-w-0 flex-1 flex-col gap-5 md:gap-6">
          <h1 className="text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl">
            <TextReveal text={USER.displayName} delay={0.2} instant />
            <span className="sr-only">
              {" "}
              — Product Engineer at Metis, AI infrastructure
            </span>
          </h1>

          <div className="h-6 md:h-7">
            <TextFlip
              texts={USER.flipSentences}
              interval={2.5}
              className="text-base text-muted-foreground md:text-lg"
            />
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-[11px]">
            <span>{USER.address}</span>
            <Divider />
            <LiveClock />
            <Divider />
            <span className="inline-flex items-center gap-1.5 text-foreground/80">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-foreground/40" />
                <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-foreground" />
              </span>
              Open to work
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <Image
            className="h-16 w-16 select-none rounded-full ring-1 ring-border ring-offset-2 ring-offset-background grayscale transition-[filter] duration-500 hover:grayscale-0 md:h-24 md:w-24"
            alt="Devansh Tiwari"
            src={USER.avatar}
            width={96}
            height={96}
            priority
          />
        </div>
      </div>
    </div>
  )
}

function Divider() {
  return <span aria-hidden className="text-line">/</span>
}
