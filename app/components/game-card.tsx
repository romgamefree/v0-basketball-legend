import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface GameCardProps {
  id: string
  title: string
  image: string
  rating: number
  isNew?: boolean
  category?: string
}

export function GameCard({ id, title, image, rating, isNew, category = "basketball" }: GameCardProps) {
  return (
    <Link href={`/games/${category}/${id}`} className="group">
      <div className="rounded-lg overflow-hidden border bg-card transition-all hover:shadow-md">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={250}
            height={150}
            className="w-full object-cover aspect-video group-hover:scale-105 transition-transform"
          />

          <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-md px-2 py-1 text-xs flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span>{rating}/5</span>
          </div>

          {isNew && (
            <Badge variant="secondary" className="absolute top-2 left-2">
              New
            </Badge>
          )}
        </div>

        <div className="p-3">
          <h3 className="font-medium line-clamp-1">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">Play Now</p>
        </div>
      </div>
    </Link>
  )
}

