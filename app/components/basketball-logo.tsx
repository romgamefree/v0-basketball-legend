import { Circle } from "lucide-react"

export function BasketballLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Basketball base */}
      <Circle className="h-full w-full fill-orange-500 text-orange-600" />

      {/* Basketball lines */}
      <div className="absolute inset-0">
        {/* Horizontal line */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-black/70 transform -translate-y-1/2"></div>

        {/* Vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-black/70 transform -translate-x-1/2"></div>

        {/* Curved lines */}
        <div className="absolute top-[15%] left-0 right-0 h-[2px] bg-black/70 transform rotate-12"></div>
        <div className="absolute bottom-[15%] left-0 right-0 h-[2px] bg-black/70 transform -rotate-12"></div>
      </div>
    </div>
  )
}

