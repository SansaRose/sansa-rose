import React from 'react'
import Link from 'next/link'
import { AlertTriangle, BadgeCheck, Building2, CircleCheck, Milestone, Split } from 'lucide-react'

const topics = [
  {
    href: '/topics/operating-material/authorised-officer',
    title: 'Authorised Officer',
    icon: BadgeCheck,
  },
  {
    href: '/topics/operating-material/block-section',
    title: 'Block Section',
    icon: Split,
  },
  {
    href: '/topics/operating-material/fouling-mark',
    title: 'Fouling Mark',
    icon: Milestone,
  },
  {
    href: '/topics/operating-material/line-clear',
    title: 'Line Clear',
    icon: CircleCheck,
  },
  {
    href: '/topics/operating-material/obstruction',
    title: 'Obstruction',
    icon: AlertTriangle,
  },
  {
    href: '/topics/operating-material/station',
    title: 'Station',
    icon: Building2,
  },
]

const OperatingMaterialPage = () => {
  return (
    <section className="relative min-h-screen overflow-x-hidden bg-linear-to-b from-slate-950 via-slate-900 to-amber-950/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-15%,rgba(251,191,36,0.14),transparent)]" />
      <div className="relative mx-auto max-w-5xl">
        <div className="rounded-2xl border border-amber-500/30 bg-slate-900/70 px-8 py-6 text-center shadow-xl shadow-black/20 ring-1 ring-amber-500/15 backdrop-blur-sm sm:px-12 sm:py-8">
          <h1 className="bg-linear-to-r from-amber-100 via-orange-100 to-yellow-100 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl">
            Operating Material
          </h1>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon
            return (
              <Link
                key={topic.href}
                href={topic.href}
                className="group relative overflow-hidden rounded-3xl border border-amber-500/25 bg-slate-900/65 p-6 shadow-xl shadow-black/20 ring-1 ring-amber-500/10 backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:border-amber-400/45 hover:bg-slate-900/80"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-amber-500/20 via-orange-500/10 to-transparent" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-lg shadow-black/10">
                      <Icon className="h-7 w-7 text-amber-200" strokeWidth={2.2} />
                    </div>
                    <span className="text-xl leading-none text-slate-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-amber-100">
                      →
                    </span>
                  </div>

                  <div className="mt-6">
                    <h2 className="text-2xl font-bold tracking-tight text-white">{topic.title}</h2>
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-amber-100/90">
                    <span>Open topic</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden>
                      →
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OperatingMaterialPage
