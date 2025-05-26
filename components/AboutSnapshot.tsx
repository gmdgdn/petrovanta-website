import { Globe, Users, Award, TrendingUp } from "lucide-react"

export default function AboutSnapshot() {
  const stats = [
    { icon: Globe, label: "Global Presence", value: "50+ Countries" },
    { icon: Users, label: "Expert Team", value: "200+ Professionals" },
    { icon: Award, label: "Years Experience", value: "15+ Years" },
    { icon: TrendingUp, label: "Annual Volume", value: "1M+ Tons" },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071D49] mb-4">About Petrovanta</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading international trading company specializing in petroleum, petrochemicals, chemicals, polymers, and
            fertilizers with a commitment to excellence and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#071D49] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#071D49] mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
