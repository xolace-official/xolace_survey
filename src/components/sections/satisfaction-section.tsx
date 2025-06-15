// eslint-disable @typescript-eslint/no-explicit-any
"use client"

import { Slider } from "@/components/ui/slider"
import { Heart, Shield, Sparkles } from "lucide-react"

interface SatisfactionSectionProps {
  data: any
  updateData: (updates: any) => void
}

export function SatisfactionSection({ data, updateData }: SatisfactionSectionProps) {
  const satisfactionMetrics = [
    {
      key: "overallSatisfaction",
      title: "Overall Experience",
      description: "How satisfied are you with Xolace's current experience?",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      key: "supportLevel",
      title: "Feeling Supported",
      description: "How supported do you feel when you post or read on Xolace?",
      icon: Heart,
      color: "from-red-500 to-orange-500",
    },
    {
      key: "calmness",
      title: "Peaceful Environment",
      description: "How well does Xolace provide a calm, non-addictive space?",
      icon: Shield,
      color: "from-blue-500 to-green-500",
    },
  ]

  const getEmoji = (value: number) => {
    if (value <= 1) return "😞"
    if (value <= 2) return "😐"
    if (value <= 3) return "🙂"
    if (value <= 4) return "😊"
    return "🤩"
  }

  const getLabel = (value: number) => {
    if (value <= 1) return "Very Dissatisfied"
    if (value <= 2) return "Dissatisfied"
    if (value <= 3) return "Neutral"
    if (value <= 4) return "Satisfied"
    return "Very Satisfied"
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-400">Share how Xolace feels to you right now</p>
      </div>

      <div className="space-y-8">
        {satisfactionMetrics.map((metric) => {
          const IconComponent = metric.icon
          return (
            <div key={metric.key} className="p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${metric.color} flex items-center justify-center`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{metric.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{metric.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>Very Dissatisfied</span>
                  <span>Very Satisfied</span>
                </div>

                <Slider
                  value={[data[metric.key]]}
                  onValueChange={(value) => updateData({ [metric.key]: value[0] })}
                  max={5}
                  min={1}
                  step={1}
                  className="w-full"
                />

                <div className="text-center">
                  <div className="text-3xl mb-2">{getEmoji(data[metric.key])}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {getLabel(data[metric.key])}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
