"use client"

import { useTranslations } from "next-intl"
import { CheckCircle } from "lucide-react"

interface ProductApplicationsProps {
  locale: string
  applications: string[]
}

export default function ProductApplications({ locale, applications }: ProductApplicationsProps) {
  const t = useTranslations("products.applications")

  return (
    <section className="section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Applications & Uses</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((application, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-700 leading-relaxed">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
