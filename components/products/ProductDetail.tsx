"use client"

import { useTranslations } from "next-intl"
import ProductImage from "@/components/ui/ProductImage"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Settings, Target, Award, Globe, Truck } from "lucide-react"
import type { Product } from "@/lib/products"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const t = useTranslations("products")

  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <ProductImage
              product={product}
              priority={true}
              showGallery={true}
              className="w-full"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quick Contact */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t("getQuote")}</h3>
                <p className="text-gray-600 mb-4">
                  Contact our team for pricing, availability, and technical specifications.
                </p>
                <div className="flex gap-3">
                  <button className="btn-primary flex-1">
                    {t("requestQuote")}
                  </button>
                  <button className="btn-outline">
                    {t("contactSales")}
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Specifications */}
          {product.specifications && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-600">{key}</span>
                      <span className="text-sm font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Features */}
          {product.features && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-primary" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Applications */}
          {product.applications && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Availability */}
          {product.availability && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600 block mb-1">Regions</span>
                    <div className="flex flex-wrap gap-1">
                      {product.availability.regions.map((region, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {region}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {product.availability.minOrder && (
                    <div>
                      <span className="text-sm font-medium text-gray-600">Min Order: </span>
                      <span className="text-sm font-semibold">{product.availability.minOrder}</span>
                    </div>
                  )}
                  {product.availability.packaging && (
                    <div>
                      <span className="text-sm font-medium text-gray-600 block mb-1">Packaging</span>
                      <div className="flex flex-wrap gap-1">
                        {product.availability.packaging.map((pkg, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {pkg}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quality Standards */}
        {product.qualityStandards && (
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 mb-8">
            <CardContent className="p-8">
              <div className="text-center max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
                  <Award className="h-6 w-6" />
                  Quality Standards & Certifications
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our {product.name} meets and exceeds international quality standards, ensuring 
                  reliability and consistency for your operations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {product.qualityStandards.map((standard, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <CardContent className="p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Source {product.name}?
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                Contact our expert team for competitive pricing, technical specifications, 
                and reliable delivery solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Request Quote
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
