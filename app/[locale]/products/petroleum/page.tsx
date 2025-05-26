import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCategoryHero from "@/components/products/ProductCategoryHero"
import ProductGrid from "@/components/products/ProductGrid"
import QualityAssurance from "@/components/products/QualityAssurance"
import CategoryCTA from "@/components/products/CategoryCTA"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("petroleum.title"),
    description: t("petroleum.description"),
  }
}

export default function PetroleumPage({ params: { locale } }: { params: { locale: string } }) {
  const products = [
    {
      id: "crude-oil",
      name: "Crude Oil",
      description: "The foundational energy source for the global economy. Various grades available.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petroleum/crude-oil`,
    },
    {
      id: "jet-a1",
      name: "Jet A1 Aviation Fuel",
      description: "High-quality aviation turbine fuel meeting international specifications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petroleum/jet-a1`,
    },
    {
      id: "en590-diesel",
      name: "EN590 10ppm Diesel",
      description: "Ultra-low sulfur diesel fuel compliant with European standards.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petroleum/en590-diesel`,
    },
    {
      id: "bitumen",
      name: "Bitumen",
      description: "Essential material for road construction and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petroleum/bitumen`,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductCategoryHero
          locale={locale}
          category="petroleum"
          title="Petroleum Products: Powering Global Industries and Transportation"
          description="Comprehensive portfolio of essential petroleum products, meticulously sourced from reputable international refineries."
        />
        <ProductGrid locale={locale} products={products} />
        <QualityAssurance locale={locale} category="petroleum" />
        <CategoryCTA locale={locale} category="petroleum" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
