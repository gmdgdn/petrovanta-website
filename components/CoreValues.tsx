"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Shield, Globe, Users, TrendingUp } from "lucide-react"

export default function CoreValues({ locale }: { locale: string }) {
  const t = useTranslations("homepage.values")
  const isRTL = locale === "ar"
  const values = [
    {
      icon: Shield,
      title: t("quality.title"),
      description: t("quality.description"),
    },
    {
      icon: Globe,
      title: t("global.title"),
      description: t("global.description"),
    },
    {
      icon: Users,
      title: t("client.title"),
      description: t("client.description"),
    },
    {
      icon: TrendingUp,
      title: t("insight.title"),
      description: t("insight.description"),
    },
  ]

  return (
    <section className={`section-padding bg-[#071D49] text-white ${isRTL ? "rtl" : ""}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("heading")}
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 + index * 0.15 }}
              className="text-center"
            >
              <div className="bg-[#C0A062] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <value.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-blue-100">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
