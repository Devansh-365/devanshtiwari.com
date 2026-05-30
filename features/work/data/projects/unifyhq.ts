import type { WorkProject } from "../../types/project"

export const unifyhq: WorkProject = {
  slug: "unifyhq",
  title: "UnifyHQ",
  featured: false,
  status: "in-progress",
  oneLiner:
    "Enterprise facility management platform. 471 API endpoints, 194 pages, 8 languages. Built in 26 days.",
  role: "Sole Engineer",
  company: "OSIT",
  period: "Feb 2026 to Present",
  thumbnail: "/work/unifyhq.png",
  highlights: [
    "471 API endpoints and 90 Prisma models shipped in 26 days as sole engineer",
    "8-language i18n with full Arabic RTL support, unlocking MENA and APAC enterprise deals",
    "Migrated auth from localStorage to httpOnly cookies, unblocking SOC 2 compliance review",
    "Standardized data-states component library, refactored across 53 files for consistent UX",
  ],
  features: [
    {
      title: "Multi-Module Full-Stack Platform",
      description:
        "24 NestJS controllers, 471 API endpoints, 34 frontend API service classes, 183 pages under Next.js App Router. Multi-tenant isolation, JWT auth with refresh tokens, global RBAC.",
    },
    {
      title: "Workspace & Parking Management",
      description:
        "Desk booking and reservations with recurring patterns, floor/zone management, move requests workflow, occupancy statistics. Parking analytics, violation tracking, reservation management with QR scanner.",
    },
    {
      title: "Visitor & Reception System",
      description:
        "End-to-end visitor flows with check-in/checkout, badge generation, host assignment, watchlist filtering, gate pass issuance, and package/delivery tracking for the reception module.",
    },
    {
      title: "i18n & RTL (8 Languages)",
      description:
        "Full i18n infrastructure with react-i18next across all modules. RTL support for Arabic via dedicated RTLProvider. 500+ translation keys across 8 locales (en, ar, de, es, fr, hi, ja, zh).",
    },
    {
      title: "Security Hardening",
      description:
        "Migrated auth from localStorage to httpOnly cookies with Next.js middleware, eliminating XSS token theft and unblocking SOC 2 compliance review required for enterprise procurement.",
    },
    {
      title: "Standardized Design System",
      description:
        "Shared data-states component library for Loading/Empty/Error UI, refactored across 53 files. Global error page, not-found page, go-back button component. Consistent UX across 25+ modules.",
    },
  ],
  problem:
    "Enterprise facility teams run on 4-5 separate tools for desk booking, parking, visitors, and maintenance. Data lives in silos. Every new office means re-stitching the same integrations. Managers spend more time switching dashboards than managing buildings.",
  whatIBuilt:
    "Full-stack platform unifying workspace, parking, visitors, meetings, and maintenance under one interface. Multi-tenant architecture with JWT auth and role-based access. Real-time notifications via Socket.io. 8-language i18n with full Arabic RTL support, opening MENA and APAC enterprise markets. Built the entire system in 26 days as sole engineer.",
  stats: [
    { label: "API Endpoints", value: "471" },
    { label: "Frontend Pages", value: "194" },
    { label: "DB Models", value: "90" },
    { label: "Built In", value: "26 days" },
  ],
  tech: [
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "Next.js",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "Socket.io",
    "i18next",
  ],
  architectureImage: "unifyhq-architecture.jpeg",
  canvasUrl: "https://excalidraw.com/#json=sample-unifyhq-system-design",
  canvasScreenshotUrl: "/work/unifyhq-canvas.png",
}
