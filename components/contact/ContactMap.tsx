"use client"

import { MapPin, Phone, Mail, Clock } from "lucide-react"

const offices = [
  {
    city: "Dubai, UAE",
    address: "Business Bay, Dubai, United Arab Emirates",
    phone: "+971 4 XXX XXXX",
    email: "dubai@petrovanta.com",
    hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    coordinates: { lat: 25.1972, lng: 55.2744 },
  },
  {
    city: "Singapore",
    address: "Marina Bay Financial Centre, Singapore",
    phone: "+65 XXXX XXXX",
    email: "singapore@petrovanta.com",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM",
    coordinates: { lat: 1.2966, lng: 103.8764 },
  },
  {
    city: "Houston, USA",
    address: "Energy Corridor, Houston, Texas, USA",
    phone: "+1 XXX XXX XXXX",
    email: "houston@petrovanta.com",
    hours: "Monday - Friday: 8:00 AM - 5:00 PM",
    coordinates: { lat: 29.7372, lng: -95.626 },
  },
]

export default function ContactMap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            With strategic locations across major trading hubs, we're positioned to serve clients worldwide with local
            expertise and global reach.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-12">
          <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Interactive Map</p>
              <p className="text-gray-400 text-sm">Global office locations</p>
            </div>
          </div>
        </div>

        {/* Office Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                {office.city}
              </h3>

              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{office.address}</p>
                </div>

                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                  <a href={`tel:${office.phone}`} className="text-blue-600 hover:text-blue-800 text-sm">
                    {office.phone}
                  </a>
                </div>

                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-blue-600 hover:text-blue-800 text-sm">
                    {office.email}
                  </a>
                </div>

                <div className="flex items-start">
                  <Clock className="h-4 w-4 text-gray-400 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 text-sm">{office.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Need to Reach a Specific Office?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Contact our regional teams directly for localized support and expertise in your specific market and time
              zone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@petrovanta.com"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Email Us
              </a>
              <a
                href="/contact"
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
