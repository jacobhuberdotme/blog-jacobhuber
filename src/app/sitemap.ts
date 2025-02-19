import type { MetadataRoute } from 'next'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');
  const filenames = fs.readdirSync(postsDirectory);

  const blogPosts: MetadataRoute.Sitemap = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      url: `https://jacobhuber.me/blog/${filename.replace(/\.mdx$/, '')}`,
      lastModified: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      changeFrequency: 'weekly' as const,  // ✅ Explicitly defining as 'weekly'
      priority: 0.6
    };
  });

  return [
    { url: 'https://jacobhuber.me', lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: 'https://jacobhuber.me/about', lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: 'https://jacobhuber.me/blog', lastModified: new Date().toISOString(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: 'https://jacobhuber.me/resume', lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://jacobhuber.me/projects', lastModified: new Date().toISOString(), changeFrequency: 'monthly' as const, priority: 0.5 },
    ...blogPosts
  ];
}