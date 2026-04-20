export const siteConfig = {
  // Site Info
  siteUrl: "https://www.devanshtiwari.com",
  name: "Devansh Tiwari",
  title: "Devansh Tiwari — Product Engineer at Metis",
  description:
    "Product engineer at Metis, building AI stock analysis for Indian swing traders. Writing about cost-optimized LLM infrastructure, multi-provider routing, and shipping AI products end-to-end.",
  language: "en-US",
  locale: "en_US",

  // Timezone used to interpret bare YYYY-MM-DD publish dates in blog frontmatter.
  // A post with date: '2026-04-21' goes live at 00:00 in this zone, not 00:00 UTC.
  publishTimezone: "Asia/Kolkata",

  // Author Info
  author: "Devansh Tiwari",
  email: "devanshtiwari365@gmail.com",
  calUrl: "https://cal.com/devansh0718/15min",

  // SEO & Social
  socialBanner: "/profile.png",
  siteLogo: "/profile.png",
  twitterHandle: "@devansh_0718",

  // Navigation
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Work",
      href: "/work",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Resume",
      href: "/resume",
    },
  ],

  // Social Links
  links: {
    twitter: "https://twitter.com/devansh_0718",
    github: "https://github.com/Devansh-365/devanshtiwari.com",
  },
}

export type SiteConfig = typeof siteConfig

// Named exports for component compatibility
export const MAIN_NAV = siteConfig.mainNav

export const SITE_INFO = {
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
}

export const SOURCE_CODE_GITHUB_URL = siteConfig.links.github

export const UTM_PARAMS = {
  utm_source: "devanshtiwari.com",
}
