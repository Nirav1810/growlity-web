"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {}
})

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState("light")

  function applyTheme(next) {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    if (next === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.add(prefersDark ? "dark" : "light")
      localStorage.removeItem("theme")
      setThemeState(prefersDark ? "dark" : "light")
    } else {
      root.classList.add(next)
      localStorage.setItem("theme", next)
      setThemeState(next)
    }
  }

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") {
      applyTheme(stored)
    } else {
      applyTheme("system")
    }
  }, [])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const stored = localStorage.getItem("theme")
      if (!stored) {
        applyTheme("system")
      }
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: applyTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
