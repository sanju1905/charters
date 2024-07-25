import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compnents/Navabar';
import Explore from './compnents/Explore';
import Emptylegs from './compnents/Emptylegs';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
         
          <Route path='/charters' element={<Explore />} />
          <Route path='/emptylegs' element={<Emptylegs />} />
   
        </Routes>
      </div>
    </Router>
  );
}

export default App;
