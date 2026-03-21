import { BoxIcon, InfinityIcon, LinkIcon } from "lucide-react"
import { Markdown } from "@/components/markdown"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import type { Project } from "../../types/projects"

export function ProjectItem({ project }: { project: Project }) {
  const { start, end } = project.period
  const isOngoing = !end
  const isSinglePeriod = end === start

  return (
    <div className="flex items-start hover:bg-accent/50 transition-colors">
      <div className="mx-4 mt-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted text-muted-foreground ring-1 ring-line ring-offset-1 ring-offset-background select-none">
        <BoxIcon className="h-4 w-4" />
      </div>

      <div className="flex-1 border-l border-dashed border-line">
        <div className="flex items-center gap-2 p-4 pr-2">
          <div className="flex-1">
            <h3 className="mb-1 font-medium leading-snug text-balance">{project.title}</h3>
            <div className="text-sm text-muted-foreground">
              <span className="flex items-center gap-0.5">
                <span>{start}</span>
                {!isSinglePeriod && (
                  <>
                    <span className="font-mono">&mdash;</span>
                    {isOngoing ? (
                      <><InfinityIcon className="h-4 w-4 translate-y-[0.5px]" /><span className="sr-only">Present</span></>
                    ) : (
                      <span>{end}</span>
                    )}
                  </>
                )}
              </span>
            </div>
          </div>
          <a
            className="relative flex h-6 w-6 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground"
            href={project.link}
            target="_blank"
            rel="noopener"
          >
            <LinkIcon className="pointer-events-none h-4 w-4" />
            <span className="sr-only">Open Project Link</span>
          </a>
        </div>

        {(project.description || project.skills.length > 0) && (
          <div className="space-y-4 border-t border-line p-4">
            {project.description && (
              <ProseMono><Markdown>{project.description}</Markdown></ProseMono>
            )}
            {project.skills.length > 0 && (
              <ul className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, index) => (
                  <li key={index} className="flex"><Tag>{skill}</Tag></li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
