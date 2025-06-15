"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function FeedbackWidget() {
  const [feedback, setFeedback] = useState<"positive" | "negative" | null>(null)
  const [showCommentBox, setShowCommentBox] = useState(false)
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleFeedback = (type: "positive" | "negative") => {
    setFeedback(type)
    setShowCommentBox(true)
  }

  const handleSubmit = () => {
    // In a real app, you would send this feedback to your backend
    console.log("Feedback:", { type: feedback, comment })
    setSubmitted(true)
    setShowCommentBox(false)
  }

  if (submitted) {
    return (
      <div className="border border-border rounded-lg p-6 text-center bg-muted/30">
        <h3 className="font-medium text-lg mb-2">Thank you for your feedback!</h3>
        <p className="text-muted-foreground">Your input helps us improve our policies.</p>
      </div>
    )
  }

  return (
    <div className="border border-border rounded-lg p-6">
      <h3 className="font-medium text-lg mb-4 text-center">Was this helpful?</h3>

      <div className="flex justify-center gap-4">
        <Button
          variant="outline"
          size="lg"
          className={cn("flex items-center gap-2 px-6", feedback === "positive" && "bg-primary/10 border-primary")}
          onClick={() => handleFeedback("positive")}
        >
          <ThumbsUp className="h-4 w-4" />
          <span>Yes</span>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className={cn("flex items-center gap-2 px-6", feedback === "negative" && "bg-primary/10 border-primary")}
          onClick={() => handleFeedback("negative")}
        >
          <ThumbsDown className="h-4 w-4" />
          <span>No</span>
        </Button>
      </div>

      {showCommentBox && (
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-2">
            <MessageSquare className="h-5 w-5 mt-0.5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Would you like to share more about your experience?</p>
          </div>

          <Textarea
            placeholder="Your feedback helps us improve..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="min-h-[100px]"
          />

          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setShowCommentBox(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>Submit Feedback</Button>
          </div>
        </div>
      )}
    </div>
  )
}
