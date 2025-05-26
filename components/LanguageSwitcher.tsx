"use client"

import { useRouter, usePathname } from "next/navigation"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  locale: string
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <div className="relative">
      <button
        onClick={() => switchLanguage(locale === "en" ? "ar" : "en")}
        className="flex items-center space-x-2 text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
      >
        <Globe size={16} />
        <span>{locale === "en" ? "العربية" : "English"}</span>
      </button>
    </div>
  )
}
