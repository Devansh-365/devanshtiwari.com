export type ProjectStatus = "shipped" | "beta" | "in-progress" | "archived"

export type ProjectFeature = {
  title: string
  description: string
}

export type WorkProject = {
  slug: string
  title: string
  oneLiner: string
  role: string
  company: string
  period: string
  featured?: boolean
  status?: ProjectStatus
  highlights?: string[]
  features?: ProjectFeature[]
  liveUrl?: string
  githubUrl?: string
  demoUrl?: string
  thumbnail?: string
  thumbnailType?: "browser" | "banner"
  problem: string
  whatIBuilt: string
  stats?: { label: string; value: string }[]
  tech: string[]
  architectureImage?: string
}
