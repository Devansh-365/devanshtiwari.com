import React from "react"
import { Metadata } from "next"
import Image from "next/image"

import { Hr } from "@/components/ui/Hr"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button, buttonVariants } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { ProjectsWrapper } from "@/components/projects-wrapper"
import Section from "@/components/section"

export const metadata: Metadata = {
  title: "Projects",
  description: "...",
}

const Projects = () => {
  return (
    <Section className="container items-center py-4 pb-8 md:py-6">
      <h1 className="mt-6 text-3xl font-extrabold text-shadow-[0_4px_8px_#50ffaf]">
        Projects
      </h1>
      <Hr />
      <ProjectsWrapper>
        <div className="space-y-8">
          <ProjectCard />
          <ProjectCard />
        </div>
      </ProjectsWrapper>
    </Section>
  )
}

export default Projects
