import type { WorkProject } from "../types/project"

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "unifyhq",
    title: "UnifyHQ",
    featured: true,
    oneLiner:
      "Enterprise facility management platform. 471 API endpoints, 194 pages, 8 languages. Built in 26 days.",
    role: "Sole Engineer",
    company: "OSIT",
    period: "Feb to Mar 2026",
    thumbnail:
      "https://placehold.co/1200x630/0a0a0a/333333?text=UnifyHQ&font=mono",
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
  },
  {
    slug: "deliverist-chatbot",
    title: "Deliverist AI Chatbot",
    featured: true,
    thumbnail:
      "https://placehold.co/1200x630/0a0a0a/333333?text=Deliverist+AI&font=mono",
    oneLiner:
      "Conversational commerce for Saudi logistics. RAG pricing, 5 AI tools, speech-to-text, bilingual.",
    role: "Sole Product Engineer",
    company: "OSIT / Deliverist",
    period: "Jun to Nov 2025",
    problem:
      "Deliverist moves luggage between doors and airports across Saudi Arabia. Their customer-facing product was a static form with 13 fields. Nobody wants to fill that out on their phone at an airport. They needed a single conversational interface for quoting, booking, tracking, and complaints in English and Arabic.",
    whatIBuilt:
      'Conversational commerce layer that turns a chatbot into a transaction channel. Users go from "I want to ship something" to a confirmed booking without leaving the chat. 13-step shipment wizard embedded in the conversation. 5 AI tools for intent routing. RAG pipeline for dynamic pricing where updates happen by uploading a document, zero code changes. NLP entity extraction pre-fills forms from natural language. Speech-to-text with Whisper fallback. Bilingual with RTL.',
    stats: [
      { label: "AI Tools", value: "5" },
      { label: "Wizard Steps", value: "13" },
      { label: "API Routes", value: "17" },
      { label: "Duration", value: "6 months" },
    ],
    tech: [
      "Next.js",
      "Vercel AI SDK",
      "DeepSeek",
      "OpenAI",
      "PostgreSQL",
      "Drizzle ORM",
      "Google Maps API",
      "Whisper",
      "LangChain",
    ],
    architectureImage: "deliverist-chatbot-architecture.jpeg",
  },
  {
    slug: "nateeq-ai",
    title: "Nateeq AI",
    featured: true,
    thumbnail:
      "https://placehold.co/1200x630/0a0a0a/333333?text=Nateeq+AI&font=mono",
    oneLiner:
      "White-label platform for deploying branded AI voice assistants. Multi-tenant SaaS with embeddable widgets.",
    role: "Lead Engineer",
    company: "OSIT",
    period: "Nov 2025 to Jan 2026",
    problem:
      "ElevenLabs sells a powerful voice AI API. But APIs don't sell to business buyers. A Saudi IT company needed to resell AI voice assistants to GCC enterprises. ElevenLabs gives you agent creation and conversation endpoints. It does not give you multi-tenant isolation, embed code generation, lead extraction, billing, branding, or Arabic support.",
    whatIBuilt:
      "Took the platform from infrastructure to a shippable product in 6 weeks. Tenants create agents, test with live voice, generate a one-line embed code, deploy on any website, and see extracted leads in a dashboard. Built the ElevenLabs integration layer, widget embedding with cross-domain CORS, AI-powered lead extraction that turns voice conversations into a lead gen tool, and the admin console with RTL. Schema-per-tenant data isolation.",
    stats: [
      { label: "Lines Shipped", value: "22K+" },
      { label: "Files Built", value: "175" },
      { label: "Built In", value: "6 weeks" },
      { label: "Architecture", value: "Monorepo" },
    ],
    tech: [
      "NestJS",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "pgvector",
      "ElevenLabs ConvAI",
      "Turborepo",
      "RBAC",
    ],
    architectureImage: "nateeq-ai-architecture.jpeg",
  },
  {
    slug: "masari-portal",
    title: "Masari Employee Portal",
    thumbnail:
      "https://placehold.co/1200x630/0a0a0a/333333?text=Masari+Portal&font=mono",
    oneLiner:
      "Bilingual intranet for a Saudi government entity. 33 pages, 1,800+ translation keys, sole frontend dev.",
    role: "Sole Frontend Developer",
    company: "OSIT / Masari",
    period: "Jun to Dec 2024",
    problem:
      "A Saudi government entity working on a Vision 2030 mega-project needed a custom portal for 500+ employees. SharePoint failed on two fronts: Arabic-first UX with proper RTL layout, and domain-specific workflows like visual announcement creation and compliance tracking.",
    whatIBuilt:
      "33 pages covering the full employee lifecycle. Announcement canvas creator where comms staff pick templates, choose dimensions, write bilingual content through a rich text editor, and export to PNG. Document management with in-browser PDF viewer. Microsoft ADFS SSO with local fallback. Multi-step onboarding flow with compliance tracking. Notification system with infinite scroll. Full Arabic/English RTL with 1,800+ translation keys.",
    stats: [
      { label: "Pages", value: "33" },
      { label: "Translation Keys", value: "1,800+" },
      { label: "Content Types", value: "8" },
      { label: "Duration", value: "6 months" },
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "shadcn/ui",
      "Strapi CMS",
      "i18next",
      "ADFS SSO",
      "Tiptap",
    ],
    architectureImage: "masari-portal-architecture.jpeg",
  },
  {
    slug: "deliverist-mobile",
    title: "Deliverist Mobile App",
    thumbnail:
      "https://placehold.co/1200x630/0a0a0a/333333?text=Deliverist+App&font=mono",
    oneLiner:
      "Customer-facing logistics app for Saudi Arabia. React Native, real-time tracking, ZATCA-compliant invoicing.",
    role: "Sole Developer",
    company: "OSIT / Deliverist",
    period: "Jun to Dec 2024",
    problem:
      "Saudi logistics is crowded. Aramex, SMSA, J&T all compete. Most apps treat Arabic as an afterthought, and COD (60-70% of Saudi e-commerce) gets bolted on last. Deliverist needed a mobile app that worked Arabic-first, handled the full booking-to-delivery loop, and generated ZATCA-compliant invoices from day one.",
    whatIBuilt:
      "Full customer-facing app from booking to delivery. 4-step booking wizard with 3 address input methods (Google Maps pin, manual entry, Saudi Short Code). Real-time tracking with visual timeline on a public API so recipients can track too. Invoice PDF generation with bilingual content, QR codes, and 15% VAT calculation. Air Waybill generation with barcodes and COD labeling. 10+ payment methods. Phone OTP auth. Push notifications. Full Arabic/RTL across every screen.",
    stats: [
      { label: "Lines of Code", value: "47K" },
      { label: "Payment Methods", value: "10+" },
      { label: "Address Methods", value: "3" },
      { label: "Duration", value: "6 months" },
    ],
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "React Query",
      "i18next",
      "Google Maps",
      "NativeWind",
    ],
  },
]
