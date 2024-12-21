"use client";
import { Navbar } from "@/components/navbar";
import { ContactForm } from "@/components/support/contact-form";
import { ContactInfo } from "@/components/support/contact-info";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function SupportPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggle={toggle} isNavOpen={isNavOpen} />
      <main className=" flex flex-col md:flex-row justify-center items-center py-16 mt-20">
        <div className="max-w-[1140px]  mx-auto px-6 xl:px-0">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <ContactInfo />
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
