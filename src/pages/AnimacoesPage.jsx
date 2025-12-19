// src/pages/AnimacoesPage.jsx
import React from 'react';
import Lista from '../components/Lista';
import { animacoes } from '../data/data';
import '../style.css';

export default function AnimacoesPage() {
  return (
    <div>
      <h1 className="titulo-pagina">LISTA DE ANIMAÇÕES</h1>
      <Lista itens={animacoes} mostrarTodos />
    </div>
  );
}
