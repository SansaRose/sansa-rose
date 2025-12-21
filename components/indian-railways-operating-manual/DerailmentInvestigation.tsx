'use client'
import { 
  AlertTriangle,
  FileText,
  Search,
  Settings,
  Gauge,
  Train,
  Wrench,
  Shield} from 'lucide-react'

const DerailmentInvestigation = () => {
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
                      <AlertTriangle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              DERAILMENT INVESTIGATIONS
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-red-400/20">
                  <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                    &quot;Accident investigations – a tool to prevent recurrence&quot;. In most case on Indian Railways, cause of the accident is not clearly established. This results in repetitive failures. Pinpointing the scientific causes of accidents, therefore, becomes a preventive strategy
                  </p>
                </div>
              </div>
            </div>

            {/* Site investigation Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Search className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Site investigation
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">1)</span> Condition of track with special reference to gauge cross level, super elevation. Gauge of the track to be checked under the load and for a distance of 45 meters on either side of point of mount, if cause is indisputably known otherwise for a distance of 90 meters ahead of the point of mount. In case of sabotage or suspected sabotage nothing to be disturbed except to rescue life till ok from police.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">2)</span> A rough sketch showing the position of derailed vehicles marks on sleepers should be made. Point of drop/mount to be indicated.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">3)</span> Locomotive speed records/graph
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">4)</span> Condition of rolling stock with special reference to brake power; marshalling of trains and engine details as also breakage of components like brake blocks underframe assemblies having caused obstructions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">5)</span> The position of block instruments, signals, points indicators.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">6)</span> At stations with panel interlocking position of switches &amp; indicators to be recorded preferably by two officers or two Sr. Subordinates of different branches and relay room to be sealed;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">7)</span> Position of important relays
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">8)</span> Seize &amp; freeze all records as laid down in accident manual
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">9)</span> The statement of the concerned staff available at site should be recorded for finding the cause of accident.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">10)</span> To give the prima-facie cause of the accident with expected time of restoration
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">11)</span> Marshalling of the train, with regard to anti-telescopic coaches;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">12)</span> Arrange to take photographs from different angles to assist in reconstructing the scene of the accident;
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-blue-400/10">
                    <p className="text-blue-50/95 lg:text-sm text-xs">
                      <span className="font-semibold text-blue-200">13)</span> The dates as given in the accident reporting form must be recorded for locomotive to produce before the Accident Enquiry Committee. The track and coach/wagon is to be examined jointly and the data and information collected are to be recorded jointly signed by the Sr. Subordinates available at the site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Following operating features Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Following operating features must be checked while investigating into a derailment
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-green-400/20">
                  <ul className="space-y-2 ml-4 text-xs">
                    <li className="text-green-50/95">• Speed of the train just before the accident</li>
                    <li className="text-green-50/95">• Uneven load/shifted load/load in all the vehicles must be checked to get an idea of loading and lashing/securing loads.</li>
                    <li className="text-green-50/95">• Application of brakes</li>
                    <li className="text-green-50/95">• Brake power of the train and location of vehicles without brake power</li>
                    <li className="text-green-50/95">• Whether all hand brakes are in released condition.</li>
                    <li className="text-green-50/95">• How was the train received or dispatched by the stationmaster. Whether station staff adopted any abnormal method of working</li>
                    <li className="text-green-50/95">• Sudden reversal of points</li>
                    <li className="text-green-50/95">• S&amp;T failure reported before the accident – how and when was it set right.</li>
                  </ul>
                  <p className="text-green-50/95 lg:text-sm text-xs mt-4">
                    It is always useful to look into all aspects connected with the derailment. Sometimes important clues get neglected due to preconceived ideas and it becomes very difficult to properly arrive at the cause of derailment.
                  </p>
                  <p className="text-green-50/95 lg:text-sm text-xs mt-3">
                    Accidents involving collision, passing signal at danger, rolling back of a train etc. are generally caused by violation of train operation rules and it is not very difficult to trace the irregularities committed. The most difficult accidents, from investigation point of view, are the ones where wheel leaves the rail.
                  </p>
                  <p className="text-green-50/95 lg:text-sm text-xs mt-3">
                    Such accidents can be categorized in four types:
                  </p>
                  <ul className="ml-4 space-y-1 text-xs mt-2">
                    <li className="text-green-50/95">1. When one or both of the same wheel-set fall inside the track.</li>
                    <li className="text-green-50/95">2. When the wheel derail without any mark on the rail table.</li>
                    <li className="text-green-50/95">3. When the wheel derails with single flange mark on the rail table</li>
                    <li className="text-green-50/95">4. When a number of wheels derail with multiple flange marks on the rail table.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Type 1 Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Gauge className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Type 1: When one or both wheels of the same wheel-set fall inside the track
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      In such derailments the cause of accident is very clear, i.e., spread gauge or may be a remote possibility of shifting of wheel disc on the axle or breakage of axle or journal. It is generally seen that in such cases of wheel/wheels falling inside the track, the affected rolling stock is lifted with the help of jacks and the rolling stock can be lowered and moved on the same track.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      In the case of spread gauge, special care has to be taken for recording the condition of track fittings. Loose keys, signs of rail-chairs shifting on the sleeper, condition of elastic clamps, tie rod cotters etc. must be carefully examined and recorded. If a wheel starts mounting the rail, its tread lose contact with the rail and entire weight is shifted to this point of contact on the flange. At this particular moment, the arrangement of forces is as follows: -
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10 mb-3">
                      <p className="text-purple-50/95 lg:text-sm text-xs font-mono text-center mb-2">Q</p>
                      <p className="text-purple-50/95 lg:text-sm text-xs font-mono text-center">μR</p>
                    </div>
                    <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                      In the above figure different forces shown are as follow:
                    </p>
                    <ul className="ml-4 space-y-1 text-xs mb-3">
                      <li className="text-purple-50/95">Q: Instantaneous wheel load</li>
                      <li className="text-purple-50/95">R: Reaction of rail</li>
                      <li className="text-purple-50/95">Y: Lateral thrust (flange force)</li>
                      <li className="text-purple-50/95">μR: Frictional force between rail and wheel flange (acts upward)</li>
                      <li className="text-purple-50/95">μ: Coefficient of friction</li>
                      <li className="text-purple-50/95">β: Flange angle</li>
                    </ul>
                    <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                      From the above simple model, following formula was derived by Nadal in 1908:
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10 mb-3">
                      <p className="text-purple-50/95 lg:text-sm text-xs font-mono text-center">
                        Y/Q tanβ -μ/1+μ tanβ
                      </p>
                    </div>
                    <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                      The ratio Y/Q is called derailment coefficient.
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs">
                      (While investigating into derailment, all track vehicle defects and features and operational aspects which cause one or more above mentioned factors to occur should be listed as possible contributory factors. The list of such contributory defects and features thus arrived at should be arranged in descending order of their assessed contribution. Thus one can arrive at one or more causes of derailment.)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Type-2 Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Type-2: When the wheel derails without any mark on the rail table
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                  <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    In such type of derailments no flange marks are found on the rail table, In majority of such derailments following reasons may have caused the accident:
                  </p>
                  <ul className="ml-4 space-y-2 text-xs mb-3">
                    <li className="text-indigo-50/95">• Obstruction in the path of wheel.</li>
                    <li className="text-indigo-50/95">• Breaking of vehicle suspension arrangement.</li>
                    <li className="text-indigo-50/95">• Jamming of wheel due to roller bearing failure.</li>
                    <li className="text-indigo-50/95">• Mishandling of train by loco pilot</li>
                    <li className="text-indigo-50/95">• Wrong marshalling of vehicles with no brake power kept together or heavy vehicles in the rear.</li>
                  </ul>
                  <p className="text-indigo-50/95 lg:text-sm text-xs">
                    For investigation of such derailments the accident site must be carefully inspected for foreign body, which might have caused obstruction to the derailed wheel. Examination of train brake power, position of zero brake power vehicles and heavily loaded vehicles must be critically done. Additionally, loco speedometer chart must be checked for last brake application.
                  </p>
                </div>
              </div>
            </div>

            {/* Type-3 Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Search className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Type-3: When the wheel derails with single flange mark on the rail table
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-teal-400/20">
                  <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    This is the most interesting category of derailment and requires detailed examination of track, vehicles, loading condition and train operating conditions. First the wheel mount mark itself has to be properly ascertained. The length of flange mark gives a clue to reasons for derailment. The following factors must be considered after seeing the flange mark:
                  </p>
                  <ul className="ml-4 space-y-2 text-xs mb-3">
                    <li className="text-teal-50/95">• Long flange mark suggests that the wheel load reduced considerably for a long period.</li>
                    <li className="text-teal-50/95">• Short flange mark suggests that the lateral thrust increased to a considerably high value.</li>
                    <li className="text-teal-50/95">• The weight of the vehicle and speed of the train at the time of accident affect the impression of flange mark on the rail.</li>
                  </ul>
                  <p className="text-teal-50/95 lg:text-sm text-xs mb-3">
                    In a number of cases an empty derailed wagon had been pulled to a very long distance and the wheel mount mark was found but disputed due to ignorance of the investigating officials. In all the cases, one must ascertain the first wheel drop mark and then trace back the mount mark. After locating the mount mark, next step is to match it with the wheel that derailed first. For this matching of damages on sleepers and position of vehicles after derailment will have to be done.
                  </p>
                  <p className="text-teal-50/95 lg:text-sm text-xs">
                    After identifying the point of mount and drop, detailed examination and recording of track geometry rolling stock parameters, condition of loads in derailed as well as non-derailed vehicles and operating conditions has to be done. This record reveals reasons for the accident. The analysis has to be done with a view to find out reasons for increase in thrust and reduction in instantaneous wheel load.
                  </p>
                </div>
              </div>
            </div>

            {/* Type-4 Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-amber-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-amber-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <AlertTriangle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  Type-4: When a number of wheels derail with several flange marks on the rail table
                </span>
              </h2>
              <div className="bg-linear-to-br from-amber-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                  <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    In this category of derailment the probable reasons for derailment can be as follows:
                  </p>
                  <ul className="ml-4 space-y-2 text-xs mb-3">
                    <li className="text-amber-50/95">• Obstructions in the path of wheels.</li>
                    <li className="text-amber-50/95">• Disturbed track (work being done on the track or sabotage)</li>
                    <li className="text-amber-50/95">• Rail failure</li>
                    <li className="text-amber-50/95">• Serious track defect-twist misalignment or formation failure</li>
                    <li className="text-amber-50/95">• Buckling of track</li>
                  </ul>
                  <p className="text-amber-50/95 lg:text-sm text-xs">
                    In such cases, if there is no obvious reason like obstructions or rail failure, track parameters are of particular relevance and sufficient care has to be taken in recording them. Readings of track geometry is of great importance in establishing the behaviour of vehicle just before the derailment. In addition to the readings taken after derailments, records of previous maintenance (rail renewal, de-stressing etc.) must be perused to assess the amount of work done in the last few days.
                  </p>
                </div>
              </div>
            </div>

            {/* DERAILMENTS AT POINTS AND CROSSINGS Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-rose-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-rose-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-rose-100 bg-clip-text text-transparent">
                  DERAILMENTS AT POINTS AND CROSSINGS
                </span>
              </h2>
              <div className="bg-linear-to-br from-rose-500/20 via-pink-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-5 border border-rose-400/20">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Points and crossings are meant for changing the road of a train and it has some discontinuities thereby making it a weak link in track structure. In a point there are two tongue rails connected together by stretcher bars and this assembly is called switch. A pull rod from some distance operates this switch. Today, most of the points are operated by motors and they have some interlocking arrangement. The interlocking for motor operated points is done with a lock bar and it has a detection device also to detect proper housing of points.
                    </p>
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Tongue rails forming the switch are hinged onto the heel blocks in the rear. The bolts, provided for hinging the tongue rails, are kept loose for easy operation of switch. After the switch arrangement, another important part is the nose of crossing. Here all the wheels traverse the path shown by the switch.
                    </p>
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Most of the derailments at points and crossings either initiate at the toe of the tongue rail or near the nose of the crossing. Whenever a derailment takes place on a point the following checks must be done:-
                    </p>
                    <p className="text-rose-50/95 lg:text-sm text-xs mb-2">
                      Gauge of point must be checked at four locations:
                    </p>
                    <ul className="ml-4 space-y-1 text-xs mb-3">
                      <li className="text-rose-50/95">• 305 mm in advance of nose of tongue rail</li>
                      <li className="text-rose-50/95">• 152 mm inside the tongue rail for straight road and turn out.</li>
                      <li className="text-rose-50/95">• At heel for tongue rail for straight road and turn out.</li>
                      <li className="text-rose-50/95">• At middle of tongue rail for straight road and turn out.</li>
                    </ul>
                    <p className="text-rose-50/95 lg:text-sm text-xs mb-3">
                      The Gauge must be correct at all places except at the toe where it may be 6 mm slack for housing the tongue rail.
                    </p>
                    <p className="text-rose-50/95 lg:text-sm text-xs mb-3">
                      It can be appreciated that conditions created by slack gauge&apos; are not permitted near the switch. IRPWM-1985, Para 237 t&apos; (8) (a) and (b) is reproduced below:
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-rose-400/10 mb-3">
                      <p className="text-rose-50/95 lg:text-sm text-xs mb-2">
                        &quot;(8) Gauge and Super-elevation in turnouts-(a) It is a good practice to maintain uniform gauge over turnouts.
                      </p>
                      <p className="text-rose-50/95 lg:text-sm text-xs">
                        (b) If gauge of track adjoining the points and crossings is maintained wider/tighter than the gauge on the points and crossings. the gauge on the adjoining track must be brought to the same gauge as in points and crossings and run out at the rate of I mm in 3 metres to the requisite extent. It should, however, be ensured that the same gauge as applicable to the points and crossings is maintained for at least one rail length on either side of point and crossings.&quot;
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-rose-400/10 mb-3">
                      <p className="text-rose-200 font-semibold mb-2 text-xs">
                        In case of derailment suspected to have started near the switch of the turnout the following points need to be carefully examined:
                      </p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-rose-50/95">• The condition of tongue rail-whether broken, chipped or bent.</li>
                        <li className="text-rose-50/95">• Whether the damage is old or new.</li>
                        <li className="text-rose-50/95">• Height of the tip of the switch from top of stock rail.</li>
                        <li className="text-rose-50/95">• Thickness of the tongue rail</li>
                        <li className="text-rose-50/95">• Any gap between the tongue rail and stock rail</li>
                        <li className="text-rose-50/95">• Any damage to stretcher bar</li>
                        <li className="text-rose-50/95">• In case of interlocked points, the slackness between the locking bar slot and slide should be recorded</li>
                        <li className="text-rose-50/95">• The condition of brackets holding the stock rail</li>
                        <li className="text-rose-50/95">• Whether the switch jumps up when a wheel passes on its heel.</li>
                      </ul>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3 border border-rose-400/10 mb-3">
                      <p className="text-rose-200 font-semibold mb-2 text-xs">
                        If the derailment is suspected to have started near the crossing the following points must be carefully checked:-
                      </p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-rose-50/95">• Condition of nose-wear, breakage, chipped, bent</li>
                        <li className="text-rose-50/95">• Reduction in the level of nost as compared with wing rails.</li>
                        <li className="text-rose-50/95">• Clearance between wing rail and stock rail (near the nose) on both sides.</li>
                        <li className="text-rose-50/95">• Clearance between guard rail and stock rail</li>
                        <li className="text-rose-50/95">• Alignment of turnout to be measured for checking smoothness (with 6 metre chord at 1.5 metre intervals)</li>
                      </ul>
                    </div>
                    <p className="text-rose-50/95 lg:text-sm text-xs mb-3">
                      IRPWM has specified a check-list for complete examination of points and crossings.
                    </p>
                    <p className="text-rose-50/95 lg:text-sm text-xs">
                      There is one potentially dangerous structure called diamond crossing, which is generally not provided on the main line. A simple diamond crossing has four noses (two acute angle and two obtuse angle), which require a critical watch. Even a slight damage to these noses or disturbance to the clearance between stock rails and guardrails make this diamond crossing unsafe. The problem is further compounded if a diamond crossing has one or two slips also. The curvature of the slip is generally so high that these structure are not fit for speeds above 8 to 10 kmph. It is advisable to avoid use of these structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Some Important Defects Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-violet-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Wrench className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-violet-100 bg-clip-text text-transparent">
                  Some Important Defects
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* (A) Permanent Way */}
                  <div className="bg-white/5 rounded-xl p-5 border border-violet-400/20">
                    <h3 className="text-violet-200 font-bold lg:text-xl text-lg mb-4">(A) Permanent Way</h3>
                    <ul className="ml-4 space-y-2 text-xs mb-4">
                      <li className="text-violet-50/95">• Spread gauge</li>
                      <li className="text-violet-50/95">• Gaping in points</li>
                      <li className="text-violet-50/95">• Tipping of the toe of switch</li>
                      <li className="text-violet-50/95">• Worn out &amp; broken tongue Rail</li>
                      <li className="text-violet-50/95">• Excessive clearances of check rail opposite to the nose of the crossing</li>
                      <li className="text-violet-50/95">• Loose or slack points connections</li>
                      <li className="text-violet-50/95">• Sharp curves with kinking alignments</li>
                      <li className="text-violet-50/95">• Worn out Rails</li>
                      <li className="text-violet-50/95">• Abrupt introduction of super elevation</li>
                      <li className="text-violet-50/95">• Super elevation not corresponding to speed of the train</li>
                      <li className="text-violet-50/95">• Buckling of track</li>
                      <li className="text-violet-50/95">• Shearing of fish plate bolts</li>
                      <li className="text-violet-50/95">• Subsidence of track</li>
                      <li className="text-violet-50/95">• Uneven Cross level</li>
                      <li className="text-violet-50/95">• Condition of Ballast</li>
                      <li className="text-violet-50/95">• Security fastening deficient/loose</li>
                    </ul>
                    <p className="text-violet-50/95 lg:text-sm text-xs mb-4">
                      Track defects have a vital role in the accident and therefore it is very essential to check the various parameters of the track. The following parameters must be checked thoroughly to pin point the defects in the track:
                    </p>

                    {/* (1) Gauge */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(1) Gauge - It is the shortest distance between the two rails of the track.</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2 font-semibold">Rail Gauge</p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        The standard gauge is 1676 mm.
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2 font-semibold">Permissible Variations</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-violet-50/95">• Straight line 6 mm tight to 6 mm slack ± 6 mm)</li>
                        <li className="text-violet-50/95">• On curve with radius 350 Mtrs or more-6 mm tight to 15 mm slack (-6 to +15)</li>
                        <li className="text-violet-50/95">• On curve with radius less than 350 Mtrs-Slack up to 20 IllIl1 (correction slip No. 10 Rly Bd. L.No. 94/CE/II/TSG/I Dt. 20/24-6-96 of P. Way, manual)</li>
                        <li className="text-violet-50/95">• Gauge sleeper to sleeper Variation -- 2 mm</li>
                      </ul>
                      <p className="text-violet-50/95 lg:text-xs text-xs italic mt-2">
                        IRPM Para 316(2) (a)
                      </p>
                    </div>

                    {/* (2) Cross-level */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(2) Cross-level</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Cross-level of the track is relative level difference between the two rail tables measured perpendicular to the track at the same point. It includes the variation in the super elevation in case of curve cross level to be recorded on every fourth sleeper or 3 mts apart. The cross level reading helps in calculating the TWIST available in the track. TWIST is calculated in mm/meters by using the formula
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Algebraic difference of cross level at two points A &amp; B in mm divided by Distance between points A &amp; B in meters,
                      </p>
                      <p className="text-violet-50/95 lg:text-xs text-xs italic mb-2">
                        Ref. IRPWM - Para 316 (2) (C)
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs">
                        Twist should not be more than 3 mm/mt as per Railway Board letter no. 631W6/TK/I0/Dt 10.11.1964.
                      </p>
                    </div>

                    {/* (3) Unevenness */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(3) Unevenness</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs">
                        This defect of the track is not reflected in the gauge and cross level reading. Low joints, high joints, loose packing, sleepers and lifting of sleepers cause this defect. Long sags are not taken as unevenness. It is recorded for left and right rail separately. It is measured in terms of difference in longitudinal levels over&apos; a fixed base. Unevenness gives rise to forced oscillations in a vehicle and can cause variations in the values of instantaneous Wheel load and lateral thrust. Para 607 of IRPWM classifies unevenness (measured on 3.6 Mts cord) above 15111m as category D.
                      </p>
                    </div>

                    {/* (4) Versine and super elevation */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(4) Versine and super elevation</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Versine and super elevation are measured for checking correctness of a curve. At the beginning and at the end of the curve, details of the curve are mentioned on the board. Radius of any curve is obtained by dividing 1750 mtrs, by its degree. Versine is calculated as:
                      </p>
                      <div className="bg-white/5 rounded p-2 border border-violet-400/5 mb-2">
                        <p className="text-violet-50/95 lg:text-sm text-xs font-mono text-center">
                          V= 125.C2/R
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs text-center mt-1">
                          R - Radius in meters, C - Cord length in meters, V - Versine
                        </p>
                      </div>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        As per Para 421 (b)(i) of IRPWM, the station to station variation of versines of stations 10 Mts apart should not exceed 15 mm for more than 100 Kmph speed, whereas for speeds 100 Kmph or less than 100 Kmph it should not exceed 20 mm or 200/0 of the average versine of the circular portion whichever is more.
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        The super elevation is calculated as:
                      </p>
                      <div className="bg-white/5 rounded p-2 border border-violet-400/5 mb-2">
                        <p className="text-violet-50/95 lg:text-sm text-xs font-mono text-center">
                          C = GV2 /127R
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs text-center mt-1">
                          C = Cant/Super elevation in mm., G = Dynamic gauge in mm, V= Speed in Kmph
                        </p>
                      </div>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Para 406 ( d) of IRPWM specifies a maximum cant of 165 mm. on group A, Band C routes and 140 mm on group D and E routes. The maximum amount of cant deficiency is also specified in para 406(2) as given below :
                      </p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-violet-50/95">• For speeds in excess of 100 Kmph on group A and B routes for nominated rolling stock and routes with permission of Chief Engineer - 100 mm</li>
                        <li className="text-violet-50/95">• For broad gauge routes not covered by above - 75</li>
                      </ul>
                    </div>

                    {/* (5) Ballast */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(5) Ballast</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        It is a very important member in the track structure. It helps in maintaining track Geometry. The ballast resistance is affected by following factors -
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Ballast – Size, Material, Shape, State of consolidation, Type of sleeper, Cushion at Formation.
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Para 263(2) I RPWM recommends the Minimum depth of ballast below the bottom of the sleeper at rai I seat as under:
                      </p>
                      <div className="bg-white/5 rounded p-3 border border-violet-400/5">
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="font-semibold text-violet-200">Groups</div>
                          <div className="font-semibold text-violet-200">Recommended Depth</div>
                          <div>BG Group A</div>
                          <div>300 mm</div>
                          <div>BG Group B &amp; C</div>
                          <div>250 mm</div>
                          <div>BG Group 0</div>
                          <div>200 mm</div>
                          <div>BG Group E</div>
                          <div>150 mm</div>
                        </div>
                      </div>
                    </div>

                    {/* (6) Rail */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(6) Rail</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        The accident caused by rail fracture does not leave much room for investigation. The fractured rail is to be tested to find out the nature of the failure. The visual inspection can reveal whether the fracture was new or there was some old flow in the rail.
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        For other derailments, the rail is measured for its wear. The rail wears out mostly on the top surface and gauge face. Rail wear can be vertical, lateral or angular.
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Angular wear, Profile of new rail, Vertical Wear, Worn profile
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        The limits of wear of rail have been laid down in IRPWM Para 302 (b)
                      </p>
                      <div className="bg-white/5 rounded p-3 border border-violet-400/5 mb-2">
                        <p className="text-violet-200 font-semibold mb-1 text-xs">Gauge Rail section ertical wear</p>
                        <div className="space-y-1 text-xs">
                          <p className="text-violet-50/95">B.G. 60 kg/meter 13mm</p>
                          <p className="text-violet-50/95">52kg/mctcr 8mm</p>
                          <p className="text-violet-50/95">90R 5mm</p>
                        </div>
                      </div>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        Lateral wear limits have been given in para 302 (b)
                      </p>
                      <div className="bg-white/5 rounded p-3 border border-violet-400/5">
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="font-semibold text-violet-200">Section</div>
                          <div className="font-semibold text-violet-200">Gauge Category of work</div>
                          <div className="font-semibold text-violet-200">Lateral wear</div>
                          <div>Curves B.G.</div>
                          <div>Group A &amp; B routes</div>
                          <div>8 mm</div>
                          <div>Curves B.G.</div>
                          <div>Group C &amp; D routes</div>
                          <div>10 mm</div>
                          <div>Straight B.G.</div>
                          <div>Group A &amp; B routes</div>
                          <div>6 mm</div>
                          <div>Straight B.G.</div>
                          <div>Group C &amp; D route</div>
                          <div>8 mm</div>
                        </div>
                      </div>
                    </div>

                    {/* (7) Sleepers */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(7) Sleepers</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs">
                        If sleeper suffer any damage or loss in property, it can cause derailment. While recording the gauge and level readings the condition of each sleeper must be carefully sleepers near point of mount.
                      </p>
                    </div>

                    {/* (8) Rail Fasteners */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(8) Rail Fasteners</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        For different - type of sleepers, the rail fasteners are different Wooden sleepers - Dog spikes, Round head spikes, Steel keys Steel trough sleeper - steel keys
                      </p>
                      <p className="text-violet-50/95 lg:text-sm text-xs">
                        Prestressed concrete sleepers-- elastic clips with liners between the foot of rail and clip. Condition of all fasteners should be recorded while taking track reading
                      </p>
                    </div>

                    {/* (9) Creep */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10 mb-4">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(9) Creep</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                        This is a silent but very dangerous phenomenon of the track. Creep is a longitudinal displacement of track and is caused by
                      </p>
                      <ul className="ml-4 space-y-1 text-xs mb-2">
                        <li className="text-violet-50/95">• Temperature variation causing expansion and contraction of the rail.</li>
                        <li className="text-violet-50/95">• The tractive forces of locomotive to push the rail backward.</li>
                        <li className="text-violet-50/95">• Braking forces of train trying to push the rail forward. The effect of the above forces is accelerated if the rail fasteners are not able to hold the rails properly to the sleepers or rail seat on the sleepers is a damaged or bad joint in the track with out proper expansion gap.</li>
                      </ul>
                      <p className="text-violet-50/95 lg:text-sm text-xs">
                        Para 242 (6) of IRPWM specifies maximum about of creep permitted as 150mm. In LWR and CWR creep indication point are provided at a distance of 50 meters and 100 meters SEJ(Switch Expansion Joint) on either end of LWR/CWR.
                      </p>
                    </div>

                    {/* (10) Buckling */}
                    <div className="bg-white/5 rounded-lg p-4 border border-violet-400/10">
                      <h4 className="text-violet-200 font-semibold mb-2 text-sm">(10) Buckling</h4>
                      <p className="text-violet-50/95 lg:text-sm text-xs">
                        When a section of track buckles, about one or two rails length of the track leaves its place and moves side way. This also happens due to the rise in temperature and other reasons similar to the creep. The buckling may be horizontal or vertical. Buckling normally happens in the 2nd half of the day mostly, when the track has absorbed max. heat and also near the bridges, level crossings etc. where the track is firmly held in ground.
                      </p>
                    </div>
                  </div>

                  {/* (B) Defects of Rolling Stock */}
                  <div className="bg-white/5 rounded-xl p-5 border border-violet-400/20">
                    <h3 className="text-violet-200 font-bold lg:text-xl text-lg mb-4">(B) Defects of Rolling Stock</h3>
                    <ul className="ml-4 space-y-2 text-xs">
                      <li className="text-violet-50/95">• Defects in wheel and Axle Broken &amp; Hanging fittings</li>
                      <li className="text-violet-50/95">• Defects in Bolster and Assemblies</li>
                      <li className="text-violet-50/95">• Defects in spring gear, axle guard and trolley</li>
                      <li className="text-violet-50/95">• Defects in Brake gear</li>
                      <li className="text-violet-50/95">• Excessive Clearance in side bearer, pivot etc.</li>
                      <li className="text-violet-50/95">• Hot box/Roller bearing failure</li>
                      <li className="text-violet-50/95">• Under frame and under frame members out of alignment</li>
                      <li className="text-violet-50/95">• Poor brake power</li>
                      <li className="text-violet-50/95">• Broken or disengaged Baffle plates in the empty/unloaded tank wagons</li>
                      <li className="text-violet-50/95">• Defective Draw gear, CBC gear and Buffing gear, Train parting &amp; subsequent-collision – &apos;alliance 2&apos; – couplets opening automatically.</li>
                    </ul>
                    <p className="text-violet-50/95 lg:text-sm text-xs mt-3">
                      Defects of Locomotives are very similar to defects of Rolling Stock
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

export default DerailmentInvestigation
