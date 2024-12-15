import Hero from "@/components/home/Hero";
import HighlightSection from "@/components/home/HighlightSection";
import FeaturedContentSection from "@/components/home/FeaturedContentSection";
import CallToAction from "@/components/home/CallToAction";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Separator className="my-8" />
      <HighlightSection />
      <Separator className="my-8" />
      <FeaturedContentSection />
      <Separator className="my-8" />
      <CallToAction />
    </div>
  );
}