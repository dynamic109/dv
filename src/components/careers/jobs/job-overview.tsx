import Facebook from "../../../../public/images/facebook-blue.svg";
import Instagram from "../../../../public/images/instagram-blue.svg";
import Twitter from "../../../../public/images/twitter-blue.svg";
import Linkedin from "../../../../public/images/linkedin-blue.svg";
import { JobDetails } from "../../types/job";
import Image from "next/image";

interface JobOverviewProps {
  job: JobDetails;
}

export function JobOverview({ job }: JobOverviewProps) {
  return (
    <div className="  grid md:grid-cols-3 gap-12">
      <div className="space-y-6 lg:ml-[100px]">
        <div className="space-y-4">
          <div className="inline-block bg-[#E5E0EF] text-[#050405] px-[20px] py-[6px] rounded-full text-[12px] font-ibmPlex border border-[#000080]">
            Jobs in Digivolve
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">Type</h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.type}
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">
              Location
            </h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.location}
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">
              Department
            </h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.department}
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">
              Compensation
            </h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.compensation}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[16px] text-[#312231] font-ibmPlex">
            Share this opening with friends
          </p>
          <div className="flex pl-4 space-x-7">
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Linkedin} alt="linkedin icon" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Instagram} alt="instagram icon" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Facebook} alt="facebook icon" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Twitter} alt="twitter icon" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 space-y-8">
        <div>
          <h1 className="text-[24px] text-[#333333] font-workSans font-bold mb-6">
            The opportunity as {job.title}
          </h1>
          <p className="text-[16px] font-ibmPlex text-[#312231]">
            {job.description}
          </p>
        </div>

        <div className="space-y-4 text-[16px] font-ibmPlex text-[#312231]">
          <h2 className="">Key Responsibilities</h2>
          <ul className="space-y-2">
            <p>{job.responsibilities}</p>
          </ul>
        </div>

        <div className="space-y-4 text-[16px] font-ibmPlex text-[#312231]">
          <h2 className="">Required Qualifications</h2>
          <ul className="space-y-2">
            <p>{job.qualifications.required}</p>
          </ul>
        </div>

        <div className="space-y-4 text-[16px] font-ibmPlex text-[#312231]">
          <h2 className="">Skills</h2>
          <ul className="space-y-2">
            <p>{job.qualifications.skills}</p>
          </ul>
        </div>

        <div className="space-y-4 text-[16px] font-ibmPlex text-[#312231]">
          <h2 className="">Education</h2>
          <p>{job.qualifications.education}</p>
        </div>

        <div className="space-y-4 text-[16px] font-ibmPlex text-[#312231]">
          <p>{job.benefits}</p>
          <p>{job.projects}</p>
        </div>
      </div>
    </div>
  );
}
