import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "metis",
    title: "Metis",
    period: { start: "02.2026" },
    link: "https://trymetis.app",
    skills: [
      "Co-Founder",
      "Next.js",
      "TypeScript",
      "LLM/AI",
      "PostHog",
      "SEO",
      "Product Strategy",
    ],
    description:
      "AI-powered stock analysis for Indian swing traders. Shipped 7 free tools targeting 650K+ monthly searches. 25-user beta in 20 days. Reduced per-session API cost by 52%.",
    isExpanded: true,
  },
  {
    id: "zashit",
    title: "Zashit",
    period: { start: "02.2025", end: "06.2025" },
    link: "https://github.com/Devansh-365",
    skills: [
      "Co-Founder",
      "React Native",
      "Next.js",
      "OCR Pipeline",
      "AI/LLM",
      "User Research",
    ],
    description:
      "AI credit card reward optimizer. Identified Rs 10,000 Cr unused rewards problem. 50+ waitlist signups. Built OCR pipeline for transaction extraction. Applied to Y Combinator.",
  },
  {
    id: "osit-products",
    title: "OSIT — 8 Products for Saudi Arabia",
    period: { start: "06.2024", end: "12.2025" },
    link: "https://github.com/Devansh-365",
    skills: [
      "Next.js",
      "TypeScript",
      "RTL/i18n",
      "Docker",
      "System Design",
      "SEO",
    ],
    description:
      "Shipped 8 products across logistics, AI, enterprise SaaS, government, and HR. Built a 25-module platform in 4 weeks as sole engineer. 3,000+ translation keys for bilingual Arabic/English.",
  },
  {
    id: "helium-pulse",
    title: "Helium Pulse — E-commerce Personalization",
    period: { start: "04.2024", end: "08.2025" },
    link: "https://helium.sh",
    skills: [
      "React",
      "TypeScript",
      "Shopify SDK",
      "Product Discovery",
      "Analytics",
    ],
    description:
      "Recommendation engine and behavioral tracking for Shopify merchants. 20-30% sales uplift. 60% latency reduction. Led product discovery for conversational commerce.",
  },
  {
    id: "ai-voice-agents",
    title: "AI Voice Agents",
    period: { start: "2025", end: "2025" },
    link: "https://github.com/Devansh-365",
    skills: ["AI/LLM", "Cold Email", "Sales", "Voice AI"],
    description:
      "Built and sold AI voice agents to US local businesses. Ran cold email campaigns with 1.5% reply rate. Learned positioning, sales psychology, and messaging.",
  },
  {
    id: "freelance-portfolio",
    title: "Freelance — 50+ Global Clients",
    period: { start: "2022", end: "2024" },
    link: "https://github.com/Devansh-365",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
    ],
    description:
      "MVPs, validation products, and full platforms for 50+ clients globally. Closed projects worth 5-6 lakh. 2L/month at peak revenue.",
  },
]
