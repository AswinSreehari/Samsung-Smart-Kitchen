import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Component/HomePage';
import ThreeDNavbar from './Component/3d-Navbar';
import NotFoundPage from './Component/NotFoundPage';
import ThreeDScene from './Component/ThreeDScene';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/3d-explore" element={<ThreeDScene />} />
         <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </Router>
  );
};

export default App;
