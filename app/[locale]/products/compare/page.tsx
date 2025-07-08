"use client"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductComparison from "@/components/products/ProductComparison"

export default async function ProductComparePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="min-h-screen">
      <Header locale={locale} />
      <main>
        <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Comparison Tool</h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Compare specifications, applications, and features across our product portfolio to find the perfect
                solution for your needs.
              </p>
            </div>
          </div>
        </section>
        <ProductComparison locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  )
}
