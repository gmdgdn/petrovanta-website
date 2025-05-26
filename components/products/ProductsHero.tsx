import { Filter, Download } from "lucide-react"

export default function ProductsHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Portfolio</h1>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Comprehensive range of petroleum, petrochemical, chemical, polymer, and fertilizer products sourced from
            reputable suppliers worldwide. Quality assured, competitively priced, and delivered with excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-secondary inline-flex items-center">
              <Download className="mr-2" size={20} />
              Download Catalog
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors inline-flex items-center">
              <Filter className="mr-2" size={20} />
              Filter Products
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5</div>
              <div className="text-sm text-blue-200">Product Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-blue-200">Individual Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-sm text-blue-200">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
