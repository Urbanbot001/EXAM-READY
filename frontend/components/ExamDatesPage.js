import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, CheckCircle, ExternalLink, AlertCircle } from 'lucide-react';

export default function ExamDatesPage() {
  const [examDates, setExamDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetchExamDates();
  }, [selectedType]);

  const fetchExamDates = async () => {
    try {
      setLoading(true);
      const url = selectedType === 'all' 
        ? '/api/exam-dates'
        : `/api/exam-dates?type=${selectedType}`;
      
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.success) {
        setExamDates(data.exams);
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching exam dates:', error);
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'open': return 'bg-green-100 text-green-700 border-green-300';
      case 'upcoming': return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'closed': return 'bg-gray-100 text-gray-700 border-gray-300';
      default: return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    }
  };

  const formatDate = (dateStr) => {
    if (dateStr === 'N/A') return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold mb-4">Exam Calendar 2026</h1>
        <p className="text-gray-600 text-lg">
          Stay updated with all important exam dates, registration deadlines, and results release dates
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        {['all', 'jamb', 'waec', 'neco'].map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              selectedType === type
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type === 'all' ? 'All Exams' : type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Exam Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {examDates.map(exam => (
          <div key={exam.id} className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 overflow-hidden hover:shadow-2xl transition-all">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-2xl">{exam.exam_name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${getStatusColor(exam.registration.status)}`}>
                  {exam.registration.status === 'open' ? '🟢 Registration Open' : 
                   exam.registration.status === 'upcoming' ? '🔵 Coming Soon' : '⚫ Closed'}
                </span>
              </div>
              
              {exam.days_left !== null && (
                <div className="bg-white bg-opacity-20 rounded-lg p-4 backdrop-blur">
                  <div className="text-4xl font-bold mb-1">{exam.days_left}</div>
                  <div className="text-sm text-blue-100">days until exam</div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Registration */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bell className="w-5 h-5 text-green-600" />
                  <h4 className="font-bold text-green-900">Registration</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Opens:</span>
                    <span className="font-semibold">{formatDate(exam.registration.start)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Closes:</span>
                    <span className="font-semibold">{formatDate(exam.registration.end)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Fee:</span>
                    <span className="font-semibold text-green-600">{exam.registration.fee}</span>
                  </div>
                </div>
              </div>

              {/* Exam Dates */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <h4 className="font-bold text-blue-900">Examination Period</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Starts:</span>
                    <span className="font-semibold">{formatDate(exam.exam.start)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ends:</span>
                    <span className="font-semibold">{formatDate(exam.exam.end)}</span>
                  </div>
                  <div className="text-gray-600 text-xs mt-2">
                    📍 {exam.exam.venue}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                  <h4 className="font-bold text-purple-900">Results</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected:</span>
                    <span className="font-semibold">{formatDate(exam.result.release_date)}</span>
                  </div>
                  <div className="text-gray-600 text-xs">
                    {exam.result.checking_method}
                  </div>
                </div>
              </div>

              {/* Updates */}
              {exam.updates && exam.updates.length > 0 && (
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-bold text-yellow-900">Important Updates</h4>
                  </div>
                  <ul className="space-y-2">
                    {exam.updates.map((update, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-yellow-500">•</span>
                        <span>{update}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Links - FIX WAS APPLIED HERE */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-200">
                {Object.entries(exam.important_links).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {examDates.length === 0 && (
        <div className="text-center py-20">
          <Calendar className="w-20 h-20 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-xl">No exams found for this category</p>
        </div>
      )}
    </div>
  );
}