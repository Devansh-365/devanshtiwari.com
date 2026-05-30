"use client"

import { useMemo } from "react"
import Image from "next/image"
import { getMDXComponent } from "mdx-bundler/client"

import CustomLink from "./CustomLink"
import Pre from "./Pre"
import TOCInline from "./TOCInline"
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from "./Table"

// MDX Components mapping
export const MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: Table,
  thead: TableHead,
  tbody: TableBody,
  tr: TableRow,
  th: TableHeader,
  td: TableCell,
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
