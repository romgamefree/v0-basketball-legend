"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChromeExtensionAd } from "./chrome-extension-ad"

export function StickyAds() {
  const [showTopAd, setShowTopAd] = useState(true)
  const [showSideAd, setShowSideAd] = useState(true)

  return (
    <div className="space-y-4">
      {showTopAd && (
        <div className="relative rounded-lg overflow-hidden border">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 h-6 w-6 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowTopAd(false)}
          >
            <X className="h-3 w-3" />
          </Button>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Image
              src="/placeholder.svg?height=250&width=300"
              alt="Advertisement"
              width={300}
              height={250}
              className="w-full"
            />
          </a>
        </div>
      )}

      <ChromeExtensionAd />

      {showSideAd && (
        <div className="sticky top-20 space-y-4">
          <div className="relative rounded-lg overflow-hidden border">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 h-6 w-6 bg-background/80 backdrop-blur-sm"
              onClick={() => setShowSideAd(false)}
            >
              <X className="h-3 w-3" />
            </Button>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="/placeholder.svg?height=600&width=300"
                alt="Advertisement"
                width={300}
                height={600}
                className="w-full"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

