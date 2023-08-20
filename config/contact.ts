export enum ContactType {
  github = "github",
  linkedin = "linkedin",
  twitter = "twitter",
  youtube = "youtube",
  email = "email",
}

export interface Contact {
  twitter: string
  site: string
  calendly?: string
  links: Record<ContactType, string>
}

export const contact: Contact = {
  twitter: "@devansh_0718",
  site: "devanshtiwari.me",
  calendly: "https://calendly.com/karanpratapsingh",
  links: {
    github: "https://github.com/Devansh-365",
    linkedin: "https://www.linkedin.com/in/devansh-tiwari-3342611a6/",
    twitter: "https://twitter.com/devansh_0718",
    youtube: "https://www.youtube.com",
    email: "mailto:devanshtiwari365@gmail.com",
  },
}
