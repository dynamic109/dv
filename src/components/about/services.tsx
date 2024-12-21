import Image from "next/image";
import ShieldImg from "../../../public/images/shield-img.svg";
import RobotImg from "../../../public/images/robot-img.svg";
import CloudLayers from "../../../public/images/cloud-layers.svg";
import Molecule from "../../../public/images/molecule.svg";
import Infinity from "../../../public/images/infinity-img.svg";

export function Services() {
  return (
    <section className="py-16">
      <div className="max-w-[1140px] mx-auto px-6 xl:px-0">
        {/* Cloud Security */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-2 order-2 md:order-1 border-b-[3px] border-[#000080] pb-4">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Cloud Security
            </h2>
            <p className="text-[16px] font-ibmPlex mb-6">
              Security is our top priority. We provide comprehensive cloud
              security services, including risk assessment, compliance audits,
              and ongoing monitoring, to protect your sensitive information and
              maintain your business integrity.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={ShieldImg}
              alt="Cloud Security"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>

        {/* Automation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-1 flex justify-center">
            <Image
              src={RobotImg}
              alt="Automation"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
          <div className="order-2 space-y-2 border-b-[3px] border-[#000080] pb-4">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Automation
            </h2>
            <p className="text-[16px] font-ibmPlex mb-6">
              We help you automate repetitive tasks and streamline processes,
              enhancing productivity and reducing operational costs. Our
              automation solutions enable you to focus on strategic initiatives
              rather than mundane tasks.
            </p>
          </div>
        </div>

        {/* Cloud Networking */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-2 border-b-[3px] border-[#000080] pb-4 order-2 md:order-1">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Cloud Networking
            </h2>
            <p className="text-[16px] font-ibmPlex mb-6">
              We design and implement robust cloud networking solutions that
              ensure your applications and data are connected securely and
              efficiently. Our expertise helps you create a network architecture
              that meets your unique business needs.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={Molecule}
              alt="Cloud Security"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>
        {/* Cloud Migration */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div className="order-1 flex justify-center">
            <Image
              src={CloudLayers}
              alt="Automation"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
          <div className="order-2 space-y-2 border-b-[3px] border-[#000080] pb-4">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Cloud Migration
            </h2>
            <p className="text-[16px] font-ibmPlex mb-6">
              We guide your organization through every step of migrating from
              your on premises to the cloud with minimal disruption and maximum
              efficiency
            </p>
          </div>
        </div>

        {/* DevOps */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-2 border-b-[3px] border-[#000080] pb-4 order-2 md:order-1">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              DevOps
            </h2>
            <p className="text-[16px] font-ibmPlex mb-6">
              Our DevOps services foster collaboration between development and
              operations teams, enabling faster delivery of high-quality
              software. We implement best practices that enhance efficiency and
              improve the overall performance of your applications.
            </p>
          </div>
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={Infinity}
              alt="Cloud Security"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
        </div>
        {/* Cloud Architecting */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-24">
          <div className="order-1 flex justify-center">
            <Image
              src={CloudLayers}
              alt="Automation"
              width={300}
              height={300}
              className="w-full max-w-sm"
            />
          </div>
          <div className="order-2 space-y-2 border-b-[3px] border-[#000080] pb-4">
            <h2 className="text-[32px] font-workSans font-bold text-[#000080]">
              Cloud Architecting
            </h2>
            <p className="text-[16px] font-ibmPlex mb-6">
              Our expert cloud architects work with you to design and implement
              scalable, resilient, and cost-effective cloud solutions. We assess
              your goals and requirements to create a customized architecture
              that meets your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
