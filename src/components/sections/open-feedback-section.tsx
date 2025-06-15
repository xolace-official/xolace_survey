/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Lightbulb, MessageCircle, Zap } from "lucide-react"

interface OpenFeedbackSectionProps {
  data: any
  updateData: (updates: any) => void
}

export function OpenFeedbackSection({ data, updateData }: OpenFeedbackSectionProps) {
  const questions = [
    {
      key: "dailyMotivation",
      title: "What would bring you back every day?",
      description: "Even just for a few minutes - what would make Xolace irresistible?",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      placeholder: "Share what would make you excited to return to our quiet campfire...",
    },
    {
      key: "newIdeas",
      title: "Dream features or ideas",
      description: "Any new concepts you'd love to see in our peaceful space?",
      icon: Lightbulb,
      color: "from-blue-500 to-purple-500",
      placeholder: "Let your imagination run free - what would make Xolace even more special?",
    },
    {
      key: "improvements",
      title: "How can we improve?",
      description: "What could we do better to serve your wellbeing journey?",
      icon: MessageCircle,
      color: "from-green-500 to-teal-500",
      placeholder: "Share any thoughts on how we can better support you and our community...",
    },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          Your voice shapes our quiet campfire. Share your thoughts freely.
        </p>
      </div>

      <div className="space-y-8">
        {questions.map((question) => {
          const IconComponent = question.icon
          return (
            <div key={question.key} className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${question.color} flex items-center justify-center shrink-0`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <Label htmlFor={question.key} className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {question.title}
                  </Label>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{question.description}</p>
                </div>
              </div>

              <div className="ml-16">
                <Textarea
                  id={question.key}
                  placeholder={question.placeholder}
                  value={data[question.key]}
                  onChange={(e) => updateData({ [question.key]: e.target.value })}
                  className="min-h-[120px] backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 focus:border-white/40 dark:focus:border-gray-600/40 resize-none"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
