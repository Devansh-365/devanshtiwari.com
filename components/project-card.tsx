import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, ChevronsRight } from "lucide-react"

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <div
      className="w-full rounded-xl shadow-xl ring-2 ring-black/5 dark:ring-white/5"
      style={{
        background: "#e3691a",
        color: "rgb(255, 255, 255)",
      }}
    >
      <div className="relative flex">
        <div className="relative z-20 flex h-full max-w-full flex-col justify-between pl-5 md:max-w-[16rem] md:pl-6 lg:max-w-[22rem]">
          <div className="not-prose mt-6 flex items-center space-x-3 lg:space-x-5">
            <Image
              className="h-7 w-7 rounded-lg md:h-9 md:w-9 lg:h-12 lg:w-12 lg:rounded-xl"
              src="/profile.jpeg"
              alt="Logo"
              width={200}
              height={200}
            />
            <span className="text-xs font-bold opacity-60">2022</span>
          </div>
          <h2 className="not-prose mt-4 text-lg font-semibold text-white md:text-xl lg:text-2xl">
            Some Project
          </h2>
          <p className="pr-5 text-sm !leading-relaxed text-white opacity-70 md:pr-0 lg:text-sm">
            A SaaS platform to help game developers build exceptional games,
            faster. At Zolplay, we are proud to lead both the development and
            design efforts to ensure that Nexus is at its A game.
          </p>
          <div className="mb-6 flex items-center gap-5 pt-2 text-sm text-white lg:mb-7 lg:pt-4">
            <Link
              href="/"
              className="flex items-center font-bold text-current no-underline hover:underline"
            >
              <span>Learn More</span>
              <ChevronsRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="flex items-center font-bold text-current no-underline hover:underline"
            >
              <span>Vist website</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="not-prose absolute inset-x-0 h-full overflow-hidden rounded-xl md:left-[unset] md:aspect-square">
          <Image
            className="pointer-events-none m-0 mx-auto h-full w-auto select-none rounded-none p-0"
            src="/profile.jpeg"
            alt=""
            width={650}
            height={650}
            placeholder="blur"
            blurDataURL="/profile.jpeg"
          />
          <div className="mask-l frosted-noise pointer-events-none absolute inset-y-0 left-0 z-10 w-full select-none md:w-[200px]" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-full select-none backdrop-blur-md md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
