import "@/styles/globals.css"

import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { PageWrapper } from "@/components/page-wrapper"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Spotlight } from "@/components/spotlight"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Product Engineer India",
    "AI Infrastructure Engineer",
    "LLM Gateway",
    "Multi-Provider AI Routing",
    "AI Cost Optimization",
    "Metis AI",
    "trymetis",
    "FreeLLM",
    "Product Engineer India",
    "AI Engineer India",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [`${siteConfig.siteUrl}/opengraph-image`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/profile.png",
  },
  manifest: "/manifest.json",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Context" />
          <link rel="alternate" type="application/rss+xml" href="/rss" title="Devansh Tiwari — RSS Feed" />
          {/* Plausible Analytics */}
          <script async src="https://plausible.io/js/pa-O0dfp6Ujr5y3-Y7HnFkzv.js" />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.devanshtiwari.com/#website",
                url: "https://www.devanshtiwari.com",
                name: "Devansh Tiwari",
                description: siteConfig.description,
                publisher: { "@id": "https://www.devanshtiwari.com/#person" },
                inLanguage: "en-US",
              }),
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.devanshtiwari.com/#person",
                name: "Devansh Tiwari",
                givenName: "Devansh",
                familyName: "Tiwari",
                url: "https://www.devanshtiwari.com",
                mainEntityOfPage: "https://www.devanshtiwari.com/about",
                image: "https://www.devanshtiwari.com/profile.png",
                jobTitle: "Product Engineer",
                description: "Product engineer at Metis, building AI stock analysis for Indian swing traders. Focused on cost-optimized LLM infrastructure and multi-provider routing. Previously shipped AI products for Saudi logistics and e-commerce personalization at Helium.",
                email: "mailto:devanshtiwari365@gmail.com",
                telephone: "+919560879697",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Delhi NCR",
                  addressCountry: "IN",
                },
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "Inderprastha Engineering College",
                  sameAs: "https://www.ipec.org.in/",
                },
                worksFor: {
                  "@type": "Organization",
                  name: "Metis",
                  url: "https://trymetis.app",
                  description: "AI-powered stock analysis for Indian swing traders",
                },
                founder: {
                  "@type": "Organization",
                  name: "Metis",
                  url: "https://trymetis.app",
                },
                sameAs: [
                  "https://github.com/Devansh-365",
                  "https://www.linkedin.com/in/devansh-tiwari-3342611a6/",
                  "https://twitter.com/devansh_0718",
                  "https://medium.com/@devanshtiwari365",
                  "https://dev.to/devansh365",
                  "https://hashnode.com/@devansh365",
                  "https://www.indiehackers.com/devansh365",
                  "https://www.producthunt.com/@devanshtiwari",
                  "https://peerlist.io/devansh",
                  "https://www.devanshtiwari.com",
                ],
                knowsAbout: [
                  "AI Product Development",
                  "Product Management",
                  "SaaS Product Validation",
                  "AI/LLM Systems",
                  "RAG Pipelines",
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "Python",
                  "E-commerce Personalization",
                  "Full Stack Development",
                  "Startup Building",
                  "Voice AI",
                  "Conversational AI",
                ],
                hasOccupation: [
                  {
                    "@type": "Occupation",
                    name: "Product Engineer",
                    occupationalCategory: "15-1252.00",
                    skills: "TypeScript, React, Next.js, Node.js, Python, AI/LLM Systems, RAG, PostgreSQL",
                  },
                  {
                    "@type": "Occupation",
                    name: "Product Engineer",
                    description: "Building AI infrastructure and end-to-end products at Metis, with a focus on cost-optimized LLM routing and Indian market distribution.",
                  },
                ],
              }),
            }}
          />
        </head>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Spotlight />
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <PageWrapper>
                <main className="flex-1">
                  {/* <Hero /> */}
                  {children}
                </main>
              </PageWrapper>
              <SiteFooter />
            </div>
            <Toaster />
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
