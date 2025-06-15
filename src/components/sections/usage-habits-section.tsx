// eslint-disable @typescript-eslint/no-explicit-any
"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface UsageHabitsSectionProps {
  data: any
  updateData: (updates: any) => void
}

export function UsageHabitsSection({ data, updateData }: UsageHabitsSectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-400">
          Help us understand how you&apos;d like to engage with our quiet campfire
        </p>
      </div>

      {/* Visit Frequency */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          How often would you like to visit Xolace?
        </h3>
        <RadioGroup
          value={data.visitFrequency}
          onValueChange={(value) => updateData({ visitFrequency: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[
            { value: "daily", label: "Daily - A few minutes each day" },
            { value: "several-weekly", label: "Several times per week" },
            { value: "weekly", label: "Weekly - A longer, mindful session" },
            { value: "less", label: "Less frequently - When I need support" },
          ].map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Time Per Visit */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          On average, how many minutes would you spend per visit?
        </h3>
        <RadioGroup
          value={data.timePerVisit}
          onValueChange={(value) => updateData({ timePerVisit: value })}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { value: "0-5", label: "0-5 minutes", desc: "Quick check-in" },
            { value: "5-10", label: "5-10 minutes", desc: "Mindful moment" },
            { value: "10+", label: "10+ minutes", desc: "Deep engagement" },
          ].map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                <div className="font-medium">{option.label}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{option.desc}</div>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Preferred Time */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          When would you most likely visit Xolace?
        </h3>
        <RadioGroup
          value={data.preferredTime}
          onValueChange={(value) => updateData({ preferredTime: value })}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {[
            { value: "morning", label: "Morning - Start the day mindfully" },
            { value: "afternoon", label: "Afternoon - Midday reflection" },
            { value: "evening", label: "Evening - Wind down peacefully" },
            { value: "varies", label: "It varies - Whenever I need it" },
          ].map((option) => (
            <div
              key={option.value}
              className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
            >
              <RadioGroupItem value={option.value} id={option.value} />
              <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  )
}
