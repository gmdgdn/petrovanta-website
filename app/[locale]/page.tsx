import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSnapshot from "@/components/AboutSnapshot"
import ProductCategories from "@/components/ProductCategories"
import CoreValues from "@/components/CoreValues"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("homepage.title"),
    description: t("homepage.description"),
  }
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <AboutSnapshot locale={locale} />
        <ProductCategories locale={locale} />
        <CoreValues locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
