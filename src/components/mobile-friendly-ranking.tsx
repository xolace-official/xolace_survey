"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { GripVertical, ChevronUp, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface MobileFriendlyRankingProps {
  items: string[]
  value: string[]
  onChange: (ranking: string[]) => void
}

export function MobileFriendlyRanking({ items, value, onChange }: MobileFriendlyRankingProps) {
    console.log(items)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const [dropTargetIndex, setDropTargetIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragElementRef = useRef<HTMLDivElement>(null)

  // Detect touch device
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
    }

    checkTouchDevice()
    window.addEventListener("resize", checkTouchDevice)
    return () => window.removeEventListener("resize", checkTouchDevice)
  }, [])

  // Button-based reordering
  const moveItem = (fromIndex: number, direction: "up" | "down" | "top" | "bottom") => {
    const newRanking = [...value]
    const item = newRanking[fromIndex]

    // Remove item from current position
    newRanking.splice(fromIndex, 1)

    // Insert at new position
    let newIndex: number
    switch (direction) {
      case "up":
        newIndex = Math.max(0, fromIndex - 1)
        break
      case "down":
        newIndex = Math.min(newRanking.length, fromIndex + 1)
        break
      case "top":
        newIndex = 0
        break
      case "bottom":
        newIndex = newRanking.length
        break
    }

    newRanking.splice(newIndex, 0, item)
    onChange(newRanking)
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent, item: string, index: number) => {
    if (!isTouchDevice) return

    const touch = e.touches[0]
    setTouchStartY(touch.clientY)
    setDraggedItem(item)
    setDraggedIndex(index)

    // Add haptic feedback if available
    if ("vibrate" in navigator) {
      navigator.vibrate(50)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!draggedItem || !touchStartY || draggedIndex === null) return

    e.preventDefault()
    const touch = e.touches[0]
    const deltaY = touch.clientY - touchStartY

    // Start dragging if moved enough
    if (!isDragging && Math.abs(deltaY) > 10) {
      setIsDragging(true)
    }

    if (isDragging) {
      setDragOffset({ x: 0, y: deltaY })

      // Calculate drop target
      const containerRect = containerRef.current?.getBoundingClientRect()
      if (containerRect) {
        const relativeY = touch.clientY - containerRect.top
        const itemHeight = 80 // Approximate item height
        const targetIndex = Math.floor(relativeY / itemHeight)
        setDropTargetIndex(Math.max(0, Math.min(value.length - 1, targetIndex)))
      }
    }
  }

  const handleTouchEnd = () => {
    if (isDragging && draggedIndex !== null && dropTargetIndex !== null && draggedIndex !== dropTargetIndex) {
      const newRanking = [...value]
      const item = newRanking[draggedIndex]

      // Remove item from current position
      newRanking.splice(draggedIndex, 1)

      // Insert at new position
      const adjustedDropIndex = dropTargetIndex > draggedIndex ? dropTargetIndex - 1 : dropTargetIndex
      newRanking.splice(adjustedDropIndex, 0, item)

      onChange(newRanking)
    }

    // Reset state
    setDraggedItem(null)
    setDraggedIndex(null)
    setTouchStartY(null)
    setIsDragging(false)
    setDragOffset({ x: 0, y: 0 })
    setDropTargetIndex(null)
  }

  // Mouse event handlers for desktop
  const handleMouseDown = (e: React.MouseEvent, item: string, index: number) => {
    if (isTouchDevice) return

    setDraggedItem(item)
    setDraggedIndex(index)
    setTouchStartY(e.clientY)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!draggedItem || !touchStartY || draggedIndex === null || isTouchDevice) return

    const deltaY = e.clientY - touchStartY

    if (!isDragging && Math.abs(deltaY) > 5) {
      setIsDragging(true)
    }

    if (isDragging) {
      setDragOffset({ x: 0, y: deltaY })

      const containerRect = containerRef.current?.getBoundingClientRect()
      if (containerRect) {
        const relativeY = e.clientY - containerRect.top
        const itemHeight = 80
        const targetIndex = Math.floor(relativeY / itemHeight)
        setDropTargetIndex(Math.max(0, Math.min(value.length - 1, targetIndex)))
      }
    }
  }

  const handleMouseUp = () => {
    if (isTouchDevice) return
    handleTouchEnd()
  }

  return (
    <div className="space-y-2">
      {/* Instructions */}
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 p-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm">
        {isTouchDevice ? (
          <p>
            <strong>Touch & drag</strong> items to reorder, or use the arrow buttons.
            <strong>Tap and hold</strong> to start dragging.
          </p>
        ) : (
          <p>
            <strong>Click & drag</strong> items to reorder, or use the arrow buttons for precise control.
          </p>
        )}
      </div>

      {/* Ranking List */}
      <div
        ref={containerRef}
        className="space-y-3 relative"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {value.map((item, index) => {
          const isBeingDragged = draggedItem === item && isDragging
          const isDropTarget = dropTargetIndex === index && isDragging && draggedIndex !== index

          return (
            <div
              key={item}
              className={cn(
                "relative flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm transition-all duration-200",
                isBeingDragged
                  ? "bg-white/30 dark:bg-gray-800/30 shadow-lg scale-105 z-10"
                  : "bg-white/10 dark:bg-gray-800/10 hover:bg-white/20 dark:hover:bg-gray-800/20",
                isDropTarget && "border-2 border-orange-500/50 bg-orange-500/10",
              )}
              style={
                isBeingDragged
                  ? {
                      transform: `translate(${dragOffset.x}px, ${dragOffset.y}px)`,
                      position: "relative",
                      zIndex: 1000,
                    }
                  : {}
              }
              onTouchStart={(e) => handleTouchStart(e, item, index)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={(e) => handleMouseDown(e, item, index)}
            >
              {/* Drag Handle */}
              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "cursor-grab active:cursor-grabbing p-1 rounded",
                    isTouchDevice ? "touch-manipulation" : "",
                  )}
                >
                  <GripVertical className="w-5 h-5 text-gray-400" />
                </div>

                {/* Rank Number */}
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold">
                  {index + 1}
                </span>
              </div>

              {/* Item Text */}
              <span className="flex-1 text-gray-800 dark:text-gray-200 select-none text-sm sm:text-base">{item}</span>

              {/* Control Buttons */}
              <div className="flex items-center gap-1">
                {/* Mobile: Show fewer buttons */}
                {isTouchDevice ? (
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveItem(index, "up")}
                      disabled={index === 0}
                      className="h-8 w-8 p-0"
                      aria-label={`Move ${item} up`}
                    >
                      <ChevronUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveItem(index, "down")}
                      disabled={index === value.length - 1}
                      className="h-8 w-8 p-0"
                      aria-label={`Move ${item} down`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  /* Desktop: Show all buttons */
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveItem(index, "top")}
                      disabled={index === 0}
                      className="h-8 px-2 text-xs hidden sm:block"
                      aria-label={`Move ${item} to top`}
                    >
                      Top
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveItem(index, "up")}
                      disabled={index === 0}
                      className="h-8 w-8 p-0"
                      aria-label={`Move ${item} up`}
                    >
                      <ChevronUp className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveItem(index, "down")}
                      disabled={index === value.length - 1}
                      className="h-8 w-8 p-0"
                      aria-label={`Move ${item} down`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => moveItem(index, "bottom")}
                      disabled={index === value.length - 1}
                      className="h-8 px-2 text-xs hidden sm:block"
                      aria-label={`Move ${item} to bottom`}
                    >
                      Bottom
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Drop indicator for touch devices */}
      {isDragging && dropTargetIndex !== null && (
        <div
          className="absolute left-0 right-0 h-1 bg-orange-500 rounded-full z-50 transition-all duration-150"
          style={{
            top: `${dropTargetIndex * 80 + 40}px`,
          }}
        />
      )}
    </div>
  )
}
