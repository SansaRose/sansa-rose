"use client"
import React from 'react'

const LHBCoaches = () => {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <h1 className="lg:text-4xl text-2xl font-bold bg-linear-to-r from-white via-yellow-100 to-orange-100 bg-clip-text text-transparent mb-4 animate-fade-in">
              Leading Dimensions of LHB Coaches
            </h1>
            <div className="w-24 h-1 bg-linear-to-r from-yellow-500 to-orange-600 mx-auto mb-6 rounded-full"></div>
          </div>

          <div className="space-y-6">
            {/* Section 1 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-blue-500 to-cyan-500 lg:p-4 p-2 rounded-full shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Leading dimensions of Hybrid SG Variant Coaches (LHB Shell with ICF Bogie) with air spring suspension
              </h2>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                  {`Sl.
No.
Description Code
Length
overBuffer
s(mm)
Length
overBody
(mm)
Overall
Width
(mm)
Height of
floor from
RL (mm)
Tare
Weight
(T)
Carrying
Capacity
(T)
Bogie
Centres
(mm)
Wheel
Base
(mm)
Max.
Axle
Load (T)
Accommodation
(Seating/Sle
eping)
1 AC IstClass SWGFAC 24000 23540 3240 1320 47.52 2.04 14900 2896 16.25 24/24
2 AC 2 tier SWGACCW 24000 23540 3240 1320 46.87 4.44 14900 2896 16.25 54/54
3 AC 3 tier SWGACCN 24000 23540 3240 1320 50.60 5.66 14900 2896 16.25 72/72
4
AC Ist class cum
2 tier sleeper
SWGFCWA
C
24000 23540 3240 1320 47.20 3.16 14900 2896 16.25
10-Ist
28- 2 tier
5
AC First class cum
3 tier sleeper
SWGFCNAC 24000 23540 3240 1320 49.10 4.96 14900 2896 16.25
10- Ist
38- 3 tier
6
AC 2 tier cum
3 tier sleeper
SWGCWNA
C
24000 23540 3240 1320 48.70 5.24 14900 2896 16.25
24-2 tier
40- 3tier
7 AC chair car SWGSCZAC 24000 23540 3240 1320 44.66 5.10 14900 2896 16.25 83 seats
8
AC 3 tier sleeper
cum AC pantry car
SWGCBNAC 24000 23540 3240 1320 51.2 6 14900 2896 16.25 35/35
9
2nd class cum luggage & brake
van with AC &Non AC disabled
compartment
SGSLRDAC 24000 23540 3240 1320 48.1 10.3 14900 2896 16.25
40-2nd
10
2nd class with disabled friendly
compartment lugg& brake van
SGSLR 24000 23540 3240 1320 38.30 16.0 14900 2896 16.25 60-seat
11
High capacity motor cum
parcel van
SVPHU 24000 23540 3240 1320 34 30 14900 2896 16.25 30 tonne
12 2nd class SGS 24000 23540 3240 1320 37.6 12 14900 2896 13 99 seat
13 2nd class sleeper SWGSCN 24000 23540 3240 1320 39.6 6 14900 2896 13 80/80
14
2nd class with disabled friendly
compartment lug & brake van
SGSLRD 24000 23540 3240 1320 37.9 3.3 14900 2896 13
30-2nd
4- disabled
15
2nd class with disabled friendly
compartment and brake van
SGSRD 24000 23540 3240 1320 37.9 3.3 14900 2896 13
69-sleeper
4- disabled
16 2nd class day coach SSGCZ 24000 23540 3240 1320 42.4 8.8 14900 2896 13 86-seat
17
Non AC Pantry cum sleeper
class
SWGCBN 24000 23540 3240 1320 40.2 6.2 14900 2896 13
40/40
12- pantry
18 Chair car (Non AC) SWGSCZ 24000 23540 3240 1320 39.1 9.7 14900 2896 13 114-seat`}
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-emerald-500 to-green-500 lg:p-4 p-2 rounded-full shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Leading dimensions of LHB SG Variant coaches with FIAT bogies
              </h2>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                  {`Sl.
No
Description Code
Length
over
Buffers
(mm)
Length
Over Body
(mm)
Overal
l
Width
(mm)
Height of
floor from
RL (mm)
Tare
Weight
(T)
Carrying
Capacity
(T)
Bogie
Centres
(mm)
Wheel
Base
(mm)
Max.
Axle
Load (T)
Accommodation
(Seating/
Sleeping)
1 AC Ist class Sleeper LWGFAC 24000 23540 3240 1320 45.90 4.80 14900 2560 16.25
24 to SEAT/
SLEEP
2 AC 2 tier Sleeper LWGACCW 24000 23540 3240 1320 48.00 7.04 14900 2560 16.25
54 to SEAT/
SLEEP
3 AC 3 tier Sleeper LWGACCN 24000 23540 3240 1320 50.50 8.00 14900 2560 16.25
72 to SEAT/
SLEEP
4 Non-AC 3-Tier sleeper LWGSCN 24000 23540 3240 1320 36.28 6.63 14900 2560 16.25
78 to SEAT/
SLEEP
5 Non-AC second class LGS 24000 23540 3240 1320 35.29 15.20 14900 2560 16.25 99 to SEAT
6
A/C First class cum 2Tier
sleeper
LWGFCWAC 24000 23540 3240 1320 --- --- 14900 2560 16.25 ---
7
A/C First class cum 3-Tier
sleeper
LWGFCNAC 24000 23540 3240 1320 --- --- 14900 2560 16.25 ---
8 A/C 2-Tier cum 3-Tier LWGCWNAC 24000 23540 3240 1320 --- --- 14900 2560 16.25 ---
9
Non-AC Second class
Luggage cum Guard van
LGSLR 24000 23540 3053 1320 35.40 9.10 14900 2560 16.25 36 to SEAT`}
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl py-6 px-3 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h2 className="lg:text-3xl text-2xl font-bold text-white mb-6 flex flex-col lg:flex-row gap-4 items-center justify-center">
                <span className="bg-linear-to-r from-amber-500 to-red-500 lg:p-4 p-2 rounded-full shadow-lg">
                  <svg className="lg:w-8 lg:h-8 w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </span>
                Leading dimensions of LHB Variant coaches with FIAT bogies
              </h2>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-gray-200 whitespace-pre-line leading-relaxed">
                  {`Sl.
No
Description Code
Secondary
Suspension
(Coil/Air Spring)
Length over
Buffers
(mm)
Length
Over
Body
(mm)
Overall
Width
(mm)
Height
of floor
from
RL (mm)
Tare
Weight
(T)
Carrying
Capacity
(T)
Bogie
Centres
(mm)
Wheel
Base
(mm)
Max.
Axle
Load
(T)
Accommodation
(seating/
sleeping)
1 Non-AC second class LWS
140 kN
Air spring
24000 23540 3240 1320 43.2 13.00 14900 2560 16.25
passengers to seat
-100
2 Non-AC second class LS2 Coil Spring 24000 23540 3240 1320 43.19 13.00 14900 2560 16.25 200/16t
3 Non-AC second class LS3
Coil Spring/
140kN
24000 23540 3240 1320 43.0 13.00 14900 2560 16.25
passengers to seat
-99
4 Non-AC second class LS5
140 kN
Air spring
24000 23540 3240 1320 43.19 13.00 14900 2560 16.25
passengers to seat
-100
5 Non-AC second class LS 5A
160 kN
Air spring
24000 23540 3240 1320 41.19 13.00 14900 2560 16.25
passengers to seat
-100
6
Non-AC Second class chair
car
LWSCZ Coil Spring 24000 23540 3240 1320 40.55 8.64 14900 2560 16.25 106 to seat
7
Non-AC Second class chair
car
LWSCZ1 Coil Spring 24000 23540 3240 1320 41.60 8.64 14900 2560 16.25 102 to seat
8
Non-AC Second class chair
car
LWSCZA
140 kN
Air spring
24000 23540 3240 1320 43.29 8.64 14900 2560 16.25 102 to seat
9
Non-AC Second class chair
car
LWSCZAA
160 kN
Air spring
24000 23540 3240 1320 43.29 8.64 14900 2560 16.25 108 to seat
10 AC 2nd class chair car LWSCZAC Coil Spring 24000 23540 3240 1320 41.03 9.27 14900 2560 16.25 78 to seat
11 AC 2nd class chair car LWSCZAC2
120 kN
Air spring
24000 23540 3240 1320 41.03 9.27 14900 2560 16.25 78 to seat
12
AC Ist class chair car
(executive chair car)
LWFCZAC Coil Spring 24000 23540 3240 1320 41.37 7.36 14900 2560 16.25 56 to seat
13
AC Ist class chair car
(executive chair car)
LWFCZAC2
120 kN
Air spring
24000 23540 3240 1320 41.37 7.36 14900 2560 16.25 56 to seat
14 AC chair car double Decker LWCZDAC
120 kN
Air spring
24000 23540 3050
353/
1320
49.15 10.24 14900 2560 16.25 120 to seat
15 AC chair car double Decker LWSCZDAC1
120 kN
Air spring
24000 23540 3053
353/
1320
49.60 8.64 14900 2560 16.25 120 to seat
16 AC Vista Dome Chair Car LWCTZAC
120 kN
Air spring
24000 23540 3240 1320 45.07 4.64 14900 2560 16.25 44 to seat
17 Non-AC 3-Tier sleeper LWSCN Coil Spring 24000 23540 3240 1320 36.28 6.63 14900 2560 16.25 78 to seat/ sleep
18 Non-AC 3-Tier sleeper LWSCN1 Coil Spring 24000 23540 3240 1320 41.63 -- 14900 2560 16.25 80 to seat/ sleep
19 Non-AC 3-Tier sleeper LWSCNA
140 kN
Air spring
24000 23540 3240 1320 42.73 6.4 14900 2560 16.25 80 to seat/ sleep
20 Non-AC 3-Tier sleeper LWSCNAA
160 kN
Air spring
24000 23540 3240 1320 45.3 5.76 14900 2560 16.25 80 to seat/ sleep
21 AC Ist class SLEEPER LWFAC Coil Spring 24000 23540 3240 1320 43.30 1.92 14900 2560 16.25 24 to seat/ sleep
22 AC Ist class SLEEPER LWFAC2
120 kN
Air spring
24000 23540 3240 1320 45.59 2.0 14900 2560 16.25 24 to seat/ sleep
23
A/C First class cum 2Tier
sleeper
LWFCWAC Coil Spring 24000 23540 3240 1320 47.35 3.20 14900 2560 16.25
ac 1 tier to
seat/sleep -10
ac 2 tier to
seat/sleep -28
24
A/C First class cum 2Tier
sleeper
LWFCWACA
120 kN
Air spring
24000 23540 3240 1320 47.05 3.20 14900 2560 16.25
ac 1 tier to
seat/sleep -10
ac 2 tier to
seat/sleep -28
25 AC 2 tier SLEEPER LWACCW Coil Spring 24000 23540 3240 1320 44.50 4.32 14900 2560 16.25 52 to seat/ sleep
26 AC 2 tier SLEEPER LWACCW2
120 kN
Air spring
24000 23540 3240 1320 44.49 4.32 14900 2560 16.25 52 to seat/ sleep
27 AC 3 tier SLEEPER LWACCN Coil Spring 24000 23540 3240 1320 45.60 5.76 14900 2560 16.25 72 to seat/ sleep
28 AC 3 tier SLEEPER LWACCN2
120 kN
Air spring
24000 23540 3240 1320 45.3 5.76 14900 2560 16.25 72 to seat/ sleep
29 AC 3 tier SLEEPER LWACCNAA
160 kN
Air spring
24000 23540 3240 1320 45.3 5.76 14900 2560 16.25 72 to seat/ sleep
30 Third AC economy coach LWACCNE
160 kN
Air spring
24000 23540 3240 1320 47.67 6.72 14900 2560 16.25 80 to seat /sleep
31 AC Hot buffet car LWCBAC Coil Spring 24000 23540 3240 1320 40.80 1.44 14900 2560 16.25 18 to seat/ sleep
32 AC Hot buffet car LWCBAC2
120 kN
Air spring
24000 23540 3240 1320 40.81 4.440 14900 2560 16.25 18 to seat/ sleep
33 AC Hot buffet car LWCBACDQ
120 kN
Air spring
24000 23540 3240 1320 43.61 --- 14900 2560 16.25 40 to seat-dining
34
AC Inspection Carriage-
Administrative.
LRAAC
120 kN
Air spring
24000 23540 3240 1320 49.122 1.26 14900 2560 16.25 ---
35 AC Track Recording Car LRZAC Coil Spring 24000 23540 3240 1320 40.0 --- 14900 2560 16.25 04 to seat/ sleep
36
A/C First class cum 3-Tier
sleeper
LWFCNAC --- 24000 23540 3240 1320 45.30 5.76 14900 2560 16.25 ---
37 A/C 2-Tier cum 3-Tier LWCWNAC --- 24000 23540 3240 1320 45.30 5.76 14900 2560 16.25 ---
38
High capacity parcel van
without luggage racks
LVPH
140 kN
Air spring
24000 23540 3240 1320 33.50 24.00 14900 2560 16.25 24 t to carry
39
High capacity parcel van
without luggage racks
LVPHR
140 kN
Air spring
24000 23540 3240 1320 33.50 24.00 14900 2560 16.25 24 t to carry
40
Second class cum luggage
and brake van with
compartment for Divyangjan
passengers
LSLRD
140 kN
Air spring
24000 23540 3240 1320 48.84 8.82 14900 2560 16.25
other passengers to
seat -31 Divyangjan
passengers/
attendant to seat-6
Divyangjan
41
Second class cum luggage
and brake van with
compartment for Divyangjan
passengers
LSLRDAA
160 kN
Air spring
24000 23540 3240 1320 43.84 8.82 14900 2560 16.25
other passengers to
seat -31 Divyangjan
passengers/
attendant to seat –
6 Divyangjan
passengers/attenda
nt to sleep – 2+2
42
Power car with underslung
DG set having compartment
for luggage, second class
unreserved passengers &
disabled passengers
LDSLRA
140 kN
Air spring
24000 23540 3240 1320 48.90 8.60 14900 2560 16.25
other passengers to
seat -30 no. of
pwds to seat – 6 no.
of pwds to sleep -2
no. of attendants to
sleep -2
43 Generator car LWLRRM Coil Spring 24000 23540 3240 1320 53.60 3.05 14900 2560 16.25
5 (4-crews & 1-
guard)
44 Generator car LWLRRM2
120 kN
Air spring
24000 23540 3240 1320 54.90 4.380 14900 2560 16.25
5 (4-crews & 1-
guard)
45
Non-AC EOG/HOG Brake,
Luggage cum Generator
Van (on board DA sets)
LWLRRMD
140 kN
Air spring
24000 23540 3240 1320 53.60 --- 14900 2560 16.25
divyangjan
passengers/
attendant to seat –
9 divyangjan
passengers/
attendant to sleep –
3+3
46
Non-AC SLR Coach with
Under Slung DG set.
LWLRRMU
120 kN
Air spring
24000 23540 3240 1320 40.0 --- 14900 2560 16.25
5 (4-crews & 1-
guard)`}
                </p>
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

export default LHBCoaches
