"use client";
import { Navbar } from "@/components/navbar";
import { ServicesHero } from "@/components/what-we-do/services-hero";
import { ServicesSection } from "@/components/what-we-do/services-section";
import { CTA } from "@/components/homepage/cta";
import { Footer } from "@/components/footer";
import react from "react";

export default function ServicesPage() {
  const [isNavOpen, setIsNavOpen] = react.useState(false);

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen">
      <Navbar toggle={toggle} isNavOpen={isNavOpen} />
      <main>
        <ServicesHero />
        <ServicesSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
