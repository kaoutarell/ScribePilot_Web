"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PlatformSection from "@/components/PlatformSection";
import SecuritySection from "@/components/SecuritySection";
import MetricsSection from "@/components/MetricsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";

export default function PageClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection onOpenModal={openModal} />
        <FeaturesSection />
        <PlatformSection />
        <SecuritySection />
        <MetricsSection />
        <PricingSection onOpenModal={openModal} />
        <CTASection onOpenModal={openModal} />
      </main>
      <Footer />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
