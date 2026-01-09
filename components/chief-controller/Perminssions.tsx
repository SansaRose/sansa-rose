'use client'

import React from 'react'

interface PermissionItem {
  description: string
  authority: string
  category?: string
}

const Perminssions = () => {
  const permissions: PermissionItem[] = [
    {
      description: 'General Rules can be framed by',
      authority: 'Government of India',
      category: 'Governmen of India'
    },
    {
      description: 'Who is empowered to make rules to implement the Official Language Act?',
      authority: 'Government of India',
      category: 'Government of India'
    },
    {
      description: 'All India Trains at a glance is prepared by ______',
      authority: 'Railway Board',
      category: 'Railway Board'
    },
    {
      description: 'Approved special instructions are issued or approved by',
      authority: 'Commissioner of Railway Safety (CRS)',
      category: 'CRS'
    },
    {
      description: 'The Central Government shall before giving its sanction to the opening of a Railway obtain a report from ______',
      authority: 'Commissioner of Railway Safety (CRS)',
      category: 'CRS'
    },
    {
      description: 'Subsidiary rules are framed by',
      authority: 'Authorised Officer',
      category: 'Authorised Officer'
    },
    {
      description: 'Normally fixed signals are placed on the left side of track of an approaching train, provided on right side under the authorization of',
      authority: 'PCOM',
      category: 'PCOM'
    },
    {
        description: 'ODC shall be allowed to be attached by a train for transport only with prior sanction of ______',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'No private trolley shall be used by non railway official except under special permission of ______',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'For booking against a restriction, thepermission of ______ is required',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: 'Classifying a passenger carrying train as a mixed train needs authorization by ______ of the concerned Railway.',
        authority: 'COM',
        category: 'COM'
      },
      {
        description: 'Sanction for ‘C’ class ODC special trains has to be given by ______',
        authority: 'PCSO',
        category: 'PCSO & CRS & PCE'
      },
      {
        description: 'The Officer authorized to certify Officers of HQ for working of motor trolleys ______',
        authority: 'PCSO',
        category: 'PCSO'
      },
      {
        description: 'Maximum Permissible speed for each section of the railway is given by ______',
        authority: 'PCOM',
        category: 'PCOM'
      },
      {
        description: '______ is the nodal officer for all Amrit Bharat Station Scheme (ABSS) works',
        authority: 'PCCM',
        category: 'PCCM'
      },
      {
        description: 'At Zonal level the management of Passenger Traffic is looked after by ______',
        authority: 'CPTM',
        category: 'CPTM'
      },
      {
        description: 'In the month of October minutes of Divisional time table meeting sent to ______',
        authority: 'CPTM',
        category: 'CPTM'
      },
      {
        description: 'Nodal officer of the construction of Private freight terminal is ______',
        authority: 'CTPM',
        category: 'CTPM'
      },
      {
        description: 'Coordinating officer for approval of plans and sanctioning of estimates for PFT is ______',
        authority: 'CGE',
        category: 'CGE'
      },
      {
        description: 'Who is the head of Transformation Cell at Railway Board? ______',
        authority: 'PED',
        category: 'PED'
      },
    {
      description: 'No. of detonators which shall be kept in stock at a station is prescribed by',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The time of reporting before the scheduled departure for LPs, Guards and ALPs is prescribed by',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Whenever alarm chain is pulled, Guard shall record the fact in CTR and submit a special report to ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Guard shall report to SM of the next important station, any stoppage or other irregularities in train working record the details in CTR and send a special report to the ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'In case shunters are required to work any train outside station limits, special instructions to be obtained from ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Material train shall be ordered to work with the permission of ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The Officer authorized to certify Officers of the division for working of motor trolleys ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Application to the CRS for sanction for carrying out works affecting running lines shall be made by the ______',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Who is the Chairman of the Official Language Implementation Committee of the Divisional Railway Office?',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Record pertaining to public claims etc., or those under reference from Home or other railways, should not be destroyed without permission from ______ of the concerned Railway.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'The playing of bands and presentation of Guard of Honour etc., on the Station Platform is prohibited, except with the prior permission of the ______ of the concerned Railway.',
      authority: 'DRM',
      category: 'DRM'
    },
    {
      description: 'Whenever Officers and Inspectors & Guards shall check speed of trains and if it is found that speed has been exceeded, they should inform LP at next stop and submit a report to ______',
      authority: 'DOM/DME/DEE',
      category: 'DOM'
    },
    {
      description: 'Trains not carrying passengers may be run without guard with the orders of the ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'In an emergency, a train not carrying passengers may be run without Guard can be ordered by ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'Before commencement of NI works the Engineering and S&T officials responsible for carrying out NI work shall send a Circular notice to ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'The official authorized to prescribe either one pilot only system or multiple pilot system of working at siding ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'Specific Loading Order (S.L.O) is givenby  ______',
      authority: 'Sr.DOM',
      category: 'DOM'
    },
    {
      description: 'The officials to sign and issue the SWR are ______',
      authority: 'DOM & DSTE',
      category: 'DOM'
    },
    {
      description: 'Patrol man must patrol their beats according to the Patrol charts issued by the ______',
      authority: 'DEN',
      category: 'DEN'
    },
    {
      description: 'Frequent power failures are to be reported to ______',
      authority: 'DEE',
      category: 'DEE'
    },
    {
      description: 'In extreme exigencies , the maintenance/repair of S&T gear is urgently needed to avoid an accident, same may be permitted by ______',
      authority: 'Sr.DSTE',
      category: 'DSTE'
    },
    {
      description: 'SWR diagram must be signed by ______',
      authority: 'DOM & DSTE& DEN',
      category: 'DOM'
    },
    {
      description: 'Appendix ‘G’ (rules for electrified section) of SWR must be signed by ______',
      authority: 'DOM & DSTE & DEE',
      category: 'DOM'
    },
    {
      description: 'The Officer authorized to certify Group ‘C’ staff of the division for working of motor trolleys ______',
      authority: 'Sr.DSO',
      category: 'DSO'
    },
    {
      description: 'The level of enquiry to be conducted in case of other consequential accidents to be done by ______',
      authority: 'Dy.CSO',
      category: 'CSO'
    },
    {
      description: 'Color light Distant signal may be permitted to be combined with the last Stop signal of a station in rear with an Intermediate Block signal by the Sanctioning Authority is _______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Double Distant signalling along with corresponding changes at adjacent stations without yard remodelling shall be brought into use if they have been passed by the Sanctioning Authority of ________ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Intermediate Block signalling and Automatic Block signalling except in section with Slip siding and Catch siding, along with corresponding changes at adjacent stations without yard remodelling shall brought into use if they have been passed by the Sanctioning Authority of ________ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Irregularities for use of Passes may be condoned by ______',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Who is the Chairman of Zonal Railways Official Language Implementation Committee?',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Employees are forbidden to occupy any place in station area for praying holding religious functions speeches, discourses etc., to erect religious structures, either permanent or temporary, or to add or alter any existing religious structures on railway land, without the sanction of the ______ of the concerned Railway.',
      authority: 'GM',
      category: 'GM'
    },
    {
      description: 'Accident Inquiry Reports with staff of foreign railway responsibility should be put to __________directly being the Accepting Authority in such cases.',
      authority: 'AGM',
      category: 'AGM'
    },
    {
      description: 'The level of enquiry to be conducted in case of A1 to A4(collision) in case CRS is not conducting to be done by minimum grade officers of ______',
      authority: 'SAG',
      category: 'SAG'
    },
  ]

  // Group permissions by category for better organization
  const groupedByCategory = permissions.reduce((acc, permission) => {
    const categoryKey = permission.category || 'Other'
    if (!acc[categoryKey]) {
      acc[categoryKey] = []
    }
    acc[categoryKey].push(permission)
    return acc
  }, {} as Record<string, PermissionItem[]>)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Government':
        return 'bg-gradient-to-r from-red-600 to-red-700'
      case 'CRS':
        return 'bg-linear-to-r from-orange-600 to-orange-700'
      case 'Authorised Officer':
        return 'bg-linear-to-r from-blue-600 to-blue-700'
      case 'PCOM':
        return 'bg-linear-to-r from-green-600 to-green-700'
      case 'DRM':
        return 'bg-linear-to-r from-purple-600 to-purple-700'
      default:
        return 'bg-linear-to-r from-indigo-600 to-indigo-700'
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 py-8 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 bg-linear-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
            Permissions/Sanctions/Authorised
          </h1>
          <p className="text-base text-gray-300 max-w-2xl mx-auto">
            Comprehensive guide to permissions, sanctions, and authorized procedures for railway operations
          </p>
        </div>

        {/* Content Grid */}
        <div className="space-y-8">
          {Object.entries(groupedByCategory).map(([category, items]) => (
            <div key={category} className="bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700">
              {/* Category Header */}
              <div className={`${getCategoryColor(category)} text-white px-2 text-center py-4`}>
                <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-center">
                  {category}
                </h2>
              </div>

              {/* Items */}
              <div className="p-3 space-y-4">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="group p-3 rounded-xl border border-slate-700 hover:border-emerald-500 hover:shadow-md transition-all duration-300 bg-linear-to-r from-slate-800 to-slate-700"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Description */}
                      <div className="flex-1">
                        <div className="flex items-start gap-3">
                          <span className="shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-gray-200 leading-relaxed font-medium">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Authority */}
                      <div className="shrink-0 sm:w-64 ml-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-900/50 border border-emerald-700">
                          <span className="text-emerald-300 font-semibold text-lg">
                            {item.authority}
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
            <div className="text-3xl font-bold text-emerald-400 mb-2">
              {permissions.length}
            </div>
            <div className="text-gray-300">Total Permissions</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">
              {Object.keys(groupedByCategory).length}
            </div>
            <div className="text-gray-300">Categories</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">
              Authorities
            </div>
            <div className="text-gray-300">Authorized By</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perminssions
