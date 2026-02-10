import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CareersSection({ content }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="rounded-3xl bg-emerald-600 px-6 py-10 text-white md:flex md:items-center md:justify-between md:px-10">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Careers
            </p>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {content.heading}
            </h2>
            <p className="text-xs md:text-sm opacity-90">{content.body}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild size="sm" variant="secondary">
              <Link href={content.ctaHref}>{content.ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
