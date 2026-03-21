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
        initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={shouldReduceMotion ? undefined : { opacity: 0, y: 15 }}
        transition={shouldReduceMotion ? { duration: 0 } : { delay: 0.25 }}
      >
        {props?.children}
      </motion.div>
    </AnimatePresence>
  )
}
