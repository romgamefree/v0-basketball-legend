import type React from "react"
import Link from "next/link"
import { ShoppingBasketIcon as Basketball, Trophy, Users, Gamepad2, Car, Sword, Brain, Puzzle } from "lucide-react"

export function GameMenu() {
  return (
    <div className="rounded-lg border overflow-hidden">
      <div className="bg-primary px-4 py-2">
        <h2 className="font-semibold text-primary-foreground">Game Categories</h2>
      </div>

      <div className="p-4 space-y-1">
        <CategoryLink href="/games/basketball" icon={<Basketball className="h-4 w-4" />} label="Basketball Games" />
        <CategoryLink href="/games/sports" icon={<Trophy className="h-4 w-4" />} label="Sports Games" />
        <CategoryLink href="/games/multiplayer" icon={<Users className="h-4 w-4" />} label="Multiplayer Games" />
        <CategoryLink href="/games/action" icon={<Gamepad2 className="h-4 w-4" />} label="Action Games" />
        <CategoryLink href="/games/racing" icon={<Car className="h-4 w-4" />} label="Racing Games" />
        <CategoryLink href="/games/adventure" icon={<Sword className="h-4 w-4" />} label="Adventure Games" />
        <CategoryLink href="/games/puzzle" icon={<Brain className="h-4 w-4" />} label="Puzzle Games" />
        <CategoryLink href="/games/strategy" icon={<Puzzle className="h-4 w-4" />} label="Strategy Games" />
      </div>

      <div className="bg-muted p-4">
        <h3 className="font-semibold text-sm mb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/tags/2-player"
            className="text-xs bg-background rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            2 Player
          </Link>
          <Link
            href="/tags/3d"
            className="text-xs bg-background rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            3D
          </Link>
          <Link
            href="/tags/nba"
            className="text-xs bg-background rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            NBA
          </Link>
          <Link
            href="/tags/dunking"
            className="text-xs bg-background rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Dunking
          </Link>
          <Link
            href="/tags/mobile"
            className="text-xs bg-background rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Mobile
          </Link>
          <Link
            href="/tags/free"
            className="text-xs bg-background rounded-full px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Free
          </Link>
        </div>
      </div>
    </div>
  )
}

function CategoryLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link href={href} className="flex items-center gap-2 p-2 rounded-md hover:bg-muted transition-colors">
      {icon}
      <span className="text-sm">{label}</span>
    </Link>
  )
}

