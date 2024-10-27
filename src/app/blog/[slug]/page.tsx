import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import matter from 'gray-matter';
import { generatePageMetadata } from '@/utils/metadata';
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import { serialize } from 'next-mdx-remote/serialize';
import MdxContentRenderer from '@/components/mdx-content-renderer'; // Import the client-side renderer

interface PageProps {
  params: { slug: string };
}

// Function to get MDX content and metadata from frontmatter
async function getMdxContentAndMetadata(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent); // Parse the content and metadata

    // Serialize the MDX content for client-side rendering
    const mdxSource = await serialize(content);

    return { content: mdxSource, metadata: data };
  } catch {
    return null;
  }
}

// Generate dynamic metadata using helper
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const mdxContent = await getMdxContentAndMetadata(params.slug);
  
  if (!mdxContent) {
    return generatePageMetadata({
      title: 'Not Found',
      description: 'This page could not be found.',
    });
  }

  const { metadata } = mdxContent;
  const title = metadata.title || 'Jacob Huber';
  const description = metadata.description || 'Jacob Huber\'s personal website';
  const image = metadata.image || '/default-image.jpg';

  return generatePageMetadata({
    title,
    description,
    image,
  });
}

// Page component for dynamic MDX pages
export default async function Page({ params }: PageProps) {
  const mdxContent = await getMdxContentAndMetadata(params.slug);

  if (!mdxContent) {
    notFound();
  }

  const { title, date, image } = mdxContent.metadata;
  const content = mdxContent.content; // Access serialized MDX content here

  return (
    <article className="container mx-auto p-4">
      {image && (
        <Image
          src={image}
          alt={title || 'Post Image'}
          width={1200}
          height={630}
          className="w-full h-72 object-cover rounded-md mb-6"
        />
      )}
      <h1 className="text-4xl font-bold mb-2">{title || 'Untitled'}</h1>
      {date && <p className="text-gray-500 mb-6">{date}</p>}
      <Separator className="mb-6" />
      <MdxContentRenderer source={content} />
    </article>
  );
}