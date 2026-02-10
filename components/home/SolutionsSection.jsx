import SolutionCard from "./SolutionCard"

export default function SolutionsSection({ content }) {
  return (
    <section id="solutions" className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 max-w-2xl space-y-3 text-center md:mx-auto">
          <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary">
            {content.heading}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {content.subheading}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {content.description}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-5">
            {content.items.slice(0, 3).map((item) => (
              <SolutionCard key={item.id} item={item} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:gap-5">
            {content.items.slice(3, 6).map((item) => (
              <SolutionCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
