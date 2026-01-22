'use client'

import React from 'react'

interface Percentage {
  question: string
  answer: string
  category?: string
}

const Percentages = () => {
  const percentages: Percentage[] = [
    { 
      question: 'Percentage of spare coaches for Traffic requirements that must be kept at the depots for Non AC coaches is', 
      answer: '4%', 
      category: '4%' 
    },
    { 
      question: 'Percentage of spare coaches for Traffic requirements that must be kept at the depots for Rajdhani/Shatabdi trains is', 
      answer: '5%', 
      category: '5%' 
    },
    { 
      question: 'Percentage of spare coaches for Traffic requirements that must be kept at the depots for AC coaches is', 
      answer: '5%', 
      category: '5%' 
    },
    { 
      question: 'Percentage of spare coaches for Mechanical requirements that must be kept at the depots for Non AC coaches is', 
      answer: '5%', 
      category: '5%' 
    },
    { 
      question: 'Percentage of spare coaches for Mechanical requirements that must be kept at the depots for AC coaches is', 
      answer: '6%', 
      category: '6%' 
    },
    { 
      question: 'Percentage of spare coaches for Mechanical requirements that must be kept at the depots for RAJDHANI/SHATABDI coaches is', 
      answer: '6%', 
      category: '6%' 
    },
    { 
      question: '_______ Trainee Reserve is added to support ongoing training and development of new crew members.', 
      answer: '10%', 
      category: '10%' 
    },
    {
      question: 'According to the annual programme issued by the Department of Official Language, Ministry of Home Affairs, it is mandatory for officers of the Official Language Department to inspect the minimum percentage of their subordinate offices.',  
      answer: '20%',
      category: '20%'
    },
    { 
      question: '_______ Leave Reserve is usually added to the bare requirement to ensure adequate coverage during leave periods.', 
      answer: '30%', 
      category: '30%' 
    },
    {
      question: 'Absence from Head quarter for less than 6 hours the percentage of Travelling allowance granted is ______',
      answer: '30%',
      category: '30%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the grant of libraries is required to be spent on Hindi books, Hindi e-books',  
      answer: '50%',
      category: '50%'
    },
    {
      question: 'Maximum Composite transfer grant as per VII Pay Commission is equivalent to ______ pay',
      answer: '65%',
      category: '65%'
    },
    {
      question: 'Absence from Head quarter for less than 12 hours but more than 6 hours the percentage of Travelling allowance granted is ______',
      answer: '70%',
      category: '70%'
    },
    {
      question: 'The Composite transfer grant (CTG) is admissible at the rate of _______ of last month\'s Basic pay in case of transfer involving a change of station',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'Upon what percentage of acquiring Working Knowledge of Hindi by the employees of Central Government offices, that office is required to be notified in the Gazette of Govt. of India.',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'The Staff of a Central Government office shall ordinarily be deemed to have acquired a working knowledge of Hindi if ______ of the Staff working therein have acquired such knowledge.',  
      answer: '80%',
      category: '80%'
    },
    {
      question: 'Maximum advance allowed before journey in All India Leave Travel Concession (AILTC) is ______',  
      answer: '80%',
      category: '80%'
    },
    { 
      question: 'The effective brake power in case of Mail/Express enroute should be not less than', 
      answer: '90%', 
      category: '90%' 
    },
    { 
      question: 'The effective brake power in case of passenger and CC rakes enroute shall be', 
      answer: '90%', 
      category: '90%' 
    },
    { 
      question: 'The effective brake power of material train shall not be less than _______%', 
      answer: '90%', 
      category: '90%' 
    },
    { 
      question: 'At the starting station, for all passenger carrying trains of all description brake power must be', 
      answer: '100%', 
      category: '100%' 
    },
    { 
      question: 'The effective brake power in case of Mail/Express at the originating station shall be', 
      answer: '100%', 
      category: '100%' 
    },
    
    { 
      question: 'The effective brake power in case of passenger and CC rakes at the originating station should not be less than', 
      answer: '100%', 
      category: '100%' 
    },

    {
      question: 'Absence from Head quarter when exceeds 12 hours the percentage of Travelling allowance granted is _______%',
      answer: '100%',
      category: '100%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the training material of training institutes should be in bilingual form',  
      answer: '100%',
      category: '100%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the code, manual, procedure, translation of literature, etc. used in government offices should be bilingual.',  
      answer: '100%',
      category: '100%'
    },
    {
      question: 'According to the annual programme issued by the Ministry of Home Affairs, Department of Official Language, what percentage of the training material of training institutes should be in bilingual form',  
      answer: '100%',
      category: '100%'
    },
  ]

  // Group percentages by category for better organization
  const groupedByCategory = percentages.reduce((acc, percentage) => {
    const categoryKey = percentage.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(percentage)
    return acc
  }, {} as Record<string, Percentage[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Brake Power':
        return 'bg-gradient-to-r from-red-600 to-red-700'
      case 'Traffic Requirements':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      case 'Mechanical Requirements':
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
            Percentages
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to percentages for AOM aspirants
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
              {percentages.length}
            </div>
            <div className="text-gray-300">Total Percentages</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              4%-100%
            </div>
            <div className="text-gray-300">Percentage Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Percentages