import React, { useState, useEffect } from 'react';
import ExamDatesPage from './ExamDatesPage';
import { Calendar, BookOpen, CheckCircle, Clock, Award, Search, Bell, Download, Play, Users, TrendingUp, Star, Menu, X, ChevronRight } from 'lucide-react';

const ExamReadyApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [examType, setExamType] = useState('jamb');

  // Sample exam dates data
  const examDates = [
    {
      exam: 'JAMB UTME 2026',
      registration: 'Feb 1 - Mar 15, 2026',
      examDate: 'April 10 - May 5, 2026',
      result: 'May 20, 2026',
      status: 'upcoming',
      daysLeft: 74
    },
    {
      exam: 'WAEC (May/June) 2026',
      registration: 'Jan 10 - Mar 20, 2026',
      examDate: 'May 3 - June 15, 2026',
      result: 'July 30, 2026',
      status: 'registration',
      daysLeft: 97
    },
    {
      exam: 'NECO SSCE 2026',
      registration: 'Feb 15 - Apr 10, 2026',
      examDate: 'June 1 - July 20, 2026',
      result: 'August 25, 2026',
      status: 'upcoming',
      daysLeft: 126
    }
  ];

  // Sample subjects with past questions
  const subjects = {
    jamb: [
      { id: 1, name: 'Mathematics', icon: '🔢', questions: 450, topics: 12, difficulty: 'Hard' },
      { id: 2, name: 'English Language', icon: '📚', questions: 380, topics: 10, difficulty: 'Medium' },
      { id: 3, name: 'Physics', icon: '⚛️', questions: 420, topics: 15, difficulty: 'Hard' },
      { id: 4, name: 'Chemistry', icon: '🧪', questions: 400, topics: 14, difficulty: 'Hard' },
      { id: 5, name: 'Biology', icon: '🧬', questions: 390, topics: 13, difficulty: 'Medium' },
      { id: 6, name: 'Commerce', icon: '💼', questions: 350, topics: 11, difficulty: 'Medium' },
      { id: 7, name: 'Economics', icon: '📊', questions: 360, topics: 10, difficulty: 'Medium' },
      { id: 8, name: 'Government', icon: '🏛️', questions: 340, topics: 9, difficulty: 'Easy' },
    ],
    waec: [
      { id: 9, name: 'Mathematics', icon: '🔢', questions: 520, topics: 14, difficulty: 'Hard' },
      { id: 10, name: 'English Language', icon: '📚', questions: 480, topics: 12, difficulty: 'Medium' },
      { id: 11, name: 'Physics', icon: '⚛️', questions: 490, topics: 16, difficulty: 'Hard' },
      { id: 12, name: 'Chemistry', icon: '🧪', questions: 470, topics: 15, difficulty: 'Hard' },
      { id: 13, name: 'Biology', icon: '🧬', questions: 460, topics: 14, difficulty: 'Medium' },
      { id: 14, name: 'Agricultural Science', icon: '🌾', questions: 380, topics: 11, difficulty: 'Medium' },
    ]
  };

  // Sample past questions
  const sampleQuestions = [
    {
      id: 1,
      year: '2024',
      subject: 'Mathematics',
      question: 'If 2x + 3 = 11, what is the value of x?',
      options: ['A. 2', 'B. 4', 'C. 5', 'D. 8'],
      answer: 'B',
      explanation: 'Subtract 3 from both sides: 2x = 8, then divide by 2: x = 4'
    },
    {
      id: 2,
      year: '2023',
      subject: 'English',
      question: 'Choose the word that best completes the sentence: The students were _____ by the teacher.',
      options: ['A. complemented', 'B. complimented', 'C. completed', 'D. competed'],
      answer: 'B',
      explanation: 'Complimented means praised, which fits the context.'
    }
  ];

  const stats = [
    { label: 'Past Questions', value: '5,000+', icon: BookOpen, color: 'blue' },
    { label: 'Active Students', value: '12,500+', icon: Users, color: 'green' },
    { label: 'Success Rate', value: '94%', icon: Award, color: 'yellow' },
    { label: 'Study Hours', value: '50,000+', icon: Clock, color: 'purple' }
  ];

  const HomePage = () => (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ace Your Exams with ExamReady 🎓
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Access thousands of past questions from JAMB, WAEC, and NECO. Study smarter, score higher!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
              Start Practicing Free
            </button>
            <button className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all border-2 border-white">
              View Exam Dates
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            yellow: 'from-yellow-500 to-yellow-600',
            purple: 'from-purple-500 to-purple-600'
          };
          return (
            <div key={idx} className={`bg-gradient-to-br ${colorClasses[stat.color]} text-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform`}>
              <Icon className="w-8 h-8 mb-3 opacity-80" />
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Upcoming Exams */}
      <div>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-600" />
          Upcoming Exams 2026
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {examDates.map((exam, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-all">
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{exam.exam}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  exam.status === 'registration' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {exam.status === 'registration' ? 'Open' : 'Coming Soon'}
                </span>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Registration:</span>
                  <span className="font-semibold">{exam.registration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Exam Date:</span>
                  <span className="font-semibold">{exam.examDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Result:</span>
                  <span className="font-semibold">{exam.result}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">{exam.daysLeft}</span>
                  <span className="text-gray-600 text-sm">days to exam</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Why Choose ExamReady?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: BookOpen, title: '5,000+ Past Questions', desc: 'Comprehensive database from official sources', color: 'blue' },
            { icon: TrendingUp, title: 'Track Your Progress', desc: 'Monitor improvement with detailed analytics', color: 'green' },
            { icon: Award, title: '94% Success Rate', desc: 'Students who practice score higher', color: 'yellow' },
            { icon: Clock, title: 'Study Anytime', desc: '24/7 access on mobile and desktop', color: 'purple' },
            { icon: Download, title: 'Offline Access', desc: 'Download questions and study offline', color: 'pink' },
            { icon: Play, title: 'Video Lessons', desc: 'Watch expert explanations (Premium)', color: 'red' }
          ].map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-${feature.color}-100 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${feature.color}-600`} />
                </div>
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const PastQuestionsPage = () => (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-4">Past Questions</h1>
        <p className="text-gray-600 text-lg">Practice with authentic questions from previous exams</p>
      </div>

      {/* Exam Type Selector */}
      <div className="flex gap-4 flex-wrap">
        {['jamb', 'waec', 'neco'].map(type => (
          <button
            key={type}
            onClick={() => setExamType(type)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              examType === type
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {type.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search subjects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 outline-none text-lg"
        />
      </div>

      {/* Subjects Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects[examType]?.filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase())).map(subject => (
          <div
            key={subject.id}
            onClick={() => setSelectedSubject(subject)}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-blue-300 transform hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">{subject.icon}</div>
            <h3 className="font-bold text-xl mb-2">{subject.name}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Questions:</span>
                <span className="font-semibold text-blue-600">{subject.questions}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Topics:</span>
                <span className="font-semibold">{subject.topics}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Difficulty:</span>
                <span className={`font-semibold ${
                  subject.difficulty === 'Hard' ? 'text-red-600' : 
                  subject.difficulty === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                }`}>
                  {subject.difficulty}
                </span>
              </div>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Start Practice
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* Sample Questions Preview */}
      {selectedSubject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h2 className="text-2xl font-bold">{selectedSubject.name}</h2>
                <p className="text-blue-100">Practice Questions</p>
              </div>
              <button onClick={() => setSelectedSubject(null)} className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {sampleQuestions.map((q, idx) => (
                <div key={q.id} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-sm font-semibold text-blue-600">Question {idx + 1} • {q.year}</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                      {q.subject}
                    </span>
                  </div>
                  
                  <p className="font-medium text-lg mb-4">{q.question}</p>
                  
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, i) => (
                      <div key={i} className={`p-3 rounded-lg border-2 ${
                        opt.startsWith(q.answer) ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'
                      }`}>
                        {opt}
                      </div>
                    ))}
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">Correct Answer: {q.answer}</span>
                    </div>
                    <p className="text-gray-700">{q.explanation}</p>
                  </div>
                </div>
              ))}

              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
                  Load More Questions ({selectedSubject.questions - 2} remaining)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                ER
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ExamReady Nigeria
                </h1>
                <p className="text-xs text-gray-500">Ace JAMB, WAEC & NECO</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: 'home', label: 'Home', icon: BookOpen },
                { id: 'questions', label: 'Past Questions', icon: BookOpen },
                { id: 'dates', label: 'Exam Dates', icon: Calendar }
              ].map(tab => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {tab.label}
                  </button>
                );
              })}
              <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:shadow-lg transition-all flex items-center gap-2">
                <Star className="w-5 h-5" />
                Go Premium
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-gray-700"
            >
              {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <nav className="md:hidden mt-4 space-y-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'questions', label: 'Past Questions' },
                { id: 'dates', label: 'Exam Dates' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setShowMobileMenu(false); }}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold ${
                    activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && <HomePage />}
        {activeTab === 'questions' && <PastQuestionsPage />}
        {activeTab === 'dates' && <HomePage />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">ExamReady Nigeria</h3>
              <p className="text-gray-400">Your trusted partner for exam success. Practice smart, score high!</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">Past Questions</li>
                <li className="hover:text-white cursor-pointer">Exam Dates</li>
                <li className="hover:text-white cursor-pointer">Study Tips</li>
                <li className="hover:text-white cursor-pointer">Premium</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Exams</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer">JAMB</li>
                <li className="hover:text-white cursor-pointer">WAEC</li>
                <li className="hover:text-white cursor-pointer">NECO</li>
                <li className="hover:text-white cursor-pointer">NABTEB</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📧 hello@examready.ng</li>
                <li>📱 +234-XXX-XXX-XXXX</li>
                <li>🐦 @ExamReadyNG</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 ExamReady Nigeria. Built with ❤️ for Nigerian students. All questions sourced from official JAMB/WAEC websites.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ExamReadyApp;