// src/utils/metadata.tsx
import React from 'react';
import { Metadata } from 'next';

interface MetadataProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

// Function to generate metadata
export function generatePageMetadata({
  title = "Jacob Huber",
  description = "Welcome to Jacob Huber's personal website. Explore my experience, projects, and blog posts.",
  image = '/default-image.jpg',
  url,
}: MetadataProps): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url, // Canonical URL
      images: [{ url: image, alt: title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

// Props type for JsonLdSchema
interface JsonLdSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

// JsonLdSchema React component
export function JsonLdSchema({ title, description, url, image }: JsonLdSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    image,
    datePublished: new Date().toISOString(),
    author: {
      "@type": "Person",
      name: "Jacob Huber", // Replace with dynamic author if available
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}