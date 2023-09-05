"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  const checkCurrentRoute = (route: string) => {
    return pathname === route || pathname.split("/")[1] === route
  }

  return (
    <div className="flex gap-6 md:gap-10">
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <motion.div key={index} whileHover={{ scale: 1.1 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center text-base text-foreground sm:text-sm",
                      checkCurrentRoute(item.href) && "underline"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
