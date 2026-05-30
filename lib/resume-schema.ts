import { siteConfig } from "@/lib/config"
import { USER } from "@/features/portfolio/data/user"
import { EXPERIENCES } from "@/features/portfolio/data/experiences"

function parsePeriod(period?: string): string | undefined {
  if (!period) return undefined
  if (/^\d{2}\.\d{4}$/.test(period)) {
    const [mm, yyyy] = period.split(".")
    return `${yyyy}-${mm}`
  }
  if (/^\d{4}$/.test(period)) {
    return period
  }
  return undefined
}

/**
 * Generates Schema.org Person + CreativeWork structured data for the resume page.
 */
export function generateResumeSchema() {
  const occupations = EXPERIENCES.flatMap((exp) =>
    exp.positions.map((pos) => {
      const startDate = parsePeriod(pos.employmentPeriod.start)
      const endDate = parsePeriod(pos.employmentPeriod.end)

      return {
        "@type": "Occupation" as const,
        name: pos.title,
        alternateName: [pos.title, `${pos.title} at ${exp.companyName}`],
        hiringOrganization: exp.companyWebsite
          ? {
              "@type": "Organization" as const,
              name: exp.companyName,
              url: exp.companyWebsite,
            }
          : {
              "@type": "Organization" as const,
              name: exp.companyName,
            },
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(pos.description && { description: pos.description }),
        ...(pos.skills && pos.skills.length > 0 && {
          skills: pos.skills.join(", "),
        }),
      }
    })
  )

  const education = EXPERIENCES
    .filter((exp) => exp.id === "education")
    .flatMap((exp) =>
      exp.positions.map((pos) => ({
        "@type": "EducationalOccupationalCredential" as const,
        name: pos.title,
        recognizedBy: {
          "@type": "CollegeOrUniversity" as const,
          name: exp.companyName,
        },
        ...(parsePeriod(pos.employmentPeriod.end) && {
          dateCreated: parsePeriod(pos.employmentPeriod.end),
        }),
      }))
    )

  const allSkills = Array.from(
    new Set(
      EXPERIENCES.flatMap((exp) =>
        exp.positions.flatMap((pos) => pos.skills || [])
      )
    )
  ).sort()

  const techStack = USER.techStack || []
  const keywords = Array.from(new Set([...allSkills, ...techStack])).sort()

  const personSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.siteUrl}/resume/#person`,
        name: USER.displayName,
        givenName: USER.firstName,
        familyName: USER.lastName,
        alternateName: [USER.username, "devansh-365"],
        jobTitle: USER.jobTitle,
        email: USER.email,
        url: USER.website,
        image: `${siteConfig.siteUrl}${USER.avatar}`,
        description:
          "AI product engineer. 50+ shipped products across AI infra, e-commerce personalization, and SaaS. Available for freelance and consulting engagements.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi NCR",
          addressCountry: "IN",
        },
        sameAs: USER.socialLinks.map((link) => link.href),
        knowsAbout: [
          "AI Product Development",
          "Product Management",
          "SaaS Product Validation",
          "AI/LLM Systems",
          "RAG Pipelines",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "E-commerce Personalization",
          "Full Stack Development",
          "Startup Building",
          "Voice AI",
          "Conversational AI",
          "LLM Cost Optimization",
          "Multi-Provider AI Routing",
        ],
        hasOccupation: occupations,
        alumniOf: education,
        worksFor: occupations.length > 0
          ? occupations[0].hiringOrganization
          : undefined,
      },
      {
        "@type": "CreativeWork",
        "@id": `${siteConfig.siteUrl}/resume/#resume`,
        name: `${USER.displayName} — Resume`,
        description:
          "AI Product Engineer resume — 50+ shipped products, end-to-end delivery across engineering and product, and a focus on cost-optimized LLM infrastructure.",
        url: `${siteConfig.siteUrl}/resume`,
        author: { "@id": `${siteConfig.siteUrl}/resume/#person` },
        about: { "@id": `${siteConfig.siteUrl}/resume/#person` },
        inLanguage: "en-US",
        dateCreated: USER.dateCreated || "2024-01-01",
        dateModified: new Date().toISOString().split("T")[0],
        keywords: keywords.join(", "),
        hasPart: [
          {
            "@type": "ItemList",
            name: "Work Experience",
            alternateName: [
              "Experience",
              "Employment History",
              "Professional Experience",
              "Career History",
            ],
            itemListElement: occupations.map((occ, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: occ,
            })),
          },
          {
            "@type": "ItemList",
            name: "Technical Skills",
            alternateName: [
              "Skills",
              "Core Competencies",
              "Technologies",
              "Tech Stack",
              "Expertise",
            ],
            itemListElement: [
              {
                "@type": "ItemList",
                name: "Languages",
                itemListElement: techStack
                  .filter((s) =>
                    ["TypeScript", "JavaScript", "Python", "SQL", "Go"].includes(s)
                  )
                  .map((s, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: s,
                  })),
              },
              {
                "@type": "ItemList",
                name: "Frameworks & Tools",
                itemListElement: techStack
                  .filter(
                    (s) =>
                      !["TypeScript", "JavaScript", "Python", "SQL", "Go"].includes(s)
                  )
                  .map((s, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: s,
                  })),
              },
            ],
          },
          {
            "@type": "ItemList",
            name: "Education",
            alternateName: [
              "Academic Background",
              "Education Background",
              "Qualifications",
            ],
            itemListElement: education.map((edu, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: edu,
            })),
          },
        ],
      },
    ],
  }

  return personSchema
}

/**
 * Generates JSON Resume format (https://jsonresume.org/schema/)
 */
export function generateJSONResume() {
  const work = EXPERIENCES
    .filter((exp) => exp.id !== "education")
    .flatMap((exp) =>
      exp.positions.map((pos) => ({
        name: exp.companyName,
        position: pos.title,
        ...(exp.companyWebsite && { url: exp.companyWebsite }),
        startDate: parsePeriod(pos.employmentPeriod.start),
        endDate: parsePeriod(pos.employmentPeriod.end),
        ...(pos.employmentType && { type: pos.employmentType }),
        ...(pos.description && { summary: pos.description }),
        ...(pos.skills && pos.skills.length > 0 && {
          highlights: pos.skills,
        }),
      }))
    )
    .filter((w): w is NonNullable<typeof w> => w.startDate !== undefined)

  const education = EXPERIENCES
    .filter((exp) => exp.id === "education")
    .flatMap((exp) =>
      exp.positions.map((pos) => ({
        institution: exp.companyName,
        ...(parsePeriod(pos.employmentPeriod.end) && {
          endDate: parsePeriod(pos.employmentPeriod.end),
        }),
        ...(pos.title.includes("B.Tech") && {
          studyType: "Bachelor",
          area: "Information Technology",
        }),
        ...(pos.title.includes("Fellowship") && {
          studyType: "Fellowship",
          area: "Product Management",
        }),
      }))
    )

  const allSkills = Array.from(
    new Set(
      EXPERIENCES.flatMap((exp) =>
        exp.positions.flatMap((pos) => pos.skills || [])
      )
    )
  ).sort()

  const languages = allSkills.filter((s) =>
    ["TypeScript", "JavaScript", "Python", "SQL", "Go", "Java", "C++"].includes(s)
  )

  const frontend = allSkills.filter((s) =>
    ["React", "Next.js", "Tailwind CSS"].includes(s)
  )

  const backend = allSkills.filter((s) =>
    ["Node.js", "PostgreSQL", "MongoDB", "REST", "GraphQL", "Docker", "AWS"].includes(s)
  )

  const tools = allSkills.filter((s) =>
    ["Git", "Docker", "AWS", "Vercel", "System Design", "SEO", "RTL/i18n"].includes(s)
  )

  const other = allSkills.filter(
    (s) =>
      !languages.includes(s) &&
      !frontend.includes(s) &&
      !backend.includes(s) &&
      !tools.includes(s)
  )

  const skills = [
    ...(languages.length > 0 ? [{ name: "Languages", keywords: languages }] : []),
    ...(frontend.length > 0 ? [{ name: "Frontend", keywords: frontend }] : []),
    ...(backend.length > 0 ? [{ name: "Backend", keywords: backend }] : []),
    ...(tools.length > 0 ? [{ name: "Tools & Platforms", keywords: tools }] : []),
    ...(other.length > 0 ? [{ name: "Other Skills", keywords: other }] : []),
  ]

  const profiles = USER.socialLinks
    .filter((link) => !link.href.startsWith("mailto:"))
    .map((link) => ({
      network: link.title.replace(" / X", "").replace("Email", ""),
      username:
        link.title === "GitHub"
          ? "Devansh-365"
          : link.title === "LinkedIn"
            ? "devansh-tiwari-3342611a6"
            : link.title === "Twitter / X"
              ? "devansh_0718"
              : USER.username,
      url: link.href,
    }))

  return {
    $schema: "https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json",
    basics: {
      name: USER.displayName,
      label: USER.jobTitle,
      email: USER.email,
      url: USER.website,
      location: {
        city: "Delhi NCR",
        countryCode: "IN",
      },
      profiles,
    },
    work,
    education,
    skills,
    meta: {
      canonical: `${siteConfig.siteUrl}/resume.json`,
      version: "v1.0.0",
      lastModified: new Date().toISOString().split("T")[0],
    },
  }
}
