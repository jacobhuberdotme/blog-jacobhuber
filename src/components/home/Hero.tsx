import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative container mx-auto text-center py-12 px-6">
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-lg opacity-20"
        />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          Welcome to My Space
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground">
          I&apos;m Jacob Huber—developer, creator, and lifelong learner. This is where I share my thoughts, projects, and interests.
        </p>
        <p className="text-lg md:text-xl text-muted-foreground mt-4">
          Explore my blog, check out my work, or connect with me to collaborate.
        </p>
      </div>
    </section>
  );
}