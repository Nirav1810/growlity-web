import Image from "next/image"

export default function SiteFooter() {
  return (
    <>
      <footer className="bg-[#4286f5] text-white">
        <div className="mx-auto max-w-[100rem] px-4 py-6 md:px-6 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="max-w-xl space-y-2.5">
              <div className="h-10 w-auto">
                <Image
                  src="/images/home/Growlity-Website-logo.png.webp"
                  alt="Growlity"
                  width={160}
                  height={40}
                />
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-semibold leading-snug md:text-4xl md:leading-tight lg:text-5xl">
                  Let’s Discuss Your Ideas
                </p>
                <p className="text-xs md:text-sm opacity-90">
                  From EcoVadis assessments to Net Zero strategy and ESG reporting, we help you
                  turn climate goals into lasting business value.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm space-y-2 text-xs md:text-sm">
              <p className="text-sm font-semibold md:text-base">Our Newsletter</p>
              <p className="text-xs opacity-90">
                For our latest eco-friendly tips and planet positive updates, subscribe below.
              </p>
              <form className="space-y-1.5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md border border-transparent bg-white px-3 py-1.5 text-xs text-slate-900 placeholder-slate-500 outline-none focus-visible:ring-2 focus-visible:ring-[#3daf5c]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border border-transparent bg-white px-3 py-1.5 text-xs text-slate-900 placeholder-slate-500 outline-none focus-visible:ring-2 focus-visible:ring-[#3daf5c]"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-[#3daf5c] px-3 py-2 text-xs font-semibold text-white hover:bg-[#2f8c4a]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="mt-6 border-t border-white/30 md:mt-10" />
          <div className="mt-5 grid grid-cols-2 gap-3 text-xs leading-snug md:grid-cols-4 md:mt-8 md:gap-6 md:text-sm">
            <div className="space-y-1">
              <p className="font-semibold">Navigation</p>
              <ul className="space-y-1 opacity-90">
                <li>Home</li>
                <li>About Us</li>
                <li>Blogs</li>
                <li>Case Studies</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Services</p>
              <ul className="space-y-1 opacity-90">
                <li>EcoVadis Assessment</li>
                <li>Net Zero & Decarbonisation</li>
                <li>CDP Disclosure</li>
                <li>LCA and EPD</li>
                <li>ESG Reporting</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold">Growlity, Inc.</p>
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot mt-[2px]" aria-hidden="true" />
                <span>575, Fifth Avenue, New York, NY 10017, USA</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span>+1 917 963 8963</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <span>contact@growlity.com</span>
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold">Growlity Private Limited</p>
              <p className="flex items-start gap-2">
                <i className="fa-solid fa-location-dot mt-[2px]" aria-hidden="true" />
                <span>316, Rajhans Montessa, Airport Rd, Surat 395007, India</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span>+91 960 131 0999</span>
              </p>
              <p className="flex items-center gap-2">
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                <span>contact@growlity.com</span>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="border-t border-border/40 bg-background py-4">
        <div className="mx-auto flex max-w-[100rem] flex-col items-center gap-3 px-4 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-sm">
          <div className="space-y-1">
            <p>Copyrights © {new Date().getFullYear()} Growlity, Inc. | All Rights Reserved</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3daf5c] text-[#3daf5c] transition-colors hover:bg-[#e3f7ea] md:h-9 md:w-9"
              >
                <i className="fa-brands fa-linkedin-in text-[14px]" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3daf5c] text-[#3daf5c] transition-colors hover:bg-[#e3f7ea] md:h-9 md:w-9"
              >
                <i className="fa-brands fa-facebook-f text-[14px]" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3daf5c] text-[#3daf5c] transition-colors hover:bg-[#e3f7ea] md:h-9 md:w-9"
              >
                <i className="fa-brands fa-x-twitter text-[14px]" aria-hidden="true" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#3daf5c] text-[#3daf5c] transition-colors hover:bg-[#e3f7ea] md:h-9 md:w-9"
              >
                <i className="fa-brands fa-youtube text-[16px]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="fixed bottom-8 left-4 z-50 inline-flex items-center rounded-full bg-[#4286f5] px-6 py-3 text-sm font-semibold text-white shadow-2xl hover:bg-[#3269c2] md:left-8 md:text-base"
      >
        Schedule a Call
      </a>
    </>
  )
}
