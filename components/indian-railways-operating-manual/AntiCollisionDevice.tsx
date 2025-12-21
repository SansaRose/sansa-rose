'use client'
import React from 'react'
import { 
  Shield,
  FileText
} from 'lucide-react'

const AntiCollisionDevice = () => {
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
                      <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              ANTI COLLISION DEVICE (ACD)
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Main Content Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Anti Collision Device Overview
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-5 border border-blue-400/20">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Anti Collision Device (ACD) is a fully integrated Electronic Control System designed to minimize collisions and increase safety on Railway system. It is a non signaling system and provides additional cover of safety in train operations to prevent dangerous train collisions caused due to human errors or limitations and equipment failure. Being the non-signaling and inter locking system it does not replace any existing signaling and interlocking system and does not alter any procedures of train operations in vogue.
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      ACD is a Network of Anti -Collision Devices (ACDs) comprising of a variety of devices such as onboard (Mobile). ACDs for Locomotives and Guard vans and track-side (Stationery) ACDs, Level Crossing ACDs, Loco Shed ACDs, Sensor based ACOs and ACO Repeaters. All these work on the principle of distributed control systems. All ACDs along the ACDroute communicate with each other through radio communication when they are within a radial range of at least 3 kms. On board computers use inputs from Global Positioning System (GPS) for determination of train location, speed, course of travel and time. Both mobile and stationary components of ACO system exchange information and take decisions based on train working rules and embedded software to apply brakes automatically without any input from the users. If two ACOs are deemed to be at a risk of collision, the ACD system activates automatic braking operation to prevent collisions. Loco ACO is designed to interface with various types of braking system of locomotives.
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      System provides audio-visual &quot;Train Approach&quot; warning to road users at level crossings. At Manned LC Gates, when approaching Loco ACD detects &quot;Gate Open&quot; condition, the speed of the train/loco is reduced and kept under a pre-defined speed. Similarly, it can also provide warning and regulate speed in case of movements of land slopes in deep cuttings that are &quot;sensed&quot; through Inclinometer grids, embedded in such slopes. ACD system does not interfere with normal working of train operations.
                    </p>
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      More than 2,000 Anti Collision Devices have already been installed over 2,700 Route Kms of track on Indian Railway system out of which about 1900 Route Kms are on North east Frontier Railway and balance are on Konkan Railway. Further proliferation of this safety device on the balance BG network of Indian Railways is being planned.
                    </p>
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

export default AntiCollisionDevice
