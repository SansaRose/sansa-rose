'use client'

import React from 'react'

interface Timing {
  question: string
  answer: string
  timing?: string
}

const Timings = () => {
  const timings: Timing[] = [
    { question: 'How often do the Station Kavach and Loco Kavach units communicate with each other?', answer: 'every 2 seconds', timing: '2 seconds' },

    { question: 'What is the timeout period for radio communication failure in an Automatic Block Section before KAVACH takes action?', answer: '10 seconds', timing: '10 seconds' },

    { question: 'In the Siemen\'s panel \'NCR\' indication along with audible warning appears after a button is kept pressed for a prolonged period of', answer: '10 seconds or more', timing: '10 seconds' },

    { question: 'When acknowledgement cannot be obtained for ‘Call attention’ bell beat, again Call attention shall be given by SM after_____', answer: '20 seconds', timing: '20 seconds' },
    { question: 'KAVACH automatically transition from Full Supervision (FS) mode to Limited Supervision Mode (LS) if radio communication is lost for ________ seconds in an Absolute Block Section?', answer: '30 seconds', timing: '30 seconds' },
    
    { question: 'During day when Gate signal is at ON, the LP shall wait for', answer: '1 minute', timing: '1 minute' },
    { question: 'The signal shall be treated as defective, whenever colour light signal is flickering / bobbing and does not assume a steady aspect at least for', answer: '60 seconds', timing: '1 minute' },
    
    { question: 'When the Loco Pilot notices a signal warning of an obstruction other than detonators and no further details are noticed, shall stop the train immediately and wait during day/night for 1/2 minutes cautiously proceed up to next block station', answer: 'one/two minute', timing: '1/2 minutes' },
    
    { question: 'During night when Gate signal is at ON, the LP shall wait for', answer: '2 minutes', timing: '2 minutes' },
    { question: 'For Originating and passing through trains, Handing over by more than ______ minutes at interchange point.', answer: '3 minutes', timing: '3 minutes' },
    
    { question: 'When a train is held up at F S S, the Loco Pilot shall depute Assistant Loco Pilot to go to Station. After', answer: '5 minutes', timing: '5 minutes' },

    { question: 'When IBS is at "ON" and the telephone is out of order, Loco Pilot shall wait for', answer: '5 minutes', timing: '5 minutes' },

    { question: 'When engine disabled, LP will request the Guard to arrange for a relief engine if the LP expects that putting the engine in working order will take more than', answer: '5 minutes', timing: '5 minutes' },

    { question: 'LP shall depute his ALP to check the train and inform Guard of no tension in OHE when it is held up for more than', answer: '5 Minutes', timing: '5 minutes' },

    { question: 'At train starting station \'is line clear\' shall be asked, how many minutes before the booked departure of the passenger carrying trains', answer: 'before 5 min', timing: '5 minutes' },

    { question: 'In Modified Semi-automatic stop signal, when Loco Pilot finds mid-section modified semi-automatic stop signal with "A" marker extinguished in "ON" position, when Loco Pilot is unable to contact the Station Master of station ahead, he shall pass the signal at "ON" ______________ and proceed cautiously and be prepared to stop short of any obstruction, at a speed not exceeding 10 kmph upto next Signal.', answer: 'After waiting for 5 minutes at the signal', timing: '5 minutes' },
    
    { question: 'For Sub-urban trains, punctuality of the train is lost when it arrives more than ______ minutes late at destination.', answer: '5 minutes', timing: '5 minutes' },

    { question: 'In the case of train is booked to run through a station, is line clear shall be asked how many minutes before the train is due to pass', answer: '7 minutes', timing: '7 minutes' },
    
    { question: 'Before the arrival of the train, to avoid complaints from road user, taking off the approach signals can be delayed to ensure that gate is closed only for', answer: '10 minutes', timing: '10 minutes' },

    { question: 'During TIC on Double line, if train held up at FSS, if no one from the station turns up Guard shall protect the train in rear and ALP may be sent to station after', answer: '10 minutes', timing: '10 minutes' },

    { question: 'EMU/MEMU shall be protected as per Rule 6.03/9.10, If the detention exceeds or it is likely to exceed', answer: '10 minutes', timing: '10 minutes' },

    { question: 'During Tottal Interruption of Communication (TIC) on Double line, if train held up at FSS, if no one from the station turns up Guard shall protect the train in rear and ALP may be sent to station after______ minutes', answer: '10 minutes', timing: '10 minutes' },
    
    { question: 'If a passenger train/goods train does not turn up, S M shall arrange to send competent railway servant even after normal running time and', answer: '10/20 minutes', timing: '10/20 minutes' },
    { question: 'The Gds/LPs of all trains who are provided with VHF sets and Portable Field telephone shall inform the Station Master/controller when delayed in the block section for over', answer: '10 / 20 min for passenger carrying/goods trains', timing: '10/20 minutes' },
    
    { question: 'In Following train, Pilot Guard, Train staff & ticket systems, a train shall follow another from a station unless there has elapsed, an interval of not less than_______, or such shorter interval as may be fixed by special instructions', answer: '15 minutes', timing: '15 minutes' },

    { question: 'The Guard shall protect in rear when a train is held up at First Stop Signal for more than', answer: '15 minutes', timing: '15 minutes' },

    { question: 'If for any reason, a train is brought to a stand, the hand brakes of Locomotive and formation brakes shall be applied for more than if stoppage is more than', answer: '15 minutes', timing: '15 minutes' },

    { question: 'For Intra Zonal and Terminating trains, train arriving more than ______ minutes late at destination.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'If a Patrolman does not turn up within ________ minutes of his/her scheduled arrival, the Station Master shall stop run through trains proceeding into the block section. Issue a Caution Order to all trains proceeding into the block section advising the Loco Pilot to be alert and specify a speed restriction of 40 kmph.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'If, for any reason, a train is brought to a stand for a period longer than ______ minutes, the hand brakes of the locomotive shall be applied in addition to the application of air brake etc.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'Guards of Suburban trains shall report for duty at least ______ minutes before the scheduled departure of the train.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'In Following train, Pilot Guard, Train staff & ticket systems, a train shall be allowed to follow another from a station unless there has elapsed, an interval of not less than_____, or such shorter interval as may be fixed by special instructions.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'To treat as equipment failure, a gate telephone shall fail for more than ______ minutes.', answer: '15 minutes', timing: '15 minutes' },

    { question: 'The target time for turning out Medical Relief Train (MRT) for direct/indirect dispatch, is ________', answer: '15/20 minutes', timing: '15/20 minutes' },
    
    { question: 'The time interval between two trains during signal and communication failure on Double line Automatic Block System shall be______', answer: '25 minutes', timing: '25 minutes' },
    
    { question: 'When trains are dealt on T/C 602, the time interval between two trains shall be', answer: '30 minutes', timing: '30 minutes' },

    { question: 'Line clear may be given on information from Fog Signalman or 30 minutes from departure of Fog Signalman.', answer: '30 minutes', timing: '30 minutes' },

    { question: 'A relief engine should be sent, if the engine or vehicles running away have not arrived even after a lapse of how many minutes more than the running time of the slowest speed goods train', answer: '30 minutes', timing: '30 minutes' },

    { question: 'Before the passage of VIP special patrolling is done at least', answer: '30 mins before', timing: '30 minutes' },
    { question: 'A train running to time should not be detained more than ______ minutes to effect crossing on Single Line.', answer: '30 minutes', timing: '30 minutes' },

    { question: 'Passenger Guards must report for duty at least 30 minutes before the scheduled departure of the train.', answer: '30 mins before', timing: '30 minutes' },

    { question: 'The target time for turning out Accident Relief Train (ART) during day/night is_______', answer: '30/45 minutes', timing: '30/45 minutes' },

    { question: 'In the case of Goods trains originating from a terminal yard, the Guards shall appear on duty at least 45 minutes before the departure of the train is scheduled to leave.', answer: 'at least 45 mins before', timing: '45 minutes' },
    
    { question: 'Depending upon trains in the section Disconnection should normally be allowed by SM for duration up to', answer: '60 minutes', timing: '60 minutes' },
    
    { question: 'VHF sets as a means of communication should be permitted only in the presence of supervisory staff for prolonged duration of', answer: '3 hours or more', timing: '3 hours' },

    { question: 'When power supply fails in Non-electrified area, one generator can be used at a time for a maximum of________', answer: '4 hours', timing: '4 hours' },

    { question: 'On trunk routes when traffic is disrupted for following hours or more, it is treated as serious dislocation of traffic.', answer: '6 hours', timing: '6 hours' },

    { question: 'The maximum time slot allotted for Primary maintenance of coaching rake', answer: '6 hours', timing: '6 hours' },

    { question: 'No Railway Servant directly concerned with the working of trains shall take or use any alcoholic drink, sedative, narcotic or stimulant drug or preparation within ________ hours before the commencement of his duty or take or use any such drink, drugh or preparation when on duty.', answer: '8 hours', timing: '8 hours' },

    { question: 'Control chart is prepared normally for ______ hours', answer: '8 hours', timing: '8 hours' },

    { question: 'Running duty at a stretch should not ordinarily exceed _____ hours from the departure of the train.', answer: '9 hours', timing: '9 hours' },

    { question: 'The maximum duty hours in any one trip should not exceed.', answer: '10 hours', timing: '10 hours' },

    { question: 'Overall duty of running staff from "sign-on" to "sign-off" should not generally exceed _____ hours.', answer: '11 hours', timing: '11 hours' },

    { question: 'Minimum home station rest for duty more than 8 hours is:', answer: '16 hours', timing: '16 hours' },
    
    { question: 'If a BPC Rake (CC, Premium, or End-to-End) is stabled for more than _______ hours at a TXR yard, BPC becomes invalid.', answer: '24 hours', timing: '24 hours' },

    { question: 'Fresh B P C is required when train is stabled at station other than loading and unloading station for more than _____ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Rusty” rail caps are to be placed when any line is not used for more than ______ hours.', answer: '24 hours', timing: '24 hours' },

    { question: 'Master chart is prepared normally for ______ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Loco outage means the average number of locos available to traffic use in ______ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Throughput of a section is given as the volume of traffic carried over a section in ______ hours', answer: '24 hours', timing: '24 hours' },

    { question: 'Temporary Instructions shall be issued for Disconnections / maintenance likely to last for more than', answer: 'one day', timing: '1 day' },

    { question: 'Minimum number of days from the date of accident ‘D’, DRM/GM to order enquiry to be done within is _____', answer: 'D + 1 day', timing: '1 day' },

    { question: 'Explosives and other dangerous goods should be brought to railway premises only after giving anotice of hours.', answer: '48 hours', timing: '48 hours' },

    { question: 'A person will be considered to have incurred simple injuries, if these injuries incapacitate the injured person from pursuing his customary vocation for ___after the occurrence of the accident.', answer: '48 hours', timing: '48 hours' },

    { question: 'A railway employee is considered to have been injured if he/she is prevented from returning to work as a result of injuries for a period of ____ after the occurrence of the accident.', answer: '48 hours', timing: '48 hours' },

    { question: 'A Railway servant shall be deemed to have been placed under suspension by an order of the competent authority - With effect from the date of his detention, if he is detained in custody, whether on a criminal charge or otherwise, for a period exceeding ______ hours', answer: '48 hours', timing: '48 hours' },

    { question: 'A Railway servant shall be deemed to have been placed under suspension by an order of the competent authority - with effect from the date of his conviction, if in the event of a conviction for an offence, he is sentenced to a term of imprisonment exceeding ______ hours and is not forthwith dismissed or removed or compulsorily retired consequent to such conviction.', answer: '48 hours', timing: '48 hours' },
    
    { question: 'After issuing circular notice, how many days in advance, the DOM will issue an all concerned message', answer: '2 days', timing: '2 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, commencement of enquiry to be done within is ______', answer: 'D + 3 days', timing: '3 days' },

    { question: 'When must an Empty End-to-End Rake reach the loading point from the time of BPC issue, otherwise a fresh BPC is required?', answer: 'Within 4 days', timing: '4 days' },

    { question: 'The BPC of DEMU 700 HP trains is valid for ______', answer: '7 days', timing: '7 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, submission of enquiry report to be done within is _____', answer: 'D + 7 days', timing: '7 days' },

    { question: 'The BPC of DEMU other than 700 HP trains is valid for ______', answer: '10 days', timing: '10 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, acceptance of enquiry report to be done within is _____', answer: 'D + 10 days', timing: '10 days' },

    { question: 'The validity of Premium rake BPC is ______', answer: '12 days', timing: '12 days' },

    { question: 'BPC of a material train is valid for 30 days subject to examination of the train by TXR in case of UIC rakes once in', answer: 'fortnight', timing: 'Fortnight' },
    
    { question: 'LP/ALP/Guard should record in the register maintained in crew booking point about the lapse of road learning in a section in advance of', answer: '15 days', timing: '15 days' },

    { question: 'Engineering and S&T officials shall send a circular notice before the work is due to commence to the Sr. DOM/DOM at least', answer: '15 days in advance', timing: '15 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, finalization of enquiry report by CSO/AGM to be done within is _____', answer: 'D + 15 days', timing: '15 days' },
    
    { question: 'The validity of material train BPC in case of UIC rakes subject to examination of the train by TXR once in fortnight is', answer: '20 days', timing: '20 days' },


    { question: 'If the distance (km) data is missing and not retrievable for a CC Rake, for how many days is the BPC valid?', answer: '20 days', timing: '20 days' },

    { question: 'Minimum number of days from the date of accident ‘D’, submission of enquiry report to CRS/Rly Board to be done within is _____', answer: 'D + 20 days', timing: '20 days' },

    { question: 'Any hurt which endangers life or which causes the sufferer to be in severe body pain or unable to follow his ordinary pursuits for a period of ______ days after the accident.', answer: '20 days', timing: '20 days' },

    { question: 'The validity of material train BPC in case of UIC rakes subject to examination of the train by TXR once in fortnight is', answer: '30 days', timing: '30 days' },

    { question: 'The validity of CC rake BPC is ______ days', answer: '35 days', timing: '35 days' },

    { question: 'What is the mandatory minimum time limit for booking an FTR Special Coach/Train before the date of journey?', answer: '1 month', timing: '1 month' },

    { question: 'First Aid boxes available with Station Masters and Guards of passenger carrying trains are to be inspected by DMO ____________', answer: 'Once in a month', timing: '1 month' },
    
    { question: 'Engineering branch will arrange with the Operating branch for the issue of a circular notice, which shall be valid for', answer: '3 months', timing: '3 months' },

    { question: 'All Signals on a section shall be jointly inspected by the Signal, Transportation and Loco Inspectors (SI, TI & LI) at least once in 3 months.', answer: '3 months', timing: '3 months' },

    { question: 'Mock drills for Accident Relief Train (ART) and Medical Relief Train (MRT) shall be conducted once in________', answer: '3 months', timing: '3 months' },

    { question: 'The knowledge of staff that are required to use detonators shall be tested once in_______', answer: '3 months', timing: '3 months' },

    { question: 'How often should a Kavach-fitted loco be used for conducting a Signal Sighting Committee inspection IR-ATP (Kavach) territory?', answer: 'once in a 3 months', timing: '3 months' },

    { question: 'Minimum number of days from the date of accident ‘D’, DAR action to be completed within is _____', answer: 'D + 90 days', timing: '90 days' },

    { question: 'The review of an order of suspension shall be done by the authority which is competent to modify or revoke the suspension, on the recommendation of the review committee constituted for the purpose, and such competent authority shall pass orders either extending or revoking the suspension before expiry of ninety days from the date of order of suspension.', answer: '90 days', timing: '90 days' },
    
    { question: 'The 2/4 wire telephone will be tested by SE/JE-Tele. once in', answer: '6 months', timing: '6 months' },
    { question: 'Contents of the EL Box shall be tested by the SE / JE-TL. once in', answer: '6 months', timing: '6 months' },
    { question: 'All Gds, LPs, ALP, Motor men who are required to work in automatic block system shall undergo one day intensive training and a certificate shall be renewed once in', answer: '6 months', timing: '6 months' },

    { question: 'Loco Pilot shall be re-examined after a refresher course and his certificate endorsed if he has not driven an electric engine or multiple units for more than', answer: '6 months', timing: '6 months' },

    { question: 'Record foils of the caution orders shall be preserved for a period of', answer: '6 months', timing: '6 months' },

    { question: 'Crew requirement is reviewed once in _______ months by the division based on the crew required for working coaching links and average working hours of goods crew.', answer: '6 months', timing: '6 months' },
    
    { question: 'Medical Relief Van and Auxiliary Van shall be inspected at least once in _______ months jointly by Divisional Officers of Medical, Safety, Civil Engineering, Mechanical, Electrical and S&T.', answer: '6 months', timing: '6 months' },

    { question: 'Subsequent reviews shall be made before expiry of the extended period of suspension. Extension of suspension shall not be for a period exceeding one hundred and eighty days at a time.', answer: '180 days', timing: '180 days' },
    
    { question: 'Fire-Extinguishers: Replacement shall be done once in', answer: '12 months', timing: '12 months' },

    { question: 'Testing of detonators shall be done once in 12 months.', answer: '12 months', timing: '12 months' },

    { question: 'The claim for compensation shall be made within the following time from the date of accident', answer: '12 months', timing: '12 months' },

    { question: 'Wagon census is conducted once in ______', answer: 'a year', timing: '1 year' },

    { question: 'POH interval of passenger coaches run on Mail Exp/Passenger trains is ______', answer: '18 months', timing: '18 months' },
    
    { question: 'Periodical census of traffic at all level crossings shall be carried out for every', answer: '3 years for 7 days', timing: '3 years' },

    { question: 'No person shall operate the electrical block instruments unless he holds a competency certificate issued by Principal/ZRTI which shall be valid for a period of______', answer: '3 years', timing: '3 years' },

    { question: 'The competency certificate issued by DEE (TRD) to SM for operating the isolators (in emergency) is valid for', answer: '3 years', timing: '3 years' },
    
    { question: 'The certificate of competency for Electronic Signal Maintainer (ESM) is valid for', answer: '4 years', timing: '4 years' },
    
    { question: 'Certificate of competency issued to Gateman will be valid for a period of', answer: '5 years', timing: '5 years' },

    { question: 'Station Working Rules (SWR) should be issued afresh once in', answer: '5 years', timing: '5 years' },

    { question: 'Project life should be considered as ______ years from the date of Commissioning as per Para 345 of Indian Railways Engineering Code', answer: '30 years', timing: '30 years' },
    
    { question: 'After issue of following number of amendment slips SWR should be issued afresh', answer: '5', timing: 'Other' },
    { question: 'Normal monsoon period for SC, HYB & NED divisions is from 15th June to', answer: '15 October', timing: 'Other' },
    { question: 'Normal monsoon period for Guntakal division is from 15th June to', answer: '31st January', timing: 'Other' },
    { question: 'Normal monsoon period for Vijayawada & Guntur divisions is from 15th June to', answer: '15th January', timing: 'Other' },
    { question: 'For all Goods trains at originating station "is line clear" should be asked', answer: 'Train is ready', timing: 'Other' },
    { question: 'At intermediate stations, for all stopping trains with a halt of less than five minutes is line clear\' shall be asked when the Train is', answer: 'Sighted', timing: 'Other' },
  ]

  // Group timings by duration for better organization
  const groupedByTiming = timings.reduce((acc, timing) => {
    const timingKey = timing.timing || 'Other'
    if (!acc[timingKey]) {
      acc[timingKey] = []
    }
    acc[timingKey].push(timing)
    return acc
  }, {} as Record<string, Timing[]>)

  const getTimingColor = (timing: string) => {
    if (timing === 'Other') {
      return 'bg-linear-to-r from-purple-600 to-purple-700'
    }
    if (timing.includes('sec') || timing.includes('minute') && timing.includes('1')) {
      return 'bg-linear-to-r from-red-600 to-red-700'
    }
    if (timing.includes('minute') && (timing.includes('2') || timing.includes('5') || timing.includes('7'))) {
      return 'bg-linear-to-r from-orange-600 to-orange-700'
    }
    if (timing.includes('minute') && (timing.includes('10') || timing.includes('15'))) {
      return 'bg-linear-to-r from-yellow-600 to-yellow-700'
    }
    if (timing.includes('minute') && (timing.includes('25') || timing.includes('30') || timing.includes('60'))) {
      return 'bg-linear-to-r from-green-600 to-green-700'
    }
    if (timing.includes('hour') || timing.includes('day') || timing.includes('Fortnight')) {
      return 'bg-linear-to-r from-blue-600 to-blue-700'
    }
    if (timing.includes('month') || timing.includes('year')) {
      return 'bg-linear-to-r from-indigo-600 to-indigo-700'
    }
    return 'bg-linear-to-r from-purple-600 to-purple-700'
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Timings
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to timings for AOM aspirants
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByTiming).map(([timing, items]) => (
            <div key={timing} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Timing Header */}
              <div className={`${getTimingColor(timing)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {timing}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-blue-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Question */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.question}
                          </p>
                        </div>
                      </div>

                      {/* Answer */}
                      <div className="shrink-0 sm:w-48 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900/50 border border-blue-700">
                          <span className="text-blue-300 font-semibold text-lg">
                            {item.answer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              {timings.length}
            </div>
            <div className="text-gray-300">Total Timings</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">
              {Object.keys(groupedByTiming).length}
            </div>
            <div className="text-gray-300">Timing Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              Sec-Years
            </div>
            <div className="text-gray-300">Time Range</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timings
