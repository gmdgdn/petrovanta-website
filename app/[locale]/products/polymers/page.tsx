import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCategoryHero from "@/components/products/ProductCategoryHero"
import ProductGrid from "@/components/products/ProductGrid"
import QualityAssurance from "@/components/products/QualityAssurance"
import CategoryCTA from "@/components/products/CategoryCTA"

export default function PolymersPage({ params: { locale } }: { params: { locale: string } }) {
  const products = [
    {
      id: "polypropylene",
      name: "Polypropylene (PP)",
      description: "Versatile thermoplastic polymer for packaging, automotive, textiles, and consumer goods.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/polymers/polypropylene`,
    },
    {
      id: "polyvinyl-chloride",
      name: "Polyvinyl Chloride (PVC)",
      description: "Durable plastic polymer for construction, pipes, cables, and various industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/polymers/polyvinyl-chloride`,
    },
    {
      id: "mdpe",
      name: "Medium-Density Polyethylene (MDPE)",
      description: "Flexible polymer for gas pipes, squeeze bottles, and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/polymers/mdpe`,
    },
    {
      id: "hdpe",
      name: "High-Density Polyethylene (HDPE)",
      description: "Strong, chemical-resistant polymer for containers, pipes, and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/polymers/hdpe`,
    },
    {
      id: "lldpe",
      name: "Linear Low-Density Polyethylene (LLDPE)",
      description: "Flexible film-grade polymer for packaging, agricultural films, and flexible applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/polymers/lldpe`,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductCategoryHero
          locale={locale}
          category="polymers"
          title="Polymer Products: Versatile Materials for Countless Applications"
          description="Comprehensive selection of high-quality polymers for manufacturing, packaging, and industrial uses."
        />
        <ProductGrid locale={locale} products={products} />
        <QualityAssurance locale={locale} category="polymers" />
        <CategoryCTA locale={locale} category="polymers" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
