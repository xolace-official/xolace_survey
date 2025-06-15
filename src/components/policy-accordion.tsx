"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"

interface PolicyAccordionProps {
  title: string
  content: string
  searchTerm?: string
}

export function PolicyAccordion({ title, content, searchTerm = "" }: PolicyAccordionProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Highlight matching text if there's a search term
  const highlightText = (text: string) => {
    if (!searchTerm) return text

    const regex = new RegExp(`(${searchTerm})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span key={i} className="bg-primary/20 text-primary-foreground px-1 rounded">
          {part}
        </span>
      ) : (
        part
      ),
    )
  }

  // Format content with proper line breaks
  const formatContent = (text: string) => {
    return text.split("\n\n").map((paragraph, index) => (
      <p key={index} className="mb-4">
        {highlightText(paragraph)}
      </p>
    ))
  }

  return (
    <Accordion
      type="single"
      collapsible
      className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
      value={isOpen ? "item-1" : ""}
      onValueChange={(val) => setIsOpen(val === "item-1")}
    >
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger
          className={cn("px-6 py-4 hover:no-underline hover:bg-muted/50 transition-all", isOpen && "bg-muted/50")}
        >
          <div className="flex items-center gap-3 text-left">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-primary text-sm font-medium">{title.charAt(0)}</span>
            </div>
            <span className="font-medium text-lg">{highlightText(title)}</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 py-4 text-muted-foreground">
          <div className="pl-11">{formatContent(content)}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
