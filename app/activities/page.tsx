"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Clock, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState("any")
  const [selectedPrice, setSelectedPrice] = useState("any")

  const activities = [
    {
      id: 1,
      name: "Mountain Gorilla Trekking",
      location: "Bwindi Impenetrable Forest",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.9,
      reviews: 324,
      price: 700,
      duration: "Full Day",
      category: "Wildlife",
      description: "Trek through the forest to observe endangered mountain gorillas in their natural habitat.",
      highlights: ["Professional guides", "Small groups", "Conservation contribution", "Photo opportunities"],
    },
    {
      id: 2,
      name: "White Water Rafting",
      location: "Jinja, Source of the Nile",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.8,
      reviews: 156,
      price: 140,
      duration: "Half Day",
      category: "Adventure",
      description: "Experience world-class rapids on the mighty Nile River with expert guides.",
      highlights: ["Grade 5 rapids", "Safety equipment provided", "Lunch included", "Photo package available"],
    },
    {
      id: 3,
      name: "Queen Elizabeth Safari",
      location: "Queen Elizabeth National Park",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.7,
      reviews: 203,
      price: 250,
      duration: "Full Day",
      category: "Wildlife",
      description: "Spot lions, elephants, hippos and more in one of Uganda's most popular national parks.",
      highlights: ["Game drives", "Boat safari", "Tree climbing lions", "Kazinga Channel"],
    },
    {
      id: 4,
      name: "Chimpanzee Tracking",
      location: "Kibale Forest National Park",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.6,
      reviews: 178,
      price: 200,
      duration: "Half Day",
      category: "Wildlife",
      description: "Trek through the forest to observe chimpanzees in their natural habitat.",
      highlights: ["Professional guides", "Other primates", "Bird watching", "Forest experience"],
    },
    {
      id: 5,
      name: "Murchison Falls Boat Safari",
      location: "Murchison Falls National Park",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.8,
      reviews: 245,
      price: 120,
      duration: "3 Hours",
      category: "Nature",
      description: "Cruise along the Nile to the base of the powerful Murchison Falls.",
      highlights: ["Wildlife viewing", "Hippo pods", "Crocodiles", "Bird watching"],
    },
    {
      id: 6,
      name: "Sipi Falls Hiking",
      location: "Mount Elgon",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.5,
      reviews: 132,
      price: 80,
      duration: "Full Day",
      category: "Adventure",
      description: "Hike around the spectacular Sipi Falls on the slopes of Mount Elgon.",
      highlights: ["Three waterfalls", "Coffee tour", "Abseiling option", "Local culture"],
    },
    {
      id: 7,
      name: "Kampala City Tour",
      location: "Kampala",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.3,
      reviews: 98,
      price: 60,
      duration: "Half Day",
      category: "Cultural",
      description: "Explore Uganda's vibrant capital city with its markets, monuments and cultural sites.",
      highlights: ["Kasubi Tombs", "Gadaffi Mosque", "Craft markets", "Local cuisine"],
    },
    {
      id: 8,
      name: "Bungee Jumping",
      location: "Jinja",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.7,
      reviews: 87,
      price: 115,
      duration: "2 Hours",
      category: "Adventure",
      description: "Take the plunge with a 44-meter bungee jump over the Nile River.",
      highlights: ["Professional equipment", "Safety briefing", "Certificate", "Photos available"],
    },
  ]

  const filteredActivities = activities.filter((activity) => {
    const matchesSearch =
      activity.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      activity.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = selectedCategory === "all" || activity.category === selectedCategory

    const matchesDuration = selectedDuration === "any" || activity.duration === selectedDuration

    let matchesPrice = true
    if (selectedPrice === "under100") {
      matchesPrice = activity.price < 100
    } else if (selectedPrice === "100to200") {
      matchesPrice = activity.price >= 100 && activity.price <= 200
    } else if (selectedPrice === "200to500") {
      matchesPrice = activity.price > 200 && activity.price <= 500
    } else if (selectedPrice === "over500") {
      matchesPrice = activity.price > 500
    }

    return matchesSearch && matchesCategory && matchesDuration && matchesPrice
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search activities, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Activity Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Wildlife">Wildlife</SelectItem>
                  <SelectItem value="Adventure">Adventure</SelectItem>
                  <SelectItem value="Nature">Nature</SelectItem>
                  <SelectItem value="Cultural">Cultural</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Duration</SelectItem>
                  <SelectItem value="2 Hours">2-3 Hours</SelectItem>
                  <SelectItem value="Half Day">Half Day</SelectItem>
                  <SelectItem value="Full Day">Full Day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
            <div>
              <Select value={selectedPrice} onValueChange={setSelectedPrice}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="under100">Under $100</SelectItem>
                  <SelectItem value="100to200">$100 - $200</SelectItem>
                  <SelectItem value="200to500">$200 - $500</SelectItem>
                  <SelectItem value="over500">Over $500</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-3 flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("all")
                  setSelectedDuration("any")
                  setSelectedPrice("any")
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {filteredActivities.length} {filteredActivities.length === 1 ? "Activity" : "Activities"} Available
          </h2>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src={activity.image || "/placeholder.svg"} alt={activity.name} fill className="object-cover" />
                <Badge className="absolute top-2 left-2" variant="secondary">
                  {activity.category}
                </Badge>
                <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold">{activity.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{activity.name}</h3>
                  <div className="text-right">
                    <div className="text-xl font-bold text-brand-red">${activity.price}</div>
                    <div className="text-sm text-gray-500">per person</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{activity.location}</span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{activity.duration}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <Users className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">({activity.reviews} reviews)</span>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{activity.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.highlights.slice(0, 3).map((highlight, idx) => (
                    <Badge key={idx} variant="outline" className="bg-red-50">
                      {highlight}
                    </Badge>
                  ))}
                  {activity.highlights.length > 3 && (
                    <Badge variant="outline" className="bg-red-50">
                      +{activity.highlights.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button className="w-full bg-brand-red hover:bg-brand-red text-white">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No activities found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}

        {filteredActivities.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline">Load More Activities</Button>
          </div>
        )}
      </div>
    </div>
  )
}
