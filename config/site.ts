export const siteConfig = {
  // Site Info
  siteUrl: "https://devanshtiwari.me",
  name: "Devansh Tiwari",
  title: "Devansh Tiwari",
  description: "Product-Minded Engineer building beautiful, functional web experiences.",
  language: "en-US",
  locale: "en_US",

  // Author Info
  author: "Devansh Tiwari",
  email: "devanshtiwari365@gmail.com",

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
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],

  // Social Links
  links: {
    twitter: "https://twitter.com/devansh_0718",
    github: "https://github.com/Devansh-365/portfolio-v2",
  },
}

export type SiteConfig = typeof siteConfig
