import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Search, Filter } from "lucide-react"

export default function ProductsPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive portfolio of premium petroleum, petrochemical, chemical, polymer, and fertilizer products.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <Filter className="h-5 w-5 mr-2" />
              Filter
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Category cards would go here */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Petroleum Products</h3>
                <p className="text-gray-600 mb-4">Essential energy resources for global transportation and industry.</p>
                <a href="/products/petroleum" className="text-blue-600 hover:text-blue-800 font-semibold">
                  View Products →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
