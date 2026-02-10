import Link from "next/link"
import Image from "next/image"

// Icon components for each solution type
const Icons = {
  ecovadis: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M8 11h8" />
      <path d="M8 15h8" />
      <path d="M12 7v8" />
    </svg>
  ),
  "net-zero": (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  ),
  cdp: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  lca: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 4.97 4.03 9 9 9" />
      <path d="M12 3v9" />
      <path d="M16.5 7.5 12 12" />
      <path d="M7.5 7.5 12 12" />
    </svg>
  ),
  rjc: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  "esg-reporting": (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
}

export default function SolutionCard({ item }) {
  const Icon = Icons[item.id] || Icons.ecovadis

  return (
    <div className="group relative h-auto min-h-[220px] w-full cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-2xl sm:min-h-[260px] lg:h-[340px] lg:flex-1 lg:hover:flex-[1.5]">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3daf5c] via-[#3daf5c] to-[#4286f5] transition-colors duration-500 group-hover:from-[#4286f5] group-hover:via-[#4286f5] group-hover:to-[#3daf5c]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      {/* Content Container */}
      <div className="relative flex h-full flex-col p-5 sm:p-6 lg:p-8">
        {/* Top Section: Logo & Icon */}
        <div className="flex items-start justify-between">
          <div className="relative">
            <Image
              src="/images/home/growlity-logo.png.webp"
              alt="Growlity"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          
          {/* Animated Icon */}
          <div className="absolute right-6 top-6 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:right-[-20px] group-hover:top-[-20px] group-hover:rotate-12 group-hover:scale-[1.8] lg:right-8 lg:top-8">
            <Icon className="h-16 w-16 text-white/40 transition-colors duration-500 group-hover:text-white/20 sm:h-20 sm:w-20 lg:h-24 lg:w-24" strokeWidth="1" />
          </div>
        </div>

        {/* Bottom Section: Text Content */}
        <div className="mt-auto relative z-10">
          <h3 className="text-xl font-bold leading-tight text-white transition-all duration-500 group-hover:translate-y-[-10px] sm:text-2xl group-hover:text-3xl">
            {item.title}
          </h3>
          
          {/* Expandable Description */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:mt-4 group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <div className="overflow-hidden">
              <p className="mb-6 text-sm leading-relaxed text-white/90">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition-transform duration-300 hover:scale-105"
              >
                {item.linkLabel}
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
