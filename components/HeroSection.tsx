export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Global Trading Excellence in <span className="text-blue-600">Energy & Chemicals</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Petrovanta is your trusted international trading partner for petroleum products, petrochemicals, chemicals,
            polymers, and fertilizers. Quality, reliability, and global reach from Dubai, UAE, and Frankfurt, Germany.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="btn-primary">
              Explore Products
            </a>
            <a href="#contact" className="btn-secondary">
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
