import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center h-screen bg-background text-center">
      <div className="relative z-10 w-full max-w-3xl p-8 bg-card text-card-foreground rounded-lg shadow-lg mx-auto border-2 border-foreground dark:border-background">
        <Image
          src="https://ipfs.loopring.io/ipfs/QmWXEa1jXbgTXQhG5YpBLz2iAmcF5vAXY3RwgS6U98fWwT"
          alt="Watercolor"
          width={900}
          height={400}
          className="rounded-lg"
        />

        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-40 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 shadow-md">
            Hi, I&apos;m Jacob
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 shadow-md">
            Here, I explore ideas and share what I&apos;ve learned.
          </p>
          <div className="space-x-4">
            <Link href="/blog" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-foreground hover:text-primary transition-all">
              Visit Blog
            </Link>
            <Link href="/about" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary-foreground hover:text-secondary transition-all">
              About Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}