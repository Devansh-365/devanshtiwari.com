import { Metadata } from "next"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { NowTicker } from "@/features/portfolio/components/now-ticker"
import { Overview } from "@/features/portfolio/components/overview"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { About } from "@/features/portfolio/components/about"
import { Testimonials } from "@/features/portfolio/components/testimonials"
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
      <NowTicker />

      <ScrollReveal>
        <Overview />
        <SocialLinks />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.05}>
        <About />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.05}>
        <Testimonials />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.1}>
        <GitHubContributions />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.05}>
        <TechStack />
      </ScrollReveal>
      <Stripe />

      <ScrollReveal delay={0.05}>
        <WorkPreview />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.05}>
        <HowIWork />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.05}>
        <BlogPreview />
      </ScrollReveal>
      <Line />

      <ScrollReveal delay={0.05}>
        <Experiences />
      </ScrollReveal>
      <Stripe />

      <ScrollReveal delay={0.05}>
        <CTA />
      </ScrollReveal>
      <Stripe />
    </div>
  )
}

function Stripe({ className }: { className?: string }) {
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

function Line() {
  return <div className="h-3 w-full border-x border-b border-line" />
}
