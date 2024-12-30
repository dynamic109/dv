import Image from "next/image";
import Shield from "../../../public/images/shield-img.svg";
import Robot from "../../../public/images/robot-img.svg";
import Infinity from "../../../public/images/infinity-img.svg";
import Molecule from "../../../public/images/molecule.svg";
import GoogleDrive from "../../../public/images/google-drive-icon.svg";
import GoogleIcon from "../../../public/images/google-icon.svg";
import Aws from "../../../public/images/aws.svg";
import { ServicesAccordion } from "../accordion";
import { Button } from "../ui/button";

export function ServicesSection() {
  const accordionData = [
    {
      section: "Cloud Security",
      description:
        "Protect your data and applications with our comprehensive cloud security services, which include risk assessments, compliance management, and advanced threat protection.",
      icon: [
        {
          icon1: GoogleDrive,
        },
        { icon2: GoogleIcon },
        { icon3: Aws },
      ],
      items: [
        {
          title: "Cloud Security Strategy Development",
          content:
            "Protect your business from the evolving landscape of cyber threats with a tailored cloud security strategy. We assess your current infrastructure, identify vulnerabilities, and design a comprehensive security roadmap that fits your unique business needs. Our goal is to ensure your cloud environment is resilient, scalable, and fortified against any potential threats.",
        },
        {
          title: "Identity and Access Management (IAM)",
          content:
            "Managing who has access to your critical cloud assets is essential to maintaining a secure environment. Our Identity and Access Management (IAM) solutions provide seamless control over user access, ensuring that only authorized personnel can access sensitive information. With multi-factor authentication (MFA) and granular role-based permissions, we help safeguard your data while streamlining user access.",
        },
        {
          title: "Data Encryption and Compliance",
          content:
            "Data protection is at the heart of our cloud security services. We implement robust encryption protocols to secure your data in transit and at rest. In addition, we ensure your business meets all regulatory requirements, such as GDPR and HIPAA, ensuring compliance while keeping your data secure.",
        },
        {
          title: "Continuous Monitoring and Threat Detection",
          content:
            "Stay ahead of cyber threats with our 24/7 cloud monitoring and threat detection services. We use advanced tools and machine learning to identify, analyze, and mitigate potential risks in real-time. Our continuous monitoring solutions help detect anomalies and breaches early, minimizing damage and ensuring your cloud infrastructure remains secure at all times.",
        },
      ],
    },
    {
      section: "Automation",
      description:
        "Automate your business processes with our cutting-edge automation tools, designed to increase efficiency and reduce manual workloads.",

      items: [
        {
          title: "Business Process Automation",
          content:
            "At Digivolve, we streamline your operations by automating repetitive and time-consuming tasks, allowing your team to focus on high-value work. Our Business Process Automation solutions integrate seamlessly with your existing systems, ensuring smooth workflows, reduced errors, and increased efficiency.",
        },
        {
          title: "Workflow Automation",
          content:
            "Say goodbye to manual handoffs and communication gaps with our workflow automation services. Digivolve builds automated workflows tailored to your business needs, optimizing task assignments, approvals, and notifications. This service ensures that every project moves forward without delays, while providing you with real-time insights into the progress of tasks.",
        },
        {
          title: "Cloud Automation Services",
          content:
            "Automate your cloud infrastructure management with Digivolve’s Cloud Automation Services. From provisioning resources to scaling and monitoring performance, our cloud automation solutions help you maintain optimal performance with minimal manual intervention.",
        },
      ],
    },
    {
      section: "DevOps",
      description:
        "Enhance collaboration between your development and operations teams with our DevOps services, aimed at improving software delivery and operational efficiency.",

      items: [
        {
          title: "Infrastructure as Code (IaC)",
          content:
            "Take control of your infrastructure with our Infrastructure as Code services. We help you automate and manage your cloud infrastructure using cutting-edge tools like Terraform and AWS CloudFormation.",
        },
        {
          title: "Continuous Integration and Continuous Delivery (CI/CD)",
          content:
            "Unlock the power of automation with our CI/CD pipelines. At Digivolve, we streamline your development process, allowing for faster code deployments and seamless integration. Our CI/CD solutions minimize errors, ensure quality code, and accelerate your time to market, all while maintaining the agility your business needs to thrive in today’s fast-paced environment.",
        },
        {
          title: "Cloud Monitoring and Performance Optimization",
          content:
            "Ensure peak performance with our advanced cloud monitoring and optimization services. We provides real-time insights into your cloud infrastructure, allowing you to detect issues before they impact your users.",
        },
        {
          title: "Security and Compliance Automation",
          content:
            "Safeguard your applications with our automated security and compliance services. We integrate security into every step of your DevOps pipeline, ensuring that your software is secure from development to deployment.",
        },
      ],
    },
    {
      section: "Networking",
      description:
        "Ensure reliable and secure connectivity with our networking services, which include network design, implementation, and management.",

      items: [
        {
          title: "Cloud-Based Networking Solutions",
          content:
            "With the rise of cloud computing, traditional network infrastructure may no longer suffice. Digivolve provides cloud-based networking solutions that are scalable, cost-effective, and flexible. By integrating your network with the cloud, we enhance connectivity, reduce latency, and improve overall system performance, ensuring that your business can operate from anywhere without compromising speed or security.",
        },
        {
          title: "Software-Defined Networking (SDN)",
          content:
            "Simplify and enhance your network management with our Software-Defined Networking solutions. SDN enables greater control over your network by decoupling the control plane from the data plane, allowing centralized management of your entire infrastructure. This improves agility, reduces operational costs, and makes your network more responsive to evolving business needs.",
        },
        {
          title: "Network Optimization and Performance Tuning",
          content:
            "Maximizing the performance of your network infrastructure is essential to business efficiency. Digivolve’s network optimization services include analyzing and fine-tuning your current setup to ensure maximum bandwidth, reduced bottlenecks, and improved data flow. Whether through advanced load balancing, traffic prioritization, or bandwidth management, we ensure your network performs at peak capacity.",
        },
        {
          title: "Network Security and Protection",
          content:
            "In today’s digital landscape, securing your network is critical. Our network security services offer a multi-layered defense against cyber threats, keeping your data safe. From firewalls and VPN setups to intrusion detection systems and real-time monitoring, we provide the tools and expertise to protect your network from malicious attacks and unauthorized access.",
        },
      ],
    },
  ];

  return (
    <section className="">
      <div className="w-full mx-auto mt-7 md:mt-14">
        <div className="bg-white ">
          <div
            className="max-w-[1140px] mx-auto w-full flex flex-col md:flex-row py-4 px-5 xl:px-0 lg:px-20 items-center gap-12 justify-between my-14
"
          >
            <div className="w-full">
              <Image src={Shield} alt="Cloud security" />
            </div>
            <div className="space-y-3 max-w-[400px] lg:max-w-[600px] border-b-[3px] border-[#000080] pb-5">
              <h1 className="text-[32px] font-workSans text-[#000080] font-bold">
                {accordionData[0].section}
              </h1>
              <p className="text-[16px] font-ibmPlex  text-[#312231]">
                {accordionData[0].description}
              </p>
              {/* <div className="flex gap-2">
                {accordionData[0].icon?.map((iconObj: any, index: number) => (
                  <div key={index}>
                    {Object.values(iconObj).map((icon, i) => (
                      <Image src={icon} alt={`icon-${index}-${i}`} key={i} />
                    ))}
                  </div>
                ))}
              </div> */}
              <ServicesAccordion data={accordionData[0].items} />
              <Button
                variant={"secondary"}
                className="h-[44px] py-[12px] px-[24px]"
              >
                Request free consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[#f6f5f6] ">
          <div
            className="max-w-[1140px] mx-auto w-full flex flex-col md:flex-row py-10 px-5 xl:px-0 lg:px-20 items-center gap-12 justify-between my-14
"
          >
            <div className="space-y-3 max-w-[400px] lg:max-w-[600px] order-2 md:order-1 border-b-[3px] border-[#000080] pb-5">
              <h1 className="text-[32px] font-workSans text-[#000080] font-bold">
                {accordionData[1].section}
              </h1>
              <p className="text-[16px] font-ibmPlex  text-[#312231]">
                {accordionData[1].description}
              </p>
              <ServicesAccordion data={accordionData[1].items} />
              <Button
                variant={"secondary"}
                className="h-[44px] py-[12px] px-[24px]"
              >
                Request free consultation
              </Button>
            </div>
            <div className="w-full order-1 md:order-2">
              <Image src={Robot} alt="Automation" />
            </div>
          </div>
        </div>

        <div className="bg-white ">
          <div
            className="max-w-[1140px] mx-auto w-full flex flex-col md:flex-row py-10 px-5 xl:px-0 lg:px-20 items-center gap-12 justify-between my-14
"
          >
            <div className="w-full">
              <Image src={Infinity} alt="Devops" />
            </div>
            <div className="space-y-3 max-w-[400px] lg:max-w-[600px] border-b-[3px] border-[#000080] pb-5">
              <h1 className="text-[32px] font-workSans text-[#000080] font-bold">
                {accordionData[2].section}
              </h1>
              <p className="text-[16px] font-ibmPlex  text-[#312231]">
                {accordionData[2].description}
              </p>
              <ServicesAccordion data={accordionData[2].items} />
              <Button
                variant={"secondary"}
                className="h-[44px] py-[12px] px-[24px]"
              >
                Request free consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-[#f6f5f6] ">
          <div
            className="max-w-[1140px] w-full mx-auto flex flex-col md:flex-row py-10 px-5 xl:px-0 lg:px-20 items-center gap-12 justify-between mt-14
"
          >
            <div className="max-w-[400px] lg:max-w-[600px] space-y-3 order-2 md:order-1 border-b-[3px] border-[#000080] pb-5">
              <h1 className="text-[32px] font-workSans text-[#000080] font-bold">
                {accordionData[3].section}
              </h1>
              <p className="text-[16px] font-ibmPlex  text-[#312231]">
                {accordionData[3].description}
              </p>
              <ServicesAccordion data={accordionData[3].items} />
              <Button
                variant={"secondary"}
                className="h-[44px] py-[12px] px-[24px]"
              >
                Request free consultation
              </Button>
            </div>
            <div className=" order-1 md:order-2">
              <Image src={Molecule} alt="Networking" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
