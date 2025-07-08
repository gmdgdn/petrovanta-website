import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import AboutHero from "@/components/about/AboutHero"
import CompanyOverview from "@/components/about/CompanyOverview"
import VisionMission from "@/components/about/VisionMission"
import CoreValues from "@/components/about/CoreValues"
import GlobalPresence from "@/components/about/GlobalPresence"
import WhyChooseUs from "@/components/about/WhyChooseUs"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("about.title"),
    description: t("about.description"),
  }
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <AboutHero locale={locale} />
        <CompanyOverview locale={locale} />
        <VisionMission locale={locale} />
        <CoreValues locale={locale} />
        <GlobalPresence locale={locale} />
        <WhyChooseUs locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
