"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

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
              <Image 
                src="/PETROVANTA  Logo Color.png" 
                alt="Petrovanta Logo" 
                width={180} 
                height={48}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 hover:text-[#343bed] transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-[#343bed] transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="text-gray-700 hover:text-[#343bed] transition-colors font-medium"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-[#343bed] transition-colors font-medium"
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
                  className="text-gray-700 hover:text-[#343bed] transition-colors text-left font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-[#343bed] transition-colors text-left font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-700 hover:text-[#343bed] transition-colors text-left font-medium"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-[#343bed] transition-colors text-left font-medium"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-[#343bed] to-[#2a30d9] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Powering Global Progress</h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#ffbb01]">Delivering Strategic Resources</h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Your trusted international partner for petroleum, petrochemical, chemical, polymer, and fertilizer
              products that fuel industries worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("products")}
                className="bg-[#ffbb01] text-[#343bed] px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
              >
                Explore Our Products
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-[#ffbb01] text-[#ffbb01] px-8 py-3 rounded-lg font-semibold hover:bg-[#ffbb01] hover:text-[#343bed] transition-colors"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343bed] mb-4">About Petrovanta: A Global Leader in Commodity Trading</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Petrovanta is a distinguished international petroleum and commodity trading company, headquartered in Dubai, UAE, 
              with a significant European presence in Frankfurt, Germany. We specialize in the ethical sourcing, 
              meticulous trading, and efficient delivery of essential products across five key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#343bed] to-[#2a30d9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#343bed]">Global Reach, Local Expertise</h3>
              <p className="text-gray-600">Strategic hubs in Dubai and Frankfurt with worldwide delivery capabilities</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#ffbb01] to-[#e6a500] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#343bed]">Client-Centric Approach</h3>
              <p className="text-gray-600">Building lasting partnerships through transparent, responsive service</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#343bed] to-[#2a30d9] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#343bed]">Uncompromising Quality</h3>
              <p className="text-gray-600">Rigorous quality control and adherence to international standards</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-[#ffbb01] to-[#e6a500] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#343bed]">Strategic Market Insight</h3>
              <p className="text-gray-600">Reliable supply chains and strategic sourcing for evolving demands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343bed] mb-4">Our Comprehensive Product Portfolio</h2>
            <h3 className="text-xl font-semibold text-[#ffbb01] mb-4">Supplying the Essential Building Blocks for a Growing World</h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver critical energy resources and industrial materials that power economies and meet essential human needs worldwide, 
              backed by expert professionals and robust global networks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#343bed] group">
              <div className="bg-gradient-to-br from-[#343bed] to-[#2a30d9] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🛢️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#343bed]">Petroleum Products</h3>
              <p className="text-gray-600 mb-4">
                Critical energy resources that power economies and global transportation, including various grades and refined fuels.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Crude Oil</li>
                <li>• Jet A1 Fuel</li>
                <li>• EN590 Diesel</li>
                <li>• Bitumen</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#ffbb01] group">
              <div className="bg-gradient-to-br from-[#ffbb01] to-[#e6a500] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#343bed]">Petrochemicals</h3>
              <p className="text-gray-600 mb-4">
                Diverse range including vital Base Oils, versatile Paraffin Wax, and essential chemicals for manufacturing.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Base Oils for Lubricants</li>
                <li>• Paraffin Wax</li>
                <li>• AdBlue (DEF)</li>
                <li>• LABSA</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#343bed] group">
              <div className="bg-gradient-to-br from-[#343bed] to-[#2a30d9] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#343bed]">Chemical Products</h3>
              <p className="text-gray-600 mb-4">
                Industrial chemicals crucial for manufacturing operations, all meeting stringent international standards.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Sulfuric Acid</li>
                <li>• Hydrochloric Acid</li>
                <li>• Calcium Chloride</li>
                <li>• Phosphoric Acid</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#ffbb01] group">
              <div className="bg-gradient-to-br from-[#ffbb01] to-[#e6a500] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#343bed]">Polymer Products</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive selection of polymers essential for countless applications in modern industry.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Polypropylene (PP)</li>
                <li>• Polyethylene (HDPE, LDPE)</li>
                <li>• Polyvinyl Chloride (PVC)</li>
                <li>• MDPE & LLDPE</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#343bed] group">
              <div className="bg-gradient-to-br from-[#343bed] to-[#2a30d9] w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#343bed]">Fertilizer Products</h3>
              <p className="text-gray-600 mb-4">
                Supporting global agriculture and food security with high-efficacy fertilizers for optimal crop yields.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Urea 46%</li>
                <li>• Diammonium Phosphate (DAP)</li>
                <li>• NPK Blends</li>
                <li>• Ammonium Sulphate</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#343bed] to-[#2a30d9] p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-3 text-[#ffbb01]">Ready to Secure Your Strategic Product Needs?</h3>
              <p className="text-blue-100 mb-4">
                Partner with Petrovanta for unparalleled quality, reliability, and global expertise in commodity trading.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-[#ffbb01] text-[#343bed] px-6 py-2 rounded-lg hover:bg-yellow-300 transition-colors font-semibold"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#343bed] mb-4">Ready to Secure Your Strategic Product Needs?</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Partner with Petrovanta for unparalleled quality, reliability, and global expertise in petroleum, petrochemical, 
              chemical, polymer, and fertilizer trading. Contact our expert team today to discover how we can support your business growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#343bed]">
              <h3 className="text-2xl font-semibold mb-6 text-[#343bed]">Get in Touch</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-[#343bed] mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#343bed] focus:border-[#343bed] transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#343bed] mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#343bed] focus:border-[#343bed] transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#343bed] mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#343bed] focus:border-[#343bed] transition-colors"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#343bed] mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#343bed] focus:border-[#343bed] transition-colors"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#343bed] text-white py-3 rounded-lg font-semibold hover:bg-[#2a30d9] transition-colors shadow-lg"
                >
                  Request a Quote
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-[#343bed]">Our Global Network</h3>

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
      <footer className="bg-[#343bed] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image 
                src="/PETROVANTA  Logo White.png" 
                alt="Petrovanta Logo" 
                width={200} 
                height={60}
                className="h-12 w-auto mb-4"
              />
              <p className="text-blue-100 leading-relaxed">
                Your trusted international trading partner for petroleum, petrochemical, chemical, polymer, and
                fertilizer products. Powering global progress through strategic resources.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#ffbb01]">Products</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Petroleum Products</li>
                <li>Petrochemicals</li>
                <li>Chemicals</li>
                <li>Polymers</li>
                <li>Fertilizers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#ffbb01]">Company</h4>
              <ul className="space-y-2 text-blue-100">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Quality Assurance</li>
                <li>Sustainability</li>
                <li>Careers</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#ffbb01]">Contact</h4>
              <div className="space-y-2 text-blue-100">
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
