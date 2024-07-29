import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navabar from './compnents/Navabar'; // Correct the spelling here
import Explore from './compnents/Explore';
import Emptylegs from './compnents/Emptylegs';
import Home from './compnents/Home'; // Add Home component for the landing page
import About from './compnents/About';
import Feedback from './compnents/Feedback';

const App = () => {
  return (
    <Router>
      <Navabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Feedback />} />
        <Route path="/charters" element={<Explore />} />
        <Route path="/emptylegs" element={<Emptylegs />} />
      </Routes>
    </Router>
  );
}

export default App;
