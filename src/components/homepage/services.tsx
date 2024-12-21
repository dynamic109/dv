import Image from "next/image";
import CloudArchitecture from "../../../public/images/cloud-architect.svg";
import CloudSecurity from "../../../public/images/cloud-security.svg";
import Automation from "../../../public/images/automation.svg";
import Devops from "../../../public/images/devops.svg";
import Networking from "../../../public/images/networking.svg";
import { Button } from "../ui/button";

const services = [
  {
    title: "Cloud Architecting",
    icon: CloudArchitecture,
    color: "bg-blue-100",
  },
  {
    title: "Cloud Security",
    icon: CloudSecurity,
    color: "bg-red-100",
  },
  {
    title: "Automation",
    icon: Automation,
    color: "bg-cyan-100",
  },
  {
    title: "DevOps",
    icon: Devops,
    color: "bg-indigo-100",
  },
  {
    title: "Networking",
    icon: Networking,
    color: "bg-orange-100",
  },
];

export function Services() {
  return (
    <section className="py-16 max-w-[1140px] mx-auto">
      <div className="container mx-auto text-center space-y-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-full md:w-auto h-[179px] flex flex-col items-center justify-center text-center border border-[#E5E0EF]"
            >
              <div className={`${service.color} p-4 rounded-lg mb-4`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="font-semibold font-workSans">{service.title}</h3>
            </div>
          ))}
        </div>
        <Button
          variant={"secondary"}
          className="text-[14px] font-workSans py-[12px] px-[24px] h-[44px]"
        >
          Talk to an Expert
        </Button>
      </div>
    </section>
  );
}
