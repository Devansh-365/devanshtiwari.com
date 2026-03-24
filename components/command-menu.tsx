"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  BriefcaseBusinessIcon,
  CornerDownLeftIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderOpenIcon,
  GithubIcon,
  HomeIcon,
  LayersIcon,
  LinkedinIcon,
  MailIcon,
  MoonStarIcon,
  RssIcon,
  SearchIcon,
  SunMediumIcon,
  TwitterIcon,
  UserIcon,
} from "lucide-react"
import { useTheme } from "next-themes"

import { siteConfig } from "@/config/site"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import { DTMark } from "@/components/dt-mark"

import { Button } from "./ui/button"

type CommandLinkItem = {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  openInNewTab?: boolean
}

const MENU_LINKS: CommandLinkItem[] = [
  { title: "Home", href: "/", icon: HomeIcon },
  { title: "Work", href: "/work", icon: FolderOpenIcon },
  { title: "Blog", href: "/blog", icon: FileTextIcon },
  { title: "Resume", href: "/resume", icon: FileCodeIcon },
]

const PORTFOLIO_LINKS: CommandLinkItem[] = [
  { title: "About", href: "/#about", icon: UserIcon },
  { title: "Work", href: "/#work", icon: FileCodeIcon },
  { title: "Tech Stack", href: "/#stack", icon: LayersIcon },
  { title: "Blog", href: "/#blog", icon: FileTextIcon },
  { title: "Experience", href: "/#experience", icon: BriefcaseBusinessIcon },
  { title: "All Work", href: "/work", icon: FolderOpenIcon },
]

const SOCIAL_LINKS: CommandLinkItem[] = [
  { title: "GitHub", href: "https://github.com/Devansh-365", icon: GithubIcon, openInNewTab: true },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/devansh-tiwari-3342611a6/", icon: LinkedinIcon, openInNewTab: true },
  { title: "Twitter / X", href: "https://twitter.com/devansh_0718", icon: TwitterIcon, openInNewTab: true },
  { title: "Email", href: "mailto:devanshtiwari365@gmail.com", icon: MailIcon, openInNewTab: true },
]

const OTHER_LINKS: CommandLinkItem[] = [
  { title: "llms.txt", href: "/llms.txt", icon: FileTextIcon, openInNewTab: true },
  { title: "RSS Feed", href: "/rss", icon: RssIcon, openInNewTab: true },
]

export function CommandMenu() {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // ⌘K always works
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
        return
      }
      // "/" only works when no input/textarea is focused
      if (e.key === "/" && !(e.target instanceof HTMLInputElement) && !(e.target instanceof HTMLTextAreaElement)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleOpenLink = useCallback(
    (href: string, openInNewTab = false) => {
      setOpen(false)
      if (openInNewTab) {
        window.open(href, "_blank", "noopener")
      } else {
        router.push(href)
      }
    },
    [router]
  )

  return (
    <>
      <Button
        data-slot="command-menu-trigger"
        className="gap-1.5 rounded-full text-muted-foreground shadow-none select-none hover:text-muted-foreground"
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
      >
        <SearchIcon className="h-4 w-4" />
        <span className="text-sm font-medium sm:hidden">Search…</span>
        <span className="hidden text-sm font-medium sm:inline">Search…</span>
        <Kbd className="ml-1 hidden sm:inline-flex">⌘K</Kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />

        <CommandList className="min-h-[320px]">
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandLinkGroup
            heading="Menu"
            links={MENU_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandLinkGroup
            heading="Portfolio"
            links={PORTFOLIO_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandLinkGroup
            heading="Social Links"
            links={SOCIAL_LINKS}
            onLinkSelect={handleOpenLink}
          />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => { setTheme("light"); setOpen(false) }}>
              <SunMediumIcon className="mr-2 h-4 w-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => { setTheme("dark"); setOpen(false) }}>
              <MoonStarIcon className="mr-2 h-4 w-4" />
              Dark
            </CommandItem>
          </CommandGroup>

          <CommandLinkGroup
            heading="Other"
            links={OTHER_LINKS}
            onLinkSelect={handleOpenLink}
          />
        </CommandList>

        {/* Footer */}
        <div className="flex h-10" />
        <div className="absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-2 rounded-b-lg border-t bg-popover px-4 text-xs font-medium">
          <DTMark className="h-4 text-muted-foreground" />
          <div className="flex shrink-0 items-center gap-2 max-sm:hidden">
            <span>Go to Page</span>
            <Kbd>
              <CornerDownLeftIcon className="h-3 w-3" />
            </Kbd>
            <Separator orientation="vertical" className="mx-1 h-4 self-center" />
            <span className="text-muted-foreground">Exit</span>
            <Kbd>Esc</Kbd>
          </div>
        </div>
      </CommandDialog>
    </>
  )
}

function CommandLinkGroup({
  heading,
  links,
  onLinkSelect,
}: {
  heading: string
  links: CommandLinkItem[]
  onLinkSelect: (href: string, openInNewTab?: boolean) => void
}) {
  return (
    <CommandGroup heading={heading}>
      {links.map((link) => {
        const Icon = link.icon
        return (
          <CommandItem
            key={link.href}
            onSelect={() => onLinkSelect(link.href, link.openInNewTab)}
          >
            <Icon className="mr-2 h-4 w-4" />
            <span className="line-clamp-1">{link.title}</span>
          </CommandItem>
        )
      })}
    </CommandGroup>
  )
}
