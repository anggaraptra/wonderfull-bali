// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Agriculture from './pages/Agriculture';
import Tabanan from './pages/AgricultureDetails/Tabanan';
import Gianyar from './pages/AgricultureDetails/Gianyar';
import Kintamani from './pages/AgricultureDetails/Kintamani';
import CulturalGallery from './pages/CulturalGallery';
import Craft from './pages/Cultural/Craft';
import Culture from './pages/Cultural/Culture';
import Tourism from './pages/Tourism';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/tabanan" element={<Tabanan />} />
        <Route path="/gianyar" element={<Gianyar />} />
        <Route path="/kintamani" element={<Kintamani />} />
        <Route path="/culturalgallery" element={<CulturalGallery />} />
        <Route path="/craft" element={<Craft />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/tourism" element={<Tourism />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
