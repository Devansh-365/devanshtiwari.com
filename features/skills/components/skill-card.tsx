"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRightIcon, CheckIcon, CopyIcon } from "lucide-react"

import { copyText } from "@/lib/copy"
import type { AgentSkill } from "../types/skill"

export function SkillCard({ skill }: { skill: AgentSkill }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    await copyText(skill.installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group flex flex-col p-4 transition-colors hover:bg-accent/50">
      <Link
        href={skill.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5"
      >
        <h2 className="font-semibold leading-snug group-hover:text-primary">
          {skill.name}
        </h2>
        <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-all duration-300 group-hover:rotate-45 group-hover:opacity-100" />
      </Link>

      <p className="mt-1.5 line-clamp-3 text-sm text-muted-foreground">
        {skill.description}
      </p>

      <button
        onClick={handleCopy}
        className="mt-3 flex items-center justify-between gap-2 rounded-md border border-line bg-muted/40 px-2.5 py-1.5 text-left font-mono text-[11px] text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
        aria-label={`Copy install command for ${skill.name}`}
      >
        <span className="truncate">$ {skill.installCommand}</span>
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 shrink-0 text-green-500" />
        ) : (
          <CopyIcon className="h-3.5 w-3.5 shrink-0" />
        )}
      </button>
    </div>
  )
}
