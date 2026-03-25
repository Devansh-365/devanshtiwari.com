import { ContactActions } from "@/components/contact-actions"

export function ContactBar() {
  return (
    <div className="screen-line-top flex flex-col items-center gap-3 px-4 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
      <p className="font-mono text-sm text-muted-foreground">
        Interested in working together?
      </p>
      <ContactActions size="sm" />
    </div>
  )
}
