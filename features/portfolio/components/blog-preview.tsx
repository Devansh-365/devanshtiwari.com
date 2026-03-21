import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"

export async function BlogPreview() {
  let posts: Array<{ slug: string; title: string; date: string }> = []
  try {
    const allPosts = await getAllFilesFrontMatter("blog")
    posts = allPosts.map((p) => ({ slug: p.slug, title: p.title, date: p.date }))
  } catch { posts = [] }

  return (
    <Panel id="blog">
      <PanelHeader>
        <PanelTitle>
          Blog
          <PanelTitleSup>({posts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>
      <div className="relative py-4">
        {posts.length >= 2 && (
          <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-line" />
            <div className="border-l border-line" />
          </div>
        )}
        <div className={`grid grid-cols-1 gap-4 ${posts.length >= 2 ? "sm:grid-cols-2" : ""}`}>
          {posts.slice(0, 4).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block cursor-pointer p-4 transition-colors hover:bg-accent/50 screen-line-top screen-line-bottom">
              <h3 className="font-medium group-hover:text-primary">{post.title}</h3>
              <time className="mt-1 font-mono text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}
              </time>
            </Link>
          ))}
        </div>
      </div>
      <div className="screen-line-top flex justify-center py-2">
        <Link href="/blog" className="inline-flex cursor-pointer items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          All Posts <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Panel>
  )
}
