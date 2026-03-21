import { cn } from "@/lib/utils"

function simpleMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener" class="underline underline-offset-4 hover:text-foreground">$1</a>')
    .replace(/^- (.*)/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]*<\/li>)/, '<ul class="list-disc pl-4 space-y-1">$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>')
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
