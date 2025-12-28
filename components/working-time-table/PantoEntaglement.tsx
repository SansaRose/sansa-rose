"use client"
import React from 'react'

const PantoEntaglement = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-6 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-yellow-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              JOINT ORDER for Panto-entanglement/OHE defect
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Action to be taken by crew, TLC & TPC in case of Panto-entanglement/OHE defect
            </p>
          </div>

          {/* Section 1: Duties of Engine Crew */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              1. Duties of Engine Crew (G&SR Clause No. SR 17.03.4.3)
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">▪</span>
                <span className="text-gray-200">Engine crew of all trains shall be vigilant and keep a sharp look out while the train is in motion and watch the overhead equipment and report any defect noticed to the TLC/TPC/SCOR.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">▪</span>
                <span className="text-gray-200">When a defect on the overhead equipment which is likely to interfere with the smooth movement of the pantograph or cause damage to it, is noticed ahead, the Loco Pilot shall trip the DJ and immediately lower the pantograph by placing the pantograph handle in the lower position. An emergency stop should be made, if necessary.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">▪</span>
                <span className="text-gray-200">If the damage to overhead equipment is slight, such as slight break away of the contact wire from the droppers or catenary, it may be practicable to coast under the defective section, but the defect shall be reported to the TPC through the nearest emergency telephone circuit or in case this circuit is not available through any other telephone.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">▪</span>
                <span className="text-gray-200">In case of a major breakdown to overhead equipment requiring trains to be stopped, the Loco Pilot noticing such a breakdown, shall advise the TPC through the nearest emergency telephone circuit giving details of the breakdown and in case this circuit is not available, convey the information through the nearest Station Master on any other telephone circuit. The TLC/TPC, on receipt of such a message, shall pass on suitable instructions to the SCOR and if necessary, advise him to stop running of trains in the affected section.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Duties of TLC */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              2. Duties of TLC
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">•</span>
                <span className="text-gray-200">Collect the information from the crew about the incident with km No., section etc., and inform TPC/SCOR.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">•</span>
                <span className="text-gray-200">Confirm from crew that they have put &apos;ON&apos; flasher light, protected the train as per GR 6.03 and secured the loco and formation.</span>
              </div>
            </div>
          </div>

          {/* Section 3: Duties of TPC */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              3. Duties of TPC
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">1.</span>
                <span className="text-gray-200">Whenever any flash or abnormality on OHE/pantograph is informed by Loco pilot or reported by station staff, instruct LP of the train to stop the train and look for any damages to OHE/pantograph.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">2.</span>
                <span className="text-gray-200">In the event of OHE not holding, the TPC should localize the faulty section and inform section controller and TLC.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">3.</span>
                <span className="text-gray-200">TPC should immediately issue caution look out notice order to the trains passing (in adjacent line in opposite direction to look out for any abnormalities on OHE and report.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">4.</span>
                <span className="text-gray-200">If no damage is observed by LP on OHE/pantograph, allow him to work further and ask TRD staff to check the OHE before permitting the other trains.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">5.</span>
                <span className="text-gray-200">In case abnormality is observed on pantograph or OHE, stop the train. Check for the damages of OHE/pantograph. In case working pantograph is damaged and even, if no damage to OHE is caused, do not allow the train to move. Call for the TRD staff, secure pantograph and then only allow the train to move further. But do not allow any train on rear in the block section unless it is certified safe by TRD staff.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  )
}

export default PantoEntaglement