"use client"

import { motion, useReducedMotion } from "framer-motion"

type TextRevealProps = {
  text: string
  className?: string
  /** Delay before animation starts */
  delay?: number
  /**
   * When true the text is painted immediately at first paint (opacity 1, no
   * translate) so it counts toward LCP without waiting for JS / framer-motion
   * to hydrate. The reveal animation is skipped entirely.  Use this for
   * above-the-fold headings where LCP matters (e.g. H1 in the hero).
   */
  instant?: boolean
}

export function TextReveal({ text, className, delay = 0, instant = false }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const words = text.split(" ")

  if (shouldReduceMotion || instant) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.04,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  )
}
