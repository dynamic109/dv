"use client";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/homepage/hero";
import { About } from "@/components/homepage/about";
import { Services } from "@/components/homepage/services";
import { CTA } from "@/components/homepage/cta";
import { Features } from "@/components/homepage/features";
import { Testimonial } from "@/components/homepage/testimonial";
import { Footer } from "@/components/footer";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar toggle={toggle} isNavOpen={isNavOpen} />

      <main>
        <Hero />
        <About />
        <Services />
        <Testimonial />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

