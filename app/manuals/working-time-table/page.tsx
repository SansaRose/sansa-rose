'use client'
import React, { useState, useEffect } from 'react'
import { Download, FileText, Clock, DollarSign, Train, Route, Search, AlertTriangle, Weight, Calendar, ChevronDown, ChevronUp, BookOpenCheck, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

const WTT = () => {
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [openingContent, setOpeningContent] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  const toggleTopic = (topicId: string) => {
    setExpandedTopic(prev => prev === topicId ? null : topicId)
  }

  const openContent = (topicId: string) => {
    setOpeningContent(topicId)

    setTimeout(() => {
      router.push(`/manuals/working-time-table/content/${topicId}`)
      setOpeningContent(null)
    }, 100)
  }

  const handleDownloadWTT = (division: string, filename: string) => {
    const link = document.createElement('a')
    link.href = `/working-time-table-pdfs/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Auto-open PDF on mobile devices after download
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setTimeout(() => {
        window.open(`/working-time-table-pdfs/${filename}`, '_blank')
      }, 1000) // Wait 1 second for download to start
    }
  }

  const topics = [
    {
      id: 'detention-cost',
      title: 'Detention Cost',
      icon: <DollarSign className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      description: 'Guidelines for calculating detention costs for trains and wagons at stations'
    },
    {
      id: 'stoppage-cost',
      title: 'Stoppage Cost',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Regulations for stoppage costs and time-based charges for railway operations'
    },
    {
      id: 'relief-trains',
      title: 'Relief Trains',
      icon: <Train className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      description: 'Procedures and guidelines for operating relief trains in emergency situations'
    },
    {
      id: 'odc',
      title: 'ODC (Over Dimensional Consignment)',
      icon: <Weight className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Special procedures for handling over dimensional and overweight consignments'
    },
    {
      id: 'cc-routes',
      title: 'CC Routes',
      icon: <Route className="w-6 h-6" />,
      color: 'from-orange-500 to-orange-600',
      description: 'Chief Controller approved routes and special routing guidelines'
    },
    {
      id: 'freight-train-examination',
      title: 'Freight Train Examination',
      icon: <Search className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600',
      description: 'Standard procedures for examining freight trains and cargo integrity'
    },
    {
      id: 'invalid-bpc',
      title: 'Invalid BPC',
      icon: <AlertTriangle className="w-6 h-6" />,
      color: 'from-rose-500 to-rose-600',
      description: 'Guidelines for handling invalid brake power certificates and corrections'
    },
    {
      id: 'weighbridges',
      title: 'Weighbridges',
      icon: <Weight className="w-6 h-6" />,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Operations and maintenance procedures for railway weighbridges'
    },
    {
      id: 'time-tabling',
      title: 'Time Tabling',
      icon: <Calendar className="w-6 h-6" />,
      color: 'from-cyan-500 to-cyan-600',
      description: 'Comprehensive guide to train scheduling and time table management'
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-4 lg:px-4 px-2">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="bg-linear-to-r from-blue-500 to-indigo-600 lg:p-3 p-2 rounded-full">
                <Clock className="lg:w-8 lg:h-8 w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="lg:text-6xl text-2xl font-bold bg-linear-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent mb-6 animate-fade-in">
              WORKING TIME TABLE
            </h1>
            <h2 className="lg:text-4xl text-xl font-bold text-purple-300 mb-4">IMPORTANT TOPICS INDEX</h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="lg:text-xl text-base text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide covering Detention Cost, Stoppage Cost, Relief Trains, ODC, CC Routes,
              Freight Train Examination, Invalid BPC, Weighbridges, and Time Tabling -
              Essential reference material for railway operations and management.
            </p>
            <div className="mt-6 bg-linear-to-r from-blue-500/20 to-indigo-500/20 rounded-lg p-4 backdrop-blur-sm border border-blue-400/30">
              <p className="text-blue-200 font-medium">Working Time Table - Complete Operations Reference</p>
            </div>
          </div>

          {/* Topics Index */}
          <div className="max-w-7xl mx-auto px-2 lg:px-4 py-6">
            <div className="grid gap-6 md:gap-8">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-white/20 hover:bg-white/15"
                >
                  {/* Topic Header */}
                  <div
                    className={`bg-linear-to-r ${topic.color} text-white p-6 cursor-pointer hover:brightness-110 transition-all duration-300`}
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <div className="flex flex-col items-center text-center">
                      {/* Topic Icon */}
                      <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                        {topic.icon}
                      </div>

                      {/* Topic Title and Description */}
                      <div className="mb-4">
                        <h2 className="text-xl sm:text-2xl font-bold">
                          {topic.title}
                        </h2>
                        <p className="text-white/80 text-sm mt-2">
                          {topic.description}
                        </p>
                      </div>

                      {/* Horizontal Line */}
                      <div className="w-24 h-0.5 bg-white/30 rounded-full mb-4"></div>

                      {/* Expand/Collapse Icon */}
                      <div className="bg-white/20 py-2 px-4 rounded-md backdrop-blur-sm">
                        {expandedTopic === topic.id ? (
                          <ChevronUp className="w-6 h-6 text-white" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-white" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Topic Content */}
                  {expandedTopic === topic.id && (
                    <div className="py-4 lg:px-4 px-2">
                      <div className="flex items-center justify-center space-x-4 py-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                        {/* View Content Button */}
                        <button
                          onClick={() => openContent(topic.id)}
                          disabled={openingContent === topic.id}
                          className={`flex items-center space-x-2 px-6 py-3 text-white text-sm font-medium rounded-md transition-all duration-300 ${
                            openingContent === topic.id
                              ? 'bg-gray-500 cursor-not-allowed'
                              : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:shadow-lg hover:scale-105'
                          }`}
                        >
                          {openingContent === topic.id ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          ) : (
                            <BookOpenCheck className="w-4 h-4" />
                          )}
                          <span>{openingContent === topic.id ? 'Opening...' : 'View Content'}</span>
                          {!isMobile && openingContent !== topic.id && <ExternalLink className="w-3 h-3" />}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>



          {/* Download Section */}
          <div className="mt-6 text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-center space-x-3 mb-6">
                <Download className="w-8 h-8 text-green-400" />
                <h3 className="text-2xl font-bold text-white">
                  Official Working Time Table Documents
                </h3>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Download official Working Time Table documents for different divisions containing complete train schedules,
                timings, and operational details for railway operations and management.
              </p>

              {/* Download Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* SC Division - Featured */}
                <div className="bg-linear-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-white/20">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Secunderabad Division</h4>
                    <p className="text-blue-100 text-sm mb-4">Edition - 79</p>
                    <button
                      onClick={() => handleDownloadWTT('SC', 'WTT 79 SC DIVISION.pdf')}
                      className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group shadow-lg"
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Download WTT 79 SC
                    </button>
                  </div>
                </div>

                {/* NED Division */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-linear-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">NED Division</h4>
                    <p className="text-gray-300 text-sm mb-4">Nanded Division</p>
                    <button
                      onClick={() => handleDownloadWTT('NED', 'WTT 79 NED DIVISION.pdf')}
                      className="bg-linear-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group text-sm"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download WTT 79 NED
                    </button>
                  </div>
                </div>

                {/* HYD Division */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">HYD Division</h4>
                    <p className="text-gray-300 text-sm mb-4">Hyderabad Division</p>
                    <button
                      onClick={() => handleDownloadWTT('HYD', 'WTT 79 HYD DIVISION.pdf')}
                      className="bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group text-sm"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download WTT 79 HYD
                    </button>
                  </div>
                </div>

                {/* BZA Division */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">BZA Division</h4>
                    <p className="text-gray-300 text-sm mb-4">Vijayawada Division</p>
                    <button
                      onClick={() => handleDownloadWTT('BZA', 'WTT 79 BZA DIVISION.pdf')}
                      className="bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group text-sm"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download WTT 79 BZA
                    </button>
                  </div>
                </div>

                {/* GTL Division */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-linear-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">GTL Division</h4>
                    <p className="text-gray-300 text-sm mb-4">Guntakal Division</p>
                    <button
                      onClick={() => handleDownloadWTT('GTL', 'WTT 79 GTL DIVISION.pdf')}
                      className="bg-linear-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group text-sm"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download WTT 79 GTL
                    </button>
                  </div>
                </div>

                {/* GNT Division */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">GNT Division</h4>
                    <p className="text-gray-300 text-sm mb-4">Guntur Division</p>
                    <button
                      onClick={() => handleDownloadWTT('GNT', 'WTT 79 GNT DIVISION.pdf')}
                      className="bg-linear-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group text-sm"
                    >
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                      Download WTT 79 GNT
                    </button>
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

export default WTT