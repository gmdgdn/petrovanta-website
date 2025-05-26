"use client"

import { useState } from "react"
import { Search, Filter, X } from "lucide-react"

export default function ProductSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const categories = ["All Categories", "Petroleum Products", "Petrochemicals", "Chemicals", "Polymers", "Fertilizers"]

  return (
    <section className="py-8 bg-gray-50 border-b">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-8 focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Advanced Filter Button */}
            <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="btn-primary inline-flex items-center">
              <Filter className="mr-2" size={20} />
              Filters
            </button>
          </div>

          {/* Advanced Filters */}
          {isFilterOpen && (
            <div className="mt-6 p-6 bg-white border border-gray-200 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Advanced Filters</h3>
                <button onClick={() => setIsFilterOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Application</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>All Applications</option>
                    <option>Industrial</option>
                    <option>Automotive</option>
                    <option>Agricultural</option>
                    <option>Construction</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>All Grades</option>
                    <option>Technical Grade</option>
                    <option>Food Grade</option>
                    <option>Pharmaceutical Grade</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Origin</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>All Origins</option>
                    <option>Middle East</option>
                    <option>Europe</option>
                    <option>Asia</option>
                    <option>Americas</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-4 space-x-3">
                <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Clear All
                </button>
                <button className="btn-primary">Apply Filters</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
