import type { WorkProject } from "../../types/project"

export const daysleft: WorkProject = {
  slug: "daysleft",
  title: "Days Left",
  status: "shipped",
  featured: false,
  thumbnail: "/work/daysleft.jpg",
  oneLiner:
    "macOS menu bar utility that makes the year's urgency visible — one number, always in front of you. Built on a market gap with 880K followers and no product.",
  role: "Solo Builder",
  company: "Personal",
  period: "2025",
  githubUrl: "https://github.com/Devansh-365/daysleft",
  highlights: [
    "Chose 'days remaining' over elapsed percentage — loss aversion research (Kahneman) makes remaining-days framing hit 2x harder; every competitor defaults to elapsed %",
    "Stacked year + month + week view creates cascading urgency — week level changes today's behavior, year level is the emotional anchor; no competitor surfaces all three",
    "Calm design with no color changes or alarms — the number speaks without judgment; color-coded urgency feels like a scolding and trains users to dismiss it",
    "Identified the distribution gap: @progressbar_ has 880K Instagram followers posting year-progress content with zero product attached; Mac App Store slot is wide open",
  ],
  features: [
    {
      title: "Loss-Aversion Framing",
      description:
        "Shows days remaining, not elapsed percentage. Psychological research on loss aversion (Kahneman) shows that 'only 47 days left' triggers 2x the behavioral response of '87% complete.' Every competing app gets this backwards.",
    },
    {
      title: "Cascading Urgency View",
      description:
        "One click reveals days left in the year, the month, and the week — stacked in one popover. The week level changes what you do today. The year level is the emotional anchor that makes the week level matter.",
    },
    {
      title: "Always-On Ambient Signal",
      description:
        "The number lives in the menu bar through every task, every context switch, every distraction spiral. No app to open, no action required. The friction of 'checking' was the product's main competitor.",
    },
    {
      title: "Calm by Design",
      description:
        "No color changes as the year depletes, no alarms, no nudges. The number speaks for itself. Urgency that doesn't feel like judgment gets used daily. Urgency that scolds gets quit-at-login turned off.",
    },
  ],
  problem:
    "91% of people abandon their annual goals by February — not because they stop caring, but because the year goes abstract. The days slip by invisibly. People only feel the urgency when it's already December. The demand signal is enormous: a single @year_progress tweet saying '2024 is 50% complete' got 2.5M views and 26K likes. @progressbar_ built 880,000 Instagram followers posting nothing but year-progress content — with no product attached. Progress Bar OSX hit #1 on Product Hunt in 2018 with 617 upvotes and was never meaningfully updated. The highest-rated year-progress app on the Mac App Store today has 5 reviews. The Mac slot for this is open.",
  whatIBuilt:
    "A macOS menu bar app that shows one number — days remaining in the year — always visible, never intrusive. Backed by research: the 'days remaining' framing activates loss aversion 2x harder than elapsed percentages. The dropdown stacks year, month, and week urgency — each time scale serves a different decision. Designed to be calm: no color escalation, no alerts, no friction. The target user already pays for quality Mac tools (Things 3, Raycast, CleanShot) and doesn't need another system — they need a sharper ambient signal. The Sindre Sorhus slot for year progress, unoccupied since 2018.",
  stats: [
    {
      label: "Tweet impressions",
      value: "2.5M",
      url: "https://x.com/year_progress/status/1807745980877443250",
    },
    { label: "IG followers, no app", value: "880K" },
    { label: "Competitor reviews", value: "5" },
    { label: "PH #1 upvotes (2018)", value: "617" },
  ],
  tech: ["Swift 6", "SwiftUI", "macOS", "ServiceManagement", "XCTest"],
}
