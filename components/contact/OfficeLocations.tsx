import { MapPin, Phone, Mail } from "lucide-react"

export default function OfficeLocations() {
  const offices = [
    {
      region: "Middle East & Africa",
      city: "Dubai, UAE",
      address: "Dubai International Financial Centre",
      phone: "+971 4 123 4567",
      email: "mea@petrovanta.com",
      description: "Regional headquarters for Middle East and Africa operations",
    },
    {
      region: "Europe",
      city: "London, UK",
      address: "Canary Wharf Financial District",
      phone: "+44 20 1234 5678",
      email: "europe@petrovanta.com",
      description: "European operations and trading desk",
    },
    {
      region: "Asia Pacific",
      city: "Singapore",
      address: "Marina Bay Financial Centre",
      phone: "+65 6123 4567",
      email: "apac@petrovanta.com",
      description: "Asia Pacific regional office and logistics hub",
    },
    {
      region: "Americas",
      city: "Houston, USA",
      address: "Energy Corridor",
      phone: "+1 713 123 4567",
      email: "americas@petrovanta.com",
      description: "Americas regional office and technical center",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Global Offices</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our strategically located offices ensure local support and expertise in major markets worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="card group hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">{office.region}</h3>
                    <span className="text-sm text-accent font-medium">{office.city}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{office.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">Can't Find Your Location?</h3>
            <p className="text-gray-600 mb-6">
              We have representatives and partners in over 50 countries worldwide. Contact our main office and we'll
              connect you with the right local contact.
            </p>
            <button className="btn-primary">Find Local Representative</button>
          </div>
        </div>
      </div>
    </section>
  )
}
