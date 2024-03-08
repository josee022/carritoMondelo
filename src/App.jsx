

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vista1 from './pages/Vista1';
import Vista2 from './pages/Vista2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vista1 />} />
        <Route path="/vista2" element={<Vista2 />} />
      </Routes>
    </Router>
  );
}

export default App;
