import { cn } from "@/lib/utils"

type TextRevealProps = {
  text: string
  className?: string
  /** Kept for API compatibility — ignored now that animation is CSS-only. */
  delay?: number
  /**
   * When true the text is painted immediately at first paint so it counts
   * toward LCP. Always treated as true now — the reveal animation has been
   * dropped from this component to keep the hero off the JS critical path.
   * Decorative reveal effects belong in ScrollReveal further down the page.
   */
  instant?: boolean
}

// Server component. Renders text directly. Previously used framer-motion to
// stagger words in, which delayed LCP because the animation didn't start until
// the client bundle hydrated.
export function TextReveal({ text, className }: TextRevealProps) {
  return <span className={className}>{text}</span>
}
