import { getTranslations } from "next-intl/server"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailHero from "@/components/products/ProductDetailHero"
import ProductSpecs from "@/components/products/ProductSpecs"
import ProductApplications from "@/components/products/ProductApplications"
import ProductQuality from "@/components/products/ProductQuality"
import ProductCTA from "@/components/products/ProductCTA"

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("crudeOil.title"),
    description: t("crudeOil.description"),
  }
}

export default function CrudeOilPage({ params: { locale } }: { params: { locale: string } }) {
  const productData = {
    name: "Crude Oil",
    description:
      "The foundational energy source of the global economy, naturally occurring petroleum product refined into numerous fuels and used in countless industrial applications.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Sourcing of various globally recognized grades",
      "Adherence to stringent international quality specifications",
      "Flexible contract terms and secure delivery options",
      "Transparent and competitive market-based pricing",
      "Expert logistics and supply chain management",
    ],
    applications: [
      "Refining into gasoline, diesel, jet fuel, and other distillates",
      "Feedstock for petrochemical industries (plastics, synthetic rubber)",
      "Production of lubricants, asphalt, and waxes",
      "Primary energy generation in power plants",
    ],
    specifications: {
      "API Gravity": "Various grades available",
      "Sulfur Content": "Sweet and Sour crude options",
      Origin: "Global sourcing from major producing regions",
      "Quality Standards": "International specifications compliance",
    },
  }

  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <ProductDetailHero
          locale={locale}
          product={productData}
          breadcrumbs={[
            { label: "Home", href: `/${locale}` },
            { label: "Products", href: `/${locale}/products` },
            { label: "Petroleum Products", href: `/${locale}/products/petroleum` },
            { label: "Crude Oil", href: `/${locale}/products/petroleum/crude-oil` },
          ]}
        />
        <ProductSpecs locale={locale} specifications={productData.specifications} />
        <ProductApplications locale={locale} applications={productData.applications} />
        <ProductQuality locale={locale} category="petroleum" />
        <ProductCTA locale={locale} productName="Crude Oil" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
