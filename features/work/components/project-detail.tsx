import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon, PlayIcon } from "lucide-react"
import { Tag } from "@/components/ui/tag"
import { Separator } from "@/components/ui/separator"
import type { WorkProject } from "../types/project"

export function ProjectDetail({ project }: { project: WorkProject }) {
  return (
    <>
      {/* Back link */}
      <div className="flex items-center justify-between p-2 pl-4">
        <Link
          href="/work"
          className="inline-flex cursor-pointer items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Work
        </Link>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-md border border-line px-2.5 font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <PlayIcon className="h-3.5 w-3.5" />
              Demo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-7 items-center gap-1.5 rounded-md bg-foreground px-2.5 font-mono text-xs font-medium text-background transition-opacity hover:opacity-90"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" />
              Live
            </a>
          )}
        </div>
      </div>

      {/* Separator stripe */}
      <div className="screen-line-top screen-line-bottom relative h-8 overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] [background-size:10px_10px]" />
      </div>

      {/* Header */}
      <div className="px-4">
        <h1 className="screen-line-bottom text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <div className="flex items-center gap-2 py-2 font-mono text-sm text-muted-foreground">
          <span>{project.role}</span>
          <span>·</span>
          <span>{project.company}</span>
          <span>·</span>
          <span>{project.period}</span>
        </div>

        <p className="pb-4 text-muted-foreground">{project.oneLiner}</p>
      </div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="screen-line-top px-4 py-4">
          <div className="relative select-none overflow-hidden rounded-lg">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={1200}
              height={630}
              className="aspect-[1200/630] w-full object-cover"
              unoptimized
            />
            <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset dark:ring-white/10" />
          </div>
        </div>
      )}

      {/* Stats */}
      {project.stats && (
        <div className="screen-line-top screen-line-bottom grid grid-cols-2 sm:grid-cols-4">
          {project.stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-4 ${i > 0 ? "border-l border-line" : ""}`}
            >
              <p className="font-mono text-2xl font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Problem */}
      <div className="px-4 py-6">
        <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          The Problem
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.problem}
        </p>
      </div>

      <div className="mx-4">
        <Separator />
      </div>

      {/* What I Built */}
      <div className="px-4 py-6">
        <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          What I Built
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.whatIBuilt}
        </p>
      </div>

      {/* Architecture diagram placeholder */}
      {project.architectureImage && (
        <>
          <div className="mx-4">
            <Separator />
          </div>
          <div className="px-4 py-6">
            <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Architecture
            </h2>
            <div className="overflow-hidden rounded-lg border border-line">
              <Image
                src={project.architectureImage}
                alt={`${project.title} architecture`}
                width={1200}
                height={600}
                className="w-full"
                unoptimized
              />
            </div>
          </div>
        </>
      )}

      {/* Tech stack */}
      <div className="screen-line-top px-4 py-6">
        <h2 className="mb-3 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Tech Stack
        </h2>
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="flex">
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer spacer */}
      <div className="screen-line-top h-4 w-full" />
    </>
  )
}
