"use client"
import React from 'react'

const DeadLocomotives = () => {
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
              JOINT PROCEDURE ORDER
            </h1>
            <p className="text-gray-300 text-lg mb-2">(In suppression of JPO dated 13-08-2015)</p>
            <h2 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent mb-4">
              ON HAULAGE OF DIESEL/ELECTRICAL DEAD LOCOMOTIVES w.e.f OCTOBER 2021
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
              <p className="text-gray-200 leading-relaxed">
                The following are the instructions to haul dead locomotives by goods train and passenger carrying trains except Rajdhani/Shatabdi/Duranto trains:
              </p>
            </div>
          </div>

          {/* Section a: Need for haulage */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-red-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              a) Need for haulage of dead locomotives
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
                <p className="text-white font-semibold mb-4">Locomotives may be required to be moved as dead:</p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">i.</span>
                    <span className="text-gray-200">To clear a block section and take locomotive to its destination in case of failure or breakdown on the railroad.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">ii.</span>
                    <span className="text-gray-200">For sending the locomotive to work shop/running shed for repairs and /or maintenance schedules.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">iii.</span>
                    <span className="text-gray-200">For link balancing from Shed/station/division to another station/division.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-400 mr-3 mt-1">iv.</span>
                    <span className="text-gray-200">Diesel loco bridging over made dead electric loco in Non-RE patch sections.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section b: Movement of 2 dead locos + 2 working locos */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              b) Movement of 2 dead locos + 2 working locos on coaching trains (Except Rajdhani, Duranto and Shatabdi trains) is permitted on the following sections of S.C.Railway
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200"><strong className="text-white">HYB Division:</strong> KCG-DHNE - 290 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200"><strong className="text-white">HYB Division:</strong> MUE-NZB-KCG - 247 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200"><strong className="text-white">NED Division:</strong> MMR-ANK-PAU-MUE - 371 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">4.</span>
                    <span className="text-gray-200"><strong className="text-white">NED Division:</strong> MUE-ADB - 162 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">5.</span>
                    <span className="text-gray-200"><strong className="text-white">NED Division:</strong> PAU-AK - 207 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">6.</span>
                    <span className="text-gray-200"><strong className="text-white">NED Division:</strong> PBN-PRLI - 63 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">7.</span>
                    <span className="text-gray-200"><strong className="text-white">SC Division:</strong> HYB/SC-WD - 184 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">8.</span>
                    <span className="text-gray-200"><strong className="text-white">SC Division:</strong> VKB-PRLI - 267 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">9.</span>
                    <span className="text-gray-200"><strong className="text-white">SC Division:</strong> PDPL-KRMR-NZB - 178 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">10.</span>
                    <span className="text-gray-200"><strong className="text-white">SC Division:</strong> HYB/SC-KZJ* - 143 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">11.</span>
                    <span className="text-gray-200"><strong className="text-white">GTL Division:</strong> DHNE-GY/GTL-RU - 337 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">12.</span>
                    <span className="text-gray-200"><strong className="text-white">GTL Division:</strong> GTL-DMM-TPTY - 370 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">13.</span>
                    <span className="text-gray-200"><strong className="text-white">GTL Division:</strong> GTL-WD - 230 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">14.</span>
                    <span className="text-gray-200"><strong className="text-white">BZA Division:</strong> BZA-GDV - 43 KM</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">15.</span>
                    <span className="text-gray-200"><strong className="text-white">BZA Division:</strong> NS-BVRM-NDD - 76 KM</span>
                  </div>
                  <p className="text-gray-300 mt-4 italic">*Already permitted as per JPO dated 13-08-2015.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section c: Combinations */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </span>
              c) The following combination of dead locos along with working locos are permitted
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div>
                    <p className="text-white font-semibold mb-3">1. For goods trains:</p>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">i)</span>
                        <span className="text-gray-200">One live/working loco + One dead loco.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">ii)</span>
                        <span className="text-gray-200">One live/working loco + Two dead locos</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">iii)</span>
                        <span className="text-gray-200">Two live/working locos + One dead loco.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">iv)</span>
                        <span className="text-gray-200">Two live/working locos + Two dead locos.</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-3">2. For coaching/passenger carrying trains except Rajdhani/Shatabdi/Duranto:</p>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">i)</span>
                        <span className="text-gray-200">One live/working loco + One dead loco.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">ii)</span>
                        <span className="text-gray-200">One live/working loco + Two dead locos</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">iii)</span>
                        <span className="text-gray-200">Two live/working locos + One dead loco.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 mt-1">iv)</span>
                        <span className="text-gray-200">Two live/working locos + Two dead locos.</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-3">3.</p>
                    <p className="text-gray-200 ml-4">However, the movement of two dead locomotives with two live/working locomotives on coaching trains(except Rajdhani/Shatabdi/Duranto) is permitted only during exigencies/failure of train engine (MU/SH)in the sections of SCR mentioned above, up to next loco change station or where the failed / dead locos can be detached.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section d: Conditions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </span>
              d) Movement of two dead locomotives with two live/working locomotives on coaching trains (except Rajdhani/Shatabdi/Duranto) is permitted in sections mentioned above subject to compliance of following conditions vide RDSO L.No.SD.DFM.A.7, dated 10.02.2015
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200">Dead locomotives are attached next to working locomotives (train engine) and brakes on dead locomotives are functional.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200">Dead locomotives can be attached to a mail/express/passenger trains including superfast trains excluding Rajdhani/Shatabdi/Duranto trains.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200">As a result of attachment of dead locomotives, the maximum permissible length and maximum permissible load of the train should not be exceeded.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">4.</span>
                    <span className="text-gray-200">In case of maximum permissible speed of the dead locos is less than the maximum permissible speed of the train, suitable speed restriction shall be imposed on the train while attaching the dead locomotives.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">5.</span>
                    <span className="text-gray-200">Certificate for FIT to run shall be issued by Senior Section Engineer/Loco Inspector or power controller.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">6.</span>
                    <span className="text-gray-200">As a final check, the coupled locos should be run about 500meters and the Loco Pilot shall check for any abnormal rise in temperature of wheels/axle boxes of dead locomotives and shall also check it at subsequent stops / halts during journey.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">7.</span>
                    <span className="text-gray-200">Locomotives with defect(s) in under gear equipment should not be attached.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">8.</span>
                    <span className="text-gray-200">The other conditions mentioned in General and Subsidiary Rules for train operations are to be followed.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section e: Other guidelines */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              e) Other guidelines issued vide RDSO instruction bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010 insection-1 for recommended instructions to haul dead diesel & electric locomotives are to be complied in addition to the conditions mentioned in RDSO L.No.SD.DFM.A.4.7, dt.10.02.2015 as under
            </h2>
            
            <div className="space-y-4">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <div className="space-y-6">
                  <div>
                    <p className="text-white font-semibold mb-4">1. Basic requirements under para 2.3:</p>
                    <div className="ml-4 space-y-3">
                      <div className="flex items-start">
                        <span className="text-green-300 mr-3 mt-1">a.</span>
                        <span className="text-gray-200">As far as possible brakes should be applied on dead locomotives in synchronization with working locomotive.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-300 mr-3 mt-1">b.</span>
                        <span className="text-gray-200">On dead locomotives all the circuit breakers and battery knife switch shall be off and such other steps taken to ensure that the dead locomotives cannot be started inadvertently.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-300 mr-3 mt-1">c.</span>
                        <span className="text-gray-200">On diesel/electric locomotives it should be ensured that reverser handle placed in neutral position and removed.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-300 mr-3 mt-1">d.</span>
                        <span className="text-gray-200">The locomotives brakes shall be released fully before starting.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-300 mr-3 mt-1">e.</span>
                        <span className="text-gray-200">The brake pipe and main reservoir pressures shall be fully discharged. The MU2B or Lead trail switch should be placed in trail/dead position.</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-green-300 mr-3 mt-1">f.</span>
                        <span className="text-gray-200">The Loco Pilot shall be informed that he should work the train carefully as dead locomotives are attached.</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-semibold mb-4">2. Haulage of dead locomotives by Goods and mail/express/passenger trains under para 2.5 & 2.6 of RDSO instruction bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010.</p>
                    <div className="ml-4 space-y-4">
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-white font-semibold mb-3">Haulage of dead locomotive by Goods train:</p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-green-300 font-semibold mb-2">Para 2.5.1:</p>
                            <p className="text-gray-200 ml-4">If the dead locos brakes are functional, it is attached next to working locomotive(s) and MR and BC equalizing pipes are connected so that the brake power of the dead locomotives can be utilized.</p>
                          </div>
                          <div>
                            <p className="text-green-300 font-semibold mb-2">Para 2.5.2: The dead locomotives to be treated as piped vehicle</p>
                            <p className="text-gray-200 ml-4 mb-2">i) If the dead locos brake are functional but it is not attached next to working locomotive or.</p>
                            <p className="text-gray-200 ml-4 mb-2">ii) MR & BC equalizing pipes are not connected.</p>
                            <p className="text-gray-200 ml-4 mb-2">iii) Dead locomotives brakes are not functional.</p>
                            <p className="text-gray-200 ml-4 mb-2">The conditions to be satisfied in these cases are as under:</p>
                            <div className="ml-8 space-y-2">
                              <p className="text-gray-200">a) Only one dead diesel/electric locomotive is permitted to haul.</p>
                              <p className="text-gray-200">b) If the dead locomotive is not placed next to train locomotive, It may be marshalled anywhere on the goods train provided that the distance between dead loco and the train loco/banking loco (if any) shall be equalled to the largest span of bridge in the section duly following the below given safety requirements from the point of view of brakes.</p>
                              <p className="text-gray-200 ml-4">Brake pipe of dead loco: -Brake pipe of dead locomotive shall be attached to brake pipe of the train and at least ten fully braked wagons shall be attached behind the locomotive.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-white font-semibold mb-3">Haulage of dead locomotive by mail/express/passenger/superfast trains:</p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-green-300 font-semibold mb-2">Para 2.6.1:</p>
                            <p className="text-gray-200 ml-4">If the dead locos brakes are functional, it is attached next to working locomotive(s) and MR and BC equalizing pipes connected so that the brake power of the dead locomotives can be utilized.</p>
                          </div>
                          <div>
                            <p className="text-green-300 font-semibold mb-2">Para 2.6.1.2:</p>
                            <p className="text-gray-200 ml-4">Dead locomotive may be attached at originating station or enroute provided that the brake power of mail/express/passenger trains(excluding dead locos) is at least 90% when dead locomotive is attached.</p>
                          </div>
                          <div>
                            <p className="text-green-300 font-semibold mb-2">Para No.2.6.2: Dead locomotive brakes are not functional and it is hauled as piped vehicle.</p>
                            <div className="ml-4 space-y-2">
                              <p className="text-gray-200">i) Only one dead diesel/electric locomotive is permitted to haul.</p>
                              <p className="text-gray-200">ii) Brake power of mail/express/passenger trains (Excluding dead locos) is at least 90% when dead locomotive is attached.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-400/30">
                        <p className="text-yellow-300 font-semibold mb-2">Note:</p>
                        <p className="text-gray-200 ml-4 mb-3">It should be ensured that the brakes of dead locomotive is functional/ piped (synchronization of brakes),when attached in rear of the train as last vehicle.</p>
                        <div className="ml-4 space-y-2">
                          <p className="text-gray-200">i) Only one dead locomotive is permitted to haul.</p>
                          <p className="text-gray-200">ii) Dead locomotive shall be accompanied by a competent person not less than ALP. This competent person should be provided with suitable equipment including walkie-talkie set, flags, detonators etc., The Guard of the train to which dead locomotive has been attached shall personally ensure that the dead locomotive is accompanied by such a competent person. It will be the duty and the responsibility of competent person to switch on the flasher light and secure in case uncouple occurs.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-semibold mb-3">3. RDSO instruction Bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010 in section-2:</p>
                    <p className="text-gray-200 ml-4">Instructions concerning brake system for hauling dead locomotive should be notified to the crew through SOB for both diesel and electric locomotives separately.</p>
                  </div>

                  <div>
                    <p className="text-white font-semibold mb-3">4. RDSO instruction bulletin No.MP.IB.BK.01.05.05, Rev-03, April-2010 in section-1 of Para 3.0:</p>
                    <p className="text-gray-200 ml-4"><strong className="text-white">Bridges:</strong> Instructions if any, related to Bridges on SCR for haulage of dead locomotives (Two live and two dead) will be advised by Engineering department to CPTM for incorporation in WTT.</p>
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

export default DeadLocomotives