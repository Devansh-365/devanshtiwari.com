import Link from "next/link"
import { ArrowLeftIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] flex-col border-x border-line md:max-w-3xl">
      {/* Stripe separator */}
      <div
        className={cn(
          "screen-line-bottom relative h-8 overflow-hidden",
          "before:absolute before:inset-0",
          "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]"
        )}
      />

      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-8xl font-bold tracking-tighter text-muted-foreground/20">
          404
        </p>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight">
          Page not found
        </h1>

        <p className="mt-2 font-mono text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex cursor-pointer items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to home
        </Link>
      </div>

      {/* Footer stripe */}
      <div
        className={cn(
          "screen-line-top relative h-8 overflow-hidden",
          "before:absolute before:inset-0",
          "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]"
        )}
      />
    </div>
  )
}
