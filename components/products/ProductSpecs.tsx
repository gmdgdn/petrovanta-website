"use client"

import { useTranslations } from "next-intl"

interface ProductSpecsProps {
  locale: string
  specifications: Record<string, string>
}

export default function ProductSpecs({ locale, specifications }: ProductSpecsProps) {
  const t = useTranslations("products.specs")

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Technical Specifications</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary text-white px-6 py-4">
              <h3 className="text-xl font-semibold">Product Specifications</h3>
            </div>

            <div className="divide-y divide-gray-200">
              {Object.entries(specifications).map(([key, value], index) => (
                <div key={index} className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="font-semibold text-gray-800">{key}</div>
                  <div className="text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
