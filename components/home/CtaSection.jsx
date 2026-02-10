import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection({ content }) {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[100rem] px-4 py-10 md:flex md:items-center md:justify-between md:px-6 md:py-14">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            {content.eyebrow}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {content.title}
          </h2>
          <p className="text-xs md:text-sm opacity-90">{content.body}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button asChild size="sm" variant="secondary">
            <Link href={content.ctaHref}>{content.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
