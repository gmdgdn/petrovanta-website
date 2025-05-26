"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Phone, Mail } from "lucide-react"

interface CategoryCTAProps {
  locale: string
  category: string
}

export default function CategoryCTA({ locale, category }: CategoryCTAProps) {
  const t = useTranslations("products.cta")
  const isRTL = locale === "ar"
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Source High-Quality Products?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Contact our expert team to discuss your specific requirements and discover how Petrovanta can support your
            business needs.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? "rtl:flex-row-reverse" : ""}`}>
            <Link
              href={`/${locale}/contact`}
              className="btn-secondary inline-flex items-center justify-center space-x-2"
            >
              <Mail size={20} />
              <span>Get Quote</span>
              <ArrowIcon size={20} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span>Contact Sales</span>
              <ArrowIcon size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
