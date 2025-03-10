"use client"

import React from "react"

import Link from "next/link"
import { GameFrame } from "./components/game-frame"
import { GameMenu } from "./components/game-menu"
import { StickyAds } from "./components/sticky-ads"
import { GameCard } from "./components/game-card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, Star, Menu, X } from "lucide-react"
import { BasketballLogo } from "./components/basketball-logo"

export default function BasketballLegendsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <BasketballLogo />
            <span className="text-xl font-bold">Basketball Legends</span>
          </div>

          <MobileNav />

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
            <h1 className="text-3xl font-bold tracking-tight">Basketball Legends</h1>
            <p className="text-muted-foreground">
              Play the ultimate basketball game featuring legendary players. Compete in tournaments, improve your
              skills, and become a basketball legend!
            </p>

            <div className="relative rounded-lg overflow-hidden border shadow-lg">
              <GameFrame />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>4.8/5</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="outline" className="rounded-full">
                <BasketballLogo className="h-4 w-4 mr-1" />
                Basketball
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Trophy className="h-4 w-4 mr-1" />
                Sports
              </Button>
              <Button size="sm" variant="outline" className="rounded-full">
                <Users className="h-4 w-4 mr-1" />
                Multiplayer
              </Button>
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h2 className="font-semibold mb-2">How to Play</h2>
              <p className="text-sm text-muted-foreground">
                Use the arrow keys to move your player. Press Z to pass and X to shoot. Score more points than your
                opponent to win the game. You can play against the computer or challenge a friend in 2-player mode.
              </p>
            </div>
          </section>

          <section id="popular" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Popular Basketball Games</h2>
              <Link href="/games/basketball" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <GameCard
                id="basketball-stars"
                title="Basketball Stars"
                image="/placeholder.svg?height=150&width=250"
                rating={4.7}
              />
              <GameCard id="dunkers-2" title="Dunkers 2" image="/placeholder.svg?height=150&width=250" rating={4.5} />
              <GameCard
                id="basketball-io"
                title="Basketball.io"
                image="/placeholder.svg?height=150&width=250"
                rating={4.3}
              />
            </div>
          </section>

          <section id="new" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">New Games</h2>
              <Link href="/games/new" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <GameCard
                id="basketball-legends-2023"
                title="Basketball Legends 2023"
                image="/placeholder.svg?height=150&width=250"
                rating={4.9}
                isNew={true}
              />
              <GameCard
                id="street-basketball"
                title="Street Basketball"
                image="/placeholder.svg?height=150&width=250"
                rating={4.6}
                isNew={true}
              />
              <GameCard
                id="basketball-clash"
                title="Basketball Clash"
                image="/placeholder.svg?height=150&width=250"
                rating={4.4}
                isNew={true}
              />
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
            <div className="flex items-center gap-2">
              <BasketballLogo className="h-5 w-5" />
              <span className="font-bold">Basketball Legends</span>
            </div>

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

function MobileNav() {
  return (
    <div className="md:hidden">
      <MobileNavContent />
    </div>
  )
}

function MobileNavContent() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span>Home</span>
            </Link>
            <Link href="/games/basketball" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span>Basketball Games</span>
            </Link>
            <Link href="/games/sports" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span>Sports Games</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <span>About</span>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

