import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Reward from './pages/Reward';
import Setting from './pages/Setting';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ranking" element={<Ranking />} />
        <Route path="/Reward" element={<Reward />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </Router>
  );
}

export default App;
