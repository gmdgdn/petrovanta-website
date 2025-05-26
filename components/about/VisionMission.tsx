import { Eye, Target, Compass } from "lucide-react"

export default function VisionMission() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Vision, Mission & Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our guiding principles that shape every decision and drive our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="card text-center group hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the world's most trusted and reliable international trading company, connecting global markets
              through excellence in petroleum, petrochemical, chemical, polymer, and fertilizer trade.
            </p>
          </div>

          <div className="card text-center group hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To facilitate seamless global trade by providing high-quality products, exceptional service, and
              innovative solutions that exceed customer expectations while maintaining the highest standards of
              integrity and sustainability.
            </p>
          </div>

          <div className="card text-center group hover:shadow-xl transition-shadow">
            <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Compass className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity in all business dealings, commitment to quality excellence, customer-centric approach,
              environmental responsibility, and continuous innovation in global trade practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
