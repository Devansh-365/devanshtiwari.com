export type ProjectStatus = "shipped" | "beta" | "in-progress" | "archived" | "ended"

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
  stats?: { label: string; value: string; url?: string }[]
  tech: string[]
  architectureImage?: string
  canvasUrl?: string
  canvasScreenshotUrl?: string
}
