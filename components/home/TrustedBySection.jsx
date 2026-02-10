export default function TrustedBySection({ content }) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-10 md:px-6">
        <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {content.heading}
        </h2>
        <div className="space-y-4">
          {content.rows?.map((row, index) => {
            const directionClass =
              index === 1 ? "logo-marquee-right" : "logo-marquee-left"

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-border bg-muted/40 py-3"
              >
                <div className={directionClass}>
                  <div className="logo-marquee-row">
                    {row.map((label, i) => (
                      <div
                        key={`${label}-${i}`}
                        className="flex h-12 min-w-[8rem] items-center justify-center rounded-lg bg-card px-4 text-xs font-medium text-muted-foreground shadow-sm border border-border/60"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div className="logo-marquee-row" aria-hidden="true">
                    {row.map((label, i) => (
                      <div
                        key={`${label}-${i}`}
                        className="flex h-12 min-w-[8rem] items-center justify-center rounded-lg bg-card px-4 text-xs font-medium text-muted-foreground shadow-sm border border-border/60"
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
