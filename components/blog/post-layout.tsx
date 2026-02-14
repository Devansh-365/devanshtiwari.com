"use client"

import Link from 'next/link';
import { ReactNode } from 'react';

import PageTitle from '@/components/page-title';
import TOCInline from '@/components/mdx/TOCInline';
import { siteConfig } from '@/config/site';
import { PostFrontMatter } from '@/types/PostFrontMatter';
import { Toc } from '@/types/Toc';

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

interface Props {
  frontMatter: PostFrontMatter;
  next?: { slug: string; title: string };
  prev?: { slug: string; title: string };
  toc?: Toc;
  children: ReactNode;
}

export default function PostLayout({
  frontMatter,
  next,
  prev,
  toc,
  children,
}: Props) {
  const { date, title, readingTime, images } = frontMatter;
  const banner = images?.[0];

  return (
    <article className="container py-8">
      {/* Header */}
      <header className="mb-8 border-b border-gray-200 pb-8 dark:border-gray-700">
        <div className="space-y-4 text-center">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}>
                {new Date(date).toLocaleDateString(
                  siteConfig.language,
                  postDateTemplate
                )}
              </time>
            </dd>
          </dl>
          <PageTitle>{title}</PageTitle>
          {readingTime?.text && (
            <p className="text-base leading-6 text-gray-500 dark:text-gray-400">
              {readingTime.text}
            </p>
          )}
        </div>
      </header>

      {/* Banner Image */}
      {banner && (
        <div className="mb-8">
          <img
            src={banner}
            className="w-full rounded-lg object-cover object-center"
            alt="Post banner"
          />
        </div>
      )}

      {/* Table of Contents */}
      {toc && toc.length > 0 && (
        <div className="mb-8">
          <TOCInline toc={toc} asDisclosure />
        </div>
      )}

      {/* Content */}
      <div className="prose prose-lg max-w-none pb-8 dark:prose-invert prose-headings:mb-4 prose-headings:mt-8 prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2 dark:prose-h2:border-gray-700 prose-h3:text-2xl prose-h4:text-xl prose-p:my-4 prose-p:leading-7 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-primary prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-gray-800 prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-ul:my-4 prose-ol:my-4 prose-li:my-1">
        {children}
      </div>

      {/* Footer Navigation */}
      <footer className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-700">
        {(next || prev) && (
          <div className="flex justify-between py-4">
            {prev ? (
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Previous Article
                </p>
                <Link
                  href={`/blog/${prev.slug}`}
                  className="text-primary hover:text-primary/80"
                  tabIndex={0}
                  aria-label={`Previous article: ${prev.title}`}
                >
                  {prev.title}
                </Link>
              </div>
            ) : (
              <div />
            )}
            {next ? (
              <div className="text-right">
                <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  Next Article
                </p>
                <Link
                  href={`/blog/${next.slug}`}
                  className="text-primary hover:text-primary/80"
                  tabIndex={0}
                  aria-label={`Next article: ${next.title}`}
                >
                  {next.title}
                </Link>
              </div>
            ) : (
              <div />
            )}
          </div>
        )}
        <div className="pt-4">
          <Link
            href="/"
            className="text-primary hover:text-primary/80"
            tabIndex={0}
            aria-label="Back to all posts"
          >
            &larr; Back to all posts
          </Link>
        </div>
      </footer>
    </article>
  );
}
