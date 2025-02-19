import Hero from "@/components/home/Hero";
import HighlightSection from "@/components/home/HighlightSection";
import FeaturedContentSection from "@/components/home/FeaturedContentSection";
import CallToAction from "@/components/home/CallToAction";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jacob Huber",
    "url": "https://jacobhuber.me",
    "image": "https://jacobhuber.me/me.jpeg",
    "jobTitle": "Software Engineer & API Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Symplr"
    },
    "sameAs": [
      "https://twitter.com/your-handle",
      "https://www.linkedin.com/in/your-profile",
      "https://github.com/your-github"
    ],
    "description": "Jacob Huber is a software engineer and API specialist focused on Next.js, web development, and blockchain."
  };

  return (
    <div className="space-y-12">
      {/* Add JSON-LD to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Page content */}
      <Hero />
      <Separator />
      <HighlightSection />
      <Separator />
      <FeaturedContentSection />
      <Separator />
      <CallToAction />
    </div>
  );
}