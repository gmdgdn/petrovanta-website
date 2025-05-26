"use client"

import { useTranslations } from "next-intl"
import { Shield, Award, Truck, Users } from "lucide-react"

interface ProductQualityProps {
  locale: string
  category: string
}

export default function ProductQuality({ locale, category }: ProductQualityProps) {
  const t = useTranslations("products.quality")

  const qualityPoints = [
    {
      icon: Shield,
      title: "Quality Guarantee",
      description:
        "Every product is backed by our comprehensive quality assurance program and international certifications.",
    },
    {
      icon: Award,
      title: "Industry Standards",
      description: "Compliance with ASTM, ISO, API, and other relevant international standards for product quality.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      description: "Secure packaging and logistics ensuring product integrity from source to destination.",
    },
    {
      icon: Users,
      title: "Technical Support",
      description: "Expert technical assistance and consultation for optimal product selection and application.",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Quality Commitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Petrovanta ensures every product meets the highest standards through rigorous quality control and expert
            oversight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityPoints.map((point, index) => {
            const IconComponent = point.icon
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
