"use client"
import React from 'react'

const ElectrifiedSection = () => {
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
              Safety Instructions in Electrified Section
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Safety Instructions Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              Safety Instructions
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">1.</span>
                <span className="text-gray-200">No work shall be done within a distance of 02 meters from live OHE without a permit to work.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">2.</span>
                <span className="text-gray-200">No fallen OHE shall be touched unless the power is switched off and OHE is earthed. In case, OHE snaps at a level crossing, the gate man shall make arrangements to stop all road vehicles and keep the public away.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">3.</span>
                <span className="text-gray-200">Any abnormality noticed in OHE/Loco/EMU should be intimated to Traction power Controller immediately for further guidance.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">4.</span>
                <span className="text-gray-200">Don&apos;t allow roof traveling.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">5.</span>
                <span className="text-gray-200">Keep the emergency telephone in good working condition and ensure it is tested periodically.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">6.</span>
                <span className="text-gray-200">Do not direct water jet from hose pipe towards live OHE.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">7.</span>
                <span className="text-gray-200">No crane shall be operated near Traction overhead equipment&apos;s unless authorized Representative of OHE is present.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">8.</span>
                <span className="text-gray-200">The muffing of foundations of Traction masts shall be kept clear of all materials. Unloading of Rails along the tracks, should be done such that Rails do not touch each other to form continuous metallic mass of length greater than 300 meters.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">9.</span>
                <span className="text-gray-200">Unloading of PSC sleepers should be taken in such a way that they will not hit any supporting structures.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">10.</span>
                <span className="text-gray-200">Permanent Way Staff should be clear of tracks and avoid contact with the rails when electrically hauled train is within 250 meters.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">11.</span>
                <span className="text-gray-200">During weld failures/Rail fractures, ensure two ends of rail shall be temporarily connected by rail jumpers.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">12.</span>
                <span className="text-gray-200">Don&apos;t climb on the roof of Loco/EMU/Coaches for attending any work unless the OHE is made dead and earthed properly.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">13.</span>
                <span className="text-gray-200">Stations masters should ensure that all precautions are taken to protect the power block/line block section. Any doubts regarding OHE section to be consulted with TPC for guidance.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">14.</span>
                <span className="text-gray-200">AC Loco Drivers/ Motor man to ensure &quot;Open DJ&quot; and &quot;Close DJ&quot; at neutral sections.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">15.</span>
                <span className="text-gray-200">AC Loco Drivers/ Motor Man ensure coasting of train without power at the coasting board locations to conserve energy.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">16.</span>
                <span className="text-gray-200">Regarding speed restrictions at Neutral section, S.R. 17.07 () may be referred to.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">17.</span>
                <span className="text-gray-200">Observe that stop boards & Caution boards are exhibited promptly.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">18.</span>
                <span className="text-gray-200">ASMS to prevent entry of Electric Locos in to dead section during power block.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">19.</span>
                <span className="text-gray-200">Commercial staff to secure tarpaulins firmly to the wagon to avoid entanglement with OHE.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">20.</span>
                <span className="text-gray-200">Commercial staff to close/secure and lock properly the flap doors of wagons, loaded or empty.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">21.</span>
                <span className="text-gray-200">Station staff should not allow Electric Locos with raised pantographs into a dead section or into an unwired turnout.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">22.</span>
                <span className="text-gray-200">Station staff shall not allow any traffic into the section when OHE is snapped or obstructing.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">23.</span>
                <span className="text-gray-200">Permanent Way staff to ensure not to stew track/re-alignment without the knowledge of Traction staff.</span>
              </div>
              <div className="flex items-start group hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                <span className="text-red-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">24.</span>
                <span className="text-gray-200">Permanent Way staff shall ensure no disturbance to track bonding and earthing of TRD Installations.</span>
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

export default ElectrifiedSection