import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  // Languages
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/", categories: ["Language"] },
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", categories: ["Language"] },
  { key: "python", title: "Python", href: "https://www.python.org/", categories: ["Language"] },
  // Frameworks & Libraries
  { key: "react", title: "React", href: "https://react.dev/", categories: ["Library"] },
  { key: "nextjs", title: "Next.js", href: "https://nextjs.org/", categories: ["Framework"], theme: true },
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org/", categories: ["Runtime"] },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", categories: ["Framework"] },
  // AI
  { key: "openai", title: "OpenAI", href: "https://openai.com/", categories: ["AI"], icon: "https://cdn.simpleicons.org/openai/412991" },
  // Databases
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org/", categories: ["Database"] },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", categories: ["Database"] },
  { key: "redis", title: "Redis", href: "https://redis.io/", categories: ["Database"] },
  // ORM
  { key: "prisma", title: "Prisma", href: "https://www.prisma.io/", categories: ["ORM"], icon: "https://cdn.simpleicons.org/prisma/2D3748" },
  { key: "drizzle", title: "Drizzle", href: "https://orm.drizzle.team/", categories: ["ORM"], icon: "https://cdn.simpleicons.org/drizzle/C5F74F" },
  // DevOps & Infra
  { key: "docker", title: "Docker", href: "https://www.docker.com/", categories: ["DevOps"] },
  { key: "vercel", title: "Vercel", href: "https://vercel.com/", categories: ["Platform"], icon: "https://cdn.simpleicons.org/vercel/ffffff" },
  // Tools
  { key: "git", title: "Git", href: "https://git-scm.com/", categories: ["Tools"] },
  { key: "figma", title: "Figma", href: "https://www.figma.com/", categories: ["Design"] },
  // Analytics
  { key: "posthog", title: "PostHog", href: "https://posthog.com/", categories: ["Analytics"], icon: "https://cdn.simpleicons.org/posthog/F9BD2B" },
]
