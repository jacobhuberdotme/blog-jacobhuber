// src/utils/metadata.ts
import { Metadata } from 'next';

export function generatePageMetadata({
  title,
  description,
  image = '/default-image.jpg',
}: {
  title: string;
  description: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}