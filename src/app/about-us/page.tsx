"use client";
import { Navbar } from "@/components/navbar";
import { AboutHero } from "@/components/about/about-hero";
import { MissionVision } from "@/components/about/mission-vision";
import { Services } from "@/components/about/services";
import { Features } from "@/components/about/features";
import { CTA } from "@/components/about/cta";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function AboutPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar toggle={toggle} isNavOpen={isNavOpen} />
      <main className=" mx-auto">
        <AboutHero />
        <MissionVision />
        <Services />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
