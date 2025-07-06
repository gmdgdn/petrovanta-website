import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Globe, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function AboutSnapshot({ locale }: { locale: string }) {
  const t = useTranslations("homepage.about")
  const isRTL = locale === "ar"
  const stats = [
    { icon: Globe, label: t("highlights.network.title"), value: t("highlights.network.value") },
    { icon: Users, label: t("highlights.experience.title"), value: t("highlights.experience.value") },
    { icon: Award, label: t("highlights.portfolio.title"), value: t("highlights.portfolio.value") },
    { icon: TrendingUp, label: t("highlights.quality.title"), value: t("highlights.quality.value") },
  ]

  return (
    <section className={`section-padding bg-gray-50 relative ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* Accent background image */}
      <Image
        src="https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&w=1200&q=80"
        alt="Global business background"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-10 pointer-events-none"
        priority
      />
      <div className="container relative z-10">
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
            {t("description.intro")}
          </motion.p>
          <ul className="flex flex-wrap justify-center gap-2 mt-4 text-blue-900 font-semibold">
            <li>{t("description.products.petroleum")}</li>
            <li>{t("description.products.petrochemicals")}</li>
            <li>{t("description.products.chemicals")}</li>
            <li>{t("description.products.polymers")}</li>
            <li>{t("description.products.fertilizers")}</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 + index * 0.15 }}
              className="text-center"
            >
              <div className="bg-[#071D49] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon size={32} />
              </div>
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-2xl font-bold text-[#071D49] mb-2"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
