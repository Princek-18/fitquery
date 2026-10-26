import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const Community = () => {
  const [activeTab, setActiveTab] = useState('Feed');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />
      
      <div className="max-w-6xl mx-auto pt-24 px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Sidebar - Categories [cite: 25] */}
        <div className="hidden md:block space-y-2">
          <h3 className="text-[#ff4d00] font-black text-xs uppercase tracking-widest mb-4 px-4">Categories</h3>
          {['Weight Loss', 'Muscle Gain', 'Diet & Nutrition', 'Beginner Help'].map((cat) => (
            <button key={cat} className="w-full text-left px-4 py-3 rounded-xl hover:bg-[#1a1a1a] hover:text-[#ff4d00] transition-all font-bold text-sm border border-transparent hover:border-gray-800">
              {cat}
            </button>
          ))}
        </div>

        {/* Main Feed [cite: 12] */}
        <div className="md:col-span-2 space-y-6">
          {/* Ask Question Input [cite: 8] */}
          <div className="bg-[#141414] p-6 rounded-[2rem] border border-gray-800 shadow-xl">
            <textarea 
              placeholder="What's your fitness query today?"
              className="w-full bg-[#1a1a1a] rounded-2xl p-4 outline-none border-2 border-transparent focus:border-[#ff4d00] transition-all font-medium mb-4"
              rows="3"
            />
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Ask the community</span>
              <button className="bg-[#ff4d00] text-white px-6 py-2 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition">
                Post Question
              </button>
            </div>
          </div>

          {/* Discussion List [cite: 23, 24] */}
          {[1, 2].map((post) => (
            <div key={post} className="bg-[#141414] rounded-[2rem] border border-gray-800 overflow-hidden hover:border-[#ff4d00]/50 transition-all">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#ff4d00] to-[#ff8c00]"></div>
                  <div>
                    <p className="text-sm font-black uppercase italic">Fitness_Warrior</p>
                    <p className="text-[10px] text-gray-500 font-bold uppercase">Skinny to Fit Journey [cite: 22]</p>
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-3 italic">Is 3,000 calories too much for a beginner ectomorph? [cite: 13]</h2>
                <div className="flex gap-4 text-xs font-black uppercase tracking-widest">
                  <button className="text-[#ff4d00] hover:underline">▲ Upvote (42) [cite: 14]</button>
                  <button className="text-gray-500 hover:text-white transition">💬 Reply (12) [cite: 24]</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Sidebar - Trending Influencers [cite: 20] */}
        <div className="hidden lg:block">
          <div className="bg-[#141414] p-6 rounded-[2rem] border border-gray-800">
            <h3 className="text-white font-black text-xs uppercase tracking-widest mb-6">Active Influencers</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((inf) => (
                <div key={inf} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-[#ff4d00]"></div>
                    <span className="text-xs font-bold uppercase">Coach_X</span>
                  </div>
                  <button className="text-[10px] bg-[#ff4d00] px-3 py-1 rounded-full font-black uppercase">Follow [cite: 24]</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;