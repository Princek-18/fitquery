import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Match = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bodyType: '',
    goal: '',
    level: ''
  });

  const nextStep = () => setStep(step + 1);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <Navbar />

      <div className="max-w-2xl mx-auto pt-32 px-6">
        {/* Progress Bar */}
        <div className="w-full bg-gray-800 h-1 rounded-full mb-12">
          <div 
            className="bg-[#ff4d00] h-1 rounded-full transition-all duration-500 shadow-[0_0_10px_rgba(255,77,0,0.6)]"
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* Step 1: Body Type (As per your PDF [cite: 10, 17]) */}
        {step === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2 text-[#ff4d00]">
              What is your body type?
            </h2>
            <p className="text-gray-400 mb-8 font-bold text-sm uppercase tracking-widest">Select the closest match</p>
            <div className="grid gap-4">
              {['Ectomorph (Slim)', 'Mesomorph (Athletic)', 'Endomorph (Broad)'].map((type) => (
                <button
                  key={type}
                  onClick={() => { setFormData({...formData, bodyType: type}); nextStep(); }}
                  className="w-full p-6 rounded-2xl bg-[#1a1a1a] border-2 border-transparent hover:border-[#ff4d00] transition-all text-left font-bold text-lg hover:translate-x-2"
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Fitness Goals (As per your PDF [cite: 2, 26]) */}
        {step === 2 && (
          <div className="animate-fadeIn">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-2 text-[#ff4d00]">
              What is your goal?
            </h2>
            <p className="text-gray-400 mb-8 font-bold text-sm uppercase tracking-widest">We will match you with specialists</p>
            <div className="grid grid-cols-2 gap-4">
              {['Muscle Gain', 'Weight Loss', 'Endurance', 'Flexibility'].map((goal) => (
                <button
                  key={goal}
                  onClick={() => { setFormData({...formData, goal: goal}); nextStep(); }}
                  className="p-8 rounded-3xl bg-[#1a1a1a] border-2 border-transparent hover:border-[#ff4d00] transition-all text-center font-black uppercase italic tracking-tighter"
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Finding Results */}
        {step === 3 && (
          <div className="text-center py-10">
            <div className="inline-block p-6 rounded-full bg-[#ff4d00]/10 mb-6 animate-pulse">
              <img src="https://www.svgrepo.com/show/275323/fitness-gym.svg" className="w-16 h-16 brightness-0 invert" alt="loading" />
            </div>
            <h2 className="text-3xl font-black uppercase italic italic mb-4">Finding Your Match...</h2>
            <p className="text-gray-400 mb-8">Analyzing influencers with {formData.bodyType} builds and {formData.goal} expertise.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#ff4d00] text-white px-10 py-4 rounded-full font-black uppercase tracking-widest shadow-lg shadow-[#ff4d00]/20 hover:scale-105 transition"
            >
              Show My Influencers
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Match;