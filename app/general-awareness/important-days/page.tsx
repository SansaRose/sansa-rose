import Link from 'next/link'
import React from 'react'

const MONTHS = [
  { href: '/general-awareness/important-days/january', label: 'January' },
  { href: '/general-awareness/important-days/february', label: 'February' },
  { href: '/general-awareness/important-days/march', label: 'March' },
  { href: '/general-awareness/important-days/april', label: 'April' },
  { href: '/general-awareness/important-days/may', label: 'May' },
  { href: '/general-awareness/important-days/june', label: 'June' },
  { href: '/general-awareness/important-days/july', label: 'July' },
  { href: '/general-awareness/important-days/august', label: 'August' },
  { href: '/general-awareness/important-days/september', label: 'September' },
  { href: '/general-awareness/important-days/october', label: 'October' },
  { href: '/general-awareness/important-days/november', label: 'November' },
  { href: '/general-awareness/important-days/december', label: 'December' },
] as const

const ImportantDaysPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Important Days
          </h1>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 opacity-80"
            aria-hidden
          />
        </header>

        <nav
          className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          aria-label="Months for important days"
        >
          {MONTHS.map((month, index) => (
            <Link
              key={month.href}
              href={month.href}
              className="group relative flex flex-col justify-between min-h-22 rounded-2xl border border-slate-600/50 bg-linear-to-br from-slate-800/70 via-slate-800/50 to-slate-900/70 p-5 sm:p-6 shadow-lg shadow-slate-950/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/45 hover:shadow-xl hover:shadow-amber-950/25 hover:from-slate-800/90 hover:via-slate-800/80 hover:to-indigo-950/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              <span
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-amber-500/40 to-transparent opacity-60 group-hover:opacity-100 group-hover:via-amber-400/70 transition-opacity"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/5 blur-2xl group-hover:bg-amber-400/10 transition-colors"
                aria-hidden
              />

              <div className="flex items-start justify-between gap-3">
                <span
                  className="text-[0.65rem] font-bold tabular-nums tracking-widest text-amber-500/50 group-hover:text-amber-400/80 transition-colors"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-slate-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg leading-none"
                  aria-hidden
                >
                  →
                </span>
              </div>

              <span className="mt-2 text-xl sm:text-[1.35rem] font-bold tracking-tight text-amber-100/95 group-hover:text-white transition-colors">
                {month.label}
              </span>

              <span
                className="mt-3 h-0.5 w-0 rounded-full bg-linear-to-r from-amber-500 to-amber-300 group-hover:w-12 transition-all duration-300 ease-out"
                aria-hidden
              />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default ImportantDaysPage
