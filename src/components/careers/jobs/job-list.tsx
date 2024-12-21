import { JobCard } from "./job-card"

interface JobCategory {
  title: string
  jobs: {
    title: string
    location: string
    type: string
    href: string
  }[]
}

const jobCategories: JobCategory[] = [
  {
    title: "Engineering",
    jobs: [
      {
        title: "Cloud Security Engineer",
        location: "Türkiye (Remote)",
        type: "Full-Time",
        href: "/careers/cloud-security-engineer"
      },
      {
        title: "Cloud Architect",
        location: "Remote",
        type: "Full time",
        href: "/careers/cloud-architect"
      },
      {
        title: "DevOps Engineer",
        location: "Remote",
        type: "Full time",
        href: "/careers/devops-engineer"
      }
    ]
  },
  {
    title: "Design",
    jobs: [
      {
        title: "Product Designer",
        location: "Remote",
        type: "Contract",
        href: "/careers/product-designer"
      }
    ]
  },
  {
    title: "Operations",
    jobs: [
      {
        title: "Operations Manager",
        location: "Remote",
        type: "Full time",
        href: "/careers/operations-manager"
      }
    ]
  },
  {
    title: "Management",
    jobs: []
  }
]

export function JobList() {
  return (
    <div className="space-y-12">
      {jobCategories.map((category) => (
        <div key={category.title} className="space-y-4">
          <h2 className="text-xl font-bold">{category.title}</h2>
          {category.jobs.length > 0 ? (
            <div className="space-y-2">
              {category.jobs.map((job) => (
                <JobCard key={job.title} {...job} />
              ))}
            </div>
          ) : (
            <div className="p-4 bg-gray-100 rounded-lg text-gray-600">
              No items found.
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

