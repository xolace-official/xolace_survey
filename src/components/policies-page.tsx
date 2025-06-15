"use client"

import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { PolicyAccordion } from "@/components/policy-accordion"
import { SearchBar } from "@/components/search-bar"
import { FeedbackWidget } from "@/components/feedback-widget"
import { AiAssistant } from "@/components/ai-assistant"
import { BackToTopButton } from "@/components/back-to-top-button"
import { Feather, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FloatingElements } from "@/components/floating-elements"

export default function PoliciesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showAiAssistant, setShowAiAssistant] = useState(false)

  const policies = [
    {
      id: "community-guidelines",
      title: "Community Guidelines",
      content: `Our community guidelines are designed to ensure Xolace remains a safe, supportive space for all users. We believe in freedom of expression, but not at the expense of others' wellbeing.

Key principles:
• Respect others' boundaries and identities
• No hate speech, harassment, or bullying
• No sharing of harmful content
• Respect anonymity and privacy of others
• Be mindful of content that may be triggering

Violations may result in content removal, temporary restrictions, or permanent account suspension depending on severity and frequency.`,
    },
    {
      id: "privacy-policy",
      title: "Privacy Policy",
      content: `At Xolace, we take your privacy seriously. We collect only the information necessary to provide our services and improve your experience.

Data we collect:
• Account information (email, username)
• Optional profile information
• Content you choose to share
• Usage data and analytics
• Device information

We never sell your personal data to third parties. Anonymous posts cannot be traced back to your account by other users, but are stored securely in our systems for moderation purposes.

You can request a copy of your data or deletion of your account at any time through your account settings.`,
    },
    {
      id: "terms-of-use",
      title: "Terms of Use",
      content: `By using Xolace, you agree to these Terms of Use. Our platform is designed for individuals seeking a supportive community for mental wellbeing and expression.

Key terms:
• You must be 16+ to use Xolace
• You are responsible for maintaining account security
• Xolace reserves the right to remove content that violates our guidelines
• We may update these terms with reasonable notice
• While we strive to maintain platform availability, we cannot guarantee uninterrupted service

These terms constitute the entire agreement between you and Xolace regarding use of our services.`,
    },
    {
      id: "ai-usage",
      title: "AI Usage & Limitations",
      content: `Xolace incorporates AI to enhance your experience, but we believe in transparency about how and when AI is used.

Our AI systems:
• Help moderate content for community safety
• Provide optional conversation assistance when requested
• Suggest resources based on content (when enabled)
• May help summarize long discussions (clearly labeled)

AI limitations:
• Our AI is not a replacement for professional mental health support
• AI responses are generated based on patterns, not human understanding
• All AI interactions are optional and clearly labeled
• You can disable AI features in your settings at any time`,
    },
    {
      id: "reporting",
      title: "Reporting & Safety Tools",
      content: `Your safety is our priority. We provide multiple ways to report concerns and protect yourself on Xolace.

Available tools:
• Content reporting (posts, comments, messages)
• User blocking and muting options
• Content warnings and filters
• Emergency resources access
• Direct line to human moderators

All reports are reviewed by trained team members, typically within 24 hours. Urgent safety concerns are prioritized. We keep reporters anonymous to those being reported.`,
    },
    {
      id: "user-roles",
      title: "User Roles & Responsibilities",
      content: `Xolace has different types of users with varying responsibilities and capabilities.

Role types:
• Standard users: Regular community members
• Verified mental health professionals: Licensed practitioners who have completed our verification process
• Community moderators: Experienced users who help maintain community standards
• Support advocates: Specially trained team members who can provide platform guidance

Each role has specific permissions and responsibilities detailed in our full documentation. Verification processes for special roles include credential checks and training requirements.`,
    },
  ]

  const filteredPolicies = policies.filter(
    (policy) =>
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.content.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <FloatingElements />

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border flex justify-between items-center px-4 md:px-8 py-3">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Back to home">
            <Home className="h-5 w-5" />
          </Button>
          <h1 className="text-lg font-medium hidden md:block">Xolace Policies</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAiAssistant(!showAiAssistant)}
            className="text-xs md:text-sm"
          >
            {showAiAssistant ? "Hide AI Helper" : "AI Helper"}
          </Button>
          <ModeToggle />
        </div>
      </nav>

      <main className="container max-w-3xl mx-auto px-4 py-8 relative z-10">
        {/* Intro Section */}
        <div className="mb-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Feather className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Promise to You</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            At Xolace, we believe in transparency and respect. These policies are designed to create a safe space where
            everyone can express themselves freely while feeling protected and valued.
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        {/* Policy Sections */}
        <div className="mt-8 space-y-4">
          {filteredPolicies.length > 0 ? (
            filteredPolicies.map((policy) => (
              <PolicyAccordion key={policy.id} title={policy.title} content={policy.content} searchTerm={searchQuery} />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No policies match your search.</p>
              <Button variant="outline" onClick={() => setSearchQuery("")} className="mt-4">
                Clear Search
              </Button>
            </div>
          )}
        </div>

        {/* Feedback Widget */}
        <div className="mt-12">
          <FeedbackWidget />
        </div>

        {/* AI Assistant Popup */}
        <AiAssistant isOpen={showAiAssistant} onClose={() => setShowAiAssistant(false)} />

        {/* Back to Top Button */}
        <BackToTopButton />
      </main>
    </div>
  )
}
