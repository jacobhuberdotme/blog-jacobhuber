import Hero from "@/components/home/Hero";
import HighlightSection from "@/components/home/HighlightSection";
import FeaturedContentSection from "@/components/home/FeaturedContentSection";
import CallToAction from "@/components/home/CallToAction";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="space-y-12"> 
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