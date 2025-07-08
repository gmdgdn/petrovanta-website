import { getTranslations } from "next-intl/server"
import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailHero from "@/components/products/ProductDetailHero"
import ProductSpecs from "@/components/products/ProductSpecs"
import ProductApplications from "@/components/products/ProductApplications"
import ProductQuality from "@/components/products/ProductQuality"
import ProductCTA from "@/components/products/ProductCTA"
import { getProductById } from "@/lib/products"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: t("crudeOil.title"),
    description: t("crudeOil.description"),
  }
}

export default async function CrudeOilPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  // Get product data from centralized system
  const product = getProductById("crude-oil")
  
  if (!product) {
    notFound()
  }

  // Convert centralized product data to component-compatible format
  const productData = {
    name: product.name,
    description: product.description,
    image: product.image,
    features: product.features,
    applications: product.applications,
    specifications: product.specifications.reduce((acc, spec) => {
      acc[spec.label] = spec.value
      return acc
    }, {} as Record<string, string>),
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
