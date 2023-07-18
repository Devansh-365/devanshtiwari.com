"use client"

import { HTMLAttributes } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const ProjectsWrapper: React.FunctionComponent<
  HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => (
  <>
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {props?.children}
    </motion.div>
  </>
)
