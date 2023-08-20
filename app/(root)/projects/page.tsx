import React from "react"
import { Metadata } from "next"
import Image from "next/image"

import { Hr } from "@/components/ui/Hr"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button, buttonVariants } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { ProjectCardTwo } from "@/components/project-card-two"
import { ProjectsWrapper } from "@/components/projects-wrapper"
import Section from "@/components/section"

export const metadata: Metadata = {
  title: "Projects",
  description: "...",
}

const projects = [
  {
    _id: 1,
    url: "google.com",
    icon: "/vercel.svg",
    name: "mindmate",
    description:
      "Elevate interactions with AI companions powered by MindMate. Our streamlined stack empowers you to craft and host personalized companions with memory.",
  },
  {
    _id: 2,
    url: "google.com",
    icon: "/vercel.svg",
    name: "z",
    description:
      "Seamlessly connect thoughts for dynamic conversations and immersive storytelling with Z.",
  },
]

const Projects = () => {
  return (
    <Section className="container items-center py-4 pb-8 md:py-6">
      <h1 className="mt-6 text-3xl font-extrabold text-shadow-[0_4px_8px_#50ffaf]">
        Projects
      </h1>
      <Hr />
      <ProjectsWrapper>
        <ul
          role="list"
          className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCardTwo project={project} key={project._id} />
          ))}
        </ul>
      </ProjectsWrapper>
    </Section>
  )
}

export default Projects
