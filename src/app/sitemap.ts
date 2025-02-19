import type { MetadataRoute } from 'next'
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const blogPosts = await fetch('https://jacobhuber.me/api/blog').then(res => res.json());
  
    return [
      { url: 'https://jacobhuber.me', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
      { url: 'https://jacobhuber.me/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
      { url: 'https://jacobhuber.me/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
      { url: 'https://jacobhuber.me/resume', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
      { url: 'https://jacobhuber.me/projects', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
      ...blogPosts.map((post: { slug: string, updatedAt: string }) => ({
        url: `https://jacobhuber.me/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'weekly',
        priority: 0.6
      }))
    ];
  }