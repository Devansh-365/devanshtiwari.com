import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { Tag } from "@/components/ui/tag"
import type { WorkProject } from "../types/project"

export function ProjectCardCompact({ project }: { project: WorkProject }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex cursor-pointer items-start gap-4 p-4 transition-colors hover:bg-accent/50"
    >
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <h3 className="font-medium leading-snug group-hover:text-primary">
            {project.title}
          </h3>
          <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100" />
        </div>

        <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
          {project.oneLiner}
        </p>

        <ul className="mt-2 flex flex-wrap gap-1">
          {project.tech.slice(0, 4).map((t) => (
            <li key={t} className="flex">
              <Tag className="px-1.5 py-0 text-[10px]">{t}</Tag>
            </li>
          ))}
        </ul>
      </div>

      <span className="shrink-0 font-mono text-[11px] text-muted-foreground max-sm:hidden">
        {project.period}
      </span>
    </Link>
  )
}
