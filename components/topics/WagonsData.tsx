import React from 'react'

const WagonsData = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-amber-900/30 py-10 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Introudction</h1>
          </div>
          <ol className="p-6 space-y-4 text-slate-200 leading-relaxed list-none">
            <li className="flex gap-3 items-start"><span className="shrink-0">1.</span><span>Rolling stock used exclusively for transport of goods is termed as freight stock</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">2.</span><span>In order to transport goods, the wagons are required</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">3.</span><span>The earliest types of wagons were in the form of four sided wooden boxes, either open or closed at top</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">4.</span><span>Earlier wagons were four wheeler type</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">5.</span><span>Gradually, the design of the wagon has gone under considerable changes and modifications</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">6.</span><span>Indian railways transports all types of goods such as building materials, coal, sugarcane, animals, chemicals, cloths, food grains, oils, petrol, explosives, automobiles, medicines, perishable goods, milk, finished products of high and low values, paper etc.</span></li>
            <li className="flex gap-3 items-start"><span className="shrink-0">7.</span><span>In order to meet the requirements of each type of goods, the wagons of different designs are employed.</span></li>
          </ol>
        </section>

        {/* Classification of Wagon */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CLASSIFICATION OF WAGON</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200">
            <p className="leading-relaxed">
              Freight Stock are broadly classified either according to their under gear or according to utility
            </p>
            <p className="font-medium text-amber-200">According to:</p>
            <ol className="list-decimal list-inside space-y-2 ml-2">
              <li>Under gear</li>
              <li>Utility</li>
            </ol>
          </div>
        </section>

        {/* According to Under gear */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">ACCORDING TO UNDER GEAR</h2>
          </div>
          <div className="p-6 space-y-8">
            <div>
              <h3 className="text-amber-300 font-semibold text-lg mb-3">1. Four wheeler wagon</h3>
              <ol className="space-y-2 ml-4 text-slate-200 list-none">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Conventional Wagons</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Modified Wagons</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Tank Wagons</span></li>
              </ol>
              <p className="mt-3 text-slate-300 text-sm italic">At present only Brake van is in service</p>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold text-lg mb-3">2. Bogie wagons</h3>
              <ol className="space-y-2 ml-4 text-slate-200 list-none">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Diamond frame bogie</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Cast steel Bogie</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>UIC fabricated bogie</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>CASNUB Bogie</span></li>
              </ol>
              <p className="mt-3 text-slate-300 text-sm italic">At present only CASNUB bogie wagon is in service.</p>
            </div>
          </div>
        </section>

        {/* According to Utility */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">ACCORDING TO UTILITY</h2>
          </div>
          <ol className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 list-none [counter-reset:utility]">
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Open wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Covered wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Flat wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Well wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Hopper wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Container wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Tank wagons</span></li>
            <li className="flex gap-2 items-center [counter-increment:utility] before:content-[counter(utility)'.'] before:text-amber-400 before:font-bold before:shrink-0"><span>Brake vans</span></li>
          </ol>
        </section>
        {/* Transportation Codes Used for Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-center">TRANSPORTATION CODES<br />USED FOR WAGONS</h2>
          </div>
          <div className="p-6 space-y-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-slate-200 text-sm">
              {[
                ['HS', 'High Speed'],
                ['HA', 'Higher Axle Load'],
                ['LW', 'Light weight'],
                ['HL', 'Higher Pay Load'],
                ['B', '(prefix) Bogie wagon'],
                ['BV', 'Brake van'],
                ['V', 'Brake/parcel van'],
                ['O', 'Open wagon (Gondola)'],
                ['C', 'Covered wagon'],
                ['F', 'Flat car'],
                ['FK', 'Flat car for container'],
                ['LA', 'Low flat car with standard buffer height'],
                ['LB', 'Low flat car with low buffer height'],
                ['LAB', 'Low flat car, one end with low buffers, the other with high buffers'],
                ['R', 'Rail carrying wagon'],
                ['B', 'Hopper wagon'],
                ['E', 'Explosive wagon'],
                ['T', 'Tanker'],
                ['U', 'Well wagon'],
                ['W', 'Well wagon'],
                ['M', '(suffix) Military'],
                ['MR', 'Horse/Cattle'],
                ['C', 'Centre discharge'],
                ['S', 'Side discharge'],
                ['X', 'Centre & side discharge'],
                ['R', 'Rapid bottom discharge'],
                ['X', '(also) High sided'],
                ['Y', 'Low (medium) side walls'],
                ['L', 'Low sided'],
                ['H', 'Heavy load'],
                ['N', 'Air braked'],
                ['EL', 'Enhanced loading'],
              ].map(([code, desc], i) => (
                <li
                  key={`${code}-${i}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-600/60 bg-slate-700/30 px-4 py-2.5 transition-colors hover:border-amber-500/40 hover:bg-slate-700/50"
                >
                  <span className="flex h-6 w-7 shrink-0 items-center justify-center rounded-md bg-amber-500/20 text-amber-400 text-xs font-bold">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <strong className="text-amber-300">{code}</strong>
                    <span className="text-slate-400"> : </span>
                    <span className="text-slate-200">{desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-slate-600">
              <h3 className="text-amber-300 font-semibold text-lg mb-3">Type of Coupling</h3>
              <ol className="space-y-2 text-slate-200 text-sm list-none">
                <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">1.</span><span><strong className="text-amber-300">C</strong> : Centre buffer coupler (CBC)</span></li>
                <li className="text-slate-300 italic">Usually not written as all stock are fitted with CBC</li>
                <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">2.</span><span><strong className="text-amber-300">R</strong> = Screw coupling only</span></li>
                <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">3.</span><span><strong className="text-amber-300">T</strong> = Transition coupler (CBC with additional side buffers and screw coupling)</span></li>
              </ol>
            </div>
          </div>
        </section>

        {/* Nomenclature of Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">NOMENCLATURE OF WAGONS</h2>
          </div>
          <ol className="p-6 pl-10 space-y-4 text-slate-200 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2 list-none [counter-reset:nomen]">
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOY</strong> Bogie open low sided wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOYEL</strong> Bogie open low sided wagon for enhanced loading</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXN</strong> Bogie open wagon fitted with air brakes</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNCR</strong> Bogie open wagon fitted with air brakes and stainless steel body</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNHA</strong> Bogie open wagon with IRF 108 HS bogies, air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNLW</strong> Bogie open light weighted wagon fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNHS</strong> Bogie open wagon with CASNUB 22HS bogies, air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNAL</strong> Bogie open Aluminium wagon with CASNUB 22HS bogies fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNHL</strong> Bogie open stainless steel wagon with CASNUB 22HS bogies (modified for 22.9 t axle load), air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNEL</strong> Bogie open wagon fitted with air brakes and high axle load</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXNR</strong> Bogie open wagon fitted with air brakes (Rehabilated)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOST</strong> Bogie open wagon with CASNUB HS bogies, air brake for loading steel sections</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCN</strong> Bogie covered wagon fitted with air brakes</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCCN</strong> Bogie covered wagon fitted with & air brakes for loading Auto cars</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNA</strong> Bogie covered wagon fitted with air brakes. All welded Broad gauge covered wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNAHS</strong> Bogie Covered wagon with CASNUB 22 HS bogies & air brakes</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNHL</strong> Bogie Covered wagon with CASNUB 22HS bogies (modified for 22.9t axle load), air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCNEL</strong> Bogie Covered wagon fitted with air brakes and high axle load</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRN / BRNA</strong> Bogie Rail Truck with Air Brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFNS</strong> Bogie Flat wagon with Casnub bogies & air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRSTN</strong> Bogie Rail Wagon for heavy vehicles</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BWTB</strong> Well wagon for Battle Tank (well height 1055 mm)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBYN</strong> Hopper with top and 4 row controlled bottom discharge with Casnub bogies fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBR</strong> Hopper wagon with casnub bogies bottom automatic discharge system wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBRN</strong> Hopper wagon with casnub bogies automatic rapid bottom discharge wagon, air bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBRNEL</strong> Hopper wagon with casnub bogies, high axle load and automatic discharge system wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCBFG</strong> Bogie covered Hopper Wagon for Food Grain</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BLCA/BLCB/BLLA/BLLB/BLCAM/BLCBM</strong> Bogie Low platform container flat wagon (A Car & B Car) with LCCF 20 (C) type Cast Steel Bogies with Air Brake system with LSD</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFKN</strong> Container flat wagon with standard floor height</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCACM</strong> Bogie covered auto car modified wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCACBM</strong> Bogie covered auto car carrier wagon</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOMN</strong> Bogie open Millitary wagons for defence Equipments</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRSTN</strong> Bogie Rail Wagon for heavy vehicles</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTPN</strong> Bogie Tank wagon for petroleum product</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTPGLN</strong> Bogie tank wagon for LPG/petroleum product fitted with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTFLN</strong> Bogie Frameless Tank wagon for Petroleum product with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTAP</strong> Bogie Tank wagon for Alumina Powder</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTCS</strong> Bogie Tank wagon for Caustic Soda</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTALN</strong> Bogie Tank wagon Ammonia Liquefied with Air Bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTALNM</strong> Bogie Tank wagon for Ammonia fitted with air bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BVZC</strong> Brake van, Conventional with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BVZI</strong> Covered Brake Van with ICF bogie and air bk.</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BRH</strong> Bogie Flat for Rail (Roller Bearing)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOBSN</strong> Bogie Hopper Wagon Bottom side Discharge with Pneumatic Brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCGT</strong> Brake Van Goods with Transitional Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCXR</strong> Bogie Wagon Covered with Screw Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BCXT</strong> Bogie Wagon Covered with Transitional Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BKH</strong> Bogie Open Hopper Wagon (Side Discharge)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXC</strong> Bogie Open with CBC Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXR</strong> Bogie Open with Screw Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOXT</strong> Bogie Open with Transitional Coupling</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BOYN</strong> Bogie Open Wagon for Ores Loading with Pneumatic Brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTFLN</strong> Bogie Frameless Tank wagon for Petroleum product with air brake</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BTPGL</strong> Bogie Tank Wagon for LPG (Vaccum Brake)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BVGC</strong> Brake Van Goods with CBC Coupling 4 Wheeler (Air Brake)</span></li>
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFR</strong> Bogie Flat for Rail (Vaccuum Brake)</span></li>  
            <li className="flex gap-2 items-start [counter-increment:nomen] before:content-[counter(nomen)'.'] before:text-amber-400 before:shrink-0 before:mr-1 before:inline-block before:w-6"><span><strong className="text-amber-300">BFU</strong> Bogie Well Wagon</span></li>          
            </ol>
        </section>

        {/* Terminology Used */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">TERMINOLOGY USED</h2>
          </div>
          <ul className="p-6 space-y-3 text-slate-200 text-sm">
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">1.</span><span><strong className="text-amber-300">Tare weight</strong> Wt. of wagon in empty condition</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">2.</span><span><strong className="text-amber-300">Pay load</strong> Wt. of commodity loaded on wagon</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">3.</span><span><strong className="text-amber-300">Gross load/weight</strong> Tare weight + Pay load</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">4.</span><span><strong className="text-amber-300">Axle load</strong> Gross load /No. of axle</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">5.</span><span><strong className="text-amber-300">Pay to tare ratio</strong> Ratio of Pay load to Tare wt.</span></li>
            <li className="flex gap-2 items-baseline"><span className="text-amber-400 shrink-0">6.</span><span><strong className="text-amber-300">Carrying Capacity (CC)</strong> Gross load/weight that can carried by the axles of the wagon</span></li>
          </ul>
        </section>

        {/* Open Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">OPEN WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used for transportation of coal, ore, limestone&apos;s etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>For commodities do not require protection from rain</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Provided with flap doors for ease of loading/ unloading of consignment</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BOY', 'BOYEL', 'BOXN', 'BOXNAL', 'BOXNCR', 'BOXNEL', 'BOXNHA', 'BOXNHL', 'BOXNHS', 'BOXNHSM1', 'BOXNLW', 'BOXNLWM1', 'BOXNM1', 'BOXNR', 'BOXNS', 'BOST', 'BOSTHS', 'BOSTHSM1', 'BOSTHSM2', 'BOSTM1'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Covered Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">COVERED WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used for transportation of bagged commodity i.e consignments which require to be protected from rain etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Generally carry food grains, cement, fertilizers, fruits & vegetables etc.</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type :</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BCN', 'BCNA', 'BCNM1', 'BCNAM1', 'BCNAHS', 'BCNAHSM1', 'BCNHL', 'BCCN'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Flat Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">FLAT WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Without side walls</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Generally used for carrying steel coils, billets, rail, rails sleepers etc.</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BRN', 'BRNA', 'BRNAHS', 'BFNS', 'BRHNEHS', 'BRN22.9'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Well Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">WELL WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Having well shaped under frame</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Used to carry the bulky articles of excessive height</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Used for larger consignments like military tanks, heavy equipments etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Provided with lashing chains and couplings and the folding ramps on either end of the head stock of the wagon to facilitate loading of motor vehicle</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BFU', 'BWTB'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hopper Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">HOPPER WAGON</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Special wagons designed for Rapid discharge from either bottom or side or both</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Wagon has a hopper shape</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Used for transporting minerals, coal and ballast</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Provided with electro pneumatically operated door operating mechanism</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BOBR', 'BOBRM1', 'BOBRN', 'BOBRNM1', 'BOBRNHSM1', 'BOBRNEL', 'BOBSN', 'BOBSNM1', 'BOBYN', 'BCBFG'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Container Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CONTAINER WAGONS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Special flat wagons designed for handling containers</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type :</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BFKN', 'BLCA/BLCB', 'BLLA/BLLB'].map((code, i) => (
                  <li key={`type-${i}`} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tank Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">TANK WAGON</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Designed to carry liquid consignment like petroleum products, corrosive liquids, milk, edible oils etc.</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Wagon underframes fitted with bulky barrels</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Barrel consists manholes and covers on their tops for filling liquids</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Delivery valves at the bottom of the barrel centre for discharging</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">5.</span><span>Baffle plates have been provided inside the barrel to control other liquids coming on any one side under dynamic condition and on gradient</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type:</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BTPN', 'BTFLN', 'BTPGLN', 'BTAL', 'BTALN', 'BTCS', 'BTAP'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Brake Vans */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">BRAKE VANS</h2>
          </div>
          <div className="p-6 space-y-4 text-slate-200 text-sm">
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Guards van used with freight trains as last vehicle</span></li>
            </ul>
            <div className="pt-2">
              <span className="text-amber-300 font-semibold">Type :</span>
              <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 list-none">
                {['BVZC', 'BVZI', 'BVCM'].map((code, i) => (
                  <li key={code} className="flex gap-2 items-baseline text-slate-300">
                    <span className="text-amber-400 shrink-0">{i + 1}.</span>
                    <span>{code}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Some Other Wagons */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">SOME OTHER WAGON</h2>
          </div>
          <div className="p-6 space-y-6 text-slate-200 text-sm">
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">Cattle wagon</h3>
              <ul className="list-none space-y-2">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used to transport cattle</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>Troughs of suitable sizes are provided for feeding and drinking the cattle during the journey</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Arrangements for proper ventilation and disposal of waste matters</span></li>
              </ul>
            </div>
            <div className="pt-2 border-t border-slate-600">
              <h3 className="text-amber-300 font-semibold mb-2">Powder wagon</h3>
              <ul className="list-none space-y-2">
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>Used to transport chemicals and explosives</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>A heavy timber lining is provided to check the transmission of heat</span></li>
                <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>All the metallic fittings such as hinge, clips, brackets etc. are made of gun metal to minimize the risk of sparking by metallic contact with the explosives</span></li>
              </ul>
            </div>
          </div>
        </section>

{/* Codal Life of Wagon Stock */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">CODAL LIFE OF WAGON STOCK</h2>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            <table className="w-full text-slate-200 text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-amber-300 font-semibold text-left py-3 px-3">S.No.</th>
                  <th className="text-amber-300 font-semibold text-left py-3 px-3">Type of wagon stock</th>
                  <th className="text-amber-300 font-semibold text-left py-3 px-3">Codal life</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">01</td><td className="py-2 px-3">All open wagons & variants [BOX N etc.]</td><td className="py-2 px-3"> 30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">02</td><td className="py-2 px-3">All covered wagons & variants [BCN etc.]</td><td className="py-2 px-3"> 35 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">03</td><td className="py-2 px-3">Tank wagons & variants [BTPN etc.]</td><td className="py-2 px-3">40 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">04</td><td className="py-2 px-3">All Flat wagons & variants [BRN , BLC</td><td className="py-2 px-3">30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">05</td><td className="py-2 px-3">BOBRN, BOBS wagons & variants</td><td className="py-2 px-3">30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">06</td><td className="py-2 px-3">BOBY & BOBY N</td><td className="py-2 px-3">30 Years</td></tr>
                <tr className="border-b border-slate-700"><td className="py-2 px-3">07</td><td className="py-2 px-3">Brake Vans BVZC & BVZI]</td><td className="py-2 px-3"> 30 Years</td></tr>
              </tbody>
            </table>
          </div>
        </section>



{/* Wagon Numbering System */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">WAGON NUMBERING SYSTEM</h2>
          </div>
          <div className="p-6 space-y-5 text-slate-200 text-sm">
            <p className="leading-relaxed">Wagon numbering system is being done as per Railway board&apos;s instruction issued vide letter No. 2000/M (N)/60/2/wagon census dated 4 th July 2003</p>
            <ul className="list-none space-y-2">
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">1.</span><span>The wagon number shall consist of 11 digits</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">2.</span><span>First two digits will indicate types of wagon</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">3.</span><span>Next two digits will indicate owning railway</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">4.</span><span>Next two digits will indicate year of manufacture</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">5.</span><span>Next four digits will indicate individual wagon number</span></li>
              <li className="flex gap-2 items-start"><span className="text-amber-400 shrink-0">6.</span><span>The last digit will be a check digit</span></li>
            </ul>
            <div className="pt-4 border-t border-slate-600">
              <div className="flex flex-wrap gap-1 justify-center mb-2">
                {['C1 : Type of wagon', 'C2 : Type of wagon', 'C3 : Owning Railway', 'C4 : Owning Railway', 'C5 : Year of manufacturing', 'C6 : Year of manufacturing', 'C7 : Individual Wagon Number', 'C8 : Individual Wagon Number', 'C9 : Individual Wagon Number', 'C10 : Individual Wagon Number', 'C11 : Check Digit'].map((c) => (
                  <span key={c} className="inline-flex h-8 min-w-8 items-center justify-center rounded bg-amber-500/20 text-amber-300 font-semibold px-2">{c}</span>
                ))}
              </div>
              
            </div>  
          </div>
        </section>

        {/* Types of Wagon (C1,C2) */}
        <section className="bg-slate-800/80 rounded-2xl shadow-xl border border-slate-700 overflow-hidden">
          <div className="bg-linear-to-r from-amber-600 to-amber-700 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">TYPES OF WAGON (C1,C2)</h2>
            <p className="text-amber-100/90 text-sm mt-1">(ACCORDING TO BODY)</p>
          </div>
          <div className="p-4 sm:p-6 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {[['BOXN', '10'], ['BOXNHA', '11'], ['BOXNHS', '12'], ['BOXNCR', '13'], ['BOXNLW', '14'], ['BOXNB', '15'], ['BOXNF', '16'], ['BOXNG', '17'], ['BOY', '18'], ['BOST', '19'], ['BOXNAL', '20'],   ['BOSTHS', '21'],   ['BOXNHL', '22'],   ['BOXNS', '24']].map(([name, code]) => (
                <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
              ))}
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">COVERED WAGON <span className="text-slate-400 font-normal">code allotted 30 to 39</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[['BCNA', '30'], ['BCNAHS', '31'], ['BCCNR', '32'],  ['BCNHL', '33']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">TANK WAGON <span className="text-slate-400 font-normal">code allotted 40 to 54</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[['BTPN', '40'], ['BTPNHS', '41'], ['BTPGLN', '42'], ['BTALN', '43'], ['BTCS', '44'], ['BTPH', '45'], ['BTAP', '46'], ['BTFLN', '47']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">FLAT WAGON <span className="text-slate-400 font-normal">code allotted 55 to 69</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {[['BRNA', '55'], ['BRNAHS', '56'], ['BFNS', '57'], ['BOMN', '58'], ['BRSTH', '59'], ['BFAT', '60'], ['BLCA', '61'], ['BLCB', '62'], ['BLLA', '63'], ['BLLB', '64'], ['BRS', '65'], ['BFU', '66'], ['BRHNEHS', '67'], ['BCL', '68'], ['BCLA', '69']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-amber-300 font-semibold mb-2">HOPPER WAGON <span className="text-slate-400 font-normal">code allotted 70 to 79</span></h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[['BOBYN', '70'], ['BOBYNHS', '71'], ['BOBRN', '72'], ['BOBRNHS', '73'], ['BOBRAL', '74'], ['BOBSN', '75']].map(([name, code]) => (
                  <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[['BWTB', '80'], ['MBWT', '81'], ['DBKM', '82'], ['MBWZ', '83']].map(([name, code]) => (
                <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[['BVZC', '85'], ['BVZI', '86'], ['BVCM', '87']].map(([name, code]) => (
                <div key={name} className="flex justify-between items-center rounded-lg bg-slate-700/40 border border-slate-600 px-3 py-2 text-slate-200 text-sm"><span>{name}</span><span className="text-amber-400 font-medium">{code}</span></div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default WagonsData
