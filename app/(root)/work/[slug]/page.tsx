import { Metadata } from "next"
import { notFound } from "next/navigation"
import { siteConfig } from "@/config/site"
import { WORK_PROJECTS } from "@/features/work/data/projects"
import { generateBreadcrumbs } from "@/lib/schema"
import { ProjectDetail } from "@/features/work/components/project-detail"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return WORK_PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const project = WORK_PROJECTS.find((p) => p.slug === slug)

  if (!project) return { title: "Project Not Found" }

  return {
    title: project.title,
    description: project.oneLiner,
    openGraph: {
      title: project.title,
      description: project.oneLiner,
      type: "article",
      url: `/work/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.oneLiner,
    },
    alternates: {
      canonical: `${siteConfig.siteUrl}/work/${slug}`,
    },
  }
}

export default async function WorkProjectPage(props: Props) {
  const { slug } = await props.params
  const project = WORK_PROJECTS.find((p) => p.slug === slug)

  if (!project) notFound()

  const breadcrumbs = generateBreadcrumbs([
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: project.title },
  ])

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.oneLiner,
    url: `${siteConfig.siteUrl}/work/${slug}`,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.siteUrl}/#person`,
      name: "Devansh Tiwari",
      url: siteConfig.siteUrl,
    },
    ...(project.tech && {
      keywords: project.tech.join(", "),
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <ProjectDetail project={project} />
    </>
  )
}
