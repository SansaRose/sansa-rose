import Link from 'next/link'
import { Train, FileText, ScrollText } from 'lucide-react'

type FooterNavItem = {
  href: string
  label: string
  Icon: typeof FileText
}

const EXPLORE_LINKS: FooterNavItem[] = [
  { href: '/pdfs', label: 'PDF Documents', Icon: FileText },
  { href: '/syllabus', label: 'Syllabus', Icon: ScrollText },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 text-white">
      <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-indigo-950 to-[#1a0f2e]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 90% 60% at 15% -10%, rgba(139, 92, 246, 0.28), transparent),
            radial-gradient(ellipse 70% 50% at 100% 100%, rgba(59, 130, 246, 0.22), transparent)
          `,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mask-[linear-gradient(to_bottom,transparent,black_35%,black_90%,transparent)]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.45) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.45) 1px,transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -right-20 -top-36 h-88 w-88 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="-bottom-24 -left-12 absolute h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative z-10 h-px w-full bg-linear-to-r from-transparent via-violet-400/45 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-stretch lg:justify-between lg:gap-14">
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-2xl outline-offset-4 transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400"
            >
              <span className="flex lg:h-12 lg:w-12 h-8 w-8 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md transition duration-300 group-hover:bg-white/15 group-hover:ring-violet-300/35">
                <Train className="lg:h-6 lg:w-6 h-5 w-5 text-violet-100" aria-hidden />
              </span>
              <span className="lg:text-2xl text-xl font-bold tracking-tight bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent drop-shadow-sm">
                AOM Aspirant
              </span>
            </Link>
          </div>

          <section
            aria-labelledby="footer-explore-heading"
            className="w-full max-w-md lg:w-[min(100%,420px)] lg:shrink-0"
          >
            <div className="rounded-lg border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/25 backdrop-blur-md ">
              
              <ul className="mt-2 flex flex-col gap-3">
                {EXPLORE_LINKS.map(({ href, label, Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group flex items-center gap-4 rounded-lg border border-white/8 bg-white/4 px-4 py-4 transition hover:border-violet-400/25 hover:bg-white/8"
                    >
                      <span className="flex lg:h-11 lg:w-11 h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-violet-500/30 to-blue-600/25 text-white ring-1 ring-white/10">
                        <Icon className="h-5 w-5 opacity-95" aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 text-left text-base font-semibold text-white">
                        {label}
                      </span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 text-white/45 transition group-hover:bg-violet-500/25 group-hover:text-white">
                        <svg
                          className="h-4 w-4 transition group-hover:translate-x-px"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-6">
          <p className="text-center text-sm leading-relaxed text-indigo-200/70 sm:text-left">
            <Link href="/" className="font-semibold text-indigo-100 transition hover:text-white">
              AOM Aspirant
            </Link>{' '}
            Copyright © {year}
            {'. For educational purposes only.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
