import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bizzy Tours and Travels - Uganda Tourism & Immigration",
  description: "Your trusted partner for Uganda tourism and immigration services",
  generator: 'v0.dev',
  openGraph: {
    images: [
      {
        url: "/images/bizzy-logo.png",
        width: 800, // Replace with actual width if known
        height: 600, // Replace with actual height if known
        alt: "Bizzy Tours and Travels Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
