import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog, faBriefcase, faFileAlt } from "@fortawesome/free-solid-svg-icons";

export default function HighlightSection() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Blog Card */}
      <Card>
        <CardHeader className="flex justify-center">
          <FontAwesomeIcon
            icon={faBlog}
            className="text-primary"
            style={{ fontSize: "1.75rem", width: "2.5rem", height: "2.5rem" }} // Explicit dimensions
          />
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
        <CardHeader className="flex justify-center">
          <FontAwesomeIcon
            icon={faBriefcase}
            className="text-primary"
            style={{ fontSize: "1.75rem", width: "2.5rem", height: "2.5rem" }}
          />
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Discover the tools and solutions I&apos;ve built.
          </p>
          <Link href="/projects" className="text-primary font-semibold hover:underline">
            See Projects &rarr;
          </Link>
        </CardContent>
      </Card>

      {/* Resume Card */}
      <Card>
        <CardHeader className="flex justify-center">
          <FontAwesomeIcon
            icon={faFileAlt}
            className="text-primary"
            style={{ fontSize: "1.75rem", width: "2.5rem", height: "2.5rem" }}
          />
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