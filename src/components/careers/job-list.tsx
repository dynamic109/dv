import { JobCard } from "./job-card";

interface JobCategory {
  title: string;
  jobs: {
    title: string;
    location: string;
    type: string;
    href: string;
  }[];
}

const jobCategories: JobCategory[] = [
  {
    title: "Engineering",
    jobs: [
      {
        title: "Cloud Security Engineer",
        location: "Türkiye (Remote)",
        type: "Full-Time",
        href: "/careers/cloud-security-engineer",
      },
      {
        title: "Cloud Architect",
        location: "Remote",
        type: "Full time",
        href: "/careers/cloud-architect",
      },
      {
        title: "DevOps Engineer",
        location: "Remote",
        type: "Full time",
        href: "/careers/devops-engineer",
      },
    ],
  },
  {
    title: "Design",
    jobs: [
      {
        title: "Product Designer",
        location: "Remote",
        type: "Contract",
        href: "/careers/product-designer",
      },
    ],
  },
  {
    title: "Operations",
    jobs: [
      {
        title: "Operations Manager",
        location: "Remote",
        type: "Full time",
        href: "/careers/operations-manager",
      },
    ],
  },
  {
    title: "Management",
    jobs: [],
  },
];

export function JobList() {
  return (
    <div className="space-y-12">
      {jobCategories.map((category) => (
        <div key={category.title} className="space-y-0">
          <h2 className="text-[20px] text-[#050405] font-workSans font-bold">
            {category.title}
          </h2>
          {category.jobs.length > 0 ? (
            <div className="">
              {category.jobs.map((job) => (
                <JobCard key={job.title} {...job} />
              ))}
            </div>
          ) : (
            <div className="max-w-[120px] p-[10px] bg-[#DDDDDD] text-[14px] font-serif text-[#333333]">
              No items found.
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
