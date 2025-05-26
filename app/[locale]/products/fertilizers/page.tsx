import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCategoryHero from "@/components/products/ProductCategoryHero"
import ProductGrid from "@/components/products/ProductGrid"
import QualityAssurance from "@/components/products/QualityAssurance"
import CategoryCTA from "@/components/products/CategoryCTA"

export default function FertilizersPage({ params: { locale } }: { params: { locale: string } }) {
  const products = [
    {
      id: "urea",
      name: "Urea 46%",
      description:
        "High-nitrogen fertilizer for crop nutrition and soil enhancement. Available in prilled and granular forms.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/fertilizers/urea`,
    },
    {
      id: "ammonium-nitrate",
      name: "Ammonium Nitrate",
      description: "Fast-acting nitrogen fertilizer for immediate plant nutrition and agricultural applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/fertilizers/ammonium-nitrate`,
    },
    {
      id: "rock-phosphate",
      name: "Rock Phosphate",
      description: "Natural phosphorus source for soil conditioning and long-term plant nutrition.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/fertilizers/rock-phosphate`,
    },
    {
      id: "npk-fertilizers",
      name: "NPK Compound Fertilizers",
      description: "Balanced nutrition fertilizers with customized N-P-K ratios for specific crop requirements.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/fertilizers/npk-fertilizers`,
    },
    {
      id: "ammonium-sulphate",
      name: "Ammonium Sulphate",
      description: "Dual-nutrient fertilizer providing nitrogen and sulfur for enhanced crop yields.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/fertilizers/ammonium-sulphate`,
    },
    {
      id: "dap",
      name: "Diammonium Phosphate (DAP)",
      description: "High-phosphorus starter fertilizer for root development and early plant growth.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/fertilizers/dap`,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductCategoryHero
          locale={locale}
          category="fertilizers"
          title="Fertilizer Products: Supporting Global Agriculture and Food Security"
          description="High-efficacy fertilizers for enhanced crop yields and sustainable agricultural practices."
        />
        <ProductGrid locale={locale} products={products} />
        <QualityAssurance locale={locale} category="fertilizers" />
        <CategoryCTA locale={locale} category="fertilizers" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
