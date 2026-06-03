/** Shared Tailwind classes for inline `` `backticks` `` in prose (blog MDX, simple Markdown, etc.) */
export const inlineCodeClassName =
  "inline-block w-fit max-w-full align-baseline rounded-md bg-foreground/[0.06] px-[0.4em] py-[0.1em] font-mono text-[0.875em] font-medium tracking-tight text-foreground break-normal before:content-none after:content-none"

/** Prose parent: inline code not inside fenced pre blocks */
export const proseInlineCodeSelector =
  "[&_:not(pre)>code]:inline-block [&_:not(pre)>code]:w-fit [&_:not(pre)>code]:max-w-full [&_:not(pre)>code]:align-baseline [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:bg-foreground/[0.06] [&_:not(pre)>code]:px-[0.4em] [&_:not(pre)>code]:py-[0.1em] [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.875em] [&_:not(pre)>code]:font-medium [&_:not(pre)>code]:tracking-tight [&_:not(pre)>code]:text-foreground [&_:not(pre)>code]:break-normal [&_:not(pre)>code]:before:content-none [&_:not(pre)>code]:after:content-none"
