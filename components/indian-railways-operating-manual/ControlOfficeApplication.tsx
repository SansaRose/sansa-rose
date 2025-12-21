'use client'
import React from 'react'
import { 
  Monitor,
  FileText
} from 'lucide-react'

const ControlOfficeApplication = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-rose-500/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-purple-500/70 via-pink-500/70 to-rose-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-purple-700/60 to-pink-800/60 backdrop-blur-md shadow-2xl shadow-purple-500/30 group-hover:shadow-purple-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Monitor className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              Control Office Application (COA)
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* 1. Introduction – General Information Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  1. Introduction – General Information
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* 1.1 What is Control Office Application? */}
                  <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                    <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-3">1.1 What is Control Office Application?</h3>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Control Office Application (COA) is comprehensive software for the automation of Control Charting at a railway divisional control office. COA is intended to replace the tedious manual plotting of running trains on a chart. The core functionality of the control charting with ergonomics is intended to provide the Traffic Controllers d good look-and-feel and user-friendly work environment. The benefits of COA II/auld include- better planning and decision-making in train operations and thus contribute to increased operational efficiency.
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      COA is designed to form the core application to drive the existing allied systems like FOIS. NTES and COIS. The integration with allied systems will be facilitated through a Central Application Server at CRIS. .
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      The flow of data on real time basis to adjoining divisions will mark a significant breakthrough in the train operations without dependency on human interference.
                    </p>
                  </div>

                  {/* 1.2 Scope of COA */}
                  <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                    <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-3">1.2 Scope of COA</h3>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      COA covers the following core functionalities Control Office Operations. They include: -
                    </p>
                    <ul className="ml-4 space-y-2 text-xs">
                      <li className="text-blue-50/95">• Train Ordering</li>
                      <li className="text-blue-50/95">• Maintain Train Information</li>
                      <li className="text-blue-50/95">• Manage Train Movement (Abnormal Working, Stabling, Banker Movement)</li>
                      <li className="text-blue-50/95">• Report Unusual Occurrences.</li>
                      <li className="text-blue-50/95">• Management of Maintenance Blocks</li>
                      <li className="text-blue-50/95">• Caution Orders</li>
                      <li className="text-blue-50/95">• Plot Graph.</li>
                      <li className="text-blue-50/95">• Advance Plotting _ System / Manual</li>
                      <li className="text-blue-50/95">• Maintain referential data</li>
                      <li className="text-blue-50/95">• MIS Reports</li>
                      <li className="text-blue-50/95">• Yard Management Siding</li>
                      <li className="text-blue-50/95">• Miscellaneous Functions</li>
                      <li className="text-blue-50/95">• View Station Layout</li>
                    </ul>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mt-3">
                      The application will have interfacing capability with Data Logger to capture data pertaining to train movements in the final version of the product. .
                    </p>
                  </div>

                  {/* 1.3 Intended Audience */}
                  <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                    <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-3">1.3 Intended Audience</h3>
                    <ul className="ml-4 space-y-2 text-xs">
                      <li className="text-blue-50/95">• Operations Managers</li>
                      <li className="text-blue-50/95">• Train Controllers</li>
                      <li className="text-blue-50/95">• Key functionaries of sister departments.</li>
                    </ul>
                  </div>

                  {/* 1.4 Benefits */}
                  <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                    <h3 className="text-blue-200 font-bold lg:text-lg text-base mb-3">1.4 Benefits:</h3>
                    <ul className="ml-4 space-y-2 text-xs">
                      <li className="text-blue-50/95">• Fully Automated work environment</li>
                      <li className="text-blue-50/95">• As an aid to the controller in terms of efficiency, precision &amp; time management.</li>
                      <li className="text-blue-50/95">• Leverage to Controller&apos;s Experience in decision making through manual forecast</li>
                      <li className="text-blue-50/95">• Real time information on train operation without human dependence</li>
                      <li className="text-blue-50/95">• To serve as a backbone system for sharing of data between allied systems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }
        .animate-pulse {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  )
}

export default ControlOfficeApplication
