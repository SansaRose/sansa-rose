'use client'
import { 
  Warehouse,
  Target,
  BookOpen,
  List,
  Building2,
  BarChart3,
  FileText,
  TrendingUp} from 'lucide-react'

const MarshallingYards = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-grid-white/10 opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative group">
                <div className="lg:w-28 lg:h-28 w-20 h-20 bg-linear-to-br from-blue-500/70 via-indigo-500/70 to-purple-500/70 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="lg:w-24 lg:h-24 w-16 h-16 rounded-full border-2 border-white/20 bg-linear-to-br from-blue-700/60 to-indigo-800/60 backdrop-blur-md shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-500">
                    <div className="w-full h-full rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Warehouse className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-blue-100 via-indigo-100 to-purple-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              MARSHALLING YARDS AND FREIGHT TERMINALS
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction and Definition Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <BookOpen className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  I. Introduction and Definition
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  A Yard can be defined by the functions it performs. It is the place or the activity centre on a Railway system, where the trains or rolling stock or group of rolling stocks are received, reformed into trains or loads after marshalling and are despatched to their destinations. A Yard is, thus, a classifying and distributing machine with facilities for receiving, sorting and despatching the wagons to their various destinations, after the prescribed attention. This necessarily involves detention to trains and wagons, but it is inherent in railway working to have Marshalling Yards.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  A Yard is a specified area laid out with a network of tracks divided into several grids for receiving sorting, forming and despatching of trains.
                </p>
              </div>
            </div>

            {/* Necessity and Significance Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Target className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  II. Necessity and Significance of Marshalling Yards
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Though Yards perform very important functions, yet the work done in a Marshalling Yard is only indirectly productive. Yards are operational necessity and are even considered as necessary evils. The ingenuity of the operating man consists in putting in the minimum number of the wagons into the minimum possible number of Marshalling Yards by forming trains for the farthest common points subject to rules and regulations. If the control is analogous to brain of the operating system, a large Marshalling Yard is a kin to the heart and its working to be planned and monitored with considerable care. Constant vigilance and intelligent and efficient work in day-to-day functions is required as it is one of the important factors governing the capacity and the output of a section. A Marshalling Yard affects not only the traffic it deals with, but also the entire train running on the section, in particular and the working of Railway system in general. The Yard gets easily congested if treated as a holding Yard and if more trains are put in than taken out.
                </p>
              </div>
            </div>

            {/* Classification of Yards Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <List className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  III. Classification of Yards
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Yards can be classified as:
                </p>
                <ul className="ml-6 space-y-2">
                  <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">1. Terminal Yard</li>
                  <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">2. Marshalling Yard.</li>
                </ul>
              </div>
            </div>

            {/* Terminal Yard Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Building2 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  IV. Terminal Yard
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-indigo-50/95 lg:text-lg text-base leading-relaxed font-light">
                  Terminal Yard means the Yard attached to terminal goods sheds where large number of wagons are loaded and/or unloaded. This term is also used for every goods Yard, where a goods train terminates.
                </p>
              </div>
            </div>

            {/* Marshalling Yard Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Warehouse className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  V. Marshalling Yard
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-yellow-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Yards are nominated as Marshalling Yards on the basis of the work done and wagons dealt with. The Yard which receive and despatch trains without any shunting on them are classified Transit Yard. In such Yard generally change of Crew, Engine or C&W examination etc. only take place in addition to formations of a few loads. During the last 50 years such yards have become anachronistic and have given way to modern freight terminals the world over. Therefore, this description has value (1) as a historical document (2) as also as guidelines for efficient working of modern freight terminals, described at the end of this chapter.
                </p>
                
                <div className="mb-6">
                  <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">i) Objectives of Marshalling Yards:</h3>
                  <div className="ml-4 space-y-4">
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">1. Quick Transit viz.</p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(a) Accepting trains without detention at adjacent station outside the Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(b) Minimising the detention to wagons in the Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(c) Timely supply and placement/removal of wagons to the goods shed, transhipment shed, repacking shed, sidings, carriage and wagons depots etc. served by the Yards.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(d) Forming block loads for the farthest destination.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(e) Ensuring convenient Marshalling of wagons from the operational efficiency point of view.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(f) Ensuring right time start to outgoing trains.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">2. Economy:</p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(a) Maximising productivity of resources and minimising the detention to Train Engine/Light Engine, Shunting Engine, crew and other connected staff.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(b) Optimising the Trailing load of the trains.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(c) Optimising shunting engine utility.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">3. Safety:</p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(a) Ensuring minimum damage to wagons and consignments loaded on the wagons during the shunting operations.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(b) Ensuring safe Marshalling and C&W pattern of examination.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(c) Elimination of Yard accidents.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">ii) Kinds of Yards:</h3>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    Marshalling Yard can be classified under three groups on the basis of the method of sorting out trains:-
                  </p>
                  <div className="ml-4 space-y-3">
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">1. Flat Yard:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                        Flat Yards are generally laid on flat or level land where shunting operations are carried out with the help of engine by push and pull method. Such Yard is economical in space but slow in working and wasteful in shunting engine hours.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">2. Hump Yard:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                        Hump Yards are constructed by providing gradients between reception and the sorting and despatch lines and the grids. The gradients are created by constructing an artificial hump suitable for the purpose. The gradient of the hump is constructed in such a manner that the wagons roll down of their own to specified sorting lines from the summit(apex) of the hump after having been pushed up by the shunting engine. The load is pushed up by engine towards the hump from one side of the hump so that the uncoupled portion of the load rolls away towards another side of the hump in sorting/despatch line. There are generally two humps one for &apos;Down&apos; and one for &apos;Up&apos; Yard. These Yards are economical in shunting engine hours as compared to flat Yards.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">3. Gravity Yard:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                        Gravity Yards are constructed where the natural contour of land permits a suitable falling gradient stretched over a sufficient length. The falling gradient makes it possible to use the Yard to the fullest extent in Marshalling wagons/trains thus minimising the use of engine power. Therefore gravity Yards are more economical than flat Yards but the layout of it dependent on the availability of plenty of land with the required topography which is seldom possible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">iii) Some Terms Concerning Marshalling Yards and its Components:</h3>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    Some of the components of Marshalling Yards are explained below:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">1. Reception Yard:</span> Reception Yard comprises of the lines on which the incoming trains are received and stand clear of other running lines while waiting their turn to be dealt with. Incoming trains may be composed of wagons which are to go through after changing of power, Crew and Guard or of wagons requiring sorting and Marshalling. Separate grids may be provided in the reception Yard one for through trains and another for terminating trains. Separate reception Yards may be provided for trains coming from different directions. The grids for through trains bye passes the hump.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">2. Sorting Yards:</span> It is a Yard in which the trains are broken up on the different sorting lines for various directions or specified destinations, as per Marshalling order so as to form them into trains and prepare them for correct Marshalling.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">3. Marshalling Lines:</span> The lines in which sorted wagons are separated first, if necessary, according to commodity, type of vehicle, Marshalling order, direction and secondly reformed into trains in special order to meet the requirements of the section ahead or any other special transportation requirement.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">4. Departure Yard:</span> In which load can be held ready for departing trains. Separate departure Yards for trains for different directions are provided in large Marshalling Yard.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">5. Shunting Neck:</span> It is a line in a Yard leading to sorting lines on which the actual shunting of the trains maybe done clear of any running lines.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">6. Gathering lines:</span> It is a line on which the turn outs to other lines are arranged.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">7. Transfer lines:</span> These lines are meant for transferring wagons, generally from up Yard to down Yard or vice versa, in case of two separate Marshalling or hump Yards.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">8. By pass or avoiding lines:</span> It is a line, which skirts the hump, and its object is to avoid engine going over the hump. It joins the shunting neck at one end and the main hump line short of the king point at the other. It is also used for vehicles, which cannot be passed over the hump into the sorting Yard due to various reasons.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">9. Engine Run Round Line:</span> It is the line reserved for movements of incoming and outgoing train engines to and from the Yard or the loco shed, or for independent movement of shunting engines.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">10. Engine Escape Line:</span> It is the line meant for engine movements to and from the loco shed from and to Yard so that engine returning to loco sheds do not interfere with engines, going out of the loco shed, or with any other movements in the Yard.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">11. King Points:</span> The first pair of points a wagon meets with after passing over the hump are called &apos;King Points&apos;. They divide the sorting Yard into two portions.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">12. Queen Points:</span> The second pair of points a wagon meets with on its way downwards are called Queen Points, which further divide the sorting Yards into four portions.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">13. Jack Points:</span> The third pair of points a wagon meets are called the jack points and these serve to divert the rolling wagons into the different grids of the sorting Yard. Points beyond jack points called &apos;Ten points&apos;.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold">Note:</span> In a hump Yard there are usually a pair of &apos;king points&apos; two pair of &apos;Queen points&apos; and four pairs of &apos;Jack points&apos;.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">14. Retarders:</span> One of the main problems in the working of a hump Yard is to adjust suitably the speed of the humped wagons rolling down so that they may not cause damage by humping down against wagons already standing on the same line. The speed of the humped wagons varies according to the force of the push given by the engine, the height of the hump, the weight the nature of the axle box (viz. roller bearing or plain bearing) as also on the weather prevailing. In mechanised Yards, retarders or rail brakes are installed to reduce and keep the speed of the humped vehicles under control. The retarders may be automatic or manually operated.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">15. Skids:</span> At Yards, where mechanical retarders are not provided skids are placed on the sorting lines to control the speed of the humped wagons. These skids are placed by skid porters and the skids automatically come out of runways, where provided, or/and are removed after the wagon has come to stop.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">16. Brake van siding:</span> In this siding, brakevans of incoming terminating trains etc. may be detached for subsequent attachment to originating trains.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">17. Special stock siding:</span> These are provided for keeping for special type stock, cattle wagons containing commodities like explosives which can not be humped.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">18. Stabling Lines:</span> In large Yard, ballast, material or POH special, empty military special trains are sometimes required to be stabled. Moreover there are heavy accumulations of certain classes of stock for various reasons. The stabling accommodation in the Yard should, therefore be ample so that the Yard may retain its mobility inspite of any accumulation of wagons or other set backs.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">19. Sick lines:</span> Normally sick wagons are sorted out in the sorting Yard, then sent in the sick line. As the time taken in placing wagons into and withdrawing them from a sick line is usually several times the time spent in actual repairs. Provisions should be made to carry out whatever repairs are possible in the sorting Yard itself by providing sick lines.
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">iv) Telecom Equipment of Marshalling Yards:</h3>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    A Marshalling Yard should necessarily have the best possible telecom facility for proper functioning and efficient supervision of work:
                  </p>
                  <div className="ml-4 space-y-2">
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">1. Telecommunication arrangement:</span> Since a Marshalling Yard covers a considerably big area, the distance between its different points and portions becomes naturally long. Therefore extensive telecom network, through an electronic exchange and intercoms between all-important points in the Yard, is imperative so that instructions to the supervisory staff can be conveyed quickly over telephone. The Yard should also have direct dialling trunk facilities and Control Telephones, so that instructions to the supervisory staff can be communicated properly and promptly.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">2. Paging and talk-back arrangement:</span> Major Marshalling Yards are provided with Paging and talk-back sets, through which orders and instructions are issued to the staff concerned, working in different spheres in the Yard, from one central point. Similarly, the staff can also convey any information to the central points. This helps co-ordination between different spheres of the Yard.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">3. Loud speakers</span> are also provided at convenient points so that instructions can be conveyed to different staff working in the same area. For example, loudspeakers are provided in the Sorting Yard, so that the incharge of the hump can convey instructions relating to Hump cabin and the skid Porters regarding the line on to which wagons are being shunted. Similarly, arrival and despatch of trains can be monitored.
                    </p>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold">4. Extensive use of good walkie-talkies</span> will also go a long way in improving the efficiency of the Yards.
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">v) Yard Organisation:</h3>
                  <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    Yard working is controlled by a Chief Yard Master, though small Yards may be controlled by Yard Master. Bigger Yards may be under the control of Area Officer. The Yard in charge has two organisations under him.
                  </p>
                  <div className="ml-4 space-y-3">
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">1. Field staff:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                        It includes the Chief Yard Masters, who is overall Incharge of the Yard and Yard Masters in each shift are responsible for operational work. In dual yard system, there may be more than one Yard Masters, e.g. one for Down Yard and another for Up Yard, on the other hand, where the traffic is comparatively low, Yard Masters may be replaced by Assistant Yard Masters. The next level of supervision is generally related to the shunting engines. Each shunting engine may have an Assistant Yard Master/Shunting Master, attached to it, who controls the movements of the shunting engine. Shunting Jamadar may be included in the organisation to assist them for dealing with the shunting work allotted to each engine. Where the shunting work is not heavy or comparatively unimportant, the Shunting Jamadar may be incharge instead of Yard Master. Each shunting engine generally has a batch of three or four Pointsmen, whose duties are usually as under:
                      </p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(a) For Uncoupling the wagons</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(b) For Braking of wagons</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(c) For Relaying of signals</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(d) For operating the points.</li>
                      </ul>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed mt-2">
                        The above staff from the organisation for sorting work besides other staff are also required for various auxiliary functions – cabin staff, call boys, box boys (brake or skid porters in hump Yards) etc. apart from the staff of other departments.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">2. Trains Branch:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                        CTNC or Head TNC, has over all responsibility for the efficient working of the trains branch. Below them, there are Head TNCs/ Sr.TNCs/TNCs, who may be on shift duties or during day duty only, depending on the work load of the Yard. These Trains Clerks are entrusted with comparatively important work in the trains branch like preparation of Marshalling Yard statistics, maintenance of the Yard Balance Register, Daily Stock Taking etc. The TNCs in shift duties take stock of trains in Reception and Despatching Yard. They also maintain Wagon Exchange Registers, Phase-wise Detention Register and stock on line position. The number of TNCs in a Yard will depend on the number of wagons, trains dealt with in a Yard.
                      </p>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">3. Yard Working Instructions:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                        For proper and efficient working of each Yard, general directions for working in each shift should be laid down in the Yard Working instructions. The instructions should deal with all important aspects of working in detail other than the procedure for reception and despatch of trains, etc., which are required to be given in the Station Working Rules to be useful for the general guidance of staff working in the Yard as well as to the new and the relieving staff. The Yard Working instructions should be prepared generally under the following heads:-
                      </p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">a. Full description of the Yard including no. of lines with their holding capacity etc.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">b. Strength of the Yard Staff in each shift.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">c. Quantum of inward, outward and internal traffic required to be dealt with by the Yard and their timings.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">d. Marshalling Orders in force.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">e. Shunting engines available in each shift and their utilisation, generally.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">f. Procedure of work to be carried out, generally in each shift.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">g. Directions to Shunting Jamadars and Yard Masters on arrival on duty, in general, in regard to advance planning of the work during their shift.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">h. Directions to Shunting Jamadars and Yard Masters in regard to position of the Yard at the time of handing over the charge.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">i. Important Safety Precautions</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">j. Miscellaneous instructions.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">4. Main Works required to be performed by Yards:</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                        Generally a large Yard is required to perform the following work with due regard to efficiency, reliability, economy and safety:
                      </p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">a. To pass through trains after changing of engine and carriage examination and detaching sick wagons, if any, and adjusting load of the train if necessary.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">b. To break up and sort out terminating trains and loads and the local loads originating in the Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">c. To form originating through trains for the farthest point possible in accordance with long distance Marshalling orders laid down by the HQ office.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">d. To form shunting and van trains for the different sections served by the Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">e. To hold back trains and wagons until they are able to go out.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">f. To keep wagon detention to the minimum while planning item No. (1) to (5).</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">g. To move train engines and pilots between the Yard/Loco Shed and sidings.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">h. Placement and removal of inward loaded wagons for the goods depots, loco shed, private sidings etc. served by the Marshalling Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">i. Placement and removal of wagons from the repacking shed to the Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">j. Placement and removal of Sick/Fit wagons from the sick lines.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">k. Assessment of room by the nominated shunting trains for roadside stations.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">l. Arrangements for supply of stock as per Indent Register and ODR required by the road side station in accordance with the orders received from the CTNL(Stock).</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">m. Weighment of wagons in certain nominated Yards as and when required.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">n. Maintenance of the correct tally of the daily output of the Yard.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">o. Maintenance of record of detentions to other kinds of stock such as local loaded, sick wagons, empties and special stock etc.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">5. Some Factors Affecting Working of the Yards:</p>
                      <div className="ml-4 space-y-2">
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">a.</span> Lack of proper advance planning and co-ordination between the Control and the Yards, and want of proper co-operation between the Yard staff, loco shed staff and carriage and wagon staff, affects Yard working adversely. For efficient Yard working it is necessary that the Yard staff must plan their work in advance in consultation with control and adjacent Yards, if necessary the different members of the Yard staff should extend co-operation in the efficient working of the Yard as a matter of team sprit.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">b.</span> Sometimes, while breaking up the terminating trains, local wagons are not properly collected in specified lines and they remain scattered in the sorting and Marshalling lines or other parts of the Yards thereby causing undue delay in the Yard operations. Endeavour should always be made to collect these wagons in lines specified for the purpose.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">c.</span> Late or irregular removal of loads from local areas affecting timely placement of wagons in their appropriate sidings is often a chronic cause of trouble in the working of the Yard. Therefore endeavour must always be made to adhere to the schedules for placement and removal of wagons in the different areas of the Yard in accordance with Yard working instructions.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">d.</span> Empty stock should not be allowed to lie scattered all over the Yard. As far as possible empties should be sorted out in the groups in which they are generally required to be worked out, keeping as far as possible special type of stock separately from general wagons. All empties stock so grouped preferably be kept separate in specified lines.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">e.</span> Sick wagons and wagons for adjustment of loads and transhipment of contents often lie scattered through out the Yard thus hampering the Yard operations. Even if the number of sick wagons exceeds the repair capacity, these must invariably be kept collected in the specified lines and sick lines placement and removal should be done strictly according to the schedule. Wagons required adjustments of loads and transhipment or contents must always be placed in the appropriate line and attended to with the least possible delay. Where adjustment of loads can possibly be done in the Yard itself, this must be resorted to.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">f.</span> Any tendency on the part of shunting engine Loco pilots to waste time on loco requirements should be curbed. Shunting engine must not be allowed more than the specified time for loco requirements at fixed intervals.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">g.</span> Higher wagons balance in a Yard affects its mobility. It is therefore very necessary that proper analysis of the highest wagon balance beyond which mobility of the Yard is seriously affected, should be worked out and proper co-ordination between the Yard Master, Assistant Station Master, Control and adjacent Yard should be maintained all the time. To prevent excessive inflow of wagons, which seriously affects mobility of the Yard, an eternal watch should be kept on the Yard Balance and steps taken to keep within the working capacity of the Yard.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">h.</span> Efficiency of the Yard shunting engine is one of the most important factors on which the working of the Yard depends. Requirement of a better shunting engine or an additional shunting engine during the busy periods, may therefore be found necessary for better working of a Yard. In big Yards, efficiency and sufficiency of the Yard shunting engines should be periodically examined and if frequent engine trouble is reported, supervisors of loco should be posted temporarily with them until the cause of the trouble is removed.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">i.</span> Yard lay out: The shunting Jamadar and the Yard Master should carefully watch if any particular feature of the layout, such as wrongly placed cross over, a short shunting neck or isolation of two busy groups of lines is a restrictive factor in the efficient working of the Yard, and if any minor additions and alterations, such as providing an additional crossovers, positioning an existing cross-over correctly, lengthing of a particular line, etc. are likely to improve the working of a Yard, necessary proposals should be forwarded to the DRM(O).
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">j.</span> Sometimes delay in the release of the wagons by public and departmental consignees cause heavy accumulation of local wagons thus affecting the working of the Yard. Advance intimation given to rake handling parties on the telephone and the departmental supervisors in the local area about the number of wagons awaiting unloading would enable them to make necessary arrangements in time for releasing the wagons.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">k.</span> Sometimes identification of any particular traffic, which affects the mobility of the Yard, is required so as to advice to control to restrict the inflow.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">l.</span> In case of heavy congestions requiring block back on the neighbouring sections, neighbouring Yard should be called upon or directed by Sr.DOM/CTNL by taking upon them some of the sorting and Marshalling work, the congested Yard would normally have done. If necessary a competent Officer or Inspector should sit in the Yard and a direct operation until the congestions is cleared.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">m.</span> In the event of an accident temporarily reducing working capacity, steps should be taken to regulate the inflow of trains into the Yard for a day or two, or such a long period as may be absolutely necessary until the emergency is over and the Yard has regained its normal working capacity. The work load on the Yard must be suitably reduced to avoid serious repercussions on the Yard itself and on the neighbouring sections. Accidents should preferably be attended to personally by officers, as far as possible so that rerailing/ restoration and clearance work may be done in the best possible manner.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">n.</span> Late start of trains from the Yard: Whatever may be the cause of late start of trains from a Yard, this apart from reducing available capacity of the section, in turn, affects the working of the Yard itself by delaying subsequent formations of trains.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">o.</span> Yard facilities: Ordinarily a Yard should be adequate enough for its requirements of sorting, handling of local traffic, formation of trains and for holding back stock until it can go out on the sections or to various installations in the local area. If shunting or train movements in one part interferes with similar movement in the other parts, or if simultaneous reception of trains from and despatch to different directions is not possible, or the Yard starting a train from or carrying on shunting in one group of lines while a train is being received in the other group, if prevented, it requires careful attention of Supervisors, Inspectors and Divisional Officers for necessary remodelling. If frequent congestion takes place in a Yard or a Yard show poor performance, the entire working should be thoroughly examined to determine the root cause of congestion. The causes of strained working may be a generally increase in traffic, large increase of traffic from one or two sections or stations, bad working of some installations served by the Yard, small or obsolete shunting engines or their inadequacy etc. all these call for suitable action.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">p.</span> Sometimes want of proper working facilities, such as adequate lighting, communication between the different key-points in the Yard and the Yard Master and the Assistant Station Master requiring a number of messenger to run about in the Yard for this purpose, affects the working of the Yard adversely.
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">6. Some of the other factors affecting the Yard working:</p>
                      <ul className="ml-6 space-y-1">
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(a) Non-rectification of hump gradients.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(b) Hump shunting not useful enough for the loads which require pushing of loads.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(c) Under load running of outward trains.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(d) Trains received mismarshalled.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(e) Congestion/interruption on the section or in the intermediate or terminal Yards.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(f) Heavy receipts of local wagons.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(g) Shortage of engines.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(h) Train Crew shortage.</li>
                        <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(i) Heavy shortage of Yard working staff including C&W staff.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">7. Operating Considerations Governing Design of a Yard:</p>
                      <div className="ml-4 space-y-2">
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">i)</span> The lay-out of the Yard should be such that as far as possible movements of wagons in their several Marshalling operations would be continuous and progressive in the direction of the destination of the wagons because reverse or zig-zag movements reduce efficiency. The reception lines, sorting lines, shunting necks, Marshalling lines, departure lines should, wherever possible, be arranged with this object in view.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">ii)</span> The layout should also satisfy the basic principles of maximum flexibility in movements consistent with safety so that as many as possible of the different types of movements which are required to be performed may be carried out. At one and the same time it should be possible to perform all the different movements which are to take place at the same time. The following independent movements within one and the same area should be planned as far as possible.
                        </p>
                        <ul className="ml-6 space-y-1">
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(a) Simultaneous reception of trains from different directions.</li>
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(b) Simultaneous despatch of the trains to different directions.</li>
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(c) Two or more shunting engines working, not to interference with one another, by provision of separate shunting necks.</li>
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(d) Reception of one train not to interfere with the departure of another train and vice-versa.</li>
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(e) Reception of trains in one part of the Yard should not interfere with shunting in another part.</li>
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(f) In large Yards, there should be separate lines for Reception, Marshalling and Despatch. Bye-Pass Running lines may be provided if possible, when only crew change is required.</li>
                          <li className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">(g) There must be adequate facility of light and communication in the different part of Yard. Yard should be so designed as to permit future extensions in each important section, like reception lines, sorting lines/ Marshalling group etc. in the next 25 years though on consideration of economy, requirements of the next five years only may the first instance be provided.</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">9. Marshalling Yard Statistics: (Manual of Statistical Instructions Volume-I)</p>
                      <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                        (Railway Board has decided that statistics shall be maintained in terms of 8-wheeler units. Same be incorporated by the railways)
                      </p>
                      <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-2 font-semibold">General Instructions:</p>
                      <div className="ml-4 space-y-2">
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">a.</span> The Marshalling Yard statistics should be prepared for selected Yards generally dealing with 8000 eight-wheeler wagons and over per month in respect of BG Yards and 5000 eight wheeler wagons and over per month in respect of MG Yards, prior approval of the Railway Board should however, be obtained for addition or deletion of any Yard.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">b.</span> Brake vans are to be included.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">c.</span> The area of each Marshalling Yard is to be carefully defined and no extra allowance is to be made for any work done within that area. A diagram showing the Marshalling Yard area clearly demarcated should be prepared for the Yards for which statistics are requires to be compiled by the Railway for the Board. This diagram should be readily available at the stations to enable any inspecting officer to obtain a clear indication of the extent of the Marshalling Yard.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">d.</span> Sick lines and repacking sheds, transhipment points, goods sheds, departmental sidings and the industrial sidings etc., may as a general rule, be treated as lying outside Marshalling Yards for purpose of calculation of Marshalling Yard statistics.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">e.</span> At places, where there are points like the Goods terminal station and/or Brake-of gauge transhipment point etc., continuous to the Marshalling Yard, and the detention statistics for each of these Yards are compiled separately either for submission to the Railway Board or for inclusion in the Railway&apos;s own Domestic Statistics. The sum total of detention in each Yard should accord with the total detention from arrival of a wagon till its final despatch from that station. To ensure this, the supervisory staff in-charge should exercise a check, at least once in a month, on a random sampling basis. This check should be broad based covering not only the important categories of wagons e.g. four wheelers, BOX wagons, oil tanks etc. but also the main stream of movement of wagons to and from different directions. This exercise should cover at least 10% of the total number of local wagons dealt with in the Marshalling Yard during the previous month and the records of such checks should be properly maintained to be available for scrutiny by inspecting personnel.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">f.</span> In the case of wagons whose detention or despatch particulars are not available, their detention should not be omitted but reckoned on the basis of the average detention during the month for similar type of stock while working out the average detention per wagon. The number of such wagons should be indicated separately under through loaded and all wagons for each Yard in a foot-note to the statement.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">g.</span> Yards provided with humps are to be denoted by a star and terminal Yards should be specified by a note to that effect.
                        </p>
                        <p className="text-yellow-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">h.</span> Except where otherwise stated, all results, are to be worked out correct to one place of decimal, but those which are less than 10 should be worked out correct to two places of decimal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Marshalling Yard Statistics Statement Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <BarChart3 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  MARSHALLING YARD STATISTICS Statement No. 14
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-teal-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  For the month of __________________________________
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3">Item</p>
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Name of Marshalling Yards stating broad gauge or metre gauge Remarks
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3">Wagons despatched-</p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">1.01</span> Number of wagons despatched – Despatched by trains during the month</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">1.02</span> Number of wagons placed from Marshalling Yard outside the Yard by pilots in goods sheds, transhipment/repacking sheds, departmental sidings or Yards, military sidings, assisted sidings, etc.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">1.03</span> No. of wagons dealt with during the month</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3"><span className="font-semibold">2</span> Daily average number of wagons despatched.</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3"><span className="font-semibold">3</span> Number of trains received</p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">3.01</span> a) Number of by passing trains</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">b) Number of terminating trains</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">c) Total (a+b)</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">3.02</span> Average detention to by passing trains: Target- Actual –</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">3.03</span> Number of wagons carried by – By passing trains included in items 3.01(a)</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3"><span className="font-semibold">4</span> Number of trains despatched</p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">4.1</span> No. of by passing trains</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">4.2</span> No. of originating trains</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">4.3</span> Total</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3"><span className="font-semibold">5</span> No. of wagons dealt with per shunting engine hour -</p>
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed mb-2">No. of pilots working in the station</p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">5.1</span> (a) Number of pilots</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(b) Number of shifts per day</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">5.2</span> Total shunting engine hours outside Marshalling Yards</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">5.3</span> Total shunting engine hours of regular shunting engines employed for work inside Marshalling Yard</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">5.4</span> Total shunting hours by train engine employed for work in Marshalling Yard.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">5.5</span> Total time taken for locomotive duties and minor repairs</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">5.6</span> No. of wagons dealt with per shunting engine hour</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-200 font-semibold lg:text-lg text-base mb-3"><span className="font-semibold">6</span> Average detention per wagon (Hours)</p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">6.1</span> All Wagons- Target Actual</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">6.2</span> Through loaded wagons – Target Actual</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">6.3</span> Through empties</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">6.4</span> Outward Local</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">6.5</span> Inward Local</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed"><span className="font-semibold">6.6</span> Sick wagons</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Procedure for Working Out Marshalling Yard Statistics Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  9. Procedure for Working Out Marshalling Yard Statistics
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-purple-200 font-bold lg:text-xl text-lg mb-3">i) Wagons despatched:</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      Item 1.01 and 1.02 are self explanatory. A wagon should be included under item 1.02 as many times as it leaves the Marshalling Yard. Wagons on &apos;by passing&apos; trains (i.e. through goods trains, as defined in note under item 1 of statement will not be included under item 1.01). Item No. 1.03 – Item 1.01 + 1.02
                    </p>
                  </div>
                  <div>
                    <h3 className="text-purple-200 font-bold lg:text-xl text-lg mb-3">ii) Daily average number of wagons despatched:</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      Item 2 = Item 1.03 / No. of days in the month
                    </p>
                  </div>
                  <div>
                    <h3 className="text-purple-200 font-bold lg:text-xl text-lg mb-3">(iii & iv) Number of trains received and despatched:</h3>
                    <div className="ml-4 space-y-2">
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">(a)</span> A train for this purpose is a set of wagons or vehicles worked by locomotive, or any other self-propelled unit, or rail-motor vehicles, empty or conveying traffic when running, under a particular number or a distinct name, from a fixed point of departure to a fixed point of destination.
                      </p>
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">(b)</span> All trains, both terminating and by-passing (i.e. through goods trains) are to be included. &quot;By passing trains&quot; should be accounted both under the number received and despatched.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-purple-200 font-bold lg:text-xl text-lg mb-3">v. Number of wagons dealt with per shunting engine hour:</h3>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Item 5.06 = Item 1.03 / (Items 5.03 + 5.04)
                    </p>
                    <div className="ml-4 space-y-3">
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">Note: (i)</span> While compiling shunting engine hours under item 5.3 and 5.4 the following instructions should be kept in view.
                      </p>
                      <ul className="ml-6 space-y-2">
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">(a)</span> Shunting engine hours are to include the shunting hours of regular shunting engines and train engines before and after working a train or during its run when employed in shunting goods wagons only in the Marshalling Yard area. The shunting time within the Marshalling Yard area should only be taken into account and not the time spent outside its limits.
                        </li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">(b)</span> Shunting engine hours are to be reckoned from the time of arrival of the shunting engines in the Marshalling Yard upto the time of their departure from the Yard on the basis of shunting vouchers. The time spent on locomotive duties whether in the Yard itself or outside the Yard is to be included. However, any extra time taken over the normal time prescribed for carrying out legitimate locomotive duties should be excluded, the normal time being determined by the individual railway taking into account the local conditions and indicated in the operating manuals. If shunting engine is required to be repaired in the Yard itself, the extra time beyond 30 minutes spent on such repairs in a shift should also be excluded.
                        </li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">(c)</span> The time spent in the Marshalling Yard for change of crew and/or fuelling, should be accounted for in the same manner as on locomotive duties referred to in Note (1)(b) above.
                        </li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                          <span className="font-semibold">(d)</span> Since shunting engines shunt both coaching and goods vehicles, the allocation of shunting engine hours to goods and coaching stock may be fixed for each Yard on a percentage basis after an examination of the work done. This percentage is to be rechecked at least once a year and also when any change occurs in the type of traffic passing through that Yard. Where daily records are kept of the working of shunting engines according to hours spent (i) inside the Marshalling Yard (ii) outside the Marshalling Yard and (iii) in shunting coaching vehicles, it will not be necessary to fix a percentage, as the actual hours spent in the Marshalling Yard in shunting goods vehicles will be available. Time taken by shunting engine in placing wagons in such lines is to be included in shunting hours when such lines form the part of the Marshalling Yard area.
                        </li>
                      </ul>
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">Note: (ii)</span> Time spent for locomotive duties recorded separately under item 5.5 will include under 5.3 also. Item 5.5 will include the time taken by shunting locomotive for locomotives duties and minor repairs upto 30 minutes per shift as per Note (i)(b) under item 5.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-purple-200 font-bold lg:text-xl text-lg mb-3">vi). Average detention per wagon:</h3>
                    <div className="ml-4 space-y-3">
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">(a)</span> The detention time should have reference only to the detention within the Marshalling Yard territory as defined in para (iv) of General Instructions and the incoming and outgoing wagons from and to the local outlying sheds, sidings, etc. should be counted as many times as they enter the Yard. This will include detention to sick wagons in the Marshalling Yard although their detention is separately shown against item 6.6.
                      </p>
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">(b)</span> The average detention is to be obtained by recording in the wagon exchange register or similar record, the hours of detention to each wagon, that is the interval between its arrival and departure. At the end of the month under different types must be totalled, and both detentions and number of wagons for each type must be multiplied by the factor of equivalence to four wheeler and then consolidated to work out the average detention per wagon, the following example will illustrate the method of calculation of the average detention per wagons.
                      </p>
                      <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-3">
                        <p className="text-purple-200 font-semibold mb-2">Example:</p>
                        <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                          Suppose Yard A has despatched 100 four wheelers with a total detention of 400 hours, 20 bogie wagons (Equivalent to 40 four wheelers) with a total detention of 200 hours and 10 Box wagons (equivalent to twenty five four-wheelers) with a total detention of 150 hours. Average detention per wagon will be –
                        </p>
                        <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed font-mono bg-white/5 p-2 rounded">
                          400 x 1 + 200 x 2+ 150 x 2.5 = 7.1 hours<br/>
                          100 x 1 + 20 x 2 + 10 x 2.5
                        </p>
                      </div>
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        The detention of wagons arriving in one month and despatched in the next will be shown in the month in which they are despatched, but the time must be reckoned from the date of arrival. Stations which maintain a wagon card index may obtain the figures therefore instead of from the wagon exchange register. The number and detention of Brakevans will be excluded for the purpose of this item.
                      </p>
                      <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="font-semibold">(c)</span> The &apos;target&apos; detention hours will be fixed by the Railway Board from time to time having regard to the past performance of each Yard and also materialisation of different streams of traffic, Marshalling commitments and the facilities available. A pointer to the correct level of a target would be the best result achieved in the past one or two years, assuming that there has been no noticeable improvement or deterioration in the operating conditions and methods. The target should be somewhat better than the actual recorded performance so that it may call for better effort on the part of the staff concerned to achieve the margin of improvement remaining between the actual and the target.
                      </p>
                      <div className="space-y-2 mt-4">
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold">Item 6.1 – All wagons</span> – The term &apos;all wagons&apos; includes through loaded, through empty, local loaded, local empty and departmental wagons, wagons on &apos;through trains&apos; (as defined in item 1.01 & 1.02) sick and damage wagons will be excluded. Sick and damaged wagons will be included wherever the sick lines form part of the Marshalling Yard area. In respect of the Yards which may as well be depots for holding empties, such empties should not be included for the purpose of this item. These Yards should, however, be denoted by a suitable footnote specifying therein the average daily holding of the depot. The &quot;exit&quot; and &quot;re-entrance&quot; timings may be fixed on the basis of sample observations made once a year. These fixed timings may be rechecked annually and also when any major change occurs in the working of the Marshalling Yard.
                        </p>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold">Item 6.2 - Through loaded wagons</span> – The term &quot;loaded wagons&quot; mean loaded wagons which neither originate nor terminate at the station, but which are dealt within the Yard and are not on &quot;by-passing&quot; trains (as defined in item 1.01. and 1.02).
                        </p>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold">Item 6.3 – Through empty wagons</span> – The terms &quot;empty wagons&quot; means empty wagons which neither originate nor terminate at the stations, but which are dealt in the Yard and are not on &apos;by-passing&apos; trains (as defined in items 1.01 and 1.02).
                        </p>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold">Item 6.4 - Outward Local</span> - This item will include detention to local wagons despatched by trains from the Marshalling Yard i.e. from the time of their entry into the Marshalling Yard from the outlying sheds and sidings till their despatch by trains.
                        </p>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold">Item 6.5 – Inward Local</span> - This will include the detention to local wagons from the time of their arrival in the Marshalling Yard till their placement into the local sidings.
                        </p>
                        <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                          <span className="font-semibold">Item 6.6 – Sick Wagons</span> - Detention to sick wagons in the Marshalling Yard will be included under this item as also under &quot;all wagons&quot;. In case the sick lines form part of the Marshalling Yard the detention in the sick lines will also be included under this item. If the sick lines are outside the Yard, such detention will be excluded.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Present Status and the Road Ahead Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <TrendingUp className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  vii) Present Status and the Road Ahead
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Closure of conventional marshalling yards was an outcome of –
                </p>
                <ul className="ml-6 space-y-2 mb-6">
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">a) Unit train movement</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">b) Advent of containers</li>
                </ul>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  The container revolution ensured that an universal flat rail car could move all description of traffic of varying cargo size – train load, full container load or less than container load. It can quickly eliminate shunting operations, which was replaced by gantry or road mobile trains; picking up containers and repositioning them – the equivalent of tortous shunting as detailed above. It ensured that freight customer does not have to register a wagon or rake, he has to ask for simply a given number of containers which are sent to his premises for loading/unloading and are brought back to modern freight terminals. The exorbitant cost involved in taking freight consignments to railway goods shed and unloading in inward consignment there and carting them to customers&apos; premises are totally eliminated and inter modal operation ensures door to door service, which till now was the hallmark of road transport, which had captured nearly 80% of making Indian Railways the second largest mode of transit movement.
                </p>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Rightly enough the era of modern freight terminals has began. These are world class facilities and include:-
                </p>
                <ul className="ml-6 space-y-2 mb-6">
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">i) An ICD for export/import cargo with customs clearance facility</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">ii) Appointed warehouse to facilitate custom duty being paid as an when the cargo is needed.</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">iii) Large warehouses where cargo can be stuffed/restuffed/stored and moved as per customers&apos; instruction</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">iv) Road, rail and air transport connectivity on demand.</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">v) Cold chain for refrigerated cargo</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">vi) Banks</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">vii) Fax, Telex & Telephone Internet connectivity</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">viii) Continuous cargo tracking globally</li>
                </ul>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Freight terminal operating company and some of the railroad company who have a customer services centre working round the clock to receive customers instructions for change of destinations, rebooking of cargo etc. and this new environment the freight customer may visits the commercial office to execute agreements or long term contracts. The freight terminal is like a factory where the cargo goes and goes out. Process for bringing about this business like cause is already on way with private operators managing their terminals, running their own trains, serving their customers in an entirely business like environment. In this scenario the erstwhile marshalling yard are in the following areas
                </p>
                <ul className="ml-6 space-y-2 mb-6">
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">i. Providing rail substitute to road</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">ii. Serving large production units like steel plants & refineries</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">iii. Major customers like thermal powerhouse, fertiliser plants, cement plants, ensuring availability of inputs and clearance of their outward cargo.</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">iv. Major carriage wagon depots for freight rolling stock</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">v. Crew and loco changing locations</li>
                  <li className="text-orange-50/95 lg:text-base text-sm leading-relaxed">vi. ICDs of IR&apos;s subsidiary CONCOR</li>
                </ul>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The transition from conventional; goods shed and marshalling yards of freight terminals have equipped railway system worldwide to win back high profit yielding, finished production from road to rail cum road system which reduces cost to the economy and the customers, substantially reducing the adverse environment impacts of road transport, paving the way for sustainable transport. The future manifestation of railway yards is likely to be as Logistics Park as railways strives to become a logistics provider rather than a mere transporter.
                </p>
                <p className="text-orange-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The future manifestation of railway yards is a logistic park, essential for Railways as it shifts towards being a logistic provider from a mere transporter.
                </p>
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

export default MarshallingYards
