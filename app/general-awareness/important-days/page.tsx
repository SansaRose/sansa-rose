import Link from 'next/link'
import React from 'react'

const ImportantDaysPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
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
          className="grid gap-4 sm:grid-cols-2"
          aria-label="Months for important days"
        >
          <Link
            href="/general-awareness/important-days/january"
            className="group rounded-2xl border border-slate-600/80 bg-slate-800/50 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-sm transition-all hover:border-amber-500/60 hover:bg-slate-800/70 hover:shadow-amber-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <span className="text-xl font-bold text-amber-100 group-hover:text-white">
              January
            </span>
          </Link>

          <Link
            href="/general-awareness/important-days/february"
            className="group rounded-2xl border border-slate-600/80 bg-slate-800/50 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-sm transition-all hover:border-amber-500/60 hover:bg-slate-800/70 hover:shadow-amber-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <span className="text-xl font-bold text-amber-100 group-hover:text-white">
              February
            </span>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default ImportantDaysPage
