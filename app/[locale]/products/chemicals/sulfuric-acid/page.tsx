import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailHero from "@/components/products/ProductDetailHero"
import ProductSpecs from "@/components/products/ProductSpecs"
import ProductApplications from "@/components/products/ProductApplications"
import ProductQuality from "@/components/products/ProductQuality"
import ProductCTA from "@/components/products/ProductCTA"

export default function SulfuricAcidPage({ params: { locale } }: { params: { locale: string } }) {
  const productData = {
    name: "Sulfuric Acid",
    description:
      "High-purity sulfuric acid (H₂SO₄) for diverse industrial applications. Available in various concentrations to meet specific process requirements.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Multiple concentration grades available",
      "High purity with minimal impurities",
      "Consistent quality from certified producers",
      "Compliant with international standards",
      "Safe packaging and handling procedures",
    ],
    applications: [
      "Battery acid for lead-acid batteries",
      "Metal processing and pickling operations",
      "Chemical synthesis and manufacturing",
      "Fertilizer production (phosphoric acid)",
      "Petroleum refining processes",
      "Water treatment applications",
    ],
    specifications: {
      Concentration: "93-98% H₂SO₄",
      Purity: "Technical to reagent grade",
      "Iron Content": "<50 ppm (reagent grade)",
      "Heavy Metals": "<10 ppm total",
      Appearance: "Clear, colorless liquid",
      Standards: "ASTM, ISO, BP/USP compliant",
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
            { label: "Chemicals", href: `/${locale}/products/chemicals` },
            { label: "Sulfuric Acid", href: `/${locale}/products/chemicals/sulfuric-acid` },
          ]}
        />
        <ProductSpecs locale={locale} specifications={productData.specifications} />
        <ProductApplications locale={locale} applications={productData.applications} />
        <ProductQuality locale={locale} category="chemicals" />
        <ProductCTA locale={locale} productName="Sulfuric Acid" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
