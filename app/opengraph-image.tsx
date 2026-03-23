import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Devansh Tiwari — AI Product Builder"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#e8e8e8",
              color: "#0a0a0a",
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "40px",
            }}
          >
            DT
          </div>

          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Devansh Tiwari
          </div>

          <div
            style={{
              fontSize: "28px",
              color: "rgba(232,232,232,0.5)",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            AI Product Builder. I ship AI products end-to-end, from user
            research to production.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "20px",
            color: "rgba(232,232,232,0.35)",
          }}
        >
          <span>www.devanshtiwari.com</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>Co-Founder @ Metis</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>50+ products shipped</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
