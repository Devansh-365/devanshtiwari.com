import Image from "next/image"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"

export default function OGPage() {
  return (
    <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
      {/* Top border + spacer */}
      <div className="screen-line-bottom grow border-x border-line">
        <div className="flex h-4" />
      </div>

      {/* Profile header */}
      <div className="screen-line-bottom border-x border-line">
        <div className="flex flex-col sm:flex-row">
          <div className="shrink-0 border-b border-line sm:border-b-0 sm:border-r">
            <div className="flex justify-start p-4 sm:mx-1 sm:my-1 sm:p-0">
              <Image
                className="h-[120px] w-[120px] rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none grayscale sm:h-[160px] sm:w-[160px]"
                alt="Avatar"
                src={USER.avatar}
                width={160}
                height={160}
                priority
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col">
            <div className="hidden grow items-end sm:flex" />

            <div className="sm:border-t sm:border-line">
              <div className="flex items-center gap-2 px-4 pt-3 sm:pt-0">
                <h1 className="text-2xl font-semibold tracking-tight sm:-translate-y-px sm:text-3xl">
                  {USER.displayName}
                </h1>
              </div>

              <div className="border-t border-line px-4 py-2 mt-2 sm:mt-0 sm:py-1 sm:h-9">
                <p className="text-sm text-balance text-muted-foreground">
                  {USER.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator />

      {/* Overview */}
      <div className="border-x border-line p-4">
        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          {USER.jobs.map((job, index) => (
            <div key={index} className="flex items-center gap-3 font-mono text-sm">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <span>{job.title} @ <strong>{job.company}</strong></span>
            </div>
          ))}

          <div className="flex items-center gap-3 font-mono text-sm">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span>{USER.address}</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-sm">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span>{USER.email}</span>
          </div>
        </div>
      </div>

      {/* Bottom border + spacer */}
      <div className="grow border-x border-line" />
    </div>
  )
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full overflow-hidden border-x border-line",
        "before:absolute before:inset-0",
        "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]",
        className
      )}
    />
  )
}
