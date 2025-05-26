"use client"

import { CheckCircle, Globe, Shield, Users, Award, Clock } from "lucide-react"

const reasons = [
  {
    icon: Globe,
    title: "Global Network",
    description: "Extensive international presence with strategic partnerships across major markets worldwide.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensuring all products meet international standards and specifications.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced professionals with deep industry knowledge and technical expertise in petroleum trading.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "Years of successful operations with a reputation for reliability and excellence in the industry.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Efficient logistics and supply chain management ensuring on-time delivery to global destinations.",
  },
  {
    icon: CheckCircle,
    title: "Competitive Pricing",
    description: "Market-competitive rates with transparent pricing and flexible payment terms for our clients.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Petrovanta?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine industry expertise, global reach, and unwavering commitment to quality to deliver exceptional
            value to our clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Ready to Partner with Us?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Petrovanta for their petroleum, petrochemical, and chemical
              trading needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
