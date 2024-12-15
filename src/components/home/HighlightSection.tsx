import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function HighlightSection() {
  return (
    <section className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Blog Card */}
      <Card>
        <CardHeader>
          <CardTitle>Read My Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Explore my thoughts on tech, philosophy, and more.
          </p>
          <Link href="/blog" className="text-primary font-semibold hover:underline">
            Visit Blog &rarr;
          </Link>
        </CardContent>
      </Card>

      {/* Projects Card */}
      <Card>
        <CardHeader>
          <CardTitle>View My Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Discover the tools and solutions I’ve built.
          </p>
          <Link href="/projects" className="text-primary font-semibold hover:underline">
            See Projects &rarr;
          </Link>
        </CardContent>
      </Card>

      {/* Resume Card */}
      <Card>
        <CardHeader>
          <CardTitle>Check My Resume</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Learn about my professional journey and skills.
          </p>
          <Link href="/resume" className="text-primary font-semibold hover:underline">
            View Resume &rarr;
          </Link>
        </CardContent>
      </Card>
    </section>
  );
}