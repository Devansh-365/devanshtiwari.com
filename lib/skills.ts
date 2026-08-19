import { unstable_cache } from "next/cache"
import matter from "gray-matter"

import type { AgentSkill } from "@/features/skills/types/skill"

const SKILLS_GITHUB_REPO = "Devansh-365/skills"
const SKILLS_DIR = "skills"

type GitHubContentEntry = {
  name: string
  type: "dir" | "file" | "symlink" | "submodule"
}

async function fetchSkillDirs(): Promise<GitHubContentEntry[]> {
  const response = await fetch(
    `https://api.github.com/repos/${SKILLS_GITHUB_REPO}/contents/${SKILLS_DIR}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  )

  if (!response.ok) return []

  const entries = (await response.json()) as GitHubContentEntry[]
  return entries.filter(
    (entry) => entry.type === "dir" && entry.name !== "example-skill"
  )
}

async function fetchSkill(dirName: string): Promise<AgentSkill | null> {
  const response = await fetch(
    `https://raw.githubusercontent.com/${SKILLS_GITHUB_REPO}/main/${SKILLS_DIR}/${dirName}/SKILL.md`
  )

  if (!response.ok) return null

  const raw = await response.text()
  const { data } = matter(raw)

  const name = typeof data.name === "string" ? data.name : dirName
  const description = typeof data.description === "string" ? data.description : ""

  return {
    slug: dirName,
    name,
    description,
    installCommand: `npx skills add ${SKILLS_GITHUB_REPO} --skill ${dirName}`,
    sourceUrl: `https://github.com/${SKILLS_GITHUB_REPO}/tree/main/${SKILLS_DIR}/${dirName}`,
  }
}

export const getAgentSkills = unstable_cache(
  async (): Promise<AgentSkill[]> => {
    try {
      const dirs = await fetchSkillDirs()
      const skills = await Promise.all(dirs.map((dir) => fetchSkill(dir.name)))
      return skills.filter((skill): skill is AgentSkill => skill !== null)
    } catch {
      return []
    }
  },
  ["agent-skills-v2"],
  { revalidate: 300 }
)
