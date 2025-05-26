export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Petrovanta</h2>
          <p className="text-lg text-gray-600">
            With decades of experience in international trading, Petrovanta has established itself as a reliable partner
            in the global energy and chemical markets.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">🌍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Operating from strategic locations in Dubai and Frankfurt, serving clients worldwide.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">Rigorous quality control and compliance with international standards.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Partnership</h3>
            <p className="text-gray-600">Building long-term relationships with suppliers and customers globally.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
