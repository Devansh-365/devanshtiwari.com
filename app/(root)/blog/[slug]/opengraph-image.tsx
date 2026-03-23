import { ImageResponse } from "next/og"

export const alt = "Blog Post"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())

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

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* DT Pixel Mark */}
            <div style={{ position: "relative", width: "80px", height: "40px" }}>
              <div style={{ position: "absolute", left: 0, top: 0, width: "5px", height: "40px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "5px", top: 0, width: "20px", height: "5px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "5px", top: "35px", width: "20px", height: "5px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "25px", top: "5px", width: "5px", height: "10px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "30px", top: "10px", width: "5px", height: "20px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "25px", top: "25px", width: "5px", height: "10px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "40px", top: 0, width: "40px", height: "10px", background: "#e8e8e8" }} />
              <div style={{ position: "absolute", left: "55px", top: "10px", width: "10px", height: "30px", background: "#e8e8e8" }} />
            </div>
            <span
              style={{
                fontSize: "18px",
                color: "rgba(232,232,232,0.4)",
                fontFamily: "monospace",
              }}
            >
              devanshtiwari.com/blog
            </span>
          </div>

          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              marginTop: "48px",
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            fontSize: "18px",
            color: "rgba(232,232,232,0.3)",
            fontFamily: "monospace",
          }}
        >
          <span>Devansh Tiwari</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>AI Product Builder</span>
        </div>

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
      </div>
    ),
    { ...size }
  )
}
