"use client"

import { useMemo } from "react"
import Image from "next/image"
import { getMDXComponent } from "mdx-bundler/client"

import CustomLink from "./CustomLink"
import Pre from "./Pre"
import TOCInline from "./TOCInline"

// MDX Components mapping
export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
}

type MDXLayoutRendererProps = {
  mdxSource: string
  [key: string]: unknown
}

export const MDXLayoutRenderer = ({
  mdxSource,
  ...rest
}: MDXLayoutRendererProps) => {
  const MDXLayout = useMemo(() => getMDXComponent(mdxSource), [mdxSource])

  return <MDXLayout components={MDXComponents} {...rest} />
}
