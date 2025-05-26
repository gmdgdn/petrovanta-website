import Link from "next/link"
import { ArrowRight, Fuel, Beaker, FlaskConical, Package, Leaf } from "lucide-react"

export default function ProductCategoriesGrid() {
  const categories = [
    {
      icon: Fuel,
      title: "Petroleum Products",
      description: "Crude oil, refined fuels, and energy products for global markets.",
      products: ["Crude Oil", "Jet A1 Aviation Fuel", "EN590 Diesel", "Bitumen"],
      href: "/products/petroleum",
      color: "bg-blue-500",
    },
    {
      icon: Beaker,
      title: "Petrochemicals",
      description: "Essential building blocks for modern industrial applications.",
      products: ["Base Oils", "Paraffin Wax", "AdBlue (DEF)", "LABSA"],
      href: "/products/petrochemicals",
      color: "bg-purple-500",
    },
    {
      icon: FlaskConical,
      title: "Chemicals",
      description: "Industrial and specialty chemicals for manufacturing processes.",
      products: ["Sulfuric Acid", "Hydrochloric Acid", "Calcium Chloride", "Phosphoric Acid"],
      href: "/products/chemicals",
      color: "bg-green-500",
    },
    {
      icon: Package,
      title: "Polymers",
      description: "Versatile plastic materials for countless applications.",
      products: ["Polypropylene (PP)", "PVC", "MDPE", "HDPE"],
      href: "/products/polymers",
      color: "bg-orange-500",
    },
    {
      icon: Leaf,
      title: "Fertilizers",
      description: "Agricultural nutrients supporting global food security.",
      products: ["Urea 46%", "Ammonium Nitrate", "Rock Phosphate", "NPK Fertilizers"],
      href: "/products/fertilizers",
      color: "bg-emerald-500",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Product Categories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of products across five major categories, each backed by rigorous quality
            standards and reliable supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div
                  className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Featured Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.products.map((product, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={category.href}
                    className="inline-flex items-center text-primary group-hover:text-accent transition-colors font-medium"
                  >
                    View All Products
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
