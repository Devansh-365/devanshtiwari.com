import type { ProjectStatus } from "../types/project"

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; dotClass: string }
> = {
  shipped: { label: "Shipped", dotClass: "bg-emerald-500" },
  beta: { label: "Beta", dotClass: "bg-amber-500" },
  "in-progress": { label: "In Progress", dotClass: "bg-sky-500" },
  archived: { label: "Archived", dotClass: "bg-muted-foreground" },
}

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = STATUS_CONFIG[status]
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted-foreground">
      <span className={`h-1.5 w-1.5 rounded-full ${config.dotClass}`} />
      {config.label}
    </span>
  )
}
