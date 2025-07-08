import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import AboutSnapshot from "@/components/AboutSnapshot"
import ProductCategories from "@/components/ProductCategories"
import CoreValues from "@/components/CoreValues"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("homepage.title"),
    description: t("homepage.description"),
  }
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection locale={locale} />
        <AboutSnapshot locale={locale} />
        <ProductCategories locale={locale} />
        <CoreValues locale={locale} />
        <CTASection locale={locale} />
      </main>
      <Footer />
    </div>
  )
}
