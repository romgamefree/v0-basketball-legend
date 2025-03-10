import type { MetadataRoute } from "next"

// This would typically come from a database or API
const games = [
  { id: "basketball-legends-2020", category: "basketball" },
  { id: "basketball-stars", category: "basketball" },
  { id: "dunkers-2", category: "basketball" },
  { id: "basketball-io", category: "basketball" },
  { id: "basketball-legends-2023", category: "basketball" },
  { id: "street-basketball", category: "basketball" },
  { id: "basketball-clash", category: "basketball" },
  { id: "soccer-stars", category: "sports" },
  { id: "tennis-masters", category: "sports" },
  { id: "baseball-pro", category: "sports" },
  { id: "football-legends", category: "sports" },
  { id: "hockey-stars", category: "sports" },
]

const categories = ["basketball", "sports", "multiplayer", "action", "racing", "adventure", "puzzle", "strategy", "new"]

const tags = ["2-player", "3d", "nba", "dunking", "mobile", "free"]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://basketballlegends.example.com"

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  // Category pages
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/games/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }))

  // Tag pages
  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/tags/${tag}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }))

  // Game pages
  const gamePages = games.map((game) => ({
    url: `${baseUrl}/games/${game.category}/${game.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...mainPages, ...categoryPages, ...tagPages, ...gamePages]
}

