import Image from "next/image"
import { currentlyReading } from "../data/currently-reading"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"

export function CurrentlyReading() {
  const { title, author, cover, progress } = currentlyReading

  return (
    <Panel id="reading">
      <PanelHeader>
        <PanelTitle>Currently Reading</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="flex items-start gap-4">
          <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded shadow-md">
            <Image
              src={cover}
              alt={`Cover of ${title}`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2 pt-1">
            <div>
              <p className="font-sans text-sm font-semibold leading-tight text-foreground">
                {title}
              </p>
              <p className="font-mono text-xs text-muted-foreground">{author}</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-foreground transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {progress}%
              </span>
            </div>
          </div>
        </div>
      </PanelContent>
    </Panel>
  )
}
