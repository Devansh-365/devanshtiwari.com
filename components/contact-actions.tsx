"use client"

import { CalendarIcon, MailIcon } from "lucide-react"
import { siteConfig } from "@/config/site"
import { trackBookCall, trackEmailClick } from "@/lib/analytics"
import { MagneticButton } from "@/components/magnetic-button"
import { cn } from "@/lib/utils"

type ContactActionsProps = {
  size?: "sm" | "md"
  className?: string
}

export function ContactActions({ size = "md", className }: ContactActionsProps) {
  const isSmall = size === "sm"

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <MagneticButton>
        <a
          href={siteConfig.calUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackBookCall(isSmall ? "contact-bar" : "cta")}
          className={cn(
            "inline-flex cursor-pointer items-center gap-1.5 rounded-md bg-foreground font-mono font-medium text-background transition-opacity hover:opacity-90",
            isSmall ? "h-7 px-2.5 text-xs" : "h-9 gap-2 px-4 text-sm"
          )}
        >
          <CalendarIcon className={isSmall ? "h-3.5 w-3.5" : "h-4 w-4"} />
          {isSmall ? "Book a call" : "Book a 15-min call"}
        </a>
      </MagneticButton>

      <MagneticButton>
        <a
          href={`mailto:${siteConfig.email}`}
          onClick={() => trackEmailClick(isSmall ? "contact-bar" : "cta")}
          className={cn(
            "inline-flex cursor-pointer items-center gap-1.5 rounded-md border border-line font-mono font-medium text-muted-foreground transition-colors hover:text-foreground",
            isSmall ? "h-7 px-2.5 text-xs" : "h-9 gap-2 px-4 text-sm"
          )}
        >
          <MailIcon className={isSmall ? "h-3.5 w-3.5" : "h-4 w-4"} />
          {isSmall ? "Email" : siteConfig.email}
        </a>
      </MagneticButton>
    </div>
  )
}
