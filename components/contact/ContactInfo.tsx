import { Mail, Phone, MapPin, Clock, Globe, Shield } from "lucide-react"

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      primary: "info@petrovanta.com",
      secondary: "Available 24/7",
      description: "Send us your inquiries and we'll respond promptly",
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "+1 (555) 123-4567",
      secondary: "Business Hours",
      description: "Speak directly with our sales team",
    },
    {
      icon: Globe,
      title: "Global Presence",
      primary: "50+ Countries",
      secondary: "Worldwide Operations",
      description: "Local support in major markets",
    },
  ]

  const businessInfo = [
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Emergency only",
        "Time Zone: Multiple global offices",
      ],
    },
    {
      icon: Shield,
      title: "Certifications",
      details: [
        "ISO 9001:2015 Quality Management",
        "ISO 14001:2015 Environmental",
        "OHSAS 18001 Safety Standards",
        "Various product certifications",
      ],
    },
    {
      icon: MapPin,
      title: "Headquarters",
      details: [
        "Global Trading Operations",
        "Regional offices worldwide",
        "Local representatives",
        "Strategic partnerships",
      ],
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Multiple ways to reach us for your convenience. Choose the method that works best for you.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div key={index} className="card text-center group hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <method.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">{method.title}</h3>
              <div className="text-lg font-medium text-gray-800 mb-1">{method.primary}</div>
              <div className="text-sm text-accent mb-3">{method.secondary}</div>
              <p className="text-gray-600 text-sm">{method.description}</p>
            </div>
          ))}
        </div>

        {/* Business Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessInfo.map((info, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-primary">{info.title}</h3>
              </div>
              <ul className="space-y-2">
                {info.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
