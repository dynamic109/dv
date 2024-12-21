import { Button } from "@/components/ui/button";
import Image from "next/image";
import CloudLayers from "../../../public/images/cloud-layers.svg";

export function About() {
  return (
    <section className="py-16 max-w-[1140px] mx-auto bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="">
            <Image
              src={CloudLayers}
              alt="Cloud Architecture"
              className="w-auto h-auto"
            />
          </div>
          <div className=" flex flex-col ">
            <div className="border-b-[3px] w-full border-[#000080] mb-3">
              <div className=" font-ibmPlex inline-block bg-[#e5e0ef] text-[#000080] px-[20px] py-[6px] rounded-full text-sm mb-4 border border-[#000080]">
                Chat to our team now
              </div>
              <h2 className="text-[#000080] text-3xl font-[700] mb-6 font-workSans">
                At Digivolve
              </h2>
              <p className="text-gray-600 mb-8 font-ibmPlex">
                We specialize in providing top-notch IT solutions and consulting
                services focused on cloud technologies. Our team of experts is
                dedicated to helping small businesses and large enterprises
                harness the power of the cloud to drive growth and innovation.
              </p>
            </div>
            <div className="mt-5">
              {" "}
              <Button variant="secondary" className="h-[44px]">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
