export default function ProductsSection() {
  const products = [
    {
      title: "Petroleum Products",
      description: "Crude oil, refined products, and energy solutions",
      icon: "🛢️",
    },
    {
      title: "Petrochemicals",
      description: "Base oils, aromatics, and petrochemical feedstock",
      icon: "⚗️",
    },
    {
      title: "Chemicals",
      description: "Industrial chemicals and specialty compounds",
      icon: "🧪",
    },
    {
      title: "Polymers",
      description: "Plastics, resins, and polymer materials",
      icon: "🔬",
    },
    {
      title: "Fertilizers",
      description: "Agricultural nutrients and fertilizer products",
      icon: "🌱",
    },
  ]

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Product Portfolio</h2>
          <p className="text-lg text-gray-600">
            Comprehensive range of energy and chemical products to meet your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
