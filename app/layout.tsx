import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Petrovanta - International Trading Company",
  description:
    "Leading international petroleum, petrochemical, chemical, polymer, and fertilizer trading company based in Dubai, UAE and Frankfurt, Germany.",
  keywords: "petroleum, petrochemical, chemical, polymer, fertilizer, trading, international, Dubai, Frankfurt",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
