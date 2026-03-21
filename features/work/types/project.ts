export type WorkProject = {
  slug: string
  title: string
  oneLiner: string
  role: string
  company: string
  period: string
  liveUrl?: string
  demoUrl?: string
  thumbnail?: string
  problem: string
  whatIBuilt: string
  stats?: { label: string; value: string }[]
  tech: string[]
  architectureImage?: string
}
