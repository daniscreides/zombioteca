// src/pages/SeriesPage.jsx
import React from 'react';
import Lista from '../components/Lista';
import { series } from '../data/data';
import '../style.css';

export default function SeriesPage() {
  return (
    <div>
      <h1 className="titulo-pagina">LISTA DE SÉRIES</h1>
      <Lista itens={series} mostrarTodos />
    </div>
  );
}
