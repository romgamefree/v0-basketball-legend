import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Basketball Legends - Play Free Online Basketball Games",
  description:
    "Play Basketball Legends online for free. Enjoy the best basketball games with legendary players. Compete in tournaments and show your skills on the court!",
  keywords: "basketball legends, basketball games, online games, free games, sports games, basketball legends 2023",
  openGraph: {
    title: "Basketball Legends - Play Free Online Basketball Games",
    description:
      "Play Basketball Legends online for free. Enjoy the best basketball games with legendary players. Compete in tournaments and show your skills on the court!",
    url: "https://basketballlegends.example.com",
    siteName: "Basketball Legends",
    images: [
      {
        url: "/basketball-og.jpg",
        width: 1200,
        height: 630,
        alt: "Basketball Legends Game",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basketball Legends - Play Free Online Basketball Games",
    description:
      "Play Basketball Legends online for free. Enjoy the best basketball games with legendary players. Compete in tournaments and show your skills on the court!",
    images: ["/basketball-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://basketballlegends.example.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'