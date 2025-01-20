import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  priority: number;
}

// Helper to get the most recent blog post
function getLatestPost(): Post | null {
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

  // Sort posts by date in descending order (most recent first)
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts[0] || null;
}

// Helper to get the project with the highest priority
function getTopPriorityProject(): Project | null {
  const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');
  const filenames = fs.readdirSync(projectsDirectory);

  const projects = filenames.map((filename) => {
    const filePath = path.join(projectsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.mdx$/, ''),
      title: data.title,
      description: data.description,
      image: data.image || '/default-image.jpg',
      priority: data.priority || 99, // Default to a low priority if none is set
    };
  });

  // Sort projects by priority in ascending order (highest priority first)
  projects.sort((a, b) => a.priority - b.priority);

  return projects[0] || null;
}

export default function FeaturedContentSection() {
  const latestPost = getLatestPost();
  const topPriorityProject = getTopPriorityProject();

  return (
    <section className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Featured Content</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Featured Blog Post */}
        {latestPost && (
          <Card>
            <Link href={`/blog/${latestPost.slug}`} passHref>
              {latestPost.image && (
                <Image
                  src={latestPost.image}
                  alt={latestPost.title}
                  width={1200}
                  height={630}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              )}
              <CardHeader>
                <CardTitle>{latestPost.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{latestPost.description}</p>
              </CardContent>
            </Link>
          </Card>
        )}

        {/* Featured Project */}
        {topPriorityProject && (
          <Card>
            <Link href={`/projects/${topPriorityProject.slug}`} passHref>
              {topPriorityProject.image && (
                <Image
                  src={topPriorityProject.image}
                  alt={topPriorityProject.title}
                  width={1200}
                  height={630}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              )}
              <CardHeader>
                <CardTitle>{topPriorityProject.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{topPriorityProject.description}</p>
              </CardContent>
            </Link>
          </Card>
        )}
      </div>
    </section>
  );
}