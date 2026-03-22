import { Metadata } from "next"
import { WORK_PROJECTS } from "@/features/work/data/projects"
import { ProjectCard } from "@/features/work/components/project-card"
import { ProjectCardCompact } from "@/features/work/components/project-card-compact"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real products shipped for real clients. Not case studies. Actual systems running in production.",
}

export default function WorkPage() {
  const featured = WORK_PROJECTS.filter((p) => p.featured)
  const other = WORK_PROJECTS.filter((p) => !p.featured)

  return (
    <div className="min-h-[60vh]">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl font-semibold leading-none tracking-tight">
          Work
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Real products shipped for real clients. Not case studies. Actual
          systems running in production.
        </p>
      </div>

      {/* Featured projects — 2-col grid with thumbnails */}
      <div className="screen-line-top relative">
        <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      {/* More Work — compact list */}
      {other.length > 0 && (
        <>
          <div className="screen-line-top screen-line-bottom px-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              More Work
            </h2>
          </div>

          <div>
            {other.map((project) => (
              <div key={project.slug} className="screen-line-bottom">
                <ProjectCardCompact project={project} />
              </div>
            ))}
          </div>
        </>
      )}

      <div className="screen-line-top h-4 w-full" />
    </div>
  )
}
