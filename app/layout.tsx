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
import { CustomCursor } from "@/components/custom-cursor"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Devansh Tiwari",
    "Product Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Developer",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.siteUrl }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  robots: {
    index: true,
    follow: true,
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Devansh Tiwari",
                url: "https://www.devanshtiwari.com",
                image: "https://www.devanshtiwari.com/profile.png",
                jobTitle: "AI Product Builder",
                description: "AI Product Builder. I ship AI products end-to-end, from user research to production.",
                email: "mailto:devanshtiwari365@gmail.com",
                sameAs: [
                  "https://github.com/Devansh-365",
                  "https://www.linkedin.com/in/devansh-tiwari-3342611a6/",
                  "https://twitter.com/devansh_0718",
                  "https://medium.com/@devanshtiwari365",
                ],
                knowsAbout: [
                  "Product Management", "AI/LLM Systems", "React", "Next.js",
                  "TypeScript", "E-commerce Personalization", "Startup Building",
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
            <CustomCursor />
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
