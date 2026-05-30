import { cn } from "@/lib/utils"

/** Sanitize a URL to prevent javascript: injection */
function sanitizeUrl(url: string): string {
  const trimmed = url.trim()
  if (/^(https?:\/\/|mailto:|\/)/i.test(trimmed)) return trimmed
  return "#"
}

/** Escape HTML entities to prevent XSS */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function simpleMarkdown(text: string): string {
  // Escape HTML first, then apply markdown transforms on the safe string
  let safe = escapeHtml(text)

  safe = safe
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      (_, label, url) =>
        `<a href="${sanitizeUrl(url)}" target="_blank" rel="noopener" class="underline underline-offset-4 hover:text-foreground">${label}</a>`
    )
    .replace(/^- (.*)/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*<\/li>)/, '<ul class="list-disc pl-4 space-y-1">$1</ul>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br/>")

  return safe
}

export function Markdown({ children, className }: { children: string; className?: string }) {
  const html = simpleMarkdown(children)
  return (
    <div
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: `<p>${html}</p>` }}
    />
  )
}
