import { Metadata } from "next"
import { USES } from "@/features/uses/data/uses"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
  title: "Uses",
  description: "Tools, hardware, and software I use daily.",
  alternates: {
    canonical: `${siteConfig.siteUrl}/uses`,
  },
}

export default function UsesPage() {
  return (
    <div className="mx-auto max-w-full overflow-x-hidden md:max-w-3xl">
      <div className="screen-line-bottom border-x border-line px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <h1 className="font-sans text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Uses
        </h1>
        <p className="mt-2 font-mono text-sm text-muted-foreground">
          Tools, hardware, and software I use daily.
        </p>
      </div>

      <div className="border-x border-line divide-y divide-line">
        {USES.map((section) => (
          <section key={section.category} className="px-4 py-6 sm:px-6">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {section.category}
            </h2>
            <ul className="flex flex-col gap-3">
              {section.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-sm font-medium text-foreground underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-foreground transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="font-sans text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                  )}
                  {item.description && (
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="screen-line-top h-4 w-full border-x border-line" />
    </div>
  )
}
