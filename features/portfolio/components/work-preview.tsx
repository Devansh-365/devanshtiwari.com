import Link from "next/link"
import { ArrowRightIcon, ArrowUpRightIcon } from "lucide-react"
import { WORK_PROJECTS } from "@/features/work/data/projects"
import { Panel, PanelHeader, PanelNumber, PanelTitle, PanelTitleSup } from "./panel"

export function WorkPreview() {
  const featured = WORK_PROJECTS.filter((p) => p.featured).slice(0, 3)

  return (
    <Panel id="work">
      <PanelHeader>
        <div className="flex items-baseline gap-3">
          <PanelNumber>02</PanelNumber>
          <PanelTitle>
            Work
            <PanelTitleSup>({WORK_PROJECTS.length})</PanelTitleSup>
          </PanelTitle>
        </div>
      </PanelHeader>

      <div>
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group block cursor-pointer screen-line-bottom transition-colors hover:bg-accent/50"
          >
            <div className="flex">
              {/* Left accent bar */}
              <div className="w-1 shrink-0 bg-muted-foreground/10 transition-colors group-hover:bg-primary" />

              <div className="flex-1 p-4">
                {/* Title + period */}
                <div className="flex items-baseline justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold leading-snug group-hover:text-primary">
                      {project.title}
                    </h3>
                    <ArrowUpRightIcon className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100" />
                  </div>
                  <span className="shrink-0 font-mono text-[11px] text-muted-foreground max-sm:hidden">
                    {project.period}
                  </span>
                </div>

                {/* Role */}
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                  {project.role} · {project.company}
                </p>

                {/* One-liner — the curiosity hook */}
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.oneLiner}
                </p>

                {/* Stats — the proof that backs the hook */}
                {project.stats && (
                  <div className="mt-3 flex gap-4 sm:gap-6">
                    {project.stats.slice(0, 3).map((stat) => (
                      <div key={stat.label}>
                        <p className="font-mono text-lg font-semibold tracking-tight sm:text-xl">
                          {stat.value}
                        </p>
                        <p className="font-mono text-[11px] text-muted-foreground sm:text-[10px]">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="screen-line-top flex justify-center py-2">
        <Link
          href="/work"
          className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-line bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          All Work
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Panel>
  )
}
