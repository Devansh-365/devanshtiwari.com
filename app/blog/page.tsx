import React from "react"
import { Metadata } from "next"

import { Hr } from "@/components/ui/Hr"

export const metadata: Metadata = {
  title: "Blog",
  description: "...",
}

const Blog = () => {
  return (
    <section className="container grid items-center py-4 pb-8 text-shadow-[0_4px_8px_#0064da] md:py-6">
      <h1 className="mt-6 text-3xl font-extrabold ">Blog</h1>
      <Hr />
    </section>
  )
}

export default Blog
