import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import { inlineCodeClassName } from "@/components/content/inline-code"

type CodeProps = ComponentProps<"code">

/** Inline MDX code vs fenced blocks (language-* class from the bundler). */
function isFencedBlockCode(className: string | undefined): boolean {
  return Boolean(className?.includes("language-"))
}

export function Code({ children, className, ...props }: CodeProps) {
  if (isFencedBlockCode(className)) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  return (
    <code className={cn(inlineCodeClassName, className)} {...props}>
      {children}
    </code>
  )
}
