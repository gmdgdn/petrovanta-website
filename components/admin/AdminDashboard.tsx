"use client"

import { useState } from "react"
import { Users, Package, MessageSquare, BarChart3, Settings, Plus, Edit, Trash2, Eye } from "lucide-react"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { title: "Total Products", value: "156", icon: Package, change: "+12%" },
    { title: "Contact Inquiries", value: "89", icon: MessageSquare, change: "+23%" },
    { title: "Active Categories", value: "5", icon: BarChart3, change: "0%" },
    { title: "Monthly Visitors", value: "12.5K", icon: Users, change: "+8%" },
  ]

  const recentInquiries = [
    { id: 1, name: "John Smith", company: "ABC Corp", product: "Crude Oil", date: "2024-01-15", status: "New" },
    { id: 2, name: "Sarah Johnson", company: "XYZ Ltd", product: "Urea 46%", date: "2024-01-14", status: "Responded" },
    {
      id: 3,
      name: "Mike Chen",
      company: "Global Trade",
      product: "Base Oils",
      date: "2024-01-13",
      status: "In Progress",
    },
    {
      id: 4,
      name: "Emma Wilson",
      company: "Energy Solutions",
      product: "Diesel EN590",
      date: "2024-01-12",
      status: "Closed",
    },
  ]

  const products = [
    { id: 1, name: "Crude Oil", category: "Petroleum", status: "Active", lastUpdated: "2024-01-10" },
    { id: 2, name: "Urea 46%", category: "Fertilizers", status: "Active", lastUpdated: "2024-01-09" },
    { id: 3, name: "Base Oils", category: "Petrochemicals", status: "Active", lastUpdated: "2024-01-08" },
    { id: 4, name: "Polypropylene", category: "Polymers", status: "Draft", lastUpdated: "2024-01-07" },
  ]

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "products", label: "Products", icon: Package },
    { id: "inquiries", label: "Inquiries", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="container">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage your Petrovanta website content and inquiries</p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id ? "bg-primary text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "overview" && (
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="card">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">{stat.title}</p>
                          <p className="text-2xl font-bold text-primary">{stat.value}</p>
                          <p className="text-sm text-green-600">{stat.change}</p>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-lg font-semibold text-primary mb-4">Recent Inquiries</h3>
                    <div className="space-y-3">
                      {recentInquiries.slice(0, 4).map((inquiry) => (
                        <div key={inquiry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-800">{inquiry.name}</p>
                            <p className="text-sm text-gray-600">
                              {inquiry.company} - {inquiry.product}
                            </p>
                          </div>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              inquiry.status === "New"
                                ? "bg-blue-100 text-blue-800"
                                : inquiry.status === "Responded"
                                  ? "bg-green-100 text-green-800"
                                  : inquiry.status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {inquiry.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-semibold text-primary mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <button className="w-full flex items-center space-x-3 p-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        <Plus size={20} />
                        <span>Add New Product</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                        <MessageSquare size={20} />
                        <span>View All Inquiries</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 p-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <BarChart3 size={20} />
                        <span>Generate Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "products" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary">Product Management</h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus size={20} />
                    <span>Add Product</span>
                  </button>
                </div>

                <div className="card">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Product Name</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Category</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Last Updated</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((product) => (
                          <tr key={product.id} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-800">{product.name}</td>
                            <td className="py-3 px-4 text-gray-600">{product.category}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  product.status === "Active"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {product.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-gray-600">{product.lastUpdated}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                  <Eye size={16} />
                                </button>
                                <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                                  <Edit size={16} />
                                </button>
                                <button className="p-1 text-red-600 hover:bg-red-50 rounded">
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "inquiries" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-primary">Contact Inquiries</h2>
                  <div className="flex space-x-3">
                    <select className="border border-gray-300 rounded-lg px-3 py-2">
                      <option>All Status</option>
                      <option>New</option>
                      <option>Responded</option>
                      <option>In Progress</option>
                      <option>Closed</option>
                    </select>
                    <button className="btn-primary">Export</button>
                  </div>
                </div>

                <div className="card">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Name</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Company</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Product Interest</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentInquiries.map((inquiry) => (
                          <tr key={inquiry.id} className="border-b border-gray-100">
                            <td className="py-3 px-4 font-medium text-gray-800">{inquiry.name}</td>
                            <td className="py-3 px-4 text-gray-600">{inquiry.company}</td>
                            <td className="py-3 px-4 text-gray-600">{inquiry.product}</td>
                            <td className="py-3 px-4 text-gray-600">{inquiry.date}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 text-xs rounded-full ${
                                  inquiry.status === "New"
                                    ? "bg-blue-100 text-blue-800"
                                    : inquiry.status === "Responded"
                                      ? "bg-green-100 text-green-800"
                                      : inquiry.status === "In Progress"
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {inquiry.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                                  <Eye size={16} />
                                </button>
                                <button className="p-1 text-green-600 hover:bg-green-50 rounded">
                                  <Edit size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">Settings</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="card">
                    <h3 className="text-lg font-semibold text-primary mb-4">Site Configuration</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Site Title</label>
                        <input
                          type="text"
                          defaultValue="Petrovanta - International Trading Company"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                        <input
                          type="email"
                          defaultValue="info@petrovanta.com"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          defaultValue="+1 (555) 123-4567"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <button className="btn-primary">Save Changes</button>
                    </div>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-semibold text-primary mb-4">User Management</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Admin Users</label>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">Admin User</p>
                              <p className="text-sm text-gray-600">admin@petrovanta.com</p>
                            </div>
                            <button className="text-red-600 hover:bg-red-50 p-1 rounded">
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="btn-secondary flex items-center space-x-2">
                        <Plus size={16} />
                        <span>Add User</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
