"use client"
import React from 'react'

const PlacementAndRemoval = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Joint Procedural Order for Placement and Removal of Container Rakes
            </h1>
            <p className="text-gray-300 text-lg mb-2">into & out of Goods Sheds/Sidings/Private Freight Terminals</p>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Section 1: Introduction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              Introduction
            </h2>

            <div className="space-y-6">
              <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-blue-400/30">
                <p className="text-gray-200 leading-relaxed">
                  The following Joint Procedural Order shall be followed while placing and clearing of container rakes into and out of sidings.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Securing of the Rake */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              I. Securing of the Rake Before Placement
            </h2>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-green-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200">After shunting into siding, the Shunting staff shall ensure that the container rake is standing within fouling mark/signals of the concerned line on both ends.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200">The rake shall be secured as per the rules for securing of vehicles laid down vide SR 5.23 of SCR G&SR.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200">The In-charge of the Shunting Staff shall ensure that the above instructions have been complied and sign in the &apos;Stabled Load Register&apos; at the station, duly filling all the required columns given in the Register, along with date and time.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-bold">4.</span>
                    <span className="text-gray-200">In the absence of separate shunting staff, Guard of the train shall supervise the shunting and stabling of the rake and sign in the &apos;Stabled Load Register&apos;.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-bold">5.</span>
                    <span className="text-gray-200">If the siding is away from the Station, a separate &apos;Stabled Load Register&apos; shall be maintained in Siding, under control of Goods Supervisor/Goods Clerk. If there is no Goods Supervisor/Goods Clerk is posted, the Register shall be maintained by the siding in-charge designated by the siding authorities, under advice to the Station Master.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-400 mr-3 mt-1 font-bold">6.</span>
                    <span className="text-gray-200">The Station Master/Goods Supervisor/Goods Clerk/the designated Siding in-Charge shall countersign against the signature of the Shunting-in-charge/Guard in the respective column in the &apos;Stabled Load Register&apos;, along with date and time.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Container Handling Precautions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-purple-500 to-pink-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </span>
              II. Precautions While Lifting-on and Lifting-off Containers
            </h2>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-purple-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200">Private operator supervisor at Goods Sheds/Sidings/Private Freight Terminals should monitor the Lifting-on (placing a container on the BLC wagon) and Lifting-off (lifting a container off the BLC wagon) Containers and all possible care should be taken to prevent damage to wagons by rough and careless handling. They will be held responsible for any damages.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200">Containers must be evenly loaded so that the load is equally distributed on all springs. No overloading beyond carrying capacity is to be allowed.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200">Before &apos;Lifting-on&apos; containers, siding authorities should check the condition of Automatic Twist Locks. In case of any defect/deficiency, same should be brought to the notice of the Railway staff for corrective action.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">4.</span>
                    <span className="text-gray-200">Containers should be lowered equally, parallel to locks and positioned without any jerk or sudden drop by the Reach stacker, duly ensuring that twist locks are properly locked.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">5.</span>
                    <span className="text-gray-200">The Reach Stacker deployed should be in good working condition.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">6.</span>
                    <span className="text-gray-200">Crane Operator should work very carefully and should blow horn to alert if extra load is exerted while unloading of containers. Road mobile cranes preferably should have the provision of load cell should be used for unloading.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">7.</span>
                    <span className="text-gray-200">One supervisor should be exclusively deputed by the siding authorities for ensuring proper locking/unlocking of ATLs. He will also guide the crane driver suitably. The supervisor shall also ensure that wagon is not lifted along with the container. In case any wagon is lifted, the supervisor shall alert the crane operator in this regard and ensure that the wagon&apos;s all wheels are again placed properly on the rails and will inform the same to the Siding authorities and Railway Authorities for further action.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">8.</span>
                    <span className="text-gray-200">While Containers are being lifted, it should be ensured that lifting is done gently, evenly and vertically and see that twist locks are unlocked and under frame is not lifted while lifting the container.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">9.</span>
                    <span className="text-gray-200">Crane operator and site supervisor should check and ensure that wagon is properly seated on bogie, wheels are not mounted on rails and wagon/bogie/wheel is not derailed while unloading/loading the containers.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">10.</span>
                    <span className="text-gray-200">Before releasing the unloaded/loaded rakes, the Yard Supervisor of CONCOR shall ensure that all the wagons are properly seated on bogies, wheels are not mounted on rails and wagon/bogie/wheels are not derailed while unloading/loading the containers and all the containers loaded are positioned on the wagons properly and locked.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">11.</span>
                    <span className="text-gray-200">Committee of Divisional Officers of Mechanical, Operating & Commercial departments should jointly inspect container sidings at regular intervals for ensuring availability and working condition of suitable machinery, facilities and proper Lift-on and Lift-off practices by the siding authorities.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">12.</span>
                    <span className="text-gray-200">Precautions to be taken before releasing the rake:</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">13.</span>
                    <span className="text-gray-200">On duty Commercial Staff/SMR on duty at Lift-on-Lift-off operated terminals of containers at Goods-sheds/sidings/Private Freight Terminals (PFTs) should issue Release Memo mentioning the loading and unloading particulars as per the extant guidelines and after obtaining Certificate/Memo/Letter from the container Operator, duly indicating the following:</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">14.</span>
                    <span className="text-gray-200">Checked the rake and found all the wheels of wagons are intact on the rails.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">15.</span>
                    <span className="text-gray-200">There are no abnormalities with regard to twist locks.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 font-bold">16.</span>
                    <span className="text-gray-200">Commercial staff should ensure that copies of Release Memo and Certificate/Memo/Letter of the Container Operator are handed over to the on duty Station Master.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Removal of Rake */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-orange-500 to-red-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              III. Removal of Rake from the Siding
            </h2>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-orange-500/20 to-red-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-orange-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200">All rakes examined on CC pattern should be subjected to safe to run examination by TXR (at TXR point) or GLP check by Guard &Loco pilots (at other than TXR points) after every loading/un-loading. Such safe to run examination should be followed by endorsement on original BPC. In such safe to run examination brake power, hanging parts and other defects which can be noticed visually on wagon loaded with containers, should be checked and given proper attention.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200">Container rakes detained for more than 24 hours at a TXR point should be subjected to safe to run examination and endorsement on BPC should be made by TXR that rake is safe to run for the remaining validity period of BPC. At non TXR point GDR check should be conducted.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200">The rake shall be drawn forward slowly while backing/bringing onto station&apos;s running line. The Guard/Shunting staff shall travel by the brake van and see that the train is moving safely. One of the Shunting staff shall stay at the end of the line where from the rake is being drawn and be watchful for any unusuals and be ready to alert the Loco Pilot to stop the train. The Loco Pilot too shall be in an alertness to stop the train immediately upon Guard&apos;s/Shunting Staff&apos;s warning.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: General Guidelines */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              General Guidelines
            </h2>

            <div className="space-y-4">
              <div className="bg-linear-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-cyan-400/30">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1 font-bold">1.</span>
                    <span className="text-gray-200">Siding Authorities shall provide pathways and lighting on both sides of the line(s), where from rakes will be cleared, for movement of Shunting staff/Guard/Loco Pilot while checking the rakes.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1 font-bold">2.</span>
                    <span className="text-gray-200">The Station Superintendents of Serving stations, Section TIs and SSE/C&W shall inspect the sidings regularly and counsel the siding staff, Shunting staff and Guards, who are involved in the activities detailed above. Acknowledgements shall be obtained from the staff who have been counselled.</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-3 mt-1 font-bold">3.</span>
                    <span className="text-gray-200">This JPO does not supersede any Agreements/Circulars, Manuals, etc., in this regard.</span>
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

export default PlacementAndRemoval