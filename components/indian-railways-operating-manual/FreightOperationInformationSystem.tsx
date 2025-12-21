'use client'
import React from 'react'
import { 
  Database,
  Target,
  Network,
  Settings,
  TrendingUp,
  FileText,
  Server,
  Zap,
  CheckCircle,
  BarChart3,
  Package,
  Wrench,
  Train
} from 'lucide-react'

const FreightOperationInformationSystem = () => {
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
                      <Database className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              FREIGHT OPERATIONS INFORMATION SYSTEM (FOIS)
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* I. INTRODUCTION Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  I. INTRODUCTION
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      In keeping with global trend, there has been a long outstanding demand of the industry &amp; trade for transparency in sharing of information to give the customers an up-to date business like environment. Railways in this millennium have decided not only to perform the traditional tasks of carrying passengers and goods efficiently, but also to change the mindset of working as a closed system. The great concern to improve on its market share has prompted Railways to have a multi pronged approach to its freight policy.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      Continuous Cargo Visibility has always been a critical component of the Supply Chain Distribution Management System.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      To achieve this, out of the stated multi pronged new freight policy, a lot of emphasis has been laid on establishing a computerized FREIGHT OPERATIONS INFORMATIONS SYSTEMS (FOIS). The system indigenously developed is fully functional in the B.G. system of Indian Railways being the first of its kind in South East Asia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 1. Freight Operations Information Systems Mission – FOIS */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Target className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  1. Freight Operations Information Systems Mission – FOIS
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      To give a total transparent system with continuous Cargo visibility and an up-to date business environment to the Customers with instant access to information regarding their consignments in transit for just in time inventory&apos;.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      FOIS is an On-line Real-Time system based on absolute current State of Art Technology and efficient Communication system.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      A management tool to optimize utilization of costly assets and resources by improving the distribution of Rakes/Wagons &amp; Locos, and also scheduling and Routing Traffic in an optimized cost effective manner.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                      Provides Continuous Cargo Visibility and enables the Freight customers to have instant access to information regarding the current status of their consignments in transit for just in time inventory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Strategic Advantages Derived From The FOIS System */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <TrendingUp className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  2. Strategic Advantages Derived From The FOIS System
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                    <p className="text-purple-50/95 lg:text-sm text-xs">• Extension of the current business practice from bulk movement of freight traffic in train load formations to piecemeal traffic by clubbing and moving together similar type of stock in &apos;Hub &amp; Spoke&apos; arrangement to increase its market share by re diverting high profit yielding piecemeal cargo from road to rail.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                    <p className="text-purple-50/95 lg:text-sm text-xs">• Global tracking of consignments in real time Rakes or individual wagons.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                    <p className="text-purple-50/95 lg:text-sm text-xs">• The insight and pipeline of consignments thus captured on the entire BG network is made available for timely planning and just in time inventory management on a time span cargo movement which may extend to 2 to 5 days from origin to destination...</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                    <p className="text-purple-50/95 lg:text-sm text-xs">• Facilitate acceptance (customer&apos;s Orders), billing and cash accountal of freight traffic from identified nodal customer centers which may not necessarily be the handling terminals.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                    <p className="text-purple-50/95 lg:text-sm text-xs">• Extension of such facilities to customer&apos;s premises and introduction of e-commerce, benefitting both IR and the trade &amp; industry, by eliminating manual transactions which necessarily add to the burden of logistics management.</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                    <p className="text-purple-50/95 lg:text-sm text-xs">• Providing requisite Foundation for a total logistics system furnishing real time information of the chain of physical distribution, an essential element in reducing inventory costs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Scope Of FOIS Systems */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  3. Scope Of FOIS Systems
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Presently two subsystems of FOIS are already in use after extensive field trials and validation.
                    </p>
                    <ul className="ml-4 space-y-2">
                      <li className="text-orange-50/95 lg:text-sm text-xs">• RMS</li>
                      <li className="text-orange-50/95 lg:text-sm text-xs">• TMS.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-orange-400/20">
                    <h3 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">a) Rake Management Systems –RMS</h3>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-orange-50/95">- Rake based consignment tracking and pipeline</li>
                      <li className="text-orange-50/95">- Train/Rake operation</li>
                      <li className="text-orange-50/95">- Stock Holding in terms of summary of wagon types</li>
                      <li className="text-orange-50/95">- Train and stock Interchange</li>
                      <li className="text-orange-50/95">- Terminal Handling performance</li>
                      <li className="text-orange-50/95">- Loco holding, outage and power on-line</li>
                      <li className="text-orange-50/95">- Reporting to take care of Train/Load on summary basis</li>
                      <li className="text-orange-50/95">- Invoice based consignment tracking</li>
                      <li className="text-orange-50/95">- Wagon wise Stock Holding</li>
                      <li className="text-orange-50/95">- Reporting of consist Wagon wise</li>
                      <li className="text-orange-50/95">- Invoice based loading originating tonnage and revenues.</li>
                      <li className="text-orange-50/95">- Wagon wise Interchange</li>
                      <li className="text-orange-50/95">- Statement of missing Wagons/wrongly delivered</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-orange-400/20">
                    <h3 className="text-orange-200 font-semibold lg:text-lg text-base mb-3">b) Terminal Management Systems –TMS</h3>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-orange-50/95">- Computerized booking and delivery of consignment</li>
                      <li className="text-orange-50/95">- Station Accounting</li>
                      <li className="text-orange-50/95">- RR generation/Transmission</li>
                      <li className="text-orange-50/95">- Improved Customer Interface</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-orange-200">4.</span> Crew Management has been developed &amp; is under implementation. Control charting of trains currently being done manually will also be integrated with FOIS.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed">
                      The above two sub systems have been fully developed and tested and are ready for implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. FOIS Design Architecture */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-cyan-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  5. FOIS Design Architecture
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      FOIS is designed and developed in conformity with the state of art technology which is scaleable, maintainable, with open systems architecture and is based on the Indian Railways organizational hierarchy, its present and future requirements. Based on the business processes that are being adopted, the business model developed in the FOIS - IT architecture is based on the assumptions: -
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      The current business practice of bulk movement in rake formation is the accepted norm for future also. Around 80 to 85% of traffic already moves in Rake, majority of which comprises similar type of rolling stock.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      Global perception is more important, with respect to tracking of consignment and Rakes rather than of individual wagon, locomotive and train. The insight and pipeline of consignment and rakes should be seamlessly available. Railways would like to share information on booking and movement of consignments with individual customers also.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      The operations and data capturing, will remain control centric for train, rake locomotive and stock management and terminal centric for booking, loading, unloading, and delivery. Taking into account the spatial distribution of activities, which need to be captured.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      Integrity of Operation and Commercial data is an absolute necessity. RMS and TMS application are conceptualized, to provide the integration with the other subsystems as and when these are developed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      FOIS ultimately expects an event driven integrated reporting in real time, beginning with the tendering of Forwarding note to loading and generation of invoice, followed by load consists, train ordering and departure/arrival of load destination, unloading and delivery. The data thus captured is used for generating associated managerial reports on-line information (MIS). The data will also be used for expanding the scope to cover other functional areas of the remaining modules and can easily integrate with RMS/TMS using appropriate middle ware Technology for sharing information locally.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-cyan-50/95 lg:text-base text-sm leading-relaxed">
                      Therefore, a strategic approach has been adopted to computerize IR operations by implementing RMS/TMS systems in a phased manner using modular approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. FOIS System Architecture */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Server className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  6. FOIS System Architecture
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <h3 className="text-indigo-200 font-semibold lg:text-lg text-base mb-2">Key components of the System Architecture</h3>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Intelligent terminals will be placed at the field locations to capture the data from the place of activity namely control offices, yards, goods sheds, C &amp; W depot, Loco sheds etc., and connected to the identified Application Server through reliable communication links for transaction processing.
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Application servers are centrally placed at CRIS office. These servers are connected to the Zonal Hd. Qrs., Divisional Control Offices, yards, interchange points, and good sheds etc., with a reliable and integrated network. The servers are networked amongst themselves and to the central server for global level transactions.
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      The central Server provides management Reports at board level and acts as repository of all the global data and also provides global services to maintain referential integrity of the databases including master files.]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Network Topology */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  7. Network Topology
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                  In view of the Centralized application architecture, a star based network topology has been designed. However, in order to provide alternate paths ( to meet the up time requirement of 99.9%) from reporting locations, a mesh has been created with in each zone so that every location has at least two paths to reach CRIS. Each zonal HQ has been connected to central location (CRIS) on high bandwidth pipes. In addition to this, another zonal location has been connected to CRIS using high capacity link. Hence these two high bandwidth links shall cater to the entire transaction load generated by a zone. Railway telecommunication network, leased lines, DOT, VSAT Technology as communication media has been provided for reliable and fast means of data transfer.
                </p>
              </div>
            </div>

            {/* 8. Phased Implementation – Approach */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-rose-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-rose-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Zap className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-rose-100 bg-clip-text text-transparent">
                  8. Phased Implementation – Approach
                </span>
              </h2>
              <div className="bg-linear-to-br from-rose-500/20 via-pink-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-rose-200">h)</span> In case implementation is attempted for events of all the functions to be reported in real time, concurrently from day one, then the reporting sites to be readied, the associated communication requirements and the number of staff to be trained assume enormous proportions. To ensure that the implementation effort is within manageable limits, one way is to take up, one by one, only limited portions of geographical territory for computerization at any given time. On the other hand, if the territory is small, instances of repetitive data entry increase; resulting in redundant expenditure on reporting infrastructure that will have no use as the territory expands. At the same time, if the MIS requirements are to be met in totality, the territorial expansion must ensure that a function is implemented on end to end basis as quickly as possible, otherwise only a truncated picture will be available to various levels of users and the benefits of computerization remain postponed till the entire Indian Railways have been covered.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-rose-200">ii)</span> The FOIS comprises several subsets of functions each meeting a distinct set of objectives. Certain FOIS subsets presuppose others to be operational before they can be implemented. Loco and wagon based functions presuppose load/train/rake functions to be operational. Goods shed functions expect wagon-based functions to be in place before they can be implemented. With these assumptions the FOIS / RMS systems have been designed in a modular structure which could be taken up for implementation in a phased manner.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-rose-400/20">
                    <p className="text-rose-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      For example:-
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded-lg p-3 border border-rose-400/10">
                        <h4 className="text-rose-200 font-semibold mb-1">Phase I (PI module)</h4>
                        <p className="text-rose-50/95 lg:text-sm text-xs">Provides facility for reporting load summary with only wagon type and number of units.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-rose-400/10">
                        <h4 className="text-rose-200 font-semibold mb-1">Phase II (PII module)</h4>
                        <p className="text-rose-50/95 lg:text-sm text-xs">Provides facility for reporting the consists with details of wagon numbers.</p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-rose-400/10">
                        <h4 className="text-rose-200 font-semibold mb-1">Phase III (PIII module)</h4>
                        <p className="text-rose-50/95 lg:text-sm text-xs">TMS provides facility for good shed functions and generation of RR.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Implementation Strategy */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <CheckCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  9. Implementation Strategy
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-amber-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      Realizing that functional phasing is the only way to keep the implementation effort within manageable limit and yet remain meaningful at every stage, FOIS software has been developed as above in three modules such that functions of global utility are implemented faster from fewer sites. It also takes into account that the beginning is made from the control offices where computer awareness is of a high order. The implementation can grow on need basis driven by the Railways themselves.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      For timely completion of field implementation, the total involvement and commitment of Railways is very essential from day one. Therefore, COM&apos;s of Railways have been given the total responsibility and charge of implementation of FOIS, to provide for the following:-
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-yellow-50/95">- Railways to get staff identified and train them to work on PCs</li>
                      <li className="text-yellow-50/95">- Railways to prepare the sites for installation of hardware including provision of electrical and civil facilities.</li>
                      <li className="text-yellow-50/95">- Maintenance of channels &amp; data com equipment has been given to CSR of the zones.</li>
                      <li className="text-yellow-50/95">- CRIS would provide specifications for the same.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      For facilitating this process the organization of CAO/FOIS has been strengthened and made responsible for coordination, implementation on All - India-basis.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">
                      The software implementation and maintenance shall remain the responsibility of CRIS. Pre implementation training of the required number of staff (consisting of Core Implementers and Telecom Inspectors from each of the divisions), in RMS - phase 1 has been completed by CRIS for all the zonal railways and their divisions. However, Railways will be required to make arrangements through the Zonal Training Schools to train the remaining staff of the concerned categories.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Benefits */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-emerald-500/30 to-teal-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-teal-500/30 transition-all duration-500">
                  <BarChart3 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  10. Benefits
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* i) Continuous Cargo Visibility */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">i) Continuous Cargo Visibility</h3>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-emerald-50/95">• Rake based consignment tracking and pipeline</li>
                      <li className="text-emerald-50/95">• Invoice based loading –Originating Tonnage &amp; Revenue</li>
                      <li className="text-emerald-50/95">• Information on trains on the run, the ETA at next point and the work to be performed.</li>
                      <li className="text-emerald-50/95">• Vehicle guidance of all trains on run.</li>
                      <li className="text-emerald-50/95">• Daily report describing the performance of all through trains operated in a controlled territory for the day.</li>
                      <li className="text-emerald-50/95">• Actual/Estimated arrival and departure particulars for a particular train at any or all the reporting points</li>
                      <li className="text-emerald-50/95">• Yard or on the run delay information.</li>
                      <li className="text-emerald-50/95">• Train &amp; stock Interchange</li>
                      <li className="text-emerald-50/95">• Wagon wise Interchange</li>
                    </ul>
                  </div>

                  {/* ii) Optimised Asset Utilisation */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">ii) Optimised Asset Utilisation</h3>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-emerald-50/95">• Improved Locomotive Utilization by reduction in Light Engine running and reduced in effectives</li>
                      <li className="text-emerald-50/95">• Statement of missing or wrongly delivered wagons and finally its elimination.</li>
                      <li className="text-emerald-50/95">• Elimination of unconnected wagons</li>
                      <li className="text-emerald-50/95">• Increased Availability of Repair Capacity</li>
                      <li className="text-emerald-50/95">• Stock Holding</li>
                      <li className="text-emerald-50/95">• Loco Holding</li>
                    </ul>
                  </div>

                  {/* iii) Increased Revenue */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">iii) Increased Revenue</h3>
                    <p className="text-emerald-50/95 lg:text-sm text-xs mb-2">
                      Savings in wagon fleet would result in corresponding saving in the recurring cost of maintenance of wagons
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-emerald-50/95">• Reduced Locomotive power and Rolling Stock Maintenance Cost</li>
                      <li className="text-emerald-50/95">• Savings in Time &amp; Cost of handling in yards, cost of empty haulage</li>
                      <li className="text-emerald-50/95">• Ensures optimal crew management and monitors statutory limits for running duty and overtime payments</li>
                      <li className="text-emerald-50/95">• Reduction in staff cost per unit of transportation due to improved productivity of the available manpower</li>
                    </ul>
                  </div>

                  {/* iv) Improved Productivity per/man Year */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">iv) Improved Productivity per/man Year</h3>
                    <p className="text-emerald-50/95 lg:text-sm text-xs mb-2">
                      Accuracy of reporting –In the Head &amp;Hand system collecting data on telephones results in sizeable error levels, which need to be reconciled &amp;corrected periodically .FOIS data with built in validation systems has Zero errors .
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-emerald-50/95">• Drudgery of manual processes like maintenance of registers etc. is eliminated.</li>
                      <li className="text-emerald-50/95">• Particulars of crew on train with hours spent on duty.</li>
                      <li className="text-emerald-50/95">• Re-deployment of major portion of staff involved in wagon tracing and accounts checking activities.</li>
                      <li className="text-emerald-50/95">• Improved Customer service and satisfaction</li>
                      <li className="text-emerald-50/95">• Facilitation of acceptance (customer&apos;s Orders), billing and cash accountals from identified nodal customer services centers and not necessarily at the handling terminals</li>
                      <li className="text-emerald-50/95">• E-Commerce will facilitate the customers to operate from their premises for the above requirements of billing and cash accountal and thus reduce the burden of logistics management, and in addition drastically bring down the inventory costs. in the entire chain of physical distribution system.</li>
                      <li className="text-emerald-50/95">• Quick settlement of Claims</li>
                      <li className="text-emerald-50/95">• Just in Time Inventory</li>
                    </ul>
                  </div>

                  {/* v) Goods shed Operations */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-3">v) Goods shed Operations</h3>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-emerald-50/95">• Arrival particulars of Wagons</li>
                      <li className="text-emerald-50/95">• Placement and Release Particulars</li>
                      <li className="text-emerald-50/95">• Information on demands registered and pending Indents</li>
                      <li className="text-emerald-50/95">• Preparation of Railway Receipts</li>
                      <li className="text-emerald-50/95">• Information on Demurrage and Wharfage</li>
                      <li className="text-emerald-50/95">• Loading Particulars</li>
                      <li className="text-emerald-50/95">• Goods Shed Earning</li>
                      <li className="text-emerald-50/95">• Information on delayed wagons and Wagons awaiting Placement/Release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* II. Application/Software Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-violet-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-violet-100 bg-clip-text text-transparent">
                  II. Application/Software
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-violet-50/95 lg:text-base text-sm leading-relaxed">
                      RMS module has been developed with GUI interface which is highly interactive, very user friendly. The software is totally menu driven and navigation is through logically linked tasks. The application and front end forms for reporting events has been developed in Visual Basic and resides in the client machine located at the reporting location . Data is stored in the central server locate at CRIS.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 1. General Concepts */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-pink-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-pink-500/30 to-rose-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-rose-500/30 transition-all duration-500">
                  <Package className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-pink-100 bg-clip-text text-transparent">
                  1. General Concepts
                </span>
              </h2>
              <div className="bg-linear-to-br from-pink-500/20 via-rose-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                      A Rake is a very generalized term, which refers to any set of wagons moving together and has been identified in the system as rake. Wagons can be attached/detached to a Rake. A Rake is identified by a uniquely defined ID number, which remains unchanged through various Load/Empty cycles &amp; movements. A Rake, when given a destination, is known as a Load. A Load, when given a loco, is known as a Train. Thus, there can be no Train without a Load &amp; no Load without a Rake (except where a load is mixed and is not identified in the system as a rake). With a clear understanding of these terms, you enter data through clearly defined &quot;tasks&quot;.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-pink-400/20">
                    <h3 className="text-pink-200 font-semibold lg:text-lg text-base mb-3">The RMS software has two identifiable cycles-</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2">Train cycle:</h4>
                        <p className="text-pink-50/95 lg:text-sm text-xs mb-2">
                          It starts the moment a load is identified as a train and the following tasks are used for online reporting: -
                        </p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Train Ordering: TO/Call between two crew-changing points.</li>
                          <li className="text-pink-50/95">• Train Departure: reports departure.</li>
                          <li className="text-pink-50/95">• Train Arrival: reports arrival.</li>
                          <li className="text-pink-50/95">• Train Run-through: reports through runs</li>
                          <li className="text-pink-50/95">• Train rerouting</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2">Yard Cycle:</h4>
                        <p className="text-pink-50/95 lg:text-sm text-xs mb-2">
                          It starts as soon as a terminating load a terminating load arrives at its destination or a train is cancelled. (i.e. the load is sent to load planning)and the following tasks are used for various online reporting:-
                        </p>
                        <div className="space-y-3">
                          <div className="bg-white/5 rounded p-2 border border-pink-400/5">
                            <h5 className="text-pink-200 font-semibold mb-1 text-xs">Load Related Tasks</h5>
                            <ul className="ml-4 space-y-1 text-xs">
                              <li className="text-pink-50/95">• Inward Number Taking: destination validates consist.</li>
                              <li className="text-pink-50/95">• Load Planning: initial activity, following rake assignment.</li>
                              <li className="text-pink-50/95">• Load Stabling: run/ordering termination is reported through this.</li>
                              <li className="text-pink-50/95">• Load Diversion/Termination/Extension: reports changes in planned load destinations</li>
                              <li className="text-pink-50/95">• Load Yarding: takes a load-to-load planning screen, but will not reflect in stabled position.</li>
                            </ul>
                          </div>
                          <div className="bg-white/5 rounded p-2 border border-pink-400/5">
                            <h5 className="text-pink-200 font-semibold mb-1 text-xs">Vehicle Guidance Related Tasks</h5>
                            <ul className="ml-4 space-y-1 text-xs">
                              <li className="text-pink-50/95">• Consist Reporting: originating station reports summary details. (Guidance is also called as Consist).</li>
                            </ul>
                          </div>
                          <div className="bg-white/5 rounded p-2 border border-pink-400/5">
                            <h5 className="text-pink-200 font-semibold mb-1 text-xs">Rake Related Tasks</h5>
                            <ul className="ml-4 space-y-1 text-xs">
                              <li className="text-pink-50/95">• Rake Formation Details: form/modify rake consist.</li>
                              <li className="text-pink-50/95">• Movement order: facility to give advance assignments to rake</li>
                              <li className="text-pink-50/95">• Rake Placement/Release: reporting Load/Empty cycle.</li>
                              <li className="text-pink-50/95">• Rake Dissipation: for generating piecemeal out of rake or for doing away with a rake which has no wagons left.</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-pink-50/95 lg:text-sm text-xs mt-3">
                          After a load is made ready, loco attached and train ordered Again the train cycle begins.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2">Loco Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Attachment/Detachment of Locos.</li>
                          <li className="text-pink-50/95">• Loco Reporting: reporting shed activities of loco.</li>
                          <li className="text-pink-50/95">• Light Engine: reports light engine movements</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-pink-50/95 lg:text-sm text-xs mt-4">
                      Given above is the list of tasks that are to be performed on real-time basis i.e. as soon as the event takes place.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-pink-400/20">
                    <h3 className="text-pink-200 font-semibold lg:text-lg text-base mb-3">Demand:-</h3>
                    <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      This function is to be reported at station where the party/consignor registers his Demand for supply of Rake/Piecemeal wagon for loading of goods. The following tasks are used for reporting this activity:-
                    </p>
                    <ul className="ml-4 space-y-1 text-xs">
                      <li className="text-pink-50/95">• New demand</li>
                      <li className="text-pink-50/95">• Modify demand</li>
                      <li className="text-pink-50/95">• Add/delete demand</li>
                      <li className="text-pink-50/95">• Fulfilling demand</li>
                      <li className="text-pink-50/95">• Forefeiture/Withdrawl of demand</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-pink-400/20">
                    <h3 className="text-pink-200 font-semibold lg:text-lg text-base mb-3">Interchange forecast:-</h3>
                    <p className="text-pink-50/95 lg:text-base text-sm leading-relaxed">
                      In the system as the trains are planned, a pipeline is generated from Originating Station to destination and the position can be viewed at any point in its route. Forecast can be reported by selecting trains from the pipeline shown at the interchange point. The task used is interchange forecast reporting task.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-pink-400/20">
                    <h3 className="text-pink-200 font-semibold lg:text-lg text-base mb-3">Given below is a summarized list of entity related tasks :-</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Rake Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Rake Formation Details: form/modify rake consist.</li>
                          <li className="text-pink-50/95">• Movement order : facility to give advance assignments to rake</li>
                          <li className="text-pink-50/95">• Rake Placement/Release: reporting Load/Empty cycle.</li>
                          <li className="text-pink-50/95">• Rake Merging: moving wagons from one to another rake.</li>
                          <li className="text-pink-50/95">• Rake Dissipation: for generating piecemeal out of rake or for doing away with a rake which has no wagons left.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Load Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Load Planning: initial activity, following rake assignment.</li>
                          <li className="text-pink-50/95">• Load Stabling: run/ordering termination is reported through this.</li>
                          <li className="text-pink-50/95">• Inward Number Taking: destination validates consist.</li>
                          <li className="text-pink-50/95">• Load Diversion/Termination/Extension: reports changes in planned load destinations</li>
                          <li className="text-pink-50/95">• Load Yarding: similar to stabling, but will not reflect in stabled position.</li>
                          <li className="text-pink-50/95">• Cut-in by Arrival/Departure: was useful when there were non-computerized territories also.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Train Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Train Ordering: TO/Call between two crew-changing points.</li>
                          <li className="text-pink-50/95">• Train Departure: reports departure.</li>
                          <li className="text-pink-50/95">• Train Arrival: reports arrival.</li>
                          <li className="text-pink-50/95">• Train Run-through: reports through runs.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Loco Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Attachment/Detachment of Loco: reporting loco failure on run.</li>
                          <li className="text-pink-50/95">• Loco Reporting: reporting shed activities of loco.</li>
                          <li className="text-pink-50/95">• Light Engine: reports light engine movements.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Roadside/Piecemeal Wagons Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Attachment/Detachment of Wagons en route: load &amp; consist are automatically modified in this task.</li>
                          <li className="text-pink-50/95">• Piecemeal Placement/Release: reports piecemeal activities.</li>
                          <li className="text-pink-50/95">• Piecemeal Sick/Fit Reporting: reports sick/fit.</li>
                          <li className="text-pink-50/95">• Clearance of Detached Wagons: clears detached wagons.</li>
                          <li className="text-pink-50/95">• Demand: reports indents for a good shed type of loading.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Vehicle Guidance Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Consist Reporting: originating station reports summary details. (Guidance is also called as Consist)</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Detentions Related Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Train Detention en route: reports unscheduled stoppages.</li>
                          <li className="text-pink-50/95">• Pre departure Detentions: reports detentions suffered by loads/trains at yards/stations.</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-pink-400/10">
                        <h4 className="text-pink-200 font-semibold mb-2 text-sm">Other Tasks</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-pink-50/95">• Interchange Forecast: reports daily targets, which should be frozen by noon.</li>
                          <li className="text-pink-50/95">• BPC &amp; Crew Details: reports these details.</li>
                          <li className="text-pink-50/95">• Modify ETA: changes ETA for a train.</li>
                          <li className="text-pink-50/95">• Re-routing: changes path of a train while on run.</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-pink-50/95 lg:text-sm text-xs mt-4">
                      As you realize, these are all routine tasks. Besides this the divisions have to carry out some systemic tasks which help in generating MIS reports (name for reports which are not generated on online data) and some time specific reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TSS (Terminal Sub-Systems) Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-sky-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-sky-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Server className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-sky-100 bg-clip-text text-transparent">
                  TSS (Terminal Sub-Systems)
                </span>
              </h2>
              <div className="bg-linear-to-br from-sky-500/20 via-blue-500/15 to-cyan-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-sky-50/95 lg:text-base text-sm leading-relaxed">
                      TSS (Terminal Sub-Systems) is a generic word used in FOIS to refer to PCs, Printers &amp; UPS. This PC is used for entering (and retrieving) data. Following are the important guidelines for users.
                    </p>
                  </div>

                  {/* Power Connection */}
                  <div className="bg-white/5 rounded-xl p-5 border border-sky-400/20">
                    <h3 className="text-sky-200 font-bold lg:text-lg text-base mb-3">Power Connection:</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-sky-50/95">• Please make sure that a data entry PC or a &quot;Reporting Terminal&quot; is always kept in the &quot;ON&quot; condition.</li>
                      <li className="text-sky-50/95">• The power feed required is met through a 5A dedicated socket.</li>
                      <li className="text-sky-50/95">• Please make sure that all the different PCs &amp; Printers have a separate 5A socket. Don&apos;t use multi-plug adapters.</li>
                      <li className="text-sky-50/95">• Also check up with the Electrical personnel as to whether your sockets have Earthing arrangement. In absence of the same, your PC may get damaged. The earthing to neutral voltage not be more than 2-3V.</li>
                      <li className="text-sky-50/95">• It is also better to have a MCB attached to main power supply point/board.</li>
                      <li className="text-sky-50/95">• Your AC connection &amp; PC supply must be on different phases. This saves from fluctuations.</li>
                      <li className="text-sky-50/95">• Your PC is not connected to the mains directly. Instead, the Power supply is routed through a UPS (Uninterrupted Power Supply). Please ensure that this is always done. This saves your PC from power fluctuations as well as gives a power from batteries for about 20 minutes, in case of power failure.</li>
                      <li className="text-sky-50/95">• There should be a power back up, either through AT (OHE) or through Diesel Generator. The change over switch should be close to you.(care to be taken that earthing is proper)</li>
                      <li className="text-sky-50/95">• It is a healthy practice to ensure that various power chords feeding your PC, Printer etc are neatly tied together, rather than strewn all over.</li>
                      <li className="text-sky-50/95">• If you locate your UPS very close to your monitor, the display will wobble. Please ensure that UPS &amp; Monitor are separated by at least 24 inches.</li>
                      <li className="text-sky-50/95">• When the PC is ON, don&apos;t try to change any connection. This applies equally to not only power connectors, but also to various chords connecting different equipments, LAN Cables etc.</li>
                      <li className="text-sky-50/95">• When turning the PC ON, (if need arises) follow this sequence: Mains → UPS → Monitor → Printer → CPU. The reverse is followed when switching off.</li>
                    </ul>
                  </div>

                  {/* Environment */}
                  <div className="bg-white/5 rounded-xl p-5 border border-sky-400/20">
                    <h3 className="text-sky-200 font-bold lg:text-lg text-base mb-3">Environment:</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-sky-50/95">• If an AC is provided, make sure that it is working properly.</li>
                      <li className="text-sky-50/95">• AC should be on a phase different from the one feeding your PC.</li>
                      <li className="text-sky-50/95">• The room should be kept as clean as possible. Dust, smoke particles &amp; moisture cause maximum damage to your PC. So, don&apos;t allow any smoking, eating or drinking at the workstation.</li>
                      <li className="text-sky-50/95">• Never clean your PC using an organic solvent (such as Colin). Always use a soft, damp, dirt-free cloth.</li>
                      <li className="text-sky-50/95">• When the PC is not in use, keep it covered with &quot;Dust Covers&quot;.</li>
                      <li className="text-sky-50/95">• Make sure that the Keyboard has been supplied with a &quot;Skin&quot; – a tight-fitting plastic covering for Keyboard, which does not stop usage.</li>
                      <li className="text-sky-50/95">• Your PC should not face direct sunlight. Nor should it be placed so close to window where rains can affect it.</li>
                      <li className="text-sky-50/95">• CPU (Central Processing Unit) &amp; Monitor should not be placed in such a way that the fans/outlets at the rear of these equipment get blocked by walls/other objects.</li>
                    </ul>
                  </div>

                  {/* Virus Protection */}
                  <div className="bg-white/5 rounded-xl p-5 border border-sky-400/20">
                    <h3 className="text-sky-200 font-bold lg:text-lg text-base mb-3">Virus Protection:</h3>
                    <div className="space-y-3">
                      <p className="text-sky-50/95 lg:text-sm text-xs">
                        Viruses come to you PC through pirated softwares of games &amp; utilities that you load. Yet another source is downloading of files from Internet. Once a virus is on a single PC of a network, it spreads on its own to the entire network. Therefore, you must not load pirated software or download wallpapers etc from Internet.
                      </p>
                      <ul className="space-y-2 ml-4 text-xs">
                        <li className="text-sky-50/95">• Make sure that Virus protection files are loaded on your PC.</li>
                        <li className="text-sky-50/95">• Please enable virus scans on data transfers, floppy drive files &amp; CD files.</li>
                        <li className="text-sky-50/95">• Please schedule your Virus software to run every day at a fixed time. To do this, open &quot;My Computer&quot;. Double Click on &quot;Scheduled Tasks&quot; Folder. Double Click on &quot;Add Scheduled Task&quot;. This will activate &quot;Schedule Task Wizard&quot;. Click next &amp; select the name of the Anti-Virus program given to you. Keep following the simple steps to schedule your Anti-Virus to run daily. Once scheduling is done, your PC will automatically run the program everyday at a given time, as specified by you.</li>
                        <li className="text-sky-50/95">• There is an arrangement whereby we get updated Anti-Virus files every 3 months. These CDs are available at your Divisional HQ through OCC. You must update your anti-virus programs to enable it to take care of new viruses.</li>
                      </ul>
                      <div className="bg-white/5 rounded-lg p-3 border border-sky-400/10">
                        <p className="text-sky-200 font-semibold mb-2 text-xs">There are tell tale signs of virus on your PC. Please be on lookout for these signs, which are listed below:</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-sky-50/95">• Unexplained disk drive activity light or floppy drive light</li>
                          <li className="text-sky-50/95">• Reduction in RAM Availability</li>
                          <li className="text-sky-50/95">• &quot;File Copied&quot; message appears without copying anything</li>
                          <li className="text-sky-50/95">• Failure of a memory resident program to operate properly</li>
                          <li className="text-sky-50/95">• System behaves slowly or in a chaotic manner</li>
                          <li className="text-sky-50/95">• Bad clusters on the disk</li>
                          <li className="text-sky-50/95">• Increased number of files on disk</li>
                          <li className="text-sky-50/95">• Increase in size of executable programs</li>
                          <li className="text-sky-50/95">• Change in file&apos;s date and time stamp, without modification</li>
                          <li className="text-sky-50/95">• Program running slower; taking more time</li>
                          <li className="text-sky-50/95">• Program/Data file corruption/disappearance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Internet Connections */}
                  <div className="bg-white/5 rounded-xl p-5 border border-sky-400/20">
                    <h3 className="text-sky-200 font-bold lg:text-lg text-base mb-3">Internet Connections:</h3>
                    <p className="text-sky-50/95 lg:text-sm text-xs">
                      There should be no Internet connection on your PC. This restriction is applicable to everything related with Internet – email, chat, surfing etc.
                    </p>
                    <p className="text-sky-50/95 lg:text-sm text-xs mt-2">
                      Further, your PC should not have access to another network – such as Railnet. This makes the network prone to hackers &amp; Viruses. Since the information available on FOIS is confidential, therefore hackers have to be prevented from entering our network. This is the reason for having separate LAN and Routers for FOIS.
                    </p>
                  </div>

                  {/* Important Files (Software) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-sky-400/20">
                    <h3 className="text-sky-200 font-bold lg:text-lg text-base mb-3">Important Files (Software):</h3>
                    <p className="text-sky-50/95 lg:text-sm text-xs mb-3">
                      You work with Windows 98 (Second Edition). A quick restore CD is also available with you, along with Anti-Virus software &amp; RMS. Also windows back up files are normally available in the cab folder.
                    </p>
                    <p className="text-sky-50/95 lg:text-sm text-xs mb-2">
                      Please ensure that none of the following files are tampered.
                    </p>
                    <ul className="ml-4 space-y-1 text-xs mb-3">
                      <li className="text-sky-50/95">• COMMAND.COM</li>
                      <li className="text-sky-50/95">• IO.SYS</li>
                      <li className="text-sky-50/95">• MSDOS.SYS</li>
                    </ul>
                    <p className="text-sky-50/95 lg:text-sm text-xs">
                      Similarly, ensure that RMS file – which resides in Program Folder of your Hard Disk - is never tampered.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Datacom Equipment & Connectivity Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-amber-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-amber-500/30 to-yellow-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-yellow-500/30 transition-all duration-500">
                  <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-amber-100 bg-clip-text text-transparent">
                  Datacom Equipment &amp; Connectivity
                </span>
              </h2>
              <div className="bg-linear-to-br from-amber-500/20 via-yellow-500/15 to-orange-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      In this chapter, we shall deal with some pertinent issues regarding Connectivity. Your PC is connected not only to adjacent PC but also to each &amp; every PC on FOIS. (Each PC on the network, therefore, has a unique identification or Address – known as IP address). This has been achieved by using leased lines, ISDN connections &amp; VSATs for data transfer. This data transfer rate is higher than PRS system. Also, unlike PRS terminal, your terminal is a full-fledged independent machine. The interface is Windows, unlike text type processing in PRS.
                    </p>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed">
                      Your PC is connected to FOIS through a Router, which is a junction between LAN (Local Area Network – connecting all PCs in your premises) &amp; WAN (Wide Area Network – a bigger network which connects all PCs on the system). A Router does this mostly through Channels – which are connected to it using Modems. (A channel has two ends. One end is connected to Router through a Modem in your premises. The other end is again connected through a Modem to the equipment of Channel Provider, at his premises. This can be S&T or BSNL or any other telephone company). Finally, a Router will have connections with your LAN (through Hub/Switch), Modems (one for each channel), ISDN Connections (directly to Router) &amp; VSAT (directly to Router). All this equipment is collectively referred to as Datacom Equipment.
                    </p>
                  </div>

                  {/* Routers */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">Routers:</h3>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      A Router routes the data that you want to send/receive. It is an intelligent device, unlike Hubs &amp; Modems. The data is sent &amp; received in data packets. A LAN works below a Router. Data sharing between various PCs connected on a LAN is automatic &amp; Router has no role. It is only when the data requires being sent/accessed from a remote PC/Server – i.e. accessing WAN terminals - that Router&apos;s role assumes significance. Its IP Number specifies each Router – like all intelligent devices on a network –. This IP Number actually identifies its Ethernet port. A Router may have WAN, LAN, &amp; VOICE port. A port is actually a point where a channel (through Modem) or LAN or ISDN or VSAT connection can connect to Router. On Railways, we have two makes of Routers supplied – Cisco &amp; Motorola.
                    </p>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-amber-50/95">• Router has to remain &quot;ON&quot; at all times.</li>
                      <li className="text-amber-50/95">• Also ensure that the power feed is having a proper earthing arrangement. The earthing norm of 2-3V to be maintained.</li>
                      <li className="text-amber-50/95">• Power supply to Router should be routed through a UPS. Never operate a Router without a UPS.</li>
                      <li className="text-amber-50/95">• Also, wide fluctuations in input voltage can damage the Router.</li>
                      <li className="text-amber-50/95">• There should be a power back up, in addition to Normal Power Supply. This could be through Auxiliary Transformers (AT) in OHE area or through a Diesel Generator Set (DG Set). The change over switch should be accessible easily.</li>
                      <li className="text-amber-50/95">• The Router should be kept in a dust, smoke &amp; moisture free environment. Please use Racks provided to house the Router. Since Router is expensive &amp; sensitive equipment – which does not require daily maintenance – therefore, it is better to leave the equipment undisturbed.</li>
                      <li className="text-amber-50/95">• Essentially provide Air-conditioning for routers.</li>
                      <li className="text-amber-50/95">• A Router, along with Modems should be placed at a location where it is always accessible to the user.</li>
                      <li className="text-amber-50/95">• You actually don&apos;t have to do anything with Router, but just by looking at various displays &amp; reporting the same, you will be participating in troubleshooting. For this reason, you must have Router under your control and not locate it in Test Room.</li>
                      <li className="text-amber-50/95">• Some of the Routers have a specialized Port for ISDN. (Not all Routers have it). Unlike all other terminating leads on a Router, ISDN connection gives a higher voltage (≈ 100 V). Therefore, if ISDN lead is connected to any other port, that port will burn down. Be careful.</li>
                      <li className="text-amber-50/95">• Firm connections of all chords to Router are to be ensured.</li>
                      <li className="text-amber-50/95">• Nothing should be placed on Router.</li>
                      <li className="text-amber-50/95">• Router should not be dragged.</li>
                    </ul>
                  </div>

                  {/* Modems */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">Modems:</h3>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Modem (Modulator/Demodulator) is the device through which a channel connects to your Router (&amp; through it, to your PCs on LAN). It is a very sturdy &amp; maintenance free device. It also requires a dust &amp; smoke free environment. It is normally housed in a Rack along with Router. A lot of information is available on its front display.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      We have two types of Modems on Railway – G703 (at service provider&apos;s premises) &amp; V35 (at our premises, with Router).
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      When the channel connected to a Modem is working properly, you will find both &quot;RD&quot; &amp; &quot;TD&quot; glowing &amp; blinking. If it is not so, then there is some problem with channel.
                    </p>
                    <ul className="space-y-2 ml-4 text-xs mb-3">
                      <li className="text-amber-50/95">• As always, you have to ensure that Modem is always kept &quot;ON&quot;.</li>
                      <li className="text-amber-50/95">• Also ensure that the power feed is having a proper earthing arrangement.</li>
                      <li className="text-amber-50/95">• Never use a metallic brush to clean the surface. Organic solvents are also not permitted.</li>
                    </ul>
                    <div className="bg-white/5 rounded-lg p-3 border border-amber-400/10">
                      <p className="text-amber-200 font-semibold mb-2 text-xs">Since one end of a channel always resides at the channel provider&apos;s premises, therefore you must also know some simple checks to analyse the channel position. Some of these steps you take in tandem with the operator at other end, who is observing his Modem. These steps, which are invoked when the channel is down (i.e. &quot;line protocol&quot; is down), are:</p>
                      <ul className="ml-4 space-y-1 text-xs mt-2">
                        <li className="text-amber-50/95">• Make &quot;LL&quot; (Local Loop) switch &quot;ON&quot;. This gives the status of the Modem &amp; Router. If &quot;TD&quot;, &quot;RD&quot; blinks, then local equipment is OK. If it doesn&apos;t, then the problem is with Modem/Router.</li>
                        <li className="text-amber-50/95">• In the next step, we make &quot;RL&quot; (Remote Loop) switch &quot;ON&quot;. This checks the local lead condition between Modems. However, to get the response of this action, there should be an observer at the other end. If everything is OK, then at the remote end, &quot;RD&quot; &amp; &quot;TD&quot; will blink. Similarly, remote end can also give a &quot;RL&quot;, in which you will get blinking &quot;RD&quot; &amp; &quot;TD&quot; on your Modem, if everything is OK between two Modems.</li>
                        <li className="text-amber-50/95">• If both &quot;RL&quot; &amp; &quot;LL&quot; give OK results, then the problem is beyond the Modem at service provider&apos;s end. You have to take a docket number after registering the fault with service provider (i.e. S&T or BSNL).</li>
                        <li className="text-amber-50/95">• If Modem at the other end is not able to execute &quot;LL&quot; successfully then Modem at that end is defective/improperly connected.</li>
                        <li className="text-amber-50/95">• If all loops show positive result &amp; line protocol is still down, try initialising Modem by switching it off &amp; then on.</li>
                        <li className="text-amber-50/95">• If everything gives OK &amp; data is still not able to pass through then there may be problem with Router. Inform Divisional Control.</li>
                        <li className="text-amber-50/95">• Always ensure that all leads are firmly connected. However, no lead should be checked with power at &quot;ON&quot; position.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Channels */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">Channels:</h3>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      A Channel refers to a leased line dedicated channel for data transmission. You have two types of channels – Railway &amp; BSNL. However, as a user you don&apos;t see a difference. Though technically a Channel refers to a leased line channel, in this section we will also cover ISDN &amp; VSAT in it. A channel connects your system through Modems &amp; Routers. In addition to leased channels, you also have ISDN connections &amp; VSAT (Very Small Aperture Terminal) connections to enhance your Connectivity. Connectivity refers to the immediate links that your PCs on LAN (at a Node) has with neighbouring nodes. It has been planned that ideally each node has a minimum of two links, each giving a different route to your data – so that data transmission can continue even if one link is down. This is technically known as Route Diversity.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      Unless a Channel is available, data will not transmit. If your node is connected through two channels &amp; one of them is down, you will not know the difference. However, with one channel down, you are in a very precarious position as data entry will stop as soon as the second channel even flickers. It is therefore important for you to take active interest in knowing the state of a channel. This can be done through &quot;pinging&quot;. Pinging is the name given to sending &amp; receiving a test data packet from one computer to another remote PC/Router or to any intelligent device. However, you can ping only if you know the (IP) address of remote PC or Router. These are listed in Annexure I. You can ping by following command:
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-amber-400/10 mb-3">
                      <p className="text-amber-50/95 lg:text-sm text-xs font-mono text-center">
                        Start → Run → Ping [IP Address of Remote Router] → OK
                      </p>
                    </div>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      Only an entry like &quot;Request Timed Out&quot; or &quot;ttl expired in transit&quot; indicates failure.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-amber-400/10 mb-3">
                      <p className="text-amber-200 font-semibold mb-2 text-xs">VSAT connections can also be pinged. Some other important points for VSATs are as follows:</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-amber-50/95">• The data is transferred directly to CRIS SERVER . This is a sturdy system, which once stabilized, works trouble-freely.</li>
                        <li className="text-amber-50/95">• The earthing resistance should be less than 1 ohm.</li>
                        <li className="text-amber-50/95">• Neutral to earth leakage should be 2V.</li>
                        <li className="text-amber-50/95">• It should never work without UPS&amp;CVT</li>
                        <li className="text-amber-50/95">• Air-conditioning is a must.</li>
                        <li className="text-amber-50/95">• The antennae base structure should be firmly fixed and clamped. At the time of installation it should be ensured that ODU is having its protective laminated cover(to protect it from water and dust) OR at least the rubber cap of Radio Frequency (RF) unit is in place.</li>
                        <li className="text-amber-50/95">• There should be one ladder for antennae access.</li>
                        <li className="text-amber-50/95">• There should be a routine of checking the equipments. It should be ensured that rubber cap of RF unit is in place and the cord going to indoor unit is firmly in place.</li>
                      </ul>
                    </div>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      Similarly, ISDN connections can directly pass the data, bypassing Router (or more accurately, bypassing Router at that node but connecting to a remote Router). Only in such ISDN connections where Routers are not provided, you will not know the status of channel through pinging.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      Please ensure that ISDN connections are always with power &quot;ON&quot;. Also ensure that ISDN connections are not STD barred.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      Though it is not possible for you to know as through which particular channel your PC is transferring data, the same is always very accurately known to Router. Depending on the channel availability, it keeps on defining the route dynamically. Thus, if ISDN is available &amp; all other channels are down, Router shall use ISDN to transmit data. (ISDN connection can also be assigned a higher priority by configuring the Router). As soon as any of the other channels becomes stable for a predefined time interval, it again resumes data transfer through that channel, shutting off ISDN. This is what is known as programming of Router.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs">
                      ISDN is a secondary channel and since its usage is very expensive so it should be used very judiciously.
                    </p>
                  </div>

                  {/* LAN */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">LAN:</h3>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      LAN connects all your PCs available at a location. However, it need not be confined to a building. It can be extended to a few kilometers (up to 6 km) also. Such extension is normally through a LAN Extender. Even if PCs are connected through LAN Extender, there is no role of Router in sharing of data among these PCs.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      LAN is achieved by using the network card available on your PC. An identical work group is to be defined on each PC on the LAN so that they are &quot;visible&quot; to all other PCs.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      While defining Network Properties on your PC, make sure that only one Gateway (i.e. IP address of your Router) is defined. Disable DNS.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      A PC may be visible on a LAN. However, other PCs can use only those files, folders, drives etc of that PC which the owner of that PC has decided to &quot;Share&quot;. To share a file, single click on the file name, followed by right click. Select &quot;Properties&quot;, followed by &quot;Sharing&quot; tab. Share to the extent you desire. You can decide to allow other users to even write on your Hard disk. However, you cannot differentiate between your co-users on LAN &amp; other users on WAN!
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      You can also share some scarce resources – such as Printers – through this scheme.
                    </p>
                    <p className="text-amber-50/95 lg:text-sm text-xs mb-3">
                      LAN wiring consists of two parts – first, a CAT5 structured cabling from Router/Hub to I/O box (a 3&quot; x 3&quot; x 2&quot; white box) &amp; second a flexible cable from I/O box to your PC. Please ensure that all PCs at a location are connected on LAN.
                    </p>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li className="text-amber-50/95">• Ensure that CAT5 cable is mounted on wall properly &amp; is not hanging loosely.</li>
                      <li className="text-amber-50/95">• Ensure that flexible chord is not stretched. Also ensure that I/O box is located close to your PC.</li>
                      <li className="text-amber-50/95">• Hubs/Switches are devices for connecting additional PCs to Router&apos;s LAN port. Please ensure that these are properly mounted on wall.</li>
                    </ul>
                  </div>

                  {/* Uptime */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">Uptime:</h3>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      It refers to the time when a node or a channel remains available for data entry. As explained earlier, it is of utmost importance to know the status of availability of equipment for user.
                    </p>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-amber-50/95">• You should keep records both of Channel Uptime &amp; Node Uptime. It is easier to maintain record of Node uptime. Simply record in a register the daily position of availability of a node. (Along with the reasons of failure for doing analysis.) It is very essential to keep check on the health of secondary channel when primary channel is up.</li>
                      <li className="text-amber-50/95">• Give summary position of the entire day to your Zonal OCC at odd hours.</li>
                      <li className="text-amber-50/95">• For finding the channel uptime, you have to schedule task of pinging, even if your Node is up. Ideally, every 4 hours, you should ping to adjacent Routers &amp; note the result. This, compiled over entire day, will give channel availability of each channel at your Node. Record this also in a register, giving message to Zonal OCC through Messaging Feature of RMS.</li>
                      <li className="text-amber-50/95">• There should a fixed regime of reporting of failure to be in place so that in case of a failure trouble shooting is fast.</li>
                      <li className="text-amber-50/95">• A list of phone numbers of service provider should be readily available both at div headquarters and zonal headquarters.</li>
                      <li className="text-amber-50/95">• You also have to keep tab on the time taken by various service providers to attend to your reports of breakdowns of Routers, Modems, UPS, Printers, PCs etc. This should be in a separate register, which is not to be reported daily to your headquarters</li>
                    </ul>
                  </div>

                  {/* Other Applications */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">Other Applications:</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-amber-50/95">• Do not use your FOIS network for any other regular data transfer programs. This can cause virus threats, slowing down of application, vitiate OCC tasks &amp; mis-programming of Routers.</li>
                      <li className="text-amber-50/95">• Within LAN, you can share information occasionally. However, running regular &amp; heavy program may reduce the availability of system for data entry to FOIS. Please don&apos;t run any heavy or regular programs on your LAN.</li>
                      <li className="text-amber-50/95">• Unless you procure genuine copies of software that you intend to use on a single PC, please don&apos;t load it. In any case, this should never be done on a &quot;Reporting Terminal&quot;.</li>
                    </ul>
                  </div>

                  {/* Other Networks */}
                  <div className="bg-white/5 rounded-xl p-5 border border-amber-400/20">
                    <h3 className="text-amber-200 font-bold lg:text-lg text-base mb-3">Other Networks:</h3>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Your PC should not have access to another network – such as Rail net. This makes the network prone to hackers &amp; Viruses. Since the information available on FOIS is confidential, therefore hackers have to be prevented from entering our network. This is the reason for having separate LAN and Routers for FOIS.
                    </p>
                    <p className="text-amber-50/95 lg:text-base text-sm leading-relaxed">
                      Do not allow any Internet connectivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SYSTEM ADMINISTRATION Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-lime-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-lime-500/30 to-green-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-green-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-lime-100 bg-clip-text text-transparent">
                  SYSTEM ADMINISTRATION
                </span>
              </h2>
              <div className="bg-linear-to-br from-lime-500/20 via-green-500/15 to-emerald-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Operational Control Center (OCC) */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-xl text-lg mb-3">Operational Control Center (OCC)</h3>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      For successful implementation of FOIS over Indian Railways each zone shall have to undertake following responsibilities towards FOIS.
                    </p>
                    <ul className="ml-4 space-y-1 text-xs mb-4">
                      <li className="text-lime-50/95">• Real time updating of system data</li>
                      <li className="text-lime-50/95">• Management of Network</li>
                      <li className="text-lime-50/95">• Maintenance of equipment – PCs, Printers, UPS, RAS, LAN extender, Routers, Switches, Hubs and associated accessories</li>
                      <li className="text-lime-50/95">• Replacement of manual information system</li>
                      <li className="text-lime-50/95">• In service training</li>
                    </ul>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      To achieve this each zone should deploy personnel to set up an Operational Control Centre (sufficient work charged posts have been provided and adequate staff has been trained by CRIS).
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      OCC will be the empowered body for prescribing and enforcing working procedures. It will also monitor performance and take appropriate (pre-emptive and remedial) measures to ensure cent percent availability of system.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed">
                      OCC shall be manned round the clock to operate NMS and to provide proactive support to field reporting units (help desk) in every respect. It will have additional functionaries during day shift for management support for maintenance, analysis of system efficacy, up gradation of procedures, and escalation as may be required.
                    </p>
                  </div>

                  {/* Real time updating of system data */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">Real time updating of system data</h3>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Procedures, roles and responsibilities should be prescribed to ensure that data is entered into the system as soon as the physical event has occurred but definitely before the next event takes place these delays can be monitored with help of Transaction log (Query Operation Control Exception task Transaction log)
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Procedures should be location specific and further device specific i.e.functionary specific. Specific office orders to be issued covering every possible eventuality on a given territory with the sole objective of not allowing any data element to escape.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Participation of train staff to deliver data though train documents for both normal and abnormal working will be prescribed as local procedures. In case, when abnormal working has been introduced on account of failures, OCC to co-ordinate for proxy reporting and restoration of normal working.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Each division should nominate a Sr. supervisor who shall be responsible for timely update over his division and accountable to OCC. Reporting terminals have been provided at divisional and sub control offices, in yard locations, (terminals are provided at the place where all the information required to be input is available). Control Office will report for non-device locations. The entire gamut of reporting to the system is to be engineered around these terminals, which must be manned round the clock.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Procedures should also be prescribed for reporting in case any failure affects data entry from the nominated device beyond two hours.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Each division shall have a predetermined reporting regime in case of failure. In such cases data should be entered from a pre-defined alternative device at that location/site or from the reporting devices at another location by following the mechanism of proxy reporting. Proxy reporting will be possible through the permission of zonal OCC who will enable the nominated device to report for the failed location/site.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-lime-400/10">
                      <p className="text-lime-200 font-semibold mb-2 text-xs">Proxy reporting regime can be devised on the following lines:</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-lime-50/95">a) If at a location, terminal/s have failed, reporting will be donethrough remaining terminals at that location/site.</li>
                        <li className="text-lime-50/95">b) At a location there may be several sites. If a particular site has failed, proxy reporting will be done through a nominated site.</li>
                        <li className="text-lime-50/95">c) In case of failure at yard - Divisional Control or sub control office will report</li>
                        <li className="text-lime-50/95">d) In case of failure at Division - Zonal OCC will report</li>
                        <li className="text-lime-50/95">e) In case of failure of complete Zone – Disaster management will come in use.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Management of Network */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">Management of Network:</h3>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Having route/media diversity and adequate spare equipment has provided sufficient redundancy. It should always be ensured that redundancies are always in working order. Monitoring the functioning of Network with the help of NMS software installed is also the function of zonal OCC that has to be manned round the clock on a continuous basis. It will include –
                    </p>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-lime-50/95">• Ensuring that primary and secondary data and voice channels are in working condition.</li>
                      <li className="text-lime-50/95">• If your node is connected through two channels &amp; one of them is down, you will not know the difference. However, with one channel down, you are in a very precarious position, as data entry will stop as soon as the second channel even flickers. It is therefore important for you to take active interest in knowing the state of a channel. This can be done through &quot;pinging&quot;. Pinging is the name given to sending &amp; receiving a test data packet from one computer to another remote PC/Router or to any intelligent device. However, you can ping only if you know the (IP) address of remote PC or Router. List of IP addresses of your zone should be available with OCC. You can ping by following command:</li>
                    </ul>
                    <div className="bg-white/5 rounded-lg p-3 border border-lime-400/10 my-3">
                      <p className="text-lime-50/95 lg:text-sm text-xs font-mono text-center">
                        Start → Run → Ping [IP Address of Device] → OK
                      </p>
                    </div>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-lime-50/95">• For finding the channel uptime, you have to schedule task of pinging, even if your Node is up. Ideally, every 4 hours, you should ping to adjacent Routers &amp; note the result. This, compiled over entire day, will give channel availability of each channel at your Node.</li>
                      <li className="text-lime-50/95">• Registering complaints for channels that are not working and following up for rectification. Liaison with both BSNL and railways for the above.</li>
                      <li className="text-lime-50/95">• Routers have been configured to route data on a predetermined priority. Rerouting and load balancing will have to be done through OSPF (Open Shortest Pathfinder) on the NMS and need basis.</li>
                      <li className="text-lime-50/95">• Analysis of network failures for identifying problematic links for up gradation.</li>
                      <li className="text-lime-50/95">• Monitoring payment processes of rentals of communication channels.</li>
                      <li className="text-lime-50/95">• Trouble shooting for other equipment failures in association with central OCC and ordering its replacement from the spares.</li>
                    </ul>
                  </div>

                  {/* Maintenance of equipment */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">Maintenance of equipment:</h3>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Regarding maintenance of equipments, OCC shall keep a record of hardware components provided at each locations/sites and their failures at zonal headquarters and its division. Repairs will be through maintenance contracts.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      A PC breakdown (either Monitor or CPU or UPS) is crucial as it affects data entry. However, you must first make sure that there is no such problem, which cannot be fixed locally. Please check for power chord, operating system &amp; RMS program. (A step-by-step procedure is given in Annexure – III. If all of these are there &amp; still your PC does not respond, bring it to the knowledge of Divisional HQ. At each site you have one extra PC, complete in all respects, to take care of such eventuality. Replace the defective PC with this stand-by. Finally, report the failure to concerned vendor or as prescribed by the maintenance practice of that div/zone . Addresses of vendors should be readily available.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      OCC should prescribe spare maintenance practices on their respective zones.
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-lime-400/10 mb-3">
                      <p className="text-lime-200 font-semibold mb-2 text-xs">The following points should be kept in mind before prescribing any spare maintenance practice: -</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li className="text-lime-50/95">• Uptime requirement of location</li>
                        <li className="text-lime-50/95">• Accessibility of vendor from a location</li>
                        <li className="text-lime-50/95">• Sourcing of spares may be done from a central point ideally a big city were vendor services are available readily.</li>
                      </ul>
                    </div>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed">
                      In house skills would be confined to troubleshooting and to replacement of equipment out of spares. NMS software also helps in troubleshooting. Vendors with whom AMC has been drawn and entered can then repair defective pieces.
                    </p>
                  </div>

                  {/* Replacement of manual Information System */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">Replacement of manual Information System:</h3>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Suspension of parallel manual system will be the biggest challenge. It has to be gradual. First of all it will have to be explained to operations managers that value lies in using application in an interactive mode. Dependence on fixed time reports should be minimized. Fixed time reports should be more in the nature of exception reports to reflect failures.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      It would be prudent to prioritize this effort in the following order.
                    </p>
                    <ul className="ml-4 space-y-1 text-xs mb-3">
                      <li className="text-lime-50/95">• Interchange</li>
                      <li className="text-lime-50/95">• Stock and Demand</li>
                      <li className="text-lime-50/95">c) Loco inventory</li>
                    </ul>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      OCC will in consultation with COM prescribe a schedule for identified manual reports and bring systems stability in terms of data capturing in those areas first.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      OCC will also evolve a mechanism to analyze systems usage at every step and match it with expected returns. Returns can be in terms of savings in efforts, accuracy of information, avoidance of disputes, less correspondences and cross references, more time for planning operations, resultant customers satisfaction, enhancement in business achievements and productivity (redeployment achieved, overtime curtailed), reduction in work pressure amongst staff, less diversions etc.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed">
                      From the analysis of application by OCC, it is expected that items for up gradation of application further will get identified. However before undertaking development OCC will weigh every new requirement for its return justifies it and then only forwards it to agencies responsible for application development.
                    </p>
                  </div>

                  {/* In service training */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">In service training:</h3>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      It is very essential that concurrently a programme be made by each railway to disseminate the learning to rest of the cadre. The training should be institutionalized taking the help of zonal training schools. The components of training will comprise exposure to revised ground procedures for data collection and maintenance, reporting tasks of the application and OCC functions.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The participation of all those in the field who are associated with operations taken together will only ensure sustained upkeep and usage of the system. The FOIS training should be made a part of the induction and refreshers courses of TNC, GC, SM, TXR, Trains, Power, C&amp;W and Commercial Controllers, Guards, and Loco pilots.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      There will also be an element. This training is essentially for understanding of procedures and application tasks.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      In case of those who have to man OCC and perform its functions an extended module will be prescribed in addition to training in procedures and application tasks.
                    </p>
                    <p className="text-lime-50/95 lg:text-base text-sm leading-relaxed">
                      OCC of each railway will nominate trainers from their existing cadre strength who in turn will be trained by CRIS to establish training processes on their railways and train others. OCC will thereafter monitor progress of training on their railways and ensure that regularity is maintained.
                    </p>
                  </div>

                  {/* Miscellaneous Issues */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">Miscellaneous Issues</h3>
                    <div className="space-y-4">
                      {/* Printing Reports */}
                      <div className="bg-white/5 rounded-lg p-3 border border-lime-400/10">
                        <h4 className="text-lime-200 font-semibold mb-2 text-sm">Printing Reports:</h4>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li className="text-lime-50/95">• All reports, which are available on display, can also be printed. You should decide as to which reports are most useful &amp; which require printing.</li>
                          <li className="text-lime-50/95">• You can print either the view shown (through F7) or you can choose which columns &amp; rows you want (by clicking them) &amp; then print your selection by pressing F11.</li>
                          <li className="text-lime-50/95">• For printing, you should have a Dot Matrix Printer attached either to Network or attached to a PC &amp; &quot;Shared&quot;.</li>
                          <li className="text-lime-50/95">• You must plan in advance for your requirement of paper &amp; ribbons.</li>
                        </ul>
                      </div>

                      {/* Messaging Feature */}
                      <div className="bg-white/5 rounded-lg p-3 border border-lime-400/10">
                        <h4 className="text-lime-200 font-semibold mb-2 text-sm">Messaging Feature:</h4>
                        <p className="text-lime-50/95 lg:text-sm text-xs">
                          This is a very powerful communication tool that should be used for meaningful works only. Don&apos;t allow it to become a general-purpose e-mail feature. Since the addressee is not a filter, the entire list of messages for a station increases exponentially. However, use it freely &amp; liberally for communicating messages related to freight operations, FOIS messages &amp; emergent non-personal messages.
                        </p>
                      </div>

                      {/* Passwords */}
                      <div className="bg-white/5 rounded-lg p-3 border border-lime-400/10">
                        <h4 className="text-lime-200 font-semibold mb-2 text-sm">Passwords:</h4>
                        <p className="text-lime-50/95 lg:text-sm text-xs mb-2">
                          The RMS package has a concept of passwords. For each user, who enters data, such passwords can be defined. Once a password is given by CRIS, you can change your password on your own by going to Access &gt; Password. As a supervisor, you must also ensure that anyone who is going away from FOIS work (on transfer etc) should be struck off from user list &amp; his password is disabled by CRIS.
                        </p>
                        <p className="text-lime-50/95 lg:text-sm text-xs mb-2">
                          Assigning passwords gives responsibility to user. This password helps in keeping the security trail i.e. the reporting done carry the id of the user.
                        </p>
                        <p className="text-lime-50/95 lg:text-sm text-xs">
                          Password management task is being passed on the zones so that they can manage password on their own without getting CRIS involved. Besides RMS password there is Windows password, which you use at the time of logging in your PC, if you are using this password then all the users of that device should know it.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Reports available in RMS module */}
                  <div className="bg-white/5 rounded-xl p-5 border border-lime-400/20">
                    <h3 className="text-lime-200 font-bold lg:text-lg text-base mb-3">Reports available in RMS module:</h3>
                    <div className="bg-white/5 rounded-lg p-4 border border-lime-400/10">
                      <h4 className="text-lime-200 font-semibold mb-3 text-base">CONFERENCE SET</h4>
                      <div className="space-y-3">
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Interchange forecast summary:</span> gives desktop summarized view of forecast &amp; interchange of current date. It is updated by I/C forecast and arr. /dep reporting task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Running interchange:</span> gives detailed view of forecast &amp; interchange and also gives running position of trains forecasted. It is updated by I/C forecast and arr. /dep.reporting task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Current interchange:</span> gives summary information of interchange with break-up of empties and loaded stock, stock (4w) interchanged. It also provides summary of jumbo and box rakes interchange. It is updated by I/C forecast and arr. /dep. reporting task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Likely shortfall:</span> gives summarized view of interchange along with trains likely to shortfall along with the reasons of their shortfall. It is updated by I/C forecast and arr. /dep. reporting and I/C shortfall reporting task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Train interchange shortfall:</span> gives shortfall /excess of yesterday interchange along with reason of shortfall in despatch. It is updated by I/C forecast and arr. /dep. report task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Stream wise pipe line:</span> provides pipeline between two nominated stations and also pipeline for a via. It is updated by Load planning, Train ordering, arrival / departure reporting tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Loads on run:</span> this is an unstructured query for all loads on run in the system. There are different filters available for viewing loads according to users requirements. It is updated by Load planning, Train ordering, arrival / departure reporting tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Traffic flow:</span> gives information regarding likely traffic flow terchange points upto 3 days in advance. It is updated by Load planning, Train ordering, arrival / departure reporting tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Outward train railway wise:</span> gives division wise destination railway wise view of all outward trains on a zone. Filters for rake types, commodity are also available. It is updated by Load planning, arrival / departure reporting tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Terminal position:</span> displays total rakes at the terminals as well as the insight for those terminals. On selecting a cell relevant details rake wise are displayed. It is updated by arrival/departure reporting, I/w no. taking, Rake placement/rel tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Terminal performance:</span> gives terminal performance for a selected period. It is updated by arrival / departure reporting, I/W no. taking, Rake placement /rel tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Terminal history:</span> gives details of individual rakes handled at the terminal for a selected period. It is updated by arrival / departure reporting, I/W no. taking, Rake placement /rel tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Terminal performance and running position:</span> gives status of load at terminal along with its insight. It is updated by arrival /departure reporting, I/W no. asking, rake placement/rel tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">ODR wise rake outstanding (details):</span> gives ODR wise outstanding demand details. It is updated by demand reporting task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Rake performance:</span> gives performance of rakes for the period they were in the division /zone along with total kms ran in the division. It is updated by arrival / departure reporting, rake Formation/dissipation, I/W no taking, Rake placement /rel tasks</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Rake position:</span> gives break up of rakes over a division/zone Under following heads:U/R,U/L,O/W,I/W and Empty. It is updated by arrival / departure reporting, I/W no. taking, Rake placement /rel tasks</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Rakeintegrity:</span> gives details of all attachment/detachment/sick reporting on a individual rake on the selected zone. The examination &amp; dissipation if done) is also shown. Further details can be seen after selecting a cell and pressing enter. It is updated by all rake reporting, consist reporting, and TXR examination</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Current traffic flow:</span> holding of each railway is shown in terms of I/W,O/W and empties. the flows between the railways are shown by arrows for both loaded &amp; empty rakes. Details of individual rakes can be seen on selecting the desired cell and pressing enter. It is updated by all rake &amp; load reporting</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Terminal management planning:</span> for a selected group rake type, division wise, outstanding rake demands, rakes on hand and pipeline of terminating loads are displayed. On selection of cell &amp; pressing enter, details relevant to that cell are displayed. It is updated by Demand, rake placement/rel and arrival/departure task.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">All stock:</span> current rake holding of zone is shown division wise, specifying loaded empties, at terminal, cross traffic (through), originating for foreign railway, local and terminating received from other Railways. Facility to see details of individual rakes on selecting any cell is also available. other stock icon in the conference set run on the same query BCN,BCX, CRT,BOXN,BOX,SHERPA SHERPAN, CONTAINER,TANKS). It is updated by load planning, consist reporting, Placement /release tasks.</p>
                        </div>
                        <div className="bg-white/5 rounded p-2 border border-lime-400/5">
                          <p className="text-lime-50/95 lg:text-sm text-xs"><span className="font-semibold text-lime-200">Loco position:</span> this query displays all the locos for the selected Division, location wise. A type wise summary is also displayed. It is updated by loco reporting, arrival/departure, loco attachment/detachment task.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MANAGERIAL REPORT Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <BarChart3 className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  MANAGERIAL REPORT
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Interchange */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-4">Interchange</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Yesterday</h4>
                        <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-purple-200">Yesterday Interchange:</span> This query displays the information of the trains actually interchanged in terms of the Loads and Light Engines at the divisional interchange point., The shortfall and excess columns display direction wise summary of loads that were short or excess vis a vis the forecast for the previous day. Receipts and dispatches are shown separately for each of the I/C point.
                        </p>
                        <p className="text-purple-50/95 lg:text-xs text-xs italic">
                          It is updated by the Interchange forecast and Arrival/Departure Reporting tasks.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Current</h4>
                        <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-purple-200">Interchange monitoring:</span> this query gives view of current I/C, giving the Status of forecasted trains and also the trains, which are not forecasted, but are likely to go in the I/C.
                        </p>
                        <p className="text-purple-50/95 lg:text-xs text-xs italic">
                          It is updated by train forecast, arrival/dep tasks.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rake & Terminal Position */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-4">Rake &amp; Terminal Position</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Yesterday</h4>
                        <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-purple-200">24:00 Hrs Terminal Position:</span> gives status of load at terminal alongith its insight at 24 hrs.
                        </p>
                        <p className="text-purple-50/95 lg:text-xs text-xs italic">
                          It is updated by arrival/dep reporting. I/W no.taking, Rake placement /rel tasks
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Current</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">Optimised movement of rakes:</span> This query displays movement of rakes originating from the logged in zone and available in the database till the queried date. It shows empty and loaded runs of the rakes and the kms clocked by them and time taken for a run. It has the facility for displaying the detention details of the rake .Filters are provided to view details of specific commodities and stock types.
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              This information is updated by the arrival/departure, rake formation /dissipation, placements/releasereporting tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">CC rakes BPC Position:</span> this query gives running details of close circuit rakes which are running in the system on the logged in date for the logged in Zone/div.or selected BPC station of that zone. Option is available for selecting a rake type also if the rakes of a specific rake type are to be seen
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              It is updated by BPC details, train arr/drake formation/dissipation tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">Movement of a rake:</span> It shows empty and loaded runs of the rake on entering the ID of the rake the kms clocked by them and time taken for a run. It has the facility for displaying the detention details of the rake .Filters are provided to view details of specific commodities and stock types.
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              This information is updated by the arrival/departure, rake formation/dissipation, placements/releasereporting tasks
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Demand & Loading */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-4">Demand &amp; Loading</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Yesterday</h4>
                        <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-purple-200">Commodity wise loading and outstanding:</span> This query displays loading information for a Division/zone against particular station in terms of the no. of rakes 4w, piece meal, 4w, and the total tonnage and freight. The user can use options for (a specific consignee or all consignees or excluding a consignee) and for a (specific commodity, or all commodities, or excluding a commodity).These options are mutually exclusive and can be used in any combination.
                        </p>
                        <p className="text-purple-50/95 lg:text-xs text-xs italic">
                          Load Planning, Consist Reporting, Loading tasks, updates this query.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Yesterday Loading</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">Terminal wise loading of rake demand:</span> This query gives the terminal wise rake loading performance of a zone/div. along with demand details and handling activity details. views of commodity wise and destination rly wise summary are also available. Option is also available for viewing terminal wise unloading details in term of balances.
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              Arrival/departure, rake formation /dissipation, placements/release-reporting tasks updates this query.
                            </p>
                          </div>
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">Loading performance:</span> This query displays loading information for a Division/zone against particular station in terms of the no. of rakes 4w, piece meal, 4w, and the total tonnage and freight. The user can use options for (a specific consignee or all consignees or excluding a consignee) and for a (specific commodity, or all commodities, or excluding a commodity).These options are mutually exclusive and can be used in any combination. In this query there is submenu for O/S loading division wise and commodity wise loading and o/s.
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              Demand reporting and placement/rel. tasks, update this query.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-purple-400/10">
                        <h4 className="text-purple-200 font-semibold mb-2 text-sm">Current</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">Type wise stock position:</span> this query gives break up of all rake types or selected rake type over the zone (in terms of rake/pm).on selecting a row and pressing enter Details of the highlighted wagon type are shown.
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              This query is updated by arrival/departure, rake formation, dissipation, and consist reporting tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-purple-200">Piecemeal outstanding summary:</span> gives destination wise details of piecemeal o/s over a zone with ODR
                            </p>
                            <p className="text-purple-50/95 lg:text-xs text-xs italic">
                              Demand reporting and Piecemeal placement /release tasks update this query.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Loco */}
                  <div className="bg-white/5 rounded-xl p-5 border border-purple-400/20">
                    <h3 className="text-purple-200 font-bold lg:text-lg text-base mb-3">Loco</h3>
                    <p className="text-purple-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-purple-200">Power interchange:</span> gives summary of Zonal loco I/C and also a summary of holding of locos type wise over a zone.
                    </p>
                    <p className="text-purple-50/95 lg:text-xs text-xs italic">
                      Arrival/departure and loco reporting tasks update this query.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* OPERATIONS CONTROL Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-violet-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-violet-500/30 transition-all duration-500">
                  <Target className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  OPERATIONS CONTROL
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-violet-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* Interchange */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-4">Interchange</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                        <h4 className="text-indigo-200 font-semibold mb-2 text-sm">Yesterday</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Train wise interchange:</span> This query displays I/C load wise of a division I/C point wise for specified date. View is available for specified I/C point and direction. The details of loads, like load name, L/E, type, loco, unit, I/C date/time for handed over and taken over is listed separately.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This information is updated by load planning, arrival/ departure tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Load interchange analysis:</span> This query displays I/C load wise of a division I/C point wise for specified period. View is available for specified I/C point and direction. The details of loads, like load name, L/E, type, loco, unit, I/C date/time for handed over and taken over is listed separately . There are filters provided for originating zone/div/station and terminating zone/div/ station so that various analysis can be done on I./C data.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This information is updated by the arrival/departure and I/C reporting tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Stock interchange load wise:</span> This query displays summarized information of receipts and dispatches of stock at divisional level for a specific type of stock. Loaded stock classified in terms of through and terminating. Empty stock is shown separately. This query displays and distribute output fields like No./units for each classification with total(No./Unit), for both receipts and for every I/C point.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This information is updated by the arrival/departure and I/C reporting tasks.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                        <h4 className="text-indigo-200 font-semibold mb-2 text-sm">Current</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Stock forecast:</span> The query displays summarized information of receipts and dispatches of stock at Divisional level for a specific type of stock. Loaded stock classified in terms of through And terminating. Empty stock is shown separately. This query displays output fields like No./Unit, for both receipts and dispatches for every I/C point.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              The train I/C forecast reporting task updates this information.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Stock interchange (summary):</span> An online query which gives forecast and actual trains ran till the time of viewing the report, along with stock interchanged in terms of L/E in 4-w units I/C point wise. Summary of I/C is also given rly wise.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              I/C forecast and arrival /dep update this query.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* LOAD & PIPELINE */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-4">LOAD &amp; PIPELINE</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                        <h4 className="text-indigo-200 font-semibold mb-2 text-sm">Yesterday</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Change in load destination:</span> The query gives information on the loads for loaded/empty/mixed/All within Zone/Division with revised change of destination and the station where the change was effected with the message No. and the functionary who authorized the change of destination. The reports can be obtained selectively for a specific commodity, for consignee or for a specific destination.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This information is updated by the change in Load destination tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Stabled loads at 24.00 hrs:</span> This query gives information on the loads for both loaded/empty stabled with date and time, reason as at odd hrs.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This information is updated by load planning arr/dep and train stabling tasks.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                        <h4 className="text-indigo-200 font-semibold mb-2 text-sm">Current</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Type wise Terminating load in sight:</span> The query gives information of terminating loads for a station/division. The loads details along with the current location and status with the expected arr/dep time and date at the I/C station and destination. Are displayed.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This query is updated from Load Planning, train ordering, Train Arrival/Departure tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Outgoing loads:</span> gives details of loads which have originated from the logged zone/div /station. It also gives the I/C time of that load and also its expected time at its destination.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              Load planning, placement /release, arrival /dep, tasks update this query.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Running position optimized destination wise:</span> This query displays rakes loaded from a zone and are running on that date. It gives loading details and I/C date and time, its current status. filters are provided for stock type commodity and unloading zone.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              Load planning, placement /release, arrival /dep, tasks update this query.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* STOCK */}
                  <div className="bg-white/5 rounded-xl p-5 border border-indigo-400/20">
                    <h3 className="text-indigo-200 font-bold lg:text-lg text-base mb-4">STOCK</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                        <h4 className="text-indigo-200 font-semibold mb-2 text-sm">Yesterday</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Rake performance:</span> gives performance of rakes for the period they were in the division /zone along with total kms ran in the division.(query picks rake from their date of exit from zone/div)
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              It is updated by arrival / dep reporting, rake Formation/dissipation,I/W no. taking, Rake placement /rel tasks
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Stock holding:</span> The query displays yesterday position of the total holding for the zonefor all Wagon types, loaded and empty, separately for piecemeal, Rakes and DVS Stock. Details of a stock can be seen by selecting that stock type by clicking and pressing enter.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This query is updated by Inward No. taking, departure, consist reporting, rake formation/dissipation,and attachment/ detachment of wagons enroute reporting tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Rakes at 24 hours:</span> The query displays information of rakes at 24 hrs on yesterday. Rakes group type wise or rake type wise for a specific commodity included, or commodity excluded, or all types and for a specific consignee included, or a specific consignee excluded or all consignees for a zone.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This query is updated by Inward No. taking, Arrival/departure, consist reporting, rake formation/dissipation and placement/release tasks
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-indigo-400/10">
                        <h4 className="text-indigo-200 font-semibold mb-2 text-sm">Current</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Rake Position:</span> The query displays information of rakes on real-time basis. Rakes group type wise or rake type wise for a specific commodity included, or commodity excluded, or all types and for a specific consignee included, or a specific consignee excluded or all consignees for a zone.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              Inward No. taking, Arrival/departure, consist reporting, rake formation/dissipation and placement/release tasks
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">Destination Rly Wise Outstanding:</span> displays demand details of a zone, division wise, clubbed on destination railway basis. Gives details of commodity and no. of units indented .filters are provided for viewing rake/piecemeal wise demands, commodity and consignor can be selected.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              This query is updated by demand and placement /release tasks.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">I/W traffic:</span> shows handling details of inward loads of a specified terminal on current date basis.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              Arrival/departure and placement/release tasks update this query.
                            </p>
                          </div>
                          <div>
                            <p className="text-indigo-50/95 lg:text-sm text-xs mb-2">
                              <span className="font-semibold text-indigo-200">O/W traffic:</span> shows handling details of outward loads of a specified terminal on current date basis.
                            </p>
                            <p className="text-indigo-50/95 lg:text-xs text-xs italic">
                              Arrival/departure and placement/release tasks update this query.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* MISCELLANEOUS Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  MISCELLANEOUS
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Load Wise Route:</span> This query gives the complete route details for the selected load (selection is made by entering the load name ) like load from-to, load direction, load type, units, stn, Arrl/Dep. Date/Time, Inward Dren, Outward Direction of the selected load.
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by the load planning Train ordering, arrival/departure tasks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Load Wise Train Details:</span> This query gives the details of all the trains ordered for a particular load&apos;s journey(selection is made by entering the load name ). The load is recalled by giving departure time from the originating station details of each train leg are also available including the Loco details. The train details show all the stations en route and the reporting, if any, made during that run.
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by the Train ordering and arrival/departure tasks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Train Schedule:</span> This query shows all train schedules in the system between any pair of stations. The details show all the stations in the train schedule, including indicators for zonal, divisional and sectional interchange.
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by static database in the system.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Route display:</span> This query shows the default load route between any pair of stations. The inward and outward details are shown against each interchange station on the route.
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by static database in the system.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Invoice details:</span> gives details of invoices made generated in a division/station for a period. This query gives RR details and freight and weight of loading done.
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by demand registration, placement/release and RR reporting tasks.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Station Help:</span> This Query provides help regarding station code or name/. In case only part of either station name or station code are known, the system shows all stations in the database having the input name as a part.
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by static database in the system.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-teal-400/10">
                    <p className="text-teal-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-teal-200">Booking profile:</span> this query gives the booking profile of the selected station as given in the Alphabetical List of IRCA
                    </p>
                    <p className="text-teal-50/95 lg:text-xs text-xs italic">
                      This information is updated by static database in the system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* EXCEPTION TASKS Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <CheckCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  EXCEPTION TASKS
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="bg-white/5 rounded-xl p-5 border border-red-400/20">
                  <p className="text-red-50/95 lg:text-sm text-xs mb-2">
                    <span className="font-semibold text-red-200">Transaction log:</span> this task is provided to monitor the delay in reporting Taking place. This can be viewed for a date and for a division/station. There are filters to view train and rake reporting tasks separately
                  </p>
                  <p className="text-red-50/95 lg:text-xs text-xs italic">
                    Train and rake reporting tasks update this.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistical Report (Reports) Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-rose-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-rose-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <TrendingUp className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-rose-100 bg-clip-text text-transparent">
                  Statistical Report (Reports)
                </span>
              </h2>
              <div className="bg-linear-to-br from-rose-500/20 via-pink-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-5 border border-rose-400/20">
                    <h3 className="text-rose-200 font-bold lg:text-lg text-base mb-3">INTERCHANGE</h3>
                    <p className="text-rose-50/95 lg:text-sm text-xs mb-2">
                      <span className="font-semibold text-rose-200">I/C Summary:</span> gives I/C summary in terms of no. of loads Interchanged vis a vis forecast and shortfall
                    </p>
                    <p className="text-rose-50/95 lg:text-xs text-xs italic">
                      Forecast and arrival /dep tasks update this query
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-5 border border-rose-400/20">
                    <h3 className="text-rose-200 font-bold lg:text-lg text-base mb-3">LOAD &amp; PIPELINE</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-rose-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-rose-200">Reason wise stabling:</span> gives details of load stabled during a specified period along with load details, reasons of stabling and the time when that load was lifted
                        </p>
                        <p className="text-rose-50/95 lg:text-xs text-xs italic">
                          Stabling, load planning and arrival/dep tasks updates this query.
                        </p>
                      </div>
                      <div>
                        <p className="text-rose-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-rose-200">Diversion register:</span> gives diversion details for a specified period Filters available for originating station commodity, i/e
                        </p>
                        <p className="text-rose-50/95 lg:text-xs text-xs italic">
                          Diversion task updates this query
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance procedures for FOIS Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-emerald-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-emerald-500/30 to-green-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-green-500/30 transition-all duration-500">
                  <Wrench className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-emerald-100 bg-clip-text text-transparent">
                  Maintenance procedures for FOIS
                </span>
              </h2>
              <div className="bg-linear-to-br from-emerald-500/20 via-green-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* CHECK LIST FOR DAILY MAINTENANCE OF HVNET VSAT PREREQUISITES */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-4">CHECK LIST FOR DAILY MAINTENANCE OF HVNET VSAT PREREQUISITES</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-emerald-50/95">1. Minimum 1KVA On line UPS – dedicated to VSAT</li>
                      <li className="text-emerald-50/95">2. Dedicated Electronic earth less than 1ohm</li>
                      <li className="text-emerald-50/95">3. Earth to neutral Voltage should be less than 2 volts</li>
                      <li className="text-emerald-50/95">4. Air –conditioned dust free environment with clearance of at least 8&quot; in front and rear of indoor unit. This provides airflow and prevents overheating.</li>
                      <li className="text-emerald-50/95">5. AC input requirements-230v+10%v VAC 47-63 Hz for PES</li>
                      <li className="text-emerald-50/95">6. Grounding of VSATs antenna and unit is a must resistance should be less than10ohm</li>
                      <li className="text-emerald-50/95">7. AC input voltage to PES must be derived from UPS output only (Live to neutral 230 VAC Live to Earth 230 V Neutral to Earth OV)</li>
                      <li className="text-emerald-50/95">8. Do not allow moisture to enter in the RF unit. Plastic tape should be put on all the Connectors at the ODU. A properly designed rain protection over can also be used to prevent the same.</li>
                    </ul>
                  </div>

                  {/* ON-OFF PROCEDURE */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-4">ON-OFF PROCEDURE</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-emerald-50/95">9. 1. Do not put off the power supply. Keep it continuously &quot;on&quot; because Hub is always polling each location for status and control signals must be received at any time from the Hub.</li>
                      <li className="text-emerald-50/95">2. If PES is switched off and subscriber switches it on, in this case PES will take nearly 40 minutes to get ready for normal working provided it is ON continuously for that period.</li>
                      <li className="text-emerald-50/95">3. Observation of the LEDs should be recorded during this period and it may be conveyed to HUB if PES does not come to normal position i.e. dots do not flash on all cards of PES.</li>
                      <li className="text-emerald-50/95">10. Single phase 230 ohms 50Hz with input circuit breaker of 3amps for protection</li>
                    </ul>
                  </div>

                  {/* PRECAUTIONS */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <h3 className="text-emerald-200 font-bold lg:text-lg text-base mb-4">PRECAUTIONS</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-emerald-50/95">11. Do not disconnect the IFL cable from DIU without switching power supply off. This may damage equipment.</li>
                      <li className="text-emerald-50/95">12. Protect your antenna/FL cable/ODU from tampering by unauthorized person.</li>
                      <li className="text-emerald-50/95">13. To prevent damage to the DIU turn power off before connecting/disconnecting any telephone failure to remove power may damage the VDPC card.</li>
                      <li className="text-emerald-50/95">14. Do not use rotary telephones with VSATs. Use only Touch tone (DTMF) telephones.</li>
                      <li className="text-emerald-50/95">15. Do not place equipment, which produce dust near the DIU (Certain copier of computer primers produce carbon dust, which can cause malfunction.</li>
                      <li className="text-emerald-50/95">16. Prevent moisture from getting inside DIU</li>
                      <li className="text-emerald-50/95">17. Limit the distance between VSATs DIU to telephone instrument 15 meter for proper operation.</li>
                      <li className="text-emerald-50/95">18. For normal operation the VSATs should be displaying, flashing dots in all the cards i.e. IFM, VDPC and MPC. Any other display is an abnormal condition</li>
                    </ul>
                  </div>

                  {/* Contact and Abbreviations */}
                  <div className="bg-white/5 rounded-xl p-5 border border-emerald-400/20">
                    <p className="text-emerald-200 font-semibold mb-3 text-sm">In case of difficulty contact</p>
                    <p className="text-emerald-50/95 lg:text-sm text-xs mb-4">
                      HUB numbers: (To be taken from CRIS)
                    </p>
                    <p className="text-emerald-50/95 lg:text-sm text-xs mb-4">
                      Specify the display of all the three PES cards
                    </p>
                    <div className="bg-white/5 rounded-lg p-3 border border-emerald-400/10">
                      <p className="text-emerald-200 font-semibold mb-2 text-xs">Abbreviations:</p>
                      <ul className="space-y-1 ml-4 text-xs">
                        <li className="text-emerald-50/95">PES = Power Earth Station</li>
                        <li className="text-emerald-50/95">ODU = Out door unit</li>
                        <li className="text-emerald-50/95">DIU = Digital Indoor Unit</li>
                        <li className="text-emerald-50/95">IFM = Intermediate Frequency Module</li>
                        <li className="text-emerald-50/95">VDPC = Voice Data Port Card</li>
                        <li className="text-emerald-50/95">MPC = Multiport Port Control</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INTEGRATED COACHING MANAGEMENT SYSTEMS - AN OVERVIEW Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-violet-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-violet-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Train className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-violet-100 bg-clip-text text-transparent">
                  INTEGRATED COACHING MANAGEMENT SYSTEMS - AN OVERVIEW
                </span>
              </h2>
              <div className="bg-linear-to-br from-violet-500/20 via-purple-500/15 to-fuchsia-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  {/* 1. MODULES IN ICMS */}
                  <div className="bg-white/5 rounded-xl p-5 border border-violet-400/20">
                    <h3 className="text-violet-200 font-bold lg:text-xl text-lg mb-4">1. MODULES IN ICMS</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-violet-200">i) Punctuality Module (PAM):</span> For Post facto analysis of punctuality loss and its causes (not an on-line system), Captures train running at Originating/ Terminating and interchange points and the causes of detention. Data input predominantly at Divisional HQ level.
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs italic">
                          Status: Implemented.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-violet-200">ii) Coaching Operations Information System (COIS):</span> Captures events on Coaches/Rakes, Generates Reports for Management of Coaching Stock. Data input predominantly at Station/Coaching Yard level.
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs italic">
                          Status: Implemented.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-violet-200">iii) COIS Data Entry Module:</span> Support module of ICMS, to maintain database pertaining to the information of Rake Links, Yard Infrastructure, Coach Master, Train Schedules etc. Data input at Zonal HQ level.
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs italic">
                          Status: Implemented.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-violet-200">iv) Coaching Maintenance Module:</span> To capture depot activities related to coaching maintenance operations, Utility tool for managers looking after mechanical and electrical maintenance, Includes module for Material Management and Manpower data (gang strength per shifts etc), Data input at CDO level.
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs italic">
                          Status: Under system study.
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-violet-200">i) Time-tabling Module:</span> For simulating the suitable timings for running of all kinds of trains, simulating the best available path for planning a train keeping in view all variables, simulating optimum utilization of rake link, generating all time-tabling documents. Data input at Zonal HQ level.
                        </p>
                        <p className="text-violet-50/95 lg:text-xs text-xs italic">
                          Status: Under system study.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2) ICMS-SYSTEM ARCHITECTURE */}
                  <div className="bg-white/5 rounded-xl p-5 border border-violet-400/20">
                    <h3 className="text-violet-200 font-bold lg:text-xl text-lg mb-4">2) ICMS-SYSTEM ARCHITECTURE</h3>
                    <ul className="space-y-2 ml-4 text-xs">
                      <li className="text-violet-50/95">• User connects through browser interface (like Internet Explorer)</li>
                      <li className="text-violet-50/95">• Separate URL for PAMS ,COIS and DATA modules ( for ex: http/…/cois , http…./pam , http/…/data and so on)</li>
                      <li className="text-violet-50/95">• Users have Thin clients at location</li>
                      <li className="text-violet-50/95">• Back-end: RDBMS (Oracle based)</li>
                    </ul>
                  </div>

                  {/* 3) ICMS-DATA FEEDING */}
                  <div className="bg-white/5 rounded-xl p-5 border border-violet-400/20">
                    <h3 className="text-violet-200 font-bold lg:text-xl text-lg mb-4">3) ICMS-DATA FEEDING</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          <span className="font-semibold text-violet-200">i) Master Data:</span> Common Master database for PAMs and COIS, includes Infrastructure data: (of more permanent nature like List of Stations, Platforms, washing lines) and Other Master Data: (of less permanent nature like Rake Link Data, Time Table data, Coach Master etc)
                        </p>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-3">
                          <span className="font-semibold text-violet-200">ii) Running Data:</span> Separate and independent running database for PAMS and COIS
                        </p>
                        <div className="space-y-3">
                          <div>
                            <p className="text-violet-200 font-semibold mb-2 text-sm">a) PAM:</p>
                            <ul className="space-y-1 ml-4 text-xs">
                              <li className="text-violet-50/95">• Feeding mostly at divisional level, Interchange owning division controls the data feeding for handing over or taking over, Zonal client does the responsibility fixing( deciding the trains &quot;lost in punctuality&quot;)</li>
                              <li className="text-violet-50/95">• Activities include:</li>
                              <li className="text-violet-50/95 ml-4">• Originating terminating, interchange timings</li>
                              <li className="text-violet-50/95 ml-4">• Detention Reports,</li>
                              <li className="text-violet-50/95 ml-4">• Cause wise logging,</li>
                              <li className="text-violet-50/95 ml-4">• Fixing Responsibility</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-violet-200 font-semibold mb-2 text-sm">b) COIS:</p>
                            <p className="text-violet-50/95 lg:text-sm text-xs mb-3">
                              Unlike PAM - no concept of data &quot;feeding&quot; in COIS. Instead working on the system at station/yard level leads to generation of required data (and memos for the operator).This works as input for MIS.
                            </p>
                            <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                              All station/yard activities from arrival to departure of rake are captured:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
                              <ul className="space-y-1 text-xs">
                                <li className="text-violet-50/95">• Yard stock entry</li>
                                <li className="text-violet-50/95">• Dispute Resolve</li>
                                <li className="text-violet-50/95">• Yard Position</li>
                                <li className="text-violet-50/95">• Sick Marking</li>
                                <li className="text-violet-50/95">• Rake formation</li>
                                <li className="text-violet-50/95">• Sickline Placement</li>
                                <li className="text-violet-50/95">• Sickline Operation</li>
                                <li className="text-violet-50/95">• Modify consist</li>
                                <li className="text-violet-50/95">• Shop Marking</li>
                                <li className="text-violet-50/95">• Movement Shop Placement</li>
                              </ul>
                              <ul className="space-y-1 text-xs">
                                <li className="text-violet-50/95">• Movement (Yard to yard)</li>
                                <li className="text-violet-50/95">• Remove fit available coaches</li>
                                <li className="text-violet-50/95">• Rake Examination</li>
                                <li className="text-violet-50/95">• Search Feedbacks</li>
                                <li className="text-violet-50/95">• Departure Reporting</li>
                                <li className="text-violet-50/95">• Send Feedbacks</li>
                                <li className="text-violet-50/95">• En route Attachments/Detachments</li>
                                <li className="text-violet-50/95">• Generate memo</li>
                                <li className="text-violet-50/95">• Arrival Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* (iii) ICMS-MIS-REPORTS */}
                  <div className="bg-white/5 rounded-xl p-5 border border-violet-400/20">
                    <h3 className="text-violet-200 font-bold lg:text-xl text-lg mb-4">(iii) ICMS-MIS-REPORTS</h3>
                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-200 font-semibold mb-2 text-sm">a) PAM:</p>
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          Reports for Management at Divisional Level, HQ level, Board level like:
                        </p>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-violet-50/95">• Railway Punctuality Performance for a date for a Division</li>
                          <li className="text-violet-50/95">• Movement of Trains (Division wise) in a Zone</li>
                          <li className="text-violet-50/95">• Punctuality percentage of Mail/Express</li>
                          <li className="text-violet-50/95">• Cause wise/Gauge Wise breakup of Lost Trains between dates</li>
                          <li className="text-violet-50/95">• Division wise analysis of Cause of Lost Trains on Date in a Zone</li>
                          <li className="text-violet-50/95">• Railway Punctuality performance for a date in a Zone</li>
                          <li className="text-violet-50/95">• Cause wise breakup of Trains lost in a period</li>
                          <li className="text-violet-50/95">• Summary of Monitored trains daily Run and Lost</li>
                          <li className="text-violet-50/95">• Section wise/Cause wise analysis for all trains on a date</li>
                          <li className="text-violet-50/95">• Zone wise/Cause wise analysis for all trains on a date, etc</li>
                        </ul>
                      </div>
                      <div className="bg-white/5 rounded-lg p-3 border border-violet-400/10">
                        <p className="text-violet-200 font-semibold mb-2 text-sm">b) COIS:</p>
                        <p className="text-violet-50/95 lg:text-sm text-xs mb-2">
                          Reports for Management at Station Level, Divisional Level, HQ, RB level like:
                        </p>
                        <ul className="space-y-1 ml-4 text-xs">
                          <li className="text-violet-50/95">• Yard Stock Position (Line position)</li>
                          <li className="text-violet-50/95">• Vehicle Guidance</li>
                          <li className="text-violet-50/95">• Zonal Stock Balance sheet (type wise details of Bare Requirement, allotment, running in service, ineffective etc)</li>
                          <li className="text-violet-50/95">• Coaches on way from/to shop</li>
                          <li className="text-violet-50/95">• Foreign Railway Coaches</li>
                          <li className="text-violet-50/95">• Ineffective Coaches</li>
                          <li className="text-violet-50/95">• Coach History</li>
                          <li className="text-violet-50/95">• Rake Link Information Zonal/Divisional Coaching Stock allotment/availability, etc.</li>
                        </ul>
                      </div>
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

export default FreightOperationInformationSystem
