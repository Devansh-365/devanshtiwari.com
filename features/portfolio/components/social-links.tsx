import { ArrowUpRightIcon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { SOCIAL_LINKS } from "../data/social-links"
import { Panel } from "./panel"

export function SocialLinks() {
  return (
    <Panel className="before:content-none after:content-none">
      <h2 className="sr-only">Social Links</h2>
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-2 gap-2 md:grid-cols-3">
          <div className="border-r border-line" />
          <div className="border-l border-line md:border-x" />
          <div className="border-l border-line hidden md:block" />
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              className={cn(
                "group flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors ease-out hover:bg-accent/50",
                "screen-line-top screen-line-bottom"
              )}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative h-8 w-8 shrink-0">
                {link.iconDark ? (
                  <>
                    <Image
                      className="block rounded-lg select-none dark:hidden"
                      src={link.icon}
                      alt={link.title}
                      width={32}
                      height={32}
                      unoptimized
                    />
                    <Image
                      className="hidden rounded-lg select-none dark:block"
                      src={link.iconDark}
                      alt={link.title}
                      width={32}
                      height={32}
                      unoptimized
                    />
                  </>
                ) : (
                  <Image
                    className="rounded-lg select-none"
                    src={link.icon}
                    alt={link.title}
                    width={32}
                    height={32}
                    unoptimized
                  />
                )}
                <div className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset dark:ring-white/15" />
              </div>
              <h3 className="flex-1 font-medium">{link.title}</h3>
              <ArrowUpRightIcon className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:rotate-45" />
            </a>
          ))}
        </div>
      </div>
    </Panel>
  )
}
