"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "#destinations", label: "Destinations" },
    { href: "/activities", label: "Tours & Activities" },
    { href: "/accommodation", label: "Accommodation" },
    { href: "#packages", label: "Tour Packages" },
    { href: "#immigration", label: "Immigration" },
  ]

  return (
    <nav className="bg-white shadow-lg border-b-2 border-brand-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/bizzy-logo.png"
                alt="Bizzy Tours & Travel"
                width={140}
                height={45}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-brand-red font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-red transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Button className="bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Contact Us
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-brand-red">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="mb-6">
                    <Image
                      src="/images/bizzy-logo.png"
                      alt="Bizzy Tours & Travel"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </div>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-gray-700 hover:text-brand-red font-medium py-2 px-4 rounded-lg hover:bg-red-50 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="bg-brand-red hover:bg-red-700 text-white font-semibold mt-4">Contact Us</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
