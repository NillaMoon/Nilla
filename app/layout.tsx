import type React from "react"
import "./globals.css"

export const metadata = {
  title: "VanillaGorilla - Micheal Chapin | Web Developer & Social Media Manager",
  description:
    "Professional web development and social media management services by Micheal Chapin (VanillaGorilla). Creating digital experiences that captivate and convert.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
