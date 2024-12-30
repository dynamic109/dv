import { Users, Target, Settings, Headphones } from "lucide-react";
import Image from "next/image";
import FeaturePlaceholder from "../../../public/images/feature-placeholder.svg";

export function Features() {
  const features = [
    {
      icon: FeaturePlaceholder,
      title: "Expertise",
      description:
        "Our team consists of certified cloud professionals with extensive experience in AWS, GCP, and Azure. We stay updated with the latest technologies to provide you with cutting-edge solutions.",
    },
    {
      icon: FeaturePlaceholder,
      title: "Customer-Centric Approach",
      description:
        "We believe in building lasting partnerships with our clients. Our approach is rooted in understanding your specific needs and delivering solutions that align with your business objectives.",
    },
    {
      icon: FeaturePlaceholder,
      title: "Tailored Solutions",
      description:
        "No business is alike, and neither are our solutions. Our customized solutions are designed to fit your specific requirements and maximize your investment in cloud technologies.",
    },
    {
      icon: FeaturePlaceholder,
      title: "Continuous Support",
      description:
        "Our relationship doesn't end after implementation. With 24/7 ongoing support and maintenance to ensure your cloud infrastructure runs smoothly, we evolve with your business.",
    },
  ];

  return (
    <section className="py-4 bg-gray-50">
      <div className="max-w-[1140px] mx-auto px-6 xl:px-0">
        <div className="grid lg:grid-cols-4 gap-x-9">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#fafafa] w-fit text-center mx-auto p-6 rounded-lg shadow-md shadow-[#e4ffeecc]"
            >
              <div className="text-[#2E3192] mb-4 flex justify-center items-center">
                <Image src={FeaturePlaceholder} alt={feature.title} />
              </div>
              <h3 className="text-[20px] font-workSans font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-[16px] font-ibmPlex">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
