import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutSection({ content }) {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-[2fr,3fr] md:items-center">
          <div className="relative h-56 w-full overflow-hidden rounded-3xl bg-muted md:h-72">
            <Image
              src="/images/home/about-office.webp"
              alt="Growlity office"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-2 text-xl font-semibold uppercase tracking-[0.2em] text-primary">
              {content.eyebrow}
            </div>
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {content.title}
            </h2>
            <p className="mb-4 max-w-3xl text-sm text-muted-foreground md:text-base">
              {content.body}
            </p>
            <ul className="mb-6 space-y-1 text-sm text-muted-foreground">
              {content.bullets.map(item => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Button asChild size="sm">
              <Link href={content.ctaHref}>{content.ctaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
