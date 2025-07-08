"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/PETROVANTA  Logo Color.png" 
              alt="Petrovanta Logo" 
              width={180} 
              height={48}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
              About
            </Link>
            <Link href="#products" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
              Products
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
              <span className="block w-full h-0.5 bg-gray-600"></span>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="#home" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
                About
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
                Products
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#343bed] transition-colors font-medium">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
