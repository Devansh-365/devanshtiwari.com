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
    period: "Feb 2026 to Present",
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
    slug: "metis",
    title: "Metis",
    featured: true,
    oneLiner:
      "AI stock analysis for Indian swing traders. 70+ traders surveyed. 7 technical indicators built from scratch. Concept to beta in 27 days.",
    role: "Co-Founder",
    company: "Metis",
    period: "Feb 2026 to Present",
    liveUrl: "https://trymetis.app",
    thumbnail:
      "https://placehold.co/1200x630/0a0a0a/333333?text=Metis&font=mono",
    problem:
      "91% of Indian retail traders lose money (SEBI 2024 study). I surveyed 70+ traders to find out why. 68% said wrong entry/exit timing is their biggest pain. The tools that exist (Screener.in, TradingView) give raw data but not analysis. They show you RSI is 58. They don't tell you what that means for your trade, where to enter, where to place a stop loss, or how many shares to buy given your capital.",
    whatIBuilt:
      "AI chat that combines real-time NSE/BSE data with actual analysis. Not generic answers. The system fetches live stock data, computes 7 technical indicators (RSI, MACD, Bollinger Bands, ATR, SMA, EMA, pivot points) from raw OHLCV, and generates a verdict with specific entry zones, stop loss levels, targets, and position sizing based on your capital. Multi-model AI with provider fallback (if Claude goes down, Gemini picks up). Smart model routing cuts cost by 40-50% per session. 7 free SEO tools targeting 650K+ monthly searches to funnel organic traffic. Credit-based pricing with Redis-backed atomic billing.",
    stats: [
      { label: "Traders Surveyed", value: "70+" },
      { label: "Technical Indicators", value: "7" },
      { label: "SEO Tools", value: "7" },
      { label: "Built In", value: "27 days" },
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Vercel AI SDK",
      "Claude",
      "Gemini",
      "Drizzle ORM",
      "Neon Postgres",
      "Upstash Redis",
    ],
  },
  {
    slug: "hisaab",
    title: "Hisaab",
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
    slug: "buzzwav",
    title: "BuzzWav",
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
    // thumbnail:
    //   "https://placehold.co/1200x630/0a0a0a/333333?text=Masari+Portal&font=mono",
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
    // thumbnail:
    //   "https://placehold.co/1200x630/0a0a0a/333333?text=Deliverist+App&font=mono",
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
