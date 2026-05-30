import { Metadata } from "next"
import dynamic from "next/dynamic"
import { ProfileHeader } from "@/features/portfolio/components/profile-header"
import { NowTicker } from "@/features/portfolio/components/now-ticker"
import { Overview } from "@/features/portfolio/components/overview"
import { SocialLinks } from "@/features/portfolio/components/social-links"
import { About } from "@/features/portfolio/components/about"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { cn } from "@/lib/utils"

// Below-the-fold sections — code-split so framer-motion and other heavy deps
// stay out of the initial JS chunk. ssr:true keeps HTML in the document so
// SEO, OG previews, and no-JS rendering all work.
const Testimonials = dynamic(() =>
  import("@/features/portfolio/components/testimonials").then((m) => m.Testimonials)
)
const GitHubContributions = dynamic(() =>
  import("@/features/portfolio/components/github-contributions").then((m) => m.GitHubContributions)
)
const TechStack = dynamic(() =>
  import("@/features/portfolio/components/tech-stack").then((m) => m.TechStack)
)
const WorkPreview = dynamic(() =>
  import("@/features/portfolio/components/work-preview").then((m) => m.WorkPreview)
)
const HowIWork = dynamic(() =>
  import("@/features/portfolio/components/how-i-work").then((m) => m.HowIWork)
)
const BlogPreview = dynamic(() =>
  import("@/features/portfolio/components/blog-preview").then((m) => m.BlogPreview)
)
const Experiences = dynamic(() =>
  import("@/features/portfolio/components/experiences").then((m) => m.Experiences)
)
const CTA = dynamic(() =>
  import("@/features/portfolio/components/cta").then((m) => m.CTA)
)

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-full overflow-x-hidden md:max-w-3xl">
      <ProfileHeader />
      <NowTicker />

      {/* Above-the-fold: render plain so animation-timeline can't leave it
          stuck at opacity 0 on tall viewports where the section never crosses
          the entry edge. */}
      <Overview />
      <SocialLinks />
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
