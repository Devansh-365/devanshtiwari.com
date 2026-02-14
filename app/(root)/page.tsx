// COMMENTED OUT - Original imports
// import Link from "next/link"
// import { ArrowUpRight, PencilIcon } from "lucide-react"
// import { siteConfig } from "@/config/site"
// import { WorkStack } from "@/config/skills"
// import { Button, buttonVariants } from "@/components/ui/button"
// import Hero from "@/components/hero"
// import { Icons } from "@/components/icons"
// import StackList from "@/components/skills"
// import { Hr } from "@/components/ui/Hr"
// import Posts from "./blog/components/posts"

import Section from "@/components/section"
import ListLayout, { type PostFrontMatter } from "@/components/blog/list-layout"

// Sample blog posts data - Replace with your actual data source
const samplePosts: PostFrontMatter[] = [
  {
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications",
    date: "2024-02-10",
    summary:
      "Learn the best practices for building scalable React applications with proper architecture, state management, and performance optimization techniques.",
    tags: ["React", "Architecture", "Performance"],
  },
  {
    slug: "nextjs-app-router-guide",
    title: "Complete Guide to Next.js App Router",
    date: "2024-01-25",
    summary:
      "A comprehensive guide to understanding and using the Next.js App Router, including server components, layouts, and data fetching patterns.",
    tags: ["Next.js", "React", "Tutorial"],
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices in 2024",
    date: "2024-01-15",
    summary:
      "Explore the latest TypeScript best practices, including type inference, utility types, and patterns for writing maintainable code.",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
  },
  {
    slug: "tailwind-css-tips",
    title: "Advanced Tailwind CSS Tips and Tricks",
    date: "2024-01-05",
    summary:
      "Discover advanced Tailwind CSS techniques to build beautiful, responsive interfaces faster with custom configurations and plugins.",
    tags: ["CSS", "Tailwind", "Design"],
  },
]

export default function IndexPage() {
  return (
    <Section className="container py-4 pb-8 md:py-6">
      {/* ============================================
          BLOG LIST LAYOUT - Currently Active
          ============================================ */}
      <ListLayout posts={samplePosts} title="Blog" />

      {/* ============================================
          ORIGINAL HOME PAGE UI - Commented Out
          ============================================ */}
      {/*
      <h2 className="text-2xl font-extrabold leading-snug text-shadow-[0_4px_8px_#6366f1] md:text-3xl">
        Developer; Designer; open to working with new people on cool projects!
      </h2>
      <p className="mt-4 text-xs font-normal leading-6 text-foreground md:text-sm">
        I am a Full Stack Developer + Designer who builds Well-Responsive,
        Pixel-Perfect, functional, and beautiful websites. With my strong skills
        in user interface and experience design, I excel at creating engaging
        and intuitive interfaces that enhance the user experience. Additionally,
        I have a passion for frontend engineering, which allows me to develop
        clean, maintainable code that meets the highest standards of quality.
      </p>
      <div className="mt-4 rounded-lg border border-secondary-foreground p-4 text-xs font-normal leading-6 text-foreground md:text-sm">
        <p>
          Currently, I am actively seeking part-time engineering roles that
          allow me to leverage my skills in designing and frontend engineering
          to deliver exceptional results.
        </p>
        <p className="mb-4 mt-2">
          A collaborative team of engineers and designers, who are building
          great products. Interested in working together? Feel free to schedule
          a meet!
        </p>
        <div className="flex flex-row items-center justify-start gap-4">
          <Button>Schedule a meet</Button>
          <Button
            className={buttonVariants({
              variant: "link",
              className: "underline bg-transparent",
            })}
          >
            Resume
            <ArrowUpRight className="mx-1" />
          </Button>
        </div>
      </div>
      <div className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-6 pt-6">
            <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="ml-2">Blogs</span>
            </h2>
          </div>
          <aside className="sm:max-w-auto space-y-10 lg:sticky lg:top-8 lg:h-fit lg:max-w-[380px] lg:pl-16 xl:pl-20">
            <div className="relative rounded-2xl border border-zinc-100 p-6 transition-opacity dark:border-zinc-700/40">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Icons.layers className="h-5 w-5 flex-none" />
                <span className="ml-2">Skills</span>
              </h2>
              <StackList stack={WorkStack} />
            </div>
            <div className="relative rounded-2xl border border-zinc-100 p-6 transition-opacity dark:border-zinc-700/40">
              <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <Icons.briefcase className="h-5 w-5 flex-none" />
                <span className="ml-2">Resume</span>
              </h2>
            </div>
          </aside>
        </div>
      </div>
      */}
    </Section>
  )
}
