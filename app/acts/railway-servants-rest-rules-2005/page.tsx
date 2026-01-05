import React from 'react'
import { Clock } from 'lucide-react'
import RailwayServantsRestRules2005Index from '@/components/railway-servants-rest-rules-2005/RailwayServantsRestRules2005Index'

const RailwayServantsRestRules2005 = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Clock className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">
              Railway Servants (Hours of Work and Period of Rest) Rules, 2005
            </h1>
            <div className="text-xl md:text-2xl font-light mb-8 text-blue-100">
              Work Hours & Rest Rules Reference
            </div>
            <p className="text-base md:text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive reference guide covering all rules related to hours of work and periods of rest for Railway Servants.
              Essential reference material for Railway Servants in Indian Railways regarding working hours and rest entitlements.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <RailwayServantsRestRules2005Index />
      </div>
    </div>
  )
}

export default RailwayServantsRestRules2005