import { Metadata } from "next"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { Overview } from "@/features/portfolio/components/overview"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { About } from "@/features/portfolio/components/about"
import { TechStack } from "@/features/portfolio/components/tech-stack"
import { WorkPreview } from "@/features/portfolio/components/work-preview"
import { HowIWork } from "@/features/portfolio/components/how-i-work"
import { BlogPreview } from "@/features/portfolio/components/blog-preview"
import { Experiences } from "@/features/portfolio/components/experiences"
import { CTA } from "@/features/portfolio/components/cta"
import { GitHubContributions } from "@/features/portfolio/components/github-contributions"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-full overflow-x-hidden md:max-w-3xl">
      <ProfileHeader />
      <Separator />

      <ScrollReveal>
        <Overview />
        <SocialLinks />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <About />
      </ScrollReveal>
      <div className="flex h-2 w-full border-x border-line" />

      <ScrollReveal delay={0.1}>
        <GitHubContributions />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <TechStack />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <WorkPreview />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <HowIWork />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <BlogPreview />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <Experiences />
      </ScrollReveal>
      <Separator />

      <ScrollReveal delay={0.05}>
        <CTA />
      </ScrollReveal>
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
