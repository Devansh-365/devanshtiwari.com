# Contributing to devanshtiwari.com

Thanks for wanting to contribute. This guide will get you from zero to your first PR.

## Table of Contents

- [Quick Start](#quick-start)
- [Before You Start](#before-you-start)
- [Project Structure](#project-structure)
- [What to Contribute](#what-to-contribute)
- [Development Guidelines](#development-guidelines)
- [House Rules](#house-rules)
- [Submitting a PR](#submitting-a-pr)
- [First Time Contributing?](#first-time-contributing-to-open-source)

## Quick Start

```bash
git clone https://github.com/Devansh-365/devanshtiwari.com.git
cd devanshtiwari.com
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000). You're live.

## Before You Start

- Read the [Code of Conduct](CODE_OF_CONDUCT.md)
- Check [existing issues](https://github.com/Devansh-365/devanshtiwari.com/issues) to avoid duplicates
- For new features, **open an issue first** to discuss the approach before writing code
- For bug fixes and small improvements, feel free to go straight to a PR

## Project Structure

```
app/
  (root)/              Pages (home, work, blog, resume)
  layout.tsx           Root layout with providers
  opengraph-image.tsx  Default OG image
  rss/                 RSS feed route
components/
  ui/                  shadcn/ui primitives (don't edit directly)
  command-menu.tsx     Command palette (Cmd+K)
  spotlight.tsx        Dark mode cursor glow
  scroll-reveal.tsx    Intersection Observer animations
  text-flip.tsx        Animated text cycling
  site-header.tsx      Sticky header + nav
  site-footer.tsx      Footer
features/
  portfolio/
    components/        Homepage sections (About, TechStack, CTA, etc.)
    data/              Personal data (user.ts, experiences.ts, tech-stack.ts)
  work/
    components/        Project cards and detail page
    data/projects.ts   Work project entries
config/site.ts         Central site configuration
data/blog/             MDX blog posts
lib/                   Utilities (MDX processing, Medium RSS, fonts)
styles/globals.css     Design tokens + custom utilities
public/                Static assets (images, resume, llms.txt)
```

## What to Contribute

### Welcome

- Bug fixes (layout, responsive, accessibility)
- New homepage sections or components
- Blog features (new MDX plugins, better code highlighting)
- Performance improvements
- Accessibility improvements
- SEO enhancements
- New animations or micro-interactions
- Documentation improvements

### Not Looking For

- Complete redesigns without prior discussion
- Changes to personal data files (user.ts, projects.ts, experiences.ts)
- Style-only changes without functional improvement
- Adding heavy dependencies for minor features

## Development Guidelines

### Code Style

- TypeScript strict mode. `npx tsc --noEmit` must pass with zero errors
- Use shadcn/ui components where possible
- Use Lucide icons consistently
- Tailwind CSS for all styling (no inline styles or CSS modules)
- HSL CSS variables for colors (defined in `styles/globals.css`)

### Commits

- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`
- Keep commits focused on a single change
- Write commit messages that explain why, not just what

### Testing Your Changes

```bash
# Type check
npx tsc --noEmit

# Build (must complete with zero errors)
npm run build

# Lint
npm run lint

# Format
npm run format:check
```

### Key Architecture Rules

1. **App Router only.** All pages use Next.js 15 App Router with React 19.
2. **Design tokens.** Use `border-line`, `bg-muted`, `text-muted-foreground`, etc. Never hardcode colors.
3. **Screen lines.** Use `screen-line-top` / `screen-line-bottom` utilities for 1px separator lines.
4. **Reduced motion.** All animations must respect `prefers-reduced-motion`.
5. **Data files.** Personal data lives in `features/portfolio/data/` and `features/work/data/`. Config lives in `config/site.ts`.

## House Rules

### Before You Code

- **Check for duplicates.** Search open issues and PRs before starting work.
- **Get approval for features.** Open an issue, describe the problem, and wait for a maintainer response before building.
- **Claim the issue.** Comment on an issue to let others know you're working on it.

### Writing Your PR

- **Keep PRs small.** Under 400 lines changed is ideal. Split large changes into stacked PRs.
- **Link the issue.** Use `Closes #123` in the PR description.
- **Show your work.** For UI changes, include a screenshot or short video.
- **Test both themes.** Verify your changes work in both light and dark mode.
- **Test mobile.** Check responsive behavior at mobile viewport widths.

### Code Quality

- No `console.log` left in committed code
- No commented-out code blocks
- No `any` types unless absolutely unavoidable (and commented why)
- Prefer composition over abstraction for one-off logic

## Submitting a PR

1. Fork the repo and create your branch from `main`
2. Make your changes
3. Verify: `npx tsc --noEmit && npm run build`
4. Open a PR with a clear description of what and why
5. Fill out the PR template checklist
6. Wait for review

## First Time Contributing to Open Source?

Look for issues labeled [`good first issue`](https://github.com/Devansh-365/devanshtiwari.com/labels/good%20first%20issue). These are scoped, well-defined tasks that don't require deep knowledge of the codebase.

If you're stuck, open a draft PR and ask for help. We'd rather help you finish than see you give up.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
