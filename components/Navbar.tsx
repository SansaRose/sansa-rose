'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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
    { href: '/topics', label: 'Topics' },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo/Title */}
          <Link
            href="/"
            className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105"
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-full opacity-40 blur-xl group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(to right, #a78bfa, #60a5fa)'
                }}
              ></div>       
              <div 
                className="relative flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-md border-2 border-white/40 shadow-lg shadow-purple-500/30"
                style={{
                  background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))'
                }}
              >   
                <svg
                  className="w-6 h-6 text-white drop-shadow-lg"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
            </div>
            <span className="text-3xl font-bold text-white tracking-tight drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300">
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
                  className="group relative px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300"
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 text-white rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
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
            isMobileMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
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
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar