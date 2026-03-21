import { MapPinIcon, MailIcon, PhoneIcon, CodeXmlIcon, BriefcaseBusinessIcon, LightbulbIcon, ClockIcon } from "lucide-react"
import { USER } from "@/features/portfolio/data/user"
import { cn } from "@/lib/utils"
import { Panel, PanelContent } from "../panel"

function IntroItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex items-center gap-4 font-mono text-sm", className)} {...props} />
}

function IntroItemIcon({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-line ring-offset-1 ring-offset-background",
        "[&_svg]:pointer-events-none [&_svg]:text-muted-foreground [&_svg]:h-4 [&_svg]:w-4",
        className
      )}
      {...props}
    />
  )
}

function IntroItemContent({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />
}

function IntroItemLink({ className, ...props }: React.ComponentProps<"a">) {
  return <a className={cn("underline-offset-4 hover:underline", className)} target="_blank" rel="noopener" {...props} />
}

function getJobIcon(title: string) {
  if (/(developer|engineer)/i.test(title)) return <CodeXmlIcon />
  if (/(founder|co-founder)/i.test(title)) return <LightbulbIcon />
  return <BriefcaseBusinessIcon />
}

function urlToName(url: string) {
  try { return new URL(url).hostname.replace(/^www\./, "") } catch { return url }
}

export function Overview() {
  return (
    <Panel className="after:content-none">
      <h2 className="sr-only">Overview</h2>
      <PanelContent className="space-y-2.5">
        {USER.jobs.map((job, index) => (
          <IntroItem key={index}>
            <IntroItemIcon>{getJobIcon(job.title)}</IntroItemIcon>
            <IntroItemContent>
              {job.title} @
              <IntroItemLink className="ml-0.5 font-medium" href={job.website}>
                {job.company}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        ))}

        <div className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
          <IntroItem>
            <IntroItemIcon><MapPinIcon /></IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}>
                {USER.address}
              </IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><ClockIcon /></IntroItemIcon>
            <IntroItemContent>{USER.timeZone.replace(/_/g, " ")}</IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><MailIcon /></IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink href={`mailto:${USER.email}`}>{USER.email}</IntroItemLink>
            </IntroItemContent>
          </IntroItem>

          <IntroItem>
            <IntroItemIcon><PhoneIcon /></IntroItemIcon>
            <IntroItemContent>
              <IntroItemLink href="tel:+919560879697">+91 9560879697</IntroItemLink>
            </IntroItemContent>
          </IntroItem>
        </div>
      </PanelContent>
    </Panel>
  )
}
