'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const EstablishmentRules = () => {
  const pathname = usePathname()

  const rules = [
    {
      href: '/quizzes/establishment-rules/discipline-appeal-rules',
      title: 'Discipline Appeal Rules',
      year: '1968',
      icon: '⚖️',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'from-blue-600 to-blue-700',
      description: 'Rules governing disciplinary proceedings and appeal mechanisms for railway employees'
    },
    {
      href: '/quizzes/establishment-rules/pass-rules',
      title: 'Pass Rules',
      year: '1986',
      icon: '🎫',
      color: 'from-green-500 to-green-600',
      hoverColor: 'from-green-600 to-green-700',
      description: 'Regulations for railway pass facilities and travel privileges for railway servants'
    },
    {
      href: '/quizzes/establishment-rules/leave-rules',
      title: 'Leave Rules',
      year: '1949',
      icon: '🏖️',
      color: 'from-purple-500 to-purple-600',
      hoverColor: 'from-purple-600 to-purple-700',
      description: 'Comprehensive rules regarding various types of leave available to railway employees'
    },
    {
      href: '/quizzes/establishment-rules/rest-rules',
      title: 'Rest Rules',
      year: '2005',
      icon: '🛌',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'from-pink-600 to-pink-700',
      description: 'Rules governing rest periods, working hours, and duty schedules for railway servants'
    },
    {
      href: '/quizzes/establishment-rules/conduct-rules',
      title: 'Conduct Rules',
      year: '1966',
      icon: '📋',
      color: 'from-indigo-500 to-indigo-600',
      hoverColor: 'from-indigo-600 to-indigo-700',
      description: 'Standards of conduct and behavior expected from railway service employees'
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Establishment Rules
          </h1>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-white/20 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4">
              Explore comprehensive collection of establishment rules and regulations
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Navigate through various rules governing railway employee conduct, leave, passes, rest periods, and disciplinary procedures
            </p>
          </div>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {rules.map((rule) => {
            const isActive = pathname === rule.href
            return (
              <Link
                key={rule.href}
                href={rule.href}
                className="group"
              >
                <div className={`bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 overflow-hidden h-full flex flex-col ${
                  isActive ? 'ring-2 ring-purple-500 ring-offset-2' : ''
                }`}>
                  {/* Header with Gradient */}
                  <div className={`bg-linear-to-r ${rule.color} p-4 sm:p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="relative z-10 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="text-3xl sm:text-4xl mb-2">{rule.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-2">
                          {rule.title}
                        </h3>
                        {rule.year && (
                          <span className="inline-block px-2 py-1 text-xs font-semibold text-white/90 bg-white/20 rounded-md backdrop-blur-sm">
                            {rule.year}
                          </span>
                        )}
                      </div>
                      <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-6 h-6 text-white/80"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <p className="text-sm sm:text-base text-gray-600 line-clamp-3 mb-4 flex-1">
                      {rule.description}
                    </p>
                    
                    {/* Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-200">
                      <div className={`inline-flex items-center text-sm font-semibold bg-linear-to-r ${rule.color} bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300`}>
                        Start Quiz
                        <svg
                          className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 inline-block">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-purple-600">{rules.length}</span> establishment rules available for practice
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EstablishmentRules