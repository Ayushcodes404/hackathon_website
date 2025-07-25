"use client"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function AboutPage() {
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
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

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
      <section
        className="bg-gradient-to-br from-purple-600 to-purple-800 px-4 py-16 text-white"
        data-animate
        id="header"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 hidden-initial ${visibleSections.has("header") ? "animate-fade-in-up" : ""}`}
          >
            About Hack fest 2024
          </h1>
          <p
            className={`text-xl text-white/90 max-w-2xl mx-auto hidden-initial ${visibleSections.has("header") ? "animate-fade-in-up stagger-1" : ""}`}
          >
            Discover what makes Hack fest 2024 the most exciting hackathon of the year. Learn about our mission, rules,
            and what to expect.
          </p>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="bg-white px-4 py-16 relative overflow-hidden" data-animate id="who-section">
        <div className="absolute inset-0 opacity-5 text-gray-300 text-6xl font-bold">
          <div className="grid grid-cols-3 gap-8 transform rotate-12 animate-float">
            <div>Event Professionals</div>
            <div>Marketers</div>
            <div>Community</div>
            <div>Influencers</div>
            <div>Event Managers</div>
            <div>HR Professionals</div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className={`bg-green-100 rounded-3xl p-8 relative card-hover hidden-initial ${visibleSections.has("who-section") ? "animate-fade-in-up" : ""}`}
          >
            <div className="absolute -top-4 -right-4 animate-pulse-slow">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                All Skill Levels Welcome!
              </div>
            </div>
            <div className="absolute -top-8 -left-8 animate-float">
              <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center text-2xl">💻</div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who can participate?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hack fest 2024 is open to developers, designers, product managers, students, and anyone passionate about
              technology and innovation. Whether you're a seasoned professional or just starting your journey, there's a
              place for you here.
            </p>
          </div>
        </div>
      </section>

      {/* Slack Preview Section */}
      <section
        className="bg-gradient-to-br from-purple-400 to-purple-600 px-4 py-16 relative overflow-hidden"
        data-animate
        id="slack-preview"
      >
        <div className="absolute top-10 left-10 w-16 h-16 bg-orange-400 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 bg-orange-500 rounded-full animate-pulse-slow"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold text-white mb-4 hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up" : ""}`}
          >
            48 Hours of Pure Innovation
          </h2>
          <p
            className={`text-white/90 mb-8 hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up stagger-1" : ""}`}
          >
            From Friday evening to Sunday evening, immerse yourself in an environment designed for creativity,
            collaboration, and breakthrough innovation.
          </p>

          <div
            className={`bg-white rounded-2xl p-6 max-w-2xl mx-auto mb-12 card-hover hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up stagger-2" : ""}`}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Highlights</h3>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-600">🏆</span>
                    <span className="text-sm font-medium">$50,000 in prizes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-600">👥</span>
                    <span className="text-sm font-medium">500+ participants</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">🎯</span>
                    <span className="text-sm font-medium">6 challenge tracks</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">🎤</span>
                    <span className="text-sm font-medium">Expert mentors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-red-600">🍕</span>
                    <span className="text-sm font-medium">Free meals & snacks</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-600">🎪</span>
                    <span className="text-sm font-medium">Workshops & talks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-white">
            <h3
              className={`text-2xl font-bold mb-8 hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up stagger-3" : ""}`}
            >
              What to bring
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className={`text-center hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up stagger-1" : ""}`}
              >
                <div className="bg-white rounded-lg p-4 mb-4 inline-block card-hover">
                  <div className="w-16 h-20 bg-blue-500 rounded relative flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Your laptop & charger</h4>
                <p className="text-sm text-white/80">
                  Bring your development setup and make sure your battery can last the weekend!
                </p>
              </div>

              <div
                className={`text-center hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up stagger-2" : ""}`}
              >
                <div className="bg-white rounded-lg p-4 mb-4 inline-block card-hover">
                  <div className="w-16 h-20 bg-green-500 rounded relative flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Your creativity & ideas</h4>
                <p className="text-sm text-white/80">
                  Come with an open mind and ready to collaborate with amazing people.
                </p>
              </div>

              <div
                className={`text-center hidden-initial ${visibleSections.has("slack-preview") ? "animate-fade-in-up stagger-3" : ""}`}
              >
                <div className="bg-white rounded-lg p-4 mb-4 inline-block card-hover">
                  <div className="w-16 h-20 bg-orange-500 rounded relative flex items-center justify-center">
                    <span className="text-2xl">🎒</span>
                  </div>
                </div>
                <h4 className="font-bold mb-2">Essentials & comfort items</h4>
                <p className="text-sm text-white/80">
                  Sleeping bag, toiletries, and anything else you need for the weekend.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="bg-white px-4 py-16 relative overflow-hidden" data-animate id="rules">
        <div className="absolute top-0 left-0 w-20 h-20 bg-blue-400 transform rotate-45 -translate-x-10 -translate-y-10 animate-float"></div>

        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-8 hidden-initial ${visibleSections.has("rules") ? "animate-fade-in-up" : ""}`}
          >
            Hackathon Rules & Guidelines
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className={`hidden-initial ${visibleSections.has("rules") ? "animate-fade-in-left" : ""}`}>
              <p className="text-gray-600 mb-6">
                To ensure a fair, safe, and enjoyable experience for all participants, please follow these guidelines
                during Hack fest 2024.
              </p>

              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 mb-6 card-hover">
                <p className="text-sm text-gray-700">
                  <strong>Important:</strong>
                  <br />
                  All projects must be built during the hackathon timeframe. Pre-existing code is not allowed.
                </p>
              </div>

              <p className="text-gray-600 mb-6">
                To help maintain a safe and welcoming environment, we ask that all community members adhere to a few
                guidelines that are listed below.
              </p>

              <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-4 card-hover">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong>
                  <br />
                  Info shared by members cannot be considered as legal advice. Members are not responsible for the same.
                </p>
              </div>
            </div>

            <div className={`space-y-6 hidden-initial ${visibleSections.has("rules") ? "animate-fade-in-right" : ""}`}>
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 relative card-hover">
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse-slow">
                  🤝 Team Spirit
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Collaborate and respect others!</h3>
                <p className="text-sm text-gray-700">
                  Work together, help fellow participants, and maintain a positive environment for everyone.
                </p>
              </div>

              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 relative card-hover">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⏰ Time Limits
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Stick to the 48-hour timeline!</h3>
                <p className="text-sm text-gray-700">
                  All development must happen during the event. Late submissions will not be accepted.
                </p>
              </div>

              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 relative card-hover">
                <div className="absolute -top-3 -right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  💡 Original Ideas
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Build something new!</h3>
                <p className="text-sm text-gray-700">
                  Projects must be original work created during the hackathon. No pre-built solutions allowed.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/problem-statement">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg button-hover">
                View Challenge Tracks →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
