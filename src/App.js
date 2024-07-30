import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navabar from './compnents/Navabar'; // Correct the spelling here
import Explore from './compnents/Explore';
import Emptylegs from './compnents/Emptylegs';
import Home from './compnents/Home'; // Add Home component for the landing page
import About from './compnents/About';
import Feedback from './compnents/Feedback';
import Showfeedback from './compnents/Showfeedback';
import Charterdetails from './compnents/Charterdetails';
import Emptylegsdetails from './compnents/Emptylegsdetails';
import Search from './compnents/Search';
import Booking from './compnents/Booking';
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
        <Route path='/feedback' element={<Showfeedback/>}/>
        <Route path="/getcharterbyid/:id" element={<Charterdetails />} />
        <Route path="/getemptylegsbyid/:id" element={<Emptylegsdetails />} />
        <Route path='/search' element={<Search/>}/>
        <Route path='/bookflight' element={<Booking/>}/>
      </Routes>
    </Router>
  );
}

export default App;
