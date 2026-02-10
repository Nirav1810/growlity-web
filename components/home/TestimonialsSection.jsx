"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsSection({ content }) {
  const itemCount = content.items?.length ?? 0

  const [slidesPerView, setSlidesPerView] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  useEffect(() => {
    function update() {
      if (typeof window === "undefined") return
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(1)
      }
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const extendedSlides = useMemo(() => {
    if (!itemCount) return []
    const baseItems = content.items ?? []
    const cloneCountLocal = Math.min(itemCount, slidesPerView)
    const prefix = baseItems
      .slice(-cloneCountLocal)
      .map((item, index) => ({ ...item, _index: itemCount - cloneCountLocal + index }))
    const core = baseItems.map((item, index) => ({ ...item, _index: index }))
    const suffix = baseItems.slice(0, cloneCountLocal).map((item, index) => ({ ...item, _index: index }))
    return [...prefix, ...core, ...suffix]
  }, [content.items, itemCount, slidesPerView])

  const cloneCount = useMemo(() => {
    if (!itemCount) return 0
    return Math.min(itemCount, slidesPerView)
  }, [itemCount, slidesPerView])

  useEffect(() => {
    if (!itemCount) return
    setCurrentIndex(cloneCount)
  }, [itemCount, cloneCount])

  const maxIndex = extendedSlides.length - 1

  const goTo = useCallback(
    index => {
      if (!extendedSlides.length) return
      setIsTransitioning(true)
      setCurrentIndex(prev => {
        if (index < 0) return 0
        if (index > maxIndex) return maxIndex
        return index
      })
    },
    [extendedSlides.length, maxIndex]
  )

  const goNext = useCallback(() => {
    if (!extendedSlides.length) return
    goTo(currentIndex + 1)
  }, [currentIndex, extendedSlides.length, goTo])

  const goPrev = useCallback(() => {
    if (!extendedSlides.length) return
    goTo(currentIndex - 1)
  }, [currentIndex, extendedSlides.length, goTo])

  const autoPlay = true
  const autoPlayDelay = 2000

  useEffect(() => {
    if (!autoPlay || isHovered || !extendedSlides.length) return
    const id = window.setInterval(() => {
      goNext()
    }, autoPlayDelay)
    return () => window.clearInterval(id)
  }, [autoPlay, autoPlayDelay, extendedSlides.length, goNext, isHovered])

  function handleTransitionEnd() {
    if (!itemCount) return
    let index = currentIndex
    if (currentIndex >= itemCount + cloneCount) {
      index = currentIndex - itemCount
    } else if (currentIndex < cloneCount) {
      index = currentIndex + itemCount
    }
    if (index !== currentIndex) {
      setIsTransitioning(false)
      setCurrentIndex(index)
    } else {
      setIsTransitioning(false)
    }
  }

  const centerOffset = Math.floor(slidesPerView / 2)
  const highlightedIndex =
    itemCount === 0
      ? -1
      : ((currentIndex - cloneCount + centerOffset + itemCount) % itemCount)

  const translatePercentage = -currentIndex * (100 / (slidesPerView || 1))

  function handleTouchStart(event) {
    const touch = event.touches[0]
    touchStartX.current = touch.clientX
    touchDeltaX.current = 0
    setIsHovered(true)
  }

  function handleTouchMove(event) {
    if (touchStartX.current == null) return
    const touch = event.touches[0]
    touchDeltaX.current = touch.clientX - touchStartX.current
  }

  function handleTouchEnd() {
    const threshold = 50
    if (touchDeltaX.current > threshold) {
      goPrev()
    } else if (touchDeltaX.current < -threshold) {
      goNext()
    }
    touchStartX.current = null
    touchDeltaX.current = 0
    setIsHovered(false)
  }

  const hasMultiple = itemCount > 1

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="mb-10 max-w-3xl mx-auto space-y-2 text-center">
          <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary">
            {content.heading}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {content.subheading}
          </h2>
        </div>
        <div className="relative mt-10 flex items-center py-8 md:py-10 lg:py-12">
          <button
            type="button"
            onClick={goPrev}
            disabled={!hasMultiple}
            className="absolute left-[-1.75rem] top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed md:inline-flex h-9 w-9 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <div
            className="w-full overflow-hidden py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex ${isTransitioning ? "transition-transform duration-500" : ""}`}
              style={{
                transform: `translateX(${translatePercentage}%)`
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedSlides.map((item, index) => {
                const rating = item.rating ?? 5
                const isHighlighted = item._index === highlightedIndex
                const width = 100 / (slidesPerView || 1)
                return (
                  <div
                    key={`${item.name}-${index}`}
                    style={{ flex: `0 0 ${width}%` }}
                    className="px-3"
                  >
                    <Card
                      className={`flex h-full flex-col justify-between rounded-3xl px-8 py-8 shadow-md transition-all duration-300 ${
                        isHighlighted
                          ? "bg-card ring-2 ring-[#4286f5] shadow-xl scale-[1.02]"
                          : "bg-card/90 scale-[0.98] opacity-90"
                      }`}
                    >
                      <CardContent className="flex h-full flex-col justify-between gap-6 p-0 pt-3">
                        <div className="space-y-4">
                          <p className="text-sm text-muted-foreground">
                            {item.quote}
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-center gap-1 text-amber-400">
                            {Array.from({ length: rating }).map((_, starIndex) => (
                              <svg
                                key={starIndex}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-4 w-4"
                              >
                                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="font-semibold text-foreground">
                              {item.name}
                            </p>
                            <p className="text-xs text-primary">
                              {item.role}
                            </p>
                          </div>
                          <div>
                            <Link
                              href={item.href}
                              className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
                            >
                              Case Study
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ml-2 h-3 w-3"
                              >
                                <path d="M7 17 17 7" />
                                <path d="M7 7h10v10" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
          <button
            type="button"
            onClick={goNext}
            disabled={!hasMultiple}
            className="absolute right-[-1.75rem] top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-primary text-primary-foreground shadow-md hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed md:inline-flex h-9 w-9 items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
