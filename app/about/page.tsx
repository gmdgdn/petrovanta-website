import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Target, Eye, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">About Petrovanta</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Leading the global energy and chemical trading industry through innovation, integrity, and excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Petrovanta is a leading international trading company specializing in petroleum, petrochemical,
                chemical, polymer, and fertilizer products. We connect global markets with reliable supply chain
                solutions.
              </p>
              <p className="text-lg text-gray-600">
                With strategic locations across major trading hubs, we serve clients worldwide with local expertise and
                global reach, maintaining the highest standards of quality and service.
              </p>
            </div>
            <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <Globe className="h-24 w-24 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To be the preferred global trading partner, delivering exceptional value through reliable supply chain
                solutions and maintaining the highest standards of integrity and excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To lead the global energy and chemical trading industry through innovation, sustainability, and
                unwavering commitment to our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
