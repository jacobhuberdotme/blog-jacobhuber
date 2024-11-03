// src/app/about/page.tsx

import { generatePageMetadata } from "@/utils/metadata";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Jacob Huber - About Me",
    description: "Get to know Jacob Huber, his journey, interests, and values.",
    image: "./me.jpeg",
  });
}

export default function AboutPage() {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <Image
          src="/me.jpeg"
          alt="Jacob Huber"
          width={128}
          height={128}
          className="mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-6">Jacob Huber</h1>
        <p className="text-lg text-muted-foreground mt-2">Enthusiast in Life, Technology, and Adventure</p>
      </div>

      <Separator className="mb-8" />

      {/* My Journey Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>My Journey</CardTitle>
          <CardDescription>The path that led me to tech and beyond</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            My path to technology was sparked by early curiosity—exploring video games on Nintendo, dabbling with the family computer, and discovering the creativity tech could bring. This passion eventually inspired a career change, transitioning from managing restaurant operations to building digital solutions.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            After moving from the food industry into tech as a Technical Solutions Analyst, I continued to evolve my skills, focusing on areas like AI, blockchain, and web development. Now, as a Software Engineer, I work at the intersection of problem-solving and innovation, bringing ideas to life in code.
          </p>
        </CardContent>
      </Card>

      {/* Beyond the Screen Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Beyond the Screen</CardTitle>
          <CardDescription>Life outside tech, travel, and adventure</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            Outside of work, I find balance by spending time outdoors and sharing new experiences with my wife. Whether we’re enjoying the beach, hiking through the mountains, or tackling DIY projects at home, I appreciate moments that inspire growth and connection. 
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I also enjoy real estate, managing rental properties, and cultivating comfortable spaces for tenants. And while tech and business pursuits keep me busy, I always make time for hobbies—catching a game, exploring local wineries, or just relaxing with our cats.
          </p>
        </CardContent>
      </Card>

      <div className="text-center mt-12">
        <p className="text-lg">Interested in connecting? Feel free to reach out!</p>
      </div>
    </section>
  );
}