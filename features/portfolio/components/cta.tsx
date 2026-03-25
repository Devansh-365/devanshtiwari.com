import { CalendarIcon, MailIcon } from "lucide-react"
import { MagneticButton } from "@/components/magnetic-button"
import { Panel } from "./panel"

export function CTA() {
  return (
    <Panel id="contact" className="before:content-none">
      <div className="p-6 text-center sm:p-8">
        <div className="flex items-center justify-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Available for opportunities
          </p>
        </div>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          I ship AI products from zero to production
        </h2>

        <p className="mx-auto mt-2 max-w-md font-mono text-sm text-muted-foreground">
          Open to product roles, contract work, and co-founding conversations.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <MagneticButton>
            <a
              href="https://cal.com/devansh0718/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md bg-foreground px-4 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              <CalendarIcon className="h-4 w-4" />
              Book a 15-min call
            </a>
          </MagneticButton>

          <MagneticButton>
            <a
              href="mailto:devanshtiwari365@gmail.com"
              className="inline-flex h-9 cursor-pointer items-center gap-2 rounded-md border border-line px-4 font-mono text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="h-4 w-4" />
              devanshtiwari365@gmail.com
            </a>
          </MagneticButton>
        </div>
      </div>
    </Panel>
  )
}
