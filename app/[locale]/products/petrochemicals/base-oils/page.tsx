import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailHero from "@/components/products/ProductDetailHero"
import ProductSpecs from "@/components/products/ProductSpecs"
import ProductApplications from "@/components/products/ProductApplications"
import ProductQuality from "@/components/products/ProductQuality"
import ProductCTA from "@/components/products/ProductCTA"

export default async function BaseOilsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const productData = {
    name: "Base Oils",
    description:
      "High-quality base oils serving as the foundation for advanced lubricant formulations. Available in Group I, II, and III grades to meet diverse performance requirements.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Multiple API Group classifications (I, II, III)",
      "Consistent quality from certified refineries",
      "Optimized viscosity index for performance",
      "Low sulfur content for environmental compliance",
      "Flexible packaging and delivery options",
    ],
    applications: [
      "Automotive engine oils and transmission fluids",
      "Industrial lubricants and hydraulic fluids",
      "Marine and aviation lubricants",
      "Metalworking fluids and cutting oils",
      "Specialty lubricant formulations",
    ],
    specifications: {
      "API Groups": "Group I, II, III available",
      "Viscosity Index": "80-120+ depending on grade",
      "Sulfur Content": "<0.03% to <300ppm",
      Saturates: "65-99% depending on group",
      "Pour Point": "-15°C to -9°C",
      "Flash Point": "200°C+ minimum",
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
            { label: "Petrochemicals", href: `/${locale}/products/petrochemicals` },
            { label: "Base Oils", href: `/${locale}/products/petrochemicals/base-oils` },
          ]}
        />
        <ProductSpecs locale={locale} specifications={productData.specifications} />
        <ProductApplications locale={locale} applications={productData.applications} />
        <ProductQuality locale={locale} category="petrochemicals" />
        <ProductCTA locale={locale} productName="Base Oils" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
