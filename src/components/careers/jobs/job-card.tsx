import Link from "next/link"

interface JobCardProps {
  title: string
  location: string
  type: string
  href: string
}

export function JobCard({ title, location, type, href }: JobCardProps) {
  return (
    <Link 
      href={href}
      className="block p-4 -mx-4 hover:bg-gray-50 rounded-lg transition-colors"
    >
      <div className="space-y-2">
        <h3 className="text-[#2E3192] font-medium hover:underline">
          {title}
        </h3>
        <div className="space-y-1 text-gray-600">
          <p>{location}</p>
          <p>{type}</p>
        </div>
      </div>
    </Link>
  )
}

