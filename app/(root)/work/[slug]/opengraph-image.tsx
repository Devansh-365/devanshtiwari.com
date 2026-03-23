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
              {project.role} at {project.company}
            </span>
          </div>

          <div
            style={{
              fontSize: "52px",
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
              fontSize: "22px",
              color: "rgba(232,232,232,0.5)",
              lineHeight: 1.4,
              marginTop: "16px",
              maxWidth: "900px",
            }}
          >
            {project.oneLiner}
          </div>
        </div>

        <div style={{ display: "flex", gap: "48px" }}>
          {(project.stats || []).map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span
                style={{
                  fontSize: "32px",
                  fontWeight: 700,
                  color: "#e8e8e8",
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  fontSize: "14px",
                  color: "rgba(232,232,232,0.35)",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
