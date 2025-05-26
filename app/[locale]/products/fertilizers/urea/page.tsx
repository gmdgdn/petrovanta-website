import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailHero from "@/components/products/ProductDetailHero"
import ProductSpecs from "@/components/products/ProductSpecs"
import ProductApplications from "@/components/products/ProductApplications"
import ProductQuality from "@/components/products/ProductQuality"
import ProductCTA from "@/components/products/ProductCTA"

export default function UreaPage({ params: { locale } }: { params: { locale: string } }) {
  const productData = {
    name: "Urea 46%",
    description:
      "High-nitrogen fertilizer containing 46% nitrogen content. Available in both prilled and granular forms for optimal application and crop nutrition.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "46% nitrogen content for maximum efficiency",
      "Available in prilled and granular forms",
      "Excellent solubility and plant uptake",
      "Cost-effective nitrogen source",
      "Suitable for all soil types and crops",
    ],
    applications: [
      "Direct soil application for field crops",
      "Foliar feeding for quick nitrogen uptake",
      "Blending component for compound fertilizers",
      "Greenhouse and hydroponic systems",
      "Pasture and turf management",
      "Industrial applications (adhesives, plastics)",
    ],
    specifications: {
      "Nitrogen Content": "46% minimum",
      Biuret: "1.0% maximum",
      Moisture: "0.5% maximum",
      Size: "1-4mm (granular), 1-2.8mm (prilled)",
      Appearance: "White crystalline solid",
      Solubility: "1080 g/L at 20°C",
    },
  }

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductDetailHero
          locale={locale}
          product={productData}
          breadcrumbs={[
            { label: "Home", href: `/${locale}` },
            { label: "Products", href: `/${locale}/products` },
            { label: "Fertilizers", href: `/${locale}/products/fertilizers` },
            { label: "Urea 46%", href: `/${locale}/products/fertilizers/urea` },
          ]}
        />
        <ProductSpecs locale={locale} specifications={productData.specifications} />
        <ProductApplications locale={locale} applications={productData.applications} />
        <ProductQuality locale={locale} category="fertilizers" />
        <ProductCTA locale={locale} productName="Urea 46%" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
