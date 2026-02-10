"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function PlanetImpactSection({ content }) {
  const [emissions, setEmissions] = useState(null)

  useEffect(() => {
    const match = content.headline.match(/([\d,]+)/)
    const initial = match ? Number(match[1].replace(/,/g, "")) : 0
    const perSecond = 1200
    const intervalMs = 10
    const incrementPerTick = (perSecond * intervalMs) / 1000

    setEmissions(initial)

    const id = setInterval(() => {
      setEmissions(previous =>
        previous == null ? initial + incrementPerTick : previous + incrementPerTick
      )
    }, intervalMs)

    return () => clearInterval(id)
  }, [content.headline])

  const formattedEmissions =
    emissions == null ? null : Math.floor(emissions).toLocaleString("en-US")

  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-3xl bg-gradient-to-r from-sky-50 via-slate-50 to-emerald-50 dark:from-sky-950/40 dark:via-background dark:to-emerald-950/40 p-4 shadow-sm md:p-6">
          <div className="grid gap-6 md:grid-cols-[2.2fr,3fr]">
            <div className="flex items-center justify-center">
              <div className="relative h-64 w-full max-w-full overflow-hidden rounded-3xl bg-muted md:h-[600px] md:w-[500px]">
                <Image
                  src="/images/home/planat image.webp"
                  alt="Planet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {content.label}
              </h2>
              <p className="text-3xl font-bold tracking-tight text-[#4286f5] md:text-4xl lg:text-5xl">
                {formattedEmissions ?? content.headline}
              </p>
              <p className="mb-4 text-lg font-semibold text-[#3daf5c] md:text-xl">
                {content.subheadline}
              </p>
              <p className="mb-3 text-sm text-muted-foreground md:text-base">
                {content.body}
              </p>
              <p className="text-sm text-muted-foreground md:text-base">
                {content.body2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
