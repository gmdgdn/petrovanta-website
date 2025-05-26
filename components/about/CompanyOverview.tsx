import { Building, Handshake, Shield, Target } from "lucide-react"

export default function CompanyOverview() {
  const highlights = [
    {
      icon: Building,
      title: "Established Excellence",
      description: "Founded with a vision to bridge global commodity markets through reliable trading partnerships.",
    },
    {
      icon: Handshake,
      title: "Trusted Partnerships",
      description: "Long-term relationships with suppliers and customers built on mutual trust and transparency.",
    },
    {
      icon: Shield,
      title: "Quality Commitment",
      description: "Rigorous quality control processes ensuring every product meets international standards.",
    },
    {
      icon: Target,
      title: "Market Focus",
      description: "Strategic focus on high-demand commodities with consistent supply and quality.",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Petrovanta was established with a clear mission: to become the most trusted international trading partner
              for petroleum, petrochemical, chemical, polymer, and fertilizer products. Our journey began with a simple
              belief that global commerce thrives on reliability, quality, and genuine partnerships.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Today, we serve clients across more than 50 countries, facilitating trade worth millions of dollars
              annually. Our success is built on three pillars: uncompromising quality standards, transparent business
              practices, and customer-centric service delivery.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$500M+</div>
                <div className="text-sm text-gray-600">Annual Trade Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99.8%</div>
                <div className="text-sm text-gray-600">On-Time Delivery</div>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/placeholder.svg?height=500&width=600"
              alt="Petrovanta company overview"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {highlights.map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
