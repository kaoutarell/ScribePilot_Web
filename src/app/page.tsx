import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformSection from "@/components/PlatformSection";
import SecuritySection from "@/components/SecuritySection";
import MetricsSection from "@/components/MetricsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlatformSection />
        <SecuritySection />
        <MetricsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
