"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const aboutItems = [
  { label: "Our Company", href: "/about" },
  { label: "Our Initiatives", href: "/about/initiatives" },
  { label: "Our Collaborations", href: "/about/collaborations" },
  { label: "Our Team", href: "/about/team" },
  { label: "Careers", href: "/careers" }
]

const serviceColumns = [
  {
    title: "Strategy and Advisory",
    items: [
      { label: "ESG Assessment", href: "/services/esg-assessment" },
      { label: "Net Zero & Decarbonisation", href: "/services/net-zero" },
      { label: "Science Based Targets Initiative (SBTi)", href: "/services/sbti" },
      { label: "Lifecycle Assessment (LCA)", href: "/services/lca" },
      { label: "Product Carbon Footprint (PCF)", href: "/services/pcf" },
      { label: "Sustainable Development Goals", href: "/services/sdgs" },
      { label: "Carbon Credits", href: "/services/carbon-credits" }
    ]
  },
  {
    title: "Ratings and Disclosures",
    items: [
      { label: "EcoVadis Assessment", href: "/services/ecovadis-assessment" },
      { label: "Carbon Disclosure Project (CDP)", href: "/services/cdp" },
      { label: "Environmental Product Declaration (EPD)", href: "/services/epd" },
      { label: "S&P ESG Score", href: "/services/sp-esg-score" },
      { label: "Sustainalytics ESG Rating Support", href: "/services/sustainalytics" }
    ]
  },
  {
    title: "Certifications",
    items: [
      { label: "RJC Certification", href: "/services/rjc-certification" },
      { label: "SCS-007 (Diamonds)", href: "/services/scs-007" },
      { label: "ISO Certification", href: "/services/iso-certification" },
      { label: "Green Building Certification", href: "/services/green-building" },
      { label: "B-Corporation", href: "/services/b-corp" }
    ]
  },
  {
    title: "Reporting and Training",
    items: [
      { label: "Annual Sustainability Report (ASR)", href: "/services/asr" },
      { label: "ESG Reporting", href: "/services/esg-reporting" },
      { label: "BRSR", href: "/services/brsr" },
      { label: "Materiality Assessment", href: "/services/materiality-assessment" },
      { label: "GHG Emissions Accounting", href: "/services/ghg-accounting" },
      { label: "CBAM Reporting", href: "/services/cbam-reporting" },
      { label: "ESG Assurance", href: "/services/esg-assurance" },
      { label: "Value Chain Partner Assessment", href: "/services/value-chain-assessment" }
    ]
  }
]

const resourceItems = [
  { label: "Blogs", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Webinars", href: "/resources/webinars" },
  { label: "Publications", href: "/resources/publications" }
]

export default function SiteHeader() {
  const [openMenu, setOpenMenu] = useState(null)
  const [activeServiceCategory, setActiveServiceCategory] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [mobileServiceCategory, setMobileServiceCategory] = useState(null)
  const closeTimeoutRef = useRef(null)

  function handleEnter(menu) {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setOpenMenu(menu)
  }

  function handleLeave() {
    setOpenMenu(null)
    setActiveServiceCategory(null)
  }

  function handleLeaveDelayed() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    closeTimeoutRef.current = setTimeout(() => {
      handleLeave()
    }, 180)
  }

  return (
    <header className="sticky top-0 z-40 bg-background backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[100rem] px-4 py-4 md:px-6">
        <div className="relative">
          <div className="flex items-center justify-between rounded-full bg-card/50 px-6 py-4 shadow-md md:px-8 border border-border/50">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/images/home/Growlity-Logo-Website-2-new.png.webp"
                  alt="Growlity"
                  width={140}
                  height={32}
                />
              </Link>
            </div>
            <nav
              className="hidden items-center gap-6 text-base font-medium text-muted-foreground md:flex"
              onMouseLeave={handleLeaveDelayed}
            >
              <div
                className="relative"
                onMouseEnter={() => handleEnter("about")}
              >
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <span>About us</span>
                  <span className="mt-[2px] text-[10px]">▾</span>
                </button>
                {openMenu === "about" && (
                  <div
                    className="absolute left-1/2 top-full z-30 mt-3 hidden -translate-x-1/2 rounded-2xl bg-card shadow-xl md:block border border-border"
                    onMouseEnter={() => handleEnter("about")}
                    onMouseLeave={handleLeaveDelayed}
                  >
                    <div className="relative w-80 rounded-2xl bg-card">
                      {aboutItems.map(item => (
                        <div
                          key={item.href}
                          className="relative border-b border-border last:border-b-0 w-80"
                        >
                          <Link
                            href={item.href}
                            className="block w-full px-5 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div
                className="relative"
                onMouseEnter={() => handleEnter("services")}
              >
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <span>Services</span>
                  <span className="mt-[2px] text-[10px]">▾</span>
                </button>
              </div>
              <Link href="/customers" className="hover:text-primary transition-colors">
                Customers
              </Link>
              <div
                className="relative"
                onMouseEnter={() => handleEnter("resources")}
              >
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <span>Resources</span>
                  <span className="mt-[2px] text-[10px]">▾</span>
                </button>
                {openMenu === "resources" && (
                  <div
                    className="absolute left-1/2 top-full z-30 mt-3 hidden -translate-x-1/2 rounded-2xl bg-card shadow-xl md:block border border-border"
                    onMouseEnter={() => handleEnter("resources")}
                    onMouseLeave={handleLeaveDelayed}
                  >
                    <div className="relative w-80 rounded-2xl bg-card">
                      {resourceItems.map(item => (
                        <div
                          key={item.href}
                          className="relative border-b border-border last:border-b-0 w-80"
                        >
                          <Link
                            href={item.href}
                            className="block w-full px-5 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="hidden items-center gap-1 rounded-full border border-input px-4 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground md:inline-flex transition-colors">
                EN
              </button>
              <Button asChild className="hidden md:inline-flex">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground hover:bg-accent/60 hover:text-foreground md:hidden"
                onClick={() => setMobileOpen(prev => !prev)}
              >
                {mobileOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" strokeWidth={2} stroke="currentColor" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" strokeWidth={2} stroke="currentColor" fill="none">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {mobileOpen && (
          <div className="mt-3 rounded-2xl border border-border bg-card p-2 shadow-lg md:hidden">
              <nav className="space-y-1 text-sm font-medium text-muted-foreground">
                <div>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      setMobileServiceCategory(null)
                      setMobileSection(prev => (prev === "about" ? null : "about"))
                    }}
                  >
                    <span>About us</span>
                    <span className={`text-xs transition-transform ${mobileSection === "about" ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {mobileSection === "about" && (
                    <div className="mt-1 space-y-1 rounded-xl bg-card px-3 py-2">
                      {aboutItems.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                    onClick={() =>
                      setMobileSection(prev => {
                        const next = prev === "services" ? null : "services"
                        if (next === null) {
                          setMobileServiceCategory(null)
                        }
                        return next
                      })
                    }
                  >
                    <span>Services</span>
                    <span className={`text-xs transition-transform ${mobileSection === "services" ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {mobileSection === "services" && (
                    <div className="mt-1 space-y-2 rounded-xl bg-card px-2 py-2">
                      {serviceColumns.map((column, index) => (
                        <div key={column.title} className="rounded-xl border border-border/60 bg-card/90">
                          <button
                            className="flex w-full items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                            onClick={() =>
                              setMobileServiceCategory(prev => (prev === index ? null : index))
                            }
                          >
                            <span>{column.title}</span>
                            <span
                              className={`text-xs transition-transform ${
                                mobileServiceCategory === index ? "rotate-180" : ""
                              }`}
                            >
                              ▾
                            </span>
                          </button>
                          {mobileServiceCategory === index && (
                            <div className="border-t border-border/60 px-3 py-2">
                              <div className="space-y-1">
                                {column.items.map(item => (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-2 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    href="/customers"
                    onClick={() => setMobileOpen(false)}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <span>Customers</span>
                  </Link>
                </div>
                <div>
                  <button
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                    onClick={() => {
                      setMobileServiceCategory(null)
                      setMobileSection(prev => (prev === "resources" ? null : "resources"))
                    }}
                  >
                    <span>Resources</span>
                    <span className={`text-xs transition-transform ${mobileSection === "resources" ? "rotate-180" : ""}`}>▾</span>
                  </button>
                  {mobileSection === "resources" && (
                    <div className="mt-1 space-y-1 rounded-xl bg-card px-3 py-2">
                      {resourceItems.map(item => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-lg px-2 py-1.5 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div className="pt-1">
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setMobileOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
          {openMenu === "services" && (
            <div
              className="absolute left-1/2 top-full z-30 mt-3 hidden -translate-x-1/2 rounded-2xl bg-card shadow-xl md:block border border-border"
              onMouseEnter={() => handleEnter("services")}
              onMouseLeave={handleLeaveDelayed}
            >
              <div className="relative w-80 rounded-2xl bg-card">
                {serviceColumns.map((column, index) => (
                  <div
                    key={column.title}
                    className="relative border-b border-border last:border-b-0 w-80"
                    onMouseEnter={() => setActiveServiceCategory(index)}
                  >
                    <button className="flex w-full items-center justify-between px-5 py-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
                      <span>{column.title}</span>
                      <span className="h-2 w-2 rotate-45 border-r border-t border-muted-foreground" />
                    </button>
                    {activeServiceCategory === index && (
                      <div className="absolute left-full top-[-10px] z-40 w-72 rounded-2xl bg-card py-2 shadow-xl border border-border">
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {column.items.map(item => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="block px-4 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
