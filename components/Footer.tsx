import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#343bed] text-white section-padding">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-6">
              <Image 
                src="/PETROVANTA  Logo White.png" 
                alt="Petrovanta Logo" 
                width={200} 
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Your trusted international trading partner for petroleum products, petrochemicals, chemicals, polymers,
              and fertilizers. Powering global progress through strategic resources.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#ffbb01]">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#home" className="hover:text-[#ffbb01] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#ffbb01] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#ffbb01] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#ffbb01] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#ffbb01]">Contact</h4>
            <div className="text-blue-100 space-y-2">
              <p>Dubai, UAE</p>
              <p>Frankfurt, Germany</p>
              <p className="hover:text-[#ffbb01] transition-colors cursor-pointer">info@petrovanta.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Petrovanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
