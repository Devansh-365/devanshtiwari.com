"use client"

import { useScroll, useSpring, motion, useReducedMotion } from "framer-motion"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) return null

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-foreground/70 z-[60] pointer-events-none"
    />
  )
}
