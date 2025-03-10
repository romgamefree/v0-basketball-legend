"use client"

import { useState, useEffect } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GameFrameProps {
  gameUrl?: string
  title?: string
}

export function GameFrame({
  gameUrl = "https://www.basketballlegends.io/embed/basketball-legends-2020",
  title = "Basketball Legends Game",
}: GameFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showPlayOverlay, setShowPlayOverlay] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handlePlayClick = () => {
    setShowPlayOverlay(false)
  }

  return (
    <div className="aspect-video w-full bg-black relative rounded-lg overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}

      {showPlayOverlay && isLoaded && (
        <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10">
          <Button
            size="lg"
            className="rounded-full h-16 w-16 bg-primary hover:bg-primary/90 animate-pulse"
            onClick={handlePlayClick}
          >
            <Play className="h-8 w-8 fill-white" />
          </Button>
          <p className="mt-4 text-white font-bold text-xl">Play Now</p>
        </div>
      )}

      {isLoaded && (
        <iframe
          src={gameUrl}
          title={title}
          className="w-full h-full border-0"
          allowFullScreen
          style={{ visibility: showPlayOverlay ? "hidden" : "visible" }}
        ></iframe>
      )}
    </div>
  )
}

