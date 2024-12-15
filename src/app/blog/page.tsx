import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { generatePageMetadata } from '@/utils/metadata';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export async function generateMetadata() {
  const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');
  const filenames = fs.readdirSync(postsDirectory);
  const latestPostFile = filenames[0];
  const latestPostContent = fs.readFileSync(path.join(postsDirectory, latestPostFile), 'utf8');
  const { data } = matter(latestPostContent);

  return generatePageMetadata({
    title: `Jacob Huber - Blog | ${data.title}`,
    description: `Read the latest blog post: ${data.description}`,
    image: data.image,
  });
}

export default function BlogPage() {
  const getPosts = (): Post[] => {
    const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
        image: data.image || '/default-image.jpg',
      };
    });

    // Sort posts by date in descending order
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
  };

  const posts = getPosts();

  return (
    <section>
      <h1 className="text-4xl font-bold text-center mb-6">Blog</h1>
      <p className="text-center text-lg mb-10">Welcome to my blog page where I share insights and articles.</p>

      <Separator className="mb-10" />

      <ul className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} passHref>
              <Card className="hover:shadow-lg transition-shadow h-full">
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                )}
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-semibold line-clamp-2">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="line-clamp-3">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}