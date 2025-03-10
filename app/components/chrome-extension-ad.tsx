import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Chrome, Download } from "lucide-react"

export function ChromeExtensionAd() {
  return (
    <div className="rounded-lg border bg-card overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 p-4 text-white">
        <div className="flex items-center gap-2">
          <Chrome className="h-5 w-5" />
          <h3 className="font-bold">Chrome Extension</h3>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Basketball Legends Extension"
            width={48}
            height={48}
            className="rounded"
          />
          <div>
            <h4 className="font-semibold">Basketball Legends</h4>
            <p className="text-xs text-muted-foreground">Play games instantly</p>
          </div>
        </div>

        <p className="text-sm">
          Get instant access to all Basketball Legends games directly from your browser! No ads, faster loading, and
          offline play.
        </p>

        <div className="flex items-center gap-2 text-sm">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <span className="text-muted-foreground">(2,345)</span>
        </div>

        <Button className="w-full gap-2">
          <Download className="h-4 w-4" />
          Add to Chrome
        </Button>
      </div>
    </div>
  )
}

