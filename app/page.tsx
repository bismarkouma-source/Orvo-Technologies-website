import UtilityBar from "@/components/layout/UtilityBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingChat from "@/components/layout/FloatingChat";

import Hero from "@/components/sections/Hero";
import FeaturedPillars from "@/components/sections/FeaturedPillars";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SoftwareShowcase from "@/components/sections/SoftwareShowcase";
import WhyOrvo from "@/components/sections/WhyOrvo";
import VisionMission from "@/components/sections/VisionMission";
import QuoteSection from "@/components/sections/QuoteSection";

export default function HomePage() {
  return (
    <>
      {/* Fixed top bar with contact info and portal links */}
      <UtilityBar />

      {/* Sticky navigation with logo and mega-menu */}
      <Navbar />

      <main>
        {/* 1. Hero — headline, CTA, trust badges */}
        <Hero />

        {/* 2. Featured Pillars — AI, SaaS, Branding */}
        <FeaturedPillars />

        {/* 3. Full services grid */}
        <ServicesGrid />

        {/* 4. Software product showcase */}
        <SoftwareShowcase />

        {/* 5. Why choose Orvo */}
        <WhyOrvo />

        {/* 6. Vision & Mission */}
        <VisionMission />

        {/* 7. Request a Quote + Newsletter */}
        <QuoteSection />
      </main>

      {/* Footer with links, socials, and contact */}
      <Footer />

      {/* Floating WhatsApp chat button */}
      <FloatingChat />
    </>
  );
}
