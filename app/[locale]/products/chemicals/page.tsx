import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCategoryHero from "@/components/products/ProductCategoryHero"
import ProductGrid from "@/components/products/ProductGrid"
import QualityAssurance from "@/components/products/QualityAssurance"
import CategoryCTA from "@/components/products/CategoryCTA"

export default function ChemicalsPage({ params: { locale } }: { params: { locale: string } }) {
  const products = [
    {
      id: "sulfuric-acid",
      name: "Sulfuric Acid",
      description: "High-purity sulfuric acid for industrial processes, battery manufacturing, and chemical synthesis.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/chemicals/sulfuric-acid`,
    },
    {
      id: "hydrochloric-acid",
      name: "Hydrochloric Acid",
      description: "Industrial-grade hydrochloric acid for metal processing, pH control, and chemical manufacturing.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/chemicals/hydrochloric-acid`,
    },
    {
      id: "calcium-chloride",
      name: "Calcium Chloride",
      description: "Multi-purpose calcium chloride for de-icing, dust control, and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/chemicals/calcium-chloride`,
    },
    {
      id: "phosphoric-acid",
      name: "Phosphoric Acid",
      description: "Food-grade and industrial phosphoric acid for fertilizers, food processing, and metal treatment.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/chemicals/phosphoric-acid`,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductCategoryHero
          locale={locale}
          category="chemicals"
          title="Chemical Products: Foundational Materials for Manufacturing & Processing"
          description="Wide array of industrial and specialty chemicals for diverse manufacturing and processing needs."
        />
        <ProductGrid locale={locale} products={products} />
        <QualityAssurance locale={locale} category="chemicals" />
        <CategoryCTA locale={locale} category="chemicals" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
