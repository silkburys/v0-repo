import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../app/globals.css" // Assuming your global styles are here

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lushways Appointment Flow",
  description: "Book your beauty and salon appointments quickly.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
