'use client'
import { 
  Search,
  FileText,
  ClipboardCheck,
  Eye} from 'lucide-react'

const Inspections = () => {
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
                      <Search className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="lg:text-5xl text-2xl font-extrabold bg-linear-to-r from-white via-purple-100 via-pink-100 to-rose-200 bg-clip-text text-transparent mb-4 animate-fade-in drop-shadow-2xl px-4">
              Inspections
            </h1>
            <div className="w-32 h-1 bg-linear-to-r from-transparent via-purple-400 to-transparent mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            
            {/* Objects of Inspections Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-blue-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Objects of Inspections
                </span>
              </h2>
              <div className="bg-linear-to-br from-blue-500/20 via-cyan-500/15 to-indigo-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  The Railway network is spread over a vast area. It is estimated that for running a train over a section, cooperation and co-ordination of about (2000) thousand Railway staff is essential. A vast organisation, such as the Indian Railway system functions on the basis of a carefully arranged system of selective Autonomy, Accountability and Responsibility. Rules and instructions lay down the procedure of work and the staff are properly trained and the officials at various levels monitor, supervise and direct the staff from time to time by different means. Inspection is an important function of management, particularly in the field of Railway Operations to ensure efficient working at all levels.
                </p>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mb-4">
                  Following objects shall be borne in mind while conducting inspection:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">1.</span> Verify whether every Railway employee is fully conversant with rules, instructions and procedures relating to his duties.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">2.</span> Ascertain that the staff is performing their duties according to rules, instructions and the procedure in force.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-blue-200">3.</span> Detect undesirable shortcuts, irregularities or unsafe practices being resorted to by the staff taking remedial action which may be:-
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(a) Educative, in case these are resorted to out of ignorance.</li>
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(b) Corrective, if there is something wrong in the working conditions, or there are system deficiencies.</li>
                      <li className="text-blue-50/95 lg:text-sm text-xs leading-relaxed">(c) Punitive, if resorted to wilfully or negligently and persisting even after repeated guidance and counselling.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">4.</span> Observe the conditions actually prevailing at the work spots to understand the difficulties experienced by staff including their personal grievances and seeking on the spot redressal.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">5.</span> Ensure that full complement of staff and equipment is available and staff have knowledge of its operation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">6.</span> Ascertain that registers, documents and other records are being maintained and preserved according to instructions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">7.</span> monitor the behaviour of staff towards customers, particularly promptness of response and willingness to help.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">8.</span> Assess as far as possible that the interest of the public and the Railways are kept in view and safeguarded.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">9.</span> Inculcate discipline and build up the morale of the workers.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">10.</span> Check the compliance of previous inspection reports.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-blue-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-blue-200">11.</span> Analyse efficiency targets vis-à-vis performance.
                    </p>
                  </div>
                </div>
                <p className="text-blue-50/95 lg:text-lg text-base leading-relaxed font-light mt-6">
                  Inspections, thus provide the means to achieve efficiency and effectiveness through spot checks and personal contact with the staff on line. In order to accomplish these objectives, inspections have to be carried out at officer&apos;s and Supervisor&apos;s level. The inspecting official has to command the respect and obedience of staff, for his inspection to be effective and beneficial and as such his conduct should be exemplary.
                </p>
              </div>
            </div>

            {/* Types of Inspections Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-purple-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-purple-500/30 to-pink-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-pink-500/30 transition-all duration-500">
                  <ClipboardCheck className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-purple-100 bg-clip-text text-transparent">
                  Types of Inspections
                </span>
              </h2>
              <div className="bg-linear-to-br from-purple-500/20 via-pink-500/15 to-rose-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-purple-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  The following inspections have to be carried out by operating and safety officials:-
                </p>
                <div className="space-y-6">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Regular Inspection (six monthly) -</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Each station on the division must be inspected in details at least once in every six months i.e. January to June and July to December covering the various aspects of safety, operations and allied matters including staff matters. The inspection shall be carried out by the Sr.DOM/DOM/Sr.DSO/DSO/ AOM /ARM/SS/SM/DTI/TI etc. While minor stations are inspected by the TI concerned, the DRM will nominate important stations (including all such stations which do not fall within the jurisdiction of TI, that is those which have SS/SM in grade equivalent to or higher than those of TI of the section) to be inspected by the nominate officers. Each officers will be allotted at least two such a stations. The officials concern shall also spend the night at the station. Regular inspections have to be comprehensive in nature.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Safety Inspections (monthly) –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Safety inspections are basically meant to be preventive by detecting short cut methods and unsafe practices resorted to by train passing, running and maintenance staff. The irregularities noticed must be personally brought to the notice of the Station Master and remedial measures initiated promptly. In case of any serious irregularity, the inspecting officials must at once inform Sr.DSO/DSO or Sr.DOM/DOM concerned personally or telephonically beside making a written report.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Surprise Inspection (Monthly)</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed mb-2">
                      Such inspections must have an element of surprise. Officers and Inspectors may inspect a station either while passing through it or during the short time at their disposal or when they want to check some aspect at the station without prior notice. Apart from any special aspect, they intend to check; they must also observe and take note of the irregularities/ deficiencies or good work being done which may come to their notice. They may check as many items as possible as time permits. Minimum 6 such inspections in a month shall be conducted by the sectional TI.
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      In the automatic signalling territory, besides surprise inspections, ambush checks should also be conducted to check whether the Loco pilots / Motormen are observing the rules regarding passing of automatic signal at &apos;ON&apos; position etc. Similarly loco pilots&apos; whistling at whistle boards on apporoach of LC gates also needs to be checked
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Night Inspection (fortnightly) –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Night inspection must be carried out by the Officers and Supervisors frequently to appreciate the working conditions as well as to detect the irregularities. Surprise night inspection may be carried out between 00 hrs. to 4 hrs. because during this period, the staff is likely to be lethargic and negligent in duties. Similarly, instances of staff sleeping on duty, dim signal lamps and indicators, unauthorised absence from duty and many other irregularities, unsafe and undesirable practices may come to notice between 00 hrs. to 4 hrs. Frequent night inspections are a must and SS/SM must conduct surprise night inspections fortnightly of their station between 00 to 4 hrs. and take remedial measures to rectify the irregularities and deficiencies noticed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Level Crossing Inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Level crossing gates should be inspected in detail with a view to ensure safety of rail and road traffic, availability of safety equipments, knowledge of Gatemen regarding rules pertaining to his duties and loco pilot&apos;s whistling while passing the LC gates.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Surprise Inspection by Road –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      These inspections have an element of surprise in them. To create a sense of alertness amongst the staff the road inspection should be carried out without informing anybody.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Footplate Inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Footplate Inspections are carried out by travelling on the engine of running trains. These afford an opportunity to the inspecting official to observe and check certain aspect of working on the engine, along the track and at the stations which can not be checked otherwise. To achieve the purpose for which footplate inspections are carried out, it is essential that these are done by day and by night, in clear weather and when the visibility is poor due to thick, foggy or tempestuous weather.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Joint Footplate Inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      These are carried out jointly with officials of Mechanical, Electrical (Running), Permanent Way and Signalling branches e.g checking the visibility of the signals, their locations, operations, lighting up, speed restrictions and caution boards rail wheel interaction and loco pilots&apos; and assistant loco pilots&apos; operating behaviour.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Surprise Speed checks –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      In order to ensure the maximum permissible speed are not exceeded, permanent and temporary speed restrictions are correctly observed and limits of speed over turnouts and facing points are observed, surprise speed checks should be conducted as per schedule.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Running Rooms Inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      During regular, safety, surprise and night inspections opportunity should also be taken to inspect running rooms to ensure that running staff are able to get proper food and resting facilities. Running rooms should also be jointly inspected by the team of officers as nominated and prescribed.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Ambush checks –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      It is essential to ensure rigid observation of rules when automatic stop signals are passed in &apos;ON&apos; position. The inspecting officials should carry out ambush checks with the help of signalling officials who will arrange to put an automatic stop signal to &apos;ON&apos; position. Such checks should be arranged in consultation with Sr.DOM/DOM.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Running Trains Inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Whenever an operating officer or an inspector is travelling by a train on duty, he must pay special attention in observing the performance of duties by Guards, Loco pilots, Station staff, Gatemen and others.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Loco shed inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      One loco shed shall be inspected once in 3 months individually as well as jointly.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">C & W Depots inspections –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Each C & W depot shall be inspected once in 3 months individually as well as jointly.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Accident Relief / Medical Equipment Scale I (ARME) –</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Each Medical Van shall be inspected once in 3 months (see Accident Manual).
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-purple-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-purple-200">Accident Relief Train (ART) -</span>
                    </p>
                    <p className="text-purple-50/95 lg:text-sm text-xs leading-relaxed">
                      Each Break down train shall be inspected once in 3 months (see Accident Manual).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inspection Quotas Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-green-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-green-500/30 to-emerald-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-emerald-500/30 transition-all duration-500">
                  <ClipboardCheck className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-green-100 bg-clip-text text-transparent">
                  Inspection Quotas
                </span>
              </h2>
              <div className="bg-linear-to-br from-green-500/20 via-emerald-500/15 to-teal-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-green-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  The minimum number of regular, surprise, safety and night inspections will be carried out by officers and inspectors as per quota fixed from time to time. The tentative schedule of inspection is attached.
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 mb-6">
                  <h3 className="text-green-200 font-bold lg:text-xl text-lg mb-4">Schedule of Inspections by Operating/Safety Officers and Transportation Inspectors</h3>
                  <div className="overflow-x-auto">
                    <div className="min-w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 text-xs">
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">S.No.</div>
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">Type/Nature of inspections</div>
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">Sr.DOM/DOM Area Manager/Area Officer</div>
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">AOM(M)</div>
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">Sr.DSO/DSO</div>
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">AOM(G)</div>
                        <div className="font-semibold text-green-200 p-2 bg-white/5 rounded">TIs</div>
                        
                        <div className="p-2">1</div>
                        <div className="p-2">Regular Inspection - Half yearly</div>
                        <div className="p-2">2 important stations as nominated by the DRM</div>
                        <div className="p-2">2 important stations as nominated by the DRM</div>
                        <div className="p-2">2 important stations as nominated by the DRM</div>
                        <div className="p-2">2 important stations as nominated by the DRM</div>
                        <div className="p-2">2 important stations as nominated by the DRM</div>
                        <div className="p-2">All stations in their jurisdiction once in three months.</div>
                        
                        <div className="p-2">2</div>
                        <div className="p-2">Safety Inspections</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">1 station every month</div>
                        <div className="p-2">4 stations every month</div>
                        <div className="p-2">6 stations every month</div>
                        <div className="p-2">All stations in their jurisdiction once in a month</div>
                        
                        <div className="p-2">3</div>
                        <div className="p-2">Surprise Inspections</div>
                        <div className="p-2">No quota</div>
                        <div className="p-2">No quota</div>
                        <div className="p-2">Minimum 2 stations per month</div>
                        <div className="p-2">As often as possible (minimum 2 every month)</div>
                        <div className="p-2">As often as possible (minimum 3 every month)</div>
                        <div className="p-2">As often as possible (minimum 6 every month)</div>
                        
                        <div className="p-2">4</div>
                        <div className="p-2">Night Inspections -- i. Level crossing ii. Station iii. Footplate on goods train</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">2 per month</div>
                        <div className="p-2">2 per month</div>
                        <div className="p-2">3 per month</div>
                        
                        <div className="p-2">5</div>
                        <div className="p-2">Level Crossings during day time</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">2 per month</div>
                        <div className="p-2">2 per month</div>
                        <div className="p-2">3 per month</div>
                        
                        <div className="p-2">6</div>
                        <div className="p-2">Surprise road Inspections</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">---</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        <div className="p-2">1 per month</div>
                        
                        <div className="p-2">7</div>
                        <div className="p-2">Individual footplate inspections</div>
                        <div className="p-2">1 section per month by both i. Mail/Express/Pass. ii. Goods train</div>
                        <div className="p-2">1 section per month by both i.Mail/Express/Pass. ii. Goods train</div>
                        <div className="p-2">1 section per month by both i. Mail/Express /Pass. ii. Goods train</div>
                        <div className="p-2">1 section per month by both i. Mail/Express/Pass ii. 2 Goods train</div>
                        <div className="p-2">1 section per month by both i. Mail/Express/Pass ii. 2 Goods train</div>
                        <div className="p-2">1 section per month by both i. Mail/ Express/Pass ii. 3 Goods train</div>
                        
                        <div className="p-2">8</div>
                        <div className="p-2">Joint Footplate Inspections</div>
                        <div className="p-2">---</div>
                        <div className="p-2">---</div>
                        <div className="p-2">---</div>
                        <div className="p-2">One section every quarter covering the entire division once a year.- Up and Dn separately by day and night.</div>
                        <div className="p-2">One section once a month covering the entire division once a year.- Up and Dn separately by day and night.</div>
                        <div className="p-2">One section once a month covering entire jurisdiction once in six months including Up/ Dn day/night separately.</div>
                        
                        <div className="p-2">9.</div>
                        <div className="p-2">Surprise speed checks</div>
                        <div className="p-2">No quota</div>
                        <div className="p-2">No quota</div>
                        <div className="p-2">No quota</div>
                        <div className="p-2">3 per month</div>
                        <div className="p-2">3 per month</div>
                        <div className="p-2">5 per month</div>
                        
                        <div className="p-2">10</div>
                        <div className="p-2">Running Rooms Regular Inspections</div>
                        <div className="p-2">1 major running room as identified by DRM-once a year (alongwith Sr.DEN and Sr.DEE</div>
                        <div className="p-2">1 major running room as identifi- ed by DRM-once a year (alongwith Sr.DEN and Sr.DEE</div>
                        <div className="p-2">All running rooms under Sr./DSOs charge of Mechanical & Electrical dept. (alongwith AEN AEE & AME</div>
                        <div className="p-2">All running rooms under Sr./ DSOs charge of Mechanical & Electrical dept. (alongwith Sr.DEN & Sr.DEE</div>
                        <div className="p-2">All running rooms under Sr./ DSOs charge once a year (alongwith with AEN and AEE</div>
                        <div className="p-2">Each running room under their jurisdiction once in a month.</div>
                        
                        <div className="p-2">11</div>
                        <div className="p-2">Ambush Checks in Automatic signalling territories</div>
                        <div className="p-2">--</div>
                        <div className="p-2">One during day and one during night</div>
                        <div className="p-2">One in a month</div>
                        <div className="p-2">One during day and one during night in a month.</div>
                        <div className="p-2">One during day and one during night in a month.</div>
                        <div className="p-2">One during day and one during night in a month.</div>
                        
                        <div className="p-2">12</div>
                        <div className="p-2">Running Trains Inspections</div>
                        <div className="p-2">As often as possible</div>
                        <div className="p-2">As often as possible</div>
                        <div className="p-2">As often as possible</div>
                        <div className="p-2">As often as possible</div>
                        <div className="p-2">As often as possible</div>
                        <div className="p-2">As often as possible</div>
                        
                        <div className="p-2">13</div>
                        <div className="p-2">Loco Shed Inspections</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">1 shed every 3 months</div>
                        <div className="p-2">1 shed every 3 months</div>
                        <div className="p-2">--</div>
                        
                        <div className="p-2">14</div>
                        <div className="p-2">Depots Inspections</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">1 Depots every 3 months</div>
                        <div className="p-2">1 Depots every 2 months</div>
                        <div className="p-2">--</div>
                        
                        <div className="p-2">15</div>
                        <div className="p-2">Accident Relief Medical Equipment Scale –I (ARMEs)</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">1 Medical van every quarter.</div>
                        <div className="p-2">1 Medical van every quarter.</div>
                        <div className="p-2">--</div>
                        
                        <div className="p-2">16</div>
                        <div className="p-2">Accident Relief Trains-(ARTs)</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">--</div>
                        <div className="p-2">1 ART every quarter</div>
                        <div className="p-2">1 ART every quarter</div>
                        <div className="p-2">--</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-green-50/95 lg:text-sm text-xs leading-relaxed mt-4">
                    Note: For S.No.10, 11 and 13 – all loco sheds, C&W Depots and Medical Vans are to be covered in a year either by DSO or AOM(G). The quotas had shown indicates the minimum inspections. Inspections in respect of above items and other items should be carried out as frequently as possible.
                  </p>
                </div>
              </div>
            </div>

            {/* General Guidelines for Inspecting Official Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-indigo-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-indigo-500/30 to-purple-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-purple-500/30 transition-all duration-500">
                  <Eye className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-indigo-100 bg-clip-text text-transparent">
                  General Guidelines for Inspecting Official
                </span>
              </h2>
              <div className="bg-linear-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-200">1.</span> Before commencing the inspection all inspection books should be called for and the notes made by other inspecting official should be carefully persued to check whether the staff have complied with their instructions. If any of these instructions have not been carried out written explanation of the Station Master should be obtained.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-200">2.</span> It shall not be enough merely to point out the irregularity of the staff; matters must be put right personally while at the station to the extent possible.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-indigo-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-indigo-200">3.</span> All books and registers inspected must be initialled and dated.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technique of Inspections Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl py-4 lg:px-10 px-2 border border-white/10 hover:border-white/30 hover:bg-white/10 hover:shadow-teal-500/20 transition-all duration-500 group">
              <h2 className="lg:text-4xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center text-center">
                <span className="bg-linear-to-r from-teal-500/30 to-cyan-500/30 lg:p-5 p-3 rounded-full shadow-xl backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:shadow-cyan-500/30 transition-all duration-500">
                  <FileText className="lg:w-10 lg:h-10 w-7 h-7 text-white drop-shadow-lg" />
                </span>
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Technique of Inspections
                </span>
              </h2>
              <div className="bg-linear-to-br from-teal-500/20 via-cyan-500/15 to-blue-500/10 backdrop-blur-lg rounded-2xl py-8 lg:px-10 px-4 shadow-xl border border-white/10 hover:border-white/20 transition-all duration-300">
                <p className="text-teal-50/95 lg:text-lg text-base leading-relaxed font-light mb-6">
                  It requires both expertise and experience to carry out intelligent inspections. To evolve a sound technique of inspections an inspecting official should:
                </p>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">1.</span> Have a clear understanding of the station lay out its signalling, special features of working and the instructions in regard to reception, despatch, crossing, shunting and running through of trains. For this he should have a good knowledge of not only General & Subsidiary Rules but also of Station Working Rules.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">2.</span> Select the feature of working which he intends to check during his inspection and should have a clear conception about them in his mind. For instance he may like to emphasise on the correct reception and despatch of trains and observance of safety rules by the staff or on utilisation of stock, detention to passenger or goods train, knowledge of staff etc.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">3.</span> Inspect the aspect of working by thorough inspection of books, registers, forms and equipments used for operations and secondly by means of personal observation of actual operations.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed mb-2">
                      <span className="font-semibold text-teal-200">4.</span> Be selective in choosing:
                    </p>
                    <ul className="ml-6 space-y-1">
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(a) The time and operations of personal observation.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(b) The documents, registers and forms for checks and cross checks.</li>
                      <li className="text-teal-50/95 lg:text-sm text-xs leading-relaxed">(c) The equipments for checking, its availability, adequacy, maintenance and its use.</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">5.</span> Select specific periods for checking registers books and forms keeping in view the purpose of inspection and time of inspections and time of disposal, should be subjected to concentrated, minute and probing checks and cross checks. It may be worth while to select two or more separate periods. One of these being that immediately preceding the day of inspection. This will help him in not only detecting the irregularities being committed but also whether these have been continuing for the past some time.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">6.</span> Discuss the irregularities or lapses noticed during inspection with the staff actually doing the work as well as those supervising their work. Such a discussion will prove to be educative and produce useful results.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-teal-50/95 lg:text-base text-sm leading-relaxed">
                      <span className="font-semibold text-teal-200">7.</span> Discuss, as far as possible, the points common to two or more branches, like the Signalling Interlocking branch or Loco Train Examining, Civil Engineering and Commercial Branches jointly for objectivity and acceptable solutions. This will help in not only arriving at correct conclusions and forming sound views but also in avoiding unnecessary correspondence.
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

export default Inspections
