import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Overview } from "@/features/portfolio/components/overview"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { About } from "@/features/portfolio/components/about"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { BlogPreview } from "@/features/portfolio/components/blog-preview"
import { Experiences } from "@/features/portfolio/components/experiences"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { cn } from "@/lib/utils"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-full overflow-x-hidden md:max-w-3xl">
      <ProfileHeader />
      <Separator />

      <Overview />
      <SocialLinks />
      <Separator />

      <About />
      <div className="flex h-2 w-full border-x border-line" />

      <GitHubContributions />
      <Separator />

      <TechStack />
      <Separator />

      <BlogPreview />
      <Separator />

      <Experiences />
      <Separator />
    </div>
  )
}

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full overflow-hidden border-x border-line",
        "before:absolute before:inset-0 before:-z-[1]",
        "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]",
        className
      )}
    />
  )
}
