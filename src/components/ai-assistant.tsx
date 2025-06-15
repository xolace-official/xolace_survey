"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bot, X, Send, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface AiAssistantProps {
  isOpen: boolean
  onClose: () => void
}

export function AiAssistant({ isOpen, onClose }: AiAssistantProps) {
  const [query, setQuery] = useState("")
  const [conversation, setConversation] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: "Hi there! I can help explain any policy in simpler terms. What would you like to know about?",
    },
  ])

  const handleSendMessage = () => {
    if (!query.trim()) return

    // Add user message to conversation
    setConversation([...conversation, { role: "user", content: query }])

    // Simulate AI response (in a real app, this would call an AI API)
    setTimeout(() => {
      let response = "I'm sorry, I don't have specific information about that policy section."

      if (query.toLowerCase().includes("community")) {
        response =
          "Our Community Guidelines are all about keeping Xolace safe and supportive. Basically, be respectful, don't post harmful content, and remember that repeated violations can lead to account restrictions."
      } else if (query.toLowerCase().includes("privacy")) {
        response =
          "Our Privacy Policy explains what data we collect (like your email and posts) and how we use it. We don't sell your data, and you can request a copy or deletion anytime."
      } else if (query.toLowerCase().includes("ai")) {
        response =
          "Our AI systems help moderate content and can provide assistance when you request it. They're optional, and you can disable AI features in your settings."
      }

      setConversation((prev) => [...prev, { role: "assistant", content: response }])
    }, 1000)

    setQuery("")
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 w-80 md:w-96 bg-background border border-border rounded-lg shadow-lg z-50 flex flex-col max-h-[500px]">
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <span className="font-medium">Policy Assistant</span>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 min-h-[300px]">
        {conversation.map((message, index) => (
          <div key={index} className={cn("flex gap-2 max-w-[85%]", message.role === "user" ? "ml-auto" : "mr-auto")}>
            {message.role === "assistant" && (
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
            )}
            <div
              className={cn(
                "rounded-lg p-3",
                message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
              )}
            >
              {message.content}
            </div>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="p-3 border-t border-border">
        <form
          className="flex gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            handleSendMessage()
          }}
        >
          <Input
            placeholder="Ask about any policy..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  )
}
