import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-primary to-blue-900 text-white section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Ready to discuss your petroleum, chemical, or fertilizer requirements? Our expert team is here to provide
            personalized solutions for your business needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-blue-200 text-sm">info@petrovanta.com</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-blue-200 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-200 text-sm">Global Offices</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Business Hours</h3>
              <p className="text-blue-200 text-sm">24/7 Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
