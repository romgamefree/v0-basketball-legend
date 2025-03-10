import Link from "next/link"
import { GameFrame } from "@/app/components/game-frame"
import { GameMenu } from "@/app/components/game-menu"
import { StickyAds } from "@/app/components/sticky-ads"
import { GameCard } from "@/app/components/game-card"
import { BasketballLogo } from "@/app/components/basketball-logo"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface GamePageProps {
  params: {
    category: string
    slug: string
  }
}

// This would typically come from a database or API
const games = {
  "basketball-legends-2020": {
    title: "Basketball Legends 2020",
    description:
      "Play the ultimate basketball game featuring legendary players. Compete in tournaments, improve your skills, and become a basketball legend!",
    rating: 4.8,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/basketball-legends-2020",
    category: "basketball",
    tags: ["basketball", "sports", "multiplayer"],
    howToPlay:
      "Use the arrow keys to move your player. Press Z to pass and X to shoot. Score more points than your opponent to win the game. You can play against the computer or challenge a friend in 2-player mode.",
    relatedGames: ["basketball-stars", "dunkers-2", "basketball-io"],
  },
  "basketball-stars": {
    title: "Basketball Stars",
    description:
      "Challenge the best basketball stars in intense 1-on-1 matches or team up for 2-on-2 basketball action!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/basketball-stars",
    category: "basketball",
    tags: ["basketball", "sports", "multiplayer"],
    howToPlay:
      "Use WASD or arrow keys to move. Press J to shoot and K to jump. Time your shots perfectly to score more points.",
    relatedGames: ["basketball-legends-2020", "dunkers-2", "basketball-io"],
  },
  "dunkers-2": {
    title: "Dunkers 2",
    description:
      "Master the art of dunking in this hilarious physics-based basketball game. Pull off amazing dunks and tricks!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/dunkers-2",
    category: "basketball",
    tags: ["basketball", "sports", "funny"],
    howToPlay:
      "Press UP to jump and DOWN to dunk. Time your jumps and dunks perfectly to score points and defeat your opponent.",
    relatedGames: ["basketball-legends-2020", "basketball-stars", "basketball-io"],
  },
  "basketball-io": {
    title: "Basketball.io",
    description:
      "Compete against players from around the world in this multiplayer basketball io game. Score hoops and climb the leaderboard!",
    rating: 4.3,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/basketball-io",
    category: "basketball",
    tags: ["basketball", "sports", "io", "multiplayer"],
    howToPlay:
      "Use your mouse to aim and shoot. Hold down the left mouse button to increase power, then release to shoot. Score as many points as possible to climb the leaderboard.",
    relatedGames: ["basketball-legends-2020", "basketball-stars", "dunkers-2"],
  },
  "basketball-legends-2023": {
    title: "Basketball Legends 2023",
    description:
      "The newest edition of the popular Basketball Legends series with updated players, teams, and graphics!",
    rating: 4.9,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/basketball-legends-2023",
    category: "basketball",
    tags: ["basketball", "sports", "multiplayer", "new"],
    howToPlay:
      "Use the arrow keys to move your player. Press Z to pass and X to shoot. Score more points than your opponent to win the game. You can play against the computer or challenge a friend in 2-player mode.",
    relatedGames: ["basketball-legends-2020", "basketball-stars", "street-basketball"],
  },
  "street-basketball": {
    title: "Street Basketball",
    description: "Experience the thrill of street basketball with freestyle moves, tricks, and intense matches!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/street-basketball",
    category: "basketball",
    tags: ["basketball", "sports", "street", "new"],
    howToPlay:
      "Use WASD or arrow keys to move. Press J for special moves, K to shoot, and L to defend. Perform combos to earn extra points and impress the crowd.",
    relatedGames: ["basketball-legends-2023", "basketball-clash", "basketball-stars"],
  },
  "basketball-clash": {
    title: "Basketball Clash",
    description: "Go head-to-head against opponents in quick basketball matches. Test your skills and reflexes!",
    rating: 4.4,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/basketball-clash",
    category: "basketball",
    tags: ["basketball", "sports", "pvp", "new"],
    howToPlay:
      "Swipe to aim and shoot. Time your shots perfectly to increase accuracy. Use special abilities to gain an advantage over your opponent.",
    relatedGames: ["basketball-legends-2023", "street-basketball", "basketball-stars"],
  },
  "match-3": {
    title: "Match 3",
    description: "A classic match-3 puzzle game. Connect colorful gems and solve challenging puzzles!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.puzzlegames.io/embed/match-3",
    category: "puzzle",
    tags: ["puzzle", "match-3", "casual"],
    howToPlay:
      "Swap adjacent gems to create matches of 3 or more of the same color. Complete level objectives to progress through the game.",
    relatedGames: ["brain-teaser", "sudoku-master"],
  },
  "brain-teaser": {
    title: "Brain Teaser",
    description: "Challenge your mind with a variety of brain teasers and logic puzzles!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.puzzlegames.io/embed/brain-teaser",
    category: "puzzle",
    tags: ["puzzle", "brain", "logic"],
    howToPlay:
      "Solve each puzzle by finding patterns, using logic, and thinking outside the box. Each level presents a unique challenge.",
    relatedGames: ["match-3", "sudoku-master"],
  },
  "sudoku-master": {
    title: "Sudoku Master",
    description: "The ultimate Sudoku experience with multiple difficulty levels and helpful hints!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.puzzlegames.io/embed/sudoku-master",
    category: "puzzle",
    tags: ["puzzle", "sudoku", "numbers"],
    howToPlay:
      "Fill the 9×9 grid with digits so that each column, each row, and each of the nine 3×3 subgrids contains all of the digits from 1 to 9.",
    relatedGames: ["match-3", "brain-teaser"],
  },
  "basketball-legends-2019": {
    title: "Basketball Legends 2019",
    description: "The classic Basketball Legends game that started it all. Experience the original gameplay that fans love!",
    rating: 4.2,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.basketballlegends.io/embed/basketball-legends-2019",
    category: "basketball",
    tags: ["basketball", "sports", "classic"],
    howToPlay:
      "Use the arrow keys to move your player. Press Z to pass and X to shoot. Score more points than your opponent to win the game.",
    relatedGames: ["basketball-legends-2020", "basketball-stars", "basketball-legends-2023"],
  },
  "soccer-stars": {
    title: "Soccer Stars",
    description: "Play exciting soccer matches with simple controls and strategic gameplay!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.sportsgames.io/embed/soccer-stars",
    category: "sports",
    tags: ["sports", "soccer", "multiplayer"],
    howToPlay:
      "Drag and release to shoot. Use angles and power to score goals. Play against the computer or challenge a friend in multiplayer mode.",
    relatedGames: ["football-legends", "hockey-stars", "tennis-masters"],
  },
  "tennis-masters": {
    title: "Tennis Masters",
    description: "Experience the thrill of professional tennis with realistic gameplay and tournaments!",
    rating: 4.4,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.sportsgames.io/embed/tennis-masters",
    category: "sports",
    tags: ["sports", "tennis", "tournament"],
    howToPlay:
      "Use the arrow keys to move your player. Press Z for a normal shot and X for a special shot. Time your shots perfectly to win points.",
    relatedGames: ["soccer-stars", "baseball-pro", "hockey-stars"],
  },
  "baseball-pro": {
    title: "Baseball Pro",
    description: "Step up to the plate in this realistic baseball simulation game!",
    rating: 4.3,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.sportsgames.io/embed/baseball-pro",
    category: "sports",
    tags: ["sports", "baseball", "simulation"],
    howToPlay:
      "As a batter, time your swing with the spacebar. As a pitcher, use the arrow keys to select pitch type and location. Play a full season or quick matches.",
    relatedGames: ["soccer-stars", "tennis-masters", "football-legends"],
  },
  "football-legends": {
    title: "Football Legends",
    description: "Play as legendary football players in this action-packed sports game!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.sportsgames.io/embed/football-legends",
    category: "sports",
    tags: ["sports", "football", "legends", "new"],
    howToPlay:
      "Use the arrow keys to move your player. Press Z to pass, X to shoot, and C for special moves. Score touchdowns and win the championship!",
    relatedGames: ["soccer-stars", "hockey-stars", "basketball-legends-2023"],
  },
  "hockey-stars": {
    title: "Hockey Stars",
    description: "Fast-paced hockey action with simple controls and exciting gameplay!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.sportsgames.io/embed/hockey-stars",
    category: "sports",
    tags: ["sports", "hockey", "multiplayer"],
    howToPlay:
      "Drag and release to shoot the puck. Use angles and power to score goals. Play against the computer or challenge a friend in multiplayer mode.",
    relatedGames: ["soccer-stars", "football-legends", "tennis-masters"],
  },
  "battle-royale": {
    title: "Battle Royale",
    description: "Survive and be the last player standing in this intense multiplayer battle royale game!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.multiplayergames.io/embed/battle-royale",
    category: "multiplayer",
    tags: ["multiplayer", "battle royale", "action", "survival"],
    howToPlay:
      "Use WASD to move and mouse to aim and shoot. Collect weapons and items to increase your chances of survival. The last player standing wins!",
    relatedGames: ["team-fortress", "zombie-shooter", "super-fighters"],
  },
  "team-fortress": {
    title: "Team Fortress",
    description: "Join a team and compete in objective-based multiplayer matches with unique character classes!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.multiplayergames.io/embed/team-fortress",
    category: "multiplayer",
    tags: ["multiplayer", "team", "shooter", "classes"],
    howToPlay:
      "Use WASD to move and mouse to aim and shoot. Each class has unique abilities activated with Q and E. Work with your team to complete objectives and defeat the enemy team.",
    relatedGames: ["battle-royale", "super-fighters", "zombie-shooter"],
  },
  "super-fighters": {
    title: "Super Fighters",
    description: "Engage in epic battles with powerful fighters in this action-packed fighting game!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.actiongames.io/embed/super-fighters",
    category: "action",
    tags: ["action", "fighting", "multiplayer"],
    howToPlay:
      "Use the arrow keys to move and jump. Press A, S, and D for different attacks. Combine moves to perform special combos and defeat your opponents.",
    relatedGames: ["ninja-warrior", "zombie-shooter", "battle-royale"],
  },
  "ninja-warrior": {
    title: "Ninja Warrior",
    description: "Test your skills as a ninja warrior in this challenging action platformer!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.actiongames.io/embed/ninja-warrior",
    category: "action",
    tags: ["action", "ninja", "platformer"],
    howToPlay:
      "Use the arrow keys to move and jump. Press Z to attack and X to use special abilities. Collect power-ups and defeat enemies to progress through levels.",
    relatedGames: ["super-fighters", "zombie-shooter", "jungle-adventure"],
  },
  "zombie-shooter": {
    title: "Zombie Shooter",
    description: "Survive the zombie apocalypse in this intense first-person shooter game!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.actiongames.io/embed/zombie-shooter",
    category: "action",
    tags: ["action", "zombie", "shooter", "survival"],
    howToPlay:
      "Use WASD to move and mouse to aim and shoot. Press R to reload and F to use special items. Survive waves of zombies and complete objectives to progress.",
    relatedGames: ["super-fighters", "ninja-warrior", "battle-royale"],
  },
  "speed-racer": {
    title: "Speed Racer",
    description: "Race at high speeds through challenging tracks in this exciting racing game!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.racinggames.io/embed/speed-racer",
    category: "racing",
    tags: ["racing", "cars", "speed"],
    howToPlay:
      "Use the arrow keys to control your car. UP to accelerate, DOWN to brake, LEFT and RIGHT to steer. Collect power-ups and avoid obstacles to win races.",
    relatedGames: ["drift-kings", "moto-x3m"],
  },
  "drift-kings": {
    title: "Drift Kings",
    description: "Master the art of drifting in this stylish racing game!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.racinggames.io/embed/drift-kings",
    category: "racing",
    tags: ["racing", "drift", "cars"],
    howToPlay:
      "Use the arrow keys to control your car. Hold SPACE while turning to drift. Earn points for drifting and complete challenges to unlock new cars and tracks.",
    relatedGames: ["speed-racer", "moto-x3m"],
  },
  "moto-x3m": {
    title: "Moto X3M",
    description: "Perform stunts and race through obstacle courses in this motorcycle racing game!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.racinggames.io/embed/moto-x3m",
    category: "racing",
    tags: ["racing", "motorcycle", "stunts"],
    howToPlay:
      "Use the arrow keys to control your motorcycle. UP to accelerate, DOWN to brake, LEFT and RIGHT to balance. Perform flips and stunts to earn time bonuses.",
    relatedGames: ["speed-racer", "drift-kings"],
  },
  "treasure-hunter": {
    title: "Treasure Hunter",
    description: "Embark on an epic adventure to find hidden treasures and solve ancient mysteries!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.adventuregames.io/embed/treasure-hunter",
    category: "adventure",
    tags: ["adventure", "exploration", "puzzle"],
    howToPlay:
      "Use the arrow keys to move your character. Press Z to interact with objects and X to use items. Solve puzzles and find treasures to progress through the game.",
    relatedGames: ["island-survival", "jungle-adventure"],
  },
  "island-survival": {
    title: "Island Survival",
    description: "Survive on a deserted island by gathering resources, crafting items, and building shelter!",
    rating: 4.5,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.adventuregames.io/embed/island-survival",
    category: "adventure",
    tags: ["adventure", "survival", "crafting"],
    howToPlay:
      "Use WASD to move. Press E to interact with objects and I to open inventory. Gather resources, craft items, and build shelter to survive on the island.",
    relatedGames: ["treasure-hunter", "jungle-adventure"],
  },
  "jungle-adventure": {
    title: "Jungle Adventure",
    description: "Navigate through a dangerous jungle filled with wild animals, traps, and hidden treasures!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.adventuregames.io/embed/jungle-adventure",
    category: "adventure",
    tags: ["adventure", "jungle", "platformer"],
    howToPlay:
      "Use the arrow keys to move and jump. Press Z to attack and X to use special abilities. Collect treasures and avoid dangers to progress through the jungle.",
    relatedGames: ["treasure-hunter", "island-survival", "ninja-warrior"],
  },
  "tower-defense": {
    title: "Tower Defense",
    description: "Defend your base by strategically placing towers to stop waves of enemies!",
    rating: 4.6,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.strategygames.io/embed/tower-defense",
    category: "strategy",
    tags: ["strategy", "tower defense", "tactical"],
    howToPlay:
      "Click on empty spots to build towers. Upgrade towers by clicking on them and selecting upgrades. Defend against waves of enemies to win the game.",
    relatedGames: ["empire-builder", "chess-master"],
  },
  "empire-builder": {
    title: "Empire Builder",
    description: "Build and expand your empire through strategic resource management and conquest!",
    rating: 4.7,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.strategygames.io/embed/empire-builder",
    category: "strategy",
    tags: ["strategy", "empire", "management"],
    howToPlay:
      "Click on buildings to construct them. Manage resources, research technologies, and build armies to expand your empire. Conquer neighboring territories to win.",
    relatedGames: ["tower-defense", "chess-master"],
  },
  "chess-master": {
    title: "Chess Master",
    description: "Test your strategic thinking in this classic game of chess with multiple difficulty levels!",
    rating: 4.8,
    image: "/placeholder.svg?height=150&width=250",
    gameUrl: "https://www.strategygames.io/embed/chess-master",
    category: "strategy",
    tags: ["strategy", "chess", "board game"],
    howToPlay:
      "Click on a piece to select it, then click on a valid square to move. Capture opponent's pieces and checkmate their king to win the game.",
    relatedGames: ["tower-defense", "empire-builder"],
  },
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const game = games[params.slug as keyof typeof games]

  if (!game) {
    return {
      title: "Game Not Found",
      description: "The requested game could not be found.",
    }
  }

  return {
    title: `${game.title} - Play Free Online | Basketball Legends`,
    description: game.description,
    openGraph: {
      title: `${game.title} - Play Free Online | Basketball Legends`,
      description: game.description,
      url: `https://basketballlegends.example.com/games/${params.category}/${params.slug}`,
      siteName: "Basketball Legends",
      images: [
        {
          url: game.image,
          width: 1200,
          height: 630,
          alt: game.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  }
}

export default function GamePage({ params }: GamePageProps) {
  const game = games[params.slug as keyof typeof games]

  if (!game) {
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span>/</span>
              <Link href={`/games/${game.category}`} className="hover:text-primary">
                {game.category.charAt(0).toUpperCase() + game.category.slice(1)} Games
              </Link>
              <span>/</span>
              <span className="text-foreground">{game.title}</span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight">{game.title}</h1>
            <p className="text-muted-foreground">{game.description}</p>

            <div className="relative rounded-lg overflow-hidden border shadow-lg">
              <GameFrame gameUrl={game.gameUrl} title={game.title} />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs flex items-center gap-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{game.rating}/5</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {game.tags.map((tag) => (
                <Link href={`/tags/${tag}`} key={tag}>
                  <Button size="sm" variant="outline" className="rounded-full">
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </Button>
                </Link>
              ))}
            </div>

            <div className="p-4 bg-muted rounded-lg">
              <h2 className="font-semibold mb-2">How to Play</h2>
              <p className="text-sm text-muted-foreground">{game.howToPlay}</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Related Games</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {game.relatedGames.map((relatedGameId) => {
                const relatedGame = games[relatedGameId as keyof typeof games]
                if (!relatedGame) return null

                return (
                  <GameCard
                    key={relatedGameId}
                    id={relatedGameId}
                    title={relatedGame.title}
                    image={relatedGame.image}
                    rating={relatedGame.rating}
                    category={relatedGame.category}
                  />
                )
              })}
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

