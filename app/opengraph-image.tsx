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
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(255,255,255,0.1)",
          }}
        />

        {/* DT Mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "#e8e8e8",
              color: "#0a0a0a",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            DT
          </div>
        </div>

        {/* Name */}
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

        {/* Bio */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(232,232,232,0.5)",
            lineHeight: 1.4,
            maxWidth: "800px",
          }}
        >
          AI Product Builder. I ship AI products end-to-end, from user research
          to production.
        </div>

        {/* Bottom info */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginTop: "auto",
            fontSize: "20px",
            color: "rgba(232,232,232,0.35)",
            fontFamily: "monospace",
          }}
        >
          <span>devanshtiwari.com</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>Co-Founder @ Metis</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>50+ products shipped</span>
        </div>

        {/* Bottom line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: "rgba(255,255,255,0.1)",
          }}
        />

        {/* Side lines */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "60px",
            bottom: 0,
            width: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: "60px",
            bottom: 0,
            width: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
        />
      </div>
    ),
    { ...size }
  )
}
