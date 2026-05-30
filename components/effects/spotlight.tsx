"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "framer-motion"
import { useTheme } from "next-themes"

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    if (shouldReduceMotion || resolvedTheme !== "dark") return
    // Skip on touch devices — no mouse to track
    if (window.matchMedia("(pointer: coarse)").matches) return

    const el = ref.current
    if (!el) return

    const handleMove = (e: MouseEvent) => {
      el.style.setProperty("--spot-x", `${e.clientX}px`)
      el.style.setProperty("--spot-y", `${e.clientY}px`)
      el.style.opacity = "1"
    }

    const handleLeave = () => {
      el.style.opacity = "0"
    }

    window.addEventListener("mousemove", handleMove, { passive: true })
    document.addEventListener("mouseleave", handleLeave)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      document.removeEventListener("mouseleave", handleLeave)
    }
  }, [shouldReduceMotion, resolvedTheme])

  // Don't render on non-dark themes or during SSR (resolvedTheme undefined)
  if (!resolvedTheme || resolvedTheme !== "dark") return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-300"
      style={{
        background:
          "radial-gradient(600px circle at var(--spot-x, -100px) var(--spot-y, -100px), hsl(0 0% 100% / 0.035), transparent 40%)",
      }}
    />
  )
}
