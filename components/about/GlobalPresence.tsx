import { MapPin, Users, Building, Truck } from "lucide-react"

export default function GlobalPresence() {
  const regions = [
    {
      name: "Middle East & Africa",
      headquarters: "Dubai, UAE",
      countries: 15,
      description: "Strategic hub for petroleum and petrochemical trading",
    },
    {
      name: "Europe",
      headquarters: "London, UK",
      countries: 12,
      description: "Advanced chemical and polymer distribution network",
    },
    {
      name: "Asia Pacific",
      headquarters: "Singapore",
      countries: 18,
      description: "Growing markets for fertilizers and industrial chemicals",
    },
    {
      name: "Americas",
      headquarters: "Houston, USA",
      countries: 8,
      description: "Energy sector partnerships and technical expertise",
    },
  ]

  const capabilities = [
    {
      icon: Building,
      title: "Regional Offices",
      value: "4",
      description: "Strategic locations worldwide",
    },
    {
      icon: Users,
      title: "Local Partners",
      value: "150+",
      description: "Trusted representatives globally",
    },
    {
      icon: Truck,
      title: "Logistics Network",
      value: "24/7",
      description: "Continuous supply chain management",
    },
    {
      icon: MapPin,
      title: "Service Coverage",
      value: "50+",
      description: "Countries and territories",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Global Presence</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our worldwide network ensures local expertise and support in major markets, backed by global resources and
            capabilities.
          </p>
        </div>

        {/* Regional Presence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="card group hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{region.name}</h3>
                  <p className="text-accent font-medium mb-2">{region.headquarters}</p>
                  <p className="text-gray-600 mb-3">{region.description}</p>
                  <div className="text-sm text-gray-500">Serving {region.countries} countries in the region</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Capabilities */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">Global Capabilities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{capability.value}</div>
                <div className="font-semibold text-gray-800 mb-2">{capability.title}</div>
                <div className="text-sm text-gray-600">{capability.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join our global network of satisfied clients and experience the Petrovanta difference. Contact us today to
              discuss your requirements.
            </p>
            <button className="btn-secondary">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}
