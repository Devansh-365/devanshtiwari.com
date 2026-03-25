"use client"

import { useRef, useCallback } from "react"

/**
 * 3D tilt effect on mousemove. Returns a ref to attach to the element
 * and handlers for onMouseMove / onMouseLeave.
 */
export function useTilt(maxDeg = 6) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 to 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `perspective(600px) rotateX(${-y * maxDeg}deg) rotateY(${x * maxDeg}deg) scale3d(1.02, 1.02, 1.02)`
    },
    [maxDeg]
  )

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }, [])

  return { ref, handleMove, handleLeave }
}
