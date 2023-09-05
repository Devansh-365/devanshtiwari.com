import React from "react"
import { Metadata } from "next"

import { Hr } from "@/components/ui/Hr"

import { PostCard } from "./components/post-card"
import { Posts } from "./components/posts"

export const metadata: Metadata = {
  title: "Blog",
  description: "...",
}

const Blog = () => {
  return (
    <section className="container grid items-center py-4 pb-8 text-shadow-[0_4px_8px_#0064da] md:py-6">
      <h1 className="mt-6 text-3xl font-extrabold ">Blog</h1>
      <Hr />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <Posts />
      </div>
    </section>
  )
}

export default Blog
