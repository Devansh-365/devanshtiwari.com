"use client"

import { useRef, useEffect, useState } from "react"
import type { ComponentProps } from "react"
import Link from "next/link"

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
  const navRef = useRef<HTMLElement>(null)
  const [indicator, setIndicator] = useState({ left: 0, width: 0, opacity: 0 })

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const activeLink = nav.querySelector<HTMLElement>("[data-active='true']")
    if (activeLink) {
      const navRect = nav.getBoundingClientRect()
      const linkRect = activeLink.getBoundingClientRect()
      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      })
    } else {
      setIndicator((prev) => ({ ...prev, opacity: 0 }))
    }
  }, [activeId])

  return (
    <nav
      ref={navRef}
      className={cn("relative flex items-center gap-4", className)}
    >
      {/* Sliding indicator */}
      <div
        aria-hidden="true"
        className="absolute -bottom-px h-px bg-foreground transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        style={{
          left: indicator.left,
          width: indicator.width,
          opacity: indicator.opacity,
        }}
      />

      {items.map(({ title, href, className }) => {
        const active = exactMatch
          ? activeId === href
          : activeId === href ||
            (href === "/"
              ? ["/", "/index"].includes(activeId || "")
              : activeId?.startsWith(href))

        return (
          <NavLink
            key={href}
            className={className}
            href={href}
            active={!!active}
          >
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
  ...props
}: ComponentProps<typeof Link> & {
  active: boolean
}) {
  return (
    <Link
      data-active={active}
      aria-current={active ? "page" : undefined}
      className={cn(
        "pb-px font-mono text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground",
        active && "text-foreground",
        className
      )}
      {...props}
    />
  )
}
