import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Ranking" element={<Ranking />} />
        <Route path="/Reward" element={<Reward />} />
        <Route path="/Setting" element={<Setting />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
