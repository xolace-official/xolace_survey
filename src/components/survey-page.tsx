"use client"

import { useState } from "react"
import { WelcomeSection } from "@/components/welcome-section"
import { SurveyForm } from "@/components/survey-form"
import { ThankYouSection } from "@/components/thank-you-section"
import { BackgroundElements } from "@/components/background-elements"

export default function SurveyPage() {
  const [currentStep, setCurrentStep] = useState<"welcome" | "survey" | "complete">("welcome")



  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      <BackgroundElements />

      <div className="relative z-10">
        {currentStep === "welcome" && <WelcomeSection onStart={() => setCurrentStep("survey")} />}

        {currentStep === "survey" && <SurveyForm onComplete={() => setCurrentStep("complete")} />}

        {currentStep === "complete" && <ThankYouSection onRestart={() => setCurrentStep("welcome")} />}
      </div>
    </div>
  )
}
