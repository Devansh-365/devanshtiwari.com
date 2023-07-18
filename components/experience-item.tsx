import { cn } from "@/lib/utils"
import Link from "next/link"
import Section from "./section"
import { getExperiences } from "@/lib/experiences"

interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  experienceTitle?: React.ReactNode | string
  experienceDescription?: string[]
  experienceOrg?: {
    name?: React.ReactNode | string
    link?: React.ReactNode | string
    websiteDisplayName?: React.ReactNode | string
  }
  experienceStatus?:
    | "current"
    | {
        startAt?: React.ReactNode | string
        endAt?: React.ReactNode | string
      }
}

const ExperienceSection: React.FunctionComponent = () => {
  return (
    <Section
      className="experience-section grid grid-cols-1 justify-start gap-4"
      id="experience"
    >
      <h2 className="text-base font-semibold leading-snug">
        Worked As
      </h2>
      <Section className="mt-4 grid grid-cols-1 justify-start gap-8">
        {getExperiences()?.map(
          (experience: ExperienceItemProps, experienceIndex: number) => (
            <ExperienceItem {...experience} key={experienceIndex} />
          )
        )}
      </Section>
    </Section>
  )
}

const ExperienceItem: React.FunctionComponent<ExperienceItemProps> = ({
  experienceTitle,
  experienceDescription,
  experienceOrg,
  experienceStatus,
  className,
  ...attr
}) => {
  return (
    <div
      className={cn(
        "experience-item cursor-default border-l-2 pl-4 transition-all hover:border-secondary-foreground",
        className
      )}
      {...attr}
    >
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2 max-sm:w-[320px]">
        <span>
          <h3 className=" w-[46ch]  font-normal capitalize max-md:w-[30ch]">
            {experienceTitle + ", " + experienceOrg?.name}
          </h3>
          <p className="flex flex-row items-center justify-start gap-1.5 text-sm">
            {"at, "}
            {typeof experienceOrg?.link === "string" ? (
              <Link
                className="text-sm font-normal"
                href={experienceOrg?.link}
                target={"_blank"}
              >
                {experienceOrg?.websiteDisplayName}
              </Link>
            ) : (
              <span className="text-sm font-normal">
                {experienceOrg?.websiteDisplayName}
              </span>
            )}
          </p>
        </span>
        <p className="experience-status text-sm font-normal">
          {typeof experienceStatus === "string" &&
            experienceStatus === "current" &&
            experienceStatus}
          {typeof experienceStatus === "object" && (
            <span className="experience-status-duration-wrapper">
              {experienceStatus?.startAt + "-" + experienceStatus?.endAt}
            </span>
          )}
        </p>
      </div>
      <ul className="experience-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
        {experienceDescription?.map((descriptionItem, descriptionIndex) => (
          <li
            className="list-outside list-disc text-sm font-normal text-zinc-500 dark:text-zinc-400"
            key={descriptionIndex}
          >
            {descriptionItem}
          </li>
        ))}

      </ul>
    </div>
  )
}

export default ExperienceSection
export type { ExperienceItemProps }
