import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductsHero from "@/components/products/ProductsHero"
import ProductCategoriesGrid from "@/components/products/ProductCategoriesGrid"
import QualityStatement from "@/components/products/QualityStatement"
import ProductsCTA from "@/components/products/ProductsCTA"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("products.title"),
    description: t("products.description"),
  }
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductsHero locale={locale} />
        <ProductCategoriesGrid locale={locale} />
        <QualityStatement locale={locale} />
        <ProductsCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
