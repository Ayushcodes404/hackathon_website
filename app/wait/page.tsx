"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function WaitPage() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowContent(true)
    }, 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      className="flex flex-col justify-center items-center min-h-screen bg-white text-[#FF6B35] transition-opacity duration-1000"
      style={{ opacity: showContent ? 1 : 0 }}
    >
      {/* GIF container */}
      <div className="w-full max-w-3xl px-4 mb-8">
        <img
          src="/wait.gif"
          alt="Registration Teaser GIF"
          className="w-full h-auto"
        />
      </div>

      {/* Text content */}
      <div className="text-center px-6">
        <h1 className="text-4xl font-bold mb-4">Problem Statements and Registrations Coming Soon!</h1>
        <p className="text-xl mb-8">
          We’re excited to announce that registrations will open on{" "}
          <span className="text-blue-600 font-semibold">5th August</span>.
        </p>

        {/* Back to Home button wrapped in next/link */}
        <Link href="/">
          <Button
            variant="outline"
            className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-colors duration-300"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </section>
  )
}
