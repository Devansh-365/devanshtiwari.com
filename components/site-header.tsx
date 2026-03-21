import dynamic from "next/dynamic"
import Link from "next/link"

import { MAIN_NAV } from "@/config/site"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"
import { DesktopNav } from "@/components/desktop-nav"
import { NavItemGitHub } from "@/components/nav-item-github"
import { SiteHeaderMark } from "@/components/site-header-mark"
import { ThemeToggle } from "@/components/theme-toggle"

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
)

const CommandMenu = dynamic(() =>
  import("@/components/command-menu").then((mod) => mod.CommandMenu)
)

const MobileNav = dynamic(() =>
  import("@/components/mobile-nav").then((mod) => mod.MobileNav)
)

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full overflow-x-hidden bg-background px-2 pt-2">
        <div className="screen-line-top screen-line-bottom mx-auto flex h-12 items-center justify-between gap-2 border-x border-line px-2 sm:gap-4 md:max-w-3xl">
          <BrandContextMenu>
            <Link
              className="transition-transform ease-out active:scale-[0.98] [&_svg]:h-8"
              href="/"
              aria-label="Home"
            >
              <SiteHeaderMark />
            </Link>
          </BrandContextMenu>

          <div className="flex-1" />

          <DesktopNav items={MAIN_NAV} />

          <div className="flex items-center">
            <div className="mr-2 hidden sm:block">
              <CommandMenu />
            </div>
            {/*<NavItemGitHub />*/}
            <Separator
              orientation="vertical"
              className="mx-2 h-4 self-center"
            />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Nav - floating bottom bar */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 h-16 bg-gradient-to-t from-background to-transparent sm:hidden" />
      <div
        className={cn(
          "fixed bottom-[calc(0.5rem+env(safe-area-inset-bottom,0px))] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center rounded-xl bg-popover py-1 pr-1 pl-2.5 shadow-md ring-1 ring-foreground/10 sm:hidden dark:ring-foreground/20"
        )}
      >
        <CommandMenu />
        <Separator orientation="vertical" className="mx-2 h-6 self-center" />
        <MobileNav items={MAIN_NAV} />
      </div>
    </>
  )
}
