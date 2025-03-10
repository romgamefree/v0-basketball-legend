import Link from "next/link"
import { BasketballLogo } from "../components/basketball-logo"
import { StickyAds } from "../components/sticky-ads"
import { GameMenu } from "../components/game-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Basketball Legends",
  description:
    "Get in touch with the Basketball Legends team. We're here to help with any questions or feedback you may have.",
  openGraph: {
    title: "Contact Us - Basketball Legends",
    description:
      "Get in touch with the Basketball Legends team. We're here to help with any questions or feedback you may have.",
    url: "https://basketballlegends.example.com/contact",
    siteName: "Basketball Legends",
    images: [
      {
        url: "/basketball-og.jpg",
        width: 1200,
        height: 630,
        alt: "Basketball Legends Contact",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function ContactPage() {
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
            <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
            <p className="text-muted-foreground">
              Have questions, feedback, or suggestions? We'd love to hear from you! Fill out the form below and our team
              will get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll respond within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input id="first-name" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Doe" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message here..." className="min-h-[120px]" />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                    <CardDescription>Here are the ways you can reach us.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-sm text-muted-foreground">support@basketballlegends.example.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-xs text-muted-foreground">Monday to Friday, 9AM to 5PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          123 Game Street
                          <br />
                          Suite 456
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium">How do I report a bug?</h3>
                      <p className="text-sm text-muted-foreground">
                        Please use our contact form and select "Bug Report" as the subject.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">Can I suggest a new game?</h3>
                      <p className="text-sm text-muted-foreground">
                        We love hearing game suggestions. Use our contact form with "Game Suggestion" as the subject.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium">How can I advertise on your site?</h3>
                      <p className="text-sm text-muted-foreground">
                        For advertising inquiries, please email us at ads@basketballlegends.example.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
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

