import Image from "next/image";
import { Button } from "@/components/ui/button";

export async function generateMetadata() {
  return {
    title: "Saint Louis Symphony Orchestra - Events Calendar (Unofficial)",
    description:
      "Check out the Saint Louis Symphony Orchestra's events with my unofficial calendar. Subscribe and stay updated on upcoming performances.",
    openGraph: {
      title: "Saint Louis Symphony Orchestra - Events Calendar (Unofficial)",
      description:
        "Check out the Saint Louis Symphony Orchestra's events with my unofficial calendar. Subscribe and stay updated on upcoming performances.",
      images: [
        {
          url: "https://slso.org/wp-content/uploads/2023/11/SLSO-Stories_627x429.jpg",
          alt: "Saint Louis Symphony Orchestra",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Saint Louis Symphony Orchestra - Events Calendar (Unofficial)",
      description:
        "Check out the Saint Louis Symphony Orchestra's events with my unofficial calendar. Subscribe and stay updated on upcoming performances.",
      images: [
        {
          url: "https://slso.org/wp-content/uploads/2023/11/SLSO-Stories_627x429.jpg",
          alt: "Saint Louis Symphony Orchestra",
        },
      ],
    },
  };
}

export default function SymphonyEventPage() {
  return (
    <main className="container mx-auto py-12 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6">
          Saint Louis Symphony Orchestra <br />
          - Events Calendar -
        </h1>
        {/* Image */}
        <div className="flex justify-center mb-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://slso.org/wp-content/uploads/2023/11/SLSO-Stories_627x429.jpg"
              alt="Saint Louis Symphony Orchestra"
              width={627}
              height={429}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-muted-foreground mb-8">
          Hi, I&apos;m Jacob Huber. I&apos;ve been enjoying the Saint Louis Symphony Orchestra recently, especially the performances paired with movies. This calendar is my personal project to help you (and me!) stay updated on their incredible lineup of events.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          I&apos;ve included the events scheduled for 2025. To see the list of official events or to buy tickets, visit{" "}
          <a
            href="https://shop.slso.org/events?view=list"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600"
          >
            SLSO Events Page
          </a>.
        </p>

        {/* Button */}
        <a href="webcal://jacobhuber.me/saint-louis-symphony-orchestra.ics">
          <Button variant="default" size="lg">
            Subscribe to the Calendar
          </Button>
        </a>

        {/* Footer Text */}
        <p className="text-lg text-muted-foreground mt-8">
          I hope to see you at the symphony!
        </p>
      </div>
    </main>
  );
}