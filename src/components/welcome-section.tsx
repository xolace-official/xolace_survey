"use client"

import { Button } from "@/components/ui/button"
import { Flame, Heart, Users } from "lucide-react"
import Image from "next/image"
import mascot from "../../public/x-logo-full.webp"


interface WelcomeSectionProps {
  onStart: () => void
}

export function WelcomeSection({ onStart }: WelcomeSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4  bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/20 dark:bg-gray-800/20 rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-red-500 mb-6 shadow-lg">
              {/* <Flame className="w-10 h-10 text-white" /> */}
              <Image src={mascot} alt="Xolace Logo" width={70} height={70} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              Welcome to Our Quiet Campfire
            </h1>

            <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300 leading-relaxed">
              Unlike the noisy, addictive nature of traditional social media, <strong>Xolace</strong> is your calm space— A place where you can check in, share experiences, and leave feeling better than when you arrived..
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Mindful</h3>
              <p className="text-sm text-gray-200 dark:text-gray-400">Non-addictive, impact-focused interactions</p>
            </div>

            <div className="text-center p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Connected</h3>
              <p className="text-sm text-gray-200 dark:text-gray-400">Meaningful interactions that matter</p>
            </div>

            <div className="text-center p-4 rounded-2xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-3">
                <Flame className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Peaceful</h3>
              <p className="text-sm text-gray-200 dark:text-gray-400">A sanctuary from digital overwhelm</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10 text-start mb-4">
          <h4 className="text-lg font-semibold mb-3 text-blue-300">Why Your Feedback Matters</h4>
          <p className="text-white text-sm sm:text-base">
            We're in the early stages of creating something special, and your insights will directly 
            shape how Xolace grows. This survey takes about 5-7 minutes and will help us understand 
            what features would bring you back daily, what you value most, and how we can better 
            serve your need for genuine, peaceful digital connection.
          </p>
          </div>

            <Button
              onClick={onStart}
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              Share Your Voice
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
