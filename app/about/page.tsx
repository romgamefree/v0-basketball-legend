import Link from "next/link"
import { BasketballLogo } from "../components/basketball-logo"
import { StickyAds } from "../components/sticky-ads"
import { GameMenu } from "../components/game-menu"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Basketball Legends",
  description: "Learn more about Basketball Legends, the best place to play free online basketball games.",
  openGraph: {
    title: "About Us - Basketball Legends",
    description: "Learn more about Basketball Legends, the best place to play free online basketball games.",
    url: "https://basketballlegends.example.com/about",
    siteName: "Basketball Legends",
    images: [
      {
        url: "/basketball-og.jpg",
        width: 1200,
        height: 630,
        alt: "Basketball Legends",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BasketballLogo />
            <span className="text-xl font-bold">Basketball Legends</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/games/basketball" className="text-sm font-medium hover:text-primary">
              Basketball Games
            </Link>
            <Link href="/games/sports" className="text-sm font-medium hover:text-primary">
              Sports Games
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
        </div>
      </header>

      <main className="container px-4 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
        <div className="space-y-6">
          <section className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">About Basketball Legends</h1>

            <div className="prose prose-invert max-w-none">
              <p>
                Welcome to Basketball Legends, the premier destination for basketball gaming enthusiasts! Our platform
                offers a wide variety of basketball games that cater to players of all skill levels and preferences.
              </p>

              <h2>Our Mission</h2>
              <p>
                At Basketball Legends, our mission is to provide the most entertaining and engaging basketball gaming
                experience online. We strive to offer high-quality games that are accessible to everyone, completely
                free of charge.
              </p>

              <h2>Our Games</h2>
              <p>
                Our collection includes a diverse range of basketball games, from realistic simulations to arcade-style
                fun. Whether you're looking to experience the thrill of professional basketball, show off your skills in
                street basketball, or enjoy quirky basketball-themed adventures, we've got something for you.
              </p>

              <h2>Why Choose Basketball Legends?</h2>
              <ul>
                <li>
                  <strong>Quality Games:</strong> We carefully select and test all games to ensure they meet our high
                  standards.
                </li>
                <li>
                  <strong>Regular Updates:</strong> We constantly add new games to keep the experience fresh and
                  exciting.
                </li>
                <li>
                  <strong>No Downloads Required:</strong> All our games are playable directly in your browser.
                </li>
                <li>
                  <strong>Mobile Friendly:</strong> Enjoy our games on any device, anywhere, anytime.
                </li>
                <li>
                  <strong>Community Focus:</strong> We value player feedback and continuously improve based on
                  suggestions.
                </li>
              </ul>

              <h2>Contact Us</h2>
              <p>
                Have questions, suggestions, or feedback? We'd love to hear from you! Please visit our{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact Page
                </Link>{" "}
                to get in touch with our team.
              </p>

              <p>
                Thank you for choosing Basketball Legends as your basketball gaming destination. We hope you enjoy
                playing our games as much as we enjoy bringing them to you!
              </p>
            </div>
          </section>
        </div>

        <aside className="space-y-6">
          <StickyAds />
          <GameMenu />
        </aside>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <BasketballLogo className="h-5 w-5" />
              <span className="font-bold">Basketball Legends</span>
            </Link>

            <nav className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground">
                About
              </Link>
            </nav>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Basketball Legends. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

