"use client"
import React from 'react'

const MEMUTrains = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              MEMU Technical details
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Card */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <p className="text-gray-200 whitespace-pre-line leading-relaxed">
              {`MEMU Technical details
Sl.
No
Details of MEMU & EMU
Conv. MEMU
(Steel Spring)
Conv. MEMU
(Air Spring)
3-Phase MEMU
(on Board) IGBT based
Propulsion (MEDHA)
3-Phase MEMU (Under
Slung) IGBT based
propulsion (MEDHA)
3-Phase MEMU (on
Board) IGBT based
propulsion (BT)
1 Service Coaching Coaching Coaching Coaching Coaching
2 Lenth (mm) 21337 21337 21337 21337 21337
3 Height (mm) 4255 4255 4255 4255 4255
4 Weight (in tons) 60 60 60 60 60
5 Horse power
900 (TM – 4601)
1120- (4303/C1005)
900 (TM – 4601)
1120- (4303/C1005)
1450 1450 1450
6
Maximum Speed Certified by
RDSO
100 105 100 110 110
7
Maximum speed sanctioned by
CRS/GM
100 105 100 110 110
8 Axle load (in Tons)
MC : 20.32T
TC : 16.25 T
MC : 20.32T
TC : 16.25 T
MC : 18.135T
TC : 14.633 T
MC : 19.124 T
TC 7 : 16.816 T
TC 8 :17.103
MC : 18.35T
TC : 14.00 T
9 Type of Propulsion
Conventional
(Tap Changer & DC
Traction Motors)
Conventional
(Tap Changer & DC
Traction Motors)
IGBT IGBT IGBT
10 Type of Suspension Steel Spring Air Spring Air Spring Air Spring Air Spring
11 Tractive effort (in Tons) 9.6 9.6 14.27 14.28 13.4
12 Traction motor type DC series motor DC series motor
3 Phase Squirrel Cage
Induction Motor
3 Phase Squirrel Cage
Induction Motor
3 Phase Squirrel Cage
Induction Motor
13 Dynamic brake No No Regenerative Regenerative Regenerative
14 Gear ratio 1:4.55 1:4.55 23:103 23:103 23:103
15 Brake system EP brake system EP brake system EP brake system EP brake system EP brake system
16 No.of motors 04 04 04 04 04
17
Passenger Seating Capacity
( per Motor Coach)
65 65 55 84 65
18
Passenger Standing Capacity
( per Motor Coach)
150 150 171 195 142
19
Passenger Seating Capacity
( per Trailer Coach)
80 80 84 96 80
20
Passenger Standing Capacity
( per Trailer Coach)
200 200 241 247 245



EMU Technical details
Sl.
No
Details of MEMU & EMU
Conv. EMU
(Air Spring)
3-Phase EMU (On Board) IGBT
based propulsion (MEDHA)
1 Service Coaching Coaching
2 Lenth (mm) 21521 21521
3 Height (mm) 4398 4398
4 Weight (in tons) 60 60
5 Horse power (in HP) 900 1450
6 Maximum Speed Certified by RDSO 105 105
7 Maximum speed sanctioned by CRS/GM 100 105
8 Axle load (in Tons) 20 20
9 Type of Propulsion
Conventional
(Tap Changer & DC Traction Motors)
IGBT
10 Type of Suspension Air Spring Air Spring
11 Tractive effort (in Tons) 9.6 13.76
12 Traction motor type DC series motor 3 Phase Squirrel Cage Induction Motor
13 Dynamic brake No Regenerative
14 Gear ratio 1:4.55 23:103
15 Brake system EP brake system EP brake system
16 No.of motors 04 04
17 Passenger Seating Capacity ( per Motor Coach) 80 93
18 Passenger Standing Capacity ( per Motor Coach) 197 433
19 Passenger Seating Capacity ( per Trailer Coach)
84 ( C coach)
76 ( D coach)
93 (DTC)
104 (TC)
110 ( NDTC)
20 Passenger Standing Capacity ( per Trailer Coach)
272 ( C coach)
277 ( D coach)
433 (DTC)
449 (TC)
402 ( NDTC)`}
            </p>
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

export default MEMUTrains