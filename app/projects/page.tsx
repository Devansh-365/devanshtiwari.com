import React from "react"
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button, buttonVariants } from "@/components/ui/button"
import Section from "@/components/section"

const Projects = () => {
  return (
    <Section className="container grid grid-cols-1 items-center gap-6 pb-8 pt-6 md:grid-cols-2 md:py-10">
      <div className="mt-4 rounded-lg border border-zinc-100 p-4 text-xs font-normal leading-6 text-zinc-200 md:text-sm">
        <AspectRatio
          ratio={16 / 9}
          className="bg-transparent dark:bg-transparent"
        >
          <Image
            src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
            alt="Photo by Alvaro Pinot"
            fill
            className="rounded-2xl object-cover"
          />
        </AspectRatio>
        <h5 className="mt-4 font-bold text-zinc-100">Project Name</h5>
        <div className="mt-4 flex flex-row items-center justify-start gap-4">
          <Button
            className={buttonVariants({
              size: "sm",
              className:
                "bg-zinc-300 w-full",
            })}
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-zinc-100 p-4 text-xs font-normal leading-6 text-zinc-200 md:text-sm">
        <AspectRatio
          ratio={16 / 9}
          className="bg-transparent dark:bg-transparent"
        >
          <Image
            src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
            alt="Photo by Alvaro Pinot"
            fill
            className="rounded-2xl object-cover"
          />
        </AspectRatio>
        <div className="mt-4 flex flex-row items-center justify-start gap-4">
          <Button
            className={buttonVariants({
              size: "sm",
              className: "bg-zinc-300 w-full hover:bg-zinc-500 text-black",
            })}
          >
            Learn more
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default Projects
