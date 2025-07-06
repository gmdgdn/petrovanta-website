import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCategoryHero from "@/components/products/ProductCategoryHero"
import ProductGrid from "@/components/products/ProductGrid"
import QualityAssurance from "@/components/products/QualityAssurance"
import CategoryCTA from "@/components/products/CategoryCTA"
import { getProductsByCategory } from "@/lib/products"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("petroleum.title"),
    description: t("petroleum.description"),
  }
}

export default function PetroleumPage({ params: { locale } }: { params: { locale: string } }) {
  // Get petroleum products from the data system
  const products = getProductsByCategory('petroleum').map(product => ({
    ...product,
    href: `/${locale}/products/petroleum/${product.id}`
  }))

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
