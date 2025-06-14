
import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CallToActionSection from "@/components/CallToActionSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden bg-background font-sans antialiased">
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <PricingSection />
      <CallToActionSection />
    </main>
  );
};

export default Index;
