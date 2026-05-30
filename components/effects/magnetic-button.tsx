"use client"

import { useMagnetic } from "@/hooks/use-magnetic"
import { useReducedMotion } from "framer-motion"

export function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const { ref, handleMove, handleLeave } = useMagnetic(0.25)
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  )
}
