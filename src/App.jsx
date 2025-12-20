import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import FilmesPage from './pages/FilmesPage';
import SeriesPage from './pages/SeriesPage';
import AnimacoesPage from './pages/AnimacoesPage';
import Sobre from './pages/Sobre';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/filmes" element={<FilmesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/animacoes" element={<AnimacoesPage />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </>
  );
}
