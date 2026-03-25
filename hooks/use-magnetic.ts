"use client"

import { useRef, useCallback } from "react"

/**
 * Magnetic pull effect — element subtly follows the cursor on hover.
 * Returns a ref + handlers. Attach to the button/link wrapper.
 */
export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLElement>(null)

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [strength]
  )

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = "translate(0px, 0px)"
  }, [])

  return { ref, handleMove, handleLeave }
}
