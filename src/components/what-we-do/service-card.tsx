import { ReactNode } from "react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: ReactNode
  alignment?: "left" | "right"
}

export function ServiceCard({
  title,
  description,
  features,
  icon,
  alignment = "left"
}: ServiceCardProps) {
  return (
    <div className="py-16 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${
          alignment === "right" ? "md:rtl" : ""
        }`}>
          <div className={`space-y-6 ${alignment === "right" ? "md:ltr" : ""}`}>
            <h2 className="text-2xl font-bold text-[#2E3192]">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#2E3192] rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`flex justify-center ${alignment === "right" ? "md:ltr" : ""}`}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-6 h-6 text-red-400">⚡</div>
              <div className="absolute -bottom-8 -right-8 w-6 h-6 text-cyan-400">⚡</div>
              {/* Main icon */}
              <div className="w-64 h-64 flex items-center justify-center text-[#2E3192]">
                {icon}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

