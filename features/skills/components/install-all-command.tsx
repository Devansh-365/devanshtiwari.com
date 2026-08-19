"use client"

import { useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"

import { copyText } from "@/lib/copy"

export function InstallAllCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await copyText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Copy install-all command"
    >
      <span className="truncate">$ {command}</span>
      {copied ? (
        <CheckIcon className="h-4 w-4 shrink-0 text-green-500" />
      ) : (
        <CopyIcon className="h-4 w-4 shrink-0" />
      )}
    </button>
  )
}
