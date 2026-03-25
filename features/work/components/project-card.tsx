"use client"

import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"
import { useReducedMotion } from "framer-motion"
import { Tag } from "@/components/ui/tag"
import { useTilt } from "@/hooks/use-tilt"
import { ProjectThumbnail } from "./project-thumbnail"
import type { WorkProject } from "../types/project"

export function ProjectCard({ project }: { project: WorkProject }) {
  const { ref, handleMove, handleLeave } = useTilt(5)
  const shouldReduceMotion = useReducedMotion()

  return (
    <div
      ref={shouldReduceMotion ? undefined : ref}
      onMouseMove={shouldReduceMotion ? undefined : handleMove}
      onMouseLeave={shouldReduceMotion ? undefined : handleLeave}
      className="transition-transform duration-200 ease-out will-change-transform"
    >
      <Link
        href={`/work/${project.slug}`}
        className="group flex cursor-pointer flex-col screen-line-top screen-line-bottom transition-colors hover:bg-accent/50"
      >
        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="p-3 pb-0">
            <div className="transition-transform duration-500 group-hover:scale-[1.01]">
              <ProjectThumbnail
                src={project.thumbnail}
                alt={project.title}
                url={project.liveUrl?.replace(/https?:\/\//, "")}
                type={project.thumbnailType || "browser"}
                variant="card"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-3">
          <div className="flex items-center gap-1.5">
            <h2 className="font-semibold leading-snug group-hover:text-primary">
              {project.title}
            </h2>
            <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100" />
          </div>

          <p className="mt-0.5 font-mono text-[11px] text-muted-foreground">
            {project.role} · {project.period}
          </p>

          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {project.oneLiner}
          </p>

          {project.stats && (
            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-0.5">
              {project.stats.slice(0, 3).map((stat) => (
                <span key={stat.label} className="font-mono text-[11px]">
                  <span className="font-medium text-foreground">{stat.value}</span>{" "}
                  <span className="text-muted-foreground">{stat.label}</span>
                </span>
              ))}
            </div>
          )}

          <ul className="mt-2 flex flex-wrap gap-1">
            {project.tech.slice(0, 4).map((t) => (
              <li key={t} className="flex">
                <Tag className="px-1.5 py-0 text-[10px]">{t}</Tag>
              </li>
            ))}
            {project.tech.length > 4 && (
              <li className="flex">
                <Tag className="px-1.5 py-0 text-[10px]">+{project.tech.length - 4}</Tag>
              </li>
            )}
          </ul>
        </div>
      </Link>
    </div>
  )
}
