import type { TechStack } from "../types/tech-stack"

export const TECH_STACK: TechStack[] = [
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/", categories: ["Language"] },
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", categories: ["Language"] },
  { key: "python", title: "Python", href: "https://www.python.org/", categories: ["Language"] },
  { key: "react", title: "React", href: "https://react.dev/", categories: ["Library"] },
  { key: "nextjs", title: "Next.js", href: "https://nextjs.org/", categories: ["Framework"], theme: true },
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org/", categories: ["Runtime"] },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", categories: ["Framework"] },
  { key: "postgresql", title: "PostgreSQL", href: "https://www.postgresql.org/", categories: ["Database"] },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", categories: ["Database"] },
  { key: "redis", title: "Redis", href: "https://redis.io/", categories: ["Database"] },
  { key: "docker", title: "Docker", href: "https://www.docker.com/", categories: ["DevOps"] },
  { key: "git", title: "Git", href: "https://git-scm.com/", categories: ["Tools"] },
  { key: "figma", title: "Figma", href: "https://www.figma.com/", categories: ["Design"] },
]
