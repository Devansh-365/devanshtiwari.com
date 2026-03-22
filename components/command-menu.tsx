"use client"

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  BriefcaseIcon,
  FileCodeIcon,
  FileTextIcon,
  FolderOpenIcon,
  GitGraphIcon,
  HomeIcon,
  LayersIcon,
  MoonStarIcon,
  SunMediumIcon,
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

import { Button } from "./ui/button"

export function CommandMenu() {
  const router = useRouter()
  const { setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleNav = useCallback(
    (href: string) => {
      setOpen(false)
      router.push(href)
    },
    [router]
  )

  return (
    <>
      <Button
        variant="outline"
        className="gap-1.5 rounded-full text-muted-foreground shadow-none select-none hover:text-muted-foreground"
        size="sm"
        onClick={() => setOpen(true)}
      >
        <span className="text-sm font-medium sm:hidden">Search…</span>
        <span className="hidden text-sm font-medium sm:inline">Search…</span>
        <Kbd className="ml-1 hidden sm:inline-flex">⌘K</Kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search…" />

        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Navigation">
            {siteConfig.mainNav.map((item) => {
              const Icon =
                item.href === "/"
                  ? HomeIcon
                  : item.href === "/blog"
                    ? FileTextIcon
                    : FolderOpenIcon
              return (
                <CommandItem
                  key={item.href}
                  onSelect={() => handleNav(item.href)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.title}
                </CommandItem>
              )
            })}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Portfolio">
            <CommandItem onSelect={() => handleNav("/#about")}>
              <UserIcon className="mr-2 h-4 w-4" />
              About
            </CommandItem>
            <CommandItem onSelect={() => handleNav("/#work")}>
              <FileCodeIcon className="mr-2 h-4 w-4" />
              Work
            </CommandItem>
            <CommandItem onSelect={() => handleNav("/#stack")}>
              <LayersIcon className="mr-2 h-4 w-4" />
              Tech Stack
            </CommandItem>
            <CommandItem onSelect={() => handleNav("/#blog")}>
              <FileTextIcon className="mr-2 h-4 w-4" />
              Blog
            </CommandItem>
            <CommandItem onSelect={() => handleNav("/#experience")}>
              <BriefcaseIcon className="mr-2 h-4 w-4" />
              Experience
            </CommandItem>
            <CommandItem onSelect={() => handleNav("/work")}>
              <FolderOpenIcon className="mr-2 h-4 w-4" />
              All Work
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

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
        </CommandList>
      </CommandDialog>
    </>
  )
}
