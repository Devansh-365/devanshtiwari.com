import { WORK_PROJECTS } from "@/features/work/data/projects"
import { Tag } from "@/components/ui/tag"

export default function OGWorkPage() {
  return (
    <div className="space-y-12 p-8">
      <h1 className="font-mono text-sm text-muted-foreground">
        Thumbnail templates. Screenshot each card at 1200x630.
      </h1>

      {WORK_PROJECTS.map((project) => (
        <div
          key={project.slug}
          id={project.slug}
          className="flex h-[630px] w-[1200px] flex-col justify-between overflow-hidden rounded-xl border border-line bg-background p-12"
        >
          {/* Top: Title + Meta */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-lg font-bold text-background">
                DT
              </div>
              <span className="font-mono text-sm text-muted-foreground">
                {project.company}
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-bold tracking-tight">
              {project.title}
            </h2>

            <p className="mt-4 max-w-[800px] text-xl text-muted-foreground">
              {project.oneLiner}
            </p>
          </div>

          {/* Bottom: Stats + Tech */}
          <div>
            {project.stats && (
              <div className="mb-6 flex gap-8">
                {project.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-mono text-3xl font-semibold tracking-tight">
                      {stat.value}
                    </p>
                    <p className="font-mono text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <ul className="flex flex-wrap gap-2">
              {project.tech.slice(0, 8).map((t) => (
                <li key={t}>
                  <Tag className="px-3 py-1 text-sm">{t}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
