import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      {/* Newsletter Section */}
      <div className="brand-gradient py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Stay Updated on Uganda Travel</h2>
          <p className="text-lg mb-8 text-white/90">Get travel tips, destination guides, and exclusive tour offers</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="bg-white text-gray-900 border-0 focus:ring-2 focus:ring-white/50"
            />
            <Button variant="secondary" className="bg-white text-brand-red hover:bg-gray-100 font-semibold px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <Image
                  src="/images/bizzy-logo.png"
                  alt="Bizzy Tours & Travel"
                  width={160}
                  height={55}
                  className="h-14 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-brand-grey mb-6 leading-relaxed">
                Your trusted partner for unforgettable Uganda adventures and professional immigration services.
                Experience the Pearl of Africa with confidence.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="text-brand-grey hover:text-brand-gold hover:bg-white/10">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-brand-grey hover:text-brand-gold hover:bg-white/10">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-brand-grey hover:text-brand-gold hover:bg-white/10">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-brand-grey hover:text-brand-gold hover:bg-white/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Tourism Services */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-gold">Tourism Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/activities" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Tours & Activities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/accommodation"
                    className="text-brand-grey hover:text-white transition-colors duration-200"
                  >
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/destinations"
                    className="text-brand-grey hover:text-white transition-colors duration-200"
                  >
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link href="#packages" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Tour Packages
                  </Link>
                </li>
                <li>
                  <Link href="/activities" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Safari Tours
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Immigration */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-gold">Support & Immigration</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/immigration/consultation"
                    className="text-brand-grey hover:text-white transition-colors duration-200"
                  >
                    Immigration Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-brand-grey hover:text-white transition-colors duration-200">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-brand-gold">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Phone Numbers</p>
                    <p className="text-brand-grey">+256 785 079 561</p>
                    <p className="text-brand-grey">+256 200 949 561</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-brand-grey">info@bizzytours.ug</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-brand-grey">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-brand-grey text-sm">&copy; 2024 Bizzy Tours and Travels. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-brand-grey hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-brand-grey hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="#" className="text-brand-grey hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
