"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface Breadcrumb {
  label: string
  href: string
}

interface ProductData {
  name: string
  description: string
  image: string
  features: string[]
}

interface ProductDetailHeroProps {
  locale: string
  product: ProductData
  breadcrumbs: Breadcrumb[]
}

export default function ProductDetailHero({ locale, product, breadcrumbs }: ProductDetailHeroProps) {
  const t = useTranslations("products.detail")
  const isRTL = locale === "ar"
  const ChevronIcon = isRTL ? ChevronLeft : ChevronRight

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <ChevronIcon size={16} className="mx-2" />}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary font-medium">{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{product.name}</h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("keyFeatures")}:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
