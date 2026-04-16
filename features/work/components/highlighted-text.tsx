import { Fragment } from "react"

const HIGHLIGHT_REGEX =
  /(\$\d+(?:\.\d+)?(?:-\$?\d+(?:\.\d+)?)?|\d+(?:-\d+)?%|\d+\+|<\s*\d+(?:\.\d+)?\s*[sm]?s?\b|~\s*\d+(?:\.\d+)?\s*m?s\b|\b\d{1,3}(?:,\d{3})+\+?\b|\b\d+\s*(?:days?|weeks?|months?|hours?|minutes?|seconds?|ms|API\s+endpoints?|endpoints?|models?|interviews?|signups?|tools?|indicators?|providers?|languages?|HTTP\s+calls?|translation\s+keys?|stocks?|users?|pages?))/gi

export function HighlightedText({ text }: { text: string }) {
  const matches = Array.from(text.matchAll(HIGHLIGHT_REGEX))
  if (matches.length === 0) return <>{text}</>

  const parts: React.ReactNode[] = []
  let lastIndex = 0

  matches.forEach((match, i) => {
    const start = match.index ?? 0
    if (start > lastIndex) {
      parts.push(<Fragment key={`t-${i}`}>{text.slice(lastIndex, start)}</Fragment>)
    }
    parts.push(
      <strong key={`h-${i}`} className="font-semibold text-foreground">
        {match[0]}
      </strong>
    )
    lastIndex = start + match[0].length
  })

  if (lastIndex < text.length) {
    parts.push(<Fragment key="end">{text.slice(lastIndex)}</Fragment>)
  }

  return <>{parts}</>
}
