"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Plus, X, ArrowRight, ArrowLeft } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  description: string
  specifications: Record<string, string>
  applications: string[]
  image: string
}

interface ProductComparisonProps {
  locale: string
}

export default function ProductComparison({ locale }: ProductComparisonProps) {
  const t = useTranslations("products.comparison")
  const isRTL = locale === "ar"
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [showProductSelector, setShowProductSelector] = useState(false)

  const availableProducts: Product[] = [
    {
      id: "crude-oil",
      name: "Crude Oil",
      category: "Petroleum",
      description: "The foundational energy source for the global economy",
      specifications: {
        "API Gravity": "Various grades",
        "Sulfur Content": "Sweet and Sour options",
        Origin: "Global sourcing",
        "Quality Standards": "International compliance",
      },
      applications: ["Refining", "Petrochemicals", "Energy generation"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "base-oils",
      name: "Base Oils",
      category: "Petrochemicals",
      description: "High-quality base oils for lubricant formulations",
      specifications: {
        "API Groups": "Group I, II, III",
        "Viscosity Index": "80-120+",
        "Sulfur Content": "<0.03% to <300ppm",
        "Pour Point": "-15°C to -9°C",
      },
      applications: ["Automotive oils", "Industrial lubricants", "Marine lubricants"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "sulfuric-acid",
      name: "Sulfuric Acid",
      category: "Chemicals",
      description: "High-purity sulfuric acid for industrial applications",
      specifications: {
        Concentration: "93-98% H₂SO₄",
        Purity: "Technical to reagent grade",
        "Iron Content": "<50 ppm",
        Appearance: "Clear, colorless liquid",
      },
      applications: ["Battery acid", "Metal processing", "Chemical synthesis"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "polypropylene",
      name: "Polypropylene (PP)",
      category: "Polymers",
      description: "Versatile thermoplastic polymer",
      specifications: {
        Density: "0.90-0.91 g/cm³",
        "Melting Point": "160-166°C",
        "Melt Flow Rate": "0.3-35 g/10min",
        "Tensile Strength": "31-37 MPa",
      },
      applications: ["Packaging", "Automotive", "Textiles"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "urea",
      name: "Urea 46%",
      category: "Fertilizers",
      description: "High-nitrogen fertilizer for crop nutrition",
      specifications: {
        "Nitrogen Content": "46% minimum",
        Biuret: "1.0% maximum",
        Moisture: "0.5% maximum",
        Solubility: "1080 g/L at 20°C",
      },
      applications: ["Field crops", "Foliar feeding", "Compound fertilizers"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const addProduct = (product: Product) => {
    if (selectedProducts.length < 4 && !selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts([...selectedProducts, product])
    }
    setShowProductSelector(false)
  }

  const removeProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== productId))
  }

  const getAllSpecKeys = () => {
    const keys = new Set<string>()
    selectedProducts.forEach((product) => {
      Object.keys(product.specifications).forEach((key) => keys.add(key))
    })
    return Array.from(keys)
  }

  return (
    <section className="section-padding">
      <div className="container">
        {/* Product Selection */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 mb-6">
            {selectedProducts.map((product) => (
              <div key={product.id} className="flex items-center bg-primary text-white px-4 py-2 rounded-lg">
                <span className="mr-2">{product.name}</span>
                <button
                  onClick={() => removeProduct(product.id)}
                  className="hover:bg-white hover:text-primary rounded-full p-1 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            {selectedProducts.length < 4 && (
              <button
                onClick={() => setShowProductSelector(true)}
                className="flex items-center border-2 border-dashed border-gray-300 text-gray-600 px-4 py-2 rounded-lg hover:border-primary hover:text-primary transition-colors"
              >
                <Plus size={16} className="mr-2" />
                Add Product
              </button>
            )}
          </div>

          {showProductSelector && (
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Select a Product to Compare</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {availableProducts
                  .filter((product) => !selectedProducts.find((p) => p.id === product.id))
                  .map((product) => (
                    <div
                      key={product.id}
                      onClick={() => addProduct(product)}
                      className="card cursor-pointer hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <h4 className="font-semibold text-primary mb-1">{product.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                      <p className="text-sm text-gray-700">{product.description}</p>
                    </div>
                  ))}
              </div>
              <button onClick={() => setShowProductSelector(false)} className="mt-4 text-gray-600 hover:text-primary">
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Comparison Table */}
        {selectedProducts.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-primary text-white px-6 py-4">
              <h2 className="text-2xl font-semibold">Product Comparison</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-800">Feature</th>
                    {selectedProducts.map((product) => (
                      <th key={product.id} className="px-6 py-4 text-center font-semibold text-gray-800 min-w-48">
                        <div className="mb-2">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-20 h-16 object-cover rounded mx-auto mb-2"
                          />
                          <div className="font-semibold">{product.name}</div>
                          <div className="text-sm text-gray-600">{product.category}</div>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-800">Description</td>
                    {selectedProducts.map((product) => (
                      <td key={product.id} className="px-6 py-4 text-center text-gray-600">
                        {product.description}
                      </td>
                    ))}
                  </tr>

                  {getAllSpecKeys().map((specKey) => (
                    <tr key={specKey}>
                      <td className="px-6 py-4 font-semibold text-gray-800">{specKey}</td>
                      {selectedProducts.map((product) => (
                        <td key={product.id} className="px-6 py-4 text-center text-gray-600">
                          {product.specifications[specKey] || "N/A"}
                        </td>
                      ))}
                    </tr>
                  ))}

                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-800">Key Applications</td>
                    {selectedProducts.map((product) => (
                      <td key={product.id} className="px-6 py-4 text-center text-gray-600">
                        <ul className="text-sm space-y-1">
                          {product.applications.slice(0, 3).map((app, index) => (
                            <li key={index}>• {app}</li>
                          ))}
                        </ul>
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="px-6 py-4 font-semibold text-gray-800">Actions</td>
                    {selectedProducts.map((product) => (
                      <td key={product.id} className="px-6 py-4 text-center">
                        <div className="space-y-2">
                          <button className="w-full btn-primary text-sm py-2">Request Quote</button>
                          <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-300 transition-colors">
                            View Details
                          </button>
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Plus size={32} className="text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Start Comparing Products</h3>
            <p className="text-gray-600 mb-8">
              Select up to 4 products to compare their specifications, applications, and features side by side.
            </p>
            <button
              onClick={() => setShowProductSelector(true)}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>Add First Product</span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
