"use client"

import type React from "react"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container max-w-2xl mx-auto text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-green-800 mb-2">Message Sent Successfully!</h2>
            <p className="text-green-700 mb-6">
              Thank you for contacting Petrovanta. Our team will review your inquiry and respond within 24 hours.
            </p>
            <button onClick={() => setIsSubmitted(false)} className="btn-primary">
              Send Another Message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">Send Us a Message</h2>
          <p className="text-gray-600">Fill out the form below and our team will get back to you promptly.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="productCategory" className="block text-sm font-medium text-gray-700 mb-2">
                  Product Category of Interest
                </label>
                <select
                  id="productCategory"
                  name="productCategory"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a category</option>
                  <option value="petroleum">Petroleum Products</option>
                  <option value="petrochemicals">Petrochemicals</option>
                  <option value="chemicals">Chemicals</option>
                  <option value="polymers">Polymers</option>
                  <option value="fertilizers">Fertilizers</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please provide details about your requirements, quantities, delivery location, and any specific specifications..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  name="privacy"
                  required
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the privacy policy and consent to the processing of my personal data for the purpose of
                  responding to my inquiry. *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-4">Quick Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our team typically responds to inquiries within 24 hours during business days. For urgent matters,
                please call our direct line.
              </p>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-4">What to Include</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product specifications</li>
                <li>• Required quantities</li>
                <li>• Delivery location</li>
                <li>• Timeline requirements</li>
                <li>• Quality certifications needed</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-primary mb-4">Alternative Contact</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-medium">Sales Team:</span>
                  <br />
                  <span className="text-gray-600">sales@petrovanta.com</span>
                </div>
                <div>
                  <span className="font-medium">Technical Support:</span>
                  <br />
                  <span className="text-gray-600">technical@petrovanta.com</span>
                </div>
                <div>
                  <span className="font-medium">Emergency Line:</span>
                  <br />
                  <span className="text-gray-600">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
