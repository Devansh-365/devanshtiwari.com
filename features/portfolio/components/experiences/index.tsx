"use client"

import { useState } from "react"
import { ChevronDownIcon } from "lucide-react"
import { EXPERIENCES } from "../../data/experiences"
import { Panel, PanelHeader, PanelNumber, PanelTitle } from "../panel"
import { ExperienceItem } from "./experience-item"

const MAX_VISIBLE = 4

export function Experiences() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? EXPERIENCES : EXPERIENCES.slice(0, MAX_VISIBLE)
  const hasMore = EXPERIENCES.length > MAX_VISIBLE

  return (
    <Panel id="experience">
      <PanelHeader>
        <div className="flex items-baseline gap-3">
          <PanelNumber>03</PanelNumber>
          <PanelTitle>Experience</PanelTitle>
        </div>
      </PanelHeader>
      <div className="pr-2 pl-4">
        {visible.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
      {hasMore && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="screen-line-top flex w-full cursor-pointer items-center justify-center gap-1 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Show {EXPERIENCES.length - MAX_VISIBLE} more
          <ChevronDownIcon className="h-4 w-4" />
        </button>
      )}
    </Panel>
  )
}
