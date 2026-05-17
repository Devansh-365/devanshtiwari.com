import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"

const GITHUB_USERNAME = "Devansh-365"

async function fetchFromJogruber(): Promise<Activity[]> {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    { signal: AbortSignal.timeout(5000) }
  )
  if (!res.ok) return []
  const data = (await res.json()) as { contributions: Activity[] }
  return data.contributions || []
}

// Scrapes GitHub's own public contribution endpoint — no token required.
// GitHub renders this HTML fragment for every public profile via XHR.
async function fetchFromGitHubDirect(): Promise<Activity[]> {
  const res = await fetch(
    `https://github.com/users/${GITHUB_USERNAME}/contributions`,
    {
      headers: { "X-Requested-With": "XMLHttpRequest" },
      signal: AbortSignal.timeout(8000),
    }
  )
  if (!res.ok) return []
  const html = await res.text()

  const activities: Activity[] = []
  // Each contribution day is a <td> or <rect> element with data-date, data-count, data-level
  const elementRegex = /<(?:td|rect)\s+([^>]*?)>/g
  for (const match of html.matchAll(elementRegex)) {
    const attrs = match[1]
    if (!attrs.includes("data-date")) continue
    const date = attrs.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1]
    const countStr = attrs.match(/data-count="(\d+)"/)?.[1]
    const levelStr = attrs.match(/data-level="(\d+)"/)?.[1]
    if (date && countStr !== undefined) {
      activities.push({
        date,
        count: parseInt(countStr, 10),
        level: levelStr ? parseInt(levelStr, 10) : 0,
      })
    }
  }
  return activities
}

export const getGitHubContributions = unstable_cache(
  async (): Promise<Activity[]> => {
    try {
      const data = await fetchFromJogruber()
      if (data.length > 0) return data
    } catch {}

    try {
      const data = await fetchFromGitHubDirect()
      if (data.length > 0) return data
    } catch {}

    return []
  },
  ["github-contributions"],
  { revalidate: 86400 }
)
