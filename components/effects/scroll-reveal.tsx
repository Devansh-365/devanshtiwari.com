import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

// Server component. Uses CSS scroll-driven animations where supported and
// renders content visible-by-default everywhere else. No JS, no framer-motion.
export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <div
      className={cn("scroll-reveal", className)}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
