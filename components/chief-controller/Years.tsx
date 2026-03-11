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
        question: 'The General Rules issued under the notification of the Government of India in the late Railway Department (Railway Board) No. 1078-T, dated the ______ are hereby repealed except as respects things done or action taken or omitted to be done or taken before such repeal.',
        answer: '9th March 1929',
        category: '1929'
      },
      {
        question: 'When did the Constituent Assembly accepted Hindi as the official language of the Union?',
        answer: '14.09.1949',
        category: '1949'
      },
      {
        question: 'An example of Non Railway enquiries are Judicial Commission or Commission of Inquiry as per Enquiries Act of ______',
        answer: '1952',
        category: '1952'
      },
      {
        question: 'The Central Government may appoint a Commission of Inquiry under the Commission of Inquiry Act, ________ in a very serious accident.',
        answer: '1952',
        category: '1952'
      },
      {
        question: 'In compliance of article 344 when was the official language commission formed in the year?',
        answer: '07.06.1955',
        category: '1955'
      },
      {
        question: 'In which year the Hindi translation of Railway Budget was prepared and who was the Railway Minister?',
        answer: '1956 and Lal Bahadur Shastri',
        category: '1956'
      },
      {
        question: 'In which year Hindi (Parliament) section was established in Railway Board?',
        answer: '1960',
        category: '1960'
      },
      {
        question: "In which year were the President's orders regarding the Official Language issued on 27 April?",
        answer: '1960',
        category: '1960'
      },
      {
        question: 'The General Rules framed in 1929, the revision for which was advocated by Railway accident committee in the year',
        answer: '1962',
        category: '1962'
      },
      {
        question: 'When was the Official Languages Act 1963 passed?',
        answer: '10.05.1963',
        category: '1963'
      },
      {
        question: 'From when did the Section 3(3) of the Official Languages Act take effect?',
        answer: '26.01.1965',
        category: '1965'
      },
      {
        question: 'When was official language Act 1963 ammended?',
        answer: '1967',
        category: '1967'
      },
      {
        question: 'The general Rules framed in 1929, the revision for which was advocated by Railway accident inquiry committee in the year',
        answer: '1968',
        category: '1968'
      },
      {
        question: 'Based on recommendations of Railway accident committee and Railway accident inquiry committee a Committee formed composed of officers of Traffic and S&T department was appointed by Railway board in ........ and they submitted draft rules in ........',
        answer: '1968, 1970',
        category: '1968'
      },
      {
        question: 'The Railway servants (Discipline & Appeal) Rules, 1968, shall come into force on the 1st day of October, 1968.',
        answer: 'October 1, 1968',
        category: '1968'
      },
      {
        question: 'During which year the Official Language Resolution was passed?',
        answer: '1968',
        category: '1968'
      },
      {
        question: 'Revised GR submitted by committee was circulated to RDSO, Commission of Railway Safety, Rly staff college Baroda, IRISET, IRMEE Jamalpur for suggestions vide Rly Board lr no 68-RR/2 Vol V in the month of........',
        answer: 'July 1974',
        category: '1974'
      },
    {
      question: 'General Rules for Indian Railways (open lines) is first administered by Government in the year ______ for the time being used for the public carriage of passenger, animals or Goods',
      answer: '1976',
      category: '1976'
    },
    {
      question: 'When was the Official Language Rules passed?',
      answer: '1976',
      category: '1976'
    },
    {
      question: 'Railway servants pass rules were implemented in which year?',
      answer: '1986',
      category: '1986'
    },
    {
      question: 'When the Official Language Rules were amended first?',
      answer: '1987',
      category: '1987'
    },
    {
      question: 'CRS shall hold statutory enquiry into the accidents falling under Section 113 of Railways Act _________.',
      answer: '1989',
      category: '1989'
    },
    {
      question: 'Maternity leave effective from which year?',
      answer: '01.09.2008',
      category: '2008'
    },
    {
      question: 'Ministry of Railways (Railway Board) constituted a Committee for the revision of General Rules, 1976, who have submitted the final report in the year.',
      answer: '2009',
      category: '2009'
    },
    {
      question: 'Railway employees are allowed to avail LTC as per DoPT OM dated 27th March 2018',
      answer: '27.03.2018',
      category: '2018'
    },
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
