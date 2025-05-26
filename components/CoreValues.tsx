import { Shield, Heart, Zap, Globe } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and international standards compliance",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Dedicated to exceeding customer expectations and building lasting partnerships",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing new technologies and sustainable solutions",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide network ensuring reliable supply chain management",
    },
  ]

  return (
    <section className="section-padding bg-[#071D49] text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The principles that guide our business and drive our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#C0A062] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-blue-100">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
