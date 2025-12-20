'use client'
import React from 'react'
import { 
  Lock,
  Settings,
  Layers,
  Gauge,
  Palette,
  Hash,
  Shield,
  BookOpen,
  Radio,
  Volume2,
  Calculator,
  Table
} from 'lucide-react'

const Interlocking = () => {
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
                      <Lock className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              Interlocking
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Definition and Basic Principles Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <BookOpen className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Definition and Basic Principles
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  <span className="font-semibold text-blue-200">Definition:</span> Interlocking means an arrangement of signals, points and other appliances, operated from a panel or lever frame, so inter-connected by Mechanical locking or Electrical locking or both that their operation must take place in proper sequence to ensure safety.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  <span className="font-semibold text-blue-200">Basic Principles:</span> The basic principles of interlocking are as follows:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">v)</span> It shall not be possible to take &quot;off&quot; conflicting signals at one and the same time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">vi)</span> It shall be possible to take &quot;off&quot; signal for a running line only when:
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(a) All points on the running line are correctly set and facing points locked</li>
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(b) All points, giving access to the running line from the sidings and goods lines, are set against the running line.</li>
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(c) Level crossing gates if included or controlled by interlocking are closed and locked against the road traffic.</li>
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(d) A signal lever when operated must lock or back lock as necessary the levers operating the points and gate locks referred to above.</li>
                    </ul>
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed mt-2">
                      Once signal is taken off it shall not be possible to alter the points, to unlock the gate lever etc until all signals are taken off have been put back.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">vii)</span> When all signals are in the &quot;On&quot; position, all points which would be locked by taking &apos;off&apos; such signals must be free for shunting purposes/testing etc.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">iv)</span> It must be impossible to take &quot;off&quot; a Warner Signal, until all the relevant stop signals in advance have first been taken &quot;off&quot; and when &quot;off&quot; it must back lock all such signals.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-6">
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                    <span className="font-semibold text-blue-200">Interlocking:</span> Points, Signals and other units are usually, operated by means of levers and panels. Interlocking between these levers is accomplished either by mechanical or by electrical or electro-mechanical or electronic means. In the former method, some mechanical contrivance variously designed, controls the relation between one lever and the other.
                  </p>
                  <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed mt-2">
                    At less important stations the point, signal and other levers are interlocked by means of keys which are used to lock or release the levers, either in the normal or in the reverse position, as required. At other stations the levers are interlocked by means of tappets inside a box of the lever frame, which is normally kept covered and sealed.
                  </p>
                </div>
              </div>
            </div>
            {/* Types of Interlocking Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Layers className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Types of Interlocking
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">i) Mechanical Interlocking:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      The era of interlocking started with mechanical frames. In mechanical signaling, since the functions are operated by levers, the relationship that should exist between the functions can be transferred to exist between the levers. To ensure that the signal can be taken &apos;OFF&apos; only after the point is correctly set, we can arrange the interlocking between the signal lever and point lever to be such that the signal lever can be reversed only after the point lever is in the correct position, viz. &apos;Normal&apos; or &apos;Reverse&apos;, as the case may be.
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mt-2">
                      As the size of yards & train movements increased, size of lever frames also increased. These lever frames not only increased in size occupying more space but also required intensive maintenance.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">ii) Panel Interlocking:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      With the advent of Electro-mechanical relays, lever frames gave way to relay interlocking based installations. This development resulted in relatively faster operation, failsafe operation and reduced size of buildings required for housing of interlocking installations. With further increase in traffic and expansion of railway network, panel Interlocking installations were commissioned.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">iii) Route Relay Interlocking:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Route Relay interlocking is same as Panel Interlocking with Electro Mechanical Relays doing the Interlocking except that it can be employed for big yards. the interlocking is done between one route and another route. Another Important feature in terms of operating point of view is that the SM has to only press two buttons, Signal button & Route Button (entry-exit system). He doesn&apos;t have to individually operate the points to the required position.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">iv) Solid State Interlocking (SSI):</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      Computer based interlocking uses thousands of Electro-mechanical relays requiring complex wiring and Inter-connections. The wiring diagrams for such installations run into hundreds of sheets. Individual relays, wiring and interconnections along with thousands of shouldered joints are required to be physically examined and certified. This exercise requires traffic blocks of long durations and large manpower to manage the traffic during blocks.
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      Even for small yard re-modelling like addition of a loop line, all the above activities are required to be redone. Therefore, the advantages of relay based interlocking installations are being nullified. The SSI system occupies considerably less space, consumes less power, is more reliable and is easy to install and maintain. Also, initial commissioning & changes due to yard re-modeling can be carried out in negligible time requiring skeleton manpower for traffic management during the blocks. Unlike PI or RRI, Microprocessors (IC&apos;S) are doing the Interlocking based on pre determined logic circuits.
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Advantages of SSI:</span>
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Increase in section capacity.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Faster operation.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• User friendly operation.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Fail safe technique</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Multiple mode operation.</li>
                    </ul>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mt-2 mb-2">
                      <span className="font-semibold text-purple-200">Significance of SSI for operating staff:</span>
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Reduces man power</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Centralised operation</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Multiple mode of operation</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Control cum indication panel</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Video display unit (P.C)</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• CTC (Centralised Traffic Control)—permits remote control</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Significant reduction in traffic block time</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">• Easier & simple operation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Indirect and Direct Interlocking Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Indirect and Direct Interlocking
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-green-200">(a) Indirect interlocking</span> means that the points are set and locked from one place and the signals are operated from another place and another lever frame; the interlocking is effected by means of keys carried from one place to the other.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-green-200">(b) Direct interlocking</span> means that all levers, viz. the point, the point locks and the signal levers are concentrated in one lever frame and worked therefrom; the interlocking is effected by means of rigid connections between levers without the use of keys.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Standards of Signaling and Interlocking Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Gauge className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Standards of Signaling and Interlocking
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-indigo-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  Interlocking at stations is standardized into four different classes viz. I(R), II(R), III(III) and IV(R). The regulations prescribing the four standards have been drawn up primarily to meet the needs of crossing stations on the single line but, with such modifications as may be necessary in regard to the equipment of signals; these are also applicable to other stations both on single and double lines.
                </p>
                <p className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed mb-6 italic">
                  Note: For details see para 170 to 174 of &quot;Indian Railway Signal Engineering Manual&quot;.
                </p>
                
                <div className="space-y-6 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-indigo-200">Two aspect signalling.</p>
                    <div className="space-y-4 mt-4">
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed mb-2 font-semibold">(a) Standard I.(R)</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>(i) Speed - 50 kms. Per hour.</li>
                          <li>(ii) Isolation - Isolation of the main line is recommended, but is not essential.</li>
                          <li>(iii) Points - the facing points should be provided with key locks, locking both switches independently and the switches detected independently by relative signals.</li>
                          <li>(iv) Interlocking - Interlocking between points and signals may be carried out indirectly by means of key locks.</li>
                          <li>(v) Signals - Outers and Bracketted Home signals shall be provided. The provision of Starter signals is optional. Working Warners may be provided for metre gauge stations where trains run through, if considered necessary, but are not required for other stations signalled to standard I.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed mb-2 font-semibold">(b) Standard II.(R)</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>(i) Speed - 110 kms. per hour.</li>
                          <li>(ii) Isolation of the main line is essential.</li>
                          <li>(iii) Points - the facing points should be provided with plunger type locks, locking both switches independently and the switches and the bolt being detected independently by relative signals.</li>
                          <li>(iv) Interlocking - The interlocking between points and signals may be direct or indirect. Where indirect interlocking is used, signals shall be worked from a position under the control of the Station Master and key must be provided to enable the Station Master to lock up the signal frame.</li>
                          <li>(v) Signal - Outers, Warners and bracketed Home signals must be provided, and Starters where considered necessary; (ii) Where Starters are not provided the &quot;off&quot; position of the Warner signal shall be dependent upon the receipt of &apos;Line Clear&apos; on the block instrument.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed mb-2 font-semibold">(c) Standard III.</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>(i) Speed – 140 km/h Unrestricted speed.</li>
                          <li>(ii) Isolation - same as for Standard II.</li>
                          <li>(iii) Interlocking: - the interlocking between points and signals must be direct.</li>
                          <li>(iv) Signals. - Outers, Warners, Bracketed Home Signals and Starters must be provided and Advanced Starters as may be necessary.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed mb-2 font-semibold">d) Standard-IV(R)</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>(i) Speed upto 160 km/h</li>
                          <li>(ii) Isolation – as per Standard III</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-indigo-200">Multiple aspect signalling.</p>
                    <p className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      The Standards, their speeds, requirements of isolation equipments of points and requirements of interlocking between points and signals are the same as in the case of two aspect signalling. The Signalling, however, should be as under:
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>(i) Standard I - A Distant and a Home Signal in each direction.</li>
                      <li>(ii) Standard II - A Distant, a Home and a Starter Signal in each direction.</li>
                      <li>(iii) Standard III - A Distant, a Home and a Starter signal in each direction.</li>
                    </ul>
                  </div>
                </div>

                {/* Standards Table */}
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                  <h3 className="text-indigo-200 font-bold lg:text-xl text-lg mb-4">Standards Comparison Table</h3>
                  <div className="overflow-x-auto">
                    <div className="min-w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 text-xs">
                        <div className="font-semibold text-indigo-200 p-2 bg-white/5 rounded">Item</div>
                        <div className="font-semibold text-indigo-200 p-2 bg-white/5 rounded">Std. I ®</div>
                        <div className="font-semibold text-indigo-200 p-2 bg-white/5 rounded">Std.II ®</div>
                        <div className="font-semibold text-indigo-200 p-2 bg-white/5 rounded">Std.III ®</div>
                        <div className="font-semibold text-indigo-200 p-2 bg-white/5 rounded">Std.IV ®</div>
                        
                        <div className="p-2 font-semibold">Allowable speed (kmph)</div>
                        <div className="p-2">Upto 50</div>
                        <div className="p-2">Upto110</div>
                        <div className="p-2">Upto140</div>
                        <div className="p-2">Upto160</div>
                        
                        <div className="p-2">1. Isolation</div>
                        <div className="p-2">Y*</div>
                        <div className="p-2">Y</div>
                        <div className="p-2">Y</div>
                        <div className="p-2">Y</div>
                        
                        <div className="p-2">2. 2 Aspect (2A) Semaphore/Multi Aspect (MA) Signalling</div>
                        <div className="p-2">2A/MA</div>
                        <div className="p-2">2A/MA</div>
                        <div className="p-2">MA</div>
                        <div className="p-2">MA</div>
                        
                        <div className="p-2">3. Double distant</div>
                        <div className="p-2">N</div>
                        <div className="p-2">Y**</div>
                        <div className="p-2">Y</div>
                        <div className="p-2">Y</div>
                        
                        <div className="p-2">4. Point Operation</div>
                        <div className="p-2">Mech</div>
                        <div className="p-2">Mech/Elect</div>
                        <div className="p-2">Mech/Elect</div>
                        <div className="p-2">Elect</div>
                        
                        <div className="p-2">5. Point Locking</div>
                        <div className="p-2">Key/FPL/HPL</div>
                        <div className="p-2">FPL/Ptm/c</div>
                        <div className="p-2">FPL/Pt. m/c</div>
                        <div className="p-2">Clamp type direct %</div>
                        
                        <div className="p-2">6. Point Detection</div>
                        <div className="p-2">Mech/Elect</div>
                        <div className="p-2">Mech/Elect</div>
                        <div className="p-2">Mech/Elect</div>
                        <div className="p-2">Elect</div>
                        
                        <div className="p-2">7. Lock Detection</div>
                        <div className="p-2">N</div>
                        <div className="p-2">Y</div>
                        <div className="p-2">Y</div>
                        <div className="p-2">Y</div>
                        
                        <div className="p-2">8. Interlocking</div>
                        <div className="p-2">Key/Mech</div>
                        <div className="p-2">Mech/ Elec/ Electronic</div>
                        <div className="p-2">Mech/ Elec/ Electronic</div>
                        <div className="p-2">Electric/Electronic</div>
                        
                        <div className="p-2">9. Track Circuiting</div>
                        <div className="p-2">N</div>
                        <div className="p-2">Mech Interlocking: Run Through Lines (Main), Elec/Electronic: All Running Lines</div>
                        <div className="p-2">All Running Lines</div>
                        <div className="p-2">All Running Lines</div>
                        
                        <div className="p-2">10. Block Working (Min.)</div>
                        <div className="p-2">Token</div>
                        <div className="p-2">Token/ SGE #</div>
                        <div className="p-2">SGE/ TC #</div>
                        <div className="p-2">SGE/TC</div>
                        
                        <div className="p-2">11. Preventing signal passing at danger</div>
                        <div className="p-2">N</div>
                        <div className="p-2">N</div>
                        <div className="p-2">N</div>
                        <div className="p-2">Y%</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-indigo-50/95 lg:text-xs text-xs leading-relaxed mt-4 italic">
                    *Isolation is not compulsory provided that the conditions laid down in the second paragraph of the general rule 4.11 are complied with &quot;Limits of speed while running through stations- Double distant on sections where goods trains have a braking distance of more than 1 km. % Desirable # At station provided with CPI or high density routes, Means for verifying complete arrival of train by suitable means.
                  </p>
                  <p className="text-indigo-50/95 lg:text-xs text-xs leading-relaxed mt-2">
                    Note: The provisions of the new revised Para 7.131 will only apply to future Signalling and Interlocking installations. Wherever existing installations do not fulfill these requirements, existing speed of operation may be permitted to continue.
                  </p>
                </div>
              </div>
            </div>

            {/* Painting of Levers Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Palette className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Painting of Levers
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-teal-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  Levers shall be painted in the following colours:
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(a)</span> Warner signals (two-aspect) lever - Green.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(b)</span> Distant signal (multiple-aspect) lever 45° aspect - Yellow.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(c)</span> Distant signal (multiple-aspect) lever 90° aspect - Green.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(d)</span> Other Signal levers - Red</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(e)</span> Slot lever mechanical - Same color as of the lever slotted, with a 6&quot; (150 mm.) wide blue band in the middle.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(f)</span> Slot lever electrical - Same colour as of the lever slotted with a 6&quot; (150 mm.) wide yellow band and in the middle.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(g)</span> Points lever - Black</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(h)</span> Facing points lock lever - Blue.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(i)</span> Economical facing point lock lever - Upper half-black lower half-blue.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(j)</span> Station Master&apos;s control lever - Upper half white lower half-black.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(k)</span> Lever-crossing gate control lever - Chocolate.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(l)</span> Release lock lever - Black, with a 6&quot; (150 mm) wide blue band in the middle.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(m)</span> Setting lever, &quot;List and Morse&quot; signalling - Blue with a 6&quot; (150 mm) wide black band in the middle.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(n)</span> Detector lever (D.W.) - Red and blue bands 6&quot; (150 mm.) wide alternately.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(o)</span> Route lever - Upper half red, lower half black.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(p)</span> Siding key control lever - Black.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(q)</span> King lever - Red and white bands 6&quot; (150 mm.) wide alternately.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-teal-200">(r)</span> Spare lever - White</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Numbering of Levers Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-rose-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-rose-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Hash className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-rose-100 bg-clip-text text-transparent">
                  Numbering of Levers in Frames
                </span>
              </h2>
              <div className="bg-linear-to-br from-rose-500/20 via-pink-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-rose-200">1.</span> All levers, including spares, are numbered consecutively through the frame from left to right. Each lever is provided with a name plate showing its function and the number of the other levers in the order of operation which must precede to release it.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-rose-200">2.</span> The levers are broadly classified into three groups:
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-rose-50/95 lg:text-sm text-xs leading-relaxed">(i) Up signal levers/slotting levers.</li>
                      <li className="text-rose-50/95 lg:text-sm text-xs leading-relaxed">(ii) Down signal levers/slotting levers.</li>
                      <li className="text-rose-50/95 lg:text-sm text-xs leading-relaxed">(iii) Point, lock, shunt signal and other levers.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-rose-200">3.</span> The group to which the lever connected to the first approach signal, or Warner signal, situated to the left, or the person working the levers, belongs is allotted the first set of consecutive levers, lying to the left of the frame. The second set of consecutive levers is allotted to group (iii), and the third set of levers lying to the right is allotted to the remaining group. All levers, including spares/spaces, of each group are, then numbered consecutively, starting from the first lever on the left. The relative position of the levers of each group, the first lever on the left. The relative position of the levers of each group, generally, corresponds to the relative position of the units they operate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Isolation Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-amber-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-amber-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  Isolation
                </span>
              </h2>
              <div className="bg-linear-to-br from-amber-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-amber-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  A line is said to be isolated from the adjacent line or lines when no movement on the adjoining lines can foul it. Isolation can be achieved by any of the following methods: (a) Snag dead end, (b) sand hump, (c) trap points, (d) setting of points (e) permanently locked points, (f) Scotch Block and (g) Hay&apos;s Derail. (h) Derailing Switch.
                </p>
                <p className="text-amber-50/95 lg:text-sm text-xs leading-relaxed mb-6 italic">
                  Note: For the purpose of definition of Isolation (f) scotch block and (g) Hay&apos;s derail are not means of Isolation. Otherwise Definition of Isolation may be changed as &apos;isolated from the adjacent line or lines as well as any movement on same line.&quot;
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(a) Snag Dead End</p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>(i) This is an extended portion of track with an erected obstruction with buffers at the end.</li>
                      <li>(ii) The length is at least 180 metres.</li>
                      <li>(iii) This is used to isolate main line from loop line.</li>
                      <li>(iv) This is an efficient substitute for signal overlap.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(b) Sand Hump</p>
                    <p className="text-amber-50/95 lg:text-sm text-xs leading-relaxed">
                      Sand hump is an extended portion of rail embedded in sand. It is total 60 m in length, with increasing gradient of 1 in 60, of which the first 30 m is laid with normal track embedded in sand and remaining 30 m is an earthen lump of uniform 4 m width.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(c) Trap Points</p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>(i) This is a single rail cut.</li>
                      <li>(ii) This rail cut will be away from the adjacent line.</li>
                      <li>(iii) To provide isolation, the trap point will be open.</li>
                      <li>(iv) When it is open and if a vehicle moves the vehicle will derail.</li>
                      <li>(v) This is provided to isolate running line from non-running line and main line from loop line.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(d) By setting of points:</p>
                    <p className="text-amber-50/95 lg:text-sm text-xs leading-relaxed">
                      At interlocked stations, isolation can also be obtained by setting of points.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(e) Permanently locked points</p>
                    <p className="text-amber-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      Certain points, including traps are kept permanently locked and
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>(ii) The keys for these points are kept in on duty station Master custody.</li>
                      <li>(iii) These points have to remain set and locked in normal position.</li>
                      <li>(iv) These keys are handed over, when these points are required to be worked.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(f) Scotch Block</p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>(i) A lump of log covered with iron sheets and coloured red.</li>
                      <li>(ii) This will be connected with a chain tied up on the earth.</li>
                      <li>(iii) This is a place across the rail and locked to prevent vehicles moving away.</li>
                      <li>(v) If the vehicle moves the vehicle will derail.</li>
                      <li>(vi) This is used normally to isolate running line from non-running line.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(g) Hayes Derail</p>
                    <p className="text-amber-50/95 lg:text-sm text-xs leading-relaxed">
                      It is a device designed to limit the movement of free rolling, uncontrolled wagons/vehicles. This is accomplished by grinding the flange of a wheel up and over the railhead, dropping the wheel clear of the rail on outside of the rails. The wheels lodging in the tie cribbing and ballast halt movement of wagons /vehicles.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold text-amber-200">(h) Derailing Switch</p>
                    <p className="text-amber-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      This is an extended portion of track ending with some sand.
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li>• The distance from the points is about 15 feet.</li>
                      <li>• This is used to isolate main line from loop line.</li>
                      <li>• This is an efficient substitute for signal overlap under approved special instructions.</li>
                      <li>• The normal setting of points is for derailing switch.</li>
                      <li>• If the vehicle moves, the vehicle will derail on the sand at the end of the derailing switch.</li>
                      <li>• Simultaneous reception is possible with CRS permission.</li>
                      <li>• This should not be obstructed.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanation of Terms Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-violet-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <BookOpen className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-violet-100 bg-clip-text text-transparent">
                  Explanation of Certain Simple Terms
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(i) COUPLED POINTS:</span> When two or more points are worked by the same lever.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(ii) CROSSINGS:</span> The appliances provided at the Junctions where two lines cross or join one and other.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(iii) COMPENSATOR:</span> It is an appliance provided to compensate for difference in length of roddings and wires due to variations in temperature.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(iv) CRANK:</span> It is an appliance fitted with the rodding to change the direction of the motion given by the lever.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(v) DETECTOR:</span> It is an electrical or mechanical device which prevents the signals from being taken &apos;OFF&apos; unless the points are correctly set.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(vi) ECONOMICAL POINT LOCK OR S.L.M. (Switch & Lock Movement):</span> When the facing points and the facing point lock are worked by the same lever, it is called &quot;Economical Point Lock&quot; or &quot;S.L.M.&quot;</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(vii) FACING POINT LOCK:</span> It is a plunger bolt provided at facing points, which ensures that the points are correctly set and locked to prevent them from being moved.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(viii) FACING POINT LOCK BAR:</span> It is a bar provided at facing points is connected with a facing point lock, which prevents facing point lock being moved while a vehicle is passing or standing over it.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(ix) FOULING BAR:</span> It is a bar provided at the fouling points between two diverging roads which prevents points being set and locked and signal being taken &apos;OFF&apos; for one road while a train is standing short of clearance on the other road.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(x) LOCKING:</span> A lever is said to be locked when in the normal position it cannot be pulled over. A lever is said to be locking another lever when owing to the farmer&apos;s remaining or in the normal or reverse position the latter cannot be pulled over.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(xi) RELEASE:</span> A lever releases another lever, when due to its operation the later can be pulled. If lever No. 2 can only be pulled over when lever No. 1 is pulled then lever No. 1 is said to be de-releasing lever No. 2.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(xii) SLOT:</span> It is an electrical or mechanical arrangement where by a signal can only be lowered only by the joint operation by two or more persons, but can be put back to &apos;ON&apos; by any one of them.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-violet-200">(xiii) TONGUE RAILS:</span> These are rails with tapered movable ends which controls the setting of the route.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Buttons Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Radio className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Panel Buttons
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">1.</span> Signal buttons GN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">2.</span> Route buttons UN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">3.</span> Point buttons WN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">4.</span> Calling on signal buttons COGN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">5.</span> Emergency buttons EGGN, EUYN, EUUYN, EWN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">6.</span> Reminder collors XT RES PB+A/C RES KEY, POWER FAIL, ACK, SYS, HL/SL MECR FAILEDFAIL, ACK</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">7.</span> Point group buttons WWN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">8.</span> Gate signal buttons LXN</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-blue-200">9.</span> Slot release, slot lock buttons</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Buzzers Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Volume2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  Panel Buzzers
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-amber-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-yellow-200">1.</span> Button hold buzzer</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-yellow-200">2.</span> Signal filament failure buzzer</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-yellow-200">3.</span> Power fail buzzer</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-yellow-200">4.</span> System fail buzzer</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-yellow-200">5.</span> Block release buzzer, train entry buzzer</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-yellow-200">6.</span> False feed buzzer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Buttons Table Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-emerald-500/30 to-teal-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-teal-500/30 transition-all duration-500">
                  <Table className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  Panel Buttons Table
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 text-xs">
                      <div className="font-semibold text-emerald-200 p-2 bg-white/5 rounded">S No</div>
                      <div className="font-semibold text-emerald-200 p-2 bg-white/5 rounded">Button</div>
                      <div className="font-semibold text-emerald-200 p-2 bg-white/5 rounded">Colour</div>
                      <div className="font-semibold text-emerald-200 p-2 bg-white/5 rounded">Location</div>
                      
                      <div className="p-2">1.</div>
                      <div className="p-2">SM KEY</div>
                      <div className="p-2">SM KEY</div>
                      <div className="p-2">Top Centre of the panel.</div>
                      
                      <div className="p-2">2.</div>
                      <div className="p-2">PANEL/PC SWITCH</div>
                      <div className="p-2">Used during the procedure Transferring control PANEL to PC or VICE VERSA.</div>
                      <div className="p-2">NEAR BY TO SM KEY.</div>
                      
                      <div className="p-2">3.</div>
                      <div className="p-2">GN (Main) Signal Button</div>
                      <div className="p-2">RED</div>
                      <div className="p-2">Close to signal and on the first track</div>
                      
                      <div className="p-2">2.</div>
                      <div className="p-2">SH-GN Shunt signal button</div>
                      <div className="p-2">YELLOW</div>
                      <div className="p-2">Close to Signal and on the first track</div>
                      
                      <div className="p-2">3.</div>
                      <div className="p-2">UN Route Button</div>
                      <div className="p-2">WHITE</div>
                      <div className="p-2">Centre of the berthing or last control track circuit</div>
                      
                      <div className="p-2">4.</div>
                      <div className="p-2">WN Point Button (used only for point operation)</div>
                      <div className="p-2">BLUE</div>
                      <div className="p-2">Close to the point demarcation</div>
                      
                      <div className="p-2">5.</div>
                      <div className="p-2">WWN Point Button (used for point operation and also for route section release)</div>
                      <div className="p-2">BLUE OR BLUE WITH WHITE DOT ON TOP</div>
                      <div className="p-2">Top to the PANEL</div>
                      
                      <div className="p-2">6.</div>
                      <div className="p-2">LXN Level crossing control release button.</div>
                      <div className="p-2">BROWN OR CHOCLATE</div>
                      <div className="p-2">Close to the level crossing demarcation</div>
                      
                      <div className="p-2">7.</div>
                      <div className="p-2">KLYN (Point) key lock Release Button</div>
                      <div className="p-2">BLACK</div>
                      <div className="p-2">Close to the slotted point demarcation</div>
                      
                      <div className="p-2">8.</div>
                      <div className="p-2">COGGN Calling on Signal control Button (common)</div>
                      <div className="p-2">RED</div>
                      <div className="p-2">Top of the panel and below COGGN COUNTER</div>
                      
                      <div className="p-2">9.</div>
                      <div className="p-2">EGRN Common Button to replace a cleared Signal at &apos;ON&apos;</div>
                      <div className="p-2">RED</div>
                      <div className="p-2">Top to the panel below EGRN COUNTER</div>
                      
                      <div className="p-2">10.</div>
                      <div className="p-2">GBN Common Slot Release Button (For Gate, Crank handle)</div>
                      <div className="p-2">GREEN</div>
                      <div className="p-2">Top of the panel</div>
                      
                      <div className="p-2">11.</div>
                      <div className="p-2">GBRN Common Slot Return Acknowledgement Button</div>
                      <div className="p-2">BLACK</div>
                      <div className="p-2">Top of the panel</div>
                      
                      <div className="p-2">12.</div>
                      <div className="p-2">EWN Common point button for (emergency operation)</div>
                      <div className="p-2">BLUE</div>
                      <div className="p-2">Top to the panel and below EWN COUNTER</div>
                      
                      <div className="p-2">13.</div>
                      <div className="p-2">AGGN Common Button to introduce Auto working of a Main Signal.</div>
                      <div className="p-2">GREEN</div>
                      <div className="p-2">TOP OF THE PANEL</div>
                      
                      <div className="p-2">14.</div>
                      <div className="p-2">AGGRN Common Button to cancel Auto working of a Main Signal</div>
                      <div className="p-2">BLACK</div>
                      <div className="p-2">TOP OF THE PANEL.</div>
                      
                      <div className="p-2">15.</div>
                      <div className="p-2">EUYN Emergency Route Cancellation button</div>
                      <div className="p-2">GREY</div>
                      <div className="p-2">Top of the panel and below EUYN COUNTER.</div>
                      
                      <div className="p-2">16.</div>
                      <div className="p-2">EUUYN Emergency Route Release button</div>
                      <div className="p-2">GREY</div>
                      <div className="p-2">Top of the panel and below EUUYN COUNTER</div>
                      
                      <div className="p-2">17.</div>
                      <div className="p-2">OYN Emergency Overlap Release Button</div>
                      <div className="p-2">WHITE</div>
                      <div className="p-2">Top of the panel and below OYN COUNTER</div>
                      
                      <div className="p-2">18.</div>
                      <div className="p-2">E/WHLMEFAIL, WSLMEFAILT Signal lamp Failure Alarm acknowledge button</div>
                      <div className="p-2">WHITE</div>
                      <div className="p-2">Top of the panel and below FILAMENT FAIL INDICATIONS</div>
                      
                      <div className="p-2">19.</div>
                      <div className="p-2">E/WHLMERECT, WSLMERECT Signal lamp Failure Rectified Alarm acknowledge button</div>
                      <div className="p-2">WHITE</div>
                      <div className="p-2">Top of the panel and below FILAMENT FAIL INDICATIONS</div>
                      
                      <div className="p-2">20.</div>
                      <div className="p-2">POWERFAIL ACK POWER Failure Alarm Acknowledge Button.</div>
                      <div className="p-2">RED</div>
                      <div className="p-2">TOP OF LEFT SIDE OF THE PANEL</div>
                      
                      <div className="p-2">21.</div>
                      <div className="p-2">SYSFAIL ACK SSI system failure acknowledge</div>
                      <div className="p-2">WHITE</div>
                      <div className="p-2">TOP OF THE PANEL and SYSTEM ON INDICATIONS</div>
                      
                      <div className="p-2">22.</div>
                      <div className="p-2">G/U/W/GRN ACK Button hold alarm acknowledge</div>
                      <div className="p-2">WHITE</div>
                      <div className="p-2">TOP OF THE PANEL</div>
                      
                      <div className="p-2">23.</div>
                      <div className="p-2">FCORPB False feed alarm Acknowledge</div>
                      <div className="p-2">RED</div>
                      <div className="p-2">TOP OF THE PANEL</div>
                      
                      <div className="p-2">24.</div>
                      <div className="p-2">XY RESPB loop line axle counter reset button</div>
                      <div className="p-2">GREY</div>
                      <div className="p-2">BELOW AXLE COUNTER RESET COUNTER</div>
                      
                      <div className="p-2">25.</div>
                      <div className="p-2">TRAIN ENTRY ACK Train entering next station block section alarm acknowledge button</div>
                      <div className="p-2">BLACK</div>
                      <div className="p-2">TOP OF THE ADVANCE STARTER SIGNAL DOMINO.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Counters Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-pink-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-pink-500/30 to-rose-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-rose-500/30 transition-all duration-500">
                  <Calculator className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  Panel Counters
                </span>
              </h2>
              <div className="bg-linear-to-br from-pink-500/20 via-rose-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-pink-200">1.</span> Emergency signal replacement counter (EGRN)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-pink-200">2.</span> Emergency route release counter (EUUYN)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-pink-200">3.</span> Calling on signal counter (COGGN)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-pink-200">4.</span> Emergency route cancellation counter (EUYN)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-pink-200">5.</span> Emergency point operation counter (EWN)</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold text-pink-200">8.</span> Emergency overlap release counter (OYN)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Operation Chart Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-cyan-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Table className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  Panel Operation Chart
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 text-xs">
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">S.No</div>
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">Gear Type</div>
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">Buttons to operate</div>
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">Required Conditions</div>
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">Signal Cancel</div>
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">Emerg. Route Release</div>
                      <div className="font-semibold text-cyan-200 p-2 bg-white/5 rounded">Emerg. Route Cancel</div>
                      
                      <div className="p-2">1</div>
                      <div className="p-2">Home Signal</div>
                      <div className="p-2">GN+UN</div>
                      <div className="p-2">Control Tracks overlap tracks up, required point detection including overlap/isolation point detections, gate is locked and concerned CH locked plus concerned MCB&apos;s switched on.</div>
                      <div className="p-2">GN+EGGRN</div>
                      <div className="p-2">GN+EUUYN</div>
                      <div className="p-2">GN+EUYN</div>
                      
                      <div className="p-2">2</div>
                      <div className="p-2">Calling-On Signal</div>
                      <div className="p-2">GN+COGGN Release only COGGN keeping GN pressed and press UN</div>
                      <div className="p-2">Calling-On Track in front of Signal must be occupied and rear/ replacement track must be high [clear]</div>
                      <div className="p-2">GN+EGRN</div>
                      <div className="p-2">GN+EUUYN</div>
                      <div className="p-2">GN+EUYN</div>
                      
                      <div className="p-2">3</div>
                      <div className="p-2">Main Line Starters</div>
                      <div className="p-2">GN+Ad.St. UN GN+St.UN</div>
                      <div className="p-2">Control Tracks up, required point detections including isolation point(s) and concerned CH locked plus concerned MCB&apos;s switched on.</div>
                      <div className="p-2">GN+EGRN</div>
                      <div className="p-2">GN+EUUYN</div>
                      <div className="p-2">GN+EUYN</div>
                      
                      <div className="p-2">4</div>
                      <div className="p-2">Loop Line Starters</div>
                      <div className="p-2">GN+AdSt-UN GN+St.UN</div>
                      <div className="p-2">Control Tracks up, required point detections including isolation point(s) and concerned CH locked plus concerned MCB&apos;s switched on. Approach clear, Clrars after berthing track is occupied for 48 seconds.</div>
                      <div className="p-2">GN+EGRYN</div>
                      <div className="p-2">GN+EUUYN</div>
                      <div className="p-2">GN+EUYN</div>
                      
                      <div className="p-2">5</div>
                      <div className="p-2">Shunt Signal</div>
                      <div className="p-2">SHGN+UN</div>
                      <div className="p-2">Control Tracks up, required point detections including isolation point(s) and concerned CH locked plus concerned MCB&apos;s switched on.</div>
                      <div className="p-2">SHGN+EGRN</div>
                      <div className="p-2">GN+EUUYN</div>
                      <div className="p-2">GN+EUYN</div>
                      
                      <div className="p-2">6</div>
                      <div className="p-2">Auto Signal Set.</div>
                      <div className="p-2">GN+AGGN</div>
                      <div className="p-2">The Signal should be lowered first &apos;A&apos; Marker will lit.</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      
                      <div className="p-2">7</div>
                      <div className="p-2">Auto Signal Cancel</div>
                      <div className="p-2">GN+AGGRN</div>
                      <div className="p-2">&apos;A&apos; Marker will not lit.</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      
                      <div className="p-2">8</div>
                      <div className="p-2">Loop Line Axle Counter Reset</div>
                      <div className="p-2">XT RES PB+A/C RES KEY</div>
                      <div className="p-2">Loop line Axle Counter Track failed Station Master will ensure personally for clearance of line</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      
                      <div className="p-2">10</div>
                      <div className="p-2">Power Fail ACK</div>
                      <div className="p-2">POWER FAIL ACK</div>
                      <div className="p-2">Buzzer will stop on pressing the BUTTON, the RED indication remains till the problem is rectified.</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      
                      <div className="p-2">11</div>
                      <div className="p-2">System Fail ACK</div>
                      <div className="p-2">SYS. FAIL, ACK</div>
                      <div className="p-2">System Fail Buzzer should give sound</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      
                      <div className="p-2">12</div>
                      <div className="p-2">HL/SL MECR Failed</div>
                      <div className="p-2">HL/SL MECR FAILED</div>
                      <div className="p-2">On hearing a Buzzer for MECR(Signal filament failure) along with the indication.</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      
                      <div className="p-2">13</div>
                      <div className="p-2">HL/SL MECR Rectified</div>
                      <div className="p-2">RECTIFIED</div>
                      <div className="p-2">Signal filament rectified.</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                      <div className="p-2">-</div>
                    </div>
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

export default Interlocking