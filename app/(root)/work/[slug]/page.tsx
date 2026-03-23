import { Metadata } from "next"
import { notFound } from "next/navigation"
import { WORK_PROJECTS } from "@/features/work/data/projects"
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
      canonical: `/work/${slug}`,
    },
  }
}

export default async function WorkProjectPage(props: Props) {
  const { slug } = await props.params
  const project = WORK_PROJECTS.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.oneLiner,
            author: {
              "@type": "Person",
              name: "Devansh Tiwari",
              url: "https://www.devanshtiwari.com",
            },
          }),
        }}
      />
      <ProjectDetail project={project} />
    </>
  )
}
