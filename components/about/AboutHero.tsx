import { Award, Users, Globe, TrendingUp } from "lucide-react"

export default function AboutHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Petrovanta</h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Leading the global trade of petroleum, petrochemicals, chemicals, polymers, and fertilizers with unwavering
            commitment to quality, reliability, and customer satisfaction.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-blue-200">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm text-blue-200">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-blue-200">Quality Assured</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm text-blue-200">Successful Deliveries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
