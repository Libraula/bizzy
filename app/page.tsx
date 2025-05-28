"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Star, Calendar, ArrowRight, Globe, Camera, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const destinations = [
    {
      id: 1,
      name: "Bwindi Impenetrable Forest",
      image: "/placeholder.svg?height=300&width=400",
      description: "Home to mountain gorillas",
      activities: ["Gorilla Trekking", "Bird Watching", "Nature Walks"],
      rating: 4.9,
      price: "From $700",
    },
    {
      id: 2,
      name: "Murchison Falls National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Uganda's largest national park",
      activities: ["Game Drives", "Boat Safaris", "Hiking"],
      rating: 4.8,
      price: "From $250",
    },
    {
      id: 3,
      name: "Jinja - Source of the Nile",
      image: "/placeholder.svg?height=300&width=400",
      description: "Adventure capital of East Africa",
      activities: ["White Water Rafting", "Bungee Jumping", "Kayaking"],
      rating: 4.7,
      price: "From $140",
    },
    {
      id: 4,
      name: "Queen Elizabeth National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Famous for tree-climbing lions",
      activities: ["Game Drives", "Boat Cruise", "Chimpanzee Tracking"],
      rating: 4.6,
      price: "From $300",
    },
    {
      id: 5,
      name: "Lake Mburo National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Perfect for walking safaris",
      activities: ["Walking Safari", "Boat Cruise", "Horse Riding"],
      rating: 4.5,
      price: "From $180",
    },
    {
      id: 6,
      name: "Kibale Forest National Park",
      image: "/placeholder.svg?height=300&width=400",
      description: "Primate capital of the world",
      activities: ["Chimpanzee Tracking", "Nature Walks", "Bird Watching"],
      rating: 4.7,
      price: "From $200",
    },
  ]

  const tourPackages = [
    {
      name: "Gorilla & Wildlife Safari",
      duration: "7 Days",
      destinations: ["Bwindi", "Queen Elizabeth", "Lake Mburo"],
      price: "$2,450",
      image: "/placeholder.svg?height=200&width=300",
      highlights: ["Gorilla Trekking", "Big 5 Safari", "Boat Cruises"],
    },
    {
      name: "Adventure & Culture Tour",
      duration: "5 Days",
      destinations: ["Jinja", "Kampala", "Entebbe"],
      price: "$1,200",
      image: "/placeholder.svg?height=200&width=300",
      highlights: ["White Water Rafting", "Cultural Sites", "City Tours"],
    },
    {
      name: "Complete Uganda Experience",
      duration: "12 Days",
      destinations: ["Bwindi", "Murchison", "Jinja", "Queen Elizabeth"],
      price: "$4,200",
      image: "/placeholder.svg?height=200&width=300",
      highlights: ["All Major Parks", "Adventure Sports", "Cultural Immersion"],
    },
  ]

  const whyChooseUs = [
    {
      icon: <Shield className="h-8 w-8 text-primary-red" />,
      title: "Licensed & Insured",
      description: "Fully licensed tour operator with comprehensive insurance coverage",
    },
    {
      icon: <Users className="h-8 w-8 text-primary-red" />,
      title: "Expert Local Guides",
      description: "Professional guides with deep knowledge of Uganda's wildlife and culture",
    },
    {
      icon: <Camera className="h-8 w-8 text-primary-red" />,
      title: "Unforgettable Experiences",
      description: "Create lasting memories with our carefully curated tours and activities",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary-red" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your Uganda adventure",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United States",
      text: "Bizzy Tours made my gorilla trekking experience unforgettable. The guides were knowledgeable and the accommodation was perfect.",
      rating: 5,
      type: "Tourist",
      tour: "Gorilla Safari",
    },
    {
      name: "David Chen",
      country: "Canada",
      text: "Amazing white water rafting experience! The team was professional and safety was their top priority.",
      rating: 5,
      type: "Tourist",
      tour: "Adventure Package",
    },
    {
      name: "Emma Williams",
      country: "United Kingdom",
      text: "From booking accommodation to arranging activities, everything was seamless. Highly recommend for Uganda travel.",
      rating: 5,
      type: "Tourist",
      tour: "Complete Uganda Tour",
    },
  ]

  const immigrationServices = [
    {
      title: "Work Permits",
      description: "Professional guidance for employment-based immigration",
      duration: "2-4 months",
      price: "From $500",
    },
    {
      title: "Investment Visas",
      description: "Business and investment immigration pathways",
      duration: "3-6 months",
      price: "From $1,000",
    },
    {
      title: "Permanent Residency",
      description: "Long-term settlement solutions",
      duration: "6-12 months",
      price: "From $1,500",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative brand-gradient text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Discover the Pearl of Africa</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Experience Uganda's incredible wildlife, breathtaking landscapes, and rich culture with our expertly
              guided tours. From gorilla trekking to Nile adventures - your African dream awaits!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-primary-red hover:bg-primary-grey text-lg px-8 py-4">
                <Globe className="mr-2 h-6 w-6" />
                <Link href="/activities">Explore Tours</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary-red text-lg px-8 py-4"
              >
                <Calendar className="mr-2 h-6 w-6" />
                <Link href="#packages">View Packages</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold">500+</div>
                <div className="text-lg opacity-90">Happy Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold">15+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-gold">50+</div>
                <div className="text-lg opacity-90">Tour Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Bizzy Tours?</h2>
            <p className="text-lg text-gray-600">Your trusted partner for unforgettable Uganda experiences</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section id="destinations" className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Uganda Destinations</h2>
            <p className="text-lg text-gray-600">Discover Uganda's most spectacular locations and wildlife</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
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
                  <div className="absolute bottom-4 left-4 bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {destination.price}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.activities.map((activity, idx) => (
                      <Badge key={idx} variant="secondary">
                        {activity}
                      </Badge>
                    ))}
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
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              <Link href="/destinations">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tour Packages */}
      <section id="packages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Tour Packages</h2>
            <p className="text-lg text-gray-600">Carefully crafted experiences for every type of traveler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{pkg.duration}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold">{pkg.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-red">{pkg.price}</div>
                      <div className="text-sm text-gray-500">per person</div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Destinations:</p>
                    <div className="flex flex-wrap gap-1">
                      {pkg.destinations.map((dest, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Highlights:</p>
                    <ul className="text-sm text-gray-700">
                      {pkg.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary-red rounded-full"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button className="w-full">Book This Package</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Travelers Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.country}</p>
                    </div>
                    <Badge variant="outline">{testimonial.tour}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Services - Secondary */}
      <section id="immigration" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Immigration Consultation Services</h2>
            <p className="text-lg text-gray-600">Planning to relocate to Uganda? We can help with that too!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {immigrationServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary-red">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{service.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting from:</span>
                      <span className="font-semibold text-primary-red">{service.price}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    <Link href="/immigration/consultation">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on Uganda Travel</h2>
          <p className="text-lg mb-8">Get travel tips, destination guides, and exclusive tour offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input placeholder="Enter your email" className="bg-white text-gray-900" />
            <Button variant="secondary">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
