"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsVisible(false), 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 to-purple-800 z-50 flex items-center justify-center">
      <style jsx global>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }

        .loading-spinner {
          animation: spin 2s linear infinite;
        }

        .loading-pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        .fade-out {
          animation: fadeOut 0.5s ease-out forwards;
        }
      `}</style>

      <div className="text-center text-white">
        <div className="loading-pulse mb-8">
          <div className="text-4xl font-bold mb-2">
            hack
            <br />
            fest
            <br />
            <span className="text-2xl">2024</span>
          </div>
        </div>

        <div className="w-64 bg-white/20 rounded-full h-2 mb-4">
          <div
            className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-sm opacity-80">Loading amazing experience... {progress}%</div>

        <div className="loading-spinner mt-8">
          <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full mx-auto"></div>
        </div>
      </div>

      {progress >= 100 && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 fade-out"></div>
      )}
    </div>
  )
}
