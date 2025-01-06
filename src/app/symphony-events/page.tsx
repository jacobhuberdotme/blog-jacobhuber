import Image from "next/image";
import { Button } from "@/components/ui/button";

export async function generateMetadata() {
  return {
    title: "Saint Louis Symphony Orchestra - Events Calendar",
    description:
      "Discover and subscribe to the latest Saint Louis Symphony Orchestra events. Add performances to your calendar and stay updated.",
    openGraph: {
      title: "Saint Louis Symphony Orchestra - Events Calendar",
      description:
        "Discover and subscribe to the latest Saint Louis Symphony Orchestra events. Add performances to your calendar and stay updated.",
      images: [
        {
          url: "https://slso.org/wp-content/uploads/2023/11/SLSO-Stories_627x429.jpg",
          alt: "Saint Louis Symphony Orchestra",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Saint Louis Symphony Orchestra - Events Calendar",
      description:
        "Discover and subscribe to the latest Saint Louis Symphony Orchestra events. Add performances to your calendar and stay updated.",
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
        <h1 className="text-4xl font-bold mb-6">Saint Louis Symphony Orchestra</h1>

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
          I’ve been enjoying the Saint Louis Symphony Orchestra more recently, especially the performances paired with movies. It&apos;s a fantastic way to unwind and enjoy incredible music right here in St. Louis.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          Currently, the calendar includes events for January, but by subscribing, you&apos;ll receive updates as new events are added. Stay in the loop and never miss a performance!
        </p>

        {/* Button */}
        <a href="webcal://jacobhuber.me/saint-louis-symphony-orchestra.ics">
          <Button variant="default" size="lg">
            Add January Events to Calendar
          </Button>
        </a>

        {/* Footer Text */}
        <p className="text-lg text-muted-foreground mt-8">
          See you at the symphony!
        </p>
      </div>
    </main>
  );
}