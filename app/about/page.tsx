import React from "react"
import { Metadata } from "next"
import { ArrowUpRight } from "lucide-react"

import { Hr } from "@/components/ui/Hr"
import { Button, buttonVariants } from "@/components/ui/button"
import ExperienceSection from "@/components/experience-item"
import Section from "@/components/section"

export const metadata: Metadata = {
  title: "About",
  description: "...",
}

const About = () => {
  return (
    <section className="container grid items-center py-4 pb-8 md:py-6">
      <h1 className="mt-6 text-3xl font-extrabold text-shadow-[0_4px_8px_#ffa9af]">
        About
      </h1>
      <Hr />
      <Section
        className="experience-section mb-6 grid grid-cols-1 justify-start gap-4"
        id="experience"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold leading-snug">Engineering</h2>
          <Button
            className={buttonVariants({
              variant: "link",
              className: "underline bg-transparent",
              size: "sm",
            })}
          >
            View Gtihub
            <ArrowUpRight className="mx-1" />
          </Button>
        </div>
        <p className="text-sm">
          When it comes to business, first impressions matter, and good website
          design is the key to capitalizing on them. An excellent site is not
          judged solely on its looks, but on its functionality and usability as
          well. My experience as a programmer allows me to come up with
          intelligent solutions to technical challenges, while at the same time
          designing sleek and visually appealing websites. Aside from having
          extensive knowledge of recognized technical standards, I am conversant
          with modern building practices.
        </p>
      </Section>
      <Section
        className="experience-section mb-6 grid grid-cols-1 justify-start gap-4"
        id="experience"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold leading-snug">Design</h2>
          <Button
            className={buttonVariants({
              variant: "link",
              className: "underline bg-transparent",
              size: "sm",
            })}
          >
            View Gtihub
            <ArrowUpRight className="mx-1" />
          </Button>
        </div>
        <p className="text-sm">
          When it comes to business, first impressions matter, and good website
          design is the key to capitalizing on them. An excellent site is not
          judged solely on its looks, but on its functionality and usability as
          well. My experience as a programmer allows me to come up with
          intelligent solutions to technical challenges, while at the same time
          designing sleek and visually appealing websites. Aside from having
          extensive knowledge of recognized technical standards, I am conversant
          with modern building practices.
        </p>
      </Section>
      <ExperienceSection />
    </section>
  )
}

export default About
