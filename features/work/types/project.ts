export type WorkProject = {
  slug: string
  title: string
  oneLiner: string
  role: string
  company: string
  period: string
  featured?: boolean
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
