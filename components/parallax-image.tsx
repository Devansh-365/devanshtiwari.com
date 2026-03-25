"use client"

import Image from "next/image"
import { useRef, useCallback } from "react"
import { useReducedMotion } from "framer-motion"

type ParallaxImageProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  /** How much the image moves (px). Default 8 */
  strength?: number
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  className = "",
  strength = 8,
}: ParallaxImageProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const handleMove = useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return
      const el = imgRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.transform = `translate(${-x * strength}px, ${-y * strength}px) scale(1.05)`
    },
    [strength, shouldReduceMotion]
  )

  const handleLeave = useCallback(() => {
    const el = imgRef.current
    if (!el) return
    el.style.transform = "translate(0px, 0px) scale(1)"
  }, [])

  return (
    <div className="overflow-hidden" onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`transition-transform duration-300 ease-out ${className}`}
        unoptimized={src.startsWith("http")}
      />
    </div>
  )
}
