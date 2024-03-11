
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Vista1 from './pages/Vista1';
import Vista2 from './pages/Vista2';
import Vista3 from './pages/Vista3';
import Vista4 from './pages/Vista4';
import Vista5 from './pages/Vista5';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Vista1 />} />
        <Route path="/vista2" element={<Vista2 />} />
        <Route path="/vista3" element={<Vista3 />} />
        <Route path="/vista4" element={<Vista4 />} />
        <Route path="/vista5" element={<Vista5 />} />
      </Routes>
    </Router>
  );
}

export default App;
