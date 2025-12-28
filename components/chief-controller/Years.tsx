'use client'

import React from 'react'

interface YearItem {
  question: string
  answer: string
  category?: string
}

const Years = () => {
  const years: YearItem[] = [
    {
      question: 'GR for IR (open lines) is first administered by Govt in the year ______ for the time being used for the public carriage of passenger, animals or Goods',
      answer: '1976',
      category: 'General Rules'
    }
  ]

  // Group years by category for better organization
  const groupedByCategory = years.reduce((acc, year) => {
    const categoryKey = year.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(year)
    return acc
  }, {} as Record<string, YearItem[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'General Rules':
        return 'bg-gradient-to-r from-amber-600 to-amber-700'
      case 'Safety Regulations':
        return 'bg-gradient-to-r from-orange-600 to-orange-700'
      case 'Infrastructure':
        return 'bg-gradient-to-r from-yellow-600 to-yellow-700'
      case 'Operations':
        return 'bg-gradient-to-r from-amber-500 to-amber-600'
      default:
        return 'bg-gradient-to-r from-amber-600 to-amber-700'
    }
  }

  // Get year range for display
  const getYearRange = () => {
    const yearValues = years.map(y => parseInt(y.answer)).filter(y => !isNaN(y))
    if (yearValues.length === 0) return 'N/A'
    const min = Math.min(...yearValues)
    const max = Math.max(...yearValues)
    return min === max ? `${min}` : `${min}-${max}`
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
            Years
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to important years and time periods for railway operations and regulations
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Category Header */}
              <div className={`${getCategoryColor(category)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {category}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-amber-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-amber-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-900/50 border border-amber-700">
                          <span className="text-amber-300 font-semibold text-lg">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">
              {years.length}
            </div>
            <div className="text-gray-300">Total Years</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-orange-400 mb-2">
              {getYearRange()}
            </div>
            <div className="text-gray-300">Year Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Years
