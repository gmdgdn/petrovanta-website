"use client"

import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import ProductImage from "@/components/ui/ProductImage"
import type { Product } from "@/lib/products"

interface ProductGridProps {
  locale: string
  products: Product[]
}

export default function ProductGrid({ locale, products }: ProductGridProps) {
  const t = useTranslations("products")
  const isRTL = locale === "ar"
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t("ourRange")}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group hover:scale-105 transition-transform">
              <div className="mb-6">
                <div className="w-full h-48 overflow-hidden rounded-lg">
                  <ProductImage
                    product={product}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              <Link
                href={product.href}
                className="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors"
              >
                <span>{t("viewDetails")}</span>
                <ArrowIcon size={16} className={`${isRTL ? "mr-2" : "ml-2"}`} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
