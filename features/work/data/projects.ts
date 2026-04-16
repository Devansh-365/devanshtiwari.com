import type { WorkProject } from "../types/project"

export const WORK_PROJECTS: WorkProject[] = [
  {
    slug: "unifyhq",
    title: "UnifyHQ",
    featured: true,
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
  },
  {
    slug: "deliverist-chatbot",
    title: "Deliverist AI Chatbot",
    featured: true,
    status: "shipped",
    thumbnail: "/work/deliverist-ai.png",
    thumbnailType: "banner",
    oneLiner:
      "Conversational commerce for Saudi logistics. RAG pricing, 5 AI tools, speech-to-text, bilingual.",
    role: "Sole Product Engineer",
    company: "OSIT / Deliverist",
    period: "Jun to Nov 2025",
    highlights: [
      "Cut response latency ~500ms by migrating from two-step intent detection API to native Vercel AI SDK tool calling",
      "Unblocked product launch with a RAG pricing pipeline (PDF → OpenAI embeddings → PostgreSQL vector retrieval) when the backend pricing API wasn't ready",
      "13-step shipment wizard embedded in chat turned a support tool into a transaction channel",
      "Bilingual EN/AR with full RTL, speech-to-text via Whisper, and iframe embedding for distribution",
    ],
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
  },
  {
    slug: "metis",
    title: "Metis",
    featured: true,
    status: "beta",
    thumbnail: "/work/metis.png",
    oneLiner:
      "AI stock analysis for Indian swing traders. 70+ traders surveyed, 2,100+ stocks covered, 25 beta users on WhatsApp. From concept to daily-use product in 48 days.",
    role: "Product Engineer",
    company: "Metis",
    period: "Feb 2026 to Present",
    liveUrl: "https://trymetis.app",
    highlights: [
      "Cut per-session API cost from $0.25 to $0.06 (76% savings) via multi-provider LLM routing with zero quality regression",
      "70+ user interviews validated the problem before writing a line of code; 25 active beta users on WhatsApp generating daily analyses",
      "Reduced Market Pulse heatmap load from 117 HTTP calls to 16 via batch quote chunking, render time 3-5s to under 1s",
      "Config-driven provider registry with Gemini → Groq → Anthropic fallback chain absorbs outages without user impact",
    ],
    features: [
      {
        title: "Core Analysis Engine",
        description:
          "Real-time NSE/BSE data + 7 technical indicators (RSI, MACD, Bollinger, ATR, SMA, EMA, pivots) + FII/DII flows + option chain (PCR, max pain, OI) feeding a structured verdict with 0-10 confidence score, interest zones, and capital-aware position sizing.",
      },
      {
        title: "Market Pulse (Daily Habit Loop)",
        description:
          "Sector heatmap, AI morning briefs, 8:30 AM IST push notifications, weekly streaks (Duolingo-style with freeze mechanic). Reduced heatmap load from 117 HTTP calls to 16, render time 3-5s to under 1s.",
      },
      {
        title: "Stock Discovery",
        description:
          "Natural language screener over a 2,132-stock NSE universe plus BSE. Quick-Ask inline analysis cards. Market movers by sector drill-down with leaders and laggards.",
      },
      {
        title: "Cost-Optimized AI Infrastructure",
        description:
          "Config-driven provider registry with Gemini → Groq → Anthropic fallback chain. Three cost-optimization passes (model routing, prompt caching, context slicing, Gemini-first utility routing) dropped per-session cost from $0.25 to $0.06-0.08.",
      },
      {
        title: "Shareable Analysis Pages",
        description:
          "SEO-optimized analysis pages with Article JSON-LD and dynamic sitemap that double as organic landing pages. Interactive widget with candlestick charts, technical panels, and flow data.",
      },
      {
        title: "Platform & Growth",
        description:
          "Email OTP + Google SSO, 6-layer security model (input, data, auth, file, infrastructure, ops), dual-layer analytics (PostHog AARRR + in-DB columns), admin panel for beta ops. 7 free SEO tools (Position Size, Risk-Reward, Swing Profit, Capital Gains, Pivot Point, F&O Turnover) targeting 650K+ monthly searches.",
      },
    ],
    problem:
      "91% of Indian retail traders lose money (SEBI 2024 study). I surveyed 70+ traders to find out why. 68% said wrong entry/exit timing is their biggest pain. The tools that exist (Screener.in, TradingView, Chartink) give raw data but not analysis. They show you RSI is 58. They don't tell you what that means for your trade, where to enter, where to place a stop loss, or how many shares to buy given your capital. And no tool solves the deeper problem: traders don't know what to look at on any given morning.",
    whatIBuilt:
      "AI chat that combines real-time NSE and BSE data with actual analysis. Fetches live OHLCV, computes 7 technical indicators (RSI, MACD, Bollinger Bands, ATR, SMA, EMA, pivot points), pulls FII/DII flows, option chain (PCR, max pain, OI), delivery percentages, and macro context (DXY, VIX, crude, gold), then generates a structured verdict with confidence score (0-10 weighted across 5 factors), interest zones, risk levels, and position sizing based on your capital. Rendered as an interactive widget with candlestick charts, technical panels, and flow data, not just text. Built Market Pulse as a daily habit loop with sector heatmap, leaders/laggards drill-down, AI-generated morning briefs, and 8:30 AM IST push notifications. Added weekly streak system (Duolingo-style with freeze mechanic) and Quick-Ask inline analysis cards. Natural language stock screener over a 2,132-stock NSE universe plus BSE. Shareable analysis pages with SEO (Article JSON-LD, dynamic sitemap) that double as organic landing pages. Config-driven provider registry with Gemini → Groq → Anthropic fallback chain and three cost-optimization passes that dropped per-session cost from $0.25 to $0.06-0.08 (68-76% savings) via model routing, prompt caching, context slicing, and Gemini-first utility routing. Email OTP + Google SSO, 6-layer security model (input, data, auth, file, infrastructure, ops), dual-layer analytics (PostHog AARRR + in-DB columns), and an admin panel for beta ops. 7 free SEO tools shipped (Position Size, Risk-Reward, Swing Profit, Capital Gains, Stock Average, Pivot Point, F&O Turnover) targeting 650K+ monthly searches, with 30 total planned via a template-first build.",
    stats: [
      { label: "Traders Surveyed", value: "70+" },
      { label: "NSE + BSE Stocks", value: "2,100+" },
      { label: "Sector Coverage", value: "1,284" },
      { label: "Beta Users", value: "25" },
      { label: "AI Providers", value: "3" },
      { label: "Cost/Session", value: "$0.06-0.08" },
      { label: "Cost Reduction", value: "76%" },
      { label: "Built In", value: "48 days" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "Claude Sonnet",
      "Gemini 2.5 Flash",
      "Groq Llama 3.3",
      "Drizzle ORM",
      "Neon Postgres",
      "Upstash Redis",
      "PostHog",
      "Serper",
      "FYERS API",
      "NextAuth",
      "Web Push",
      "SWR",
    ],
  },
  {
    slug: "hisaab",
    title: "Hisaab",
    status: "shipped",
    oneLiner:
      "Open-source trading journal for Indian traders. Zero backend, zero signup. Built as acquisition funnel for Metis.",
    role: "Solo Builder",
    company: "Metis",
    period: "2026",
    liveUrl: "https://hisaab.trymetis.app",
    githubUrl: "https://github.com/Devansh-365/hisaab",
    problem:
      "Indian traders don't trust tools with their financial data. 91% of F&O traders lost money last year. They've been burned by platforms that leak data or sell it. Existing journal tools want signups, credit cards, and server access to your tradebook. Nobody wants to upload their Zerodha CSV to a random website.",
    whatIBuilt:
      "A trading journal where no data ever leaves the browser. Drop your CSV from Zerodha, Groww, Upstox, or Angel One. Auto-detects the broker from column headers (12 signature variants, zero user selection). FIFO-matches buys and sells with partial fill support. Shows instant P&L, win rate, equity curve, drawdown chart, calendar heatmap, Sharpe ratio, Monte Carlo simulation, Kelly criterion. Tax report with STCG/LTCG classification and ITR-ready export. Installable as PWA, works offline. MIT licensed. The architecture IS the marketing: zero server, zero signup, read every line of code. Every export carries a Metis link. Every empty state shows the Metis ecosystem. Free tool builds trust. Trust converts to paid signups.",
    stats: [
      { label: "Brokers", value: "4" },
      { label: "Header Variants", value: "12" },
      { label: "Analytics Views", value: "5" },
      { label: "Works Offline", value: "PWA" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Dexie.js",
      "IndexedDB",
      "Recharts",
      "PWA",
    ],
  },
  {
    slug: "freellm",
    title: "FreeLLM",
    status: "shipped",
    oneLiner:
      "OpenAI-compatible gateway that pools 6 free LLM tiers into one endpoint. Multi-key rotation, circuit breakers, response cache.",
    role: "Solo Builder",
    company: "Side Project",
    period: "2026",
    liveUrl: "https://freellms.vercel.app",
    githubUrl: "https://github.com/Devansh-365/freellm",
    thumbnail: "/work/freellm.png",
    problem:
      "Every free LLM tier rate-limits you within an hour of real use. Groq gives 30 RPM, Gemini gives 15, Mistral gives 1. To ship anything you end up juggling 4 SDKs, 4 sets of keys, and 4 different error shapes. Switch providers and your client code changes. Hit a 429 and your app stops. Nobody wants to write that plumbing again.",
    whatIBuilt:
      "An Express gateway that speaks the OpenAI Chat Completions API and routes requests across Groq, Gemini, Mistral, Cerebras, OpenRouter, and Ollama. Three virtual models (free-fast, free-smart, free) pick the right backend automatically. Per-provider circuit breakers with CLOSED/OPEN/HALF-OPEN states absorb 429s and 5xx without surfacing them. Multi-key rotation per provider multiplies free quota linearly. SHA-256 response cache cuts repeat-prompt cost to zero. Token usage tracked per provider on a rolling 24h window and surfaced in a React dashboard. Ships as a pnpm monorepo with the gateway, the dashboard, and an Astro Starlight docs site. MIT licensed, deploys to Vercel in 2 minutes.",
    stats: [
      { label: "Providers", value: "6" },
      { label: "Free Capacity", value: "~360 RPM" },
      { label: "Cache Layer", value: "SHA-256" },
      { label: "Cost", value: "$0" },
    ],
    tech: [
      "TypeScript",
      "Express 5",
      "Node.js 22",
      "React",
      "Vite",
      "Tailwind CSS",
      "Astro Starlight",
      "Zod",
      "Docker",
    ],
    architectureImage: "freellm-architecture.png",
  },
  {
    slug: "buzzwav",
    title: "BuzzWav",
    status: "archived",
    oneLiner:
      "AI-powered Reddit analytics that turns subreddit discussions into content ideas. Real-time dashboard, vector search, trend detection.",
    role: "Frontend Lead",
    company: "BuzzWav",
    period: "2025",
    liveUrl: "https://buzzwav.com",
    // thumbnail:
    //   "https://placehold.co/1200x630/0a0a0a/333333?text=BuzzWav&font=mono",
    problem:
      "Content creators spend hours scrolling Reddit looking for one good video topic. BuzzSumo costs Rs 16,000+/month and barely touches Reddit. No affordable tool existed that could monitor subreddits in real time, detect trending discussions before they peak, and generate actual content ideas from what real people were saying.",
    whatIBuilt:
      "Built the entire dashboard experience, marketing site, and subscription system. Subreddit tracking with configurable frequency. AI-powered insight generation with opportunity scoring, viral potential, and content angles via Claude Sonnet. Vector embeddings (Google text-embedding-004) for semantic search across posts. Trend detection with momentum scoring. Content ideas Kanban board with AI brief generation. 4-tier subscription with Razorpay and Cashfree. The product worked. Finding users didn't. Three builders, zero marketers. That gap taught me more about product than any feature ever could.",
    stats: [
      { label: "DB Tables", value: "21" },
      { label: "AI Modules", value: "10" },
      { label: "Sub Tiers", value: "4" },
      { label: "Team Size", value: "3" },
    ],
    tech: [
      "Next.js",
      "React",
      "Convex",
      "Claude Sonnet",
      "OpenRouter",
      "Google Embeddings",
      "Clerk",
      "Razorpay",
    ],
  },
  {
    slug: "competitorfinder",
    title: "CompetitorFinder",
    status: "shipped",
    oneLiner:
      "Find competitors for any business across JustDial, IndiaMART, and Google Maps. AI-generated search queries, parallel scraping, export to Excel.",
    role: "Solo Builder",
    company: "Side Project",
    period: "2025",
    githubUrl: "https://github.com/Devansh-365/competitorfinder",
    problem:
      "Sales teams and founders waste hours manually searching JustDial, IndiaMART, and Google Maps to find competitors. Copy-pasting business names, phone numbers, and addresses into spreadsheets. Three platforms, three different UIs, zero automation.",
    whatIBuilt:
      "Add a company, AI generates targeted search queries, and all 3 platforms get scraped in parallel. Business name, phone, email, address, GST number, products, ratings pulled automatically. Bulk import from Excel. Export results to Excel or Google Sheets. Puppeteer and Playwright handle the scraping with anti-detection measures.",
    stats: [
      { label: "Data Sources", value: "3" },
      { label: "Fields Extracted", value: "10+" },
      { label: "Scraping", value: "Parallel" },
      { label: "Export", value: "Excel" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "Puppeteer",
      "Playwright",
      "Vercel AI SDK",
    ],
  },
  {
    slug: "llmstext-generator",
    title: "llms.txt Generator",
    status: "shipped",
    oneLiner:
      "Generate structured llms.txt files from any website. Enter a URL, get LLM-ready content. Open source.",
    role: "Solo Builder",
    company: "Side Project",
    period: "2025",
    githubUrl: "https://github.com/Devansh-365/llmstext",
    problem:
      "The llms.txt standard helps AI models understand your site. But creating one manually means reading every page, writing summaries, and formatting it correctly. Nobody does it because it takes hours.",
    whatIBuilt:
      "Enter a URL. The tool crawls up to 20 pages via Firecrawl, extracts content, and produces two downloadable files: llms.txt (concise index with titles and descriptions) and llms-full.txt (complete text content in clean markdown). Real-time streaming progress via Server-Sent Events in a terminal-style UI. Bring your own Firecrawl API key. Nothing stored server-side.",
    stats: [
      { label: "Pages Crawled", value: "20" },
      { label: "Output Files", value: "2" },
      { label: "Streaming", value: "SSE" },
      { label: "Storage", value: "Zero" },
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Hono",
      "Firecrawl",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    slug: "masari-portal",
    title: "Masari Employee Portal",
    status: "shipped",
    thumbnail: "/work/masari.png",
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
    status: "shipped",
    // thumbnail:
    //   "https://placehold.co/1200x630/0a0a0a/333333?text=Deliverist+App&font=mono",
    oneLiner:
      "Customer-facing logistics app for Saudi Arabia. React Native, real-time tracking, ZATCA-compliant invoicing.",
    role: "Sole Developer",
    company: "OSIT / Deliverist",
    period: "2025",
    problem:
      "Saudi logistics is crowded. Aramex, SMSA, J&T all compete. Most apps treat Arabic as an afterthought, and COD (60-70% of Saudi e-commerce) gets bolted on last. Deliverist needed a mobile app that worked Arabic-first, handled the full booking-to-delivery loop, and generated ZATCA-compliant invoices from day one.",
    whatIBuilt:
      "Full customer-facing app from booking to delivery. 4-step booking wizard with 3 address input methods (Google Maps pin, manual entry, Saudi Short Code). Real-time tracking with visual timeline on a public API so recipients can track too. Invoice PDF generation with bilingual content, QR codes, and 15% VAT calculation. Air Waybill generation with barcodes and COD labeling. 10+ payment methods. Phone OTP auth. Push notifications. Full Arabic/RTL across every screen.",
    stats: [
      { label: "Tax Compliance", value: "ZATCA" },
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
