import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { Separator } from "@/components/ui/separator"
import { generateBreadcrumbs } from "@/lib/schema"

export const metadata: Metadata = {
  title: "Architecture",
  description:
    "How devanshtiwari.com is built. Site structure, tech stack, content pipeline, SEO, CI/CD, component hierarchy, and design system.",
  alternates: { canonical: "/architecture" },
  keywords: [
    "site architecture",
    "Next.js",
    "app router",
    "CI/CD",
    "content pipeline",
    "component tree",
    "Tailwind CSS",
    "MDX",
    "SEO",
  ],
}

function SectionHeading({ label }: { label: string }) {
  return (
    <h2 className="mb-4 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {label}
    </h2>
  )
}

function IndexLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60">
      {children}
    </span>
  )
}

function FlowNode({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  )
}

function FlowArrow() {
  return <span className="font-mono text-[10px] text-muted-foreground/40">→</span>
}

export default function ArchitecturePage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Architecture" },
  ])

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Site Architecture — devanshtiwari.com",
    description: "Architecture diagrams for devanshtiwari.com",
    url: `${siteConfig.siteUrl}/architecture`,
    author: { "@id": "https://www.devanshtiwari.com/#person" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.siteUrl}/architecture`,
    },
  }

  return (
    <>
      <script
        id="architecture-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        id="architecture-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      <div className="mx-auto max-w-full md:max-w-3xl">
        
        <div className="screen-line-bottom border-x border-line px-4">
          <div className="py-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Home
            </Link>
          </div>

          <div className="pb-6">
            <IndexLabel>System Reference</IndexLabel>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">
              Architecture
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              How this site is built. The canonical reference for routes, stack, content pipeline,
              SEO, CI/CD, component hierarchy, state management, and the design system.
            </p>
          </div>
        </div>

        
        <div className="relative flex h-8 w-full overflow-hidden border-x border-line before:absolute before:inset-0 before:-z-[1] before:bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] before:[background-size:10px_10px]" />

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>01</IndexLabel>
              <SectionHeading label="Site Map" />
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {[
                { route: "/", name: "Homepage", type: "Page" },
                { route: "/work", name: "Work listing", type: "Page" },
                { route: "/work/[slug]", name: "Project case study", type: "Dynamic" },
                { route: "/blog", name: "Blog listing", type: "Page" },
                { route: "/blog/[slug]", name: "Blog post (MDX)", type: "Dynamic" },
                { route: "/about", name: "About page", type: "Page" },
                { route: "/services", name: "Services page", type: "Page" },
                { route: "/resume", name: "Resume viewer", type: "Page" },
                { route: "/architecture", name: "This page", type: "Page" },
                { route: "/rss", name: "RSS feed", type: "Route" },
                { route: "/sitemap.xml", name: "Sitemap", type: "Route" },
                { route: "/robots.txt", name: "Robots rules", type: "Route" },
              ].map((r) => (
                <div
                  key={r.route}
                  className="flex items-baseline gap-3 bg-background px-4 py-2.5 transition-colors hover:bg-accent/30"
                >
                  <span className="w-28 shrink-0 font-mono text-[11px] text-muted-foreground/60">
                    {r.route}
                  </span>
                  <span className="flex-1 text-sm">{r.name}</span>
                  <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {r.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>02</IndexLabel>
              <SectionHeading label="Tech Stack" />
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {[
                { layer: "Framework", value: "Next.js 15 (App Router)" },
                { layer: "Runtime", value: "React 19 (RC)" },
                { layer: "Language", value: "TypeScript 5.7" },
                { layer: "Styling", value: "Tailwind CSS 3.4 + CSS Variables" },
                { layer: "Animations", value: "Framer Motion + CSS scroll-driven" },
                { layer: "Content", value: "MDX (mdx-bundler) + Medium RSS" },
                { layer: "UI Primitives", value: "Radix UI + shadcn/ui patterns" },
                { layer: "Icons", value: "Lucide React" },
                { layer: "OG Images", value: "Satori (Vercel)" },
                { layer: "Deployment", value: "Vercel (Serverless)" },
                { layer: "Analytics", value: "Plausible (privacy-first)" },
                { layer: "Fonts", value: "Inter + JetBrains Mono" },
              ].map((item) => (
                <div
                  key={item.layer}
                  className="flex items-baseline justify-between gap-3 bg-background px-4 py-3 transition-colors hover:bg-accent/30"
                >
                  <span className="font-mono text-[11px] text-muted-foreground/60">
                    {item.layer}
                  </span>
                  <span className="text-right text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>03</IndexLabel>
              <SectionHeading label="Content Pipeline" />
            </div>

            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-line bg-muted/30 p-4">
              <FlowNode>features/blog/data/posts/*.mdx</FlowNode>
              <FlowArrow />
              <FlowNode>mdx-bundler</FlowNode>
              <FlowArrow />
              <FlowNode>frontmatter</FlowNode>
              <FlowArrow />
              <FlowNode>static params</FlowNode>
              <FlowArrow />
              <FlowNode>HTML</FlowNode>
            </div>

            <div className="mt-4 space-y-3 font-mono text-xs leading-relaxed text-muted-foreground">
              <p>
                Posts live as flat MDX files in{" "}
                <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                  features/blog/data/posts/
                </code>
                . At build time, mdx-bundler parses frontmatter, compiles JSX, and generates static
                params for every slug. Syntax highlighting via Shiki. Math rendering via KaTeX.
              </p>
              <p>
                Medium RSS is fetched at request time for the blog listing page, merged with local
                MDX posts, and deduplicated by slug.
              </p>
            </div>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>04</IndexLabel>
              <SectionHeading label="SEO Pipeline" />
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {[
                "Meta tags (title, description, canonical, OG, Twitter)",
                "JSON-LD structured data (Person, Organization, Article, BlogPosting)",
                "Dynamic OG images per page/post (Satori)",
                "Sitemap.xml with lastmod + changefreq",
                "Robots.txt with AI bot allow rules",
                "RSS feed for content syndication",
                "LLMs.txt for AI discoverability",
              ].map((layer, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-background px-4 py-2.5 transition-colors hover:bg-accent/30"
                >
                  <span className="mt-0.5 font-mono text-[10px] text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{layer}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              Every route exports a{" "}
              <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                Metadata
              </code>{" "}
              object. JSON-LD is injected via{" "}
              <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                &lt;script&gt;
              </code>{" "}
              tags. OG images are generated at build time using Satori with custom JSX templates.
            </p>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>05</IndexLabel>
              <SectionHeading label="CI / CD" />
            </div>

            <div className="flex flex-wrap items-center gap-2 rounded-lg border border-line bg-muted/30 p-4">
              <FlowNode>git push</FlowNode>
              <FlowArrow />
              <FlowNode>GitHub</FlowNode>
              <FlowArrow />
              <FlowNode>Vercel Build</FlowNode>
              <FlowArrow />
              <FlowNode>Preview</FlowNode>
              <FlowArrow />
              <FlowNode>Production</FlowNode>
            </div>

            <div className="mt-4 space-y-2 font-mono text-xs leading-relaxed text-muted-foreground">
              <p>
                Pushing to main triggers a Vercel build. Preview deploys are generated for every pull
                request. Production deploys happen automatically on merge to main.
              </p>
              <p>
                Build output: static pages where possible, edge functions for dynamic routes. 39
                pages generated at last build.
              </p>
            </div>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>06</IndexLabel>
              <SectionHeading label="Component Hierarchy" />
            </div>

            <div className="overflow-hidden rounded-lg border border-line bg-muted/30 p-4">
              <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
                <code>{`RootLayout
├── ThemeProvider
│   ├── ScrollProgress
│   ├── Spotlight (cursor glow)
│   ├── SiteHeader
│   │   ├── BrandContextMenu
│   │   ├── DesktopNav
│   │   ├── CommandMenu (⌘K)
│   │   ├── ThemeToggle
│   │   └── MobileNav
│   ├── PageWrapper (Framer Motion)
│   │   └── main
│   │       └── [page content]
│   │           ├── ScrollReveal (CSS)
│   │           ├── SectionHeading
│   │           ├── ProjectCard / ProjectCardCompact
│   │           ├── PostCard
│   │           └── ...
│   ├── SiteFooter
│   └── Toaster`}</code>
              </pre>
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              Almost everything is a Server Component. Client Components are isolated leaf nodes:
              CommandMenu, ThemeToggle, MobileNav, and interactive UI primitives.
            </p>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>07</IndexLabel>
              <SectionHeading label="State & Theming" />
            </div>

            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line">
              {[
                { name: "next-themes", role: "ThemeProvider, dark/light/system" },
                { name: "CSS Variables", role: "HSL tokens for background, foreground, muted, accent" },
                { name: "localStorage", role: "Persisted theme preference" },
                { name: "React state", role: "Command menu open, mobile nav open" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-baseline justify-between gap-3 bg-background px-4 py-3 transition-colors hover:bg-accent/30"
                >
                  <span className="rounded border border-line bg-background px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {item.name}
                  </span>
                  <span className="text-right text-sm text-muted-foreground">{item.role}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              No global state library. UI state is lifted to local{" "}
              <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                useState
              </code>{" "}
              in isolated client components. Data fetching is done at the page level via async
              Server Components or static generation.
            </p>
          </div>
        </div>

        
        <div className="screen-line-top screen-line-bottom border-x border-line">
          <div className="px-4 py-6">
            <div className="mb-4 flex items-baseline gap-3">
              <IndexLabel>08</IndexLabel>
              <SectionHeading label="Design System" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-lg border border-line">
                <div className="border-b border-line px-4 py-2.5">
                  <IndexLabel>Colors</IndexLabel>
                </div>
                <div className="space-y-2 p-4">
                  {[
                    { name: "background", light: "#FFFFFF", dark: "#0A0A0A" },
                    { name: "foreground", light: "#1A1A1A", dark: "#E8E8E8" },
                    { name: "muted", light: "#F5F5F5", dark: "#1C1C1C" },
                    { name: "accent", light: "#F5F5F5", dark: "#262626" },
                    { name: "line", light: "#E5E5E5", dark: "#2B2B2B" },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center gap-3">
                      <div className="flex gap-1">
                        <span
                          className="h-4 w-4 rounded border border-line"
                          style={{ backgroundColor: c.light }}
                        />
                        <span
                          className="h-4 w-4 rounded border border-line"
                          style={{ backgroundColor: c.dark }}
                        />
                      </div>
                      <span className="font-mono text-[11px] text-muted-foreground/60">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-lg border border-line">
                <div className="border-b border-line px-4 py-2.5">
                  <IndexLabel>Typography</IndexLabel>
                </div>
                <div className="space-y-3 p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-mono text-[11px] text-muted-foreground/60">Sans-serif</span>
                    <span className="text-sm">Inter — Headings, UI</span>
                  </div>
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="font-mono text-[11px] text-muted-foreground/60">Monospace</span>
                    <span className="text-sm">JetBrains Mono — Metadata, code</span>
                  </div>
                  <div className="border-t border-line pt-2">
                    <span className="font-mono text-[11px] text-muted-foreground/60">Spacing</span>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Section padding: px-4. Max-width: md:max-w-3xl. Dividers via{" "}
                      <code className="text-[11px]">border-line</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 font-mono text-xs leading-relaxed text-muted-foreground">
              All visual divisions use{" "}
              <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                border-line
              </code>{" "}
              (1px) via utility classes{" "}
              <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                screen-line-top
              </code>{" "}
              and{" "}
              <code className="rounded border border-line bg-background px-1 py-0.5 text-[11px]">
                screen-line-bottom
              </code>
              . Diagonal line patterns used for texture on select sections.
            </p>
          </div>
        </div>

        
        <div className="screen-line-top h-4 w-full border-x border-line" />
      </div>
    </>
  )
}
