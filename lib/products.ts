export interface Product {
  id: string
  name: string
  description: string
  image: string
  href: string
  category: string
  specifications?: Record<string, string>
  features?: string[]
  applications?: string[]
  images?: {
    main: string
    gallery?: string[]
    fallback?: string
  }
  seo?: {
    title: string
    description: string
    keywords?: string[]
  }
  qualityStandards?: string[]
  availability?: {
    regions: string[]
    minOrder?: string
    packaging?: string[]
  }
}

export interface ProductCategory {
  id: string
  name: string
  description: string
  icon: string
  products: Product[]
  heroImage?: string
  color: string
}

// Product data organized by category
export const productData: Record<string, Product[]> = {
  petroleum: [
    {
      id: "crude-oil",
      name: "Crude Oil",
      description: "The foundational energy source for the global economy. High-quality crude oil from verified sources with comprehensive quality documentation.",
      image: "/images/products/petroleum/crude-oil.svg",
      href: "/products/petroleum/crude-oil",
      category: "petroleum",
      specifications: {
        "API Gravity": "28-42°",
        "Sulfur Content": "< 0.5%",
        "Water Content": "< 0.1%",
        "Origin": "Multiple Sources"
      },
      features: [
        "Verified quality certificates",
        "Multiple grade options",
        "Reliable supply chain",
        "Competitive pricing"
      ],
      applications: [
        "Refinery feedstock",
        "Energy production",
        "Petrochemical processing"
      ],
      images: {
        main: "/images/products/petroleum/crude-oil.svg",
        gallery: [
          "/images/products/petroleum/crude-oil-2.svg",
          "/images/products/petroleum/crude-oil-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Crude Oil Trading | Multiple Grades | Petrovanta",
        description: "Source high-quality crude oil from verified global suppliers. Multiple API grades available with comprehensive quality documentation.",
        keywords: ["crude oil", "petroleum", "refinery feedstock", "energy", "trading"]
      },
      qualityStandards: ["API Standards", "ASTM D4052", "ISO 3838"],
      availability: {
        regions: ["Global", "Middle East", "Africa", "Asia", "Europe"],
        minOrder: "50,000 MT",
        packaging: ["Bulk Tanker", "Pipeline", "Vessel Cargo"]
      }
    },
    {
      id: "jet-a1",
      name: "Jet A1 Aviation Fuel",
      description: "Premium aviation turbine fuel meeting international ASTM D1655 and DEF STAN 91-91 specifications for commercial and military aviation.",
      image: "/images/products/petroleum/jet-a1.svg",
      href: "/products/petroleum/jet-a1",
      category: "petroleum",
      specifications: {
        "Flash Point": "Min 38°C",
        "Freezing Point": "Max -47°C",
        "Density": "775-840 kg/m³",
        "Sulfur Content": "Max 0.3%"
      },
      features: [
        "ASTM D1655 compliant",
        "DEF STAN 91-91 certified",
        "Premium quality assurance",
        "Global delivery capability"
      ],
      applications: [
        "Commercial aviation",
        "Military aircraft",
        "Private jets",
        "Helicopter operations"
      ],
      images: {
        main: "/images/products/petroleum/jet-a1.svg",
        gallery: [
          "/images/products/petroleum/jet-a1-2.svg",
          "/images/products/petroleum/jet-a1-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Jet A1 Aviation Fuel | ASTM D1655 Certified | Petrovanta",
        description: "Premium Jet A1 aviation fuel meeting international standards. ASTM D1655 and DEF STAN 91-91 compliant for commercial and military aviation.",
        keywords: ["jet fuel", "aviation fuel", "jet a1", "astm d1655", "def stan 91-91"]
      },
      qualityStandards: ["ASTM D1655", "DEF STAN 91-91", "IATA Standards"],
      availability: {
        regions: ["Global", "Middle East", "Europe", "Asia", "Americas"],
        minOrder: "1,000 MT",
        packaging: ["Bulk Tanker", "ISO Tank", "Drums"]
      }
    },
    {
      id: "en590-diesel",
      name: "EN590 10ppm Diesel",
      description: "Ultra-low sulfur diesel fuel compliant with European EN 590 standards, ideal for modern diesel engines with advanced emission control systems.",
      image: "/images/products/petroleum/en590-diesel.svg",
      href: "/products/petroleum/en590-diesel",
      category: "petroleum",
      specifications: {
        "Sulfur Content": "Max 10 ppm",
        "Cetane Number": "Min 51",
        "Density": "820-845 kg/m³",
        "Flash Point": "Min 55°C"
      },
      features: [
        "EN 590 compliant",
        "Ultra-low sulfur content",
        "Optimized combustion",
        "Environmental friendly"
      ],
      applications: [
        "Automotive diesel engines",
        "Industrial machinery",
        "Marine applications",
        "Power generation"
      ],
      images: {
        main: "/images/products/petroleum/en590-diesel.svg",
        gallery: [
          "/images/products/petroleum/en590-diesel-2.svg",
          "/images/products/petroleum/en590-diesel-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "EN590 10ppm Diesel | Ultra Low Sulfur | Petrovanta",
        description: "Premium EN590 compliant diesel fuel with ultra-low sulfur content. Ideal for modern diesel engines and emission control systems.",
        keywords: ["en590 diesel", "ultra low sulfur", "diesel fuel", "automotive", "industrial"]
      },
      qualityStandards: ["EN 590", "ASTM D975", "ISO 8217"],
      availability: {
        regions: ["Europe", "Middle East", "Africa", "Asia"],
        minOrder: "5,000 MT",
        packaging: ["Bulk Tanker", "ISO Tank", "Flexitank"]
      }
    },
    {
      id: "bitumen",
      name: "Bitumen",
      description: "High-grade bitumen for road construction and industrial applications, available in various penetration grades to meet specific project requirements.",
      image: "/images/products/petroleum/bitumen.svg",
      href: "/products/petroleum/bitumen",
      category: "petroleum",
      specifications: {
        "Penetration": "40/50, 60/70, 80/100",
        "Softening Point": "47-57°C",
        "Ductility": "Min 100 cm",
        "Flash Point": "Min 230°C"
      },
      features: [
        "Multiple penetration grades",
        "Consistent quality",
        "Weather resistant",
        "Long-lasting performance"
      ],
      applications: [
        "Road construction",
        "Roofing materials",
        "Waterproofing",
        "Industrial sealing"
      ],
      images: {
        main: "/images/products/petroleum/bitumen.svg",
        gallery: [
          "/images/products/petroleum/bitumen-2.svg",
          "/images/products/petroleum/bitumen-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Bitumen | Road Construction & Industrial | Petrovanta",
        description: "High-grade bitumen in various penetration grades for road construction, roofing, and industrial applications. Consistent quality guaranteed.",
        keywords: ["bitumen", "road construction", "penetration grade", "asphalt", "waterproofing"]
      },
      qualityStandards: ["ASTM D36", "ASTM D5", "EN 12591"],
      availability: {
        regions: ["Middle East", "Africa", "Asia", "Europe"],
        minOrder: "500 MT",
        packaging: ["Bulk Tanker", "Drums", "Bags"]
      }
    }
  ],
  chemicals: [
    {
      id: "sulfuric-acid",
      name: "Sulfuric Acid",
      description: "Industrial grade sulfuric acid (H₂SO₄) with high purity levels, essential for various manufacturing and chemical processing applications.",
      image: "/images/products/chemicals/sulfuric-acid.svg",
      href: "/products/chemicals/sulfuric-acid",
      category: "chemicals",
      specifications: {
        "Concentration": "98% min",
        "Purity": "Technical Grade",
        "Iron Content": "< 50 ppm",
        "Heavy Metals": "< 10 ppm"
      },
      features: [
        "High concentration",
        "Low impurities",
        "Consistent quality",
        "Safe packaging"
      ],
      applications: [
        "Battery manufacturing",
        "Metal processing",
        "Fertilizer production",
        "Chemical synthesis"
      ],
      images: {
        main: "/images/products/chemicals/sulfuric-acid.svg",
        gallery: [
          "/images/products/chemicals/sulfuric-acid-2.svg",
          "/images/products/chemicals/sulfuric-acid-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Sulfuric Acid | Industrial Grade H2SO4 | Petrovanta",
        description: "High-purity industrial grade sulfuric acid for manufacturing and chemical processing. Technical grade with low impurities.",
        keywords: ["sulfuric acid", "h2so4", "industrial chemical", "battery manufacturing", "metal processing"]
      },
      qualityStandards: ["ASTM D1830", "ISO 8049", "EN 12175"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Europe", "Africa"],
        minOrder: "25 MT",
        packaging: ["ISO Tank", "Drums", "IBC"]
      }
    },
    {
      id: "hydrochloric-acid",
      name: "Hydrochloric Acid",
      description: "High-purity hydrochloric acid (HCl) for industrial applications, metal processing, and chemical synthesis with consistent quality standards.",
      image: "/images/products/chemicals/hydrochloric-acid.svg",
      href: "/products/chemicals/hydrochloric-acid",
      category: "chemicals",
      specifications: {
        "Concentration": "32-37%",
        "Purity": "Technical Grade",
        "Iron Content": "< 20 ppm",
        "Free Chlorine": "< 10 ppm"
      },
      features: [
        "High purity",
        "Consistent concentration",
        "Low iron content",
        "Safe handling"
      ],
      applications: [
        "Metal processing",
        "pH adjustment",
        "Chemical synthesis",
        "Water treatment"
      ],
      images: {
        main: "/images/products/chemicals/hydrochloric-acid.svg",
        gallery: [
          "/images/products/chemicals/hydrochloric-acid-2.svg",
          "/images/products/chemicals/hydrochloric-acid-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Hydrochloric Acid | Industrial Grade HCl | Petrovanta",
        description: "High-purity hydrochloric acid for industrial applications, metal processing, and chemical synthesis. Consistent quality and safe handling.",
        keywords: ["hydrochloric acid", "hcl", "industrial chemical", "metal processing", "ph adjustment"]
      },
      qualityStandards: ["ASTM D1413", "ISO 4090", "EN 939"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Europe", "Africa"],
        minOrder: "20 MT",
        packaging: ["ISO Tank", "Drums", "IBC"]
      }
    }
  ],
  petrochemicals: [
    {
      id: "base-oils",
      name: "Base Oils",
      description: "Premium quality lubricant base oils across Group I, II, and III categories, providing excellent foundation for high-performance lubricant formulations.",
      image: "/images/products/petrochemicals/base-oils.svg",
      href: "/products/petrochemicals/base-oils",
      category: "petrochemicals",
      specifications: {
        "Viscosity Index": "80-120",
        "Pour Point": "-9 to -15°C",
        "Flash Point": "200-250°C",
        "Sulfur Content": "< 0.03%"
      },
      features: [
        "Multiple API groups",
        "Consistent viscosity",
        "Thermal stability",
        "Low volatility"
      ],
      applications: [
        "Automotive lubricants",
        "Industrial oils",
        "Hydraulic fluids",
        "Gear oils"
      ],
      images: {
        main: "/images/products/petrochemicals/base-oils.svg",
        gallery: [
          "/images/products/petrochemicals/base-oils-2.svg",
          "/images/products/petrochemicals/base-oils-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Base Oils | Group I, II, III | Lubricant Base | Petrovanta",
        description: "Premium quality lubricant base oils in Group I, II, and III categories. Excellent foundation for high-performance lubricant formulations.",
        keywords: ["base oils", "lubricant base", "group i", "group ii", "group iii", "automotive lubricants"]
      },
      qualityStandards: ["API Standards", "ASTM D2140", "ISO 3448"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Europe", "Americas"],
        minOrder: "100 MT",
        packaging: ["Bulk Tanker", "ISO Tank", "Drums"]
      }
    },
    {
      id: "paraffin-wax",
      name: "Paraffin Wax",
      description: "High-quality paraffin wax in various melting points and oil contents, suitable for candle making, packaging, and industrial applications.",
      image: "/images/products/petrochemicals/paraffin-wax.svg",
      href: "/products/petrochemicals/paraffin-wax",
      category: "petrochemicals",
      specifications: {
        "Melting Point": "52-68°C",
        "Oil Content": "0.5-18%",
        "Needle Penetration": "16-23 dmm",
        "Color": "White"
      },
      features: [
        "Multiple melting points",
        "Low oil content options",
        "Consistent quality",
        "Food grade available"
      ],
      applications: [
        "Candle manufacturing",
        "Packaging materials",
        "Rubber processing",
        "Cosmetics"
      ],
      images: {
        main: "/images/products/petrochemicals/paraffin-wax.svg",
        gallery: [
          "/images/products/petrochemicals/paraffin-wax-2.svg",
          "/images/products/petrochemicals/paraffin-wax-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Paraffin Wax | Candle Grade & Industrial | Petrovanta",
        description: "High-quality paraffin wax in various melting points for candle making, packaging, and industrial applications. Food grade available.",
        keywords: ["paraffin wax", "candle wax", "industrial wax", "melting point", "packaging"]
      },
      qualityStandards: ["ASTM D87", "ASTM D938", "ISO 9038"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Europe", "Africa"],
        minOrder: "20 MT",
        packaging: ["Slab", "Pastille", "Bags"]
      }
    }
  ],
  polymers: [
    {
      id: "polypropylene",
      name: "Polypropylene (PP)",
      description: "Versatile thermoplastic polymer with excellent chemical resistance and mechanical properties, suitable for a wide range of applications.",
      image: "/images/products/polymers/polypropylene.svg",
      href: "/products/polymers/polypropylene",
      category: "polymers",
      specifications: {
        "Melt Flow Rate": "1-35 g/10min",
        "Tensile Strength": "30-40 MPa",
        "Density": "0.90-0.91 g/cm³",
        "Melting Point": "160-170°C"
      },
      features: [
        "Chemical resistance",
        "Lightweight",
        "Recyclable",
        "Versatile processing"
      ],
      applications: [
        "Packaging materials",
        "Automotive parts",
        "Textiles",
        "Consumer goods"
      ],
      images: {
        main: "/images/products/polymers/polypropylene.svg",
        gallery: [
          "/images/products/polymers/polypropylene-2.svg",
          "/images/products/polymers/polypropylene-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Polypropylene PP | Thermoplastic Polymer | Petrovanta",
        description: "Versatile polypropylene with excellent chemical resistance and mechanical properties. Suitable for packaging, automotive, and consumer goods.",
        keywords: ["polypropylene", "pp", "thermoplastic", "polymer", "packaging", "automotive"]
      },
      qualityStandards: ["ASTM D1238", "ISO 1133", "EN ISO 527"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Europe", "Americas"],
        minOrder: "25 MT",
        packaging: ["Pellets", "Bags", "Octabin"]
      }
    },
    {
      id: "polyethylene",
      name: "Polyethylene (PE)",
      description: "High-quality polyethylene in HDPE, LDPE, and LLDPE grades, offering excellent durability and processability for diverse applications.",
      image: "/images/products/polymers/polyethylene.svg",
      href: "/products/polymers/polyethylene",
      category: "polymers",
      specifications: {
        "Density": "0.915-0.970 g/cm³",
        "Melt Index": "0.1-20 g/10min",
        "Tensile Strength": "20-35 MPa",
        "Melting Point": "120-140°C"
      },
      features: [
        "Multiple grade options",
        "Excellent durability",
        "Chemical resistance",
        "Easy processing"
      ],
      applications: [
        "Film production",
        "Blow molding",
        "Injection molding",
        "Pipe manufacturing"
      ],
      images: {
        main: "/images/products/polymers/polyethylene.svg",
        gallery: [
          "/images/products/polymers/polyethylene-2.svg",
          "/images/products/polymers/polyethylene-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Polyethylene PE | HDPE, LDPE, LLDPE | Petrovanta",
        description: "High-quality polyethylene in HDPE, LDPE, and LLDPE grades. Excellent durability and processability for film, molding, and pipe applications.",
        keywords: ["polyethylene", "pe", "hdpe", "ldpe", "lldpe", "polymer", "film", "molding"]
      },
      qualityStandards: ["ASTM D1238", "ISO 1133", "EN ISO 1872"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Europe", "Americas"],
        minOrder: "25 MT",
        packaging: ["Pellets", "Bags", "Octabin"]
      }
    }
  ],
  fertilizers: [
    {
      id: "urea",
      name: "Urea 46%",
      description: "High-grade nitrogen fertilizer with 46% nitrogen content, providing essential nutrients for optimal crop growth and soil enhancement.",
      image: "/images/products/fertilizers/urea.svg",
      href: "/products/fertilizers/urea",
      category: "fertilizers",
      specifications: {
        "Nitrogen Content": "46% min",
        "Moisture": "0.5% max",
        "Biuret": "1.0% max",
        "Particle Size": "2-4mm"
      },
      features: [
        "High nitrogen content",
        "Fast acting",
        "Water soluble",
        "Cost effective"
      ],
      applications: [
        "Agricultural fertilization",
        "Soil conditioning",
        "Crop nutrition",
        "Greenhouse cultivation"
      ],
      images: {
        main: "/images/products/fertilizers/urea.svg",
        gallery: [
          "/images/products/fertilizers/urea-2.svg",
          "/images/products/fertilizers/urea-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Urea 46% | Nitrogen Fertilizer | Agricultural | Petrovanta",
        description: "High-grade urea 46% nitrogen fertilizer for optimal crop growth and soil enhancement. Fast-acting, water-soluble, and cost-effective.",
        keywords: ["urea", "nitrogen fertilizer", "46%", "agricultural", "crop nutrition", "soil enhancement"]
      },
      qualityStandards: ["ASTM D1835", "ISO 5314", "EN 15375"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Africa", "Europe"],
        minOrder: "1,000 MT",
        packaging: ["Bulk", "Bags", "Jumbo Bags"]
      }
    },
    {
      id: "dap",
      name: "Diammonium Phosphate (DAP)",
      description: "High-quality phosphorous and nitrogen fertilizer providing essential nutrients for plant growth and root development.",
      image: "/images/products/fertilizers/dap.svg",
      href: "/products/fertilizers/dap",
      category: "fertilizers",
      specifications: {
        "Nitrogen Content": "18% min",
        "Phosphorus (P2O5)": "46% min",
        "Moisture": "2.0% max",
        "Particle Size": "2-4mm"
      },
      features: [
        "High phosphorus content",
        "Balanced N-P nutrition",
        "Excellent solubility",
        "Root development"
      ],
      applications: [
        "Crop fertilization",
        "Root development",
        "Soil amendment",
        "Starter fertilizer"
      ],
      images: {
        main: "/images/products/fertilizers/dap.svg",
        gallery: [
          "/images/products/fertilizers/dap-2.svg",
          "/images/products/fertilizers/dap-3.svg"
        ],
        fallback: "/placeholder.svg"
      },
      seo: {
        title: "Diammonium Phosphate DAP | Phosphorus Fertilizer | Petrovanta",
        description: "High-quality DAP fertilizer with 18% nitrogen and 46% phosphorus. Essential for plant growth and root development.",
        keywords: ["dap", "diammonium phosphate", "phosphorus fertilizer", "nitrogen", "root development"]
      },
      qualityStandards: ["ASTM D1835", "ISO 5314", "EN 15475"],
      availability: {
        regions: ["Global", "Middle East", "Asia", "Africa", "Europe"],
        minOrder: "1,000 MT",
        packaging: ["Bulk", "Bags", "Jumbo Bags"]
      }
    }
  ]
}

// Helper function to get products by category
export function getProductsByCategory(category: string): Product[] {
  return productData[category] || []
}

// Helper function to get all products
export function getAllProducts(): Product[] {
  return Object.values(productData).flat()
}

// Helper function to get product by ID
export function getProductById(category: string, id: string): Product | undefined {
  const products = getProductsByCategory(category)
  return products.find(product => product.id === id)
}

// Category configuration
export const categories = [
  {
    id: "petroleum",
    name: "Petroleum Products",
    description: "Crude oil, refined fuels, and energy products for global markets.",
    icon: "Fuel",
    color: "bg-blue-500",
    heroImage: "/images/categories/petroleum-hero.svg"
  },
  {
    id: "petrochemicals", 
    name: "Petrochemicals",
    description: "Essential building blocks for modern industrial applications.",
    icon: "Beaker",
    color: "bg-purple-500",
    heroImage: "/images/categories/petrochemicals-hero.svg"
  },
  {
    id: "chemicals",
    name: "Chemicals", 
    description: "Industrial and specialty chemicals for manufacturing processes.",
    icon: "FlaskConical",
    color: "bg-green-500",
    heroImage: "/images/categories/chemicals-hero.svg"
  },
  {
    id: "polymers",
    name: "Polymers",
    description: "Versatile plastic materials for countless applications.",
    icon: "Package", 
    color: "bg-orange-500",
    heroImage: "/images/categories/polymers-hero.svg"
  },
  {
    id: "fertilizers",
    name: "Fertilizers",
    description: "Agricultural nutrients supporting global food security.",
    icon: "Leaf",
    color: "bg-emerald-500", 
    heroImage: "/images/categories/fertilizers-hero.svg"
  }
]
