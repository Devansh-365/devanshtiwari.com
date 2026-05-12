"use client"

import type { ComponentProps } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import type { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

export function Nav({
  items,
  activeId,
  className,
  exactMatch = false,
}: {
  items: NavItem[]
  activeId?: string
  className?: string
  exactMatch?: boolean
}) {
  return (
    <nav className={cn("relative flex items-center gap-4", className)}>
      {items.map(({ title, href, className }) => {
        const active = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/"
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        return (
          <NavLink key={href} className={className} href={href} active={!!active}>
            {title}
          </NavLink>
        )
      })}
    </nav>
  )
}

function NavLink({
  className,
  active,
  children,
  ...props
}: ComponentProps<typeof Link> & { active: boolean }) {
  return (
    <Link
      data-active={active}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative pb-px font-mono text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground",
        active && "text-foreground",
        className
      )}
      {...props}
    >
      {children}
      {active && (
        <motion.div
          layoutId="nav-active-indicator"
          className="absolute -bottom-px left-0 right-0 h-px bg-foreground"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </Link>
  )
}
