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
      question: 'Maximum number of damaged vehicle or damaged engine shall be attached behind the rear brake van of goods/mixed train is ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'Number of dead engines is/are permitted to attach to passenger carrying train ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'No. of material trains permitted during the line block or integrated block or shadow block is ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'Minimum number of wagons to be given as support wagons from Loco when wagons containing explosives are attached by Goods Train are ______',
      answer: '1',
      category: '1'
    },
    {
      question: 'Maximum number of coaches in addition to the officers inspection coach attached in rear of SLR of Passenger or Mail & Express trains is ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum number of bogies or its equivalent attached in rear of rear brake van by a goods train is ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'At stations, where PA system is not provided, to start the train SM shall arrange by ringing beats for Down trains is ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'No. of coaches permitted in rear of rear SLR for express trains ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'How many buttons have to be pressed and released simultaneously for operating a given function in Siemen’s panel',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum number of persons other than the Loco Pilot/Motorman or Guard are authorized to travel in the Cab of EMU/MEMU with special permits ______',
      answer: '2',
      category: '2'
    },
    {
      question: 'No. of Private Number sheets supplied to each on duty Station Master.',
      answer: '2',
      category: '2'
    },
    {
      question: 'Maximum commodities ______ can be clubbed in a wagon.',
      answer: '2',
      category: '2'
    },
    {
      question: 'First class privilege pass holders areentitled for ______ number of berths in 2AC byRajdhani/Durontotrains',
      answer: '2',
      category: '2'
    },
    {
      question: 'The maximum number of extensions after successful testing of the detonatoris ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'At stations, where PA system is not provided, to start the train SM shall arrange by ringing beats for Up trains is ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Maximum number of wagons containing explosives permitted by mixed train ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Minimum number of wagons required to be given as support wagons from B V / Passenger coach / other inflammables when explosives are carried by a train are ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'When center S L R is provided in short trains, a maximum number of coaches permitted on either side of S L R ______',
      answer: '3',
      category: '3'
    },
    {
      question: 'Continuous night duty for running staff should be limited to ______ nights',
      answer: '4',
      category: '4'
    },
    {
      question: 'Minimum number of persons required to go along with Push Trolley/Motor Trolley are ______',
      answer: '4',
      category: '4'
    },
    {
      question: 'Station Detonator Register contains ______ parts',
      answer: '4',
      category: '4'
    },
    {
      question: 'Maximum No. of officials/staff including engine crew at any time on the engine except in emergencies',
      answer: '5',
      category: '5'
    },
    {
      question: 'The number of persons permitted to travel in the brake-van of goods trains, in addition to the Guard, should not exceed',
      answer: '5',
      category: '5'
    },
    {
      question: 'Accidents are classified into how many categories',
      answer: '5',
      category: '5'
    },
    {
        question: 'Number of States covering South Central Railway is',
        answer: '6',
        category: '6'
      },
      {
        question: 'Max. no. of rail dollies can be worked in a group in any one block section.',
        answer: '6',
        category: '6'
      },
      {
        question: 'Group A and B officers are entitled to ______ sets of First Class A Privilege passes',
        answer: '6',
        category: '6'
      },
      {
        question: 'For the purpose of Weather Warning, South Central Railway is divided into ______ zones',
        answer: '7',
        category: '7'
      },
      {
        question: 'Under exceptional circumstances short formation trains not carrying passengers, not exceeding how many eight wheeler units may be run without guard and brakevan',
        answer: '10',
        category: '10'
      },
      {
        question: 'Maximum number of men allowed on a push trolly/motor trolly on BG shall not exceed ______',
        answer: '10',
        category: '10'
      },
      {
        question: 'Maximum number of wagons containing explosives permitted by goods trains is ______',
        answer: '10',
        category: '10'
      },
    {
        question: 'Total Number of zones on Indian Railways',
        answer: '18',
        category: '18'
      },
      {
        question: 'Total number of Chapters in General & Subsidiary Rules are ______',
        answer: '18',
        category: '18'
      },
      {
        question: 'Total number of Appendices in General & Subsidiary are ______',
        answer: '17',
        category: '17'
      },
      {
        question: 'The number of detonators that are given to each fog signalman is ______',
        answer: '20',
        category: '20'
      },
      {
        question: 'With regard to marshalling of explosives and other dangerous goods, The rules are laid down in the I. R. C. A. Red Tariff No. for strict compliance in ______',
        answer: '20',
        category: '20'
      },
      {
        question: 'An indent for a standard rake of BOXN should be for ______ wagons',
        answer: '59',
        category: '59'
      }
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