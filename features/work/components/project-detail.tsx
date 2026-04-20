import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon, GithubIcon, PlayIcon } from "lucide-react"
import { Tag } from "@/components/ui/tag"
import { Separator } from "@/components/ui/separator"
import { ContactBar } from "@/components/contact-bar"
import { ProjectThumbnail } from "./project-thumbnail"
import { HighlightedText } from "./highlighted-text"
import { StatusBadge } from "./status-badge"
import type { WorkProject } from "../types/project"
import { WORK_PROJECTS } from "../data/projects"

const PROJECT_BLOG_LINKS: Record<string, string> = {
  freellm: "/blog/freellm-one-endpoint-five-providers",
  metis: "/blog/how-i-validated-metis-before-writing-code",
}

function getRelatedProjects(current: WorkProject, count = 3): WorkProject[] {
  const currentTech = new Set(current.tech)
  const scored = WORK_PROJECTS.filter((p) => p.slug !== current.slug).map((p) => {
    const overlap = p.tech.filter((t) => currentTech.has(t)).length
    return { project: p, overlap }
  })
  scored.sort((a, b) => {
    if (b.overlap !== a.overlap) return b.overlap - a.overlap
    const featuredDiff = (b.project.featured ? 1 : 0) - (a.project.featured ? 1 : 0)
    return featuredDiff
  })
  return scored.slice(0, count).map((s) => s.project)
}

function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {label}
    </h2>
  )
}

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
        <div className="screen-line-bottom flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            {project.title}
          </h1>
          {project.status && <StatusBadge status={project.status} />}
        </div>

        <div className="flex items-center gap-2 py-2 font-mono text-sm text-muted-foreground">
          <span>{project.role}</span>
          <span>·</span>
          <span>{project.company}</span>
          <span>·</span>
          <span>{project.period}</span>
        </div>

        <p className="pb-4 text-muted-foreground">
          <HighlightedText text={project.oneLiner} />
        </p>
      </div>

      {/* Thumbnail */}
      {project.thumbnail && (
        <div className="screen-line-top px-4 py-4">
          <ProjectThumbnail
            src={project.thumbnail}
            alt={project.title}
            url={project.liveUrl?.replace(/https?:\/\//, "")}
            type={project.thumbnailType || "browser"}
            variant="detail"
          />
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

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <>
          <div className="px-4 py-6">
            <SectionHeading label="Highlights" />
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-0.5 font-mono text-xs text-muted-foreground/70">
                    →
                  </span>
                  <span>
                    <HighlightedText text={highlight} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-4">
            <Separator />
          </div>
        </>
      )}

      {/* Problem */}
      <div className="px-4 py-6">
        <SectionHeading label="The Problem" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          <HighlightedText text={project.problem} />
        </p>
      </div>

      <div className="mx-4">
        <Separator />
      </div>

      {/* What I Built */}
      <div className="px-4 py-6">
        <SectionHeading label="What I Built" />
        {project.features && project.features.length > 0 ? (
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="bg-background p-4 transition-colors hover:bg-card/40"
              >
                <div className="mb-2 flex items-baseline gap-2">
                  <span className="font-mono text-xs text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  <HighlightedText text={feature.description} />
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm leading-relaxed text-muted-foreground">
            <HighlightedText text={project.whatIBuilt} />
          </p>
        )}
      </div>

      {/* Architecture diagram placeholder */}
      {project.architectureImage && (
        <>
          <div className="mx-4">
            <Separator />
          </div>
          <div className="px-4 py-6">
            <SectionHeading label="Architecture" />
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
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Tech Stack
          </h2>
          <Link
            href="/work"
            className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            All projects
            <ArrowRightIcon className="h-3 w-3" />
          </Link>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="flex">
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>
        {PROJECT_BLOG_LINKS[project.slug] && (
          <p className="mt-4 font-mono text-xs text-muted-foreground">
            Read the writeup:{" "}
            <Link
              href={PROJECT_BLOG_LINKS[project.slug]}
              className="text-foreground underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {project.title} on the blog
            </Link>
          </p>
        )}
      </div>

      {/* Related projects */}
      {(() => {
        const related = getRelatedProjects(project)
        if (related.length === 0) return null
        return (
          <>
            <div className="mx-4">
              <Separator />
            </div>
            <div className="px-4 py-6">
              <SectionHeading label="Related Projects" />
              <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/work/${rel.slug}`}
                    className="group flex flex-col gap-1.5 bg-background p-4 transition-colors hover:bg-card/40"
                  >
                    <span className="font-mono text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {rel.title}
                    </span>
                    <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {rel.oneLiner}
                    </span>
                    <span className="mt-auto font-mono text-xs text-muted-foreground/60 transition-colors group-hover:text-muted-foreground">
                      View project
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )
      })()}

      {/* Contact */}
      <ContactBar />

      {/* Footer spacer */}
      <div className="screen-line-top h-4 w-full" />
    </>
  )
}
