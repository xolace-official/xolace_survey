"use client"

import type React from "react"

import { useState } from "react"
import { GripVertical } from "lucide-react"

interface DragDropRankingProps {
  items: string[]
  value: string[]
  onChange: (ranking: string[]) => void
}

export function DragDropRanking({ items, value, onChange }: DragDropRankingProps) {
  console.log(items)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item)
    e.dataTransfer.effectAllowed = "move"
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    setDragOverIndex(index)
  }

  const handleDragLeave = () => {
    setDragOverIndex(null)
  }

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault()

    if (!draggedItem) return

    const currentIndex = value.indexOf(draggedItem)
    const newRanking = [...value]

    // Remove item from current position
    newRanking.splice(currentIndex, 1)

    // Insert at new position
    newRanking.splice(dropIndex, 0, draggedItem)

    onChange(newRanking)
    setDraggedItem(null)
    setDragOverIndex(null)
  }

  return (
    <div className="space-y-3">
      {value.map((item, index) => (
        <div
          key={item}
          draggable
          onDragStart={(e) => handleDragStart(e, item)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, index)}
          className={`
            flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-all cursor-move
            ${
              dragOverIndex === index
                ? "bg-white/30 dark:bg-gray-800/30 border-2 border-orange-500/50"
                : "bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20"
            }
            ${draggedItem === item ? "opacity-50" : ""}
          `}
        >
          <div className="flex items-center gap-3 flex-1">
            <GripVertical className="w-5 h-5 text-gray-400" />
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold">
              {index + 1}
            </span>
            <span className="text-gray-800 dark:text-gray-200">{item}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
