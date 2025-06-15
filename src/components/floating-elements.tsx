"use client"

export function FloatingElements() {

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Abstract shapes */}
      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-primary/5 blur-3xl" />

      {/* Feather */}
      <div className="absolute top-[30%] left-[5%] opacity-10">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 8L8 16M21 3L15 9M15 3L21 9M9 15L3 21M12 12L3 3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Floating lantern */}
      <div className="absolute top-[15%] right-[15%] opacity-10">
        <svg width="40" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9 21H15M12 3V4M12 21V12M9 12H15M15 12C18 12 20 10 20 7C20 4 17.5 2 15 2H9C6.5 2 4 4 4 7C4 10 6 12 9 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Abstract human figures */}
      <div className="absolute bottom-[10%] right-[10%] opacity-10">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="6" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3M6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3M18 21V16C18 13.7909 15.3137 12 12 12M12 12C8.68629 12 6 13.7909 6 16V21M12 12V21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
