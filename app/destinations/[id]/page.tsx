"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, Users, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"

export default function DestinationDetailPage() {
  const params = useParams()
  const id = params.id

  // Mock data - in real app this would come from API
  const destinations = {
    "1": {
      name: "Bwindi Impenetrable Forest",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Bwindi Impenetrable National Park is a UNESCO World Heritage Site located in southwestern Uganda. The park is famous for its population of endangered mountain gorillas and is one of the most biologically diverse areas on Earth.",
      activities: ["Gorilla Trekking", "Bird Watching", "Nature Walks", "Cultural Tours"],
      rating: 4.9,
      reviews: 324,
      price: "From $700",
      region: "Western Uganda",
      bestTime: "June to August, December to February",
      duration: "1-3 days",
      difficulty: "Moderate to Challenging",
      highlights: [
        "Home to nearly half of the world's mountain gorillas",
        "Over 400 species of plants",
        "120 mammal species including 11 primates",
        "350+ bird species",
        "UNESCO World Heritage Site",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival and Briefing",
          description: "Arrive at the park, check into accommodation, and attend gorilla trekking briefing",
        },
        {
          day: "Day 2",
          title: "Gorilla Trekking",
          description: "Early morning gorilla trekking experience with professional guides",
        },
        {
          day: "Day 3",
          title: "Cultural Experience",
          description: "Visit local Batwa communities and learn about their traditional lifestyle",
        },
      ],
      included: [
        "Gorilla trekking permits",
        "Professional guide services",
        "Park entrance fees",
        "Transportation within the park",
        "Cultural community visit",
      ],
      notIncluded: ["Accommodation", "Meals", "International flights", "Travel insurance", "Personal expenses"],
    },
    "2": {
      name: "Murchison Falls National Park",
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Uganda's largest national park, Murchison Falls is bisected by the Victoria Nile, which plunges 45m over the remnant rift valley wall, creating the dramatic Murchison Falls.",
      activities: ["Game Drives", "Boat Safaris", "Hiking", "Fishing"],
      rating: 4.8,
      reviews: 256,
      price: "From $250",
      region: "Northern Uganda",
      bestTime: "December to February, June to September",
      duration: "2-4 days",
      difficulty: "Easy to Moderate",
      highlights: [
        "Spectacular Murchison Falls waterfall",
        "Big 5 wildlife viewing",
        "Nile River boat safaris",
        "Over 450 bird species",
        "Largest national park in Uganda",
      ],
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival and Evening Game Drive",
          description: "Arrive at the park and enjoy an evening game drive",
        },
        {
          day: "Day 2",
          title: "Morning Game Drive & Boat Safari",
          description: "Morning game drive followed by afternoon boat safari to the falls",
        },
        {
          day: "Day 3",
          title: "Top of the Falls Hike",
          description: "Hike to the top of Murchison Falls for spectacular views",
        },
      ],
      included: [
        "Park entrance fees",
        "Game drive vehicle",
        "Boat safari",
        "Professional guide",
        "Hiking to top of falls",
      ],
      notIncluded: ["Accommodation", "Meals", "Fishing permits", "Travel insurance", "Personal expenses"],
    },
    // Add more destinations as needed
  }

  const destination = destinations[id as keyof typeof destinations]

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Link href="/destinations">
            <Button>Back to Destinations</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      {/* Hero Image */}
      <div className="relative h-96">
        <Image src={destination.image || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-brand-red">{destination.region}</Badge>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">{destination.rating}</span>
                <span className="opacity-80">({destination.reviews} reviews)</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
            <p className="text-xl opacity-90">{destination.price}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{destination.description}</p>
              </CardContent>
            </Card>

            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {destination.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-brand-red rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Sample Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle>Sample Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {destination.itinerary.map((day, index) => (
                    <div key={index} className="border-l-4 border-brand-red pl-4">
                      <h4 className="font-semibold text-brand-red">
                        {day.day}: {day.title}
                      </h4>
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* What's Included */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-brand-red">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {destination.included.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {destination.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-gray-600">{destination.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Difficulty</p>
                    <p className="text-sm text-gray-600">{destination.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Best Time to Visit</p>
                    <p className="text-sm text-gray-600">{destination.bestTime}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card>
              <CardHeader>
                <CardTitle>Available Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {destination.activities.map((activity, index) => (
                    <Badge key={index} variant="secondary">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Booking */}
            <Card>
              <CardHeader>
                <CardTitle>Ready to Book?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-red mb-2">{destination.price}</div>
                  <p className="text-sm text-gray-600">Starting price per person</p>
                </div>
                <Button className="w-full" size="lg">
                  Book This Experience
                </Button>
                <Button variant="outline" className="w-full">
                  Contact for Custom Tour
                </Button>
              </CardContent>
            </Card>

            {/* Safety */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-brand-red" />
                  Safety & Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Professional guides provided</li>
                  <li>• Safety equipment included</li>
                  <li>• Emergency protocols in place</li>
                  <li>• Insurance recommended</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
