import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import {
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ZapIcon,
  StarIcon,
  MailIcon,
  MessageSquareIcon,
  FileTextIcon,
  BarChart3Icon,
  CalendarIcon,
  GitMergeIcon,
  ClockIcon,
  TrendingUpIcon,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { USER } from "@/features/portfolio/data/user"
import { ContactActions } from "@/components/contact-actions"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Panel, PanelHeader, PanelTitle } from "@/features/portfolio/components/panel"
import { DTMark } from "@/components/dt-mark"
import {
  TESTIMONIALS_1,
  TESTIMONIALS_2,
} from "@/features/portfolio/data/testimonials"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "AI Automation Audits for SaaS | Devansh Tiwari",
  description:
    "I find 3 AI automations in your SaaS in 1 day. $500 audit. Built by the founder of Metis (live AI in production). 50+ products shipped.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "AI Automation Audits for SaaS Founders",
    description:
      "I find 3 AI automations in your SaaS in 1 day. $500. Then build them in 7 days for $1,500.",
    type: "website",
    url: `${siteConfig.siteUrl}/services`,
  },
}

const PROOF_STATS = [
  { value: "50+", label: "Products shipped" },
  { value: "60%", label: "AI cost cut at Metis" },
  { value: "20-30%", label: "Sales lift @ Helium" },
  { value: "8", label: "Saudi enterprise builds" },
]

const PROCESS_STEPS = [
  {
    n: "01",
    day: "Day 0",
    title: "30-min intro call",
    desc: "I learn your SaaS, your stack, and where the manual work hides.",
  },
  {
    n: "02",
    day: "Day 1",
    title: "I dig in",
    desc: "Full day inside your tools, workflows, and team's grind. No meetings.",
  },
  {
    n: "03",
    day: "Day 2",
    title: "5-page report",
    desc: "Three automations ranked by ROI. Time saved per week. Build estimate.",
  },
  {
    n: "04",
    day: "After",
    title: "Optional next step",
    desc: "Build the first one for $1,500. Or all three for $3,500. Your call.",
  },
]

const PRICING_TIERS = [
  {
    name: "Audit",
    price: "$500",
    duration: "1 day",
    headline: "Find what's automatable",
    features: [
      "1-day deep dive",
      "5-page written report",
      "3 ranked automations",
      "Hours/week saved estimate",
      "Build cost + timeline",
      "Refund guarantee",
    ],
    cta: "Book the audit",
    highlight: false,
  },
  {
    name: "Build",
    price: "$1,500",
    duration: "7 days",
    headline: "Audit + first build",
    features: [
      "Everything in Audit",
      "1 production-ready automation",
      "Integrated with your tools",
      "Deployed + documented",
      "14-day bug support",
      "Clean handoff",
    ],
    cta: "Start the build",
    highlight: true,
    badge: "Most picked",
  },
  {
    name: "Bundle",
    price: "$3,500",
    duration: "2 weeks",
    headline: "All 3 from the audit",
    features: [
      "Everything in Build",
      "All 3 automations built",
      "Full integrations",
      "Analytics dashboards",
      "30-day bug support",
      "Optional retainer",
    ],
    cta: "Get the bundle",
    highlight: false,
  },
]

const CASE_STUDIES = [
  {
    company: "Metis",
    role: "Co-founder & Builder",
    metric: "60%",
    metricLabel: "AI cost reduction",
    result: "Live in production. Real users. Real market data.",
    href: "https://trymetis.app",
    external: true,
  },
  {
    company: "Helium",
    role: "AI Engineer",
    metric: "20-30%",
    metricLabel: "Sales uplift",
    result: "Recommendation engines. Latency cut by 60%.",
    href: "/work",
    external: false,
  },
  {
    company: "OSIT",
    role: "Sole Engineer",
    metric: "8",
    metricLabel: "Enterprise products",
    result: "Including Nateeq AI — multi-tenant voice AI in 6 weeks.",
    href: "/work",
    external: false,
  },
]

const EXAMPLE_AUTOMATIONS = [
  {
    icon: MailIcon,
    name: "Inbox → CRM",
    desc: "Reads incoming emails, extracts data, updates HubSpot.",
    saves: "8 hrs/wk",
  },
  {
    icon: MessageSquareIcon,
    name: "Slack → Linear",
    desc: "Turns customer feedback in Slack into ranked Linear tickets.",
    saves: "5 hrs/wk",
  },
  {
    icon: FileTextIcon,
    name: "Meeting → Action items",
    desc: "Reads call transcripts, drafts action items in Notion.",
    saves: "6 hrs/wk",
  },
  {
    icon: BarChart3Icon,
    name: "Dashboards → Weekly digest",
    desc: "Pulls 5 dashboards into a Monday morning email summary.",
    saves: "4 hrs/wk",
  },
  {
    icon: CalendarIcon,
    name: "Forms → Calendar",
    desc: "Form submissions become qualified bookings on your calendar.",
    saves: "3 hrs/wk",
  },
  {
    icon: GitMergeIcon,
    name: "PRs → Release notes",
    desc: "Generates customer-facing release notes from merged PRs.",
    saves: "2 hrs/wk",
  },
]

const FAQ = [
  {
    q: "Why $500 for an audit?",
    a: "It covers a full day of my time. You walk away with a real, actionable report whether you hire me to build or not. If I can't surface at least one automation worth $500/month in saved time, you get a full refund. That has never happened.",
  },
  {
    q: "I just shipped my SaaS. Is this for me?",
    a: "If you have at least one team member doing repetitive work in tools like Slack, Notion, Linear, your CRM, or your inbox — yes. Most early-stage SaaS founders have 5+ workflows that could be automated and don't realize it.",
  },
  {
    q: "What kind of automations do you build?",
    a: "AI agents that take actions, not chatbots. Examples: pulling data from 5 dashboards into a weekly report, monitoring competitor pricing, processing form submissions and updating your CRM, summarizing Slack into action items, drafting replies in your voice. Custom to your stack.",
  },
  {
    q: "You're young. Why should I trust you?",
    a: "Fair question. I've shipped 50+ products since 2022. I run Metis, an AI product live in production with real users. I cut my own AI costs 60% in 30 days. I built voice AI for Saudi enterprise clients in 6 weeks. I'm AI-native because I came up building with these tools, not adapting to them. You're not hiring experience. You're hiring speed and a builder who actually ships.",
  },
  {
    q: "What if the audit doesn't find anything useful?",
    a: "Full refund. No questions. I'm confident because spending a day inside any SaaS surfaces multiple automation opportunities. The risk is on me, not you.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. After a build, you can put me on a $300/month/automation retainer. I monitor it, fix bugs, and tune prompts as your data changes. Optional.",
  },
  {
    q: "How do I know you won't disappear?",
    a: "I'm building Metis publicly. My Twitter, LinkedIn, GitHub, and blog are all live and active. You can verify everything I claim. I work in 7-day sprints with daily updates so you always know exactly where things stand.",
  },
  {
    q: "Why automations and not chatbots?",
    a: "Chatbots are commoditized in 2026. ChatGPT can be embedded by anyone. Real AI value comes from agents that take actions: read your email, update your CRM, generate reports, monitor your data. That's where the time savings live.",
  },
]

const FEATURED_TESTIMONIAL = TESTIMONIALS_1[0]
const SECONDARY_TESTIMONIALS = [TESTIMONIALS_1[1], TESTIMONIALS_2[0]].filter(Boolean)

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Automation Consulting",
    provider: { "@id": "https://www.devanshtiwari.com/#person" },
    name: "AI Automation Audit + Build",
    description:
      "1-day AI automation audit for SaaS founders. Find 3 high-ROI automations. Optional 7-day build sprint.",
    url: "https://www.devanshtiwari.com/services",
    offers: PRICING_TIERS.map((t) => ({
      "@type": "Offer",
      name: t.name,
      price: t.price.replace("$", "").replace(",", ""),
      priceCurrency: "USD",
      description: t.headline,
    })),
  }

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-full overflow-x-hidden md:max-w-3xl">
        {/* HERO */}
        <Panel className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-500/[0.04] blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-foreground/[0.03] blur-3xl"
          />

          {/* DT mark watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 opacity-[0.06] sm:right-10 sm:top-10"
          >
            <div className="scale-[2] sm:scale-[3]">
              <DTMark />
            </div>
          </div>

          <div className="relative px-4 py-12 sm:px-8 sm:py-20">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-background/60 px-3 py-1.5 backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Taking 2 audits in May
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 font-sans text-[2.25rem] font-semibold leading-[1.05] tracking-tight sm:text-[3.75rem]">
              I find{" "}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">3 AI automations</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 h-3 bg-gradient-to-r from-emerald-500/40 via-emerald-500/20 to-transparent sm:bottom-2 sm:h-4"
                />
              </span>
              <br className="hidden sm:block" /> in your SaaS{" "}
              <span className="text-muted-foreground/60">in 1 day.</span>
            </h1>

            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              <span className="font-mono text-foreground">$500.</span>{" "}
              5-page report. Refund if I don't surface at least one automation worth{" "}
              <span className="font-mono text-foreground">$500/month</span> in saved time.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <ContactActions size="md" />
              <Link
                href="#pricing"
                className="font-mono text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
              >
                See pricing →
              </Link>
            </div>

            {/* Trust line */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                <span>Refund guarantee</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                <span>7-day delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckIcon className="h-3.5 w-3.5 text-emerald-500" />
                <span>Daily updates</span>
              </div>
            </div>

            {/* Report preview mockup */}
            <div className="relative mt-10">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-2 translate-y-2 rounded-lg border border-line/60 bg-background/40"
              />
              <div className="relative rounded-lg border border-line bg-background/80 p-5 shadow-sm backdrop-blur-sm sm:p-6">
                {/* Mockup header */}
                <div className="flex items-center justify-between border-b border-line pb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                      <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      audit-report.pdf
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground/60">
                    Page 3 of 5
                  </span>
                </div>

                {/* Mockup body */}
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      Automation #1 — High ROI
                    </div>
                    <div className="mt-1 font-sans text-sm font-semibold">
                      Slack feedback → Linear tickets
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 border-y border-line py-3">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        Time saved
                      </div>
                      <div className="mt-0.5 font-sans text-base font-semibold">
                        8 hrs/wk
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        Build cost
                      </div>
                      <div className="mt-0.5 font-sans text-base font-semibold">
                        $1,500
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                        Payback
                      </div>
                      <div className="mt-0.5 font-sans text-base font-semibold text-emerald-600 dark:text-emerald-400">
                        2 weeks
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="h-1.5 w-full rounded-full bg-muted-foreground/10" />
                    <div className="h-1.5 w-[90%] rounded-full bg-muted-foreground/10" />
                    <div className="h-1.5 w-[75%] rounded-full bg-muted-foreground/10" />
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                ↑ A page from the audit you'll receive
              </div>
            </div>
          </div>
        </Panel>

        {/* PROOF STRIP */}
        <Panel className="relative bg-muted/20">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {PROOF_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={cn(
                  "px-4 py-6 sm:px-5 sm:py-8",
                  idx > 0 && "border-l border-line",
                  idx >= 2 && "border-t border-line sm:border-t-0"
                )}
              >
                <div className="font-sans text-3xl font-semibold leading-none tracking-tight sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <DiagonalSeparator />

        {/* LIVE METIS */}
        <ScrollReveal delay={0.05}>
          <Panel className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 top-0 h-full w-32 bg-gradient-to-l from-emerald-500/[0.04] to-transparent"
            />
            <a
              href="https://trymetis.app"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group block p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-line bg-gradient-to-br from-muted/40 to-muted/10">
                  <SparklesIcon className="h-5 w-5" />
                  <div className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-background">
                    <div className="h-1 w-1 rounded-full bg-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      Currently building
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
                      Live
                    </span>
                  </div>
                  <h3 className="mt-1.5 flex items-center gap-1.5 font-sans text-base font-semibold sm:text-lg">
                    Metis — AI stock analysis in production
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    Real users. Real market data. The exact product I'd build for you, but for myself.
                  </p>
                </div>
              </div>
            </a>
          </Panel>
        </ScrollReveal>

        <Spacer />

        {/* CASE STUDIES */}
        <ScrollReveal delay={0.05}>
          <Panel>
            <PanelHeader>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Where I've shipped before
              </p>
              <PanelTitle className="text-xl">Track record</PanelTitle>
            </PanelHeader>
            <div className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {CASE_STUDIES.map((cs) => (
                <a
                  key={cs.company}
                  href={cs.href}
                  target={cs.external ? "_blank" : undefined}
                  rel={cs.external ? "noopener noreferrer" : undefined}
                  className="group relative block p-5 transition-colors hover:bg-muted/20"
                >
                  <div className="flex items-baseline justify-between">
                    <div className="font-sans text-lg font-semibold tracking-tight">
                      {cs.company}
                    </div>
                    <ArrowRightIcon className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                    {cs.role}
                  </div>

                  <div className="mt-5 flex items-baseline gap-1">
                    <div className="font-sans text-3xl font-semibold leading-none tracking-tight">
                      {cs.metric}
                    </div>
                    <TrendingUpIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                    {cs.metricLabel}
                  </div>

                  <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
                    {cs.result}
                  </p>
                </a>
              ))}
            </div>
          </Panel>
        </ScrollReveal>

        <Spacer />

        {/* EXAMPLES — visual grid showing what you'd build */}
        <ScrollReveal delay={0.05}>
          <Panel>
            <PanelHeader>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                What I actually build
              </p>
              <PanelTitle className="text-xl">Real automations</PanelTitle>
            </PanelHeader>
            <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x">
              {EXAMPLE_AUTOMATIONS.map((ex, idx) => {
                const Icon = ex.icon
                return (
                  <div
                    key={ex.name}
                    className={cn(
                      "group relative p-5 transition-colors hover:bg-muted/20",
                      idx >= 2 && "sm:border-t sm:border-line",
                      idx >= 4 && "sm:border-t sm:border-line"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line bg-gradient-to-br from-muted/30 to-transparent transition-colors group-hover:border-foreground/30">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <h3 className="font-sans text-sm font-semibold">
                            {ex.name}
                          </h3>
                          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            <ClockIcon className="h-2.5 w-2.5" />
                            {ex.saves}
                          </span>
                        </div>
                        <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                          {ex.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="border-t border-line bg-muted/10 px-5 py-3">
              <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                <span className="text-foreground">Note:</span> These are real examples I've built. Yours will be custom to your stack and workflows.
              </p>
            </div>
          </Panel>
        </ScrollReveal>

        <DiagonalSeparator />

        {/* TESTIMONIALS */}
        {FEATURED_TESTIMONIAL && (
          <ScrollReveal delay={0.05}>
            <Panel>
              <PanelHeader>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                  People I've worked with
                </p>
                <PanelTitle className="text-xl">What they say</PanelTitle>
              </PanelHeader>

              {/* Featured big quote */}
              <div className="relative border-b border-line bg-gradient-to-br from-muted/20 via-muted/10 to-transparent p-6 sm:p-8">
                {/* Big decorative quote mark */}
                <div
                  aria-hidden="true"
                  className="absolute right-6 top-4 font-serif text-7xl leading-none text-foreground/[0.06] sm:text-9xl"
                >
                  &ldquo;
                </div>

                <div className="relative">
                  <div className="flex gap-1 text-foreground">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 max-w-2xl font-sans text-base leading-relaxed sm:text-lg">
                    &ldquo;{FEATURED_TESTIMONIAL.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-background font-mono text-xs font-semibold">
                      {FEATURED_TESTIMONIAL.authorName
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-sans text-sm font-semibold">
                        {FEATURED_TESTIMONIAL.authorName}
                      </div>
                      <div className="font-mono text-[11px] text-muted-foreground">
                        {FEATURED_TESTIMONIAL.authorTagline}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary quotes */}
              {SECONDARY_TESTIMONIALS.length > 0 && (
                <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  {SECONDARY_TESTIMONIALS.map((t, i) => (
                    <div key={`${t.authorName}-${i}`} className="p-5">
                      <p className="font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-muted/20 font-mono text-[10px] font-semibold">
                          {t.authorName
                            .split(" ")
                            .map((w) => w[0])
                            .join("")
                            .slice(0, 2)}
                        </div>
                        <div className="min-w-0">
                          <div className="truncate font-sans text-xs font-semibold">
                            {t.authorName}
                          </div>
                          {t.authorTagline && (
                            <div className="truncate font-mono text-[10px] text-muted-foreground">
                              {t.authorTagline}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Panel>
          </ScrollReveal>
        )}

        <Spacer />

        {/* PROCESS */}
        <ScrollReveal delay={0.05}>
          <Panel>
            <PanelHeader>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                What happens after you book
              </p>
              <PanelTitle className="text-xl">How the audit works</PanelTitle>
            </PanelHeader>
            <div className="grid sm:grid-cols-2">
              {PROCESS_STEPS.map((step, idx) => (
                <div
                  key={step.day}
                  className={cn(
                    "relative p-5",
                    idx % 2 === 1 && "sm:border-l sm:border-line",
                    idx >= 2 && "border-t border-line"
                  )}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-3xl font-semibold leading-none tracking-tight text-muted-foreground/30">
                      {step.n}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      {step.day}
                    </span>
                  </div>
                  <h3 className="mt-3 font-sans text-base font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </ScrollReveal>

        <DiagonalSeparator />

        {/* PRICING */}
        <ScrollReveal delay={0.05}>
          <Panel id="pricing">
            <PanelHeader>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Pick what fits
              </p>
              <PanelTitle className="text-xl">Pricing</PanelTitle>
            </PanelHeader>

            <div className="grid divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "relative flex flex-col p-5",
                    tier.highlight &&
                      "bg-gradient-to-b from-muted/30 via-muted/10 to-transparent"
                  )}
                >
                  {tier.highlight && (
                    <>
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-foreground to-transparent"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px hidden ring-1 ring-foreground/10 sm:block"
                      />
                    </>
                  )}

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-sans text-base font-semibold">
                        {tier.name}
                      </h3>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                        {tier.headline}
                      </p>
                    </div>
                    {tier.badge && (
                      <span className="rounded-full border border-foreground/20 bg-foreground/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-sans text-3xl font-semibold leading-none tracking-tight">
                      {tier.price}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                      / {tier.duration}
                    </span>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2">
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 font-mono text-xs leading-snug text-muted-foreground"
                      >
                        <CheckIcon
                          className={cn(
                            "mt-0.5 h-3 w-3 shrink-0",
                            tier.highlight
                              ? "text-emerald-500"
                              : "text-foreground"
                          )}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={siteConfig.calUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-6 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 font-mono text-xs font-medium transition-all",
                      tier.highlight
                        ? "bg-foreground text-background hover:opacity-90"
                        : "border border-line text-foreground hover:bg-foreground hover:text-background"
                    )}
                  >
                    {tier.cta}
                    <ArrowRightIcon className="h-3 w-3" />
                  </a>
                </div>
              ))}
            </div>

            {/* Guarantee inline strip */}
            <div className="flex items-center gap-3 border-t border-line bg-muted/10 px-5 py-3">
              <ShieldCheckIcon className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
              <p className="font-mono text-xs leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Refund guarantee:</span>{" "}
                If the audit doesn't surface a $500/mo automation, you don't pay.
              </p>
            </div>
          </Panel>
        </ScrollReveal>

        <Spacer />

        {/* FAQ */}
        <ScrollReveal delay={0.05}>
          <Panel>
            <PanelHeader>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                Things you're probably wondering
              </p>
              <PanelTitle className="text-xl">Questions</PanelTitle>
            </PanelHeader>
            <div className="divide-y divide-line">
              {FAQ.map((item) => (
                <details
                  key={item.q}
                  className="group p-5 transition-colors open:bg-muted/10 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-sans text-sm font-semibold leading-snug">
                    <span>{item.q}</span>
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line font-mono text-xs text-muted-foreground transition-all group-open:rotate-45 group-open:border-foreground group-open:text-foreground">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-9 font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Panel>
        </ScrollReveal>

        <Spacer />

        {/* PERSONAL */}
        <ScrollReveal delay={0.05}>
          <Panel>
            <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <Image
                src={USER.avatar}
                alt="Devansh Tiwari"
                width={120}
                height={120}
                className="h-20 w-20 shrink-0 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background grayscale transition-[filter] duration-500 hover:grayscale-0 sm:h-24 sm:w-24"
              />
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    You'd be working with
                  </p>
                  <h3 className="mt-1 font-sans text-xl font-semibold tracking-tight">
                    Devansh Tiwari
                  </h3>
                </div>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  50+ products shipped. Co-founder of Metis. Daily updates,
                  async-first, no BS meetings. If I can't help, I'll tell you on
                  the first call.
                </p>
                <div className="flex flex-wrap gap-3 pt-1 font-mono text-xs">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 hover:no-underline"
                  >
                    Full story
                    <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-1.5 text-foreground underline underline-offset-4 hover:no-underline"
                  >
                    See all my work
                    <ArrowRightIcon className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </Panel>
        </ScrollReveal>

        <Spacer />

        {/* FINAL CTA */}
        <ScrollReveal delay={0.05}>
          <Panel className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.05] blur-3xl"
            />
            <div className="relative space-y-5 px-4 py-12 text-center sm:px-6 sm:py-16">
              <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-background shadow-sm">
                <ZapIcon className="h-5 w-5" />
              </div>
              <h2 className="font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to find what's automatable?
              </h2>
              <p className="mx-auto max-w-md font-mono text-xs leading-relaxed text-muted-foreground sm:text-sm">
                30-min intro call. If we're a fit, I run the audit the same week.
                If we're not, I'll tell you straight.
              </p>
              <div className="flex justify-center pt-2">
                <ContactActions size="md" />
              </div>
            </div>
          </Panel>
        </ScrollReveal>

        <DiagonalSeparator />
      </div>
    </>
  )
}

function DiagonalSeparator() {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full overflow-hidden border-x border-line",
        "before:absolute before:inset-0 before:-z-[1]",
        "before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]"
      )}
    />
  )
}

function Spacer() {
  return <div className="flex h-2 w-full border-x border-line" />
}
