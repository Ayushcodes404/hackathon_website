"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, Video } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function SchedulePage() {
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

  const upcomingEvents = [
    {
      title: "Opening Ceremony & Team Formation",
      date: "Friday, March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      type: "Ceremony",
      description: "Welcome address, challenge presentations, team formation, and networking dinner.",
      attendees: 500,
    },
    {
      title: "Hacking Begins + Breakfast",
      date: "Saturday, March 16, 2024",
      time: "8:00 AM - 10:00 AM",
      type: "Development",
      description: "Official start of development time with breakfast and mentor introductions.",
      attendees: 500,
    },
    {
      title: "Midpoint Check-in & Lunch",
      date: "Saturday, March 16, 2024",
      time: "12:00 PM - 2:00 PM",
      type: "Checkpoint",
      description: "Progress presentations, mentor feedback, and networking lunch.",
      attendees: 500,
    },
    {
      title: "Final Presentations & Judging",
      date: "Sunday, March 17, 2024",
      time: "2:00 PM - 6:00 PM",
      type: "Judging",
      description: "Team presentations, judging, awards ceremony, and closing celebration.",
      attendees: 500,
    },
  ]

  const recurringActivities = [
    {
      title: "AI/ML Workshop",
      schedule: "Saturday, 10:00 AM - 11:30 AM",
      description: "Introduction to machine learning APIs and tools",
      channel: "Workshop Room A",
    },
    {
      title: "Blockchain Development",
      schedule: "Saturday, 2:00 PM - 3:30 PM",
      description: "Building DeFi applications and smart contracts",
      channel: "Workshop Room B",
    },
    {
      title: "UI/UX Design Sprint",
      schedule: "Saturday, 4:00 PM - 5:30 PM",
      description: "Rapid prototyping and design thinking",
      channel: "Design Studio",
    },
    {
      title: "Pitch Perfect Session",
      schedule: "Sunday, 10:00 AM - 11:30 AM",
      description: "How to present your project effectively",
      channel: "Main Auditorium",
    },
  ]

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
        className="bg-gradient-to-br from-blue-600 to-purple-700 px-4 py-16 text-white relative overflow-hidden"
        data-animate
        id="header"
      >
        <div className="absolute top-10 right-10 w-16 h-16 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 bg-white transform rotate-45 animate-float stagger-1"></div>

        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-5xl md:text-6xl font-bold mb-6 hidden-initial ${visibleSections.has("header") ? "animate-fade-in-up" : ""}`}
          >
            Event Schedule
          </h1>
          <p
            className={`text-xl text-white/90 max-w-2xl mx-auto hidden-initial ${visibleSections.has("header") ? "animate-fade-in-up stagger-1" : ""}`}
          >
            Your complete guide to Hack fest 2024. From opening ceremony to final presentations, here's everything
            happening during our 48-hour hackathon.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white px-4 py-16" data-animate id="events">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-gray-900 text-center mb-12 hidden-initial ${visibleSections.has("events") ? "animate-fade-in-up" : ""}`}
          >
            48-Hour Timeline
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className={`card-hover border-2 border-gray-200 hidden-initial ${visibleSections.has("events") ? `animate-fade-in-up stagger-${index + 1}` : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === "Virtual"
                          ? "bg-blue-100 text-blue-800"
                          : event.type === "Workshop"
                            ? "bg-green-100 text-green-800"
                            : event.type === "Mentorship"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-orange-100 text-orange-800"
                      }`}
                    >
                      {event.type}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{event.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attending</span>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white button-hover">
                      Join Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Activities */}
      <section className="bg-gray-100 px-4 py-16" data-animate id="recurring">
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-4xl font-bold text-gray-900 text-center mb-12 hidden-initial ${visibleSections.has("recurring") ? "animate-fade-in-up" : ""}`}
          >
            Workshops & Sessions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {recurringActivities.map((activity, index) => (
              <Card
                key={index}
                className={`card-hover border-2 border-gray-200 hidden-initial ${visibleSections.has("recurring") ? `animate-fade-in-up stagger-${index + 1}` : ""}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                      <div className="flex items-center space-x-1 text-sm text-purple-600 mb-3">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">{activity.schedule}</span>
                      </div>
                    </div>
                    <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {activity.channel}
                    </div>
                  </div>

                  <p className="text-gray-700">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Stay Updated */}
      <section className="bg-white px-4 py-16" data-animate id="updates">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-8 hidden-initial ${visibleSections.has("updates") ? "animate-fade-in-up" : ""}`}
          >
            Stay Updated During the Event
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className={`p-6 rounded-2xl bg-blue-50 border-2 border-blue-200 card-hover hidden-initial ${visibleSections.has("updates") ? "animate-fade-in-up stagger-1" : ""}`}
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Video className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Event App</h3>
              <p className="text-gray-600">
                Download our mobile app for real-time updates, schedule changes, and team communication.
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl bg-green-50 border-2 border-green-200 card-hover hidden-initial ${visibleSections.has("updates") ? "animate-fade-in-up stagger-2" : ""}`}
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discord Server</h3>
              <p className="text-gray-600">
                Join our Discord for instant communication with mentors, organizers, and other participants.
              </p>
            </div>

            <div
              className={`p-6 rounded-2xl bg-purple-50 border-2 border-purple-200 card-hover hidden-initial ${visibleSections.has("updates") ? "animate-fade-in-up stagger-3" : ""}`}
            >
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-slow">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live Announcements</h3>
              <p className="text-gray-600">
                Follow our social media and check the main screens for important announcements and updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="bg-gradient-to-br from-purple-600 to-purple-800 px-4 py-16 relative overflow-hidden"
        data-animate
        id="cta"
      >
        <div className="absolute top-10 left-10 w-8 h-8 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-white transform rotate-45 animate-float stagger-1"></div>
        <div className="absolute bottom-10 left-20 w-4 h-4 bg-orange-500 transform rotate-45 animate-float stagger-2"></div>
        <div className="absolute bottom-20 right-10 text-white text-4xl animate-pulse-slow">✦</div>

        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold text-white mb-4 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up" : ""}`}
          >
            Ready to Join the Action?
          </h2>
          <p
            className={`text-white/90 text-xl mb-8 hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up stagger-1" : ""}`}
          >
            Don't miss out on the most exciting hackathon of the year. Register now and secure your spot!
          </p>
          <Button
            className={`bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold button-hover hidden-initial ${visibleSections.has("cta") ? "animate-fade-in-up stagger-2" : ""}`}
          >
            Register for Hack fest 2024 →
          </Button>
        </div>
      </section>
    </div>
  )
}
