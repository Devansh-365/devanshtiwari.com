export type UsesItem = {
  name: string
  description?: string
  href?: string
}

export type UsesCategory = {
  category: string
  items: UsesItem[]
}

export const USES: UsesCategory[] = [
  {
    category: "Hardware",
    items: [
      { name: "MacBook Pro 14\u2033 M3", description: "Daily driver" },
      { name: "LG UltraFine 4K", description: "External display" },
      { name: "Keychron K2", description: "Mechanical keyboard" },
      { name: "Logitech MX Master 3", description: "Mouse" },
    ],
  },
  {
    category: "Editor",
    items: [
      { name: "Cursor", description: "Primary editor", href: "https://cursor.sh" },
      { name: "VSCode Dark+", description: "Theme" },
    ],
  },
  {
    category: "Terminal",
    items: [
      { name: "Warp", description: "Terminal emulator", href: "https://warp.dev" },
    ],
  },
  {
    category: "Browser",
    items: [
      { name: "Arc", description: "Primary browser", href: "https://arc.net" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", description: "UI design and prototyping", href: "https://figma.com" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Notion", description: "Notes and docs", href: "https://notion.so" },
      { name: "Linear", description: "Issue tracking", href: "https://linear.app" },
      { name: "Raycast", description: "Launcher and productivity tools", href: "https://raycast.com" },
    ],
  },
]
