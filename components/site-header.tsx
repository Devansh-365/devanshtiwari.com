"use client"

import Image from "next/image"
import Link from "next/link"
// import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
// import { cn } from "@/lib/utils"
// import { buttonVariants } from "@/components/ui/button"
// import { Icons } from "@/components/icons"
// import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  // const pathname = usePathname()

  // const checkCurrentRoute = (route: string) => {
  //   return pathname === route || pathname.split("/")[1] === route
  // }

  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center justify-between">
        {/* Profile Section - Name & Image */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label={`${siteConfig.name} - Home`}
          tabIndex={0}
        >
          <Image
            src="/profile.png"
            alt={`${siteConfig.name}'s profile picture`}
            width={40}
            height={40}
            className="rounded-full object-cover"
            priority
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-xs text-muted-foreground">
              Product-Minded Engineer
            </span>
          </div>
        </Link>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* COMMENTED OUT - Original MainNav */}
        {/* <MainNav items={siteConfig.mainNav} /> */}
        {/* <div className="flex flex-1 items-center md:justify-end md:space-x-4">
          <nav className="flex w-full items-center justify-between md:justify-end">
            <Link className="block md:hidden" href="/">
              <p className="text-2xl font-extrabold leading-snug">DT</p>
            </Link>
            <ThemeToggle />
          </nav>
        </div> */}
      </div>

      {/* COMMENTED OUT - Bottom Mobile Navigation */}
      {/* <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-foreground bg-background md:hidden">
        <nav className="flex h-full items-center justify-around">
          <Link
            href="/"
            className={cn(
              "flex flex-col items-center space-y-1",
              checkCurrentRoute("/") ? "" : "text-muted-foreground"
            )}
          >
            <Icons.home className="h-5 w-5" />
            <p className="text-sm">Home</p>
          </Link>
          <Link
            href="/about"
            className={cn(
              "flex flex-col items-center space-y-1",
              checkCurrentRoute("/about") ? "" : "text-muted-foreground"
            )}
          >
            <Icons.about className="h-5 w-5" />
            <p className="text-sm">About</p>
          </Link>
          <Link
            href="/blog"
            className={cn(
              "flex flex-col items-center space-y-1",
              checkCurrentRoute("/blog") ? "" : "text-muted-foreground"
            )}
          >
            <Icons.blog className="h-5 w-5" />
            <p className="text-sm">Blog</p>
          </Link>
          <Link
            href="/projects"
            className={cn(
              "flex flex-col items-center space-y-1",
              checkCurrentRoute("/projects") ? "" : "text-muted-foreground"
            )}
          >
            <Icons.project className="h-5 w-5" />
            <p className="text-sm">Projects</p>
          </Link>
        </nav>
      </div> */}
    </header>
  )
}
