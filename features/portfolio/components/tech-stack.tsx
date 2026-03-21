import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

function getIconUrl(tech: { key: string; icon?: string }) {
  if (tech.icon) return tech.icon
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tech.key}/${tech.key}-original.svg`
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
                      <Image
                        src={getIconUrl(tech)}
                        alt={tech.title}
                        width={32}
                        height={32}
                        className="transition-opacity hover:opacity-80"
                        unoptimized
                      />
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
