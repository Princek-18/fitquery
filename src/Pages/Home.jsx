import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navbar />
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Phase 1: Now Live
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mt-6 leading-tight">
              Advice that actually <span className="text-blue-600">fits.</span>
            </h1>
            <p className="text-xl text-slate-500 mt-6 leading-relaxed">
              Find influencers matching your **body type** and **goals**. Get personalized answers to your fitness questions.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-10">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-200 hover:scale-105 transition">
                Ask a Question
              </button>
              <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition">
                View Transformations
              </button>
            </div>
          </div>
          <div className="flex-1 bg-blue-100 rounded-[40px] h-[400px] w-full flex items-center justify-center text-blue-400 font-bold text-2xl border-4 border-dashed border-blue-200">
            [Influencer Matching Demo]
          </div>
        </div>
      </section>

      {/* 2. Key Features Section (As per your PDF) */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">Why FitQuery?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { id: '01', title: 'Smart Matching', desc: 'Suggests influencers based on your user data.', icon: '🎯' },
            { id: '02', title: 'Q&A System', desc: 'Ask real questions and get upvoted answers.', icon: '💬' },
            { id: '03', title: 'Transformation Gallery', desc: 'Verified before/after uploads with full stats.', icon: '📈' }
          ].map((feature) => (
            <div key={feature.id} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition">
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-black mb-3">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Trending Questions (Community Feel) */}
      <section className="bg-slate-900 py-24 px-6 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Trending Discussions</h2>
              <p className="text-slate-400 mt-2">Active now in the community</p>
            </div>
            <button className="text-blue-400 font-bold hover:underline">See All</button>
          </div>
          
          {/* Sample Question Cards */}
          <div className="space-y-4">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:bg-slate-750 transition cursor-pointer">
              <div className="flex gap-2 mb-3">
                <span className="text-xs font-bold bg-blue-900/50 text-blue-400 px-2 py-1 rounded">#Bulking</span>
              </div>
              <h4 className="text-xl font-bold text-white">Best protein source for Ectomorph body types?</h4>
              <p className="text-slate-400 text-sm mt-3">Asked by Adii • 12 Answers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;