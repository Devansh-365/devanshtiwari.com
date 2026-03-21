import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { TechStack as TechStackType } from "../types/tech-stack"

import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

function getDevIconUrl(key: string) {
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${key}/${key}-original.svg`
}

function TechIcon({ tech }: { tech: TechStackType }) {
  // Has both light and dark icon variants
  if (tech.icon && tech.iconDark) {
    return (
      <>
        <Image
          src={tech.icon}
          alt={tech.title}
          width={32}
          height={32}
          className="block transition-opacity hover:opacity-80 dark:hidden"
          unoptimized
        />
        <Image
          src={tech.iconDark}
          alt={tech.title}
          width={32}
          height={32}
          className="hidden transition-opacity hover:opacity-80 dark:block"
          unoptimized
        />
      </>
    )
  }

  // Has single custom icon
  if (tech.icon) {
    return (
      <Image
        src={tech.icon}
        alt={tech.title}
        width={32}
        height={32}
        className="transition-opacity hover:opacity-80"
        unoptimized
      />
    )
  }

  // Default: devicon CDN
  return (
    <Image
      src={getDevIconUrl(tech.key)}
      alt={tech.title}
      width={32}
      height={32}
      className="transition-opacity hover:opacity-80"
      unoptimized
    />
  )
}

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <TooltipProvider>
          <ul className="flex flex-wrap gap-4 select-none">
            {TECH_STACK.map((tech) => (
              <li key={tech.key} className="flex">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener"
                      aria-label={tech.title}
                      className="flex items-center"
                    >
                      <TechIcon tech={tech} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </li>
            ))}
          </ul>
        </TooltipProvider>
      </PanelContent>
    </Panel>
  )
}
