import { cn } from "@/lib/utils"

export function ProseMono({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "prose prose-sm max-w-none font-mono text-sm text-muted-foreground dark:prose-invert prose-a:text-foreground prose-a:underline-offset-4 prose-strong:text-foreground prose-li:marker:text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}
