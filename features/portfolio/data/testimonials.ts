import type { Testimonial } from "../types/testimonials"

// Shahid — OSIT Project Manager (direct client, featured)
// Varnit — friend, worked together recently
// Abir — freelance/GSSOC collaboration

export const TESTIMONIALS_1: Testimonial[] = [
  {
    authorAvatar: "",
    authorName: "Shahid N.",
    authorTagline: "Project Manager @ OSIT",
    url: "#",
    quote:
      "Working with Devansh Tiwari has been an excellent experience. He quickly understands complex requirements, delivers clean and optimized code, and ensures every milestone is completed on time. I highly recommend Devansh for any AI, web, or full-stack development project.",
    date: "2025-10-01",
    isFeatured: true,
  },
  {
    authorAvatar: "",
    authorName: "Abir P.",
    authorTagline: "Technical Consultant @ EY",
    url: "#",
    quote:
      "He has a strong command of React and Next.js, and consistently writes clean, efficient, and maintainable code. Devansh also has a great eye for design and responsiveness. He is highly reliable and delivers high-quality work on or before deadlines.",
    date: "2025-10-01",
  },
]

export const TESTIMONIALS_2: Testimonial[] = [
  {
    authorAvatar: "",
    authorName: "Varnit S.",
    authorTagline: "",
    url: "#",
    quote:
      "He combines strong expertise in Generative AI, LLM Prompt Engineering, and RAG with solid SaaS development skills. He has a sharp product mindset, knowing how to launch lean MVPs, validate quickly, and build solutions that users actually need.",
    date: "2026-02-01",
    isFeatured: true,
  },
]
