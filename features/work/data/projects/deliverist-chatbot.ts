import type { WorkProject } from "../../types/project"

export const deliveristChatbot: WorkProject = {
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
  features: [
    {
      title: "13-Step Shipment Wizard",
      description:
        "Embedded booking flow inside chat: pickup location, destination, item type, weight, dimensions, packaging, insurance, pickup date, delivery speed, payment method, COD toggle, special instructions, and confirmation. Each step validates via tool calls.",
    },
    {
      title: "RAG Pricing Pipeline",
      description:
        "PDF pricing documents are chunked, embedded via OpenAI, and stored in PostgreSQL with pgvector. When a user asks for a quote, the system retrieves the relevant tariff rows and computes a live price. Updating prices requires uploading a new PDF, zero code changes.",
    },
    {
      title: "5 AI Intent Tools",
      description:
        "Vercel AI SDK tool calling routes user utterances to the right handler: quote, book, track, complaint, or FAQ. Each tool has a typed Zod schema and runs in parallel where possible. Intent detection happens in a single inference pass.",
    },
    {
      title: "Bilingual RTL with Speech",
      description:
        "Full Arabic/English support with RTL layout via logical properties. Speech-to-text via Whisper handles Saudi dialects. Both languages share the same conversation state so users can switch mid-chat.",
    },
  ],
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
  canvasUrl: "https://excalidraw.com/#json=sample-deliverist-chat-flow",
  canvasScreenshotUrl: "/work/deliverist-canvas.png",
}
