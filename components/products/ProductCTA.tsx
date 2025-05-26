"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Phone, Mail, FileText } from "lucide-react"

interface ProductCTAProps {
  locale: string
  productName: string
}

export default function ProductCTA({ locale, productName }: ProductCTAProps) {
  const t = useTranslations("products.cta")
  const isRTL = locale === "ar"
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in {productName}?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Contact our specialists for detailed specifications, pricing, and delivery options tailored to your
            requirements.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "rtl:flex-row-reverse" : ""}`}>
            <Link
              href={`/${locale}/contact`}
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Request Quote</span>
              <ArrowIcon size={20} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Speak to Expert</span>
              <ArrowIcon size={20} />
            </Link>
            <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center justify-center space-x-2">
              <FileText size={20} />
              <span>Download Datasheet</span>
              <ArrowIcon size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
