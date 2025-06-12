"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function AppointmentFlow() {
  return (
    <div className="relative min-h-screen bg-gray-200 overflow-hidden">
      {/* Background Images */}
      <Image
        src="/placeholder.svg?height=1000&width=500"
        alt="Man"
        width={500}
        height={1000}
        className="absolute left-0 top-0 h-full object-cover opacity-50"
      />
      <Image
        src="/placeholder.svg?height=1000&width=500"
        alt="Woman"
        width={500}
        height={1000}
        className="absolute right-0 top-0 h-full object-cover opacity-50"
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-30" />

      {/* Header */}
      <header className="relative z-10 bg-lush-dark py-4 px-8 flex justify-between items-center">
        <div className="text-lush-gold text-2xl font-serif tracking-widest">LUSHWAYS</div>
        <nav className="flex space-x-6 text-sm font-medium">
          <Link href="/" className="text-white hover:text-lush-gold transition-colors">
            HOME
          </Link>
          <Link href="/quick-pay" className="text-white hover:text-lush-gold transition-colors">
            QUICK PAY
          </Link>
          <Link href="#" className="text-white hover:text-lush-gold transition-colors">
            TERMS & CONDITIONS
          </Link>
          <Link href="#" className="text-white hover:text-lush-gold transition-colors">
            PRIVACY POLICY
          </Link>
          <Link href="#" className="text-white hover:text-lush-gold transition-colors">
            CONTACT US
          </Link>
          <Link href="#" className="text-white hover:text-lush-gold transition-colors">
            LOG IN
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 pb-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wider">BEAUTY & SALON SERVICES</h1>
        <p className="text-xl text-gray-300 mb-12">Book your appointment in 60 seconds</p>

        {/* Main Content Card */}
        <Card className="w-full max-w-4xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Select Location Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-orange-500 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-gray-800">Select Location</h2>
            </div>
            <p className="text-gray-600 mb-6">Please select a location you want the service to be performed at</p>

            <h3 className="text-lg font-semibold text-gray-800 mb-4">Location Selection</h3>
            <div className="space-y-4">
              {/* Location Item 1 */}
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <MapPin className="w-5 h-5" /> {/* Placeholder icon */}
                </div>
                <div>
                  <p className="font-medium text-gray-800">BarberShop</p>
                  <p className="text-sm text-gray-500">Al Barsha City Centre Gents and ladies, Dubai, UAE</p>
                </div>
              </div>
              {/* Location Item 2 */}
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <MapPin className="w-5 h-5" /> {/* Placeholder icon */}
                </div>
                <div>
                  <p className="font-medium text-gray-800">Meaisem City Centre Ladies</p>
                  <p className="text-sm text-gray-500">Meaisem City Centre, Dubai, UAE</p>
                </div>
              </div>
              {/* Location Item 3 */}
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                  <MapPin className="w-5 h-5" /> {/* Placeholder icon */}
                </div>
                <div>
                  <p className="font-medium text-gray-800">Al Barsha City Centre Ladies</p>
                  <p className="text-sm text-gray-500">Al Barsha City Centre Gents and ladies, Dubai, UAE</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p className="font-semibold">questions?</p>
              <p>Call 052 182 2999 for help</p>
              <p>booking@lushways.com</p>
            </div>
          </div>

          {/* Summary Column */}
          <div className="md:border-l md:pl-8 border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Summary</h2>
            <p className="text-gray-500">No services selected yet</p>
          </div>
        </Card>
      </main>
    </div>
  )
}
