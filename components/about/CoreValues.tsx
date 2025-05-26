import { Shield, Handshake, Globe, Award, Heart, Leaf } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparent business practices and ethical conduct in all our operations worldwide.",
    },
    {
      icon: Handshake,
      title: "Reliability",
      description: "Consistent delivery and dependable partnerships built on trust and mutual respect.",
    },
    {
      icon: Globe,
      title: "Global Excellence",
      description: "Extensive network connecting markets across continents with local expertise.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Uncompromising quality standards and continuous improvement in all processes.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Dedicated to understanding and exceeding customer needs and expectations.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Commitment to environmental responsibility and sustainable business practices.",
    },
  ]

  return (
    <section className="section-padding bg-primary text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The fundamental principles that guide our business decisions and define our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-blue-100 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
