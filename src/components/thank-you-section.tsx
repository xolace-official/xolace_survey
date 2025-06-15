"use client"

import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Users } from "lucide-react"

interface ThankYouSectionProps {
  onRestart: () => void
}

export function ThankYouSection({ onRestart }: ThankYouSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl p-8 md:p-12">
          {/* Success Animation */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 mb-6 shadow-lg animate-pulse">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Thank You Message */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-6">
            Thank You!
          </h1>

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Your voice helps us nurture our quiet campfire into a space where everyone can find peace, connection, and
            authentic expression.
          </p>

          {/* Impact Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Community Driven</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Built with insights from voices like yours</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Always Improving</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Your feedback shapes every update</p>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Wellbeing First</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Every feature serves your peace of mind</p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              We'll review every response carefully and share updates on how your input shapes Xolace.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={onRestart}
                variant="outline"
                className="border-white/30 dark:border-gray-700/30 hover:bg-white/10 dark:hover:bg-gray-800/10"
              >
                Take Survey Again
              </Button>

              <Button
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                onClick={() => window.open("https://xolace.app", "_blank")}
              >
                Visit Xolace
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
