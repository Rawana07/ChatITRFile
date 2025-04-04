import * as React from "react"

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border p-4 shadow-md bg-white">
      {children}
    </div>
  )
}