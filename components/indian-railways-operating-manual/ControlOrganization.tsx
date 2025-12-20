'use client'
import { 
  Network,
  Settings,
  Phone,
  Users,
  FileText,
  AlertCircle,
  BookOpen,
  List,
  ClipboardList,
  Shield,
  Clock} from 'lucide-react'

const ControlOrganization = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-blue-900 relative overflow-hidden text-white">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-linear-to-br from-cyan-400/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 w-72 h-72 bg-linear-to-tr from-purple-500/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-md h-112 bg-linear-to-r from-sky-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
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
                      <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-blue-100 via-cyan-100 to-indigo-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              CONTROL ORGANIZATION
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Introduction Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <Network className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Introduction
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The Control Organization of Indian Railways is the nerve centre of train operations. It controls the asset management of the Railways, in a dynamic situation, round the clock incessantly moving trains on its entire network.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  It has come a long way from being an exclusively telephone based system emerging in the form of an Information Technology enabled organization.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  This basic structure of Operating Control on Indian Railways exists at the Divisional Level, which has also been extended to Area Control levels. In addition, Central Control Office is situated in the headquarters office and one at Railway Board.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The area spread of a division is divided into control sections, each section having a given number of stations.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The two-way telephone system, also called an omnibus circuit which permits all stations to have direct communication with Section Controller, who is responsible for train regulation in his area. The section Controller can speak to all stations at the same time or to one station selectively, using individual numbers/buttons. Movement of trains is plotted on a time distance graph to record their actual progress, these records, called control charts, can be analyzed later.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  To guide and assist the section controller, there are shift Deputy Controllers.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  All technical disciplines involved in train movement have a representative in the Control office to provide the required support from his department. These would include-
                </p>
                <ul className="ml-6 space-y-2 mb-4">
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Motive Power Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Traction Power Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Signaling and Tele-Communication Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Commercial Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Security Controller</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">C& W Control</li>
                  <li className="text-blue-50/95 lg:text-base text-sm leading-relaxed">Engineering Control</li>
                </ul>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The entire organization works round the clock, all days of the year without any interruption to monitor actual movement of trains on the entire rail network.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The detailed organization of the control selected and duties assigned to employees depends on the demands of the transport task appropriate to each grade of employee or to diversity in the transport task.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light">
                  The Chief Controller is the head of Divisional Control Organization.
                </p>
              </div>
            </div>

            {/* Basic Functions of Control Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <Settings className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Basic Functions of Control
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* 1. Train Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">1. Train Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Supervising & regulating movement of trains from station to station on the section to avoid delay to trains and to maximize utilisation of the capacity of the section by: -
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) Monitoring movement of trains from station to station and recording paths and detention on charts.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) Arranging crossing and precedence of trains judiciously.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) Arranging working of departmental and material trains.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) Giving time signal to all stations on the section daily at appointed time</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) Fulfilling interchange commitment.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(f) Arranging proper movement of assisting/banking /light engines.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(g) Clearance of sick wagons from Roadside stations.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(h) Arrangement of relief for 10 hrs duty staff.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(i) Incident management on rail network & at station</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(j) Arranging Engineering and/or power blocks in such a way as to involve minimum disturbance to train running.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(k) Maintaining fluidity of yards by controlling the flow of stock in and out of yard</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(l) Arranging Speedy relief in case of accidents.</li>
                  </ul>
                </div>

                {/* 2. Traffic Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">2. Traffic Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Traffic Control is the general and over-riding control for supervision of the movement of goods and coaching traffic on the section. It is exercised by :
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) Collecting information from the various stations on the section in respect of –</li>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li className="text-green-50/95 lg:text-sm text-xs leading-relaxed">(i) Registration for wagons outstanding at stations and arrangements for supply of wagons.</li>
                      <li className="text-green-50/95 lg:text-sm text-xs leading-relaxed">(ii) Number of wagons loaded and empty wagons/rakes awaiting despatch.</li>
                    </ul>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) Arranging running, regulation, putting back and cancellation of trains.(both freight & coaching)</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) Securing maximum loads for trains.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) Collecting stock position from the different stations, marshalling and terminal yards.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) Arrangement of Crew & Guard for freight trains</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(f) To keep liaison with adjoining Railways and Divisions for interchange commitments</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(g) Monitoring and co-ordinating working of yards, goods sheds sidings, loco-shed, TXR depots etc.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(h) Supervising of stock control.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(i) Arranging supply of wagons against pending registration.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">j) Securing optimum utilisation of stock, with minimum detention.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">k) To ensure optimum utilisation of loco and staff.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">l) To arrange ART & Crane from adjoining Railway/Division in case of accidents and other coordination.</li>
                  </ul>
                </div>

                {/* 3. Power Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">3. Power Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Power Control is responsible for provision of motive power to all trains by maintaining position of locomotives
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) Requisitioning engines from loco sheds for all operating requirements, i.e. Train working, Shunting and Banking.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) Ensuring most economical use of engines by close supervision both in Traffic Yards and sheds.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) Ensuring the return of engines to &quot;Home Sheds&quot; at regular intervals for servicing and maintenance.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) Ensuring an even balance of engines and crews between running sheds for meeting demands of traffic,</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) Ensuring that light engine kilometres is kept to the minimum.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(f) Providing guidance to running staff for troubleshooting.</li>
                  </ul>
                </div>

                {/* 4. Carriage and Wagon Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">4. Carriage and Wagon Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Carriage and Wagon Control is responsible to assist the train and traffic control and to-
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) Ensure timely examination and fitness of all trains</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) To keep a watch over the detachment of sick wagons/coaches and to arrange for their early repair and fitness.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) Keeping a watch over availability of vital C&W components, like Air Hoses, Washers, Clamps etc.. and efficient working of equipments &machines in C&W depot to avoid detention to trains.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) To keep a watch over placement of wagons/coaches in sick line and their release.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) To keep account of detention to trains on C&W account and take remedial action.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(f) To provide guidance to running staff for trouble shooting.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(g) For Electrical Multiple Units, this function is performed by EMU controller.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(h) Monitor the movement of POH due stock to workshops</li>
                  </ul>
                </div>

                {/* 5. Commercial Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">5. Commercial Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Commercial Control assists the Traffic and Train Control.
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) To expeditiously dispose off unclaimed and unconnected wagons, parcel consignments.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) To keep a watch on detention to trains on Commercial account like Alarm Chain Pulling. Carriage watering, Parcel working etc., and take remedial measures.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) To ensure quick transhipment of sick wagons by arranging matching stock and labour.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) To keep a watch over submission of station returns.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) Monitoring of public complaints lodged at the stations.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(f) To ensure proper maintenance of public amenities available at stations.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(g) Any other job entrusted by Sr. DCM/DCM.</li>
                  </ul>
                </div>

                {/* 6. Traction Power Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">6. Traction Power Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Traction Power Control is provided to assist in Traffic and Train Control for -
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(a) Arranging maintenance blocks for OHE</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(b) Arranging alternative power supply in case of tripping etc., through remote control.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(c) Monitoring OHE failures and taking remedial action.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(d) Monitoring detention of trains on OHE accounts.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">(e) Guiding running/ station staff in trouble shooting.</li>
                  </ul>
                </div>

                {/* 7. Engineering Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">7. Engineering Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    Monitors imposition & cancellation of Engineering Restrictions, Working of track machines & monitoring integrated maintainable blocks.
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-2">
                    To co-ordinate works during maintenance blocks
                  </p>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    Running of Material trains.
                  </p>
                </div>

                {/* 8. Signal Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">8. Signal Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    Signal Control assists Traffic and Train Control and is responsible -
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">a) To keep a watch over the S&T failures and take remedial action.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">b) To ensure efficient working of communication channels</li>
                  </ul>
                </div>

                {/* 9. Security Control */}
                <div className="mb-8">
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">9. Security Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed">
                    Security Control is responsible for prevention of theft of property and assists passengers in trains/stations.
                  </p>
                </div>

                {/* 10. Functions of Control */}
                <div>
                  <h3 className="text-green-200 font-bold lg:text-2xl text-xl mb-4">10. Functions of Control:</h3>
                  <p className="text-green-50/95 lg:text-base text-sm leading-relaxed mb-4">
                    The main functions of Traffic Control are:
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">a) Continuous supervision of the movement of all traffic in the controlled area with a view to achieve the maximum possible operating efficiency.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">b) Systematic maintenance of accurate charts of train movements and the arrangements of crossing and precedence to the greatest advantage.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">c) Analysis of detentions to trains</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">d) Planning, ordering and running of goods trains to the best possible paths.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">e) Maintaining the fluidity of marshalling yards/freight terminals.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">f) Taking remedial action in the event of yard/terminal congestion.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">g) Elimination of avoidable detentions to goods stock at loading and unloading points and at transhipment stations.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">h) Allotment and distribution of goods stock to stations,</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">i) Supply of information to adjoining controls, terminals and engine changing stations regarding the movements of trains to enable adequate timely arrangements for their reception and onward despatch.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">j) Arranging of engineering and other departments blocks with minimum detention to traffic.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">k) Running of material trains and other track machines, tower wagons etc.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">l) Arranging relief for engine crews and Guards.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">m) Ensuring maximum utilisation of locomotives.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">n) Issuing instructions for train working in case of equipment failures and whenever abnormal methods or working have to be resorted to.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">o) Speedy arrangements for relief rescue and restoration in the event of accident.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">p) To assist in the realistic planning of time tables and punctual running of passenger trains in coordination with various departments, other divisions and other railways.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">q) To keep a watch over damaged stock at road side stations, yards and sick lines and to ensure that they are promptly attended to</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">r) To rectify immediately the irregularities on the part of line staff and provide them necessary guidance.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">s) To provide operations management information.</li>
                    <li className="text-green-50/95 lg:text-base text-sm leading-relaxed">t) To ensure smooth functioning of FOIS and other IT applications.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Telecommunication Facilities in Control Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <Phone className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Telecommunication Facilities in Control
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  Extensive, efficient and reliable communication network is necessary for the efficient functioning of the Control organisation. The following telecommunication network is available in control offices.
                </p>
                <div className="space-y-6">
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">1. FOIS Network</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">2. Hot lines are provided between:</span>
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">(a) Headquarter and Divisions</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">(b) Adjoining Divisions and Railways</li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">(c) Intercom facility to various Officers and other functionaries concerned with the control is connected with important work centres with STD or Trunk Exchanges.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">3. Deputy Control Lines:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      This circuit is provided between various functionaries in the control office, stations and important work centres like yards, loco sheds, crew booking lobbies.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">4. Section control circuit:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      This circuit is connected to all the stations and the section controller, Chief controller etc.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">5. Traction Power Control circuit:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      This additional telephone circuit is available on the electrified sections; this is connected to T.P.C. in OHE remote control centre, all stations, control-offices and selected work places. The section controller or T.P.C. can also be contacted from the emergency socket provided over the sections of line by means of portable telephone of the control point with indication on the electric mast, direction wise, to the nearest circuit.
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">6. Section Control Board:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      The Section Controller of each section is provided with control board with Telecommunication facilities for coaching stations, certain important cabins, big freight terminals, loco shed etc. over a section. For the guidance of section controller, the lay out of all the stations and sidings is painted on a large board.
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      The station lay out diagram is also provided with details of holding capacity of each of the running & non-running lines, gradients and signals. In electrified area, OHE sectioning diagram is provided. This depicts elementary sections in different colours & other details of sectioning post (SP) and Sub-sectioning post (SSP).
                    </p>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">7. Graphs and Plotting:</span>
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">i)</span> Trains are plotted on control graphs which consist of horizontal and vertical lines representing distance and time respectively. Along side the vertical lines stations are spaced to a uniform scale. Each one hour is first divided into 6 units of 10 minutes each and each unit is further sub-divided into 5 smaller units of 2 minutes each.
                      </li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">ii)</span> Each control graph at the end of the shift may have the following information on it:
                      </li>
                      <ul className="ml-6 mt-2 space-y-1">
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(a) Name and total distance of the section in Kilometres.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(b) Distance in Kms. between each station on the section.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(c) State of weather in each shift.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(d) Engineering restrictions on the section.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(e) Code names of each station of the section.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(f) Time lost by each train on loco, traffic or engineering account at or between stations.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(g) Section Controller&apos;s remarks against item (d).</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(h) Time made up by each train on loco, traffic or engineering account.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(i) Guard&apos;s record of time lost on loco, traffic or engineering account at or between stations and remarks.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(j) General remarks.</li>
                        <li className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">(k) Signal failures</li>
                      </ul>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">iii)</span> In plotting various types of trains the coloured pencils shall be used as per extant convention. All up trains are plotted from the bottom of the chart upwards and from the left diagonally towards the right; and all down trains are plotted from the top of the chart downwards and also diagonally from the left towards the right.
                      </li>
                      <li className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                        <span className="text-purple-300">iv)</span> For judicious crossing and precedence, it is necessary to have plotting of passenger trains at least one hour in advance depending on traffic density in easily erasable lines. Now through computerized charting this is automated. On certain selected controls, this function has been automated.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">8. Master Charts:</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed">
                      For every section, Master Charts indicating trains run in 24 hours are prepared which show the running of each Mail, Express or passenger trains over the sections according to its scheduled running. In between the running of trains carrying passengers, paths for goods trains are worked out and plotted. They are helpful in revision of time tables and planning the running of any extra train and guidance of section controllers and should be displayed on the boards to which they refer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Duties of Control Staff Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-yellow-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-yellow-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-yellow-100 bg-clip-text text-transparent">
                  Duties of Control Staff
                </span>
              </h2>
              <div className="bg-linear-to-br from-yellow-500/20 via-orange-500/15 to-red-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  The main duties of control staff are as under: These are only guidelines to their day to day working and are not exhaustive.
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">(a) Chief Controller (In-charge):</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The Chief controller is in- overall charge of control office and is responsible for the total transportation of the Division on day to day basis. His duties include-
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(i) A review of previous day&apos;s performance to confirm that all forecasts made have been fully met. For shortfalls, cogent reasons have to be pinpointed to prevent recurrence</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ii) Prepare current forecast indicating assistance needed from Hedquarters, adjoining Divisions, railways</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iii) These will generally relate to interchange, loading and locomotive utilisation</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iv) Checking control charts and bringing to the notice of the Senior Divisional Operations Manager/Divisional Operations Manger all avoidable detention to trains.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(v) Punctuality performance with particular reference to trains which lost punctuality</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vi) Maintaining statistics regarding the punctuality of passenger trains.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vii) Scrutiny of stock papers, Monitoring interchange obligations.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(viii) Watching detention to stock at stations and terminals</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ix) Watching the work of marshalling yards/freight terminals.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(x) Maintaining liaison with neighbouring Divisions</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xi) Watching utilisation of loco and their terminal detention.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xii) Checking duty hours of running staff and balancing of crews.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xiii) Granting engineering blocks, power blocks etc.,</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xiv) Attending control office in cases of accident</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xv) Establishment work of control office</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">(b) Chief controller (Movement)/Dy. Chief Controller / Shift duty:</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      He is responsible for:
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(i) Running of goods trains, preparing interchange forecast, and monitoring the same, loco utilisation and passenger and goods train operations in general.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ii) Allotting empty stock/rakes to loading stations in accordance with current priority regulations along with Dy. Chief Controller (Stock) ,maintaining constant touch with adjacent divisions through regular conference to facilitate the smooth flow of traffic.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iii) Dealing immediately with significant detentions or transport bottlenecks and other unusuals.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iv) Keeping constant touch with the working of major terminals & Marshalling yards and taking timely action to deal with congestion.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(v) Giving advice of serious accidents to all concerned, and taking, charge of the affected sections.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vi) Supervising the running of oversized consignments.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vii) Maintaining liaison with the Power Controller.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(viii) Co-ordinate the work of various Section Controllers.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ix) Maintain discipline among control staff in the absence of Chief Controller.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(x) Maintain co-ordination and liaison with various functionaries involved in train running.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">(c) Chief Controller (stock) / Dy. Chief Controller:</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      He is responsible for:
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(i) Scrutinising the indent register in details with regard to the oldest date of registration, nature of goods and type of stock required for lifting goods as per the oldest date of registration.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ii) Checking Divisional stock report and position of empties.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iii) Checking of different stock reports received from the various points and planning in advance the supply of stock, loading and clearance keeping in view interchange obligation and orders received</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iv) Checking transhipment activity</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(v) Chasing movements of stock as per supply order issued on the previous day.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vi) Keeping a close watch over hot axle, special type and unconnected wagons.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vii) Cross checking the daily Restriction Bulletin with Restriction Messages received from HQ office and issuing the same.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(viii) Assisting the Sr. DOM/DOM in allotments.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ix) Keeping a close watch over the movements of seasonal perishable traffic and supply of suitable stock for its clearance.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(x) Watching movements of damaged loaded stock in sick line and yards on their division.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xi) Informing all major customers about their inward trains&apos; expected arrival based on FOIS pipe line, Optimising loading, unloading, transhipment etc.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">Duties of Deputy Chief Controller (Punctuality):</h3>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">i) Ensuring punctuality of passenger trains in system</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">ii) Ensuring punctuality at the start of all outgoing passenger train</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">iii) Maintaining Detention Reports of Coaching trains</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">iv) Ensure that late running trains make up time</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">d) Section Controller:</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      The Section Controller shall be responsible for:
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(i) Reporting for duty at the prescribed time and ascertaining the position of the section from his reliever.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ii) Recording the movement of trains on the &apos;Control&apos; graph including crossing, connections and shunting reasons for detentions etc.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iii) Arranging for the supply and clearance of stock as ordered by Dy. Controller.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iv) Advising stations in advance of the work to be done on trains on move</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(v) Informing sheds and stations about the late running of trains to avoid the calling of Crew and Guards earlier than necessary or to put back trains wherever advisable.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vi) Informing major stations and concerned Section Controller about the current running of trains on the section and their anticipated arrivals well in time</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vii) Keeping in close touch with Engineering-blocks and working of material trains so as to give the maximum possible time with least detention to other traffic.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(viii) Incident management to include adjusting movements of trains in view of the likely impact of the incident, informing all concerned</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ix) Keeping a watch over damaged vehicles detached at road side stations and arranging repairs or transhipment of their contents and proper attention on the part of the train examining staff.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(x) Arrangement of ART & M/Van in case of accident.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xi) Eliminating all possible detention to train and stock.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xii) Watching the working of marshalling yards & major terminals.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xiii) Making timely arrangements for the relief of Guards /loco pilots whose duty hours are likely to exceed enroute.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(xiv) Recording stock report (where stock clerks are not posted)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">(e) Power Controller/Traction Loco Controller:</h3>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(i) Planning and directing engine movements so as to ensure efficient engine utilization and maintaining the prescribed charts, and regular statistics.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ii) Co-ordination with sheds and Dy. Chief Controllers (movement) for sending overdue engines and obtaining time of engines coming out of shed.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iii) Making timely arrangement for the relief of crew whose duty hours are likely to be exceeded enroute</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(iv) Taking timely action to balance crew so as to prevent cancellation or putting back of trains on account of shortage of crew.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(v) Arranging relief in case of accidents as per chapter IV to VIII of Accident Manual.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vi) Maintaining charts indicating engine position/utilisation.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(vii) Rendering advice and assistance to locomotive running staff regarding trouble shooting.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(viii) Carrying out any other duties allotted to him by the Sr.DME/DME or Sr.DEE/DEE from time to time.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">(ix) Monitoring day-to-day stock position of diesel fuel at RDIs and watching movement of diesel fuel tank wagons (for power controllers only)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-yellow-200 font-bold lg:text-xl text-lg mb-3">(f) Traction Power Controller:</h3>
                    <p className="text-yellow-50/95 lg:text-base text-sm leading-relaxed mb-3">
                      Traction Power Controller shall be responsible for:
                    </p>
                    <ul className="ml-6 space-y-2">
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">i) While taking over shift duty acquaint himself with the prevailing position of the entire section, including the working of the Remote Control equipment position of all transformers, current breaker&apos;s interrupters and isolators, sections under power block, position of tower wagons and break down vehicle etc.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">ii) Maintaining continuous contact with the Traffic Section Controllers in regard to power supply affecting train movements, imposing power blocks etc.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">iii) Taking prompt action for restoration of supply in the event of power supply interruptions or other failures.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">iv) Imposing and removing power blocks in consultation with Traffic Section Controller.</li>
                      <li className="text-yellow-50/95 lg:text-base text-sm leading-relaxed">v) Advising promptly the concerned officials in case of accidents, OHE breakdown, failure of power supply and keeping them posted with all important developments.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Discipline Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Shield className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  Operating Discipline
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">i) Line Staff to obey orders of control:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      Station staff, Shed staff, Crew and Guards etc must obey orders issued by the Control as long as these orders are consistent with the General and Subsidiary Rules, extant instructions and the instructions contained in this Manual.
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">ii) &apos;Control order register&apos;:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Important instructions from control will first be recorded in a register maintained in the control office and serially numbered, commencing with number 1 after midnight each day. These will be issued as messages indicating the time of issue
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      All such orders received by the Station Masters or Running staff and Guards&apos; lobby from Control should be entered in the control order register by the staff. Each entry must be initialled with time.
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      At the end of each turn of duty the relieved as well as the relieving Station Master or Crew Controller must sign their name in full below the last entry in the register. On days when no orders are received from control, &quot;Nil&quot; entry must be recorded and signed as prescribed above. When a station Master or Crew Controller has received an order from the control and entered it in his register, he may repeat it to the control in order to satisfy himself and the control that he has understood it correctly.
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(iii) No Terminal Station should start a goods or unscheduled train or block the section without the permission of the Controller.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(iv) Every Station on the section must report the movement of every train- passenger, goods, special, departmental, light engines, TTMs, Tower Wagons, trollies etc. to the controller.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(v) When the control is in function, Line Clear must be asked from the station ahead for every train unless orders to stop it are given by the Controller.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(vi) The Controller&apos;s permission must be obtained before stopping a train that should run through except to avert an accident or dangerous condition.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(vii) No station should allow a train, which has been stopped out of course, to proceed, without first informing the controller that the train has been so stopped and receiving his further orders.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(viii) Station Master must advise the controller of any unauthorised or undue detention to trains at their stations with full explanation.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(ix) Whenever a train, either passenger or goods is detained at a station for longer than the booked halt without the orders of the Controller, on its departure, the Station Master must immediately inform the brief cause of the detention to the Controller.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(x) Whenever any damaged wagon is detached out of course at a station, the Station Master on duty should inform the Controller.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(xi) Station Master must promptly advise the Controller of any defects of signals, points, interlocking apparatus and line clear instruments at their stations. Information should also be given of any defects in any other station machinery such as cranes, wagon weigh bridges, turn tables, water columns, hydrants etc.</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">(xii) Starting stations to report particulars of outgoing train:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      As soon as a train leaves a train starting station, the Station Master must intimate the following particulars to the control office: Number and description of train, Engine number and class, Loco pilot&apos;s name, Guard&apos;s name, load of the train (in tonnes and vehicles) particulars of shunting to be done on the journey, time of departure, brief reasons of late start, time of S/O of crew fuel balance etc.
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">xiii) Intermediate stations to report arrival and departure time of trains:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Station Master of intermediate station must communicate to the Control as early as possible, the following information in regard to every train dealt with:
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">(a) In case the train has run through, the time it passed the station.</li>
                      <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">(b) If it is a stopping train, the time or arrival and departure along with the explanation for every detention beyond the scheduled stoppage.</li>
                      <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">(c) If any shunting has been performed, the number of vehicles attached and detached.</li>
                      <li className="text-indigo-50/95 lg:text-sm text-xs leading-relaxed">(d) If any extra time has been taken in loading and unloading of packages, the number of such packages and name of the loading station.</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">xiv) Terminating stations to report the particulars of incoming trains:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      Station Masters of terminal and engine changing station must, as soon as possible, after the arrival of a train, communicate to the control the time of arrival and the load of the train, particulars of loco detached/attached.
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">xv) Engine Movements to and from sheds to be reported:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      Loco foreman must communicate to control the time at which train engine leave from or returns to the shed &apos;Bahar line&apos;.
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      This in no way, relieves the Station Master of the responsibility for issuing necessary all concerned messages regarding engine failures and engine trouble enroute. The Controller, shall record the duration of such defects in his chart, diary and registers.
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">vi) Time to be checked with control:</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      Station Master, Crew Controller and Lobbies must check their time with control at appointed hours every day when control gives a general ring for setting their watches/clocks at 16:00 hrs. Staff must obtain Station Master&apos;s permission before speaking to Controller.
                    </p>
                  </div>
                  <div>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-indigo-200">xvii Mode of using the control phone :</span>
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      The Control telephone is to be used for operational purposes. The field staff wanting to talk to control will give their identity and wait for their turn to communicate .As this network is intensively used, the conversation should be brief, meaningful and polite. Discussions, disputes and arguments must be avoided.
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      a) Station Master and others must not start to speak to control unless they have ascertained by lifting the receiver and listening in, that the line is free. They must then announce the name of the station, shed, lobby or site from where they are speaking and wait for its being repeated by the controller before beginning the conversation.
                    </p>
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      b) When, however an urgent message has to be conveyed and the line happens to be engaged, the station name must be called indicating Emergency. The Controller will immediately attend to the Station having an emergency. Station Masters must attend &apos;Control Call&apos; promptly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Co-ordination between Control and Stations Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-cyan-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-cyan-500/30 to-blue-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-500">
                  <Users className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-cyan-100 bg-clip-text text-transparent">
                  Co-ordination between Control and Stations
                </span>
              </h2>
              <div className="bg-linear-to-br from-cyan-500/20 via-blue-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">1</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Asking line clear: In order to avoid the detention to passenger trains for crossing a less important train, line clear enquiry for the less important train must not be asked until the train is ready to leave and until the Section Controller&apos;s permission has been obtained. The Station Master receiving the line clear enquiry must immediately ask the Controller&apos;s permission to give line clear before giving the reply. The Station Master on duty is entirely responsible for seeing that the necessary General and Subsidiary rules and Station Working Rules are observed before giving Line Clear.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">2</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">When a Station Master for any reason finds it difficult to carry out Controller&apos;s arrangement to receive the train in yard/station due to yard/ station constraints, he must explain his reasons clearly and fully to the Controller.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">3</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Work at stations: The permission of the Controller must be obtained before the performance of any shunting; Controller must be informed of the likely duration of shunting to enable him to arrange crossing and precedence of trains. In the event of Station Master being unable to start a train on receipt of line clear, he must at once report the circumstances to the Controller.</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-cyan-600/60 to-blue-500/50 p-3 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-cyan-100 font-bold lg:text-lg text-base">4</span>
                    <span className="text-cyan-50/95 lg:text-lg text-base leading-relaxed font-light pt-1">Control order regarding crossings etc.: The Section Controller will give definite instruction for crossing or precedence and will not change them except under unavoidable circumstance because last minute change of order will result in confusion and unsafe operation. The Station Master is entirely responsible for seeing that the crossing is effected safely and strictly in accordance with the rules. The Controller must see that sufficient time is available for the necessary operations to be carried out. If the Controller fails to do so, the Station Master should represent that delay may occur, but it does not allow him to disregard any rules in order to avoid such delay.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* General Order of Precedence of Trains Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-orange-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-orange-500/30 transition-all duration-500">
                  <List className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  General Order of Precedence of Trains
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light mb-6">
                  Unless specific orders to the contrary are issued by the COM or by those acting on his behalf, the following general orders of precedence shall be observed by control and stations.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">1</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">ARME, ART proceeding to the site of accident.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">2</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">President&apos;s and VVIP&apos;s specials (Unless otherwise specified in the Time Table).</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">3</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Suburban train in peak rush direction.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">4</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Super fast trains like Shatabdi, Rajdhani etc.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">5</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Mail / Express trains.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">6</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Military personnel special, if instructed by emergency control/DOM.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">7</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Fast Passenger train</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">8</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Special engaged by the public. (Precedence order may be revised)</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">9</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Passenger trains.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">10</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Mixed trains.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">11</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Military stores special.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">12</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Express or special goods train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">13</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Through goods train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">14</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Accident relief train returning from the site of accident (unless otherwise ordered).</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">15</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Shunting and van goods train.</span>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300">
                    <span className="bg-linear-to-r from-red-600/60 to-orange-500/50 p-2 rounded-full flex items-center justify-center border-2 border-white/20 shrink-0 shadow-lg text-red-100 font-bold lg:text-base text-sm">16</span>
                    <span className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light pt-1">Departmental trains.</span>
                  </div>
                </div>
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-red-50/95 lg:text-base text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-red-200">Note:</span> - The following general principles are mentioned for the guidance of Controllers but it must be distinctly understood that nothing in these instructions modifies the safety precautions laid down in the rules (General and Subsidiary Rules, Station Working Rules etc.).
                  </p>
                  <ul className="ml-6 space-y-2">
                    <li className="text-red-50/95 lg:text-base text-sm leading-relaxed">(i) A Passenger train nearing the end of its run should not normally be detained in preference to a train which has a longer run before it, as the latter train is more likely to make up time and reach its destination punctually than the former.</li>
                    <li className="text-red-50/95 lg:text-base text-sm leading-relaxed">(ii) A train running to time should not be detained more than 30 minutes to effect crossing on single line. (This should be decided by the Division based on actual condition.)</li>
                    <li className="text-red-50/95 lg:text-base text-sm leading-relaxed">(iii) A train running late due to defective engine, or defect in rolling stock or any other cause which is likely to continue to operate against it and prevent it from making up time, should generally give way to a train running properly.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accidents Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-red-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-red-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <AlertCircle className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-red-100 bg-clip-text text-transparent">
                  Accidents
                </span>
              </h2>
              <div className="bg-linear-to-br from-red-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-red-50/95 lg:text-base text-sm leading-relaxed font-light">
                  Controllers and other staff should thoroughly understand and act on the guidelines contained in G & SR and Accident Manual. Saving of lives and rescue of injured and mitigating hardship to passengers must be given the topmost priority.
                </p>
              </div>
            </div>

            {/* Working of Trains when Control is interrupted Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-orange-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-orange-500/30 to-amber-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-amber-500/30 transition-all duration-500">
                  <Clock className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-orange-100 bg-clip-text text-transparent">
                  Working of Trains when Control is interrupted
                </span>
              </h2>
              <div className="bg-linear-to-br from-orange-500/20 via-amber-500/15 to-yellow-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-orange-50/95 lg:text-base text-sm leading-relaxed font-light">
                  When the control is interrupted and no communication with the Controller is possible, Station Masters will be responsible for the working and regulating of trains, keeping in view the instructions issued by the railway administration.
                </p>
              </div>
            </div>

            {/* Books/Documents and basic records Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-blue-500/30 to-indigo-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-indigo-500/30 transition-all duration-500">
                  <BookOpen className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Books/Documents and basic records to be kept in Control Office
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-indigo-500/15 to-purple-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-2">
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">1. Station Working Rules of all stations.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">2. Working facilities available on the transhipment sheds.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">3. Schedule of shunting engines in the various yards.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">4. Link diagrams of rakes and engines working the passenger services and also of goods trains where laid down.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">5. Crew link diagram of the various services, for the running staff.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">6. Details of maximum moving dimensions permitted on the various section of the railway.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">7. Map showing the maximum permissible axle load on all the railways with which traffic is interchanged.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">8. Charts showing line capacity of the various sections.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">9. Index sections and plans of the various sections of the jurisdiction and details of train watering, Engine fuelling etc.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">10. Master charts depicting all trains indicated in the working time table in force.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">11. Charts showing jurisdiction of the various officials details of :</p>
                  <ul className="ml-6 space-y-1">
                    <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(a) of the maintenance branch of the post and Telegraph department responsible for maintaining control circuit wires in good condition.</li>
                    <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(b) of the various departments of the railways,</li>
                    <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(c) Zone and telephone numbers of Civil, Police, Military authorities.</li>
                    <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(d) List of various hospitals with Telephone Numbers.</li>
                    <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(e) List of stations Civil, district-wise.</li>
                    <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(f) OHE Sectioning diagram.</li>
                  </ul>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">12. Diagrams showing the layout of line wires of the Control Circuit.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">13. Line patrol chart</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">14. A calendar of returns</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">15. Cranes and Wagon weigh bridges.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">16. Turn tables and Triangles.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">17. List of spare coaches based in the division as well as slip coaches running on and across the division.</p>
                  <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">18. List of coaching Rakes allotted to the division and those passing over the division.</p>
                </div>
              </div>
            </div>

            {/* Registers generally maintained in Control Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <ClipboardList className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Registers generally maintained in Control
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3">1. By the Section controller:</h3>
                    <ul className="ml-6 space-y-1">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(a) Section controller&apos;s diary and charge book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(b) Inward message book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(c) Sick wagon register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(d) Yard report registers.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(e) In-coming and out-going trains RD (Running Diary) (other than passenger).</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(f) Train Advice (T. A Book).</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(g) Caution Order Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(h) Caution Order Message Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(i) Morning (6.O clock) Position Register</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(j) Engine Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(k) Interchange Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(l) Load Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(m) Incoming and Outgoing passenger Train Running Diary.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(n) Points and S & T Failure Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(o) Important Yard Balance Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(p) Control Failure Register.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3">2. By the Chief Controller (Movement),(Coaching)/Dy. Chief Controller :</h3>
                    <ul className="ml-6 space-y-1">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(a) Yard Running Balance Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(b) Dy. Chief Controller&apos;s Diary & Charge Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(c) Train Advise Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(d) Forecast and Acceptance Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(e) Train Ordering Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(f) Punctuality Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(g) Accident Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(h) HQ&apos;s Conference Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(i) Goods Train Performance Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(j) GM&apos;s Unusual Occurrence Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(k) CTNL (Movement)/(Coaching)/Dy TNL&apos;s Order Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(l) ODC Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(m) Rajdhani Express (and similar trains) Caution Order Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(n) Emergency and General Control Office Message Register (Inward).</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(o) Engine Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(p) Emergency and General Control Office Message Register (Outward.)</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(q) Interchange Register.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-teal-200 font-bold lg:text-xl text-lg mb-3">3. By the Power Controller:</h3>
                    <ul className="ml-6 space-y-1">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(a) Power Position Book.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(b) Out Station Loco pilot Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(c) Power Controller&apos;s Diary.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(d) Engine Link.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(e) Crew Link.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(f) Crew Position Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(g) Register of Movement and Diversion of departmental/ Diesel/cube oil Fuel Tank Wagons.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(h) Register showing Undue and Abnormal Detention.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(i) Shed Conference Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(j) Fuel Balance Register.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(k) Schedule Dates of Locos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Guidelines Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Additional Guidelines
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-base text-sm leading-relaxed font-light">
                  Additional information and guidelines regarding control are given in various other chapters of the Manual, particularly the chapters on goods train and passenger train operation.
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

export default ControlOrganization

