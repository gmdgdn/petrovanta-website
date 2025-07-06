"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function HeroSection({ locale }: { locale: string }) {
  const t = useTranslations("homepage.hero")
  const router = useRouter()
  const isRTL = locale === "ar"

  return (
    <section
      id="home"
      className={`relative min-h-[70vh] flex items-center justify-center overflow-hidden section-padding ${isRTL ? "rtl" : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background Image from Pexels */}
      <Image
        src="https://images.pexels.com/photos/3855966/pexels-photo-3855966.jpeg?auto=compress&w=1600&q=80"
        alt="Petroleum refinery at sunset"
        fill
        className="object-cover object-center absolute inset-0 z-0 opacity-60"
        priority
      />
      <div className="container relative z-10 flex flex-col items-center justify-center text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white drop-shadow mb-6"
        >
          {t("headline")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto drop-shadow"
        >
          {t("subheadline")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => router.push("#products")}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
          >
            {t("cta.products")}
          </button>
          <button
            onClick={() => router.push("#contact")}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors shadow-lg"
          >
            {t("cta.contact")}
          </button>
        </motion.div>
      </div>
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-blue-700/60 z-0" />
    </section>
  )
}
