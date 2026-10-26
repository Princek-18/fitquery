import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Handle form submission to move to the Match page
  const handleAuthSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd add login logic here. 
    // For now, we move directly to the Smart Matching system.
    navigate('/profile');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* 1. High-Contrast Gym Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-700"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop')`, 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 backdrop-blur-[1px]"></div>
      </div>

      {/* 2. Sleek Dark Auth Card */}
      <div className="relative z-10 bg-white w-full max-w-md rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border border-gray-100">
        
        {/* Top Header */}
        <div className="bg-[#1a1a1a] p-10 text-center relative">
          <button 
            onClick={() => navigate('/')} 
            className="absolute left-6 top-6 text-gray-400 hover:text-[#ff4d00] text-[10px] font-black uppercase tracking-[0.2em] transition-all"
          >
            ← Home
          </button>

          <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-gradient-to-tr from-[#ff4d00] to-[#ff8c00] p-4 rounded-2xl rotate-3 shadow-[0_0_20px_rgba(255,77,0,0.4)]">
              <img 
                src="https://i.pinimg.com/1200x/d3/2c/18/d32c186974dd233440f9ae88edbe4d97.jpg" 
                alt="fitness-icon" 
                className="w-16 h-16 object-cover rounded-lg" 
              />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white italic">
                {isLogin ? 'Welcome Back' : 'Get Started'}
              </h2>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                {isLogin ? 'Back to the grind' : 'Join the elite'}
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-2 border-2 border-gray-100 py-3 rounded-2xl hover:border-gray-300 transition text-xs font-black uppercase tracking-tighter text-gray-700">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-4 h-4" alt="google" />
              Google
            </button>
            <button className="flex items-center justify-center gap-2 border-2 border-gray-100 py-3 rounded-2xl hover:border-pink-500 transition text-xs font-black uppercase tracking-tighter text-gray-700">
              <img src="https://www.svgrepo.com/show/452229/instagram.svg" className="w-4 h-4" alt="instagram" />
              Instagram
            </button>
          </div>

          <div className="relative mb-8 text-center">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100"></span></div>
            <span className="relative bg-white px-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.3em]">Credentials</span>
          </div>

          {/* Updated Form Tag with handleAuthSubmit */}
          <form className="space-y-4" onSubmit={handleAuthSubmit}>
            {!isLogin && (
              <input 
                type="text" 
                placeholder="FULL NAME" 
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#ff4d00] focus:bg-white outline-none transition-all font-bold text-sm uppercase placeholder:text-gray-300" 
              />
            )}
            <input 
              type="email" 
              placeholder="EMAIL ADDRESS" 
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#ff4d00] focus:bg-white outline-none transition-all font-bold text-sm uppercase placeholder:text-gray-300" 
              required
            />
            <input 
              type="password" 
              placeholder="PASSWORD" 
              className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#ff4d00] focus:bg-white outline-none transition-all font-bold text-sm uppercase placeholder:text-gray-300" 
              required
            />
            
            {isLogin && (
              <div className="text-right px-1">
                <button type="button" className="text-[10px] text-[#ff4d00] font-black uppercase tracking-widest hover:underline">
                  Forgot Password?
                </button>
              </div>
            )}

            <button 
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl hover:bg-[#ff4d00] transition-all duration-300 active:scale-95 mt-4"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Registration Toggle */}
          <div className="mt-10 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
              {isLogin ? "No account?" : "Have an account?"} {' '}
              <button 
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#ff4d00] font-black hover:underline ml-1"
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;