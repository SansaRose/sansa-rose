"use client"
import React from 'react'

const BrakeContinuityTest = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-3xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Procedure for Brake Continuity Test on Air Brake Passenger Carrying Trains
            </h1>
            <p className="text-gray-300 text-lg mb-6">(Authority RDSO Lr.No.MC/AB dt.18/19-04-2006)</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
              <p className="text-gray-200 leading-relaxed">
                Before starting the train either from originating station or after any attachment/detachment of coaches/loco change of locomotive (from diesel to electric or vice versa en-route, the Loco Pilot and Guard must carry out this test as soon as possible after the locomotive or coaches are coupled or re-coupled to ensure continuity of the brake pipes throughout fitted portion of the train when all shunting work has been completed.
              </p>
            </div>
          </div>

          {/* Section 1: When test must be carried out */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              1. The Brake Continuity Test must be carried out on the train in the following circumstances without exception.
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1 font-bold">1.0</span>
                    <span className="text-gray-200">Locomotive or additional locomotive is attached to the front of the train.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1 font-bold">1.1</span>
                    <span className="text-gray-200">One or more coaches attached in any position of the train.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1 font-bold">1.2</span>
                    <span className="text-gray-200">One or more coaches detached from any position other than extreme rear.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1 font-bold">1.3</span>
                    <span className="text-gray-200">After any brake defect or irregularity attended by closing Angle Cock or detaching BP or FP hose of any coach or locomotive on the train, which has affected the continuity.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1 font-bold">1.4</span>
                    <span className="text-gray-200">Loco Pilot and Guard should ensure the removal of safety dummy plug provided in the Air Hoses before fitment /coupling of Air Hoses, whenever replacement is required in the reroute/mid-section.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: When test need not be carried out */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              2. The Brake Continuity Test need not be carried out on the train in the following circumstances.
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">2.1</span>
                    <span className="text-gray-200">When locomotive other than train locomotive is detached from the extreme front of the train.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">2.2</span>
                    <span className="text-gray-200">When train locomotive is used for &apos;complete&apos; brake test of the whole train and is not there after detached before starting.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">2.3</span>
                    <span className="text-gray-200">When the train locomotive or coach is detached from the extreme rear of the train.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Procedure */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </span>
              3. The following procedure shall be followed for carrying out the Continuity Test:
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.1</span>
                    <span className="text-gray-200">First of all it must be ensured that all angle cocks of BP & FP are in open position. However, rear end angle cocks of rear most coach and free end angle cocks of locomotive should be kept in closed position.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.2</span>
                    <span className="text-gray-200">The Loco Pilot and Guard must confirm for the test by means of communication.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.3</span>
                    <span className="text-gray-200">The Loco Pilot must charge the BP & FP pressure of the train and check that 5.0+0.1Kg/sq.cm & 6.0+0.1Kg/sq.cm pressure is registered respectively in BP & FP Guage in the leading driving compartment and confirm from the Guard that minimum 4.8 Kg/sq.cm and 5.8 Kg/ sq.cm pressure is registered respectively in BP & FP Gauges in the rear SLR.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.4</span>
                    <span className="text-gray-200">The loco pilot must then without delay carryout the following: The loco pilot must reduce BP pressure to 4.0 Kg/sq.cm by moving the A- 9 Automatic brake valve handle towards application position and confirm that the guard that the pressure registered in BP Gauge in the rear SLR within the range of 3.6 to 4.0 Kg/sq.cm, otherwise it indicated discontinuity in brake pipe which should be attended by the SSE/C&W staff. After correction any fault a further brake continuity test commencing at step 3.3 must be carried out.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.5</span>
                    <span className="text-gray-200">After step at 3.4, the loco pilot must then recharge the BP pressure by moving A- 9 automatic brake valve handle to &quot;RELAESE&quot; position and check that 5.0 + 0.1Kg/sq.cm pressure is registered in BP Gauge in the loco motive and confirm from the Guard that minimum pressure is registered in BP Gauge in the rear SLR.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.6</span>
                    <span className="text-gray-200">After the brake pipe pressure has stabilized in the locomotive and rear SLR/Last vehicle the loco pilot must then cut off air supply for the brake pipe either by moving the automatic brake valve handle to &quot;HANDLE OFF/NEUTRAL&quot; position if available or by closing the brake pipe isolating cock handle providing between additional C- 2 relay valve and brake pipe of the locomotive. The Guard must then without delay carryout the following:</span>
                  </div>
                  <div className="ml-8 space-y-3">
                    <div className="flex items-start">
                      <span className="text-purple-300 mr-3 mt-1 font-bold">3.6.1</span>
                      <span className="text-gray-200">If SLR is rear vehicle, the guard must then open the Emergency brake valve handle in the rear SLR to reduce the BP pressure to 3.6 Kg/sq.cm. As soon the pressure in the BP Gauge of the rear SLR is dropped to the specified limit 3.6 kg/sq.cm the guard must then close the Emergency brake valve.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-300 mr-3 mt-1 font-bold">3.6.2</span>
                      <span className="text-gray-200">If SLR is not the rear vehicle, the guard must open the cut off angle cock of the BP on the last vehicle to reduce the BP pressure to 3.6Kg/sq.cm. As soon as the pressure in the BP Gauge is dropped to the specified limit 3.6 kg/sq.cm, the guard must then close the cut off angle cock of last vehicle. Wherever SSE/C&W staff is posted they should assist the Guard in this</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-300 mr-3 mt-1 font-bold">3.6.3</span>
                      <span className="text-gray-200">After step 3.6.1 (or) 3.6.2, the guard must then confirm from the loco pilot that the pressure is registered in BP Gauge in the locomotive is within the range of 3.6 to 4.0 Kg/Sq.cm, otherwise it indicates discontinuity in the brake pipe, which should be attended by the SSE/C&W staff. After correction of any fault, Brake continuity test commencing at step 3.3 to 3.6 must be repeated.</span>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.7</span>
                    <span className="text-gray-200">When continuity is assured and Guard&apos;s emergency brake valve in rear SLR/Cut off angle cock of last vehicle is closed, the loco pilot must open the air supply of brake pipe to recharge the air pressure and check that 5.0 + 0.1 Kg/Sq.cm pressure is registered in BP Gauge in leading driving compartment and confirm from the Guard that minimum 4.8 Kg/Sq.cm, pressure is registered in BP Gauge in rear SLR.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4.0: Originating Trains */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              4.0 Originating Trains
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold mb-3">(a) For the originating trains after Primary/Secondary maintenance</p>
                    <p className="text-gray-200 ml-4">The Continuity Test will be done after attachment of locomotives by the Loco Pilot and Guard in the presence of SSE/SE/C&W. (SSE/SE/C&W will remain near SLR) The SSE/SE/C&W, after being satisfied with the Continuity, will issue BPC to the Loco Pilot and Guard. Guard&apos;s copy will have the signature of only SSE/SE/C&W & Guard whereas Loco Pilot&apos;s copy will have the signatures of Guard, SSE/SE/C&W & Loco Pilot.</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-3">(b) For Originating trains after turn round attention.</p>
                    <div className="ml-4 space-y-3">
                      <div>
                        <p className="text-white font-semibold mb-2">(b.1) Where SSE/SE/C&W is Posted:</p>
                        <p className="text-gray-200 ml-4">Continuity check will be done by the Loco Pilot and Guard in the presence of SSE/SE/C&W and SSE/SE/C&W will make the endorsement on the reverse of the original BPC of both Loco Pilot & Guard&apos;s copy.</p>
                      </div>
                      <div>
                        <p className="text-white font-semibold mb-2">(b.2) Where SSE/SE/C&W is not Posted:</p>
                        <p className="text-gray-200 ml-4">For Stations, like CT, SRUR, SHNR, TEL, RAL, MCLA, NDKD, BVRM, NDD, etc, Loco Pilot and Guard will check the Continuity as per the procedure and they will also make the endorsement on the reverse of original BPC of their copies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5.0: Brake feel test */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              5.0 Brake feel test
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <p className="text-gray-200 leading-relaxed">
                  After starting the train, when train attains the speed around 15 kmph Loco Pilot should apply A9 value and feel the brake power. &apos;BRAKE FEEL TEST&quot; to be conducted at crew changing points, after crew changing, and also if train is detained en-route (for more than 30 mts.)
                </p>
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Note
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-yellow-400/30">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1 font-bold">1)</span>
                    <span className="text-gray-200">In case VHF/Walkie-Talkie sets are not available; the Loco Pilot shall sound one long whistle before step 3.4 and as a confirmation of step 3.6.3</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1 font-bold">2)</span>
                    <span className="text-gray-200">Only during recharging/recreation of BP after brake application, initial charging or resetting of ACP/TP/GVA, the &quot;RELEASE/RUN&quot; Push button switch must be kept in &quot;RELEASE&quot; position otherwise it should always be kept in &apos;RUN&apos; position.</span>
                  </div>
                </div>
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

export default BrakeContinuityTest