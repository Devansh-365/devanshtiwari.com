import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { getMediumPosts } from "@/lib/medium"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

type BlogPost = {
  title: string
  date: string
  href: string
  source: "local" | "medium"
  readingTime?: { text: string }
}

export async function BlogPreview() {
  let localPosts: BlogPost[] = []
  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    localPosts = allPosts.map((p) => ({
      title: p.title,
      date: p.date,
      href: `/blog/${p.slug}`,
      source: "local" as const,
      readingTime: p.readingTime,
    }))
  } catch {
    localPosts = []
  }

  let mediumPosts: BlogPost[] = []
  try {
    const posts = await getMediumPosts()
    mediumPosts = posts.map((p) => ({
      title: p.title,
      date: p.date,
      href: p.link,
      source: "medium" as const,
    }))
  } catch {
    mediumPosts = []
  }

  const allPosts = [...localPosts, ...mediumPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>
          Blog
          <PanelTitleSup>({allPosts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>
      <div className="relative py-4">
        {allPosts.length >= 2 && (
          <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-line" />
            <div className="border-l border-line" />
          </div>
        )}
        <div className={`grid grid-cols-1 gap-4 ${allPosts.length >= 2 ? "sm:grid-cols-2" : ""}`}>
          {allPosts.slice(0, 4).map((post) => {
            const isMedium = post.source === "medium"

            const content = (
              <>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-medium group-hover:text-primary">{post.title}</h3>
                  {isMedium && (
                    <ExternalLinkIcon className="h-3 w-3 shrink-0 text-muted-foreground" />
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                  <time>
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  {post.readingTime?.text && (
                    <>
                      <span>·</span>
                      <span>{post.readingTime.text}</span>
                    </>
                  )}
                  {isMedium && (
                    <>
                      <span>·</span>
                      <span>Medium</span>
                    </>
                  )}
                </div>
              </>
            )

            if (isMedium) {
              return (
                <a
                  key={post.href}
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block cursor-pointer p-4 transition-colors hover:bg-accent/50 screen-line-top screen-line-bottom"
                >
                  {content}
                </a>
              )
            }

            return (
              <Link
                key={post.href}
                href={post.href}
                className="group block cursor-pointer p-4 transition-colors hover:bg-accent/50 screen-line-top screen-line-bottom"
              >
                {content}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="screen-line-top flex justify-center py-2">
        <Link href="/blog" className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-line bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
          All Posts <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Panel>
  )
}
