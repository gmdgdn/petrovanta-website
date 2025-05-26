import { Shield, Award, CheckCircle, Globe } from "lucide-react"

export default function QualityStatement() {
  const qualityFeatures = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and certification processes ensure product excellence.",
    },
    {
      icon: Award,
      title: "International Standards",
      description: "Compliance with ISO, ASTM, and other global quality standards.",
    },
    {
      icon: CheckCircle,
      title: "Verified Suppliers",
      description: "Partnerships with certified and reputable global suppliers.",
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description: "Reliable supply chain management and timely delivery worldwide.",
    },
  ]

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality You Can Trust</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our commitment to quality excellence ensures that every product meets the highest international standards
            and exceeds customer expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Our Quality Promise</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Every product in our portfolio undergoes comprehensive quality control processes. From sourcing to
              delivery, we maintain strict adherence to international standards, ensuring that our clients receive only
              the finest quality materials for their operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
