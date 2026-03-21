"use client"

import { DownloadIcon, ExternalLinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const PDF_URL = "/resume.pdf"
const FILENAME = "Devansh_PM_Resume.pdf"

export function ResumeClient() {
  return (
    <div className="flex flex-col">
      {/* Toolbar */}
      <div className="screen-line-bottom flex items-center justify-between gap-2 px-4 py-2">
        <span className="truncate font-mono text-xs text-muted-foreground">
          {FILENAME}
        </span>

        <div className="flex shrink-0 items-center gap-1">
          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Open in new tab"
          >
            <ExternalLinkIcon className="h-4 w-4" />
          </a>

          <a
            href={PDF_URL}
            download={FILENAME}
            className={cn(
              "inline-flex h-7 items-center gap-1.5 rounded-md bg-foreground px-2.5 text-background transition-opacity hover:opacity-90",
              "font-mono text-xs font-medium"
            )}
            aria-label="Download resume"
          >
            <DownloadIcon className="h-3.5 w-3.5" />
            Download
          </a>
        </div>
      </div>

      {/* PDF embed — aspect-[1/1.414] matches A4 ratio exactly, overflow hidden clips the gray */}
      <div className="relative aspect-[1/1.414] w-full overflow-hidden">
        <iframe
          src={`${PDF_URL}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
          className="absolute inset-0 h-[calc(100%+4px)] w-full border-0"
          title="Resume PDF"
        />
      </div>

      {/* Footer */}
      <div className="screen-line-top px-4 py-2">
        <p className="font-mono text-[11px] tracking-wide text-muted-foreground">
          {FILENAME}
        </p>
      </div>
    </div>
  )
}
