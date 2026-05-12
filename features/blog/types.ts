export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime?: { text: string }
  source: "local" | "medium"
  href: string
  views?: number
}
