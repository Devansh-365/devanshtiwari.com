"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { useReducedMotion } from "framer-motion"

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [visible, setVisible] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  // Smooth ring follow using lerp
  const animate = useCallback(() => {
    const speed = 0.15
    ringPos.current.x += (mouse.current.x - ringPos.current.x) * speed
    ringPos.current.y += (mouse.current.y - ringPos.current.y) * speed

    if (dot.current) {
      dot.current.style.left = `${mouse.current.x}px`
      dot.current.style.top = `${mouse.current.y}px`
    }
    if (ring.current) {
      ring.current.style.left = `${ringPos.current.x}px`
      ring.current.style.top = `${ringPos.current.y}px`
    }

    raf.current = requestAnimationFrame(animate)
  }, [])

  useEffect(() => {
    if (shouldReduceMotion) return
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    const hoverStart = () => setHovering(true)
    const hoverEnd = () => setHovering(false)

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)

    function attachHoverListeners() {
      const els = document.querySelectorAll(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover]"
      )
      els.forEach((el) => {
        el.addEventListener("mouseenter", hoverStart)
        el.addEventListener("mouseleave", hoverEnd)
      })
    }

    const observer = new MutationObserver(attachHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })
    attachHoverListeners()

    raf.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [shouldReduceMotion, animate, visible])

  if (shouldReduceMotion) return null

  const dotSize = clicking ? 3 : 4
  const ringSize = hovering ? 44 : clicking ? 20 : 32

  return (
    <>
      {/* Dot — sticks to cursor exactly */}
      <div
        ref={dot}
        className="pointer-events-none fixed z-[9999] mix-blend-difference"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.2s",
        }}
      >
        <div
          className="rounded-full bg-white transition-[width,height] duration-150"
          style={{
            width: dotSize,
            height: dotSize,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Ring — trails behind with lerp */}
      <div
        ref={ring}
        className="pointer-events-none fixed z-[9998] mix-blend-difference"
        style={{
          opacity: visible ? 0.6 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <div
          className="rounded-full border transition-[width,height,border-color] duration-300 ease-out"
          style={{
            width: ringSize,
            height: ringSize,
            borderColor: hovering ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  )
}
