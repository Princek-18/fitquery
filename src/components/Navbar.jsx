import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // This is the "navigator" tool
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-100 z-50 px-6 py-3 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-blue-600 tracking-tighter">FitQuery</h1>
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-full w-96">
          <span className="text-gray-400 mr-2">🔍</span>
          <input 
            type="text" 
            placeholder="Search questions, influencers..." 
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
       <button 
        onClick={() => navigate('/login')} 
        className="..."
      >
        Login
        </button>
<button 
  onClick={() => navigate('/community')}
  className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 shadow-md transition"
>
  Join Community
</button>
      </div>
    </nav>
  );
};

export default Navbar;