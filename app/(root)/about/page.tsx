import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { ArrowRightIcon } from "lucide-react"

import { siteConfig } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { ContactActions } from "@/components/contact-actions"

export const metadata: Metadata = {
  title: "About Devansh Tiwari",
  description:
    "Product engineer at Metis, building AI stock analysis for Indian swing traders. Previously shipped enterprise AI products for Saudi Arabia and drove e-commerce personalization at Helium.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Devansh Tiwari",
    description:
      "Product engineer at Metis. Writes about cost-optimized LLM infrastructure, multi-provider routing, and shipping AI products end-to-end.",
    type: "profile",
    url: `${siteConfig.siteUrl}/about`,
  },
}

const TIMELINE = [
  {
    year: "2022",
    label: "Started coding",
    text: "Taught myself through YouTube, docs, and open source. Landed my first freelance client through an open source program. That first payment changed something in my head. It proved my skills had value.",
  },
  {
    year: "2022",
    label: "Nawgati internship",
    text: "Joined a startup thinking this is how real growth happens. After a few months, I felt like I was slowly becoming someone who just executes instructions. I quit to see how far I could go without a ceiling.",
  },
  {
    year: "2023",
    label: "Freelancing peak",
    text: "Went all-in. Pitched clients. Undercharged. Overworked. Made mistakes. Slowly improved. Built up to 50+ clients globally. At peak, closing 5 to 6 lakh projects and earning close to 2 lakh/month.",
  },
  {
    year: "2024",
    label: "DevKit + Helium",
    text: "Realized I only ever saw version one. Never scale. Never retention. Joined DevKit (AI SQL tools), then Helium (e-commerce personalization). Built recommendation engines that delivered 20 to 30% merchant sales uplift. Reduced latency by 60%. First time my work moved real business numbers.",
  },
  {
    year: "2025",
    label: "Zashit (founded + shut down)",
    text: "Co-founded an AI credit card reward optimizer. 50+ waitlist signups. Built the MVP including an OCR pipeline. Applied to YC. Shut it down over cofounder alignment issues. Learned more from that failure than any success.",
  },
  {
    year: "2025",
    label: "OSIT / Saudi Arabia",
    text: "Shipped 8 enterprise products across 5 domains for Saudi Arabia as sole engineer. UnifyHQ: 471 endpoints, 194 pages, 8 languages in 26 days. Nateeq AI: multi-tenant voice platform in 6 weeks. Deliverist: conversational commerce with RAG.",
  },
  {
    year: "2026",
    label: "Metis + product thinking",
    text: "Co-founding Metis, an AI stock analysis tool for Indian traders. Surveyed 70+ traders before writing code. Shipped concept to beta in 20 days. Joined NextLeap PM Fellowship because every time I felt stuck, it wasn't because I couldn't build. It was because I wasn't strong at selecting the right problems.",
  },
]

const SKILLS_TECHNICAL = [
  "TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js",
  "NestJS", "React Native", "Tailwind CSS", "PostgreSQL", "MongoDB",
  "Redis", "Docker", "Vercel", "OpenAI", "Claude API", "Vercel AI SDK",
  "RAG Pipelines", "Pinecone", "ElevenLabs",
]

const SKILLS_PRODUCT = [
  "Product Discovery", "User Research", "User Interviews",
  "PRDs", "RICE Prioritization", "Competitive Analysis",
  "Go-to-Market", "MVP Validation", "Unit Economics",
  "Funnel Analytics", "PostHog",
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@id": "https://www.devanshtiwari.com/#person",
    },
    name: "About Devansh Tiwari",
    url: "https://www.devanshtiwari.com/about",
    description:
      "Product engineer at Metis based in Delhi NCR, India. Builds AI products end-to-end, from user research to cost-optimized production.",
  }

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-full md:max-w-3xl">
        {/* Header */}
        <div className="border-x border-line px-4 screen-line-bottom">
          <h1 className="font-sans text-3xl font-semibold tracking-tight">
            About
          </h1>
        </div>

        {/* Separator */}
        <div className="relative flex h-8 w-full overflow-hidden border-x border-line before:absolute before:inset-0 before:-z-[1] before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]" />

        {/* Intro with photo */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <div className="flex flex-col gap-6 p-4 sm:flex-row sm:items-start sm:gap-8">
            <Image
              src={USER.avatar}
              alt="Devansh Tiwari"
              width={160}
              height={160}
              className="h-24 w-24 shrink-0 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-32 sm:w-32"
              priority
            />
            <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
              <p>
                I didn't start coding because I had some big vision. I started because I felt guilty. I had spent my parents' money on JEE coaching and it didn't work out. So before college even started, I made one decision: I'm going to pay my own fees.
              </p>
              <p>
                No passion story. Just guilt and a decision. That turned into teaching myself to code, getting into open source, landing freelance clients, and eventually shipping 50+ products for clients across the world.
              </p>
            </div>
          </div>
        </section>

        {/* The shift */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <header className="screen-line-bottom px-4">
            <h2 className="text-xl font-semibold tracking-tight">
              Why I moved to product
            </h2>
          </header>
          <div className="space-y-4 p-4 font-mono text-sm leading-relaxed text-muted-foreground">
            <p>
              At my freelancing peak I was making 2 lakh/month and closing 5 to 6 lakh projects. But I only ever saw version one. I never saw what happened after the MVP launched. Never saw scale. Never saw retention. I knew how to build. I didn't know how to think long term.
            </p>
            <p>
              At Helium, that changed. I built recommendation engines that delivered 20 to 30% merchant sales uplift. I reduced latency by 60%. I led a product initiative around conversational commerce. For the first time, my work was directly affecting real business outcomes. And whenever my suggestions got rejected, I felt it personally. That's when I understood I wasn't just an engineer anymore. I cared about product direction.
            </p>
            <p>
              I co-founded Zashit next. AI credit card reward optimizer. 50+ waitlist signups. YC application. Then it fell apart over cofounder misalignment. That failure taught me more about structured decision-making than any success.
            </p>
            <p>
              Every time I felt stuck, it wasn't because I couldn't build. It was because I wasn't strong at selecting the right problems, prioritizing effectively, or thinking in structured business terms. Product thinking directly attacks that weakness. That's why I moved to product. Not because it's trendy. Because it fills the exact gap in how I operate.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <header className="screen-line-bottom px-4">
            <h2 className="text-xl font-semibold tracking-tight">
              Timeline
            </h2>
          </header>
          <div className="divide-y divide-line">
            {TIMELINE.map((item, i) => (
              <div key={i} className="flex gap-4 p-4">
                <div className="flex w-12 shrink-0 flex-col items-center">
                  <span className="font-mono text-xs font-semibold text-foreground">
                    {item.year}
                  </span>
                  {i < TIMELINE.length - 1 && (
                    <div className="mt-2 flex-1 w-px bg-line" />
                  )}
                </div>
                <div>
                  <h3 className="font-sans text-sm font-semibold">
                    {item.label}
                  </h3>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <header className="screen-line-bottom px-4">
            <h2 className="text-xl font-semibold tracking-tight">
              What I work with
            </h2>
          </header>
          <div className="p-4">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Technical
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {SKILLS_TECHNICAL.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-line bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="mt-6 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {SKILLS_PRODUCT.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-line bg-muted px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: "50+", label: "Products shipped" },
              { value: "8", label: "Saudi Arabia projects" },
              { value: "70+", label: "Traders surveyed" },
              { value: "26", label: "Days to ship UnifyHQ" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`p-4 ${i > 0 ? "border-l border-line" : ""}`}
              >
                <p className="font-mono text-2xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What I believe */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <header className="screen-line-bottom px-4">
            <h2 className="text-xl font-semibold tracking-tight">
              What I believe
            </h2>
          </header>
          <div className="space-y-3 p-4 font-mono text-sm leading-relaxed text-muted-foreground">
            <p>
              Surveys lie about willingness to pay. They tell the truth about pain.
            </p>
            <p>
              When every AI product hallucinates, "I don't have that data" is a competitive advantage.
            </p>
            <p>
              The best products come from people who can both build the thing and decide whether it should exist.
            </p>
            <p>
              My journey isn't linear. I've quit stable roles. I've failed publicly. I've felt lost more than once. But I never stayed comfortable for too long.
            </p>
          </div>
        </section>

        {/* Links to other pages */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <div className="p-4">
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Explore
            </h2>
            <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {[
                { label: "Work", href: "/work", desc: "10 projects with case studies" },
                { label: "Blog", href: "/blog", desc: "Writing about building products" },
                { label: "Resume", href: "/resume", desc: "Full work history" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between rounded-lg border border-line p-3 transition-colors hover:bg-accent/50"
                >
                  <div>
                    <p className="font-sans text-sm font-medium group-hover:text-primary">
                      {link.label}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {link.desc}
                    </p>
                  </div>
                  <ArrowRightIcon className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-x border-line screen-line-top screen-line-bottom">
          <div className="p-6 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              Want to work together?
            </p>
            <ContactActions
              size="md"
              className="mt-4 flex-col justify-center sm:flex-row"
            />
          </div>
        </section>

        {/* Footer spacer */}
        <div className="screen-line-top h-4 w-full border-x border-line" />
      </div>
    </>
  )
}
