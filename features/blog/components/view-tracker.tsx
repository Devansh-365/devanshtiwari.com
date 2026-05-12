'use client'

import { useEffect } from 'react'

interface Props {
  slug: string
  onTracked?: () => void
}

export function ViewTracker({ slug, onTracked }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
        .then((res) => {
          // 204 = new unique view counted; call back to trigger optimistic +1
          if (res.status === 204 && onTracked) onTracked()
        })
        .catch(() => {})
    }, 5000)

    return () => clearTimeout(timer)
  }, [slug, onTracked])

  return null
}
