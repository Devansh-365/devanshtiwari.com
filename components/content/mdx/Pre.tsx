"use client"

import {
  isValidElement,
  useId,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react"

import { copyText } from "@/lib/copy"

type Props = ComponentPropsWithoutRef<"pre">

const COLLAPSED_LINE_LIMIT = 24
const COLLAPSED_CHARACTER_LIMIT = 1400

function getTextContent(node: ReactNode): string {
  if (node == null || typeof node === "boolean") return ""
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(getTextContent).join("")
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getTextContent(node.props.children)
  }
  return ""
}

const Pre = ({ children, className, ...props }: Props) => {
  const codeId = `code-block-${useId().replace(/:/g, "")}`
  const codeRef = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const codeText = getTextContent(children)
  const lineCount = codeText.split(/\r?\n/).length
  const isLongCode =
    lineCount > COLLAPSED_LINE_LIMIT ||
    codeText.length > COLLAPSED_CHARACTER_LIMIT

  const handleCopy = async () => {
    await copyText(codeRef.current?.textContent || codeText)
    setCopied(true)
    window.setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="group relative my-6">
      <button
        aria-label={copied ? "Code copied" : "Copy code"}
        title={copied ? "Code copied" : "Copy code"}
        type="button"
        className={`absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded border-2 p-2 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
          copied
            ? "border-green-400 bg-green-900/50 focus:border-green-400 focus:outline-none"
            : "border-gray-500 bg-gray-700 hover:border-gray-400"
        }`}
        onClick={handleCopy}
        tabIndex={0}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          className={copied ? "text-green-400" : "text-gray-300"}
        >
          {copied ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          )}
        </svg>
      </button>

      <pre
        {...props}
        ref={codeRef}
        id={isLongCode ? codeId : undefined}
        className={`mdx-code-block not-prose overflow-x-auto rounded-lg border border-line bg-muted px-4 py-4 font-mono text-sm leading-relaxed text-foreground dark:bg-zinc-950 dark:text-zinc-100 ${isLongCode && !expanded ? "max-h-80 overflow-y-hidden pb-16" : ""} ${className ?? ""}`}
      >
        {children}
      </pre>

      {isLongCode && !expanded && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-px bottom-px z-10 h-20 rounded-b-lg bg-gradient-to-t from-muted via-muted/90 to-transparent dark:from-zinc-950 dark:via-zinc-950/90"
        />
      )}

      {isLongCode && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={codeId}
          onClick={() => setExpanded((current) => !current)}
          className="absolute inset-x-3 bottom-3 z-20 flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-background/95 px-3 py-2 font-sans text-xs font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span>{expanded ? "Collapse code" : "View full code"}</span>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`}
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}

      <span className="sr-only" aria-live="polite">
        {copied ? "Code copied" : ""}
      </span>
    </div>
  )
}

export default Pre
