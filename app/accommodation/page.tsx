"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Wifi, Coffee, Users, Search } from "lucide-react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"

export default function AccommodationPage() {
  const [searchLocation, setSearchLocation] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [guests, setGuests] = useState("1")
  const [priceRange, setPriceRange] = useState("")
  const [propertyType, setPropertyType] = useState("")

  const accommodations = [
    {
      id: 1,
      name: "Kampala Serena Hotel",
      location: "Kampala City Center",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.8,
      reviews: 324,
      price: 180,
      amenities: ["Wifi", "Pool", "Restaurant", "Spa"],
      type: "Hotel",
      description: "Luxury hotel in the heart of Kampala with modern amenities",
    },
    {
      id: 2,
      name: "Bwindi Lodge",
      location: "Bwindi Impenetrable Forest",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.9,
      reviews: 156,
      price: 320,
      amenities: ["Restaurant", "Bar", "Guided Tours", "Wifi"],
      type: "Eco Lodge",
      description: "Eco-friendly lodge perfect for gorilla trekking adventures",
    },
    {
      id: 3,
      name: "Nile River Explorers",
      location: "Jinja",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.7,
      reviews: 89,
      price: 95,
      amenities: ["Adventure Sports", "Restaurant", "Camping", "Equipment Rental"],
      type: "Adventure Lodge",
      description: "Adventure lodge offering white water rafting and extreme sports",
    },
    {
      id: 4,
      name: "Lake Mburo Safari Lodge",
      location: "Lake Mburo National Park",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.6,
      reviews: 203,
      price: 250,
      amenities: ["Game Drives", "Restaurant", "Bar", "Pool"],
      type: "Safari Lodge",
      description: "Safari lodge with stunning views of Lake Mburo",
    },
    {
      id: 5,
      name: "Entebbe Guesthouse",
      location: "Entebbe",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.4,
      reviews: 127,
      price: 65,
      amenities: ["Wifi", "Airport Transfer", "Breakfast", "Garden"],
      type: "Guesthouse",
      description: "Comfortable guesthouse near Entebbe International Airport",
    },
    {
      id: 6,
      name: "Murchison River Lodge",
      location: "Murchison Falls National Park",
      image: "/placeholder.svg?height=250&width=400",
      rating: 4.8,
      reviews: 178,
      price: 280,
      amenities: ["Game Drives", "Boat Safari", "Restaurant", "Bar"],
      type: "Safari Lodge",
      description: "Luxury safari lodge with access to Murchison Falls",
    },
  ]

  const filteredAccommodations = accommodations.filter((accommodation) => {
    const matchesLocation =
      searchLocation === "" ||
      accommodation.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
      accommodation.name.toLowerCase().includes(searchLocation.toLowerCase())

    let matchesPrice = true
    if (priceRange === "under100") {
      matchesPrice = accommodation.price < 100
    } else if (priceRange === "100to200") {
      matchesPrice = accommodation.price >= 100 && accommodation.price <= 200
    } else if (priceRange === "200to300") {
      matchesPrice = accommodation.price > 200 && accommodation.price <= 300
    } else if (priceRange === "over300") {
      matchesPrice = accommodation.price > 300
    }

    const matchesType = propertyType === "" || accommodation.type === propertyType

    return matchesLocation && matchesPrice && matchesType
  })

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi":
        return <Wifi className="h-4 w-4" />
      case "restaurant":
        return <Coffee className="h-4 w-4" />
      case "pool":
        return <Users className="h-4 w-4" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navigation />

      {/* Search Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Where are you going?"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="checkin">Check-in</Label>
                  <Input id="checkin" type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="checkout">Check-out</Label>
                  <Input id="checkout" type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Select value={guests} onValueChange={setGuests}>
                    <SelectTrigger>
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end">
                  <Button className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-48">
            <Label htmlFor="price-range">Price Range</Label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Any price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any price</SelectItem>
                <SelectItem value="under100">Under $100</SelectItem>
                <SelectItem value="100to200">$100 - $200</SelectItem>
                <SelectItem value="200to300">$200 - $300</SelectItem>
                <SelectItem value="over300">Over $300</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-48">
            <Label htmlFor="property-type">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                <SelectItem value="hotel">Hotel</SelectItem>
                <SelectItem value="eco-lodge">Eco Lodge</SelectItem>
                <SelectItem value="safari-lodge">Safari Lodge</SelectItem>
                <SelectItem value="guesthouse">Guesthouse</SelectItem>
                <SelectItem value="adventure-lodge">Adventure Lodge</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-full md:w-auto md:ml-auto self-end">
            <Button
              variant="outline"
              onClick={() => {
                setSearchLocation("")
                setPriceRange("")
                setPropertyType("")
              }}
            >
              Clear Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {filteredAccommodations.length} {filteredAccommodations.length === 1 ? "Property" : "Properties"} Available
          </h2>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="reviews">Most Reviews</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAccommodations.map((accommodation) => (
            <Card key={accommodation.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                  <Image
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {accommodation.type}
                  </Badge>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold">{accommodation.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">${accommodation.price}</div>
                      <div className="text-sm text-gray-500">per night</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{accommodation.location}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="ml-1 text-sm font-semibold">{accommodation.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({accommodation.reviews} reviews)</span>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">{accommodation.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1">
                      View Details
                    </Button>
                    <Button className="flex-1">Book Now</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredAccommodations.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No accommodations found</h3>
            <p className="text-gray-600">Try adjusting your filters or search terms</p>
          </div>
        )}

        {filteredAccommodations.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline">Load More Accommodations</Button>
          </div>
        )}
      </div>
    </div>
  )
}
