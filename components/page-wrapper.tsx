"use client"

import { HTMLAttributes } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

export const PageWrapper: React.FunctionComponent<
  HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      <motion.div
        className="flex flex-1 flex-col"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }
      >
        {props?.children}
      </motion.div>
    </AnimatePresence>
  )
}
