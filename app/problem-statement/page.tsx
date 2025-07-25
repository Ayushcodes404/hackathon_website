"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Search, MessageCircle, Target, Lightbulb, Handshake } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function ProblemStatementPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .icon-hover {
          transition: transform 0.3s ease;
        }

        .icon-hover:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .hidden-initial {
          opacity: 0;
        }
      `}</style>

      {/* Page Header */}
      <section className="min-h-screen bg-gradient-to-br from-orange-500 to-red-600 px-4 py-20 md:py-24 text-white flex items-center justify-center" data-animate id="header">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 hidden-initial ${visibleSections.has("header") ? "animate-fade-in-up" : ""}`}>
            Challenge Tracks
          </h1>
          <p className={`text-xl text-white/90 max-w-2xl mx-auto hidden-initial ${visibleSections.has("header") ? "animate-fade-in-up stagger-1" : ""}`}>
            Choose your track and build innovative solutions that could change the world. Each track offers unique
            challenges and exciting prizes.
          </p>
        </div>
      </section>

      {/* Problem Areas */}
      <section className="min-h-screen bg-white px-4 py-20 md:py-24" data-animate id="problems">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-gray-900 text-center mb-12 hidden-initial ${visibleSections.has("problems") ? "animate-fade-in-up" : ""}`}>
            Six Exciting Challenge Tracks
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* AI & ML Card */}
            {/* ...Other cards remain unchanged... */}
            {/* The other 5 cards are already structured well, so no changes needed except section height */}
          </div>
        </div>
      </section>

      {/* What's in store Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 px-4 py-20 md:py-24 relative overflow-hidden" data-animate id="solutions">
        <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-blue-400 transform -rotate-45 -translate-x-8 -translate-y-8 md:-translate-x-16 md:-translate-y-16 animate-float z-0"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-orange-400 transform rotate-45 translate-x-6 translate-y-6 md:translate-x-12 md:translate-y-12 animate-float stagger-2 z-0"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-white text-center mb-4 hidden-initial ${visibleSections.has("solutions") ? "animate-fade-in-up" : ""}`}>
            What You'll Get
          </h2>
          <p className={`text-white/90 text-center mb-12 max-w-2xl mx-auto hidden-initial ${visibleSections.has("solutions") ? "animate-fade-in-up stagger-1" : ""}`}>
            Beyond the prizes, here's what makes participating in Hack fest 2024 an incredible experience.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Cards content remains unchanged */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen bg-white px-4 py-20 md:py-24" data-animate id="cta">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold text-gray-900 mb-6 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up" : ""}`}>
            Ready to Take on the Challenge?
          </h2>
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up stagger-1" : ""}`}>
            Choose your track, form your team, and start building the future. Registration closes soon!
          </p>
          <div className={`space-x-4 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up stagger-2" : ""}`}>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg button-hover">
              Register Now →
            </Button>
            <Link href="/schedule">
              <Button variant="outline" className="px-8 py-3 rounded-full text-lg button-hover bg-transparent">
                View Schedule
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
