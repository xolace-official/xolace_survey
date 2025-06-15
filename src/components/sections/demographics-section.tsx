"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DemographicsSectionProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateData: (updates: any) => void
}

export function DemographicsSection({ data, updateData }: DemographicsSectionProps) {
  const ageRanges = ["16-24", "25-34", "35-44", "45-54", "55-64", "65+"]

  const timeZones = [
    "Pacific (PST/PDT)",
    "Mountain (MST/MDT)",
    "Central (CST/CDT)",
    "Eastern (EST/EDT)",
    "Atlantic",
    "Europe",
    "Asia",
    "Other",
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-gray-600 dark:text-gray-400">Help us understand our community better (all optional)</p>
      </div>

      {/* Age Range */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Age Range (Optional)</h3>
        <RadioGroup
          value={data?.ageRange}
          onValueChange={(value) => updateData({ ageRange: value })}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {ageRanges.map((range) => (
            <div
              key={range}
              className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
            >
              <RadioGroupItem value={range} id={range} />
              <Label htmlFor={range} className="flex-1 cursor-pointer">
                {range}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Time Zone */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Time Zone (Optional)</h3>
        <Select value={data.timeZone} onValueChange={(value) => updateData({ timeZone: value })}>
          <SelectTrigger className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20">
            <SelectValue placeholder="Select your time zone" />
          </SelectTrigger>
          <SelectContent>
            {timeZones.map((zone) => (
              <SelectItem key={zone} value={zone}>
                {zone}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* How did you hear about us */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          How did you hear about Xolace? (Optional)
        </h3>
        <RadioGroup
          value={data.hearAboutUs}
          onValueChange={(value) => updateData({ hearAboutUs: value })}
          className="space-y-3"
        >
          {[
            "Social media",
            "Friend or family",
            "Mental health professional",
            "Online search",
            "Blog or article",
            "Other",
          ].map((source) => (
            <div
              key={source}
              className="flex items-center space-x-3 p-4 rounded-xl bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-gray-800/20 transition-all"
            >
              <RadioGroupItem value={source} id={source} />
              <Label htmlFor={source} className="flex-1 cursor-pointer">
                {source}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Email for follow-up */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Stay Connected (Optional)</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Leave your email if you&apos;d like updates on new features or beta invites
        </p>
        <Input
          type="email"
          placeholder="your@email.com"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border-white/20 dark:border-gray-700/20 focus:border-white/40 dark:focus:border-gray-600/40"
        />
      </div>
    </div>
  )
}
