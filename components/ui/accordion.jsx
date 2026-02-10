import React, { useState } from "react"

export function Accordion({ type, collapsible, className = "", children }) {
  return <div className={className}>{children}</div>
}

export function AccordionItem({ value, children }) {
  const [open, setOpen] = useState(false)
  const items = React.Children.toArray(children).map(child => {
    if (!React.isValidElement(child)) return child
    if (child.type === AccordionTrigger) {
      return React.cloneElement(child, { open, setOpen })
    }
    if (child.type === AccordionContent) {
      return React.cloneElement(child, { open })
    }
    return child
  })
  return <div className="border-b border-border">{items}</div>
}

export function AccordionTrigger({ children, open, setOpen, className = "" }) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={`flex w-full items-center justify-between py-3 text-left text-sm font-medium hover:underline ${className}`}
    >
      <span>{children}</span>
      <span className={`ml-3 text-xs transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4 shrink-0 opacity-50"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </button>
  )
}

export function AccordionContent({ children, open, className = "" }) {
  if (!open) return null
  return <div className={`pb-3 text-sm text-muted-foreground ${className}`}>{children}</div>
}
