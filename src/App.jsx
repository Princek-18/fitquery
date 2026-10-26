import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Match from './pages/Match';
import Community from './Pages/Community';

function App() {
  // Simulating login state. In Phase 2, this will come from your Backend.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth onLogin={() => setIsLoggedIn(true)} />} />
        
        {/* Protected Community Route */}
        <Route 
          path="/community" 
          element={isLoggedIn ? <Community /> : <Navigate to="/login" />} 
        />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/match" element={<Match />} />
      </Routes>
    </Router>
  );
}

export default App;