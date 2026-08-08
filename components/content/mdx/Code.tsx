import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { inlineCodeClassName } from "@/components/content/inline-code"

type CodeProps = ComponentProps<"code"> & {
  "data-language"?: string
}

/** Inline MDX code vs fenced blocks (language-* class from the bundler). */
function isFencedBlockCode(className: string | undefined): boolean {
  return Boolean(className?.includes("language-"))
}

export function Code({
  children,
  className,
  "data-language": dataLanguage,
  ...props
}: CodeProps) {
  if (isFencedBlockCode(className) || dataLanguage) {
    return (
      <code className={className} data-language={dataLanguage} {...props}>
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
