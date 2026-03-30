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

type Plan = "free" | "pro" | "custom";

export default function PageClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<Plan>("free");

  const openModal = (plan: Plan = "free") => {
    setModalPlan(plan);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <HeroSection onOpenModal={() => openModal("free")} />
        <FeaturesSection />
        <PlatformSection />
        <SecuritySection />
        <MetricsSection />
        <PricingSection onOpenModal={openModal} />
        <CTASection onOpenModal={() => openModal("free")} />
      </main>
      <Footer />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} plan={modalPlan} />
    </>
  );
}
