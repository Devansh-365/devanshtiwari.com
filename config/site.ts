export const siteConfig = {
  // Site Info
  siteUrl: "https://www.devanshtiwari.com",
  name: "Devansh Tiwari",
  title: "Devansh Tiwari",
  description:
    "AI Product Builder. I ship AI products end-to-end, from user research to production.",
  language: "en-US",
  locale: "en_US",

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
