import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import { generatePageMetadata } from '@/utils/metadata';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from 'next/image';

interface Project {
  slug: string;
  title: string;
  description: string;
  image?: string;
  priority: number;
}

export async function generateMetadata() {
  const projectsDirectory = path.join(process.cwd(), 'src', 'content', 'projects');
  const filenames = fs.readdirSync(projectsDirectory);
  const latestProjectFile = filenames[0];
  const latestProjectContent = fs.readFileSync(path.join(projectsDirectory, latestProjectFile), 'utf8');
  const { data } = matter(latestProjectContent);

  return generatePageMetadata({
    title: `Jacob Huber - Projects | ${data.title}`,
    description: `Explore my latest projects: ${data.description}`,
    image: data.image,
  });
}

export default function ProjectsPage() {
  const getProjects = (): Project[] => {
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
        priority: data.priority || 99,  // Default priority for items without explicit priority
      };
    });
  
    // Sort projects by priority in ascending order
    projects.sort((a, b) => a.priority - b.priority);
  
    return projects;
  };

  const projects = getProjects();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
      <p className="text-center text-lg mb-10">
        Dive into my collection of personal and professional projects, showcasing my development journey.
      </p>

      <Separator className="mb-10" />

      <ul className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} passHref>
              <Card className="hover:shadow-lg transition-shadow h-full">
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1200}
                    height={630}
                    className="w-full h-48 object-cover rounded-t-md"
                  />
                )}
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-semibold line-clamp-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="line-clamp-3">{project.description}</p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}