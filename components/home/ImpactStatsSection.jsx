const Icons = {
  Expertise: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Standards: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  ),
  Results: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
}

export default function ImpactStatsSection({ content }) {
  const getIcon = (index) => {
    switch (index) {
      case 0:
        return Icons.Expertise
      case 1:
        return Icons.Standards
      case 2:
        return Icons.Results
      default:
        return Icons.Expertise
    }
  }

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-[100rem] px-4 py-10 md:px-6 md:py-16">
        <div className="mb-10 space-y-2 text-center md:mb-12">
          <p className="text-2xl font-semibold uppercase tracking-[0.2em] text-primary">
            {content.heading}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {content.subheading}
          </h2>
        </div>
        
        <div className="relative mb-12 md:mb-16">
          {/* Connecting Line */}
          <div className="absolute left-0 top-8 hidden h-0.5 w-full -translate-y-1/2 bg-border md:block" />
          
          <div className="grid gap-5 md:grid-cols-3 md:gap-8 mx-auto max-w-2xl md:max-w-none">
            {content.pillars.map((pillar, index) => {
              const Icon = getIcon(index)
              return (
                <div key={pillar.title} className="group relative flex flex-col items-center">
                  {/* Icon Circle */}
                  <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-sm ring-1 ring-border transition-all duration-300 group-hover:bg-emerald-600 dark:group-hover:bg-blue-600 group-hover:ring-emerald-600 dark:group-hover:ring-blue-600 md:mb-8 md:h-16 md:w-16">
                    <Icon className="h-6 w-6 text-muted-foreground transition-colors duration-300 group-hover:text-white md:h-8 md:w-8" />
                  </div>

                  {/* Card */}
                  <div className="relative w-full flex-1 rounded-2xl bg-muted px-4 py-5 text-left transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#3daf5c] dark:group-hover:bg-[#4286f5] group-hover:shadow-lg md:px-6 md:py-8 md:text-center">
                    {/* Triangle Pointer */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 border-l-[12px] border-r-[12px] border-b-[12px] border-transparent border-b-muted transition-colors duration-300 group-hover:border-b-[#3daf5c] dark:group-hover:border-b-[#4286f5]" />
                    
                    <h3 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-white md:text-lg md:text-xl">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          {content.items.map((item) => (
            <div
              key={item.label}
              className="group rounded-2xl bg-card px-5 py-4 text-left shadow-sm border border-border/60 transition-all duration-300 hover:-translate-y-1 hover:bg-[#3daf5c] dark:hover:bg-primary hover:shadow-lg md:px-6 md:py-6"
            >
              <p className="text-2xl font-semibold text-foreground group-hover:text-primary-foreground md:text-3xl">
                {item.label}
              </p>
              <p className="mt-2 text-xs text-muted-foreground group-hover:text-primary-foreground/80 md:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
