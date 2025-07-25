"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import LoadingScreen from "@/components/loading-screen"

export default function HomePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())
  const [showContent, setShowContent] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!showContent) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    observerRef.current = observer

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [showContent])

  if (!showContent) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
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

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
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

        .animate-rotate-slow {
          animation: rotate 20s linear infinite;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .button-hover {
          transition: all 0.3s ease;
        }

        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .visible {
          opacity: 1;
        }

        .hidden-initial {
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-screen bg-gray-50 px-4 flex items-center justify-center relative overflow-hidden" data-animate id="hero">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className={`text-5xl md:text-6xl font-bold text-gray-900 mb-6 hidden-initial ${visibleSections.has("hero") ? "animate-fade-in-up" : ""}`}>
            Where{" "}
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              Innovation
            </span>{" "}
            Meets Creation
          </h1>
          <p className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto hidden-initial ${visibleSections.has("hero") ? "animate-fade-in-up stagger-2" : ""}`}>
            Join Hack fest 2024, the ultimate 48-hour hackathon experience. Build innovative solutions, compete with brilliant minds, and turn your ideas into reality.
          </p>
          <div className={`space-x-4 hidden-initial ${visibleSections.has("hero") ? "animate-fade-in-up stagger-3" : ""}`}>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg button-hover">
              Register Now
            </Button>
            <Link href="/about">
              <Button variant="outline" className="px-8 py-3 rounded-full text-lg button-hover bg-transparent">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 md:py-32 bg-white px-4 flex items-center justify-center relative overflow-hidden" data-animate id="overview">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className={`text-4xl font-bold text-gray-900 text-center mb-12 hidden-initial ${visibleSections.has("overview") ? "animate-fade-in-up" : ""}`}>
            Why Join Hack fest 2024?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Compete */}
            <div className={`text-center p-6 rounded-2xl bg-purple-50 border-2 border-purple-200 hover:shadow-lg transition-all duration-300 hidden-initial ${visibleSections.has("overview") ? "animate-fade-in-up stagger-1" : ""}`}>
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compete</h3>
              <p className="text-gray-600">Compete for amazing prizes and recognition in multiple challenge tracks</p>
            </div>

            {/* Innovate */}
            <div className={`text-center p-6 rounded-2xl bg-orange-50 border-2 border-orange-200 hover:shadow-lg transition-all duration-300 hidden-initial ${visibleSections.has("overview") ? "animate-fade-in-up stagger-2" : ""}`}>
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovate</h3>
              <p className="text-gray-600">Build cutting-edge solutions using the latest technologies and tools</p>
            </div>

            {/* Network */}
            <div className={`text-center p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 hover:shadow-lg transition-all duration-300 hidden-initial ${visibleSections.has("overview") ? "animate-fade-in-up stagger-3" : ""}`}>
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <div className="w-8 h-8 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Network</h3>
              <p className="text-gray-600">Connect with fellow developers, designers, and industry experts</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-purple-600 to-purple-800 px-4 flex items-center justify-center relative overflow-hidden" data-animate id="features">
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className={`text-4xl font-bold text-white text-center mb-12 hidden-initial ${visibleSections.has("features") ? "animate-fade-in-up" : ""}`}>
            What Makes Us Special?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature Cards */}
            {[
              {
                title: "48 Hours of Pure Innovation",
                desc: "Immerse yourself in an environment designed for creativity and breakthrough solutions.",
                color: "purple",
              },
              {
                title: "Expert Mentorship Available",
                desc: "Get guidance from industry experts and experienced developers throughout the event.",
                color: "orange",
              },
              {
                title: "Amazing Prizes and Recognition",
                desc: "Compete for over $50,000 in prizes across multiple challenge tracks and categories.",
                color: "blue",
              },
              {
                title: "Network with Like-minded Innovators",
                desc: "Connect with 500+ developers, designers, and entrepreneurs from around the world.",
                color: "green",
              },
            ].map((item, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 border-4 border-black hover:shadow-2xl transition-all duration-300 hidden-initial ${visibleSections.has("features") ? `animate-fade-in-up stagger-${index + 1}` : ""}`}>
                <div className={`w-16 h-16 bg-${item.color}-500 rounded-full flex items-center justify-center mb-4`}>
                  <div className="w-8 h-8 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-orange-500 to-red-600 px-4 flex items-center justify-center relative overflow-hidden" data-animate id="cta">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-4 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up" : ""}`}>
            Ready to Hack the Future?
          </h2>
          <p className={`text-white/90 text-xl mb-8 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up stagger-1" : ""}`}>
            Join 500+ developers, designers, and innovators for 48 hours of pure creation!
          </p>
          <div className={`space-x-4 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up stagger-2" : ""}`}>
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold button-hover">
              Register Now
            </Button>
            <Link href="/problem-statement">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-full text-lg button-hover bg-transparent">
                View Challenges
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
