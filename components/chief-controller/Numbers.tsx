'use client'

import React from 'react'

interface NumberItem {
  question: string
  answer: string
  category?: string
}

const Numbers = () => {
  const numbers: NumberItem[] = [
    {
      question: 'Continuous night duty for running staff should be limited to ______ nights',
      answer: '4',
      category: '4'
    },
    {
        question: 'Number of States covering South Central Railway is',
        answer: '6',
        category: '6'
      },
    {
        question: 'Total Number of zones on Indian Railways',
        answer: '18',
        category: '18'
      },
  ]

  // Group numbers by category for better organization
  const groupedByCategory = numbers.reduce((acc, number) => {
    const categoryKey = number.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(number)
    return acc
  }, {} as Record<string, NumberItem[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Railway Zones':
        return 'bg-gradient-to-r from-red-600 to-red-700'
      case 'States':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      case 'Duty Hours':
        return 'bg-gradient-to-r from-blue-600 to-blue-700'
      default:
        return 'bg-gradient-to-r from-purple-600 to-purple-700'
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Numbers
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to important numbers for AOM aspirants
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
                    className="group p-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-900/50 border border-blue-700">
                          <span className="text-blue-300 font-semibold text-lg">
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
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {numbers.length}
            </div>
            <div className="text-gray-300">Total Numbers</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              4-18
            </div>
            <div className="text-gray-300">Number Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Numbers