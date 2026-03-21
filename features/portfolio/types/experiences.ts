export type ExperiencePositionIcon = "code" | "design" | "education" | "business" | "idea"

export type ExperiencePosition = {
  id: string
  title: string
  employmentPeriod: {
    start: string
    end?: string
  }
  employmentType?: string
  icon?: ExperiencePositionIcon
  description?: string
  skills?: string[]
  isExpanded?: boolean
}

export type Experience = {
  id: string
  companyName: string
  companyLogo?: string
  companyWebsite?: string
  positions: ExperiencePosition[]
  isCurrentEmployer?: boolean
}
