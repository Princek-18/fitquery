import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isInfluencer, setIsInfluencer] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-6 font-sans">
      <div className="max-w-3xl mx-auto bg-[#141414] rounded-[3rem] shadow-2xl border border-gray-800/50 overflow-hidden">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#1a1a1a] to-[#262626] p-10 border-b border-gray-800">
          <h1 className="text-4xl font-black italic uppercase tracking-tighter text-[#ff4d00]">
            Setup Your Profile [cite: 16]
          </h1>
          <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mt-2">
            Personalize your FitQuery experience [cite: 5, 20]
          </p>
        </div>

        <form className="p-10 space-y-8" onSubmit={(e) => { e.preventDefault(); navigate('/match'); }}>
          
          {/* Profile Picture Upload Section */}
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="w-32 h-32 rounded-full bg-[#1f1f1f] border-2 border-dashed border-gray-700 flex items-center justify-center cursor-pointer hover:border-[#ff4d00] transition-colors group">
              <span className="text-gray-500 group-hover:text-[#ff4d00] text-sm font-bold uppercase">Upload Pic [cite: 18]</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Mandatory Fields [cite: 36] */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00]">Full Name *</label>
              <input required type="text" placeholder="ADII" className="w-full bg-[#1a1a1a] border-2 border-transparent focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00]">Email Address *</label>
              <input required type="email" placeholder="EXAMPLE@MAIL.COM" className="w-full bg-[#1a1a1a] border-2 border-transparent focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00]">Gender *</label>
              <select required className="w-full bg-[#1a1a1a] border-2 border-transparent focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold uppercase">
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#ff4d00]">Age *</label>
              <input required type="number" placeholder="21" className="w-full bg-[#1a1a1a] border-2 border-transparent focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold" />
            </div>

            {/* Optional Fields [cite: 17] */}
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Instagram Link</label>
              <input type="text" placeholder="IG URL" className="w-full bg-[#1a1a1a] border-2 border-gray-800 focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">YouTube Link</label>
              <input type="text" placeholder="YT URL" className="w-full bg-[#1a1a1a] border-2 border-gray-800 focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold" />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Transformation Type [cite: 18]</label>
              <select className="w-full bg-[#1a1a1a] border-2 border-gray-800 focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold uppercase">
                <option value="">Choose your journey </option>
                <option>Skinny to Fit</option>
                <option>Fat to Fit</option>
                <option>Skinny Fatty to Fit</option>
              </select>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Profession</label>
              <input type="text" placeholder="e.g., Software Engineer / Student" className="w-full bg-[#1a1a1a] border-2 border-gray-800 focus:border-[#ff4d00] p-4 rounded-2xl outline-none transition-all font-bold" />
            </div>
          </div>

          {/* Influencer Toggle [cite: 1] */}
          <div className="flex items-center gap-4 bg-[#1a1a1a] p-6 rounded-2xl border-2 border-gray-800 hover:border-[#ff4d00]/30 transition-all">
            <input 
              type="checkbox" 
              id="influencer" 
              checked={isInfluencer} 
              onChange={() => setIsInfluencer(!isInfluencer)}
              className="w-6 h-6 accent-[#ff4d00] cursor-pointer" 
            />
            <label htmlFor="influencer" className="font-bold cursor-pointer text-sm uppercase tracking-wider">
              You are an Influencer [cite: 1]
            </label>
          </div>

          {/* Journey Button [cite: 27] */}
          <button 
            type="submit"
            className="w-full bg-[#ff4d00] text-white py-6 rounded-2xl font-black text-xl uppercase italic tracking-widest shadow-[0_10px_30px_rgba(255,77,0,0.3)] hover:bg-[#ff6a00] hover:-translate-y-1 transition-all duration-300"
          >
            Start My Journey
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;