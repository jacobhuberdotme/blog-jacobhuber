import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',  // Allow all bots
      allow: '/',      // Allow crawling everything
    },
    sitemap: 'https://jacobhuber.me/sitemap.xml',
  }
}