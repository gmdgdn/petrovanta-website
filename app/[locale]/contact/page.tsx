import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ContactHero from "@/components/contact/ContactHero"
import ContactForm from "@/components/contact/ContactForm"
import OfficeLocations from "@/components/contact/OfficeLocations"
import ContactMap from "@/components/contact/ContactMap"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("contact.title"),
    description: t("contact.description"),
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ContactHero locale={locale} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <ContactForm locale={locale} />
          <OfficeLocations locale={locale} />
        </div>
        <ContactMap locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
