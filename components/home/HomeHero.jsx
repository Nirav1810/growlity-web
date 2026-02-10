"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const typingPhrases = [
  "EcoVadis Assessment",
  "CDP Disclosures",
  "ESG Reporting",
  "GHG Emissions Accounting",
  "ESG Data Assurance",
  "Sustainability Goals",
  "Net Zero Strategy",
  "SBTi Roadmap",
  "CBAM Reporting",
  "EPD Listing",
  "LCA Calculations",
  "Carbon Neutrality",
  "Carbon Credits",
  "Green Building Certifications",
  "ISO Certifications",
  "SCS-007 Certification",
  "RJC Certification",
  "ResponsibleSteel Certification",
  "B Corp Certification",
  "Annual Sustainability Report"
]

export default function HomeHero({ content }) {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = typingPhrases[phraseIndex]
    const atEnd = charIndex === current.length
    const atStart = charIndex === 0

    const typeSpeed = 90
    const deleteSpeed = 55
    const pauseAtEnd = 1400
    const pauseAtStart = 400

    let delay = isDeleting ? deleteSpeed : typeSpeed
    if (!isDeleting && atEnd) {
      delay = pauseAtEnd
    } else if (isDeleting && atStart) {
      delay = pauseAtStart
    }

    const id = setTimeout(() => {
      if (!isDeleting) {
        if (!atEnd) {
          setCharIndex(value => value + 1)
        } else {
          setIsDeleting(true)
        }
      } else {
        if (!atStart) {
          setCharIndex(value => value - 1)
        } else {
          setIsDeleting(false)
          setPhraseIndex(value => (value + 1) % typingPhrases.length)
        }
      }
    }, delay)

    return () => clearTimeout(id)
  }, [charIndex, isDeleting, phraseIndex])

  const typedText = typingPhrases[phraseIndex].slice(0, charIndex)

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-10 md:px-6 md:py-14">
        <div className="mb-8 space-y-3">
          <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            <span className="block">{content.title}</span>
            <span className="mt-1 block text-[#3daf5c] dark:text-primary">
              <span>{typedText}</span>
              <span className="ml-1 inline-block h-[1.15em] w-[2px] translate-y-[3px] bg-[#3daf5c] dark:bg-primary animate-pulse" />
            </span>
          </div>
        </div>
        <div className="relative rounded-3xl bg-gradient-to-r from-sky-50 via-slate-50 to-emerald-50 dark:from-sky-950/40 dark:via-background dark:to-emerald-950/40 p-[3px] shadow-md">
          <div className="relative h-[420px] w-full overflow-hidden rounded-[1.45rem] md:h-[520px] lg:h-[580px]">
            <Image
              src="/images/home/growlity-inc-1.webp"
              alt="Growlity ESG and sustainability consulting"
              fill
              priority
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/85 via-white/60 to-transparent md:bg-gradient-to-l md:from-white/80 md:via-white/65 md:to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-start px-4 pb-6 md:inset-y-0 md:right-0 md:inset-x-auto md:flex md:items-center md:justify-end md:px-12 md:pb-0">
              <div className="w-full max-w-[520px] text-left">
                <p className="text-base font-semibold text-slate-900 md:text-xl">
                  The future belongs to businesses with Environmental, Social & Governance (ESG) at their core.
                </p>
                <p className="mt-3 text-sm text-slate-700 md:text-lg">
                  We help you achieve growth with sustainability.
                </p>
                <div className="mt-5 flex flex-wrap gap-4">
                  <Button asChild size="sm" className="md:h-11 md:px-6 md:text-base">
                    <Link href={content.primaryCtaHref}>{content.primaryCtaLabel}</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="md:h-11 md:px-6 md:text-base">
                    <Link href={content.secondaryCtaHref}>{content.secondaryCtaLabel}</Link>
                  </Button>
                </div>
                <p className="mt-4 text-sm font-medium text-slate-600">
                  {content.statsLabel}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
