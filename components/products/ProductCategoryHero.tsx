"use client"

interface ProductCategoryHeroProps {
  locale: string
  category: string
  title: string
  description: string
}

export default function ProductCategoryHero({ locale, category, title, description }: ProductCategoryHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary to-blue-800 text-white section-padding">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-blue-100 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
