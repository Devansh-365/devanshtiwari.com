import { Metadata } from "next"
import { siteConfig } from "@/lib/config"
import { ContactBar } from "@/components/contact-bar"
import { ResumeClient } from "./resume-client"
import { generateResumeSchema } from "@/lib/resume-schema"
import { generateBreadcrumbs } from "@/lib/schema"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Resume",
  description: `${siteConfig.name}'s resume — AI Product Engineer. 50+ shipped products, end-to-end delivery across engineering and product, and a focus on cost-optimized LLM infrastructure.`,
  alternates: {
    canonical: "/resume",
    types: {
      "application/json": "/resume.json",
    },
  },
  keywords: [
    "Devansh Tiwari",
    "AI Product Engineer",
    "Resume",
    "CV",
    "Product Engineer",
    "AI Infrastructure",
    "LLM Gateway",
    "Multi-Provider AI Routing",
    "AI Cost Optimization",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "Vercel",
    "Docker",
    "Freelance",
    "India",
    "Delhi NCR",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
}

export default function ResumePage() {
  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Resume" },
  ])

  const resumeSchema = generateResumeSchema()

  return (
    <>
      <Script
        id="resume-breadcrumbs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <Script
        id="resume-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resumeSchema) }}
      />
      <article
        className="mx-auto border-x border-line md:max-w-3xl"
        lang="en-US"
        aria-label="Resume page"
      >
        <div className="screen-line-bottom relative h-8 overflow-hidden">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] [background-size:10px_10px]" />
        </div>

        <header className="screen-line-bottom px-4">
          <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        </header>

        <section className="p-4" aria-labelledby="resume-summary">
          <p
            id="resume-summary"
            className="font-mono text-sm text-balance text-muted-foreground"
          >
            50+ products shipped across AI, e-commerce, and SaaS. Available for
            freelance and product engineering work.
          </p>
        </section>

        <section aria-label="Resume PDF viewer">
          <div className="screen-line-top">
            <ResumeClient />
          </div>
        </section>

        <ContactBar />

        <div className="screen-line-top h-4 w-full" />
      </article>
    </>
  )
}
