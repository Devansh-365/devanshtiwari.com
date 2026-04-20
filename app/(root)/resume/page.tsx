import { Metadata } from "next"
import { siteConfig } from "@/config/site"
import { ContactBar } from "@/components/contact-bar"
import { ResumeClient } from "./resume-client"

export const metadata: Metadata = {
  title: "Resume",
  description: `${siteConfig.name}'s resume — product engineer at Metis. 50+ shipped products, end-to-end delivery across engineering and product, and a focus on cost-optimized LLM infrastructure.`,
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumePage() {
  return (
    <div className="mx-auto border-x border-line md:max-w-3xl">
      {/* Top stripe separator */}
      <div className="screen-line-bottom relative h-8 overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,hsl(var(--line))_0,hsl(var(--line))_1px,transparent_0,transparent_50%)] [background-size:10px_10px]" />
      </div>

      {/* Header */}
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          50+ products shipped. 2 companies founded. Building AI products end-to-end.
        </p>
      </div>

      {/* PDF Viewer */}
      <div className="screen-line-top">
        <ResumeClient />
      </div>

      {/* Contact */}
      <ContactBar />

      {/* Footer spacer */}
      <div className="screen-line-top h-4 w-full" />
    </div>
  )
}
