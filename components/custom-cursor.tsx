"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { useReducedMotion } from "framer-motion"

export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: -100, y: -100 })
  const ringPos = useRef({ x: -100, y: -100 })
  const raf = useRef<number>(0)
  const hovering = useRef(false)
  const clicking = useRef(false)
  const visible = useRef(false)
  const shouldReduceMotion = useReducedMotion()

  const updateDOM = useCallback(() => {
    const d = dot.current
    const r = ring.current
    if (!d || !r) return

    const dotSize = clicking.current ? 3 : 4
    const ringSize = hovering.current ? 44 : clicking.current ? 20 : 32
    const ringBorder = hovering.current ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.35)"
    const vis = visible.current

    d.style.left = `${mouse.current.x}px`
    d.style.top = `${mouse.current.y}px`
    d.style.opacity = vis ? "1" : "0"
    d.children[0] && ((d.children[0] as HTMLElement).style.width = `${dotSize}px`);
    d.children[0] && ((d.children[0] as HTMLElement).style.height = `${dotSize}px`);

    // Lerp ring position
    ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15
    ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15

    r.style.left = `${ringPos.current.x}px`
    r.style.top = `${ringPos.current.y}px`
    r.style.opacity = vis ? "0.6" : "0"

    const ringEl = r.children[0] as HTMLElement | undefined
    if (ringEl) {
      ringEl.style.width = `${ringSize}px`
      ringEl.style.height = `${ringSize}px`
      ringEl.style.borderColor = ringBorder
    }

    raf.current = requestAnimationFrame(updateDOM)
  }, [])

  useEffect(() => {
    if (shouldReduceMotion) return
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return

    // Add class to html so CSS can hide the default cursor
    document.documentElement.classList.add("custom-cursor-active")

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      visible.current = true
    }
    const onLeave = () => { visible.current = false }
    const onEnter = () => { visible.current = true }
    const onDown = () => { clicking.current = true }
    const onUp = () => { clicking.current = false }

    // Event delegation for hover detection — no MutationObserver needed
    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        hovering.current = true
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null
      if (!target || !target.closest("a, button, [role='button'], input, textarea, select, [data-cursor-hover]")) {
        hovering.current = false
      }
    }

    document.addEventListener("mousemove", onMove, { passive: true })
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)
    document.addEventListener("mousedown", onDown)
    document.addEventListener("mouseup", onUp)
    document.addEventListener("mouseover", onOver, { passive: true })
    document.addEventListener("mouseout", onOut, { passive: true })

    raf.current = requestAnimationFrame(updateDOM)

    return () => {
      document.documentElement.classList.remove("custom-cursor-active")
      document.removeEventListener("mousemove", onMove)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.removeEventListener("mousedown", onDown)
      document.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseover", onOver)
      document.removeEventListener("mouseout", onOut)
      cancelAnimationFrame(raf.current)
    }
  }, [shouldReduceMotion, updateDOM])

  // Don't render on reduced motion or touch devices
  const [isTouch, setIsTouch] = useState(false)
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) setIsTouch(true)
  }, [])

  if (shouldReduceMotion || isTouch) return null

  return (
    <>
      <div
        ref={dot}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] mix-blend-difference transition-opacity duration-200"
      >
        <div
          className="rounded-full bg-white transition-[width,height] duration-150"
          style={{ width: 4, height: 4, transform: "translate(-50%, -50%)" }}
        />
      </div>
      <div
        ref={ring}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9998] mix-blend-difference transition-opacity duration-300"
      >
        <div
          className="rounded-full border transition-[width,height,border-color] duration-300 ease-out"
          style={{
            width: 32,
            height: 32,
            borderColor: "rgba(255,255,255,0.35)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  )
}
