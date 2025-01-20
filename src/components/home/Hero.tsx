import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="rounded-lg relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-6 py-16 text-center">
        <Card className="bg-background/80 backdrop-blur-md shadow-lg mx-auto max-w-3xl">
          <CardHeader>
            <CardTitle className="text-4xl md:text-5xl font-extrabold text-primary">
              Welcome to My Space
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg md:text-xl text-muted-foreground">
              I&apos;m Jacob Huber — developer, creator, and lifelong learner. This is where I share my thoughts, projects, and interests.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mt-4">
              Explore my blog, check out my work, or connect with me to collaborate.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}