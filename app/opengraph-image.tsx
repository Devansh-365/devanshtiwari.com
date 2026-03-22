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

        {/* DT Pixel Mark */}
        <div
          style={{
            display: "flex",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "128px",
              height: "64px",
            }}
          >
            {/* D letter */}
            <div style={{ position: "absolute", left: 0, top: 0, width: "8px", height: "64px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "8px", top: 0, width: "32px", height: "8px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "8px", top: "56px", width: "32px", height: "8px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "40px", top: "8px", width: "8px", height: "16px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "48px", top: "16px", width: "8px", height: "32px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "40px", top: "40px", width: "8px", height: "16px", background: "#e8e8e8" }} />
            {/* T letter */}
            <div style={{ position: "absolute", left: "64px", top: 0, width: "64px", height: "16px", background: "#e8e8e8" }} />
            <div style={{ position: "absolute", left: "88px", top: "16px", width: "16px", height: "48px", background: "#e8e8e8" }} />
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
