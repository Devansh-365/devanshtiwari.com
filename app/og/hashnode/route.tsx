import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
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
              marginBottom: "20px",
            }}
          >
            Devansh Tiwari
          </div>

          <div
            style={{
              fontSize: "32px",
              fontWeight: 500,
              color: "rgba(232,232,232,0.85)",
              lineHeight: 1.3,
              marginBottom: "18px",
            }}
          >
            AI Infrastructure & Product Engineering
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "rgba(232,232,232,0.5)",
              lineHeight: 1.4,
              maxWidth: "880px",
            }}
          >
            Practical notes on shipping AI products. LLM cost optimization,
            multi-provider routing, infrastructure patterns.
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
          <span>blog.devanshtiwari.com</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>Product Engineer @ Metis</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
