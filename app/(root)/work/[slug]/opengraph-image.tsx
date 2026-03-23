import { ImageResponse } from "next/og"
import { WORK_PROJECTS } from "@/features/work/data/projects"

export const alt = "Project"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = WORK_PROJECTS.find((p) => p.slug === slug)

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#0a0a0a",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e8e8e8",
            fontSize: 48,
            fontFamily: "system-ui",
          }}
        >
          Project not found
        </div>
      ),
      { ...size }
    )
  }

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

        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
              {project.role} at {project.company}
            </span>
          </div>

          <div
            style={{
              fontSize: "56px",
              fontWeight: 700,
              color: "#e8e8e8",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginTop: "32px",
            }}
          >
            {project.title}
          </div>

          <div
            style={{
              fontSize: "24px",
              color: "rgba(232,232,232,0.5)",
              lineHeight: 1.4,
              marginTop: "16px",
              maxWidth: "900px",
            }}
          >
            {project.oneLiner}
          </div>
        </div>

        {/* Bottom stats */}
        <div style={{ display: "flex", gap: "48px" }}>
          {(project.stats || []).map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "#e8e8e8",
                  fontFamily: "monospace",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  color: "rgba(232,232,232,0.35)",
                  fontFamily: "monospace",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
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
      </div>
    ),
    { ...size }
  )
}
