import type { WorkProject } from "../../types/project"

export const nateeqAi: WorkProject = {
  slug: "nateeq-ai",
  title: "Nateeq AI",
  featured: false,
  status: "shipped",
  thumbnail: "/work/nateeqai.png",
  oneLiner:
    "White-label platform for deploying branded AI voice assistants. Multi-tenant SaaS with embeddable widgets.",
  role: "Lead Engineer",
  company: "OSIT",
  period: "Nov 2025 to Jan 2026",
  highlights: [
    "Took the platform from infrastructure to a shippable product in 6 weeks",
    "One-line embed code with API key auth reduced tenant time-to-deploy from 'hire a developer' to copy-paste",
    "Built AI lead extraction module that turned voice conversations from a cost center into a revenue driver",
    "Schema-per-tenant data isolation with cross-domain CORS for subdomain-per-tenant routing",
  ],
  problem:
    "ElevenLabs sells a powerful voice AI API. But APIs don't sell to business buyers. A Saudi IT company needed to resell AI voice assistants to GCC enterprises. ElevenLabs gives you agent creation and conversation endpoints. It does not give you multi-tenant isolation, embed code generation, lead extraction, billing, branding, or Arabic support.",
  whatIBuilt:
    "Took the platform from infrastructure to a shippable product in 6 weeks. Tenants create agents, test with live voice, generate a one-line embed code, deploy on any website, and see extracted leads in a dashboard. Built the ElevenLabs integration layer, widget embedding with cross-domain CORS, AI-powered lead extraction that turns voice conversations into a lead gen tool, and the admin console with RTL. Schema-per-tenant data isolation.",
  features: [
    {
      title: "One-Line Embed",
      description:
        "Tenants paste a single script tag into any site. The widget bootstraps itself, negotiates CORS with the tenant's subdomain, and renders a floating voice button. No build step, no SDK, no dependencies.",
    },
    {
      title: "Live Voice Agent Builder",
      description:
        "Tenants configure agent personality, voice model, greeting script, and fallback behavior in a visual editor. Changes deploy instantly via WebSocket push. Test mode lets you talk to the agent before publishing.",
    },
    {
      title: "AI Lead Extraction",
      description:
        "After each voice call, an LLM reads the transcript and extracts structured leads: name, phone, email, intent, urgency, budget range. Results appear in a filterable dashboard with CSV export. Turns conversations from a cost center into a revenue driver.",
    },
    {
      title: "Schema-Per-Tenant Isolation",
      description:
        "Each tenant gets a dedicated PostgreSQL schema with its own tables, indexes, and RLS policies. Cross-tenant queries are physically impossible at the database level. Prisma handles schema switching per request via connection parameter overrides.",
    },
  ],
  stats: [
    { label: "Built In", value: "6 weeks" },
    { label: "Architecture", value: "Monorepo" },
    { label: "Tenancy", value: "Schema-per-tenant" },
    { label: "Embed Code", value: "1 line" },
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
}
