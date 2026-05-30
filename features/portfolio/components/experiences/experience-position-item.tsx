"use client"

import {
  InfinityIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  BriefcaseBusinessIcon,
  LightbulbIcon,
  ChevronDownIcon,
} from "lucide-react"
import { Markdown } from "@/components/content/markdown"
import { Tag } from "@/components/ui/tag"
import { ProseMono } from "@/components/ui/typography"
import { Separator } from "@/components/ui/separator"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import type {
  ExperiencePosition,
  ExperiencePositionIcon,
} from "../../types/experiences"

const iconMap: Record<
  ExperiencePositionIcon,
  React.ComponentType<{ className?: string }>
> = {
  code: CodeXmlIcon,
  design: DraftingCompassIcon,
  education: GraduationCapIcon,
  business: BriefcaseBusinessIcon,
  idea: LightbulbIcon,
}

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

// "04.2024" -> "Apr 2024", "2022" -> "2022"
function formatPeriod(value: string): string {
  const match = value.match(/^(\d{1,2})\.(\d{4})$/)
  if (!match) return value
  const monthIndex = parseInt(match[1], 10) - 1
  const year = match[2]
  if (monthIndex < 0 || monthIndex > 11) return value
  return `${MONTH_LABELS[monthIndex]} ${year}`
}

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition
}) {
  const { start, end } = position.employmentPeriod
  const isOngoing = !end
  const IconComponent = position.icon
    ? iconMap[position.icon]
    : BriefcaseBusinessIcon
  const hasContent = !!position.description

  return (
    <Collapsible
      className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background"
      defaultOpen={position.isExpanded}
      disabled={!hasContent}
    >
      <CollapsibleTrigger
        className={cn(
          "group block w-full cursor-pointer text-left",
          "relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-[1] before:rounded-lg before:transition-colors before:ease-out hover:before:bg-accent/50",
          "outline-none focus-visible:before:ring-2 focus-visible:before:ring-ring/50",
          "disabled:cursor-default disabled:before:hidden"
        )}
      >
        <div className="relative z-[1] mb-1 flex items-center gap-3">
          <div
            className={cn(
              "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg",
              "bg-muted text-muted-foreground",
              "border border-muted-foreground/15 ring-1 ring-line ring-offset-1 ring-offset-background"
            )}
          >
            <IconComponent className="h-4 w-4" />
          </div>

          <h4 className="flex-1 font-medium text-balance">
            {position.title}
          </h4>

          {hasContent && (
            <div className="shrink-0 text-muted-foreground">
              <ChevronDownIcon className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 pl-9 text-[13px] text-muted-foreground sm:text-sm">
          {position.employmentType && (
            <>
              <span>{position.employmentType}</span>
              <Separator
                orientation="vertical"
                className="h-4 self-center"
              />
            </>
          )}
          {position.periodLabel ? (
            <span>{position.periodLabel}</span>
          ) : (
            <span className="flex items-center gap-1">
              <span>{formatPeriod(start)}</span>
              <span aria-hidden>–</span>
              {isOngoing ? (
                <>
                  <InfinityIcon className="h-4 w-4 translate-y-[0.5px]" />
                  <span className="sr-only">Present</span>
                </>
              ) : (
                <span>{formatPeriod(end)}</span>
              )}
            </span>
          )}
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        {position.description && (
          <ProseMono className="pt-2 pl-9">
            <Markdown>{position.description}</Markdown>
          </ProseMono>
        )}
      </CollapsibleContent>

      {Array.isArray(position.skills) && position.skills.length > 0 && (
        <ul className="flex flex-wrap gap-2 pt-3 pl-9 sm:gap-1.5">
          {position.skills.map((skill, index) => (
            <li key={index} className="flex">
              <Tag>{skill}</Tag>
            </li>
          ))}
        </ul>
      )}
    </Collapsible>
  )
}
