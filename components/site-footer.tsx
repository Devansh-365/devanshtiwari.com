import { Github, Linkedin, Mail, RssIcon, Twitter } from "lucide-react"

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site"
import { cn } from "@/lib/utils"

export function SiteFooter() {
  return (
    <footer className="w-full overflow-x-hidden px-2">
      <div className="screen-line-top mx-auto border-x border-line pt-4 md:max-w-3xl">
        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          Built by{" "}
          <a
            className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
            href="https://twitter.com/devansh_0718"
            target="_blank"
            rel="noopener"
          >
            Devansh Tiwari
          </a>
          . The source code is available on{" "}
          <a
            className="font-medium underline underline-offset-4 transition-colors hover:text-foreground"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .
        </p>

        <div className="screen-line-top screen-line-bottom flex w-full">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-line bg-background px-4">
            <a
              className="flex font-mono text-xs font-medium text-muted-foreground transition-colors hover:text-foreground max-sm:hidden"
              href="/llms.txt"
              target="_blank"
              rel="noopener"
            >
              llms.txt
            </a>

            <Separator className="max-sm:hidden" />

            <SocialLink
              href="https://twitter.com/devansh_0718"
              label="X / Twitter"
            >
              <Twitter className="h-4 w-4" />
            </SocialLink>

            <Separator />

            <SocialLink
              href="https://github.com/Devansh-365"
              label="GitHub"
            >
              <Github className="h-4 w-4" />
            </SocialLink>

            <Separator />

            <SocialLink
              href="https://www.linkedin.com/in/devansh-tiwari-3342611a6/"
              label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </SocialLink>

            <Separator />

            <SocialLink
              href="mailto:devanshtiwari365@gmail.com"
              label="Email"
            >
              <Mail className="h-4 w-4" />
            </SocialLink>

            <Separator />

            <SocialLink
              href={`${SITE_INFO.url}/rss`}
              label="RSS"
            >
              <RssIcon className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-24 sm:h-2" />
      </div>
    </footer>
  )
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      className="flex items-center text-muted-foreground transition-colors hover:text-foreground"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only">{label}</span>
    </a>
  )
}

function Separator({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("flex h-11 w-px bg-line", className)} {...props} />
}
