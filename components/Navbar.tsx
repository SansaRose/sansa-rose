'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isActsDropdownOpen, setIsActsDropdownOpen] = useState(false)
  const [isPdfsDropdownOpen, setIsPdfsDropdownOpen] = useState(false)
  const [isManualsDropdownOpen, setIsManualsDropdownOpen] = useState(false)
  const [isTopicsDropdownOpen, setIsTopicsDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/abbreviations', label: 'Abbreviations' },
    { href: '/definitions', label: 'Definitions' },
    { href: '/quiz', label: 'Quiz' },
    { href: '/syllabus', label: 'Syllabus' },
  ]

  const actsLinks = [
    { href: '/acts/workmen-compensation-act-1923', label: 'Workmen Compensation Act, 1923' },
    { href: '/acts/trade-union-act-1926', label: 'Trade Union Act, 1926' },
    { href: '/acts/railway-servants-rest-rules-2005', label: 'Railway Servants (Rest) Rules, 2005' },
    { href: '/acts/rajabhasha', label: 'Rajabhasha' },
    { href: '/acts/railway-servants-pass-rules-1986', label: 'Railway Servants (Pass) Rules, 1986' },
    { href: '/acts/industrial-relations-code-2010', label: 'Industrial Relations Code, 2010' },
    { href: '/acts/factories-act-1948', label: 'Factories Act, 1948' },
    { href: '/acts/employees-compensation-act-2010', label: 'Employees Compensation Act, 2010' },
    { href: '/acts/industrial-disputes-act-1947', label: 'Industrial Disputes Act, 1947' },
    { href: '/acts/disaster-management-act-2005', label: 'Disaster Management Act, 2005' },
    { href: '/acts/railway-servants-da-rules-1968', label: 'Railway Servants (DA) Rules, 1968' },
    { href: '/acts/railway-services-conduct-rules-1966', label: 'Railway Services (Conduct) Rules, 1966' },
    { href: '/acts/right-to-information-act-2005', label: 'Right to Information Act, 2005' },
    { href: '/acts/indian-railway-acts-1989', label: 'Indian Railway Acts, 1989' },
  ]

  const pdfsLinks = [
    { href: '/pdfs/general-subsidiary-rules-amendments', label: 'General & Subsidiary Rules Amendments', icon: '📋' },
    { href: '/pdfs/block-working-manual-amendments', label: 'Block Working Manual Amendments', icon: '🛤️' },
    { href: '/pdfs/accident-manual-amendments', label: 'Accident Manual Amendments', icon: '🚨' },
    { href: '/pdfs/authorities', label: 'Authorities', icon: '📜' },
    { href: '/pdfs/circulars', label: 'Circulars', icon: '📄' },
  ]

  const manualsLinks = [
    { href: '/manuals/opertaing-manual', label: 'Operating Manual', icon: '📘' },
    { href: '/manuals/accident-manual', label: 'Accident Manual', icon: '⚠️' },
    { href: '/manuals/block-working-manual', label: 'Block Working Manual', icon: '🔧' },
    { href: '/manuals/general-subsidiary-rules', label: 'General Subsidiary Rules', icon: '📋' },
    { href: '/manuals/station-working-rules', label: 'Station Working Rules', icon: '🚉' },
    { href: '/manuals/working-time-table', label: 'Working Time Table', icon: '⏰' },
  ]

  const topicsLinks = [
    { href: '/topics/chief-controller', label: 'Chief Controller', icon: '👨‍💼' },
    { href: '/topics/information-technology-apps', label: 'Information Technology Apps', icon: '💻' },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-purple-300/30 shadow-xl shadow-purple-500/20'
          : 'border-b border-transparent shadow-lg shadow-purple-500/10'
      }`}
      style={{
        background: isScrolled
          ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.95) 0%, rgba(124, 58, 237, 0.95) 50%, rgba(59, 130, 246, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(139, 92, 246, 0.85) 0%, rgba(124, 58, 237, 0.85) 50%, rgba(59, 130, 246, 0.85) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      <div className="mx-auto max-w-7xl px-3  lg:px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Title */}
          <Link
            href="/"
            className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              
            </div>
            <span className="lg:text-2xl text-xl font-bold text-white tracking-tight drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
              Sansa Rose
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative px-5 py-2.5 text-base font-semibold text-white rounded-xl transition-all duration-300"
                >
                  <span
                    className={`relative z-10 transition-all duration-300 ${
                      isActive
                        ? 'text-white font-bold drop-shadow-lg'
                        : 'text-white/90 group-hover:text-white group-hover:drop-shadow-md'
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                    }`}
                  ></span>
                  {/* Hover background effect */}
                  <span 
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                    }}
                  ></span>
                  {/* Active state background */}
                  {isActive && (
                    <span 
                      className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                      style={{
                        background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                      }}
                    ></span>
                  )}
                </Link>
              )
            })}
            
            {/* Acts Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsActsDropdownOpen(true)}
              onMouseLeave={() => setIsActsDropdownOpen(false)}
            >
              <Link
                href="/acts"
                className={`group relative px-5 py-2.5 text-base font-semibold text-white rounded-xl transition-all duration-300 ${
                  pathname.startsWith('/acts') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Acts
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isActsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/acts') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/acts') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isActsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[650px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Acts & Regulations
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{actsLinks.length} Acts</span>
                    </div>
                  </div>
                  
                  {/* Content - Two Column Grid */}
                  <div className="p-4 grid grid-cols-2 gap-2.5">
                    {actsLinks.map((act) => {
                      const isActive = pathname === act.href
                      const year = act.href.match(/\d{4}/)?.[0] || ''
                      return (
                        <Link
                          key={act.href}
                          href={act.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                                ? 'bg-linear-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-br hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10">
                            <div className="flex items-start gap-2.5">
                              {year && (
                                <span className={`text-xs font-bold px-2 py-0.5 rounded-md shrink-0 ${
                                  isActive  
                                    ? 'bg-purple-100 text-purple-700' 
                                    : 'bg-gray-100 text-gray-500 group-hover:bg-purple-100 group-hover:text-purple-600'
                                }`}>
                                  {year}
                                </span>
                              )}
                              <span className="text-xs font-medium leading-snug flex-1">
                                {act.label}
                              </span>
                            </div>
                          </div>
                          
                          {/* Hover arrow */}
                          <svg
                            className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 ${
                              isActive ? 'opacity-100' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/acts"
                      onClick={() => setIsActsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Acts</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* PDFs Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsPdfsDropdownOpen(true)}
              onMouseLeave={() => setIsPdfsDropdownOpen(false)}
            >
              <Link
                href="/pdfs"
                className={`group relative px-5 py-2.5 text-base font-semibold text-white rounded-xl transition-all duration-300 ${
                  pathname.startsWith('/pdfs') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  PDFs
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isPdfsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/pdfs') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/pdfs') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isPdfsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[500px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        PDF Documents
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{pdfsLinks.length} Categories</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {pdfsLinks.map((pdf) => {
                      const isActive = pathname === pdf.href
                      return (
                        <Link
                          key={pdf.href}
                          href={pdf.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{pdf.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {pdf.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/pdfs"
                      onClick={() => setIsPdfsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All PDFs</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Manuals Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsManualsDropdownOpen(true)}
              onMouseLeave={() => setIsManualsDropdownOpen(false)}
            >
              <Link
                href="/manuals"
                className={`group relative px-5 py-2.5 text-base font-semibold text-white rounded-xl transition-all duration-300 ${
                  pathname.startsWith('/manuals') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Manuals
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isManualsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/manuals') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/manuals') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isManualsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[500px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Manual Documents
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{manualsLinks.length} Manuals</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {manualsLinks.map((manual) => {
                      const isActive = pathname === manual.href
                      return (
                        <Link
                          key={manual.href}
                          href={manual.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{manual.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {manual.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/manuals"
                      onClick={() => setIsManualsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Manuals</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Topics Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsTopicsDropdownOpen(true)}
              onMouseLeave={() => setIsTopicsDropdownOpen(false)}
            >
              <Link
                href="/topics"
                className={`group relative px-5 py-2.5 text-base font-semibold text-white rounded-xl transition-all duration-300 ${
                  pathname.startsWith('/topics') ? 'font-bold' : ''
                }`}
              >
                <span className="relative z-10 flex items-center gap-1 transition-all duration-300">
                  Topics
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isTopicsDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                {/* Animated underline */}
                <span
                  className={`absolute bottom-1 left-0 right-0 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    pathname.startsWith('/topics') ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100'
                  }`}
                ></span>
                {/* Hover background effect */}
                <span 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(to right, rgba(168, 85, 247, 0.2), rgba(96, 165, 250, 0.2))'
                  }}
                ></span>
                {/* Active state background */}
                {pathname.startsWith('/topics') && (
                  <span 
                    className="absolute inset-0 rounded-xl backdrop-blur-sm shadow-lg shadow-purple-500/20 -z-10"
                    style={{
                      background: 'linear-gradient(to right, rgba(168, 85, 247, 0.3), rgba(96, 165, 250, 0.3))'
                    }}
                  ></span>
                )}
              </Link>
              
              {/* Dropdown Menu */}
              {isTopicsDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-[500px] bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 overflow-hidden z-50">
                  {/* Header */}
                  <div className="bg-linear-to-r from-purple-500/10 via-blue-500/10 to-indigo-500/10 px-6 py-4 border-b border-purple-100/50">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-purple-500 to-blue-500"></span>
                        Topics
                      </h3>
                      <span className="text-xs text-gray-500 font-medium">{topicsLinks.length} Topics</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 flex flex-col gap-2">
                    {topicsLinks.map((topic) => {
                      const isActive = pathname === topic.href
                      return (
                        <Link
                          key={topic.href}
                          href={topic.href}
                          className={`group relative px-4 py-3 rounded-xl transition-all duration-200 ${
                            isActive
                              ? 'bg-linear-to-r from-purple-500/20 via-blue-500/20 to-indigo-500/20 text-purple-700 font-semibold shadow-lg shadow-purple-200/50 border-2 border-purple-300/60'
                              : 'text-gray-700 hover:bg-linear-to-r hover:from-purple-50 hover:via-blue-50 hover:to-indigo-50 hover:text-purple-600 hover:shadow-md border border-gray-200/50 hover:border-purple-200/70'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive && (
                            <span className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-purple-500 via-blue-500 to-indigo-500 rounded-r-full"></span>
                          )}
                          
                          {/* Content */}
                          <div className="relative z-10 flex items-center gap-3">
                            <span className="text-xl shrink-0">{topic.icon}</span>
                            <span className="text-sm font-medium leading-snug flex-1">
                              {topic.label}
                            </span>
                            
                            {/* Hover arrow */}
                            <svg
                              className={`w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-0.5 shrink-0 ${
                                isActive ? 'opacity-100' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                  
                  {/* Footer */}
                  <div className="bg-linear-to-r from-purple-50/50 via-blue-50/50 to-indigo-50/50 px-6 py-3.5 border-t border-purple-100/50">
                    <Link
                      href="/topics"
                      onClick={() => setIsTopicsDropdownOpen(false)}
                      className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-2 group justify-center"
                    >
                      <span>View All Topics</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 text-base text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <svg
              className={`h-6 w-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-[800px] opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                      : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            
            {/* Acts Link with Accordion */}
            <div>
              <button
                onClick={() => setIsActsDropdownOpen(!isActsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/acts')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Acts</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isActsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Acts Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isActsDropdownOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {actsLinks.map((act) => {
                    const isActive = pathname === act.href
                    return (
                      <Link
                        key={act.href}
                        href={act.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsActsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        {act.label}
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
            
            {/* PDFs Link with Accordion */}
            <div>
              <button
                onClick={() => setIsPdfsDropdownOpen(!isPdfsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/pdfs')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>PDFs</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isPdfsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile PDFs Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isPdfsDropdownOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {pdfsLinks.map((pdf) => {
                    const isActive = pathname === pdf.href
                    return (
                      <Link
                        key={pdf.href}
                        href={pdf.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsPdfsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{pdf.icon}</span>
                        <span>{pdf.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Manuals Link with Accordion */}
            <div>
              <button
                onClick={() => setIsManualsDropdownOpen(!isManualsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/manuals')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Manuals</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isManualsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Manuals Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isManualsDropdownOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {manualsLinks.map((manual) => {
                    const isActive = pathname === manual.href
                    return (
                      <Link
                        key={manual.href}
                        href={manual.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsManualsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{manual.icon}</span>
                        <span>{manual.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Topics Link with Accordion */}
            <div>
              <button
                onClick={() => setIsTopicsDropdownOpen(!isTopicsDropdownOpen)}
                className={`w-full px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-between ${
                  pathname.startsWith('/topics')
                    ? 'bg-white/30 text-white shadow-lg shadow-white/20 backdrop-blur-md border-2 border-white/40'
                    : 'text-white/90 bg-white/10 hover:bg-white/20 hover:text-white backdrop-blur-sm border border-white/20'
                }`}
              >
                <span>Topics</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isTopicsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Topics Dropdown */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isTopicsDropdownOpen ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="flex flex-col space-y-1 pl-4">
                  {topicsLinks.map((topic) => {
                    const isActive = pathname === topic.href
                    return (
                      <Link
                        key={topic.href}
                        href={topic.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsTopicsDropdownOpen(false)
                        }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-2 ${
                          isActive
                            ? 'bg-white/30 text-white shadow-md shadow-white/20 backdrop-blur-md border border-white/40'
                            : 'text-white/80 bg-white/5 hover:bg-white/15 hover:text-white backdrop-blur-sm border border-white/10'
                        }`}
                      >
                        <span>{topic.icon}</span>
                        <span>{topic.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar