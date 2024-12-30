import Image from "next/image";
import PlaceholderImg from "../../../public/images/placeholder-img.svg";

export function MissionVision() {
  return (
    <section className="py-4">
      <div className="max-w-[1140px] mx-auto px-6 xl:px-0">
        {/* Mission Section */}
        <div className="grid md:grid-cols-2 items-center justify-center gap-12 mb-24">
          <div className="space-y-3 border-b-[3px] border-[#000080] pb-3">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Our Mission
            </h2>
            <p className="text-[#312231] font-[16px] font-ibmPlex leading-relaxed">
              Our mission is to empower organizations to fully leverage the
              transformative power of cloud technologies. As a trusted partner
              in AWS, GCP, and Microsoft Azure, with a dedicated team of
              experts, we provide tailored solutions in cloud architecture,
              cloud networking, cloud migration, cloud security, automation, and
              DevOps, ensuring that your transition to the cloud is seamless and
              effective.
            </p>
          </div>
          <div className="">
            <Image
              src={PlaceholderImg}
              alt="Our Mission"
              width={400}
              height={400}
              className="rounded-full w-full max-w-md mx-auto"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 items-center justify-center gap-12 mb-24">
          <div className="relative  order-1">
            <Image
              src={PlaceholderImg}
              alt="Our Vision"
              width={400}
              height={400}
              className="rounded-full w-full max-w-md mx-auto"
            />
          </div>
          <div className="space-y-3 order-2 border-b-[3px] border-[#000080] pb-3">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Our Vision
            </h2>
            <p className="text-[#312231] font-[16px] font-ibmPlex leading-relaxed">
              We envision a future where businesses can operate at their highest
              potential, utilizing cloud technologies to enhance their agility,
              scalability, and security. Our goal is to simplify the
              complexities of cloud adoption, allowing you to focus on what
              matters most—growing your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
