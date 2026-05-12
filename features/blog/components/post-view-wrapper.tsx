'use client'

import { useState, useCallback } from 'react'
import { ReactNode } from 'react'
import PostLayout from '@/components/blog/post-layout'
import { ViewTracker } from '@/features/blog/components/view-tracker'
import { PostFrontMatter } from '@/types/PostFrontMatter'
import { Toc } from '@/types/Toc'

interface Props {
  frontMatter: PostFrontMatter
  toc?: Toc
  prev?: { slug: string; title: string }
  next?: { slug: string; title: string }
  slug: string
  initialViews: number
  children: ReactNode
}

export function PostViewWrapper({
  frontMatter,
  toc,
  prev,
  next,
  slug,
  initialViews,
  children,
}: Props) {
  const [views, setViews] = useState(initialViews)

  const handleTracked = useCallback(() => {
    setViews((v) => v + 1)
  }, [])

  return (
    <>
      <ViewTracker slug={slug} onTracked={handleTracked} />
      <PostLayout
        frontMatter={frontMatter}
        toc={toc}
        prev={prev}
        next={next}
        views={views}
      >
        {children}
      </PostLayout>
    </>
  )
}
