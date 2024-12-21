import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface JobHeaderProps {
  activeTab: "overview" | "application";
  onTabChange: (tab: "overview" | "application") => void;
}

export function JobHeader({ activeTab, onTabChange }: JobHeaderProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Link
          href="/careers"
          className="flex items-center text-[16px] text-[#312231] font-ibmPlex font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back
        </Link>
      </div>

      <div className="w-fit lg:ml-[100px] border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => onTabChange("overview")}
            className={cn(
              "py-4 px-5 -mb-px text-[16px] font-ibmPlex font-medium",
              activeTab === "overview"
                ? "w-[150px] border-b-2 border-[#2E3192] text-[#2E3192]"
                : "text-[#312231]"
            )}
          >
            Overview
          </button>
          <button
            onClick={() => onTabChange("application")}
            className={cn(
              "py-4 px-1 -mb-px text-[16px] font-ibmPlex font-medium",
              activeTab === "application"
                ? "w-[150px]  border-b-2 border-[#2E3192] text-[#2E3192]"
                : "text-[#312231]"
            )}
          >
            Application
          </button>
        </nav>
      </div>
    </div>
  );
}
