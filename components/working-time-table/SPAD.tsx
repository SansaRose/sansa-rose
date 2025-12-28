"use client"
import React from 'react'

const SPAD = () => {
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
            <div className="inline-block p-2 bg-linear-to-r from-red-500/20 to-orange-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-red-500 to-orange-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-red-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              Measures to prevent SPAD (Do&apos;s & Don&apos;ts for Crew)
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-red-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Do&apos;s & Don&apos;ts on prevention of SPAD to be inculcated in minds of LP & ALP
            </p>
          </div>

          {/* Section A */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              A. While passing signal at Caution aspect (Single Yellow)
            </h2>
            <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30 mb-6">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                LP & ALP should be extra alert and they should not involve in any activity other than controlling the speed of the train and be prepared to stop the train before the Danger signal (GR 3.07).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Do's */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  1. Do&apos;s
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✓</span>
                    <span className="text-gray-200">LP & ALP should call out signals aspects loudly and clearly along with hand gestures, station name, signal name, speed & distance and specifically right side signals.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-green-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✓</span>
                    <span className="text-gray-200">ALP should apply emergency brakes and stop the train before Danger Signal (Red), when LP is unable to control (or) the train is over speeding on approach of Danger signal.</span>
                  </div>
                </div>
              </div>

              {/* Don'ts */}
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-2xl text-xl font-bold text-white mb-6 text-center">
                  2. Don&apos;t
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Don&apos;t notch up the train in case of signal is late taken off from Danger to Caution, Calling out of that signal should be Caution only instead of Signal late taken off.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Don&apos;t presume the aspect of the next signal.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Don&apos;t use walkie-talkie regarding aspect of signals.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Don&apos;t grossly indulge in exchange of signals with Station, Cabin, adjacent train etc</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Don&apos;t fill up log book, Registers, etc.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Don&apos;t discuss Caution orders. Control train first if there is any confusion.</span>
                  </div>
                  <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✗</span>
                    <span className="text-gray-200">Assistant Loco Pilot not to hesitate in applying emergency brake to stop over-speeding of train before Danger signal.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section B */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              B. Signal Confirmation
            </h2>
            <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                LP and ALP both should confirm before moving ahead that whether the Signal is &quot;OFF&quot; and whether it&apos;s my Signal.
              </p>
            </div>
          </div>

          {/* Section C */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              C. Simulated EBD for BOXN HL loaded trains
            </h2>
            <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30 mb-6">
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                ALPs must be trained in applying emergency brakes according to the EBD table given below.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed mb-4">
                Emergency brake must be applied when train speed is increasing and actual distance between loco/train and Danger signal is becoming equal to distance available for emergency brake. For example:- If at Home signal (Caution) speed of train is 30 kmph, emergency braking distance is 325 mts as per table given above. Later if speed increases to 50 kmph EBD is 750 mts. Therefore ALP must apply emergency brake before reaching 750mts from Danger Starter signal.
              </p>
              <p className="text-gray-200 lg:text-lg text-md leading-relaxed">
                Emergency brake must be applied by ALP when actual distance of danger signal is becoming equal to emergency braking distance at that train speed. For example:- If a loaded train passed Home signal at Caution and near loop line turnout its speed is 30 kmph and approaching danger starter signal, so before 325 mts if train is not controlled and speed not reduced in proportion to the balance distance available then at 350-400 mts ahead of Danger starter signal ALP have to apply emergency brake to stop the train before Danger starter signal, otherwise it may cause SPAD.
              </p>
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

export default SPAD