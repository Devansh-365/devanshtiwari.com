import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "metis",
    companyName: "Metis",
    companyWebsite: "https://trymetis.app",
    positions: [
      {
        id: "1",
        title: "Co-Founder",
        employmentPeriod: { start: "02.2026" },
        employmentType: "Full-time",
        icon: "idea",
        description:
          "AI-powered stock analysis for Indian swing traders. Shipped 0-to-1 from concept to 25-user beta in 20 days across 20 product decisions. Drove product-led acquisition by shipping 7 free tools targeting 650K+ monthly searches. Reduced per-session API cost by 52% through a hybrid model routing system.",
        skills: [
          "Product Strategy",
          "User Research",
          "SEO",
          "LLM/AI Systems",
          "Next.js",
          "TypeScript",
          "AARRR Metrics",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "helium",
    companyName: "Helium",
    companyWebsite: "https://helium.sh",
    positions: [
      {
        id: "2",
        title: "Software Engineer (Product-Facing)",
        employmentPeriod: { start: "06.2025", end: "08.2025" },
        employmentType: "Full-time",
        icon: "code",
        description:
          "Led product discovery for conversational commerce. Researched trigger timing, user journey placements, and context memory patterns. Contributed to the Pulse personalization product that drove 20-25% merchant sales uplift.",
        skills: [
          "Product Discovery",
          "Shopify",
          "React",
          "TypeScript",
          "Analytics",
        ],
      },
      {
        id: "1",
        title: "Software Engineer Intern",
        employmentPeriod: { start: "04.2024", end: "02.2025" },
        employmentType: "Internship",
        icon: "code",
        description:
          "Identified a 25-second recommendation latency bottleneck. Refactored the retrieval and ranking pipeline to achieve 60% latency reduction. Defined and shipped an AI Shopify Agent MVP using RICE prioritization.",
        skills: [
          "React",
          "Node.js",
          "Competitive Analysis",
          "RICE Framework",
          "Analytics Pipelines",
        ],
      },
    ],
  },
  {
    id: "zashit",
    companyName: "Zashit",
    positions: [
      {
        id: "1",
        title: "Co-Founder & Product Engineer",
        employmentPeriod: { start: "02.2025", end: "06.2025" },
        employmentType: "Full-time",
        icon: "idea",
        description:
          "AI credit card reward optimizer. Identified a Rs 10,000 Cr unused rewards problem through user discovery interviews. Validated demand with 50+ waitlist signups. Built the MVP including an OCR pipeline for transaction data extraction. Applied to Y Combinator.",
        skills: [
          "User Discovery",
          "MVP Scoping",
          "OCR Pipeline",
          "AI/LLM",
          "React Native",
          "Next.js",
        ],
      },
    ],
  },
  {
    id: "osit",
    companyName: "OSIT",
    positions: [
      {
        id: "1",
        title: "Freelance Software Engineer",
        employmentPeriod: { start: "06.2024", end: "12.2025" },
        employmentType: "Contract",
        icon: "code",
        description:
          "Shipped 8 products across 5 domains (logistics, AI, enterprise SaaS, government, HR) for the Saudi Arabia market. Built a 25-module platform in 4 weeks as sole engineer. Shipped bilingual Arabic/English with RTL support across 3,000+ translation keys.",
        skills: [
          "Next.js",
          "TypeScript",
          "RTL/i18n",
          "SEO",
          "System Design",
          "Docker",
        ],
      },
    ],
  },
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "1",
        title: "Full Stack Developer",
        employmentPeriod: { start: "2022", end: "2024" },
        employmentType: "Self-employed",
        icon: "code",
        description:
          "50+ global clients. Closed projects worth 5-6 lakh. Built MVPs, validation products, and full platforms. At peak, earning close to 2 lakh per month.",
        skills: [
          "React",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "MongoDB",
          "Tailwind CSS",
        ],
      },
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "2",
        title: "NextLeap — Product Manager Fellowship",
        employmentPeriod: { start: "01.2026", end: "04.2026" },
        icon: "education",
        description:
          "Product discovery, prioritization frameworks (RICE), user interviews, outcome metrics, and structured product thinking.",
        skills: [
          "Product Discovery",
          "PRDs",
          "User Research",
          "RICE",
          "Go-to-Market",
        ],
      },
      {
        id: "1",
        title: "Inderprastha Engineering College — B.Tech IT",
        employmentPeriod: { start: "2021", end: "2025" },
        icon: "education",
        skills: ["Data Structures", "System Design", "SQL", "Java", "Python"],
      },
    ],
  },
]
