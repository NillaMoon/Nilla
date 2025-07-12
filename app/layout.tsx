import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VanillaGorilla - Micheal Chapin | Web Developer & Social Media Manager",
  description:
    "Professional web development and social media management services by Micheal Chapin (VanillaGorilla). Creating digital experiences that captivate and convert.",
  keywords: "web developer, social media manager, VanillaGorilla, Micheal Chapin, vanillamoon.xyz",
  authors: [{ name: "Micheal Chapin" }],
  openGraph: {
    title: "VanillaGorilla - Web Developer & Social Media Manager",
    description: "Professional web development and social media management services",
    url: "https://vanillamoon.xyz",
    siteName: "VanillaGorilla",
    type: "website",
  },
    generator: 'v0.dev'
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
