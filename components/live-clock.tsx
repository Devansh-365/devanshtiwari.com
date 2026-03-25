"use client"

import { useEffect, useState } from "react"
import { ClockIcon } from "lucide-react"

export function LiveClock() {
  const [time, setTime] = useState<string[]>(["--", "--"])

  useEffect(() => {
    const update = () => {
      const now = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setTime(now.split(":"))
    }

    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      role="timer"
      aria-label={`Current time: ${time[0]}:${time[1]} IST`}
      className="inline-flex items-center gap-1.5 text-muted-foreground/40"
      suppressHydrationWarning
    >
      <ClockIcon className="h-3 w-3" />
      <span className="font-mono text-[11px] tabular-nums tracking-widest">
        {time[0]}
        <span className="motion-safe:animate-pulse">:</span>
        {time[1]}
      </span>
      <span className="font-mono text-[10px] tracking-wider">IST</span>
    </span>
  )
}
