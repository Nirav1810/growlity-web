"use client"

import { useState, useRef, useEffect } from "react"
import { faqsContent } from "@/data/home"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! I'm the Growlity assistant. How can I help you today?"
    }
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen])

  const handleQuestionClick = (question, answer) => {
    const newUserMsg = { id: Date.now(), type: "user", text: question }
    setMessages(prev => [...prev, newUserMsg])
    
    setTimeout(() => {
      const newBotMsg = { id: Date.now() + 1, type: "bot", text: answer }
      setMessages(prev => [...prev, newBotMsg])
    }, 500)
  }

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newUserMsg = { id: Date.now(), type: "user", text: inputValue }
    setMessages(prev => [...prev, newUserMsg])
    setInputValue("")

    setTimeout(() => {
      const newBotMsg = { 
        id: Date.now() + 1, 
        type: "bot", 
        text: "Thanks for your message! Our team will get back to you shortly. In the meantime, you can check our FAQs below or email us directly at contact@growlity.com." 
      }
      setMessages(prev => [...prev, newBotMsg])
    }, 1000)
  }

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-destructive rotate-90" : "bg-primary hover:bg-primary/90"
        }`}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-7 w-7 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-4 z-50 flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-300 origin-bottom-right sm:right-6 sm:w-[350px] ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-90 opacity-0 translate-y-4 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 120px)" }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4286f5] to-[#3daf5c] px-6 py-4">
          <h3 className="font-bold text-white">Growlity Assistant</h3>
          <p className="text-xs text-white/90">Ask us anything or choose a topic</p>
        </div>

        {/* Messages Area */}
        <div className="overflow-y-auto overscroll-contain bg-muted/30 p-4" style={{ height: "460px" }}>
          <div className="space-y-4 pb-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    msg.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-card text-card-foreground shadow-sm border border-border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* FAQ Suggestions */}
          <div className="mt-2 border-t border-border/60 pt-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Suggested Questions
            </p>
            <div className="space-y-2">
              {faqsContent.items.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(item.question, item.answer)}
                  className="w-full rounded-lg border border-border bg-card px-3 py-2.5 text-left text-xs font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="border-t border-border bg-background p-3">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your question..."
              className="w-full rounded-full border border-input bg-card py-3 pl-4 pr-12 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
