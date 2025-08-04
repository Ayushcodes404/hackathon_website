"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Code, Lightbulb } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as React from "react";

export default function ProblemStatements() {
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
              <Link href="/wait">
                <button className="bg-[#FF6B35] text-white px-6 py-2 font-semibold rounded shadow hover:bg-[#e65a28] transition">
                  Register Now
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}
