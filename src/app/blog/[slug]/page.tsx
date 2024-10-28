import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import matter from 'gray-matter';
import { generatePageMetadata } from '@/utils/metadata';
import { serialize } from 'next-mdx-remote/serialize';
import MdxContentRenderer from '@/components/mdx-content-renderer';
import BlogPostLayout from '@/components/blog-post-layout';

interface PageProps {
  params: { slug: string };
}

// Function to get MDX content and metadata from frontmatter
async function getMdxContentAndMetadata(slug: string) {
  try {
    const filePath = path.join(process.cwd(), 'src', 'content', 'blog', `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);

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

  const { title, date, image, description } = mdxContent.metadata;
  const content = mdxContent.content;

  return (
    <BlogPostLayout
      title={title || 'Untitled'}
      date={date}
      image={image}
      description={description}
    >
      <MdxContentRenderer source={content} />
    </BlogPostLayout>
  );
}