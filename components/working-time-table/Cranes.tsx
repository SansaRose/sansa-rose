"use client"
import React from 'react'

const Cranes = () => {
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
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Status of 140T BD Cranes, ARTs, ARMVs & RARVs over SCR
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Accident Relief Trains Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Accident Relief Trains (ARTs)
            </h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">01</span>
                <span className="text-gray-200"><strong>SC</strong> - SC &quot;A&quot; Class - Cowans Sheldon New Design-140T</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">02</span>
                <span className="text-gray-200"><strong>SC</strong> - &quot;B&quot; Class (SPART)</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">03</span>
                <span className="text-gray-200"><strong>KZJ</strong> - &quot;A&quot; Class - Cowans Sheldon Old Design-140T</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">04</span>
                <span className="text-gray-200"><strong>KZJ</strong> - &quot;B&quot; Class (SPART)</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">05</span>
                <span className="text-gray-200"><strong>BPA</strong> - &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">06</span>
                <span className="text-gray-200"><strong>HYB</strong> - NZB &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">07</span>
                <span className="text-gray-200"><strong>BZA</strong> - BZA &quot;B&quot; Class (SPART)</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">08</span>
                <span className="text-gray-200"><strong>BZA</strong> - &quot;A&quot; Class - Cowans Sheldon Old Design-140T</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">09</span>
                <span className="text-gray-200"><strong>RJY</strong> - &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">10</span>
                <span className="text-gray-200"><strong>BTTR</strong> - &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">11</span>
                <span className="text-gray-200"><strong>GTL</strong> - GTL &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">12</span>
                <span className="text-gray-200"><strong>GY</strong> - &quot;A&quot; Class - Cowans Sheldon Old Design-140T</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">13</span>
                <span className="text-gray-200"><strong>RU</strong> - &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">14</span>
                <span className="text-gray-200"><strong>DMM</strong> - &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">15</span>
                <span className="text-gray-200"><strong>GNT</strong> - GNT &quot;B&quot; Class</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">16</span>
                <span className="text-gray-200"><strong>NED</strong> - PAU &quot;A&quot; Class - Gottwald New Design-140T</span>
              </div>
            </div>

            <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-2">
                <strong>&quot;A&quot; Class ART</strong> – 140T DHBD Crane + HRE Set.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                <strong>&quot;B&quot; Class ART</strong> - HRE Set.
              </p>
            </div>
          </div>

          {/* 140-T DHBD Cranes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              140-T DHBD Cranes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30">
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Station:</strong> SC, KZJ, BZA, GY, PAU
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Division:</strong> SC, SC, BZA, GTL, NED
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Type of ART:</strong> &quot;A&quot; Class, &quot;A&quot; Class, &quot;A&quot; Class, &quot;A&quot; Class, &quot;A&quot; Class
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Capacity of the Crane:</strong> 140 Ton, 140 Ton, 140 Ton, 140 Ton, 140 Ton
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Make of the Crane:</strong> Cowans Sheldon, Cowans Sheldon, Cowans Sheldon, Cowans Sheldon, Gottwald
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Design (Old/New):</strong> New, Old, Old, Old, New
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Year of Manufacturing of Crane:</strong> 2001, 1989, 1990, 1990, 2009
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                  <strong>Return date of POH/MLR:</strong> 2029, 2025, 2026, 2026, 2025
                </p>
                <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                  <strong>Capacity to run at Speed (kmph):</strong> 100, 75, 75, 75, 100
                </p>
              </div>
            </div>
          </div>

          {/* ARMVs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              Accident Relief Medical Vans (ARMVs)
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">01</span>
                <span className="text-gray-200"><strong>SC</strong> - SC - SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">02</span>
                <span className="text-gray-200"><strong>KZJ</strong> - HS-SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">03</span>
                <span className="text-gray-200"><strong>HYB</strong> - NZB - SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">04</span>
                <span className="text-gray-200"><strong>BZA</strong> - BZA - HS-SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">05</span>
                <span className="text-gray-200"><strong>RJY</strong> - SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">06</span>
                <span className="text-gray-200"><strong>BTTR</strong> - SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">07</span>
                <span className="text-gray-200"><strong>GTL</strong> - GTL - HS-SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">08</span>
                <span className="text-gray-200"><strong>RU</strong> - Conventional</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">09</span>
                <span className="text-gray-200"><strong>DMM</strong> - Conventional</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">10</span>
                <span className="text-gray-200"><strong>GNT</strong> - GNT - HS-SPARMV</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-blue-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">11</span>
                <span className="text-gray-200"><strong>NED</strong> - PAU - HS-SPARMV</span>
              </div>
            </div>
          </div>

          {/* RARVs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              List of Road Accident Restoration Vehicles (RARVs)
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">01</span>
                <span className="text-gray-200"><strong>SC</strong> - SC</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">02</span>
                <span className="text-gray-200"><strong>BDCR</strong></span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">03</span>
                <span className="text-gray-200"><strong>HYB</strong> - KCG</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">04</span>
                <span className="text-gray-200"><strong>BZA</strong> - BZA</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">05</span>
                <span className="text-gray-200"><strong>GTL</strong> - GTL</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">06</span>
                <span className="text-gray-200"><strong>GNT</strong> - GNT</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-purple-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">07</span>
                <span className="text-gray-200"><strong>NED</strong> - PAU</span>
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

export default Cranes