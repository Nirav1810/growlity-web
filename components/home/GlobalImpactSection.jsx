import Image from "next/image"

export default function GlobalImpactSection({ content }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="mb-6 text-center">
          <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary">
            {content.heading}
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {content.subheading}
          </h2>
        </div>
        <div className="relative mx-auto h-72 w-full max-w-5xl overflow-hidden rounded-3xl md:h-96 lg:h-[420px]">
          <Image
            src="/images/home/growlity-worldwild-1024x542.png.webp"
            alt={content.imageAlt}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}
