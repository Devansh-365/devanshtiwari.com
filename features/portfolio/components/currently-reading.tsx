"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { currentlyReading } from "../data/currently-reading"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function CurrentlyReading() {
  const { title, author, cover, progress } = currentlyReading
  const [coverError, setCoverError] = useState(false)
  const barRef = useRef(null)
  const isInView = useInView(barRef, { once: true, margin: "-40px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <Panel id="reading">
      <PanelHeader>
        <PanelTitle>Currently Reading</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="flex items-start gap-4">
          <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded bg-muted shadow-md">
            {coverError ? (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-mono text-[10px] leading-tight text-muted-foreground text-center px-1">
                  {title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
            ) : (
              <Image
                src={cover}
                alt={`Cover of ${title}`}
                fill
                sizes="64px"
                className="object-cover"
                onError={() => setCoverError(true)}
              />
            )}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
            <div>
              <p className="font-sans text-sm font-semibold leading-tight text-foreground">
                {title}
              </p>
              <p className="font-mono text-xs text-muted-foreground">{author}</p>
            </div>

            <div ref={barRef} className="flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className="h-full rounded-full bg-foreground"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${progress}%` } : { width: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.8, ease: "easeOut", delay: 0.2 }
                  }
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}
