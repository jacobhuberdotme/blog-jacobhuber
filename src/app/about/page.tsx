// src/app/about/page.tsx

import { generatePageMetadata } from "@/utils/metadata";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import CallToAction from "@/components/home/HighlightSection";

export async function generateMetadata() {
  return generatePageMetadata({
    title: "Jacob Huber - About Me",
    description: "Get to know Jacob Huber, his journey, interests, and values.",
    image: "./me.jpeg",
  });
}

export default function AboutPage() {
  return (
    <section>
      <div className="text-center mb-10">
        <Image
          src="/me.jpeg"
          alt="Jacob Huber"
          width={128}
          height={128}
          className="mx-auto rounded-full"
        />
        <h1 className="text-4xl font-bold mt-6">Jacob Huber</h1>
        <p className="text-lg text-muted-foreground mt-2">Exploring Technology, Creativity, and Lifelong Growth</p>
      </div>

      <Separator className="mb-8" />

      {/* My Journey Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>My Journey</CardTitle>
          <CardDescription>From managing teams to managing code</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
          My journey into the tech world began with an innate curiosity—exploring video games on my Nintendo and experimenting with our family computer. These early experiences ignited a passion for technology that eventually led to a career transformation. Transitioning from the food industry, where I managed restaurant operations as a General Manager, I pivoted into the world of technology.
          </p>
          <p className="text-lg leading-relaxed mt-4">
          Starting as a Technical Solutions Analyst, I honed my skills in troubleshooting, client support, and software integration. This foundation paved the way to my current role as a Software Engineer, where I design and implement efficient solutions for data management and API integration.          </p>
          <p className="text-lg leading-relaxed mt-4">
          My professional interests include blockchain, AI, and web development—areas where creativity meets problem-solving. Whether it&apos;s building custom applications, simplifying workflows, or consulting on API best practices, I thrive at the intersection of innovation and functionality. Each project is an opportunity to learn, grow, and contribute to meaningful solutions.          </p>
        </CardContent>
      </Card>

      {/* Beyond the Screen Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Beyond the Screen</CardTitle>
          <CardDescription>Life, adventure, and the pursuit of balance</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
          When I&apos;m away from work, I&apos;m constantly learning and exploring new ideas. Whether diving into philosophical books, reading blockchain documentation, or researching new technologies, I&apos;m driven by a curiosity for how things work and how they can be improved. I also enjoy staying active through workouts, experimenting in the kitchen, and catching up with friends.          </p>
          <p className="text-lg leading-relaxed mt-4">
          Recently, I&apos;ve rediscovered my love for gaming, especially World of Warcraft Classic and the intense challenge of Hardcore mode. I&apos;m also a sports enthusiast, with a particular passion for hockey—nothing beats the excitement of a great game.          </p>
          <p className="text-lg leading-relaxed mt-4">
          I&apos;ve recently reignited my love for video games, diving into World of Warcraft Classic, including the intense challenge of Hardcore mode. I&apos;m a sports fan who especially enjoys watching hockey, and I like staying active through workouts, cooking meals, and spending time with friends. I&apos;m also a lifelong learner, diving into philosophical books, blockchain technology, and anything else that sparks curiosity.
          </p>
          <p className="text-lg leading-relaxed mt-4">
          We&apos;re also cat lovers who appreciate the quiet moments—whether it&apos;s sharing a great glass of wine, watching a favorite movie, or simply spending time together. Life is about balance, and I&apos;m grateful for the harmony between work, learning, and the meaningful moments we create every day.          </p>
        </CardContent>
      </Card>

      <CallToAction/>
    </section>
  );
}