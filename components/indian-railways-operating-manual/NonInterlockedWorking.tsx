'use client'
import { 
  AlertTriangle,
  Settings,
  Shield,
  Wrench} from 'lucide-react'

const NonInterlockedWorking = () => {
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
              NON – INTERLOCKED WORKING OF STATION
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Non Interlocking Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Non Interlocking
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-red-200">i)</span> N.I. Working means temporary disconnection of points, signals, track circuits, axle counters and other signaling gadgets for any designated works. This kind of working is normally resorted to works such as over hauling of lever frames, yard remodeling, introduction of panel/RRI working, cable etc.,
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-red-200">ii)</span> In another sense, at an interlocked station when points and signals become defective, station becomes non-interlocked for the purpose of working.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                      In both the cases the safeguards ingrained through normal functioning of various signaling equipment are missing and as such responsibility of the part of staff increases manifold. N.I. working puts staff under severe strain and hence prone for lapses. Unflagging attention from every quarter is the need of the hour so that safety is ensured.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                      Non – Interlocked working entails not only slowing down of train operations; it is also a less safe system as compared to interlocked working. Since it is desirable to avoid NI altogether, both from safety as also customer convenience point of view, attempt must be made at the project proposal stage itself to dispense with NI altogether and undertake the work by means of traffic blocks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-red-50/95 lg:text-base text-sm leading-relaxed">
                      Instructions given below are in addition to existing rules for Non – Interlocked working such as issue of Green Notice etc. They must be read together with existing provisions in G&SR, Block Working Manual etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Section A: Requirement of Non – Interlocked Working */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  A. Requirement of Non – Interlocked Working
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  The following guidelines are laid down for a correct assessment of whether NI working is required in the first place or whether it can be dispensed with altogether.
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">a.</span> NI working should not be resorted to as far as possible, in case of installation of new S&T gears. NI is unavoidable only if modifications are to be made to existing S&T gears.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">b.</span> For new S&T gears, there is no need of NI and the work can be managed through wellplanned pre-change over works (insertions of point & crossing etc). The final change over to new gears can be carried out under partial or complete traffic block.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">c.</span> At the project proposal stage itself, S&T department should make it clear whether the project requires NI or not; and if it does, the duration of such NI. This fact must be mentioned in the check list on the original tracing itself.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">d.</span> Sr. DOM & Sr. DCM must quantify the actual impact of such NI, and deduce it to monetary terms, by calculating anticipated losses both on account of passenger and freight traffic. These should include losses on account of cancellation, short termination, diversion, rescheduling, detention to trains and imposition of restriction on booking/movement of freight traffic.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">e.</span> Expenses likely to be incurred on account of TA/DA of temporary NI staff, and other administrative costs should also be added to arrive at the traffic cost of proposed NI working.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">f.</span> This traffic cost of NI should be communicated to S&T, who will evaluate if new gears can be installed without resorting to NI for less than the expected cost of proposed NI, if necessary by constructing a new building etc. as the case may be.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">g.</span> If new gears can be installed in a new building and commissioned under traffic block at a cost that is comparatively less than the overall traffic cost of proposed NI, then the project should be recorded as one to be taken up without NI.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">h.</span> This entire exercise must be carried out under the personal supervision of DRM, who will ensure that all estimates are reasonable and no figures are unrealistic both with regard to duration of NI or the anticipated traffic cost.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">i.</span> Thus, NI will be undertaken only if found to be unavoidable, and this fact will be recorded on the original tracing, to be signed by branch officers concerned, and the DRM.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Minor and Major Works Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Wrench className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Minor and Major Works
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4 font-semibold">1. Guidelines given below should be followed for deciding whether NI working is required or not.</p>
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3 font-semibold text-green-200">NI working is not required and the work can be managed by traffic block in following cases:</p>
                    <ul className="ml-4 space-y-2">
                      <li className="text-green-50/95 lg:text-sm text-xs">(i) Replacement of Mechanical lever frame by another Mechanical lever frame.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(ii) Replacement of Mechanical lever frame by panel.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(iii) Replacement of Panel by RRI.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(iv) Replacement of RRI by RRI.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(v) Commissioning of new SSI/RRI.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(vi) Amalgamation of newly constructed double line portion into existing conventional double line.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3 font-semibold text-green-200">2. NI working is required only for following cases:</p>
                    <ul className="ml-4 space-y-2">
                      <li className="text-green-50/95 lg:text-sm text-xs">(i) Overhauling of cabins.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(ii) Replacement of Panel by Panel at road side stations.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(iii) Meggering of cables.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(iv) Changes in yard layouts</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-3 font-semibold text-green-200">3. NI working can be divided into 2 distinct categories, namely minor and major works.</p>
                    <ul className="ml-4 space-y-2">
                      <li className="text-green-50/95 lg:text-sm text-xs">(i) Minor works – Overhauling of cabins at road side stations.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs">(ii) Major works – Changes in yard layouts, overhauling of cabins etc. at comparatively bigger terminals and junction stations.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MINOR WORKS Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  MINOR WORKS
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-amber-500/15 to-orange-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* (A) Procedure */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">(A) Procedure to be followed for Non – Interlocked Working for Minor Works</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      Road side stations on double line having up to 2 lines in each direction, and on single line having up to one main line and 2 loop lines are covered under this heading of Minor Works.
                    </p>
                  </div>

                  {/* (C1) Duration */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">(C1) Duration of NI working for Minor Works</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">1.</span> A road side station would normally have about 21 lever in each end cabin (including spare levers).</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">2.</span> S&T department must suitably augment the strength of their NI gang so that each cabin can be completed in one day.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">3.</span> NI working at the 1st cabin should start at 8/- hrs. in the morning and by 18/- hrs. the same must be interlocked and handed back to traffic.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">4.</span> The same procedure should be repeated the next day for the 2nd cabin.</li>
                    </ul>
                  </div>

                  {/* (C2) General Instructions */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">(C2) General Instructions for Train Operation</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">1.</span> Speed restriction of 15 kmph. shall be imposed over all facing points.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">2.</span> No train/wagon should be stabled on any running line of the NI station.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">3.</span> The common line should not be used for reception of trains coming from opposite directions.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">4.</span> Emergency and other crossovers including sidings taking off from the station should be set for normal position and clamped and padlocked. The keys of all padlocked points must be kept in the personal custody of the overall in-charge of NI working to prevent their being used even by mistake.</li>
                    </ul>
                  </div>

                  {/* (C3) Train Running on double line */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">(C3) Train Running on double line section during NI working</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">1.</span> Twin single line should be suspended during the duration of NI working and section worked as conventional double line only.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">2.</span> No temporary single line working should be introduced during NI period, except in case of an accident or blockade of through communication.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">3.</span> At road side stations on double line, route must be set for platform line in each direction and clamped and padlocked.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">4.</span> In case there is more than one platform in each direction, route must be set for one nominated platform.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">5.</span> At all such stations no precedence should be arranged.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">6.</span> During the NI period station should basically function as a halt station.</li>
                    </ul>
                  </div>

                  {/* (C4) Train Running on single line */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">(C4) Train Running on single line section during NI working</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">1.</span> Ideally, if possible, only one platform line should be nominated for train running.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">2.</span> The route must be set for this platform line in each direction and clamped and padlocked.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">3.</span> No precedence or crossing should be arranged at this station.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">4.</span> In case it is not possible to nominate only one line, then 2 specific lines should be nominated for Up and Down movement.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">5.</span> In that case, while crossings would have to take place, no precedence should be arranged at this station.</li>
                    </ul>
                  </div>

                  {/* (C5) Staff requirement */}
                  <div className="bg-white/5 rounded-xl p-5 border border-yellow-400/20">
                    <h3 className="text-yellow-200 font-bold lg:text-lg text-base mb-3">(C5) Staff requirement</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">1.</span> Sectional TI and SI will be overall in-charge of NI working at the station.</li>
                      <li className="text-yellow-50/95 lg:text-sm text-xs"><span className="font-semibold text-yellow-200">2.</span> Additional staff if required should be managed locally.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* MAJOR WORKS Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Wrench className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  MAJOR WORKS
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* (B) Procedure */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-xl text-lg mb-3">(B) Procedure to be followed for Non – Interlocked Working for Major Works</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      Changes in yard layouts, overhauling of cabins etc. at comparatively bigger terminals and junction stations are covered under this heading of Major Works.
                    </p>
                  </div>

                  {/* (D1) Duration */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D1) Duration of Non Interlocked Working</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> NI working must not be simultaneously introduced at more than one station in a Division.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> NI must be planned during temperate weather, to avoid wrong actions on account of harsh and inclement weather.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Period of Non – interlocked working must be kept to the bare minimum as it is a potential safety hazard.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Staff of all departments must work round the clock in three shifts so that the work can be completed at the earliest.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> For NI working of up to 3 days, plans will be finalized in consultation with DRM, Branch Officers and concerned HOD of Construction/RE Organization.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> For NI working of more than 3 days, plans will be finalized in consultation with CTPM, CPTM and HOD of RE/Construction Organization at Zonal level to assess the duration and arrangements of NI working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> For more than 3 days NI, plans should be worked out for cancellation, diversion, rescheduling, short termination or even extension of trains as the case may be.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> For NI working of more than 7 days personal approval of the General Manager must be obtained.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> No NI working should last for more than 14 days.</li>
                    </ul>
                  </div>
                  {/* (D2) Sanctions, clearances and preparatory works */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D2) Sanctions, clearances and preparatory works</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Signal Plan must be finalised in Hdqrts. at least 45 days in advance.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> All plans and clearances including CRS sanctions that are required for NI working must be available at least 1 month before commencement of NI working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Under no circumstances should this period of 1 month be relaxed.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> NI working must be postponed in order to provide for 1 clear month before start of NI either in case of: (i) Delay in receipt of above clearances/sanctions etc. (ii) Last minute modifications to Signal Plan.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> All pre – NI work that can be carried out without non – interlocking must be completed before actual NI working begins. These include changes in yard layout, insertion /removal of points &amp; crossings etc. Changing/installation of new point machines must be done in advance.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Preparatory work in connection with OHE work must also be done in advance, including shifting of neutral section, if required.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Lessons learnt during previous NIs must be gone through in detail so that shortcomings of earlier occasions are avoided.</li>
                    </ul>
                  </div>

                  {/* (D3) Level of Supervision/Responsibility */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D3) Level of Supervision/Responsibility</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Responsibility to ensure availability of proper arrangement for NI working shall be of Construction/RE organization.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Though the responsibility to provide necessary arrangement will be of Construction/RE organization, concerned branch officers from open line shall be responsible to ensure its availability and functioning during train operation. For this he shall be the coordinating officer for the department concerned.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> PERT chart should be made out detailing various activities to be completed on a day-to-day basis.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> For round the clock working PERT chart should be made out detailing various activities to be completed on a shift to shift basis.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Dy. CSTE/Dy. CE/Dy. CEE as applicable shall make themselves available in non-interlocked area where the work is being undertaken.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> The concerned Project in – charge (XEN, DSTE/Con. etc) shall camp near the non-interlocked area till completion of non-interlocked working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Overall in charge for NI working will be Sr. DOM/DOM as the case may be for both Safety and Operations.</li>
                    </ul>
                  </div>

                  {/* (D4) Green Notice */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D4) Green Notice</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Construction officials responsible for carrying out the work should send a &apos;circular notice&apos; to the Sr. DOM/Sr. DSO at least two months in advance.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> They will advise as to when the work will be undertaken with a request to issue special instructions. A copy of the notice shall also to be sent to SS of the station concerned.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Sr. DOM/Sr. DSO on receiving such &apos;circular notice&apos; get special instructions prepared for that station. These are then issued to all concerned.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Green notice is to be issued by Sr. DOM. It should incorporate the following: (i) Details of existing yard layout and its various provisions. (ii) List of all works to be completed by Civil Engg./S&T/Elec. before start of NI. (iii) List of all works to be undertaken by Civil Engg./S&T/Elec. during NI period. (iv) Additional facilities to be made available after commissioning of new works. (v) Existing facilities that are to be dismantled. (vi) Details of yard layout to be made available after completion of NI.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Signalling Plan must indicate permissible routings and simultaneous movement facilities to be made available.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Signalling Plan must invariably indicate whether any of existing facilities for train movement are to be (i) either curtailed, (ii) modified or (iii) restricted.</li>
                    </ul>
                  </div>

                  {/* (D5) Time Tabling changes */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D5) Time Tabling changes</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      For assessing the impact of NI working at a bigger terminal or at a Junction station, a detailed exercise has to be undertaken as indicated below.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> During the course of NI working changing of points manually after passage of a train and after completing all formalities takes about 10 minutes time.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> The capacity of the junction station to handle maximum number of trains during a particular time period has to be worked out keeping in mind the above constraints.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Every possible train movement of reception and despatch must be clearly documented, (i) Along with time of movement. (ii) With exact sequence of points, whether in normal or reverse.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> For time-tabled moves, trains demanding same point either at the same time or within 10 minutes must be identified since this is the time required before an existing setting of points can be changed. In case of conflicting moves, the less important moves have to be cancelled, rescheduled or diverted.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Crossing and precedence must be restricted to the bare minimum with few specific routes being selected for most movements.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> As a thumb rule, only 80% of the reduced capacity as worked out should be utilized since unforeseen failures such as ACP, equipment failures etc. are likely to take up the remaining 20% of the available capacity.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> In all such planning it is better to keep adequate cushion in train operations and initially cancel, reschedule or divert more number of trains than what may be required. In case NI working progresses smoothly without major detentions and it is felt that some of the cancelled trains can be restored, the same may be done after a week or so.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> Clear corridor for freight must be charted out, with exact number of moves possible, and extra freight trains that cannot be handled should be planned to be diverted to other routes. In case diversion is not possible then operating restrictions must be imposed.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> More time must be spent in precise planning of each move during NI period, such that the station is not brought under pressure at any time.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">10.</span> Changes in PRS reservation system for cancellation, diversion, rescheduling etc. must be done in advance as per advance period of reservation.</li>
                    </ul>
                  </div>

                  {/* (D6) Advance preparation for Train Running */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D6) Advance preparation for Train Running</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Stoppages on Platform:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Duration of stoppages of Mail/Express trains must be reduced to the extent feasible.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Loading/unloading of parcels should be reduced to the bare minimum. If possible handling of parcels should be suspended giving due publicity in the Press and other media.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> Running of trains with single SLR must be prohibited.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">4.</span> Shunting operations must be restricted to the bare minimum and preferably avoided altogether as far as possible.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">5.</span> Booking of through carriages, inspection carriages, etc. to the NI station must be restricted.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">6.</span> Quick watering of coaches must be ensured by deputing additional staff as required.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">7.</span> Nominated stations for watering of coaches may also be changed if alternate stations are available.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">8.</span> Extra TXR staff on platforms for attending to defects in rolling stock and promptly attending to complaints.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">9.</span> Extra train lighting staff must also be deputed on platform duty for promptly attending to complaints.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">10.</span> Special squads of commercial and RPF staff must be deputed on platform duty for checking ACP etc.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">11.</span> All efforts must be made to minimize detentions.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Crew Changing:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Loco Supervisor must be kept on round the clock duty on the platform for quick change over of crews.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> If possible crew changing for through passing trains may be planned at adjoining stations.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> If necessary, LIs may be deputed to accompany the loco pilot from one station before NI station till one station after NI station.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">4.</span> Traffic Supervisor must be kept on round the clock duty on the platform for quick change over of guards.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">5.</span> At notice stations, computerized print out of caution orders must be used for saving time.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">6.</span> Similarly, extra porters should be deputed for delivering these caution orders to loco pilot and guard.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Locomotives:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Engine changing for through trains must be curtailed.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Locomotives must be freely extendable beyond territorial jurisdiction.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> If it is unavoidable, then changing of locos may be done at either side of NI station.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">4.</span> For avoiding changing of locos from Diesel to Electric and vice versa, train routings may be changed during the duration of NI working.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">5.</span> For traction changing, half shunt of locos may be freely resorted to.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">6.</span> Attaching of locos in rear should be resorted to in case of stations where trains reverse.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">7.</span> Sending of light engines to sheds must be restricted. For this purpose, an out pit may be opened, if necessary.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Controlling of Trains:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> In case of major terminal stations, a mini control office may be opened at the station. This mini control will liasion with divisional control office for purposes of train running. The jurisdiction of this mini control office would be the NI station itself, and 2 – 3 stations on either side in each direction.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Station under going NI must not be permitted to be brought under any pressure whatsoever at any time during NI working.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> All relevant notices must be issued in advance.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* (D7) Goomty Arrangements */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D7) Goomty Arrangements</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Location and number of goomties is an extremely important aspect of advance planning for NI. Sr. DOM/Sr. DSO should personally approve final arrangements regarding goomties.
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Cabins should not be used as goomties.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> For a group of maximum of three sets of points operated from the ground, one goomty should be made.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Ideally, only 2 sets of points should be controlled from a single goomty.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Each goomty should be provided close to the group of points that it controls. This will ensure that physical movement of staff is reduced to the bare minimum.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> A group of 3 – 4 goomties at one end of the yard should be put in one zone.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Under no circumstances should 2 ends of the same points/crossings be with different goomties. This must be specially ensured for diamonds with single slips and also with double slips. Each such diamond must be under the same zonal in-charge.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Location of each goomty as also number of points that are controlled from it should be tentatively marked out in yard diagram. This should then be physically cross checked at site by visiting the station yard.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> At site it must be ensured that staff are not required to walk long distances for setting of points.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> Both ends of each point must be clearly visible from the goomty itself.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">10.</span> A goomty must be provided near the first stop signal for prompt issue of OPT forms etc. as required. Another goomty must be provided at the last stop signal to ensure correct dispatch of trains.</li>
                    </ul>
                  </div>

                  {/* (D8) Staff Arrangements */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D8) Staff Arrangements</h3>
                    <h4 className="text-purple-200 font-semibold mb-2">Staff Requirement:</h4>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Each goomty should have one ASM and two Pointsman in each shift. These extra ASMs posted in goomties shall be called goomty ASMs. ASM posted with indoor ASM will be termed as co-ordinating ASM.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> For cabin operated points, extra commensurate staff as required (ASM/cabinman/ pointsman) should be provided. However, cabins should not be used as goomties as far as possible.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Goomty ASMs during their duty hours shall be fully in-charge of working of points/levers under their charge. They shall discharge all obligations of the cabinman/pointsman working at the station/cabin. They shall work under the direct supervision and instructions of the coordinating ASM on duty.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> A group of four goomties or more at each end of the station should be put in one zone. Each zone should be under the charge of a TI in each shift. TI will periodically keep moving about amongst the goomties within his zone. He will check up and monitor the working of group of goomties under his charge.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> For non-interlocking work at major terminal stations, necessary arrangement for additional staff should be made, if necessary, from adjoining divisions, before undertaking NI working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Under no circumstances should NI working be started unless full complement of staff is available at the station as per above norm and adequate training has been imparted to them.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Preferably those staff should be drawn from outstation who have (i) Adequate knowledge of NI working. (ii) Previous experience of the same.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> Boarding and lodging of outstation staff is an important aspect of NI preparation. Dormitory type arrangement would be ideal, if these can be arranged. At major junctions these can be taken care of by stabling a few coaches at sidings. However, facilities will have to be arranged for electrical charging, watering, cleaning of bathrooms, sanitation etc.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> On divisions where separate non – interlocking gangs are already in existence their strength may be adjusted accordingly. However, composition of such NI gangs should be periodically changed by inducting fresh faces and with drawing earlier ones.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">10.</span> Round the clock engineering gangs with crow-bars and handles should be available to move points in emergency. One gangman should be available with each goomty in each shift for this purpose.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">11.</span> At each non-interlocked station one Asst. Scale officer of operating department will be nominated for over all supervision.</li>
                    </ul>
                  </div>

                  {/* (D9) HOER */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D9) HOER</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Under no circumstances HOER violation should be permitted during NI working. As far as possible duty hours of staff should be restricted to 8 hrs. duty per shift in continuous roster.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> For catering to unexpected casualties such as leave, sickness etc. during the NI period, RG and LR staff must invariably be provided for.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> RG and LR must be made available shift wise. The standard of RG and LR should be the same as that of regular duty cadre staff for that shift as stipulated.</li>
                    </ul>
                  </div>

                  {/* (D10) Duty Rosters shift wise */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D10) Duty Rosters shift wise</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Meticulous detailed planning must be carried out for drawing up roster of staff to be deputed for NI working. While drawing up roster of staff for various shift duties, following guidelines must be followed:
                    </p>
                    <ul className="space-y-2 ml-4 mb-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Duty rosters must be drawn up as per guidelines given below.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> These should be drawn up for the entire duration of NI period.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Duty rosters drawn up should be openly displayed and given wide publicity.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> No staff shall be permitted to mutually exchange his duty roster with any other staff, without prior permission of his departmental officer at site.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Level &apos;N + 1&apos; shall be responsible for ensuring that level &apos;N&apos; has followed all instructions, etc. as laid down above.</li>
                    </ul>
                    <div className="space-y-3 mt-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Last Night Shift Duty:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Regular staff permanently posted at the NI station must be rostered during the last night shift.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Second preference should be for staff who have previously worked at that station.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> Best and most competent supervisors should be deployed for last night shift duty.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">First Night Shift Duty:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Regular staff permanently posted at the NI station, if still available for deployment after covering last night shift, should be rostered for first night shift duty.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Second preference should be for staff who have previously worked at that station.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> Amongst outstation staff preference should be as follows: (i) Senior staff having previous experience of NI working. (ii) Staff who are presently posted at major junctions.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Day Shift Duty:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Comparatively junior inexperienced staff from outstation should be deputed for day shift working.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Teams for different goomties should be so formed as to include at least one staff having previous experience of NI working.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> For day shift working, more number of staff may be deputed per goomty, if required, to cater for comparatively inexperienced staff.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* (D11) Temporary Working Instructions (TWI) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D11) Temporary Working Instructions (TWI)</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> When NI is undertaken, inter – locking provisions stipulated in SWR are no longer available. So the SWR in its existing form becomes invalid.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> TWI is basically meant to replace some portion of Station Working Rules of the station during the period of NI working. While they need not be as detailed as the original SWR of the station, nevertheless, they must cover all aspects of train operation that are included in the existing SWR.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Static information of SWR will continue to be valid. These include: (i) Inter – station distances. (ii) Description of yard layout. (iii) Level crossing gates.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> TWI is to be read in conjunction with G&SR, Operating Manual, Block Working Manual. It must also be read along with existing SWR of the station.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Portions of SWR that will get replaced pertain to: (i) Ensuring clearance of running lines. (ii) Granting of line clear. (iii) Reception/despatch of trains. (iv) Working of level crossing gates. (v) All checks that are done by means of: (a) Slots. (b) Lock bars. (c) Point locks. (d) Signals. All these checks have to be taken care of manually.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> TWI should list out: (i) Number of goomties. (ii) Portions of yard that each goomty would control. (iii) Which goomties are to be involved for reception/departure of a train on/from different lines.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> TWI should list out different conditions required to be fulfilled for receptiondespatch of train: (i) How line clear is to be granted/obtained. (ii) How clearance of nominated line is to be ensured. (iii) Procedure for closure of level crossing gates, if any. (iv) How the route is to be set. (v) What are the series of points involved. (vi) Which one of them are to be in normal position and which ones in reverse. (vii) How signals are to be lowered. (viii) Which staff would do what.</li>
                    </ul>
                  </div>

                  {/* (D12) Field level Advance Preparation */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D12) Field level Advance Preparation</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Detailed working instructions clearly specifying the zone of responsibility of each and every staff and supervisor along with temporary working instructions must be issued well in advance of the NI working. In any case these should be ready at least 15 days in advance of NI working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Station Superintendent/Traffic Inspector who is overall in-charge should be fully aware of their responsibilities/duties. Temporary working instructions should clearly stipulate these unambiguously.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Each Station Masters/Assist. Station Master, Cabin Man and point man deployed on shift duty should be supplied with copies of temporary working instructions. In addition SM/ASM and Cabin Man shall be supplied with yard layout diagrams and pull charts for their guidance.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> The temporary working instruction shall be supplied to SS/ASM/Cabinman and Pointsman in advance for study by them and for explaining to illiterate staff.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> The instruction should be prepared in Hindi, English and Vernacular language and assurance to the fact that they have understood shall be obtained.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Ready made pull charts indicating normal and reverse position of points for specific routes must be prepared goomty wise. All such pull charts should be prepared at least 15 days in advance.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> TI should be entrusted with the job of personally checking each and every pull chart. Compliance report must be submitted by TI at least 10 days in advance.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> These pull charts must be printed, laminated and displayed in goomties as also given to each staff concerned.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> Draft instructions and pull sheets must be computerized and prepared in advance. Thereafter these should be revised on a day to day basis. Actual revision should take into account the progress of work as per the original time schedule.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">10.</span> A checklist of items to be inspected jointly by Traffic, Signal and Permanent Way Inspector should be drawn and controlling officers should monitor that instructions in the checklist are complied with.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">11.</span> The exact location on the stock rail where clamps are to be fixed must be marked with white paint and clamps should actually be fitted to check that there are no obstructions. Clamps should be actually fitted to check that there are no obstructions.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">12.</span> It may not be possible to fix clamps on motor operated points provided with second leading stretcher bar. In all such cases provision must be made for cotter bolting of points.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">13.</span> In any case, cotter bolting of points must always be preferred as compared to clamping and padlocking since it is a much faster method.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">14.</span> Normal/reverse position of points should be painted on tongue rail to indicate position of the road.</li>
                    </ul>
                  </div>

                  {/* (D13) Mock Drill and Staff Assurance */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D13) Mock Drill and Staff Assurance</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Before the SM/ASM/Cabinman/Pointsman and other staff connected with train passing work are allowed independent duty, the Station Superintendent shall obtain their verbal assurance that they have understood the same.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> With regard to semi – literate and illiterate staff: (i) SS/TI should explain detailed working. (ii) Test their knowledge. (iii) Satisfy himself that they can work independently.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Before starting actual non-interlocked working, a &quot;mock drill&quot; or &quot;hands-on&quot; demonstration/training should be given to all staff for at least 1 to 3 days in advance (depending on the size of the station) to familiarize them thoroughly with the type of work they have to handle.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> This should be carried out in all the 3 shifts to ascertain difficulties, if any, which may be encountered during NI working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Teams already formed for different shifts should be deputed as per roster.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> &quot;Mock drills&quot; should be carried out without actually disconnecting signal gears, points etc.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Whatever deficiencies are noticed during this period should be rectified before introduction of actual NI. This experience should also be used to accurately estimate capacity to be available during N.I. and the number of trains planned to handled should be accordingly revised.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> Written assurances are required to be obtained before staff connected with train passing duties are allowed to work independently.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> This written assurance should be taken from the staff only after: (i) They have participated in the &quot;mock drill&quot;. (ii) Worked independently as per their laid down roster. (iii) Successfully carried out all responsibilities entrusted to them during the &quot;mock drill&quot;.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">10.</span> No staff should be deployed unless proper entries are made in the &quot;Assurance Register&quot; and relevant signatures obtained.</li>
                    </ul>
                  </div>

                  {/* (D14) Dissemination of information */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D14) Dissemination of information</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> All aspects of working during NI, and changes post-NI should be clearly documented and explained at all Loco pilot/Guard lobbies, whose staff pass through that yard.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> For this purpose loco/traffic inspectors, senior subordinates will be nominated to visit these lobbies, with yard plans and camp at these lobbies.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Assurance of each and every running staff regarding these changes should be recorded in respective lobby assurance registers, and complete report submitted to Sr. DOM/Sr. DSO/Sr. DME/Sr. DEE on return.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Adjoining divisions/railways including notice stations and inter-change points should also be intimated of the detailed program pertaining to NI working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> All control staff including CHC, Dy. CHC, Section controllers, Power controllers, TLCs, TXR control etc. should be appropriately briefed.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> The section controllers working on control boards must be fully conversant with the proposed changes pre-NI, restricted movement during the course of NI working and post-NI facilities to be made available.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Adequate publicity must be given through newspaper advertisements, electronic media, announcements at stations etc. informing the public of the likely repercussions on train running.</li>
                    </ul>
                  </div>

                  {/* (D15) Telecommunication, Lighting and Medical */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D15) Telecommunication, Lighting and Medical</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Absolutely foolproof arrangements must be made regarding communication between the station and two adjoining stations on either side so that under no circumstances should there be a situation of total failure of communication between these stations.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Satisfactory arrangements for telephonic communication between station (indoor), Cabins, Goomty and Level Crossings Gates should be made to ensure efficient functioning of telephones provided at various locations.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> Additional fail safe communication between control office and the NI station must be provided as a backup to existing section control channels.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Arrangements for public address system should also be made so that the same can be used for warning the public etc.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Loud speakers must be provided on each goomty for making announcements regarding train movement.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Walkie – Talkie sets must be provided to all supervisors working at site.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> Gangmen, Keymen and Patrolmen in 2 block sections on either side of the NI station must be provided with walkie – talkie sets, electronic hand signal lamps etc.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">8.</span> Arrangements of staff and recharging facilities should be available for charging of batteries of telecom equipment including walkie – talkies.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">9.</span> General lighting in yard should be adequate.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">10.</span> Separate lighting should be provided in each point zone. Lighting should be adequate so as to ensure that each point controlled from a goomty is clearly visible to the ASM/Cabinman in charge of that goomty.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">11.</span> Adequate generator backup should be provided. Spare bulbs should also be provided at each location.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">12.</span> Round-the-clock medical post with doctor and para-medical staff must be provided. They should be equipped for handling first aid and crush injuries. Anti-snake venom (Covalent) should be available. Road ambulance should be permanently stationed for quick transportation if needed.</li>
                    </ul>
                  </div>

                  {/* (D16) Safety Equipment */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D16) Safety Equipment</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Safety equipment required for each location such as goomty, cabin, level crossing gate etc. must be spelt out in detail and full complement arranged.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Adequate spares must be arranged for safety equipment such as of hand signal flags, detonators, fusees, clamps and pad locks etc.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> LED based flashing Hand Signal Lamp must be provided to each such location for better visibility.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Cotter bolts, cotter pins and clamps & padlocks must be thoroughly tested to be in proper working condition.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Spare numbered crank handles must be provided in goomties where point machines are predominantly working.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Each goomty must be provided with the following safety equipment: (i) Clamps, padlocks, detonators, fusees. (ii) Flags, hand signal lamps etc. (iii) Relevant pull sheets, yard diagrams etc. duly laminated. (iv) Torches, emergency light, in addition to normal lighting. (v) Umbrellas, caps, raincoats as required. (vi) Cotton Gloves for staff handling points etc. (vii) Table, chairs in tent or covered area. (viii) Containers and glasses for drinking water. (ix) Thermos for tea/coffee and provision of snacks and meals for staff deployed from other station or /headquarters. (x) Mosquito/insect repellant creams. (xi) Magnetto, and VHF walkie talkies, Public Address Equipment. (xii) Private number books, paper, pens.</li>
                    </ul>
                  </div>

                  {/* (D17) Security arrangements */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D17) Security arrangements</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Adequate RPF security staff round the clock must be arranged at following locations: (i) ASM&apos;s office. (ii) Central place at the station. (iii) Level crossing gates. (iv) Outer most goomties on either end.</li>
                    </ul>
                  </div>

                  {/* (D18) Introduction of NI working */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D18) Introduction of NI working</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Before permitting introduction of NI working DRM/ADRM will satisfy himself regarding arrangement of staff, safety equipment, lighting, telecommunication and ground position.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> On the day of commencement of NI working, branch officers concerned from Operating/Safety, Engineering, Signal, Electrical and Mechanical along with DRM/ADRM will visit the place of work. They shall satisfy themselves of availability of necessary arrangement as per standard before permitting introduction of non-interlocking.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> On the notified day, for introduction of NI working, Signal Inspector concerned shall give a general disconnection memo for gears proposed for NI workinng.</li>
                    </ul>
                  </div>

                  {/* (D19) Train Operation during NI period */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D19) Train Operation during NI period</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Working of Signals:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Speed restriction of 15 kmph. must be in force over all points and crossings. Speed restriction Board of 15 kmph. must be exhibited at the foot of the first stop signal.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> The following signals should be provided with caution aspect: (i) In case of colour light signals, a common NI home signal without route indicator. (ii) In case of MAUQ/TALQ, single arm NI home signal. (iii) Warner signals, if any are to be put out of commission by putting 2 cross bars.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> NI Home/Starter signal can be taken off only after ensuring that: (i) All points on the route are correctly set, both facing and trailing points clamped and padlocked. (ii) In addition to correct setting, clamping and padlocking of facing points, they must also be manned. (iii) Level crossing gates on the route have been closed against road traffic.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">4.</span> Last stop signal should not be disconnected throughout NI working except at the fag end.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">5.</span> Movement of trains to and from the block sections should be controlled by taking off the last stop signal.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">6.</span> Normally, no Paper Line Clear should be issued to the loco pilots as authority to proceed in the block section.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">7.</span> A traffic block of 2 – 3 hrs. should be taken for disconnecting the last stop signal and block instrument and reconnecting the new last stop signal and new block instrument.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2">Train Running:</h4>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">1.</span> Each train movement must be announced well in advance on the loudspeaker: (i) Along with the number of the goomty involved. (ii) Sequence of points required to be set and locked in normal or reverse condition.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">2.</span> Trains must be allowed to enter cautiously at 15 kmph.</li>
                          <li className="text-purple-50/95"><span className="font-semibold text-purple-200">3.</span> Loco pilot of an incoming train must not under any circumstances pass the outermost facing points even though signals have been taken off: (i) Unless he also sees that the points are manned. (ii) A proceed hand signal is exhibited towards him from the points.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* (D20) Failures */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D20) Failures</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> All indicative accidents during the period of NI working must be immediately reported to the site in charge in order to ensure prompt corrective action and avoidance in future.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Details regarding such cases must be promptly intimated to DRM and Sr. DSO.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> A register must be opened at each goomty in which before handing over charge, staff will enter details of whatever difficulties they have faced during their shift. The person in charge of NI working at that station must scrutinize this register daily.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Cases of bursting of NI target should be appropriately dealt with and individual responsibility should be fixed up.</li>
                    </ul>
                  </div>

                  {/* (D21) Revised Station Working Rules */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D21) Revised Station Working Rules</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> After completion of NI working, new works are to be commissioned.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Since the yard layout, facilities etc. have changed, the previous SWR is no longer valid.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> A new SWR duly approved by CRS is to be brought into effect after completion of NI.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Staff assurances for the revised SWR must be taken afresh.</li>
                    </ul>
                  </div>

                  {/* (D22) Completion of NI Working */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D22) Completion of NI Working</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> NI working must not be terminated unless and until each and every item originally scheduled for completion has been successfully complied with.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> Designated operating officer must visit the NI station and verify the following: (i) Completion of work as per program. (ii) Correspondence of yard layout as per SWR. (iii) Correspondence of movements permitted as per SWR.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> The installation shall jointly be tested by Traffic, S&T and Engg. officials and for their correct functioning. (i) The lever/knobs, signals, points and connections work freely and properly and that the installation fulfils its objective. (ii) Signals are properly focussed, the indications on the panel correspond with the signal aspect and point position at site. (iii) Engineering officials shall check the proper housing of points gauge level etc.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">4.</span> Before issue of Safety certificate and taking over of stations, the Transportation/Safety Officer shall instruct the station staff responsible or working the interlocking installation and test them in their knowledge of the signalling arrangement.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">5.</span> Engineering and S&T officers shall give a certificate stating that all works as per the approved plan are completed.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">6.</span> Staff concerned shall be notified through Station Order Book, Control Order Book and their acknowledgement obtained. All inspectors and other supervisors shall ensure strict compliance and report any deviation or violation with prompt to notify then and there.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">7.</span> On the day of completion of work, branch officers concerned shall visit the work site to ensure completion of work as per program.</li>
                    </ul>
                  </div>

                  {/* (D23) Post NI analysis */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">(D23) Post NI analysis</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">1.</span> Within 7 days of completion of NI, a brain storming session should be held with all the senior supervisors involved for taking stock of lessons learnt.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">2.</span> These lessons learnt should be compiled at one place for successive NIs, so that they are available for future reference.</li>
                      <li className="text-purple-50/95 lg:text-sm text-xs"><span className="font-semibold text-purple-200">3.</span> A copy of the same may also be sent to other divisions for reference purposes.</li>
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

export default NonInterlockedWorking