"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-gray-50 px-4 py-6 hidden-initial animate-fade-in-up sticky top-0 z-50 border-b border-gray-200">
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
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

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 animate-pulse-slow">
          <div className="text-2xl font-bold text-purple-600">
            hack
            <br />
            fest
            <br />
            <span className="text-sm">2024</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`transition-colors duration-300 ${
              pathname === "/" ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors duration-300 ${
              pathname === "/about" ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/problem-statement"
            className={`transition-colors duration-300 ${
              pathname === "/problem-statement"
                ? "text-purple-600 font-semibold"
                : "text-gray-700 hover:text-purple-600"
            }`}
          >
            Challenges
          </Link>
          <Link
            href="/schedule"
            className={`transition-colors duration-300 ${
              pathname === "/schedule" ? "text-purple-600 font-semibold" : "text-gray-700 hover:text-purple-600"
            }`}
          >
            Schedule
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full button-hover">
            Register Now →
          </Button>
        </nav>
      </div>
    </header>
  )
}
