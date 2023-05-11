"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  const pathname = usePathname()

  const checkCurrentRoute = (route: string) => {
    return pathname === route || pathname.split("/")[1] === route
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center md:justify-end md:space-x-4">
          <nav className="flex w-full items-center justify-between md:justify-end">
            <Link className="block md:hidden" href="/">
              <p className="text-2xl font-extrabold leading-snug">DT</p>
            </Link>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-foreground bg-background md:hidden">
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
      </div>
    </header>
  )
}
