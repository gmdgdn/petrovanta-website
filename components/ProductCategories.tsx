"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

const categoryImages = [
  "https://images.pexels.com/photos/3855966/pexels-photo-3855966.jpeg?auto=compress&w=800&q=80", // Petroleum
  "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&w=800&q=80", // Petrochemicals
  "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&w=800&q=80", // Chemicals
  "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&w=800&q=80", // Polymers
  "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&w=800&q=80", // Fertilizers
]

export default function ProductCategories({ locale }: { locale: string }) {
  const t = useTranslations("homepage.products")
  const isRTL = locale === "ar"
  const categories = [
    {
      title: t("petroleum.title"),
      description: t("petroleum.description"),
      href: "/products/petroleum",
      img: categoryImages[0],
      alt: t("petroleum.alt"),
    },
    {
      title: t("petrochemicals.title"),
      description: t("petrochemicals.description"),
      href: "/products/petrochemicals",
      img: categoryImages[1],
      alt: t("petrochemicals.alt"),
    },
    {
      title: t("chemicals.title"),
      description: t("chemicals.description"),
      href: "/products/chemicals",
      img: categoryImages[2],
      alt: t("chemicals.alt"),
    },
    {
      title: t("polymers.title"),
      description: t("polymers.description"),
      href: "/products/polymers",
      img: categoryImages[3],
      alt: t("polymers.alt"),
    },
    {
      title: t("fertilizers.title"),
      description: t("fertilizers.description"),
      href: "/products/fertilizers",
      img: categoryImages[4],
      alt: t("fertilizers.alt"),
    },
  ]

  return (
    <section className={`section-padding ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-[#071D49] mb-4"
          >
            {t("heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t("subheading")}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 + index * 0.15 }}
              className="group relative rounded-lg shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow overflow-hidden"
            >
              <Link href={category.href} className="block h-full">
                <div className="absolute inset-0 z-0">
                  <img
                    src={category.img}
                    alt={category.alt}
                    className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                  <h3 className="text-xl font-bold text-[#071D49] mb-3 group-hover:text-[#C0A062] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{category.description}</p>
                  <span className="inline-block mt-auto text-blue-900 font-semibold group-hover:underline">
                    {t("viewProducts")}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
