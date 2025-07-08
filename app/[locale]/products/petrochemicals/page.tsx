import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCategoryHero from "@/components/products/ProductCategoryHero"
import ProductGrid from "@/components/products/ProductGrid"
import QualityAssurance from "@/components/products/QualityAssurance"
import CategoryCTA from "@/components/products/CategoryCTA"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("petrochemicals.title"),
    description: t("petrochemicals.description"),
  }
}

export default async function PetrochemicalsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const products = [
    {
      id: "base-oils",
      name: "Base Oils",
      description: "High-quality base oils for advanced lubricant formulations. Group I, II, and III grades available.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petrochemicals/base-oils`,
    },
    {
      id: "paraffin-wax",
      name: "Paraffin Wax",
      description: "Versatile paraffin wax for candles, packaging, cosmetics, and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petrochemicals/paraffin-wax`,
    },
    {
      id: "adblue",
      name: "AdBlue (DEF)",
      description: "Diesel Exhaust Fluid for SCR systems, reducing NOx emissions in diesel vehicles.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petrochemicals/adblue`,
    },
    {
      id: "labsa",
      name: "LABSA",
      description: "Linear Alkylbenzene Sulphonic Acid for detergent and cleaning product manufacturing.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petrochemicals/labsa`,
    },
    {
      id: "formaldehyde",
      name: "Formaldehyde",
      description: "Essential chemical intermediate for resins, plastics, and industrial applications.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petrochemicals/formaldehyde`,
    },
    {
      id: "anhydrous-ammonia",
      name: "Anhydrous Ammonia",
      description: "High-purity ammonia for fertilizer production and industrial processes.",
      image: "/placeholder.svg?height=300&width=400",
      href: `/${locale}/products/petrochemicals/anhydrous-ammonia`,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductCategoryHero
          locale={locale}
          category="petrochemicals"
          title="Petrochemical Products: Essential Building Blocks for Modern Industries"
          description="Comprehensive range of petrochemical intermediates and specialty products for diverse industrial applications."
        />
        <ProductGrid locale={locale} products={products} />
        <QualityAssurance locale={locale} category="petrochemicals" />
        <CategoryCTA locale={locale} category="petrochemicals" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
