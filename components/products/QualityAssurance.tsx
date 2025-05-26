"use client"

import { useTranslations } from "next-intl"
import { Shield, Award, Globe, Users } from "lucide-react"

interface QualityAssuranceProps {
  locale: string
  category: string
}

export default function QualityAssurance({ locale, category }: QualityAssuranceProps) {
  const t = useTranslations("products.quality")

  const qualityFeatures = [
    {
      icon: Shield,
      title: "International Standards",
      description: "All products meet or exceed international quality standards and specifications.",
    },
    {
      icon: Award,
      title: "Certified Suppliers",
      description: "Sourced from ISO-certified refineries and manufacturing facilities worldwide.",
    },
    {
      icon: Globe,
      title: "Global Logistics",
      description: "Reliable supply chain management ensuring timely delivery anywhere in the world.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Technical support and consultation from our experienced team of specialists.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Quality Assurance & Support</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Petrovanta's commitment to excellence ensures every product meets the highest standards of quality and
            reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
