import { unstable_cache } from "next/cache"

import type { Activity } from "@/components/kibo-ui/contribution-graph"

type GitHubContributionsResponse = {
  contributions: Activity[]
}

const GITHUB_USERNAME = "Devansh-365"

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
      )
      const data = (await res.json()) as GitHubContributionsResponse
      return data.contributions || []
    } catch {
      return []
    }
  },
  ["github-contributions"],
  { revalidate: 86400 }
)
