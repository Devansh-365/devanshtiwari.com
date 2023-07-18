"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Section from "./section";
import { Button, buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react";


const Hero = () => {
  return (
    <>
      <Section className="container flex flex-row items-center justify-start gap-6 pt-6 max-md:items-start max-sm:items-start md:gap-8 md:py-6">
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
    </>
  )
}

export default Hero
