import React from 'react'
import Link from 'next/link'

const primaryUnitsList = [
  ['01', 'Salaries and Wages (Pay & Allowances of Departmental Establishment)'],
  ['02', 'Dearness Allowance'],
  ['03', 'Productivity Linked Bonus'],
  ['04', 'Payment to Casual Labour'],
  ['05', 'Other Contractual Staff'],
  ['06', 'Purchased Power (Electricity)'],
  ['07', 'HBA/Festival Advance Interest'],
  ['08', 'Other Establishment Expenses'],
  ['09', 'Leased Line Charges'],
  ['10', 'Other Office Expenses'],
  ['11', 'DEMU/EMU OHE/Pantograph Maintenance'],
  ['12', 'Locos'],
  ['13', 'Carriages'],
  ['14', 'Wagons'],
  ['15', 'Coaches/Power Cars'],
  ['16', 'Other Rolling Stock'],
  ['17', 'Furniture & Fixtures'],
  ['18', 'Machinery & Equipment'],
  ['19', 'Tools & Plants'],
  ['21', 'Payment to Contractors (Works Contracts)'],
  ['22', 'Material Purchased from Firms'],
  ['23', 'Other Stores Purchased'],
  ['24', 'Power (Fuel for Power Houses)'],
  ['25', 'Stores (General)'],
  ['26', 'Other Direct Expenses'],
  ['27', 'Demurrage & Wharfage'],
  ['28', 'Terminal Charges'],
  ['30', 'Training Expenses'],
  ['31', 'Advertising & Publicity'],
  ['32', 'Miscellaneous Expenses'],
  ['99', 'Other Expenses (Catch-all for unclassified items)'],
]

const PrimaryUnits = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-pink-950/60 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_40%_at_50%_-12%,rgba(236,72,153,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="bg-linear-to-r from-pink-100 via-rose-100 to-fuchsia-100 bg-clip-text text-3xl font-extrabold leading-tight tracking-tight text-transparent sm:text-4xl md:text-[2.35rem]">
            Primary Units Overview
          </h1>
          <div className="mx-auto mt-6 h-px max-w-xs bg-linear-to-r from-transparent via-pink-500/50 to-transparent" />
        </header>

        <article className="rounded-2xl border border-pink-500/25 bg-slate-900/55 p-6 shadow-xl shadow-black/25 ring-1 ring-pink-500/10 backdrop-blur-md sm:p-8">
          <p className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
            Primary Units (PU), also called Object Heads, are the last two digits in Indian Railways&apos; 8-10 digit
            allocation codes (e.g., Demand-Source-Plan Head-Sub Head-Detailed Head-PU). They classify expenditure by
            element of cost (e.g., salaries, stores, contracts), enabling detailed analysis in revenue, capital
            (Demand 16), and pension budgets per Finance Code Volume II.
          </p>
        </article>

        <section className="mt-8 rounded-2xl border border-pink-500/20 bg-slate-900/40 p-6 shadow-lg shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-pink-50 sm:text-2xl">Complete List of Primary Units</h2>
          <div className="mt-4 h-px w-16 rounded-full bg-pink-500/40" />
          <p className="mt-6 text-base leading-relaxed text-slate-300/95 sm:text-[1.05rem] sm:leading-[1.75]">
            Standard PUs from Indian Railway Finance Code (Appendix 1) and allocation rules:
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-pink-500/20 bg-slate-950/50 ring-1 ring-white/5">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-200">
              <thead>
                <tr className="border-b border-pink-500/25 bg-pink-950/30">
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-pink-200/95 sm:px-5">
                    PU Code
                  </th>
                  <th className="px-4 py-3.5 text-xs font-bold uppercase tracking-wider text-pink-200/95 sm:px-5">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {primaryUnitsList.map(([code, description]) => (
                  <tr key={code} className="border-b border-white/5 align-top transition-colors last:border-b-0 hover:bg-white/3">
                    <td className="px-4 py-3 font-mono font-semibold text-pink-100/90 sm:px-5">{code}</td>
                    <td className="px-4 py-3 leading-relaxed sm:px-5">{description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-fuchsia-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-fuchsia-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-fuchsia-100 sm:text-2xl">Usage Examples</h2>
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-fuchsia-500/15 bg-slate-950/35 px-4 py-4 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem]">
              Track Renewal (PH 31): 16-00-31-21-22-01 → Salaries for renewal works.
            </div>
            <div className="rounded-2xl border border-fuchsia-500/15 bg-slate-950/35 px-4 py-4 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem]">
              Fuel: 10-08-00-00-00-24 → HSD/Diesel purchase.
            </div>
            <div className="rounded-2xl border border-fuchsia-500/15 bg-slate-950/35 px-4 py-4 text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem]">
              PUs adapt slightly by Abstract/Demand but remain consistent for object-wise control.
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-2xl border border-rose-500/20 bg-slate-900/45 p-6 shadow-lg shadow-black/20 ring-1 ring-rose-500/10 backdrop-blur-sm sm:p-8">
          <h2 className="text-xl font-bold tracking-tight text-rose-100 sm:text-2xl">Key Notes</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                Works Budget: Emphasizes 01 (dept. pay), 04 (casual), 21 (contracts).
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                Revenue: Focuses on fuel (24), power (06), rolling stock (12-16).
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                Code 99: Residual head; minimized via precise classification.
              </span>
            </li>
            <li className="flex gap-4 rounded-2xl border border-rose-500/15 bg-slate-950/35 px-4 py-4">
              <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400 shadow-[0_0_0_4px_rgba(251,113,133,0.12)]" />
              <span className="text-base leading-relaxed text-slate-200/95 sm:text-[1.05rem] sm:leading-[1.8]">
                This structure supports CAG audits and performance tracking.
              </span>
            </li>
          </ul>
        </section>

        <div className="mt-10 flex justify-center">
          <Link
            href="/topics/financial-rules"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-slate-900/70 px-4 py-2 text-sm font-medium text-emerald-100 shadow-lg shadow-black/15 ring-1 ring-emerald-500/10 transition hover:border-emerald-300/45 hover:bg-slate-900/90"
          >
            <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
              ←
            </span>
            <span>Back to Financial Rules page</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PrimaryUnits