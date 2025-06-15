/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Slider } from "@/components/ui/slider"
import { MobileFriendlyRanking } from "@/components/mobile-friendly-ranking"  

interface FeatureInterestSectionProps {
  data: any
  updateData: (updates: any) => void
}

export function FeatureInterestSection({ data, updateData }: FeatureInterestSectionProps) {
  const features = [
    {
      key: "dailyPrompts",
      title: "Daily Check-in Prompts",
      description: "Gentle questions to help you reflect and share",
    },
    {
      key: "weeklyThemes",
      title: "Weekly Themed Discussions",
      description: "Topics like creativity, self-care, gratitude",
    },
    {
      key: "anonymousSharing",
      title: "Anonymous Peer Sharing Circles",
      description: "Safe spaces to share without judgment",
    },
    {
      key: "expertQA",
      title: "Short Expert Q&A Sessions",
      description: "Brief insights from mental health professionals",
    },
  ]

  const rankingOptions = [
    "Daily mindfulness reminders",
    "Community challenges (gratitude, creativity)",
    "One-on-one peer support matching",
    "Guided meditation sessions",
    "Weekly reflection journals",
    "Anonymous mood check-ins",
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          Rate how important these features would be to your Xolace experience
        </p>
      </div>

      {/* Feature Rating Sliders */}
      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.key} className="p-6 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>Not Important</span>
                <span>Very Important</span>
              </div>

              <Slider
                value={[data[feature.key]]}
                onValueChange={(value) => updateData({ [feature.key]: value[0] })}
                max={5}
                min={1}
                step={1}
                className="w-full"
              />

              <div className="text-center">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold">
                  {data[feature.key]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feature Ranking */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Rank these potential features by priority
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Most important at the top, least important at the bottom
        </p>

        <MobileFriendlyRanking
          items={rankingOptions}
          value={data.featureRanking.length > 0 ? data.featureRanking : rankingOptions}
          onChange={(ranking) => updateData({ featureRanking: ranking })}
        />
      </div>
    </div>
  )
}
