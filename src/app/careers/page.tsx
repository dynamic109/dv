"use client";
import { Navbar } from "@/components/navbar";
import { JobFilters } from "@/components/careers/job-filters";
import { JobList } from "@/components/careers/job-list";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function CareersPage() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggle={toggle} isNavOpen={isNavOpen} />
      <main className="flex-grow py-16">
        <div className="max-w-[1140px] mx-auto px-6 xl:px-0 mt-[50px]">
          <div className="space-y-8">
            <div className="space-y-4 text-left md:text-center">
              <div className="max-w-[150px] md:mx-auto bg-[#E5E0EF] border border-[#000080] px-[20px] py-[6px] rounded-full text-[12px] font-ibmPlex">
                Available openings
              </div>
              <h1 className="text-[40px] text-[#333333] font-workSans font-bold">
                Jobs at Digivolve
              </h1>
            </div>

            <JobFilters
              onFilterChange={(type, value) => {
                console.log(type, value);
              }}
            />

            <JobList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
