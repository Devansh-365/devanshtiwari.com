import { Markdown } from "@/components/markdown"
import { ProseMono } from "@/components/ui/typography"
import { USER } from "@/features/portfolio/data/user"
import { Panel, PanelContent, PanelHeader, PanelNumber, PanelTitle } from "./panel"

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <div className="flex items-baseline gap-3">
          <PanelNumber>01</PanelNumber>
          <PanelTitle>About</PanelTitle>
        </div>
      </PanelHeader>
      <PanelContent>
        <ProseMono>
          <Markdown>{USER.about}</Markdown>
        </ProseMono>
      </PanelContent>
    </Panel>
  )
}
