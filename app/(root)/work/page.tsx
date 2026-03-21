import { Metadata } from "next"
import { WORK_PROJECTS } from "@/features/work/data/projects"
import { ProjectCard } from "@/features/work/components/project-card"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real products shipped for real clients. Not case studies. Actual systems running in production.",
}

export default function WorkPage() {
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

      <div className="screen-line-top relative">
        {/* Vertical grid divider */}
        <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
          <div className="border-r border-line" />
          <div className="border-l border-line" />
        </div>

        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
          {WORK_PROJECTS.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="screen-line-top h-4 w-full" />
    </div>
  )
}
