"use client"
import React from 'react'

const BeatOfART = () => {
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
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-6xl text-3xl font-bold bg-linear-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              BEAT of ARTs, ARMVs & 140T BD Cranes with its normal jurisdiction on SCR
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-purple-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* BEAT of ARTs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-green-500 to-emerald-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              BEAT of ARTs with its normal jurisdiction on SCR
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - SC - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: SC-ALER, SC-WADI, VKB-PRLI, KHNP-TJSP, SC-DHNE, DKC-KSN, GWD-RC, SC-AKE</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - KZJ - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: KZJ-KI, KZJ-ALER, KZJ-PDPL, DKJ-MUGR, KRA-SYI-SPSG, MTMI-JNPD, BDCR-JVRB</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - BPA - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: BPA-BPQ, BPA-PDPLKRMR, MAGH-GDCR</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">HYB - NZB - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: NZB-AKE, NZB-MUE, NZB-KRMR, AKE-MDAK, MOB-GJWL, JKM-BDHN</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - BZA - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: BZA-KI, BZJ-CJM, BZA-BMD, BZA-MTM, GDV-BVRM</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - RJY - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: RJY-DVD, RJY-BMD, SLO-COA, NDD-NS</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - BTTR - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: BTTR-GDR, BTTR-CJM, VRJN-KAPT, VRJN-OBVP</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - GTL - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: GTL-WD, GTL-BAY, GTL-NDL-YA, GTL-KLU, GTL-YA, NDL-YA</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - RU - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: RU-KPD, RU-GDR, RU-YA, HX-PDMI</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - DMM - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: DMM-PAK, DMM-GY</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GNT - GNT - &quot;B&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: GNT-KCC, GNT-PGDP, GNT-TEL-RAL, GNT-NDL, NDKD-MCLA, VNUP-JNPD, PGRN-SYM</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">NED - PAU - &quot;A&quot; Class</h3>
                <div className="bg-linear-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-green-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: PAU-MMR, PAU-MUE-PMKT, PBN-PRLI, PAU-AK</p>
                </div>
              </div>
            </div>
          </div>

          {/* BEAT of ARMVs Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </span>
              BEAT of ARMVs with its normal jurisdiction on SCR
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - SC - Scale-I - SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: SC-ALER, SC-WADI, VKB-PRLI, SC-AKE, KHNP-TJSP, DKC-KSN, GWD-RC, PGDP-NLDA, SC-DHNE</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - KZJ - Scale-I - HS-SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: KZJ-KI, KZJ-ALER, KZJ-PDPL, DKJ-MUGR, KRA-SYISPSG, MTMI-JNPD, KZJ-BPQ, PDPL-KRMR</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">HYB - NZB - Scale-I - SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: NZB-AKE, NZB-MUE, NZB-KRMR, NZB-MDAK, MOB-GJWL, NZB-BDHN</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - BZA - Scale-I - HS-SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: BZA-KI, BZJ-CJM, BZA-BMD, BZA-MTM, GDV-BVRM</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - RJY - Scale-I - SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: RJY-DVD, RJY-BMD, SLO-COA, NDD-NS</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - BTTR - Scale-I - SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: BTTR-GDR, BTTR-CJM, VRJN-KAPT, VRJN-OBVP</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - GTL - Scale-I - HS-SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: GTL-WD, GTL-BAY, GTL-NDL, NDL-YA, GTL-KLU, GTL-YA</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - RU - Scale-I - Conventional</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: RU-KPD, RU-GDR, RU-YA, HX-PDMI</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - DMM - Scale-I - Conventional</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: DMM-PAK, DMM-GY</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GNT - GNT - Scale-I - HS-SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: GNT-MCLA, GNT-TEL, TEL-RAL, NDKD-NLDA, GNT-NDL, GNT-KCC, VNPD-JNPD, PGRN-SYM</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">NED - PAU - Scale-I - HS-SPARMV</h3>
                <div className="bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-blue-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: PAU-MMR, PAU-MUE, MUE-PMKT, PBN-PRLI, PAU-AK</p>
                </div>
              </div>
            </div>
          </div>

          {/* Beat of 140T BD Crane Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <h2 className="lg:text-3xl text-2xl font-bold text-white mb-8 flex flex-col lg:flex-row gap-4 items-center justify-center">
              <span className="bg-linear-to-r from-yellow-500 to-amber-500 lg:p-4 p-2 rounded-full mr-4 shadow-lg">
                <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Beat of 140T BD Crane with its normal jurisdiction on SCR
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - SC - &quot;A&quot; Class - Cowans Sheldon New</h3>
                <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: SC-ALER, SC-WADI, SC-DHNE, DKC-KSN, GWD-RC, BN-NLDA, VKBUDGR, KHNPTJSP, SC-MUE, TLPRRCPT, MOBGJWL, AKEMDAK, JKMBDHN, MLY-SNF (By-pass)</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">SC - KZJ - &quot;A&quot; Class - Cowans Sheldon Old</h3>
                <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: KZJ-BPQ, KZJ-KI, KZJ-ALER, DKJMUGR, KRA-SYI, MAGHGDCR, PDPL-NZB, MTMIJNPD, BDCRJVRB</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">BZA - BZA - &quot;A&quot; Class - Cowans Sheldon Old</h3>
                <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: BZA-DVD, BZA-GDR, BZA-NLDA, VNUPJNPD, BZA-MTM, GDVBVRM, NDD-NS, SLO-COA, GNT-TELRAL, NDKDMCLA, GNT-DKD, PGRNSYM, VRJNOBVP, VRJNKAPT</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">GTL - GY - &quot;A&quot; Class - Cowans Sheldon Old</h3>
                <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: GY-RUTPTY, TPTY-KPD, RU-GDR, GY-GTLWADI, GY-DMM, GTL-KLU, DMM-PAK, GTL-BAY, GTL-DKD, NDL-YA, HX-PDMI, GY-PDL</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-2 mb-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <h3 className="lg:text-xl text-lg font-bold text-white mb-4">NED - PAU - &quot;A&quot; Class - Gottwald New</h3>
                <div className="bg-linear-to-br from-yellow-500/20 to-amber-500/20 backdrop-blur-lg rounded-xl p-4 shadow-lg border border-yellow-400/30">
                  <p className="text-gray-200 leading-relaxed">Beat: PAU-MMR, PAU-MUE, PAU-AK, PAU-PBNUDGR, MUEPMKT</p>
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

export default BeatOfART