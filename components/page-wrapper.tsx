"use client"

import { HTMLAttributes } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const PageWrapper: React.FunctionComponent<
  HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => (
  <AnimatePresence>
    <motion.div
      className="flex flex-1 flex-col"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ delay: 0.25 }}
    >
      {props?.children}
    </motion.div>
  </AnimatePresence>
)
