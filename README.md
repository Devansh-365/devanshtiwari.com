<div align="center">

<!-- Replace with your actual screenshot -->
<a href="https://www.devanshtiwari.com">
  <img src=".github/preview-dark.png" alt="Portfolio Preview" width="90%" />
</a>

<br />
<br />

# devanshtiwari.com

**A minimal, open-source developer portfolio built with Next.js 15 & React 19.**

[![Live Demo](https://img.shields.io/badge/Live_Demo-devanshtiwari.com-000?style=for-the-badge&logo=vercel&logoColor=white)](https://www.devanshtiwari.com)

<br />

[![Next.js](https://img.shields.io/badge/Next.js_15-000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=000)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![MDX](https://img.shields.io/badge/MDX-FCB32C?style=for-the-badge&logo=mdx&logoColor=000)](https://mdxjs.com)

<br />

[![Stars](https://img.shields.io/github/stars/Devansh-365/portfolio-v2?style=flat-square&color=yellow)](https://github.com/Devansh-365/portfolio-v2/stargazers)
[![Forks](https://img.shields.io/github/forks/Devansh-365/portfolio-v2?style=flat-square)](https://github.com/Devansh-365/portfolio-v2/network/members)
[![License](https://img.shields.io/github/license/Devansh-365/portfolio-v2?style=flat-square)](LICENSE)

</div>

---

## Features

- **12-Section Homepage** — Profile header, about, work preview, testimonials, how I work, experiences, GitHub contributions, tech stack, blog preview, and CTA
- **Work / Case Studies** — 10 project pages with problem, solution, and stats structure
- **MDX Blog** — Local posts with syntax highlighting, math, reading time + Medium RSS integration
- **Resume Page** — Embedded PDF viewer with download option
- **Command Menu** — `⌘K` / `Ctrl+K` command palette for instant navigation
- **Dark Mode Spotlight** — Radial cursor glow effect in dark theme
- **Dynamic OG Images** — Auto-generated Open Graph images for every page, blog post, and project
- **SEO Optimized** — JSON-LD structured data, sitemap, robots.txt, canonical URLs, RSS feed
- **AI-Friendly** — `llms.txt` and `llms-full.txt` for LLM discoverability
- **Scroll Animations** — Intersection Observer reveals + Framer Motion page transitions
- **Fully Responsive** — Mobile-first design that works everywhere
- **Accessible** — `prefers-reduced-motion` support, keyboard navigation, focus rings, semantic HTML

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/work` | Project listing with featured grid |
| `/work/[slug]` | Individual project case study |
| `/blog` | Blog with search, tag filtering |
| `/blog/[slug]` | Blog post with MDX rendering |
| `/resume` | Interactive resume viewer |
| `/rss` | RSS feed |

## Quick Start

> **Prerequisites:** Node.js >= 20

```bash
# Clone the repo
git clone https://github.com/Devansh-365/portfolio-v2.git
cd portfolio-v2

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you're live.

## Make It Yours

All personal data lives in a few files. Edit these and the entire site updates:

| File | What to change |
|------|----------------|
| `config/site.ts` | Site URL, name, description, social links |
| `features/portfolio/data/user.ts` | Bio, jobs, tech stack, social links, flip sentences |
| `features/portfolio/data/experiences.ts` | Work experience timeline |
| `features/portfolio/data/testimonials.ts` | Client/colleague testimonials |
| `features/portfolio/data/tech-stack.ts` | Technology icons and categories |
| `features/work/data/projects.ts` | Project case studies |
| `data/blog/*.mdx` | Blog posts (add new MDX files) |
| `public/profile.png` | Your avatar |
| `public/resume.pdf` | Your resume |

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDevansh-365%2Fportfolio-v2)

Or deploy manually:

```bash
npm run build
npm run start
```

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router), React 19 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 3.4, CSS Variables (HSL tokens) |
| **Animations** | Framer Motion, Intersection Observer |
| **Content** | MDX (mdx-bundler), Medium RSS |
| **UI Components** | Radix UI primitives, cmdk, Lucide icons |
| **Typography** | Inter + JetBrains Mono |
| **SEO** | Dynamic OG images (Satori), JSON-LD, sitemap, RSS |
| **Deployment** | Vercel |

## Project Structure

```
├── app/
│   ├── (root)/          # Main pages (home, work, blog, resume)
│   ├── layout.tsx       # Root layout with providers
│   ├── opengraph-image  # Dynamic OG image generation
│   └── rss/             # RSS feed route
├── components/          # Shared UI components
│   ├── ui/              # Base components (shadcn-style)
│   ├── command-menu.tsx # ⌘K palette
│   ├── spotlight.tsx    # Dark mode cursor effect
│   └── ...
├── features/
│   ├── portfolio/       # Homepage sections + data
│   └── work/            # Project pages + data
├── data/blog/           # MDX blog posts
├── config/site.ts       # Central configuration
├── lib/                 # Utilities (MDX, Medium, fonts)
├── styles/globals.css   # Design tokens + utilities
└── public/              # Static assets
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run format:write` | Format code with Prettier |

## License

MIT — free to use, modify, and deploy. A star would be appreciated if you find it useful.

---

<div align="center">

**Built by [Devansh Tiwari](https://www.devanshtiwari.com)**

[![Twitter](https://img.shields.io/badge/@devansh__0718-000?style=flat-square&logo=x&logoColor=white)](https://twitter.com/devansh_0718)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devansh-tiwari-3342611a6/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Devansh-365)

If you found this useful, consider giving it a star

</div>
