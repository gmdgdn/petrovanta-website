import Link from "next/link"
import { Fuel, Beaker, Atom, Layers, Leaf } from "lucide-react"

export default function ProductCategories() {
  const categories = [
    {
      icon: Fuel,
      title: "Petroleum Products",
      description: "Crude oil, refined products, and energy solutions",
      href: "/products/petroleum",
    },
    {
      icon: Beaker,
      title: "Petrochemicals",
      description: "Base chemicals and intermediates for industry",
      href: "/products/petrochemicals",
    },
    {
      icon: Atom,
      title: "Chemicals",
      description: "Specialty and commodity chemicals",
      href: "/products/chemicals",
    },
    {
      icon: Layers,
      title: "Polymers",
      description: "Plastics, resins, and polymer materials",
      href: "/products/polymers",
    },
    {
      icon: Leaf,
      title: "Fertilizers",
      description: "Agricultural nutrients and crop solutions",
      href: "/products/fertilizers",
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#071D49] mb-4">Our Product Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive range of high-quality products across five major categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.href} className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group-hover:border-[#071D49]">
                <div className="bg-[#071D49] text-white w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#C0A062] transition-colors">
                  <category.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#071D49] mb-3">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
