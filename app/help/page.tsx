"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";

export default function Help() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#F5F5DC] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-32 h-32 mx-auto relative">
              <div className="absolute inset-0 border-4 border-[#FF6B35] rounded-full animate-spin">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Code className="h-8 w-8 text-[#FF6B35]" />
                </div>
              </div>
              <div
                className="absolute inset-4 border-4 border-[#8B4513] rounded-full animate-spin"
                style={{ animationDirection: "reverse", animationDuration: "2s" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Lightbulb className="h-6 w-6 text-[#8B4513]" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#8B4513]">
              <span className="text-[#FF6B35]">HACK</span>FEST 2025
            </h1>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
              <span className="text-[#8B4513] font-medium">Loading Innovation</span>
            </div>
            <div className="w-64 h-2 bg-white border-2 border-[#8B4513] rounded-full mx-auto overflow-hidden">
              <div
                className="h-full bg-[#FF6B35] rounded-full animate-pulse"
                style={{ animation: "loadingProgress 3s ease-in-out forwards" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
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
              <Link href="/wait" className="text-[#8B4513] hover:text-[#FF6B35] transition-colors">
                Help
              </Link>
              <Link href="/wait">
                <button className="bg-[#FF6B35] text-white px-6 py-2 font-semibold rounded shadow hover:bg-[#e65a28] transition">
                  Register Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-[#8B4513] mb-8 text-center">Need Help? Contact Us</h2>

      {/* Faculty Coordinators */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-[#FF6B35] mb-4">Faculty Coordinators</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Prof.Rajeshwari Kisan</CardTitle>
              <CardDescription>Co-convener</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8B4513]">📧 rajeshwari.kisan@gmail.com</p>
              <p className="text-[#8B4513]">📞 +91 9738783026</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Prof.Kshitij Sheth</CardTitle>
              <CardDescription>Co-Convener</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8B4513]">📧 kshitijsheth7@gmail.com</p>
              <p className="text-[#8B4513]">📞 +91 8369962936</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Student Coordinators */}
      <div>
        <h3 className="text-2xl font-semibold text-[#FF6B35] mb-4">Student Coordinators</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Ayush T</CardTitle>
              <CardDescription>Website & Technology</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8B4513]">📧 ayushtammannavar@gmail.com</p>
              <p className="text-[#8B4513]">📞 +91 8861885724</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Suyog H</CardTitle>
              <CardDescription>Student Co-ordinator</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8B4513]">📧 syoghanamar21@gmail.com</p>
              <p className="text-[#8B4513]">📞 +91 9986821707</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Chirag K</CardTitle>
              <CardDescription>Student Co-ordinator</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8B4513]">📧 chiragkamble1018@gmail.com</p>
              <p className="text-[#8B4513]">📞 +91 9353037921</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shubham H</CardTitle>
              <CardDescription>Student Co-ordinator</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-[#8B4513]">📧 shubhamhiremath87@gmail.com</p>
              <p className="text-[#8B4513]">📞 +91 9448339846</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
    </div>
  );
}


