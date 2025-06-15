"use client"

export function BackgroundElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/20 to-teal-400/20 blur-3xl animate-pulse delay-2000" />

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full bg-orange-400/40 animate-bounce delay-300" />
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full bg-blue-400/40 animate-bounce delay-700" />
      <div className="absolute bottom-32 left-1/3 w-2 h-2 rounded-full bg-purple-400/40 animate-bounce delay-1000" />
      <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full bg-green-400/40 animate-bounce delay-1500" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)]" />
    </div>
  )
}
