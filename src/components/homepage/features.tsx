import Image from "next/image";
import AWS from "../../../public/images/aws.svg";
import ServicesIcon from "../../../public/images/services.svg";
import ClientIcon from "../../../public/images/client.svg";
import PlusIcon from "../../../public/images/plus-icon.svg";

const features = [
  {
    title: "Expertise in Azure and AWS",
    description:
      "Our certified professionals have extensive experience with both Azure and AWS platforms.",
    icon: AWS,
  },
  {
    title: "Comprehensive Services",
    description:
      "From cloud architecting to security and automation, we offer a full suite of services to meet your needs.",
    icon: ServicesIcon,
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize understanding your unique requirements and delivering solutions that align with your business goals.",
    icon: ClientIcon,
  },
];

export function Features() {
  return (
    <section className="py-16 max-w-[1140px] mx-auto bg-[#fafafa]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col bg-[#FAFAFA] border border-[#000080] px-[24px] py-[40px] gap-4 rounded-md shadow-[#0003] shadow-lg"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="text-[16px] text-[#312231] font-bold font-ibmPlex">
                {feature.title}
              </h3>
              <p className="text-[16px] text-[#312231] font-ibmPlex">
                {feature.description}
              </p>
              <div className="flex text-[14px] items-center text-[#000080] gap-2 font-semibold font-workSans">
                <p>Make Enquiry</p> <Image src={PlusIcon} alt="plus icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
