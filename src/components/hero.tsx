import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen bg-background text-center">
      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 bg-card text-card-foreground rounded-lg shadow-lg border-2 border-foreground dark:border-background">
        {/* Image Container */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src="https://ipfs.loopring.io/ipfs/QmWXEa1jXbgTXQhG5YpBLz2iAmcF5vAXY3RwgS6U98fWwT"
            alt="Watercolor"
            width={900}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-50 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Hi, I&apos;m Jacob
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-md">
            Welcome to my corner of the web. Let&apos;s explore and create.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/blog"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-all shadow-md"
            >
              Visit Blog
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-foreground hover:text-secondary transition-all shadow-md"
            >
              My Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}