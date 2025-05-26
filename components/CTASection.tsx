import Link from "next/link"

export default function CTASection() {
  return (
    <section className="section-padding bg-[#C0A062]">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and discover how we can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#C0A062] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#C0A062] transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
