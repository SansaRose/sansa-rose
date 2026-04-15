import Link from 'next/link'
import React from 'react'
import { BookOpen, ChevronRight, Sparkles } from 'lucide-react'

import * as GOA from '@/assets/general-awareness/states-information/goa'

type GoaProps = {
  showBackNav?: boolean
}

function SectionShell({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <section
      className={`relative overflow-hidden rounded-2xl border border-slate-600/60 bg-slate-800/35 shadow-xl shadow-black/20 ring-1 ring-white/5 backdrop-blur-sm ${className}`}
    >
      <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-teal-500/5 blur-2xl" />
      <div className="relative px-4 py-5 sm:px-7 sm:py-7">{children}</div>
    </section>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold uppercase tracking-tight text-emerald-50 sm:text-xl">{children}</h2>
      <div
        className="mt-2 h-0.5 w-14 rounded-full bg-linear-to-r from-emerald-400/90 via-teal-500/70 to-transparent"
        aria-hidden
      />
    </div>
  )
}

function isHeadingLine(line: string, nextLine: string | undefined) {
  const t = line.trim()
  if (!t || t.includes(':') || /^\d+\./.test(t)) return false
  if (!nextLine) return false
  const n = nextLine.trim()
  return n.includes(':') || /^\d+\./.test(n)
}

function ContentLine({ line }: { line: string }) {
  const raw = line
  const trimmed = raw.trim()

  if (!trimmed) {
    return <div className="h-2" aria-hidden />
  }

  const numbered = trimmed.match(/^(\d+)\.\s*(.*)$/)
  if (numbered) {
    return (
      <div className="flex gap-3 rounded-xl border border-slate-600/40 bg-slate-900/35 px-4 py-3.5 ring-1 ring-white/5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br from-emerald-500/40 to-teal-600/25 text-sm font-bold tabular-nums text-emerald-50 ring-1 ring-emerald-400/45">
          {numbered[1]}
        </span>
        <span className="min-w-0 flex-1 pt-0.5 leading-relaxed text-slate-300">{numbered[2]}</span>
      </div>
    )
  }

  const keyValue = raw.match(/^([^:]+):(.*)$/)
  if (keyValue) {
    return (
      <div className="grid gap-1 rounded-xl border border-slate-600/40 bg-slate-900/25 px-4 py-3 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-4">
        <p className="font-semibold uppercase text-emerald-200/95">{keyValue[1].trim()}</p>
        <p className="min-w-0 whitespace-pre-wrap wrap-break-word text-slate-300">
          {keyValue[2].trim() || '—'}
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-teal-500/25 bg-teal-950/25 px-4 py-3.5 leading-relaxed text-emerald-100/95 ring-1 ring-teal-500/15">
      <p className="whitespace-pre-wrap wrap-break-word">{raw}</p>
    </div>
  )
}

function renderTableSection({
  title,
  headers,
  rows,
  keyPrefix,
}: {
  title: string
  headers: string[]
  rows: string[][]
  keyPrefix: string
}) {
  return (
    <div className="pt-3">
      <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100/95 sm:text-lg">{title}</h3>
      <div className="mt-3 overflow-x-auto rounded-xl border border-slate-600/45 ring-1 ring-white/5">
        <table className="w-full min-w-lg border-collapse text-left text-sm text-slate-200">
          <thead className="bg-slate-900/60 text-xs font-semibold uppercase tracking-wide text-emerald-200/95 sm:text-sm">
            <tr>
              <th className="w-16 px-3 py-3 text-center">S.No.</th>
              {headers.map((header) => (
                <th key={`${keyPrefix}-${header}`} className="px-3 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-600/35 bg-slate-900/20">
            {rows.map((row, i) => (
              <tr key={`${keyPrefix}-row-${i}`} className="hover:bg-slate-800/40">
                <td className="px-3 py-2.5 text-center font-semibold text-emerald-100">{i + 1}</td>
                {row.map((col, colIndex) => (
                  <td key={`${keyPrefix}-${i}-${colIndex}`} className="px-3 py-2.5 text-slate-300">
                    {col || '---'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Goa = ({ showBackNav = false }: GoaProps) => {
  const lines = GOA.goaRawContent.split('\n')
  const templeStart = lines.findIndex((line) => line.trim().startsWith('Temple/Church/Masjid'))
  const industryStart = lines.findIndex((line) => line.trim().startsWith('Industry'))
  const projectsStart = lines.findIndex((line) => line.trim().startsWith('Projects/Dams'))
  const waterfallsStart = lines.findIndex((line) => line.trim().startsWith('Waterfalls/Beach'))
  const portsStart = lines.findIndex((line) => line.trim().startsWith('Ports'))
  const hillsStart = lines.findIndex((line) => line.trim().startsWith('Hills/Valley/Caves'))
  const ramsarStart = lines.findIndex((line) => line.trim().startsWith('Ramsar Sites'))
  const elephantStart = lines.findIndex((line) => line.trim().startsWith('Elephant Reserves'))
  const nationalParkStart = lines.findIndex((line) => line.trim().startsWith('National Parks'))
  const wildlifeStart = lines.findIndex((line) => line.trim().startsWith('Wildlife Sanctuaries'))
  const zooStart = lines.findIndex((line) => line.trim().startsWith('Zoo Parks/Museum'))
  const internationalAirportsStart = lines.findIndex((line) => line.trim().startsWith('International Airports'))
  const airportsStart = lines.findIndex((line) => line.trim().startsWith('Airports'))
  const stadiumsStart = lines.findIndex((line) => line.trim().startsWith('Stadiums'))
  const iitStart = lines.findIndex((line) => line.trim().startsWith('IIT/IIM/NIT/IIIT/AIIMS'))
  const universitiesStart = lines.findIndex((line) => line.trim().startsWith('Universities'))

  const tableRowsFromBlock = (blockLines: string[], columns: number) =>
    blockLines
      .filter((line) => /^\s*\d+\./.test(line))
      .map((line) => {
        const clean = line.replace(/^\s*\d+\.\s*/, '').trim()
        const byTabs = clean
          .split(/\t+/)
          .map((part) => part.trim())
          .filter(Boolean)
        const bySpaces = clean
          .split(/\s{2,}/)
          .map((part) => part.trim())
          .filter(Boolean)
        const parts = byTabs.length > bySpaces.length ? byTabs : bySpaces
        const values = parts.slice(0, columns - 1)
        const lastValue = parts.slice(columns - 1).join(' ')
        while (values.length < columns - 1) values.push('---')
        values.push(lastValue || parts[columns - 1] || '---')

        return values
      })

  const hasTempleBlock = templeStart >= 0 && industryStart > templeStart
  const hasProjectsBlock = projectsStart >= 0 && waterfallsStart > projectsStart
  const hasWaterfallsBlock = waterfallsStart >= 0 && portsStart > waterfallsStart
  const hasPortsBlock = portsStart >= 0 && hillsStart > portsStart
  const hasHillsBlock = hillsStart >= 0 && elephantStart > hillsStart
  const hasElephantBlock = elephantStart >= 0 && ramsarStart > elephantStart
  const hasRamsarBlock = ramsarStart >= 0 && nationalParkStart > ramsarStart
  const hasNationalParkBlock = nationalParkStart >= 0 && wildlifeStart > nationalParkStart
  const hasWildlifeBlock = wildlifeStart >= 0 && zooStart > wildlifeStart
  const hasZooBlock = zooStart >= 0 && internationalAirportsStart > zooStart
  const hasInternationalAirportsBlock = internationalAirportsStart >= 0 && airportsStart > internationalAirportsStart
  const hasAirportsBlock = airportsStart >= 0 && stadiumsStart > airportsStart
  const hasStadiumsBlock = stadiumsStart >= 0 && iitStart > stadiumsStart
  const hasIitBlock = iitStart >= 0 && universitiesStart > iitStart

  const beforeTemple = hasTempleBlock ? lines.slice(0, templeStart) : hasProjectsBlock ? lines.slice(0, projectsStart) : lines
  const betweenTempleAndIndustry = hasTempleBlock ? lines.slice(templeStart, industryStart) : []
  const betweenIndustryAndProjects = hasTempleBlock && hasProjectsBlock ? lines.slice(industryStart, projectsStart) : []
  const beforeProjects = hasTempleBlock ? [] : hasProjectsBlock ? lines.slice(0, projectsStart) : lines
  const betweenProjectsAndWaterfalls = hasProjectsBlock ? lines.slice(projectsStart, waterfallsStart) : []
  const betweenWaterfallsAndPorts = hasWaterfallsBlock ? lines.slice(waterfallsStart, portsStart) : []
  const betweenPortsAndHills = hasPortsBlock ? lines.slice(portsStart, hillsStart) : []
  const betweenHillsAndElephant = hasHillsBlock ? lines.slice(hillsStart, elephantStart) : []
  const betweenElephantAndRamsar = hasElephantBlock ? lines.slice(elephantStart, ramsarStart) : []
  const betweenRamsarAndNational = hasRamsarBlock ? lines.slice(ramsarStart, nationalParkStart) : []
  const betweenNationalAndWildlife = hasNationalParkBlock ? lines.slice(nationalParkStart, wildlifeStart) : []
  const betweenWildlifeAndZoo = hasWildlifeBlock ? lines.slice(wildlifeStart, zooStart) : []
  const betweenZooAndInternationalAirports = hasZooBlock ? lines.slice(zooStart, internationalAirportsStart) : []
  const betweenInternationalAirportsAndAirports = hasInternationalAirportsBlock
    ? lines.slice(internationalAirportsStart, airportsStart)
    : []
  const betweenAirportsAndStadiums = hasAirportsBlock ? lines.slice(airportsStart, stadiumsStart) : []
  const betweenStadiumsAndIit = hasStadiumsBlock ? lines.slice(stadiumsStart, iitStart) : []
  const betweenIitAndUniversities = hasIitBlock ? lines.slice(iitStart, universitiesStart) : []
  const afterIit = hasIitBlock ? lines.slice(universitiesStart) : hasWildlifeBlock ? lines.slice(zooStart) : []

  const templeRows = tableRowsFromBlock(betweenTempleAndIndustry, 2)
  const projectRows = tableRowsFromBlock(betweenProjectsAndWaterfalls, 3)
  const waterfallsRows = tableRowsFromBlock(betweenWaterfallsAndPorts, 2)
  const portsRows = tableRowsFromBlock(betweenPortsAndHills, 2)
  const hillsRows = tableRowsFromBlock(betweenHillsAndElephant, 2)
  const elephantRows = tableRowsFromBlock(betweenElephantAndRamsar, 3)
  const ramsarRows = tableRowsFromBlock(betweenRamsarAndNational, 3)
  const nationalParkRows = tableRowsFromBlock(betweenNationalAndWildlife, 4)
  const wildlifeRows = tableRowsFromBlock(betweenWildlifeAndZoo, 4)
  const zooRows = tableRowsFromBlock(betweenZooAndInternationalAirports, 2)
  const internationalAirportRows = tableRowsFromBlock(betweenInternationalAirportsAndAirports, 3)
  const airportRows = tableRowsFromBlock(betweenAirportsAndStadiums, 3)
  const stadiumRows = tableRowsFromBlock(betweenStadiumsAndIit, 2)
  const iitRows = tableRowsFromBlock(betweenIitAndUniversities, 2)

  const renderStyledLines = (segment: string[], keyPrefix: string) =>
    segment.map((line, index) => {
      const nextLine = segment[index + 1]
      if (isHeadingLine(line, nextLine)) {
        return (
          <div key={`${keyPrefix}-heading-${index}`} className="pt-3 first:pt-0">
            <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100/95 sm:text-lg">{line.trim()}</h3>
          </div>
        )
      }

      return <ContentLine key={`${keyPrefix}-line-${index}`} line={line} />
    })

  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-emerald-950/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[min(100%,48rem)] -translate-x-1/2 bg-linear-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-300/90 sm:text-xs">
            <Sparkles className="h-3.5 w-3.5 text-emerald-400/90" strokeWidth={2} />
            General Awareness
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-teal-300/90 sm:text-base">
            {GOA.statesInformationPageTitle}
          </p>
          <h1 className="mt-3 bg-linear-to-r from-emerald-100 via-teal-100 to-emerald-200 bg-clip-text text-xl font-bold uppercase tracking-tight text-transparent sm:text-2xl md:text-3xl">
            {GOA.goaHeaderLine}
          </h1>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-emerald-600 via-teal-500 to-emerald-500 opacity-90"
            aria-hidden
          />
        </header>

        <SectionShell>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/25">
              <BookOpen className="h-5 w-5" strokeWidth={2} />
            </div>
            <SectionHeading>GOA REFERENCE NOTES</SectionHeading>
          </div>
          <div className="space-y-3">
            {renderStyledLines(beforeTemple, 'before-temple')}

            {hasTempleBlock
              ? renderTableSection({
                  title: 'Temple/Church/Masjid Name',
                  headers: ['Location'],
                  rows: templeRows,
                  keyPrefix: 'temples',
                })
              : null}

            {renderStyledLines(hasTempleBlock ? betweenIndustryAndProjects : beforeProjects, 'between-industry-projects')}

            {hasProjectsBlock
              ? renderTableSection({
                  title: 'Project/Dam Name',
                  headers: ['River', 'Location'],
                  rows: projectRows,
                  keyPrefix: 'projects',
                })
              : null}

            {hasWaterfallsBlock
              ? renderTableSection({
                  title: 'Waterfalls/Beach Name',
                  headers: ['Location'],
                  rows: waterfallsRows,
                  keyPrefix: 'waterfalls',
                })
              : null}

            {hasPortsBlock
              ? renderTableSection({
                  title: 'Ports Name',
                  headers: ['Location'],
                  rows: portsRows,
                  keyPrefix: 'ports',
                })
              : null}

            {hasHillsBlock
              ? renderTableSection({
                  title: 'Hills/Valley/Caves Name',
                  headers: ['Location'],
                  rows: hillsRows,
                  keyPrefix: 'hills',
                })
              : null}

            {hasElephantBlock ? (
              <div className="pt-3">
                <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100/95 sm:text-lg">
                  Elephant Reserves
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-600/45 ring-1 ring-white/5">
                  <table className="w-full min-w-lg border-collapse text-left text-sm text-slate-200">
                    <thead className="bg-slate-900/60 text-xs font-semibold uppercase tracking-wide text-emerald-200/95 sm:text-sm">
                      <tr>
                        <th className="w-16 px-3 py-3 text-center">S.No.</th>
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Year</th>
                        <th className="px-3 py-3">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/35 bg-slate-900/20">
                      {elephantRows.map((row, i) => (
                        <tr key={`ele-${i}-${row[0]}`} className="hover:bg-slate-800/40">
                          <td className="px-3 py-2.5 text-center font-semibold text-emerald-100">{i + 1}</td>
                          <td className="px-3 py-2.5">{row[0]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[1]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {hasRamsarBlock ? (
              <div className="pt-3">
                <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100/95 sm:text-lg">Ramsar Sites</h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-600/45 ring-1 ring-white/5">
                  <table className="w-full min-w-lg border-collapse text-left text-sm text-slate-200">
                    <thead className="bg-slate-900/60 text-xs font-semibold uppercase tracking-wide text-emerald-200/95 sm:text-sm">
                      <tr>
                        <th className="w-16 px-3 py-3 text-center">S.No.</th>
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Year</th>
                        <th className="px-3 py-3">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/35 bg-slate-900/20">
                      {ramsarRows.map((row, i) => (
                        <tr key={`ramsar-${i}-${row[0]}`} className="hover:bg-slate-800/40">
                          <td className="px-3 py-2.5 text-center font-semibold text-emerald-100">{i + 1}</td>
                          <td className="px-3 py-2.5">{row[0]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[1]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {hasNationalParkBlock ? (
              <div className="pt-3">
                <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100/95 sm:text-lg">
                  National Park (N.P)
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-600/45 ring-1 ring-white/5">
                  <table className="w-full min-w-lg border-collapse text-left text-sm text-slate-200">
                    <thead className="bg-slate-900/60 text-xs font-semibold uppercase tracking-wide text-emerald-200/95 sm:text-sm">
                      <tr>
                        <th className="w-16 px-3 py-3 text-center">S.No.</th>
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Year</th>
                        <th className="px-3 py-3">Location</th>
                        <th className="px-3 py-3">Area (Sq.KM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/35 bg-slate-900/20">
                      {nationalParkRows.map((row, i) => (
                        <tr key={`np-${i}-${row[0]}`} className="hover:bg-slate-800/40">
                          <td className="px-3 py-2.5 text-center font-semibold text-emerald-100">{i + 1}</td>
                          <td className="px-3 py-2.5">{row[0]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[1]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[2]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {hasWildlifeBlock ? (
              <div className="pt-3">
                <h3 className="text-base font-bold uppercase tracking-wide text-emerald-100/95 sm:text-lg">
                  Wildlife Sanctuary (W.L.S)
                </h3>
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-600/45 ring-1 ring-white/5">
                  <table className="w-full min-w-lg border-collapse text-left text-sm text-slate-200">
                    <thead className="bg-slate-900/60 text-xs font-semibold uppercase tracking-wide text-emerald-200/95 sm:text-sm">
                      <tr>
                        <th className="w-16 px-3 py-3 text-center">S.No.</th>
                        <th className="px-3 py-3">Name</th>
                        <th className="px-3 py-3">Year</th>
                        <th className="px-3 py-3">Location</th>
                        <th className="px-3 py-3">Area (Sq.KM)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-600/35 bg-slate-900/20">
                      {wildlifeRows.map((row, i) => (
                        <tr key={`wls-${i}-${row[0]}`} className="hover:bg-slate-800/40">
                          <td className="px-3 py-2.5 text-center font-semibold text-emerald-100">{i + 1}</td>
                          <td className="px-3 py-2.5">{row[0]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[1]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[2]}</td>
                          <td className="px-3 py-2.5 text-slate-300">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : null}

            {hasZooBlock
              ? renderTableSection({
                  title: 'Zoo Park/Museum Name',
                  headers: ['Location'],
                  rows: zooRows,
                  keyPrefix: 'zoo',
                })
              : null}

            {hasInternationalAirportsBlock
              ? renderTableSection({
                  title: 'Airport Name',
                  headers: ['City', 'Category'],
                  rows: internationalAirportRows,
                  keyPrefix: 'int-airports',
                })
              : null}

            {hasAirportsBlock
              ? renderTableSection({
                  title: 'Airport Name',
                  headers: ['City', 'Category'],
                  rows: airportRows,
                  keyPrefix: 'airports',
                })
              : null}

            {hasStadiumsBlock
              ? renderTableSection({
                  title: 'Stadium Name',
                  headers: ['Location'],
                  rows: stadiumRows,
                  keyPrefix: 'stadiums',
                })
              : null}

            {hasIitBlock
              ? renderTableSection({
                  title: 'IIT/IIM/NIT/IIIT/AIIMS Name',
                  headers: ['Location'],
                  rows: iitRows,
                  keyPrefix: 'iit',
                })
              : null}

            {renderStyledLines(afterIit, 'after-iit')}
          </div>
        </SectionShell>

        {showBackNav ? (
          <nav
            className="mt-14 flex flex-col items-center justify-center gap-3 pb-6 sm:flex-row sm:gap-4"
            aria-label="Section navigation"
          >
            <Link
              href="/general-awareness/states-information"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-500/50 bg-slate-800/60 px-5 py-3 text-sm font-semibold uppercase text-slate-200 transition hover:border-emerald-500/40 hover:bg-slate-800/90 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              States information
            </Link>
            <Link
              href="/general-awareness"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/45 bg-emerald-500/10 px-5 py-3 text-sm font-semibold uppercase text-emerald-200 transition hover:border-emerald-400 hover:bg-emerald-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              <ChevronRight className="h-4 w-4 rotate-180" aria-hidden />
              General Awareness
            </Link>
          </nav>
        ) : null}
      </div>
    </div>
  )
}

export default Goa