'use client'

import { useEffect } from 'react'

export function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      }).catch(() => {})
    }, 5000)

    return () => clearTimeout(timer)
  }, [slug])

  return null
}
