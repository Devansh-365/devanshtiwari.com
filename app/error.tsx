"use client"

import { useEffect } from "react"
import { RefreshCwIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[calc(100vh-10rem)] flex-col border-x border-line md:max-w-3xl">
      <div
        className={cn(
          "screen-line-bottom relative h-8 overflow-hidden",
          "before:absolute before:inset-0",
          "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]"
        )}
      />

      <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <p className="font-mono text-8xl font-bold tracking-tighter text-muted-foreground/20">
          500
        </p>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight">
          Something went wrong
        </h1>

        <p className="mt-2 font-mono text-sm text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={reset}
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 font-mono text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <RefreshCwIcon className="h-4 w-4" />
          Try again
        </button>
      </div>

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
