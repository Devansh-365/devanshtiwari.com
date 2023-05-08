"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section from "./section";
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react";


const Hero = () => {
  return (
    <>
      <Section className="flex flex-row items-center justify-start gap-6 max-md:items-start max-sm:items-start md:gap-8">
        <motion.div
          className="relative h-fit w-fit"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Image
            src={"/profile.jpeg"}
            alt="profile"
            width={"60"}
            height={"60"}
            className="rounded-2xl transition-all hover:grayscale"
            priority
          />
          <motion.div
            className="box animation-delay absolute bottom-0 left-14 cursor-default select-none rounded-full bg-white px-1 py-[1px] text-sm shadow max-sm:left-8 max-sm:px-1 max-sm:py-0.5 max-sm:text-xs"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {"🔥"}
          </motion.div>
        </motion.div>
        <div>
          <h1 className="text-2xl font-extrabold leading-tight tracking-tighter">
            Devansh Tiwari
          </h1>
          <div className="text-sm font-normal leading-snug text-foreground md:text-base">
            <p>Developer + Designer</p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-2xl font-extrabold leading-snug md:text-3xl">
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
              <ArrowRight className="mx-1" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Hero
