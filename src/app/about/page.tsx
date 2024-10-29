// src/app/about/page.tsx
import { generatePageMetadata } from "@/utils/metadata";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Jacob Huber - About Me",
    description: "Get to know Jacob Huber, his background, interests, and passions.",
    image: "./me.jpeg",
  });
}
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-10">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <Avatar className="mx-auto mb-4 w-32 h-32">
          <AvatarImage src="/profile-pic.jpg" alt="Jacob Huber" />
          <AvatarFallback>JH</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-lg text-muted-foreground">A brief introduction to Jacob Huber</p>
      </div>

      <Separator className="mb-8" />

      {/* Bio Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Biography</CardTitle>
          <CardDescription>Get to know my journey and interests</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Hi, I&apos;m Jacob Huber, a software engineer with a passion for solving complex problems and building impactful
            digital solutions. With a background in C#, REST APIs, and web technologies, I&apos;ve developed a strong
            foundation in both back-end and front-end development.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            In addition to my technical career, I enjoy spending time outdoors, exploring new places, and engaging with
            communities around technology and open-source projects.
          </p>
        </CardContent>
      </Card>

      {/* Details Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Personal Details</CardTitle>
          <CardDescription>A bit more about me</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li>
              <strong>Location:</strong> St. Louis, Missouri
            </li>
            <li>
              <strong>Current Role:</strong> Software Engineer at symplr
            </li>
            <li>
              <strong>Hobbies:</strong> Hiking, visiting wineries, working on side projects
            </li>
            <li>
              <strong>Interests:</strong> Blockchain, AI, real estate, and personal development
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
}