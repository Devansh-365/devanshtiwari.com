"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

type TextFlipProps = {
  texts: string[]
  interval?: number
  className?: string
}

export function TextFlip({ texts, interval = 3, className }: TextFlipProps) {
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (texts.length <= 1) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length)
    }, interval * 1000)
    return () => clearInterval(timer)
  }, [texts.length, interval])

  if (texts.length === 0) return null

  if (shouldReduceMotion || texts.length === 1) {
    return <span className={className}>{texts[0]}</span>
  }

  return (
    <span className={cn("relative inline-block overflow-hidden", className)}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
