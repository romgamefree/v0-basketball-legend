import Link from "next/link"
import { GameMenu } from "@/app/components/game-menu"
import { StickyAds } from "@/app/components/sticky-ads"
import { GameCard } from "@/app/components/game-card"
import { BasketballLogo } from "@/app/components/basketball-logo"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface CategoryPageProps {
  params: {
    category: string
  }
}

// Define interface for game objects
interface GameType {
  id: string
  title: string
  rating: number
  image: string
  isNew?: boolean
  category?: string
}

// This would typically come from a database or API
const categories = {
  basketball: {
    title: "Basketball Games",
    description:
      "Play the best basketball games online for free. Dunk, shoot, and score in these exciting basketball games!",
    games: [
      {
        id: "basketball-legends-2020",
        title: "Basketball Legends 2020",
        rating: 4.8,
        image: "/placeholder.svg?height=150&width=250",
      },
      {
        id: "basketball-stars",
        title: "Basketball Stars",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
      },
      { id: "dunkers-2", title: "Dunkers 2", rating: 4.5, image: "/placeholder.svg?height=150&width=250" },
      { id: "basketball-io", title: "Basketball.io", rating: 4.3, image: "/placeholder.svg?height=150&width=250" },
      {
        id: "basketball-legends-2023",
        title: "Basketball Legends 2023",
        rating: 4.9,
        image: "/placeholder.svg?height=150&width=250",
        isNew: true,
      },
      {
        id: "street-basketball",
        title: "Street Basketball",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        isNew: true,
      },
      {
        id: "basketball-clash",
        title: "Basketball Clash",
        rating: 4.4,
        image: "/placeholder.svg?height=150&width=250",
        isNew: true,
      },
      {
        id: "basketball-legends-2019",
        title: "Basketball Legends 2019",
        rating: 4.2,
        image: "/placeholder.svg?height=150&width=250",
      },
    ],
  },
  sports: {
    title: "Sports Games",
    description:
      "Enjoy a variety of sports games including soccer, tennis, baseball, and more. Compete and win championships!",
    games: [
      {
        id: "basketball-legends-2020",
        title: "Basketball Legends 2020",
        rating: 4.8,
        image: "/placeholder.svg?height=150&width=250",
        category: "basketball",
      },
      {
        id: "soccer-stars",
        title: "Soccer Stars",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
      },
      {
        id: "tennis-masters",
        title: "Tennis Masters",
        rating: 4.4,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
      },
      {
        id: "baseball-pro",
        title: "Baseball Pro",
        rating: 4.3,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
      },
      {
        id: "football-legends",
        title: "Football Legends",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
        isNew: true,
      },
      {
        id: "hockey-stars",
        title: "Hockey Stars",
        rating: 4.5,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
      },
    ],
  },
  multiplayer: {
    title: "Multiplayer Games",
    description: "Play with friends or challenge players from around the world in these exciting multiplayer games!",
    games: [
      {
        id: "basketball-legends-2020",
        title: "Basketball Legends 2020",
        rating: 4.8,
        image: "/placeholder.svg?height=150&width=250",
        category: "basketball",
      },
      {
        id: "soccer-stars",
        title: "Soccer Stars",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
      },
      {
        id: "battle-royale",
        title: "Battle Royale",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "multiplayer",
      },
      {
        id: "team-fortress",
        title: "Team Fortress",
        rating: 4.5,
        image: "/placeholder.svg?height=150&width=250",
        category: "multiplayer",
      },
    ],
  },
  action: {
    title: "Action Games",
    description: "Experience thrilling action games with intense gameplay and exciting challenges!",
    games: [
      {
        id: "super-fighters",
        title: "Super Fighters",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "action",
      },
      {
        id: "ninja-warrior",
        title: "Ninja Warrior",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "action",
      },
      {
        id: "zombie-shooter",
        title: "Zombie Shooter",
        rating: 4.5,
        image: "/placeholder.svg?height=150&width=250",
        category: "action",
      },
    ],
  },
  racing: {
    title: "Racing Games",
    description: "Race against time and opponents in these fast-paced racing games!",
    games: [
      {
        id: "speed-racer",
        title: "Speed Racer",
        rating: 4.5,
        image: "/placeholder.svg?height=150&width=250",
        category: "racing",
      },
      {
        id: "drift-kings",
        title: "Drift Kings",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "racing",
      },
      {
        id: "moto-x3m",
        title: "Moto X3M",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "racing",
      },
    ],
  },
  adventure: {
    title: "Adventure Games",
    description: "Embark on epic adventures and explore new worlds in these exciting adventure games!",
    games: [
      {
        id: "treasure-hunter",
        title: "Treasure Hunter",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "adventure",
      },
      {
        id: "island-survival",
        title: "Island Survival",
        rating: 4.5,
        image: "/placeholder.svg?height=150&width=250",
        category: "adventure",
      },
      {
        id: "jungle-adventure",
        title: "Jungle Adventure",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "adventure",
      },
    ],
  },
  puzzle: {
    title: "Puzzle Games",
    description: "Challenge your mind with these brain-teasing puzzle games!",
    games: [
      {
        id: "brain-teaser",
        title: "Brain Teaser",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "puzzle",
      },
      {
        id: "match-3",
        title: "Match 3",
        rating: 4.5,
        image: "/placeholder.svg?height=150&width=250",
        category: "puzzle",
      },
      {
        id: "sudoku-master",
        title: "Sudoku Master",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "puzzle",
      },
    ],
  },
  strategy: {
    title: "Strategy Games",
    description: "Plan, build, and conquer in these strategic games that test your tactical skills!",
    games: [
      {
        id: "tower-defense",
        title: "Tower Defense",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "strategy",
      },
      {
        id: "empire-builder",
        title: "Empire Builder",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "strategy",
      },
      {
        id: "chess-master",
        title: "Chess Master",
        rating: 4.8,
        image: "/placeholder.svg?height=150&width=250",
        category: "strategy",
      },
    ],
  },
  new: {
    title: "New Games",
    description: "Check out the latest and greatest games added to our collection!",
    games: [
      {
        id: "basketball-legends-2023",
        title: "Basketball Legends 2023",
        rating: 4.9,
        image: "/placeholder.svg?height=150&width=250",
        category: "basketball",
        isNew: true,
      },
      {
        id: "street-basketball",
        title: "Street Basketball",
        rating: 4.6,
        image: "/placeholder.svg?height=150&width=250",
        category: "basketball",
        isNew: true,
      },
      {
        id: "basketball-clash",
        title: "Basketball Clash",
        rating: 4.4,
        image: "/placeholder.svg?height=150&width=250",
        category: "basketball",
        isNew: true,
      },
      {
        id: "football-legends",
        title: "Football Legends",
        rating: 4.7,
        image: "/placeholder.svg?height=150&width=250",
        category: "sports",
        isNew: true,
      },
    ],
  },
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = categories[params.category as keyof typeof categories]

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The requested game category could not be found.",
    }
  }

  return {
    title: `${category.title} - Play Free Online Games | Basketball Legends`,
    description: category.description,
    openGraph: {
      title: `${category.title} - Play Free Online Games | Basketball Legends`,
      description: category.description,
      url: `https://basketballlegends.example.com/games/${params.category}`,
      siteName: "Basketball Legends",
      images: [
        {
          url: "/basketball-og.jpg",
          width: 1200,
          height: 630,
          alt: `${category.title}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories[params.category as keyof typeof categories]

  if (!category) {
    notFound()
  }

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
            <h1 className="text-3xl font-bold tracking-tight">{category.title}</h1>
            <p className="text-muted-foreground">{category.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {category.games.map((game) => (
                <GameCard
                  key={game.id}
                  id={game.id}
                  title={game.title}
                  image={game.image}
                  rating={game.rating}
                  isNew={(game as GameType).isNew}
                  category={(game as GameType).category || params.category}
                />
              ))}
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
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
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

