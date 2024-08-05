// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agriculture from './pages/Agriculture';
import CulturalGallery from './pages/CulturalGallery';
import Tourism from './pages/Tourism';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/culturalgallery" element={<CulturalGallery />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
