import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductDetailHero from "@/components/products/ProductDetailHero"
import ProductSpecs from "@/components/products/ProductSpecs"
import ProductApplications from "@/components/products/ProductApplications"
import ProductQuality from "@/components/products/ProductQuality"
import ProductCTA from "@/components/products/ProductCTA"

export default function PolypropylnePage({ params: { locale } }: { params: { locale: string } }) {
  const productData = {
    name: "Polypropylene (PP)",
    description:
      "Versatile thermoplastic polymer with excellent chemical resistance, low density, and high melting point. Available in various grades for diverse applications.",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Multiple grades: homopolymer, random, and impact copolymers",
      "Excellent chemical and fatigue resistance",
      "Low density and high strength-to-weight ratio",
      "Good thermal properties and processability",
      "Food-grade and medical-grade options available",
    ],
    applications: [
      "Packaging films and containers",
      "Automotive components and interior parts",
      "Textile fibers and non-woven fabrics",
      "Consumer goods and household items",
      "Medical devices and pharmaceutical packaging",
      "Industrial components and equipment",
    ],
    specifications: {
      Density: "0.90-0.91 g/cm³",
      "Melting Point": "160-166°C",
      "Melt Flow Rate": "0.3-35 g/10min (230°C/2.16kg)",
      "Tensile Strength": "31-37 MPa",
      "Flexural Modulus": "1300-1800 MPa",
      Grades: "Homo, Random, Impact Copolymer",
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
            { label: "Polymers", href: `/${locale}/products/polymers` },
            { label: "Polypropylene", href: `/${locale}/products/polymers/polypropylene` },
          ]}
        />
        <ProductSpecs locale={locale} specifications={productData.specifications} />
        <ProductApplications locale={locale} applications={productData.applications} />
        <ProductQuality locale={locale} category="polymers" />
        <ProductCTA locale={locale} productName="Polypropylene (PP)" />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
