"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function DestinationsPage() {
  const allDestinations = [
    {
      id: 1,
      name: "Bwindi Impenetrable Forest",
      image: "/placeholder.svg?height=300&width=400",
      description: "Home to mountain gorillas and diverse wildlife",
      activities: ["Gorilla Trekking", "Bird Watching", "Nature Walks", "Cultural Tours"],
      rating: 4.9,
      price: "From $700",
      region: "Western Uganda",
    },
    {
      id: 2,
      name: "Murchison Falls National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Uganda's largest national park with spectacular waterfalls",
      activities: ["Game Drives", "Boat Safaris", "Hiking", "Fishing"],
      rating: 4.8,
      price: "From $250",
      region: "Northern Uganda",
    },
    {
      id: 3,
      name: "Jinja - Source of the Nile",
      image: "/placeholder.svg?height=300&width=400",
      description: "Adventure capital of East Africa",
      activities: ["White Water Rafting", "Bungee Jumping", "Kayaking", "Quad Biking"],
      rating: 4.7,
      price: "From $140",
      region: "Eastern Uganda",
    },
    {
      id: 4,
      name: "Queen Elizabeth National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Famous for tree-climbing lions and diverse ecosystems",
      activities: ["Game Drives", "Boat Cruise", "Chimpanzee Tracking", "Bird Watching"],
      rating: 4.6,
      price: "From $300",
      region: "Western Uganda",
    },
    {
      id: 5,
      name: "Lake Mburo National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Perfect for walking safaris and zebra viewing",
      activities: ["Walking Safari", "Boat Cruise", "Horse Riding", "Night Game Drives"],
      rating: 4.5,
      price: "From $180",
      region: "Western Uganda",
    },
    {
      id: 6,
      name: "Kibale Forest National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Primate capital of the world",
      activities: ["Chimpanzee Tracking", "Nature Walks", "Bird Watching", "Bigodi Swamp Walk"],
      rating: 4.7,
      price: "From $200",
      region: "Western Uganda",
    },
    {
      id: 7,
      name: "Mount Elgon National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Ancient volcanic mountain with stunning waterfalls",
      activities: ["Mountain Climbing", "Sipi Falls", "Cave Exploration", "Coffee Tours"],
      rating: 4.4,
      price: "From $120",
      region: "Eastern Uganda",
    },
    {
      id: 8,
      name: "Kidepo Valley National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Remote wilderness with unique wildlife",
      activities: ["Game Drives", "Cultural Tours", "Nature Walks", "Bird Watching"],
      rating: 4.8,
      price: "From $400",
      region: "Northern Uganda",
    },
    {
      id: 9,
      name: "Lake Bunyonyi",
      image: "/placeholder.svg?height=300&width=400",
      description: "One of the deepest lakes in Africa",
      activities: ["Canoeing", "Island Hopping", "Swimming", "Cultural Tours"],
      rating: 4.6,
      price: "From $80",
      region: "Western Uganda",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <div className="brand-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Uganda's Amazing Destinations</h1>
          <p className="text-xl">From wildlife safaris to adventure sports - discover what makes Uganda special</p>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.price}
                </div>
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {destination.region}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.activities.slice(0, 3).map((activity, idx) => (
                    <Badge key={idx} variant="outline">
                      {activity}
                    </Badge>
                  ))}
                  {destination.activities.length > 3 && (
                    <Badge variant="outline">+{destination.activities.length - 3} more</Badge>
                  )}
                </div>
                <Button className="w-full">
                  <Link href={`/destinations/${destination.id}`} className="w-full flex items-center justify-center">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
