import type { Experience } from "../../types/experiences"
import { ExperiencePositionItem } from "./experience-position-item"

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div id={`experience-${experience.id}`} className="screen-line-bottom scroll-mt-14 space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center select-none">
          <span className="flex h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        </div>
        <h3 className="text-lg font-semibold leading-snug">
          {experience.companyWebsite ? (
            <a className="cursor-pointer underline-offset-4 hover:underline" href={experience.companyWebsite} target="_blank" rel="noopener">{experience.companyName}</a>
          ) : experience.companyName}
        </h3>
        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-500 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  )
}
