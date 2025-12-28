"use client"
import React from 'react'

const OpenDoorPrevention = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-5xl text-3xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              JPO for preventing open doors of wagons hitting Railway structures
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Introduction Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="bg-linear-to-br from-red-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-red-400/30">
              <p className="text-gray-200 leading-relaxed">
                Railway Board vide letter no.2018/M(N)/951/34 pt dated 23.6.2020 has issued instructions with approval of MT & MRS on GDR check and door working. These instructions are placed as annexure-1. In Railway Board letter, activities and responsibilities of Guards & Driver, Operating and Commercial staff on duty at terminals and Mechanical staff have been given in detail. This must be followed strictly.
              </p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="space-y-4">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200">Responsibility of closing and securing of the wagon doors, on both sides after loading/unloading lies with parties. Railway Supervisor including CGSR/Commercial Clerk or other staff of the goods shed shall ensure door closure before accepting the release of the rake. This should be explicitly mentioned in the release memo.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200">Loading/unloading party will inform to CGSR/SMR by a memo with wagon and defective door details, if any door is unfit for locking or cannot be secured. After receipt of the memo, CGSR/Dy.SS/SMR will take decision to call C&W staff for necessary repair if required.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200">GDR check has to be conducted as per RB guidelines before drawing out of the rake and GDR memo has to be signed as prescribed.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">4.</span>
                    <span className="text-gray-200">At the time of issue of fresh BPC, Train Examination Staff should ensure that all doors are in working condition with all door fittings, all the doors are properly closed and secured. BPC should be clearly endorsed by hand or by rubber stamp as &quot;ALL DOORS CHECKED AND FOUND WORKING&quot;.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">5.</span>
                    <span className="text-gray-200">Crew shall ensure that BPC has endorsement of &quot;ALL DOORS CHECKED AND FOUND WORKING&quot; during issue of fresh BPC after C&W examination.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">6.</span>
                    <span className="text-gray-200">The JCB or other machines shall not be deployed for closing of wagon doors. Coal or material accumulated in the door grooves should be cleaned by the unloading party instead of forcefully closing or mishandling of the door.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">7.</span>
                    <span className="text-gray-200">For closing and locking of doors, unloading party staff should carry required tools.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">8.</span>
                    <span className="text-gray-200">In case minor defect in the door, wagon may be permitted with door secured properly in such that there is no possibility of its opening during run or hitting any fixed structures or causing damage to any person. Details of such wagons should be informed to Divisional Control for taking required follow up action.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">9.</span>
                    <span className="text-gray-200">During loading/unloading wagon door should not be mishandled and allowed to be hit by truck etc. Adequate distance of truck from wagon door should be maintained to eliminate chances of damage to wagon doors.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1 font-bold">10.</span>
                    <span className="text-gray-200">In case any damage to the wagon door or wagon by the loading/unloading party, the same should be recorded by CGSR/SMR and inform to C&W staff. The cost of such damages shall be raised.</span>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">11.</span>
                    <span className="text-gray-200">Wherever C&W staff is not posted and in case the problem of doors not closing is highlighted, the C&W staff shall be informed by CGSR/SMR to attend such work promptly.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">12.</span>
                    <span className="text-gray-200">On receiving information, C&W staff shall rectify/secure defective doors and give fitness of these wagons. In case wagons cannot be repaired they should be detached.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">13.</span>
                    <span className="text-gray-200">Enroute detection of open/hanging door is an important issue from safety and operational point of view. All Gateman, Pointsmen, ASM/Dy.SS, Station staff, patrolling staff and the crew of the passing train should lookout for unsafe wagon doors and inform to next station.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">14.</span>
                    <span className="text-gray-200">The crew on run should look back frequently to see whether the doors are in safe condition. In case any unsafe door is noticed, Station master of next station should be informed giving approximate location of the wagon in the rake. Station staff along with Asst. Driver and Guard and any other Railway staff available in that station, will make all possible efforts to close/secure the doors.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">15.</span>
                    <span className="text-gray-200">When the door could not be closed due to any defect, the decision of calling C&W staff at that station/detachment of wagon/permitting rake up to the next operationally convenient point will be taken by the Operating staff. While calling C&W staff, details of wagons like wagon number and type of defect should be informed to them. Before allowing movement of such wagons, concerned staff should ensure its safety.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">16.</span>
                    <span className="text-gray-200">In case an unsafe door is detected in the block section, then Guard and LP/ALP with the help of any available Railway staff in the section will try to secure the door by all means available with them. If it is not possible to close/secure the door, train crew shall clear the block section in consultation with Control. Such trains should be received on non-platform lines.</span>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">17.</span>
                    <span className="text-gray-200">RPF personnel wherever posted in Goods sheds/sidings or yards should ensure that no tampering takes place with the closed wagon doors. As it is possible that some miscreant may open the door for the purpose of pilferage or collection of residual material in the wagon.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">18.</span>
                    <span className="text-gray-200">Proper investigation for open door incidents must be done and responsibility fixed.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">19.</span>
                    <span className="text-gray-200">Cameras should be installed at major loading/unloading terminals to capture recording of rakes while entering/leaving the siding.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">20.</span>
                    <span className="text-gray-200">During Loading of commodity &apos;&apos;Loading Pattern&quot; as recommended by RDSO to be strictly followed to avoid contents falling on doors.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">21.</span>
                    <span className="text-gray-200">Engineering, S&T departments should ensure that fixed structures installed are as per Indian Railway Schedule of Dimensions 2004 and amendments there in.</span>
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

export default OpenDoorPrevention