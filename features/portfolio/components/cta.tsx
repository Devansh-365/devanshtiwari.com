import { ContactActions } from "@/components/contact-actions"
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

        <ContactActions
          size="md"
          className="mt-6 flex-col justify-center sm:flex-row"
        />
      </div>
    </Panel>
  )
}
