import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Hero from "@/components/hero"
import { ArrowUpRight } from "lucide-react"
import Section from "@/components/section"

export default function IndexPage() {
  return (
    <section className="container grid items-center py-4 pb-8 md:py-6">
      {/* <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div> */}
      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({ size: "lg" })}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          GitHub
        </Link>
      </div> */}
      <Section>
        <h2 className="text-2xl font-extrabold leading-snug text-shadow-[0_4px_8px_#6366f1] md:text-3xl">
          Developing at Github; Designing at Dribble; open to working with new
          people on cool projects!
        </h2>
        <p className="mt-4 text-xs font-normal leading-6 text-foreground md:text-sm">
          I am a Full Stack Developer + Designer who builds Well-Responsive,
          Pixel-Perfect, functional, and beautiful websites. With my strong
          skills in user interface and experience design, I excel at creating
          engaging and intuitive interfaces that enhance the user experience.
          Additionally, I have a passion for frontend engineering, which allows
          me to develop clean, maintainable code that meets the highest
          standards of quality.
        </p>
        <div className="mt-4 rounded-lg border border-secondary-foreground p-4 text-xs font-normal leading-6 text-foreground md:text-sm">
          <p>
            Currently, I am actively seeking part-time engineering roles that
            allow me to leverage my skills in designing and frontend engineering
            to deliver exceptional results.
          </p>
          <p className="mb-4 mt-2">
            A collaborative team of engineers and designers, who are building
            great products. Interested in working together? Feel free to
            schedule a meet!
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
      </Section>
    </section>
  )
}
