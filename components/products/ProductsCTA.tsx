"use client"

import { ArrowRight, FileText, MessageCircle, Calculator } from "lucide-react"

export default function ProductsCTA() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Source Premium Products?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Partner with Petrovanta for reliable supply, competitive pricing, and exceptional service across our
            complete range of petroleum, petrochemical, chemical, polymer, and fertilizer products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Request Quote</h3>
            <p className="text-blue-100">Get competitive pricing for your specific requirements</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Compare Products</h3>
            <p className="text-blue-100">Use our comparison tool to find the perfect solution</p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Expert Consultation</h3>
            <p className="text-blue-100">Speak with our technical specialists for guidance</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          <a
            href="/products/compare"
            className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Compare Products
            <Calculator className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white bg-opacity-10 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              Need Technical Specifications or Safety Data Sheets?
            </h3>
            <p className="text-blue-100 mb-4">
              Access detailed product documentation, certifications, and technical support materials.
            </p>
            <a href="/contact" className="text-white underline hover:text-blue-200 transition-colors">
              Contact our technical team →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
