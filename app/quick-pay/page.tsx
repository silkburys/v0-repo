"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link" // Import Link for navigation

export default function QuickPayForm() {
  return (
    <div className="min-h-screen bg-lush-dark flex flex-col items-center justify-center p-4">
      {/* Header/Logo */}
      <div className="absolute top-0 left-0 right-0 py-6 text-center">
        <h1 className="text-lush-gold text-4xl font-serif tracking-widest">QUICK PAY</h1>
        {/* Optional: Add a back button to home */}
        <Link href="/" className="absolute left-4 top-6 text-white hover:text-lush-gold text-sm">
          &larr; Back to Home
        </Link>
      </div>

      {/* Main Form Card */}
      <div className="w-full max-w-md bg-[#2a2a2a] p-8 rounded-lg shadow-lg mt-20">
        {" "}
        {/* Added mt-20 to push it down from the header */}
        <form className="space-y-6">
          <div>
            <Label htmlFor="name" className="text-gray-400">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Name"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="mobile" className="text-gray-400">
              Mobile
            </Label>
            <Input
              id="mobile"
              type="tel"
              placeholder="Mobile"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-400">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
            />
          </div>
          <div className="text-lush-gold text-sm mt-4">Numeric value only, no commas or Text. Default currency AED</div>
          <div>
            <Label htmlFor="amount" className="text-gray-400">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              placeholder="Amount"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-500"
            />
          </div>
          <Button type="submit" className="w-full py-3 text-lg font-semibold" variant="lush-gold-button">
            PAY NOW
          </Button>
        </form>
      </div>
    </div>
  )
}
