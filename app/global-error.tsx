"use client"

import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily:
            'Geist, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          backgroundColor: "hsl(0 0% 4%)",
          color: "hsl(0 0% 91%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "6rem",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              opacity: 0.15,
              margin: 0,
            }}
          >
            500
          </p>

          <h1
            style={{
              marginTop: "1rem",
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "-0.025em",
            }}
          >
            Something went wrong
          </h1>

          <p
            style={{
              marginTop: "0.5rem",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              opacity: 0.5,
            }}
          >
            A critical error occurred. Please try again.
          </p>

          <button
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              padding: "0.5rem 1rem",
              fontFamily: "monospace",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "hsl(0 0% 4%)",
              backgroundColor: "hsl(0 0% 91%)",
              border: "none",
              borderRadius: "0.375rem",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
