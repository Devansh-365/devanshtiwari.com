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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "8px",
                background: "#e8e8e8",
                color: "#0a0a0a",
                fontSize: "16px",
                fontWeight: 700,
              }}
            >
              DT
            </div>
            <span
              style={{
                fontSize: "18px",
                color: "rgba(232,232,232,0.4)",
              }}
            >
              www.devanshtiwari.com/blog
            </span>
          </div>

          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
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
          }}
        >
          <span>Devansh Tiwari</span>
          <span style={{ color: "rgba(232,232,232,0.15)" }}>|</span>
          <span>AI Product Builder</span>
        </div>
      </div>
    ),
    { ...size }
  )
}
