"use client"

import { useState, useEffect } from "react"

export default function PetrovantaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-900">Petrovanta</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span
                  className={`block w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block w-full h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                ></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-blue-600 transition-colors text-left"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Trading Excellence in Energy & Chemicals</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your trusted international partner for petroleum, petrochemical, chemical, polymer, and fertilizer
              products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Petrovanta</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With offices in Dubai, UAE, and Frankfurt, Germany, we are a leading international trading company
              specializing in petroleum, petrochemical, chemical, polymer, and fertilizer products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">International presence with strategic locations in key markets</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with deep industry knowledge</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality control and international standards compliance</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable Logistics</h3>
              <p className="text-gray-600">Efficient supply chain management and timely delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of high-quality products across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛢️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Petroleum Products</h3>
              <p className="text-gray-600 mb-4">
                Crude oil, refined products, and specialty petroleum derivatives for global markets
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Crude Oil</li>
                <li>• Gasoline</li>
                <li>• Diesel Fuel</li>
                <li>• Jet Fuel</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Petrochemicals</h3>
              <p className="text-gray-600 mb-4">
                Essential building blocks for modern industrial applications and manufacturing
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Base Oils</li>
                <li>• Aromatics</li>
                <li>• Olefins</li>
                <li>• Solvents</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Chemicals</h3>
              <p className="text-gray-600 mb-4">
                High-grade industrial chemicals for diverse manufacturing and processing needs
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sulfuric Acid</li>
                <li>• Caustic Soda</li>
                <li>• Methanol</li>
                <li>• Ammonia</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Polymers</h3>
              <p className="text-gray-600 mb-4">
                Advanced polymer materials for packaging, automotive, and construction industries
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Polypropylene</li>
                <li>• Polyethylene</li>
                <li>• PVC</li>
                <li>• Polystyrene</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fertilizers</h3>
              <p className="text-gray-600 mb-4">
                Premium fertilizer products supporting global agriculture and food security
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Urea</li>
                <li>• DAP</li>
                <li>• NPK Blends</li>
                <li>• Potash</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Custom Solutions</h3>
              <p className="text-blue-700 mb-4">
                Need something specific? We provide tailored solutions for unique requirements
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your requirements? Contact our team for personalized solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Our Offices</h3>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">📍</span>
                      <div>
                        <h4 className="font-semibold text-lg">Dubai, UAE</h4>
                        <p className="text-gray-600">
                          Business Bay, Dubai
                          <br />
                          United Arab Emirates
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">📞</span>
                            <span className="text-sm">+971 4 XXX XXXX</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">✉️</span>
                            <span className="text-sm">dubai@petrovanta.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow">
                    <div className="flex items-start space-x-4">
                      <span className="text-2xl">📍</span>
                      <div>
                        <h4 className="font-semibold text-lg">Frankfurt, Germany</h4>
                        <p className="text-gray-600">
                          Financial District, Frankfurt
                          <br />
                          Germany
                        </p>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">📞</span>
                            <span className="text-sm">+49 69 XXX XXXX</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm">✉️</span>
                            <span className="text-sm">frankfurt@petrovanta.com</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Petrovanta</h3>
              <p className="text-blue-200">
                Your trusted international trading partner for petroleum, petrochemical, chemical, polymer, and
                fertilizer products.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-blue-200">
                <li>Petroleum Products</li>
                <li>Petrochemicals</li>
                <li>Chemicals</li>
                <li>Polymers</li>
                <li>Fertilizers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-blue-200">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Quality Assurance</li>
                <li>Sustainability</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-blue-200">
                <p>Dubai, UAE</p>
                <p>Frankfurt, Germany</p>
                <p>info@petrovanta.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 Petrovanta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
