import React from 'react'

import { constitutionalOfficials } from '@/assets/general-awareness/who-is-who'

const WhoIsWho = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-950 py-10 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400/90 mb-2">
            General Awareness
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
            Who is Who
          </h1>
          <div
            className="mt-4 h-1 w-24 mx-auto rounded-full bg-linear-to-r from-amber-600 via-amber-400 to-amber-600 opacity-80"
            aria-hidden
          />
        </header>

        <section
          className="rounded-2xl border border-slate-600/80 bg-slate-800/60 shadow-2xl shadow-slate-950/50 backdrop-blur-sm overflow-hidden"
          aria-labelledby="constitutional-officials-heading"
        >
          <div className="bg-linear-to-r from-amber-700 via-amber-600 to-amber-700 px-4 py-4 sm:py-5 text-center">
            <h2
              id="constitutional-officials-heading"
              className="text-lg sm:text-xl font-bold text-white tracking-wide"
            >
              {constitutionalOfficials.sectionTitle}
            </h2>
          </div>

          <ul className="divide-y divide-slate-700/90">
            {constitutionalOfficials.items.map((item) => (
              <li
                key={item.index}
                className="group px-4 py-5 sm:px-6 sm:py-6 bg-linear-to-r from-slate-800/80 to-slate-800/40 hover:from-slate-800 hover:to-slate-800/70 transition-colors duration-300"
              >
                <div className="flex gap-4 sm:gap-5">
                  <span
                    className="shrink-0 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold text-sm sm:text-base shadow-inner"
                    aria-hidden
                  >
                    {item.index}
                  </span>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    <p className="text-slate-400 text-xs sm:text-sm font-medium uppercase tracking-wide">
                      {item.designation}
                    </p>
                    <p className="text-lg sm:text-xl font-semibold text-slate-100 leading-snug">
                      {item.nameAndOrdinal}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}

export default WhoIsWho
