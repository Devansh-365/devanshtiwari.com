"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export function ProjectCanvasProbe({
  canvasUrl,
  canvasScreenshotUrl,
  projectTitle,
}: {
  canvasUrl?: string
  canvasScreenshotUrl?: string
  projectTitle: string
}) {
  const [open, setOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  if (!canvasUrl) return null

  const showIframePreview = !canvasScreenshotUrl || imgError

  return (
    <>
      <div className="px-4 py-6">
        <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          The Thinking Behind
        </h2>

        <div className="rounded-[2rem] bg-black/[0.02] p-1.5 ring-1 ring-black/[0.04] dark:bg-white/[0.02] dark:ring-white/[0.06]">
          <div className="relative overflow-hidden rounded-[calc(2rem-0.375rem)] bg-[hsl(var(--background))] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
            <div className="relative aspect-[16/10]">
              {!showIframePreview && canvasScreenshotUrl ? (
                <Image
                  src={canvasScreenshotUrl}
                  alt={`${projectTitle} thinking canvas`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  onError={() => setImgError(true)}
                />
              ) : (
                <iframe
                  src={canvasUrl}
                  className="h-full w-full border-0"
                  title={`${projectTitle} thinking canvas preview`}
                  sandbox="allow-scripts allow-same-origin"
                />
              )}

              <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-background/90 via-background/30 to-transparent pb-6">
                <button
                  onClick={() => setOpen(true)}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-background/95 px-5 py-2.5 font-mono text-xs font-medium text-foreground ring-1 ring-[hsl(var(--line))] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)] active:scale-[0.98] dark:hover:shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
                  style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                >
                  <span>Explore the thinking</span>
                  <span
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ transitionTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)" }}
                  >
                    <Expand className="h-3 w-3" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="h-[85vh] w-[90vw] max-h-[85vh] max-w-[90vw] overflow-hidden border-[hsl(var(--line))] p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>The Thinking Behind {projectTitle}</DialogTitle>
            <DialogDescription>
              Interactive canvas showing the product thinking behind this project
            </DialogDescription>
          </DialogHeader>
          <iframe
            src={canvasUrl}
            className="h-full w-full border-0"
            title={`${projectTitle} thinking canvas`}
            allow="clipboard-write; autoplay"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
