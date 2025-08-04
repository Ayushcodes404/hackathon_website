"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import * as React from "react";

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
              <span className="text-[#FF6B35]">HACK</span>FEST 2025
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
              <h1 className="text-2xl font-bold text-[#8B4513]">HackFest 2025</h1>
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
              <Link href="#CHIEF_PATRON" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Team
              </Link>
              <Link href="#general_rules" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Rules
              </Link>
              <Link href="/wait" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Problem Statements
              </Link>
              <Link href="/wait">
                <button className="sketchy-btn bg-[#FF6B35] text-white px-6 py-2 font-semibold">
                  Register Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
        

        {/* Left side illustration */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
          <img src="/hero_left.png" alt="Hero Left Illustration" className="opacity-100 rotate-0" />
        </div>
        {/* Right side illustration */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden lg:block">
          <img src="/hero_right.png" alt="Hero Right Illustration" className="opacity-50 -rotate-0" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#FF6B35] text-white px-4 py-2 text-lg">August 19, 2025</Badge>
            <h1 className="text-6xl md:text-8xl font-bold text-[#8B4513] mb-6 leading-tight">Build the Future</h1>
            <p className="text-xl md:text-2xl text-[#8B4513] mb-8 max-w-3xl mx-auto leading-relaxed">
              Join developers, designers, and innovators for 12 hours of coding, creativity, and collaboration.
              Turn your wildest ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link href="/wait">
                <button className="sketchy-btn bg-[#FF6B35] text-white px-8 py-4 text-xl font-semibold">
                    Register Now
                  </button>
              </Link>
              <Link href="#schedule">
                <button className="sketchy-btn bg-transparent border-2 border-[#8B4513] text-[#8B4513] px-8 py-4 text-xl font-semibold">
                  View Schedule
                </button>
              </Link>
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
                  Compete for amazing prizes and the chance to showcase your skills.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/*Rules */}
      <section>
        
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
        </div>
      </section>

      {/* Prizes Section */}
      <section id="prizes" className="py-20 px-4 bg-white relative overflow-hidden">

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">Amazing Prizes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex justify-center items-center"></div>
            <Card className="border-4 border-[#FF6B35] bg-[#F5F5DC] text-center">
              <CardHeader>
                <Trophy className="h-16 w-16 text-[#FF6B35] mx-auto mb-4" />
                <CardTitle className="text-3xl text-[#8B4513]">1st Place</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold it text-[#FF6B35] mb-4">3,000</div>
                <ul className="text-[#8B4513] space-y-2">
                  <li>• Fixed Cash Prize per Domain</li>
                </ul>
              </CardContent>
            </Card>     
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section id="CHIEF_PATRON" className="py-20 px-4 bg-[#F5F5DC] relative overflow-hidden">

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-6">Our Amazing Team</h2>
            <p className="text-xl text-[#8B4513] max-w-3xl mx-auto">
              Thanks to our incredible Team who make HackFest possible and support the next generation of
              innovators.
            </p>
          </div>


          {/* Swamiji */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#8B4513] text-center mb-8">"With the divine blessings of Swamiji, we dedicate HackFest to nurturing innovation with values and vision."</h3>
            <div className="flex justify-center gap-x-8">
            {/* Card 1 */}
            <div className="flex flex-col items-center gap-y-4">
              <div className="w-48 h-48">
                <img
                  src="/shivabasava_mahaswamiji.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl text-[#FF6B35] text-center mb-0">
                Shivabasava Mahaswamiji 
              </h4>
            </div>
            </div>
          </div>

          {/* Patrons*/}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">CHIEF PATRONS</h3>
            <div className="flex justify-center gap-x-14">
            {/* Card 1 */}
            <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/siddarama_swamiji.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl text-[#FF6B35] text-center mb-0">
                Dr. Tontada Siddharama Mahaswamiji 
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
                Yedeyuru Shri Jagadguru Tontadarya Samsthana Math,<br/>Dambal-Gadag 
              </h1>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/alamprabhu_maha_swamiji.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-2xl text-[#FF6B35] text-center mb-0">
               Dr. Allamaprabhu Mahaswamiji 
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
                Naganuru Shri Rudrakshimath,<br/> Belagavi. 
              </h1>

            </div>
          </div>

          </div>
          
          
          {/* PATRONS */}
          <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">PATRONS</h3>

          <div className="flex justify-center gap-x-12">
            {/* Patron 1 */}
            <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/Mahadeva_Prasanna.jpeg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                Prof. S. R. Mahadeva Prasanna  
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
                Director,<br/>IIIT Dharwad. 
              </h1>
            </div>

            {/* Patron 2 */}
            <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/Rahul-Sharanappa-Sankanur.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                Shri Rahul Sharanappa Sankanur  
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
                Managing Director, <br/>KITS, Govt of Karnataka. 
              </h1>
            </div>
            
            {/* Patron 3 */}
            <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/Nithin__Chakki.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                Mr. Nithin Chakki
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
               General Manager,<br />
               KITS, Govt of Karnataka.
              </h1>
            </div>


            {/* Patron 4 */}
            <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/F V Manvi.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                Dr. F. V. Manvi  
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
                Chairman, Governing Council,<br/>SGBIT, Belagavi 
              </h1>
            </div>

             {/* Patron 5 */}
             <div className="flex flex-col items-center gap-y-2">
              <div className="w-48 h-48">
                <img
                  src="/B R Patagundi.jpg"
                  alt="Title Sponsor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                 Dr. B. R. Patagundi
              </h4>
              <h1 className="text-base text-blue-600 text-center -mt-0">
                Principal,<br/>SGBIT, Belagavi.
              </h1>
            </div>

          </div>
        </div>

          {/* Faculty Co-ordinators */}
          <div className="mb-16">
            <div className="flex justify-center gap-x-12">
              {/* Patron 1 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/prashant_bhagwati.jpg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Dr. Prashant Bhagawati 
                </h4>
                <h1 className="text-base text-blue-600 text-center -mt-0">
                  District Innovation Associate (DIA). 
                </h1>
              </div>
              {/* Patron 2 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/sanjeev.jpg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Dr. Sanjeev Kulkarni 
                </h4>
                <h1 className="text-base text-blue-600 text-center -mt-0">
                  NAIN 2.0 Coordinator. 
                </h1>
              </div>
              {/* Patron 3 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/manjunath_s.jpg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                   Mr. Manjunath Sharanappanavar 
                </h4>
                <h1 className="text-base text-blue-600 text-center -mt-0">
                  Management Information System (MIS)-Executive. 
                </h1>
              </div>
              {/* Patron 4 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/suresh_a.jpeg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Dr. Suresh Akkole
                </h4>
                <h1 className="text-base text-blue-600 text-center -mt-0">
                  Dean, Reasearch & Development<br/> SGBIT, Belagavi.  
                </h1>
              </div>
            </div>
          </div>
          
          {/*Conveyners*/}
          <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">CONVENERS</h3>
            <div className="flex justify-center gap-x-12">
              {/* Patron 1 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/cs_hod.jpg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Dr. B. S. Halakarnimath 
                </h4>
                <h1 className="text-base text-blue-600 text-center -mt-0">
                Professor & HOD ,CSE <br/> SGBIT, Belagavi. 
                </h1>
              </div>

              {/* Patron 2 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/Ashok_H.jpeg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Dr. Ashok M. Hulagabali
                </h4>
                <h1 className="text-base text-blue-600 text-center -mt-0">
                  Dean Academics <br/> SGBIT, Belagavi. 
                </h1>
              </div>
            </div>
          </div>
          
          {/* CO-CONVENERS */}
          <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">CO-CONVENERS</h3>
            <div className="flex justify-center gap-x-12">
              {/* Patron 1 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/shailaja_mali.jpg"
                    alt="Shailaja Mali"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Dr. Shailaja Mali
                </h4>
              </div>
              {/* Patron 2 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/rajeshwari_k.jpeg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Prof. Rajeshwari Kisan 
                </h4>
                
              </div>
              {/* Patron 3 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/survana_patil.jpg"
                    alt="Suvarna Patil"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Prof. Suvarna Patil 
                </h4>
                
              </div>
              {/* Patron 4 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/ks.jpeg"
                    alt="Title Sponsor Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Prof. Kshitij Sheth 
                </h4>
              </div>
            </div>
          </div>

          {/* Student Co-odrinators */}
          <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Student Co-ordinators</h3>
            <div className="flex justify-center gap-x-12">
              {/* Student 1 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/shubham_H.jpeg "
                    alt="Shubham"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Shubham Hiremath
                </h4>
              </div>
              {/* Student 2 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/Suyog H.jpeg "
                    alt="Shubham"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Suyog Hanamar
                </h4>
              </div>

              {/* Student 3 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/Chirag_K.jpeg "
                    alt="Shubham"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Chirag Kamble
                </h4>
              </div>
            </div>
          </div>

          <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#FF6B35] text-center mb-8">Website & Technology Lead</h3>
            <div className="flex justify-center gap-x-12">
              {/* Student 1 */}
              <div className="flex flex-col items-center gap-y-2">
                <div className="w-48 h-48">
                  <img
                    src="/ayush_me.jpeg "
                    alt="Ayush"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-1xl text-[#FF6B35] text-center mb-0">
                  Ayush K Tammannavar
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-8">Supported By </h3>

            {/* Media logos container with sketchy border */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-[#F5F5DC] border-4 border-[#FF6B35] rounded-2xl p-8 transform -rotate-0 shadow-lg overflow-hidden">
                {/* Scrolling logos container */}
                <div className="logos-scroll">
                  <div className="overflow-hidden py-8 bg-white">
                    <div className="whitespace-nowrap animate-scroll flex">
                      {[...Array(2)].flatMap(() => (
                        <>
                         <div className="overflow-x-auto">
                          <div className="flex flex-nowrap gap-8 px-4 py-4">
                            <div className="h-32 w-40 flex items-center justify-center">
                              <img src="/Startup Karnataka.png" alt="Logo 1" className="h-full w-auto object-contain opacity-80" />
                            </div>
                            <div className="h-32 w-40 flex items-center justify-center">
                              <img src="/new_age_incubation_network_nain_center_nmamit_logo.jpeg" alt="Logo 2" className="h-full w-auto object-contain opacity-80" />
                            </div>
                            <div className="h-32 w-40 flex items-center justify-center">
                              <img src="/K Tech.jpeg" alt="Logo 3" className="h-full w-auto object-contain opacity-80" />
                            </div>
                            <div className="h-32 w-40 flex items-center justify-center">
                              <img src="/IIITD.jpg" alt="Logo 4" className="h-full w-auto object-contain opacity-80" />
                            </div>
                          </div>
                        </div>


                                </>
                      ))}
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
          </div>
        </div>
      </section>

      <section id="general_rules" className="py-20 px-4 bg-[#F5F5DC] relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="bg-white border border-[#8B4513] rounded-2xl shadow-lg p-8 max-w-auto mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#8B4513] mb-8">General Rules</h2>
            <div className="text-xl text-[#8B4513] max-w">
            <div className="space-y-4 text-[#8B4513] text-lg text-left">
            <div className="flex items-start ">
              <span className="mr-2">•</span>
              <span>Teams must strictly follow the provided PPT template for Round 1. Any modifications may lead to disqualification.</span>
            </div>
            <div className="flex items-start ">
              <span className="mr-2">•</span>
              <span>The decision of the judges will be final and binding.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Teams from NAIN-hosted colleges are exempted from registration fees. Teams from other colleges are required to pay.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Each team must include at least one female member. Teams can have up to 3 members, with a ₹500 registration fee.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Participants must choose one problem statement from the listed domains and adhere to it throughout the event.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>In Round 1, teams must present their idea along with any initial implementation.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>In Round 2, teams must present improvements based on feedback from the judges.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>In Round 3, the final implementation must be presented.</span>
            </div>
            <div className="flex items-start">
              <span className="mr-2">•</span>
              <span>Ideas must showcase novelty, innovation, and the use of open-source tools and technologies.</span>
            </div>
          </div>

            </div>
          </div>
        </div>
        <div className="PPT_Template text-center mt-6">
          <a
            href="/Hackfest.ppt.pptx" // Replace this with your actual file path
            download
            className="sketchy-btn bg-[#FF6B35] text-white px-6 py-2 font-semibold"
          >
            Download PPT Template
          </a>
        </div>
      </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#FF6B35] relative overflow-hidden">
        {/* Left side illustration */}

        {/* Right side illustration */}

        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Hack?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, designers, and innovators for an unforgettable weekend of creation and
            collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/wait">
            <button className="sketchy-btn bg-white text-[#FF6B35] px-8 py-4 text-xl font-semibold">
              Register Now 
            </button>
            </Link>
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="h-6 w-6" />
              <span className="text-lg">Belgaum, Karnataka, India</span>
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
                  <Link href="#CHIEF_PATRON" className="text-gray-300 hover:text-[#FF6B35]">
                    Team
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>sgbitwork@gmail.com</li>
                <li>+91 9738783026</li>
                <li>Belgaum, Karnataka</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://sgbit.edu.in/Home/trust" className="text-gray-300 hover:text-[#FF6B35]">
                  Website
                </Link>
                <Link href="https://www.linkedin.com/company/sgbit-belagavi/?originalSubdomain=in" className="text-gray-300 hover:text-[#FF6B35]">
                  LinkedIn
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