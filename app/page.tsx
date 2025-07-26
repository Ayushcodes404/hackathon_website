"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function HackathonWebsite() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#F5F5DC] flex items-center justify-center z-50">
        <div className="text-center">
          {/* Loading Animation */}
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              {/* Rotating Code Brackets */}
              <div className="absolute inset-0 border-4 border-[#FF6B35] rounded-full animate-spin">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Code className="h-8 w-8 text-[#FF6B35]" />
                </div>
              </div>

              {/* Inner rotating circle */}
              <div
                className="absolute inset-4 border-4 border-[#8B4513] rounded-full animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "2s" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Lightbulb className="h-6 w-6 text-[#8B4513]" />
                </div>
              </div>

              {/* Center logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#8B4513]">
              <span className="text-[#FF6B35]">HACK</span>FEST 2024
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
              <span className="text-[#8B4513] font-medium">Loading Innovation</span>
            </div>

            {/* Progress Bar */}
            <div className="w-64 h-2 bg-white border-2 border-[#8B4513] rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-[#FF6B35] rounded-full animate-pulse"
                style={{
                  animation: "loadingProgress 3s ease-in-out forwards",
                }}
              ></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-20 animate-bounce" style={{ animationDelay: "0.5s" }}>
            <div className="w-4 h-4 bg-[#FF6B35] rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: "1s" }}>
            <div className="w-3 h-3 bg-[#8B4513] rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-32 left-40 animate-bounce" style={{ animationDelay: "1.5s" }}>
            <div className="w-5 h-5 bg-[#FF6B35] rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-20 right-20 animate-bounce" style={{ animationDelay: "2s" }}>
            <div className="w-3 h-3 bg-[#8B4513] rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      {/* Header */}
      <header className="border-b-2 border-[#8B4513] bg-[#F5F5DC] sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-[#FF6B35]" />
              <h1 className="text-2xl font-bold text-[#8B4513]">HackFest 2024</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                About
              </Link>
              <Link href="#schedule" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Schedule
              </Link>
              <Link href="#prizes" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Prizes
              </Link>
              <Link href="#sponsors" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Sponsors
              </Link>
              <button className="sketchy-btn bg-[#FF6B35] text-white px-6 py-2 font-semibold">Register Now</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
        

        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#FF6B35] text-white px-4 py-2 text-lg">August 19, 2025</Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-[#8B4513] mb-6 leading-tight">Build the Future</h1>
            <p className="text-xl md:text-2xl text-[#8B4513] mb-8 max-w-3xl mx-auto leading-relaxed">
              Join developers, designers, and innovators for 12 hours of coding, creativity, and collaboration.
              Turn your wildest ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="sketchy-btn bg-[#FF6B35] text-white px-8 py-4 text-xl font-semibold">
                Register for Free
              </button>
              <button className="sketchy-btn bg-transparent border-2 border-[#8B4513] text-[#8B4513] px-8 py-4 text-xl font-semibold">
                View Schedule
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Calendar className="h-6 w-6 text-[#FF6B35]" />
                <span className="text-[#8B4513] font-medium">12 Hours</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-6 w-6 text-[#FF6B35]" />
                <span className="text-[#8B4513] font-medium">Innovators</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Trophy className="h-6 w-6 text-[#FF6B35]" />
                <span className="text-[#8B4513] font-medium">Exciting Prizes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Left side illustration */}
        <div className="absolute left-0 top-20 transform -translate-x-1/3 hidden lg:block">
          <img src="/placeholder.svg?height=300&width=250" alt="Team collaboration" className="opacity-15 rotate-6" />
        </div>

        {/* Right side illustration */}
        <div className="absolute right-0 bottom-20 transform translate-x-1/3 hidden lg:block">
          <img src="/placeholder.svg?height=320&width=260" alt="Tech devices" className="opacity-15 -rotate-6" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">What is HackFest?</h2>
            <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
              HackFest is more than just a hackathon. It's a celebration of innovation, creativity, and the power of
              technology to solve real-world problems.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#8B4513] bg-[#F5F5DC]">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-[#FF6B35] mb-4" />
                <CardTitle className="text-2xl text-[#8B4513]">Innovate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#8B4513] text-lg">
                  Bring your wildest ideas to life. From AI to blockchain, IoT to web3 - the sky's the limit.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#8B4513] bg-[#F5F5DC]">
              <CardHeader>
                <Users className="h-12 w-12 text-[#FF6B35] mb-4" />
                <CardTitle className="text-2xl text-[#8B4513]">Collaborate</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#8B4513] text-lg">
                  Meet like-minded individuals, form teams, and build lasting connections in the tech community.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="border-2 border-[#8B4513] bg-[#F5F5DC]">
              <CardHeader>
                <Trophy className="h-12 w-12 text-[#FF6B35] mb-4" />
                <CardTitle className="text-2xl text-[#8B4513]">Win Big</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#8B4513] text-lg">
                  Compete for amazing prizes, mentorship opportunities, and the chance to showcase your skills.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-[#F5F5DC] relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block border-4 border-[#8B4513] bg-white p-6 mb-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="text-[#FF6B35]">HACK FEST</span>
                <br />
                <span className="text-[#8B4513]">SCHEDULE</span>
              </h2>
            </div>
            <p className="text-xl text-[#8B4513]">48 hours of non-stop innovation journey</p>
          </div>

          {/* Roadmap Container */}
          <div className="w-full my-8 flex justify-center items-center">
            <img src="/schedule.png" alt="Schedule Roadmap" className="w-full h-auto object-contain rounded-xl shadow-lg border-2 border-[#8B4513] bg-white" />
          </div>

          {/* Mobile Version - Simplified */}
          <div className="block md:hidden mt-8">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  time: "Friday 6:00 PM",
                  title: "Registration & Check-in",
                  color: "border-[#8B4513]",
                  textColor: "text-[#8B4513]",
                },
                {
                  step: 2,
                  time: "Friday 8:00 PM",
                  title: "Opening Ceremony",
                  color: "border-[#FF6B35]",
                  textColor: "text-[#FF6B35]",
                },
                {
                  step: 3,
                  time: "Saturday 8:00 AM",
                  title: "Breakfast & Networking",
                  color: "border-[#8B4513]",
                  textColor: "text-[#8B4513]",
                },
                {
                  step: 4,
                  time: "Saturday 6:00 PM",
                  title: "Dinner & Mentorship",
                  color: "border-[#FF6B35]",
                  textColor: "text-[#FF6B35]",
                },
                {
                  step: 5,
                  time: "Sunday 10:00 AM",
                  title: "Final Sprint",
                  color: "border-[#8B4513]",
                  textColor: "text-[#8B4513]",
                },
                {
                  step: 6,
                  time: "Sunday 5:00 PM",
                  title: "Awards Ceremony",
                  color: "border-[#FF6B35]",
                  textColor: "text-[#FF6B35]",
                },
              ].map((item) => (
                <div key={item.step} className={`bg-white p-4 rounded-lg border-2 ${item.color} shadow-lg`}>
                  <h3 className={`font-bold ${item.textColor} text-lg mb-2`}>STEP {item.step}</h3>
                  <p className="text-sm text-[#8B4513]">
                    <strong>{item.time}</strong>
                    <br />
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Left side illustration */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 hidden lg:block">
          <img src="/placeholder.svg?height=350&width=280" alt="Prizes illustration" className="opacity-15 rotate-6" />
        </div>

        {/* Right side illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 hidden lg:block">
          <img
            src="/placeholder.svg?height=320&width=260"
            alt="Rewards illustration"
            className="opacity-15 -rotate-6"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">Amazing Prizes</h2>
            <p className="text-xl text-[#8B4513]">$50,000 in total prizes and opportunities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-4 border-[#FF6B35] bg-[#F5F5DC] text-center">
              <CardHeader>
                <Trophy className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                <CardTitle className="text-3xl text-[#8B4513]">1st Place</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#FF6B35] mb-4">$20,000</div>
                <ul className="text-[#8B4513] space-y-2">
                  <li>• Cash Prize</li>
                  <li>• Mentorship Program</li>
                  <li>• Startup Incubator Access</li>
                  <li>• Tech Conference Tickets</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-4 border-[#8B4513] bg-[#F5F5DC] text-center">
              <CardHeader>
                <Trophy className="h-16 w-16 text-[#8B4513] mx-auto mb-4" />
                <CardTitle className="text-3xl text-[#8B4513]">2nd Place</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#FF6B35] mb-4">$12,000</div>
                <ul className="text-[#8B4513] space-y-2">
                  <li>• Cash Prize</li>
                  <li>• Tech Gadgets</li>
                  <li>• Online Course Access</li>
                  <li>• Networking Opportunities</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-4 border-[#8B4513] bg-[#F5F5DC] text-center">
              <CardHeader>
                <Trophy className="h-16 w-16 text-[#8B4513] mx-auto mb-4" />
                <CardTitle className="text-3xl text-[#8B4513]">3rd Place</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-[#FF6B35] mb-4">$8,000</div>
                <ul className="text-[#8B4513] space-y-2">
                  <li>• Cash Prize</li>
                  <li>• Premium Software Licenses</li>
                  <li>• Workshop Access</li>
                  <li>• Certificate of Achievement</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section id="sponsors" className="py-20 px-4 bg-[#F5F5DC] relative overflow-hidden">
        {/* Left side illustration */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/3 hidden lg:block">
          <img
            src="/placeholder.svg?height=300&width=250"
            alt="Partnership illustration"
            className="opacity-15 rotate-6"
          />
        </div>

        {/* Right side illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/3 hidden lg:block">
          <img
            src="/placeholder.svg?height=320&width=260"
            alt="Corporate illustration"
            className="opacity-15 -rotate-6"
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">Our Amazing Team</h2>
            <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
              Thanks to our incredible Team who make HackFest possible and support the next generation of
              innovators.
            </p>
          </div>

          {/* Patrons*/}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Patrons</h3>
            <div className="flex justify-center gap-x-8">
              <Card className="border-4 border-[#FF6B35] bg-white p-8 max-w-md">
                <div className="flex items-center justify-center h-32">
                  <img
                    src="/placeholder.svg?height=120&width=300"
                    alt="Title Sponsor Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </Card>
              <Card className="border-4 border-[#FF6B35] bg-white p-8 max-w-md">
                <div className="flex items-center justify-right h-32">
                  <img
                    src="/placeholder.svg?height=120&width=300"
                    alt="Title Sponsor Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </Card>
              <Card className="border-4 border-[#FF6B35] bg-white p-8 max-w-md">
                <div className="flex items-center justify-left h-32">
                  <img
                    src="/placeholder.svg?height=120&width=300"
                    alt="Title Sponsor Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>

          {/* Principal */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Principal</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[1, 2].map((sponsor) => (
                <Card key={sponsor} className="border-3 border-[#8B4513] bg-white p-6">
                  <div className="flex items-center justify-center h-24">
                    <img
                      src={`/placeholder.svg?height=80&width=200&query=technology startup logo ${sponsor}`}
                      alt={`Gold Sponsor ${sponsor} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Faculty Co-ordinators */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Faculty Co-ordinators</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[1, 2, 3, 4].map((sponsor) => (
                <Card key={sponsor} className="border-2 border-[#8B4513] bg-white p-4">
                  <div className="flex items-center justify-center h-16">
                    <img
                      src={`/placeholder.svg?height=60&width=150&query=software company logo ${sponsor}`}
                      alt={`Silver Sponsor ${sponsor} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Tech Team*/}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Tech Team</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((sponsor) => (
                <Card key={sponsor} className="border-2 border-[#8B4513] bg-white p-3">
                  <div className="flex items-center justify-center h-12">
                    <img
                      src={`/placeholder.svg?height=40&width=120&query=tech brand logo ${sponsor}`}
                      alt={`Bronze Sponsor ${sponsor} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
            {/* Community Partners */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Community Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
                {[1, 2, 3, 4, 5].map((partner) => (
                  <div key={partner} className="bg-white p-3 rounded-lg border border-[#8B4513]">
                    <div className="flex items-center justify-center h-10">
                      <img
                        src={`/placeholder.svg?height=30&width=100&query=community organization logo ${partner}`}
                        alt={`Community Partner ${partner} Logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Become a Sponsor CTA */}
            <div className="text-center">
              <Card className="border-2 border-[#FF6B35] bg-white p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Want to Sponsor HackFest?</h3>
                <p className="text-[#8B4513] mb-6">
                  Join our amazing sponsors and support the next generation of innovators. Get your brand in front of 500+
                  talented developers and entrepreneurs.
                </p>
                <button className="sketchy-btn bg-[#FF6B35] text-white px-8 py-3 text-lg font-semibold">
                  Become a Sponsor
                </button>
              </Card>
            </div>
          
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-8">Supports</h3>

            {/* Media logos container with sketchy border */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-[#F5F5DC] border-4 border-[#FF6B35] rounded-2xl p-8 transform -rotate-1 shadow-lg overflow-hidden">
                {/* Scrolling logos container */}
                <div className="logos-scroll">
                  <div className="logos-track">
                    {/* First set of logos */}
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="TechCrunch"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="Wired"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="Forbes"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="VentureBeat"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="The Verge"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="Mashable"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="TechCrunch"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="Wired"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="Forbes"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="VentureBeat"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="The Verge"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                    <div className="flex items-center justify-center h-12 mx-8">
                      <img
                        src="/placeholder.svg?height=40&width=120"
                        alt="Mashable"
                        className="max-h-full max-w-full object-contain opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative sketchy elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-2 border-[#8B4513] rounded-full transform rotate-12"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-[#FF6B35] rounded-full transform -rotate-12"></div>
              <div className="absolute top-1/2 -left-4 w-4 h-4 bg-[#FF6B35] rounded-full transform -translate-y-1/2 rotate-45"></div>
              <div className="absolute top-1/4 -right-4 w-3 h-3 bg-[#8B4513] rounded-full transform rotate-12"></div>
            </div>

            <p className="text-sm text-[#8B4513] mt-6 opacity-80">
              HackFest has been featured in leading tech publications and media outlets
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#FF6B35] relative overflow-hidden">
        {/* Left side illustration */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4 hidden lg:block">
          <img src="/placeholder.svg?height=300&width=250" alt="Rocket launch" className="opacity-20 rotate-12" />
        </div>

        {/* Right side illustration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/4 hidden lg:block">
          <img
            src="/placeholder.svg?height=280&width=230"
            alt="Network connections"
            className="opacity-20 -rotate-12"
          />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Hack?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, designers, and innovators for an unforgettable weekend of creation and
            collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="sketchy-btn bg-white text-[#FF6B35] px-8 py-4 text-xl font-semibold">
              Register Now - It's Free!
            </button>
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">San Francisco, CA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8B4513] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-[#FF6B35]" />
                <h3 className="text-2xl font-bold">HackFest 2024</h3>
              </div>
              <p className="text-gray-300">Building the future, one hack at a time.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-[#FF6B35]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-gray-300 hover:text-[#FF6B35]">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#prizes" className="text-gray-300 hover:text-[#FF6B35]">
                    Prizes
                  </Link>
                </li>
                <li>
                  <Link href="#sponsors" className="text-gray-300 hover:text-[#FF6B35]">
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>hello@hackfest2024.com</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-[#FF6B35]">
                  Twitter
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#FF6B35]">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-300 hover:text-[#FF6B35]">
                  Discord
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 HackFest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}