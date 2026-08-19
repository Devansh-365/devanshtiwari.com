import { Metadata } from "next"
import { getAgentSkills } from "@/lib/skills"
import { SkillCard } from "@/features/skills/components/skill-card"
import { InstallAllCommand } from "@/features/skills/components/install-all-command"
import { ScrollReveal } from "@/components/effects/scroll-reveal"

const INSTALL_ALL_COMMAND = "npx skills add Devansh-365/skills --skill '*'"

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Agent skills I've built and use daily — packaged workflows for Claude Code and other coding agents.",
  alternates: { canonical: "/skills" },
}

export default async function SkillsPage() {
  const skills = await getAgentSkills()

  return (
    <div className="min-h-[60vh]">
      <div className="screen-line-bottom px-4">
        <h1 className="text-3xl font-semibold leading-none tracking-tight">
          Skills
        </h1>
      </div>

      <div className="p-4">
        <p className="font-mono text-sm text-balance text-muted-foreground">
          Agent skills I&apos;ve built and use daily, packaged for install
          with{" "}
          <a
            href="https://github.com/Devansh-365/skills"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground"
          >
            npx skills
          </a>
          .
        </p>
      </div>

      <div className="mx-4 mb-4 rounded-md border border-line">
        <InstallAllCommand command={INSTALL_ALL_COMMAND} />
      </div>

      {skills.length > 0 ? (
        <div className="screen-line-top relative">
          <div className="pointer-events-none absolute inset-0 -z-[1] grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
            <div className="border-r border-line" />
            <div className="border-l border-line" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            {skills.map((skill, i) => (
              <ScrollReveal
                key={skill.slug}
                delay={i * 0.1}
                className="screen-line-top screen-line-bottom [&:nth-child(-n+2)]:screen-line-top"
              >
                <SkillCard skill={skill} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      ) : (
        <div className="screen-line-top px-4 py-12 text-center">
          <p className="font-mono text-sm text-muted-foreground">
            No skills published yet. Check back soon.
          </p>
        </div>
      )}

      <div className="screen-line-top h-4 w-full" />
    </div>
  )
}
