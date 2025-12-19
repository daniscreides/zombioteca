// src/pages/Inicio.jsx
import React from 'react';
import Lista from '../components/Lista';
import { filmes, series, animacoes } from '../data/data';
import '../style.css';

export default function Inicio() {
  return (
    <div>
      <section className="introducao" id="inicio">
        <h2>BEM-VINDOS À ZOMBIOTECA!</h2>
        <p>Um catálogo com os melhores e mais assustadores filmes de zumbi de todos os tempos.</p>
      </section>

      <h2 className="lista">FILMES</h2>
      <Lista itens={filmes} />

      <h2 className="lista">SÉRIES</h2>
      <Lista itens={series} />

      <h2 className="lista">ANIMAÇÕES</h2>
      <Lista itens={animacoes} />
    </div>
  );
}
