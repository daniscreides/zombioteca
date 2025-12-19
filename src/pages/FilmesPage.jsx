// src/pages/FilmesPage.jsx
import React from 'react';
import Lista from '../components/Lista';
import { filmes } from '../data/data';
import '../style.css';

export default function FilmesPage() {
  return (
    <div>
      <h1 className="titulo-pagina">LISTA DE FILMES</h1>
      <Lista itens={filmes} mostrarTodos />
    </div>
  );
}
