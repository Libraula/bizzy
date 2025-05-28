"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, MapPin, Phone, Mail, CheckCircle, FileText, Users, Shield } from "lucide-react"
import { format } from "date-fns"
import { Navigation } from "@/components/navigation"

export default function ConsultationPage() {
  const [date, setDate] = useState<Date>()
  const [selectedService, setSelectedService] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const consultationTypes = [
    {
      id: "work-permit",
      name: "Work Permit Consultation",
      duration: "60 min",
      price: "$150",
      description:
        "Comprehensive guidance for employment-based immigration including document preparation and application process.",
    },
    {
      id: "investment-visa",
      name: "Investment Visa Consultation",
      duration: "90 min",
      price: "$200",
      description:
        "Expert advice on business and investment immigration pathways, including minimum investment requirements.",
    },
    {
      id: "residency",
      name: "Permanent Residency Consultation",
      duration: "75 min",
      price: "$175",
      description:
        "Complete guidance on obtaining permanent residency status in Uganda with timeline and requirements.",
    },
    {
      id: "business-setup",
      name: "Business Setup Consultation",
      duration: "60 min",
      price: "$150",
      description: "Assistance with company registration, business permits, and regulatory compliance in Uganda.",
    },
    {
      id: "family-visa",
      name: "Family Visa Consultation",
      duration: "45 min",
      price: "$125",
      description: "Support for family reunification visas and dependent applications.",
    },
  ]

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"]

  const immigrationServices = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Document Preparation",
      description: "Complete assistance with all required documentation and forms",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Application Support",
      description: "End-to-end support throughout the application process",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Legal Compliance",
      description: "Ensure full compliance with Uganda immigration laws",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Timeline Management",
      description: "Clear timelines and regular progress updates",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <Navigation />

      {/* Hero Section */}
      <div className="brand-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Expert Immigration Guidance</h1>
          <p className="text-xl mb-6">
            Professional consultation services to help you navigate Uganda's immigration process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold">15+</div>
              <div className="opacity-90">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold">500+</div>
              <div className="opacity-90">Successful Applications</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-gold">98%</div>
              <div className="opacity-90">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Immigration Services</h2>
          <p className="text-lg text-gray-600">Comprehensive support for all your immigration needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {immigrationServices.map((service, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center mb-4 text-primary-red">{service.icon}</div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Consultation Types */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Choose Your Consultation Type</CardTitle>
                <CardDescription>Select the immigration service that best matches your needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {consultationTypes.map((type) => (
                  <div
                    key={type.id}
                    className={`p-6 border rounded-lg cursor-pointer transition-all ${
                      selectedService === type.id
                        ? "border-brand-red bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedService(type.id)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-2">{type.name}</h3>
                        <p className="text-sm text-gray-600 mb-3">{type.description}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {type.duration}
                          </div>
                          <div className="font-semibold text-brand-red">{type.price}</div>
                        </div>
                      </div>
                      {selectedService === type.id && <CheckCircle className="h-5 w-5 text-brand-red flex-shrink-0" />}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Booking Form */}
            {selectedService && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Book Your Consultation</CardTitle>
                  <CardDescription>Fill in your details and select a convenient time</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="nationality">Current Nationality</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="ke">Kenya</SelectItem>
                        <SelectItem value="tz">Tanzania</SelectItem>
                        <SelectItem value="rw">Rwanda</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="currentLocation">Current Location</Label>
                    <Input id="currentLocation" placeholder="Where are you currently located?" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div>
                      <Label>Preferred Time</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="consultationType">Consultation Format</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select consultation format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="video">Video Call (Zoom/Teams)</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="inperson">In-Person (Kampala Office)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Tell Us About Your Immigration Goals</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your immigration objectives, timeline, and any specific questions you have..."
                      rows={4}
                    />
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">What to Expect:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Detailed assessment of your immigration options</li>
                      <li>• Clear timeline and process explanation</li>
                      <li>• Document checklist and requirements</li>
                      <li>• Cost breakdown and fee structure</li>
                      <li>• Next steps and action plan</li>
                    </ul>
                  </div>

                  <Button className="w-full bg-brand-red hover:bg-red-700" size="lg">
                    Book Consultation - {consultationTypes.find((t) => t.id === selectedService)?.price}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Consultant Info */}
            <Card>
              <CardHeader>
                <CardTitle>Expert Immigration Consultants</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <span className="text-brand-red font-semibold">JM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">John Mukasa</h4>
                    <p className="text-sm text-gray-600">Senior Immigration Consultant</p>
                    <p className="text-sm text-gray-500">15+ years experience</p>
                    <p className="text-xs text-gray-500">Specializes in work permits & business visas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">SA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Achieng</h4>
                    <p className="text-sm text-gray-600">Business Immigration Specialist</p>
                    <p className="text-sm text-gray-500">12+ years experience</p>
                    <p className="text-xs text-gray-500">Expert in investment visas & company setup</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">+256 785 079 561</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">+256 200 949 561</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">info@bizzytours.ug</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm">Kampala, Uganda</span>
                </div>
              </CardContent>
            </Card>

            {/* Process Steps */}
            <Card>
              <CardHeader>
                <CardTitle>Consultation Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs font-semibold text-brand-red">
                    1
                  </div>
                  <div>
                    <p className="text-sm font-medium">Book Consultation</p>
                    <p className="text-xs text-gray-600">Select service and preferred time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs font-semibold text-brand-red">
                    2
                  </div>
                  <div>
                    <p className="text-sm font-medium">Initial Assessment</p>
                    <p className="text-xs text-gray-600">Discuss your goals and current situation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs font-semibold text-brand-red">
                    3
                  </div>
                  <div>
                    <p className="text-sm font-medium">Document Review</p>
                    <p className="text-xs text-gray-600">Upload and review required documents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs font-semibold text-brand-red">
                    4
                  </div>
                  <div>
                    <p className="text-sm font-medium">Action Plan</p>
                    <p className="text-xs text-gray-600">Receive detailed roadmap and next steps</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center text-xs font-semibold text-brand-red">
                    5
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ongoing Support</p>
                    <p className="text-xs text-gray-600">Continued assistance throughout the process</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card>
              <CardHeader>
                <CardTitle>Consultation Fees</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium mb-2">What's Included:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Detailed eligibility assessment</li>
                    <li>• Document checklist</li>
                    <li>• Timeline and cost breakdown</li>
                    <li>• Follow-up email summary</li>
                    <li>• 30-day email support</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-medium text-green-800">Money-Back Guarantee</p>
                  <p className="text-xs text-green-700">100% satisfaction guaranteed or full refund</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
