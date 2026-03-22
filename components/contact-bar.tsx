import { CalendarIcon, MailIcon } from "lucide-react"

export function ContactBar() {
  return (
    <div className="screen-line-top flex flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <p className="font-mono text-sm text-muted-foreground">
        Interested in working together?
      </p>
      <div className="flex items-center gap-2">
        <a
          href="https://cal.com/devansh0718/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md bg-foreground px-2.5 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
        >
          <CalendarIcon className="h-3.5 w-3.5" />
          Book a call
        </a>
        <a
          href="mailto:devanshtiwari365@gmail.com"
          className="inline-flex h-7 cursor-pointer items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <MailIcon className="h-3.5 w-3.5" />
          Email
        </a>
      </div>
    </div>
  )
}
