import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroImg from "../../../public/images/hero-iss.png";
import HeroPattern from "../../../public/images/hero-pattern.svg";

export function Hero() {
  return (
    <section
      className="py-16 md:py-24 "
      style={{
        backgroundImage: "url('/images/hero-pattern.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1140px] px-6 xl:px-0 md:mx-auto  mt-14 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-workSans text-[45px] md:text-[40px] font-[900] leading-[60px]  md:leading-[50px] mb-6">
              Transform Your Business with Cutting-Edge{" "}
              <span className="text-[#000080]">Cloud Solutions</span>
            </h1>
            <p className="text-[#685D69] font-[400] mb-8 text-lg">
              Empowering businesses of all sizes with expert cloud consulting,
              architecting, security, automation, and DevOps services.
            </p>
            <Button variant="secondary" className="  px-8 py-6">
              Know More
            </Button>
          </div>
          <div className="">
            <Image
              src={HeroImg}
              alt="Cloud Solutions"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
