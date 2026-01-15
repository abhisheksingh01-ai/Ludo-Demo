import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LudoGameWithReward from './components/LudoGameWithReward'
import Ludocard from './components/Ludocard'
import LudoGameUI from './components/LudoGameUI'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ludocard />} />
        <Route path="/game" element={<LudoGameUI />} />
        <Route path="/reward" element={<LudoGameWithReward />} />
      </Routes>
    </BrowserRouter>
  );
}
