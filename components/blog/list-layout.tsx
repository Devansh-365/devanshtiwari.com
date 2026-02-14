// "use client" - Not needed without search functionality
// import { useState } from "react"
import Link from "next/link"
// import { Filter } from "lucide-react"
// import { cn } from "@/lib/utils"

// Types
export type PostFrontMatter = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
}

type ListLayoutProps = {
  posts: PostFrontMatter[]
  title: string
}

// Utility function to format date
const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(date).toLocaleDateString("en-US", options)
}

// Tag component
const Tag = ({ text }: { text: string }) => {
  return (
    <Link
      href={`/tags/${text.toLowerCase()}`}
      className="mr-3 text-sm font-medium uppercase text-primary hover:text-primary/80"
      aria-label={`View posts tagged with ${text}`}
      tabIndex={0}
    >
      {text}
    </Link>
  )
}

// Header component
const Header = ({ title }: { title: string }) => {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-foreground sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
        {title}
      </h1>
    </div>
  )
}

const ListLayout = ({ posts, title }: ListLayoutProps) => {
  return (
    <div className="divide-y-2 divide-gray-100 dark:divide-gray-800">
      <Header title={title} />

      {/* COMMENTED OUT - Search Bar (enable when you have more blogs)
      <div className="relative max-w-lg">
        <input
          aria-label="Search articles"
          type="text"
          onChange={handleSearchChange}
          placeholder="Search articles"
          className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <svg
          className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <Link
          href="/tags"
          className="absolute right-10 top-2 text-gray-400 transition-colors hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
          aria-label="Filter by tags"
          tabIndex={0}
        >
          <Filter className="h-6 w-6" />
        </Link>
      </div>
      */}

      <ul>
        {!posts.length && (
          <p className="mt-8 text-center text-muted-foreground">
            No posts found
          </p>
        )}
        {posts.map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li key={slug} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-muted-foreground">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </dl>
                <div className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight">
                      <Link
                        href={`/blog/${slug}`}
                        className="text-foreground transition-colors hover:text-primary"
                        aria-label={`Read more about ${title}`}
                        tabIndex={0}
                      >
                        {title}
                      </Link>
                    </h3>
                    <div className="mt-1 flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                  <p className="prose max-w-none text-muted-foreground">
                    {summary}
                  </p>
                </div>
              </article>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListLayout
