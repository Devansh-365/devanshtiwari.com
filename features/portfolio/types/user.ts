export type User = {
  firstName: string
  lastName: string
  displayName: string
  username: string
  gender: "male" | "female" | "non-binary"
  pronouns: string
  bio: string
  flipSentences: string[]
  address: string
  phoneNumber: string
  email: string
  website: string
  jobTitle: string
  jobs: {
    title: string
    company: string
    website: string
    experienceId?: string
  }[]
  about: string
  socialLinks: {
    title: string
    href: string
    icon: string
  }[]
  techStack: string[]
  avatar: string
  ogImage?: string
  namePronunciationUrl?: string
  timeZone: string
  keywords: string[]
  dateCreated: string
}
