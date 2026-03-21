import { cn } from "@/lib/utils"

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto border-x border-line md:max-w-3xl">
      <div
        className={cn(
          "screen-line-bottom relative h-8 overflow-hidden",
          "before:absolute before:inset-0",
          "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]"
        )}
      />
      {children}
    </div>
  )
}
