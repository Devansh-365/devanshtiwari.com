import { escape } from '@/lib/utils/html-escaper';
import { siteConfig } from '@/config/site';
import { PostFrontMatter } from '@/types/PostFrontMatter';

const generateRssItem = (post: PostFrontMatter) => `
  <item>
    <guid>${siteConfig.siteUrl}/blog/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteConfig.siteUrl}/blog/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteConfig.email} (${siteConfig.author})</author>
    ${post.tags && post.tags.map((t: string) => `<category>${t}</category>`).join('')}
  </item>
`;

const generateRss = (posts: PostFrontMatter[], page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteConfig.title)}</title>
      <link>${siteConfig.siteUrl}/blog</link>
      <description>${escape(siteConfig.description)}</description>
      <language>${siteConfig.language}</language>
      <managingEditor>${siteConfig.email} (${
  siteConfig.author
})</managingEditor>
      <webMaster>${siteConfig.email} (${siteConfig.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${
        siteConfig.siteUrl
      }/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;
export default generateRss;
