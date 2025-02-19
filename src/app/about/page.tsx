import { generatePageMetadata } from "@/utils/metadata";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CallToAction from "@/components/home/HighlightSection";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "About Jacob Huber | Developer & API Consultant",
    description: "Learn about Jacob Huber, his journey in software engineering, blockchain, and AI, and his passion for creativity and innovation.",
    image: "/me.jpeg",
  });
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jacob Huber",
    "url": "https://jacobhuber.me/about",
    "image": "https://jacobhuber.me/me.jpeg",
    "jobTitle": "Software Engineer, API Consultant",
    "description": "Software engineer with expertise in blockchain, API development, and AI.",
    "sameAs": [
      "https://github.com/jacobhuber",
      "https://twitter.com/jacobhuber"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Symplr"
    },
    "knowsAbout": [
      "Software Engineering",
      "Blockchain",
      "Artificial Intelligence",
      "API Development",
      "Web Development"
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Self-Taught & Continuous Learning"
    }
  };

  return (
    <section>
      {/* JSON-LD structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="text-center mb-10">
        <Image
          src="/me.jpeg"
          alt="Jacob Huber"
          width={128}
          height={128}
          className="mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-6">About Jacob Huber: Developer & API Consultant</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Building innovative solutions in software engineering, blockchain, and AI.
        </p>
      </div>

      <Separator className="mb-8" />

      {/* My Journey Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>My Journey in Tech & Software Development</CardTitle>
          <CardDescription>From managing teams to managing code</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            My journey into the tech world began with an innate curiosity—exploring video games on my Nintendo and experimenting with our family computer. These early experiences ignited a passion for technology that eventually led to a career transformation. Transitioning from the food industry, where I managed restaurant operations as a General Manager, I pivoted into the world of technology.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Starting as a Technical Solutions Analyst, I honed my skills in troubleshooting, client support, and software integration. This foundation paved the way to my current role as a Software Engineer, where I design and implement efficient solutions for data management and API integration.
          </p>
        </CardContent>
      </Card>

      {/* Beyond the Screen Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Beyond the Screen: Hobbies & Interests</CardTitle>
          <CardDescription>Balancing technology, gaming, and life</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            When I&apos;m not coding, I love learning—whether it&apos;s diving into philosophy, blockchain, or the latest advancements in AI. I stay active with workouts, enjoy experimenting in the kitchen, and appreciate a great glass of wine with friends.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            As a long-time gamer, I&apos;ve been enjoying the challenge of <strong>World of Warcraft Classic Hardcore</strong>. I&apos;m also an avid hockey fan, always up for an exciting game.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            My wife and I are cat lovers, and we find joy in quiet moments—whether it√s watching a favorite movie or simply relaxing together. Life is about balance, and I strive to make the most of every experience.
          </p>
        </CardContent>
      </Card>

      <CallToAction/>
    </section>
  );
}