//@ts-nocheck
import fs from 'fs';
import matter from 'gray-matter';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';
import readingTime from 'reading-time';
import { siteConfig } from '@/config/site';
import { AuthorFrontMatter } from '@/types/AuthorFrontMatter';
import { PostFrontMatter } from '@/types/PostFrontMatter';
import { Toc } from '@/types/Toc';
import getAllFilesRecursively from '@/lib/utils/files';
// Remark packages
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkCodeTitles from './remark-code-title';
import remarkTocHeadings from './remark-toc-headings';
// Rehype packages
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

const prettyCodeOptions = {
  theme: {
    light: 'github-light',
    dark: 'github-dark',
  },
  keepBackground: false,
  defaultLang: 'plaintext',
};

const root = process.cwd();

export function getFiles(type: 'blog' | 'authors' | 'courses') {
  const prefixPaths = path.join(root, 'data', type);
  const files = getAllFilesRecursively(prefixPaths);
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map(file =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/'),
  );
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

// Returns the offset of `timeZone` relative to UTC in minutes (positive = east of UTC)
// at the moment represented by `date`. Uses Intl so DST shifts are handled correctly.
function getTimezoneOffsetMinutes(timeZone: string, date: Date): number {
  const utc = new Date(date.toLocaleString('en-US', { timeZone: 'UTC' }));
  const local = new Date(date.toLocaleString('en-US', { timeZone }));
  return (local.getTime() - utc.getTime()) / 60000;
}

// Parses a frontmatter `date` string. A bare 'YYYY-MM-DD' is interpreted as
// midnight in `siteConfig.publishTimezone`. A full ISO string (with a 'T' and
// explicit time/zone) is passed through to the native Date parser.
export function parsePublishDate(dateStr: string): Date {
  if (/T\d/.test(dateStr)) return new Date(dateStr);
  const [y, m, d] = dateStr.split('-').map(Number);
  const asUtc = new Date(Date.UTC(y, m - 1, d));
  const offsetMin = getTimezoneOffsetMinutes(siteConfig.publishTimezone, asUtc);
  return new Date(asUtc.getTime() - offsetMin * 60_000);
}

export async function getFileBySlug<T>(
  type: 'authors' | 'blog' | 'courses',
  slug: string | string[],
) {
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`);
  const mdPath = path.join(root, 'data', type, `${slug}.md`);
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8');

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      'node_modules',
      'esbuild',
      'esbuild.exe',
    );
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      root,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild',
    );
  }

  const toc: Toc = [];

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        remarkMath,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypePrettyCode, prettyCodeOptions],
      ];
      return options;
    },
    esbuildOptions: options => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      };
      return options;
    },
  });

  return {
    mdxSource: code,
    toc,
    frontMatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? parsePublishDate(frontmatter.date).toISOString() : null,
    },
  };
}

export async function getAllFilesFrontMatter(
  folder: 'blog' | 'courses',
  options: { includeScheduled?: boolean } = {},
) {
  const { includeScheduled = false } = options;
  const prefixPaths = path.join(root, 'data', folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter: PostFrontMatter[] = [];
  const now = Date.now();

  files.forEach((file: string) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/');
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return;
    }
    const source = fs.readFileSync(file, 'utf8');
    const matterFile = matter(source);
    const frontmatter = matterFile.data as AuthorFrontMatter | PostFrontMatter;

    // Skip drafts
    if (!('draft' in frontmatter) || frontmatter.draft === true) return;

    // Skip scheduled posts whose publish date is in the future.
    // Callers can opt in to including them (e.g. generateStaticParams needs
    // the slug pre-built so on-demand revalidation can render it later).
    if (
      !includeScheduled &&
      frontmatter.date &&
      parsePublishDate(frontmatter.date).getTime() > now
    ) {
      return;
    }

    allFrontMatter.push({
      ...frontmatter,
      slug: formatSlug(fileName),
      date: frontmatter.date
        ? parsePublishDate(frontmatter.date).toISOString()
        : null,
      readingTime: readingTime(matterFile.content),
    });
  });

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
