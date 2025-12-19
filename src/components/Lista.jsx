import React, { useState, useEffect } from 'react';
import '../style.css';

export default function Lista({ itens, mostrarTodos = false }) {
  const [verMais, setVerMais] = useState(false);
  const [itensPorLinha, setItensPorLinha] = useState(5);

  useEffect(() => {
    const definirQuantidade = () => {
      if (window.innerWidth <= 610) {
        setItensPorLinha(2);
      } else {
        setItensPorLinha(4);
      }
    };

    definirQuantidade();
    window.addEventListener('resize', definirQuantidade);

    return () => window.removeEventListener('resize', definirQuantidade);
  }, []);

  const quantidade = mostrarTodos
    ? itens.length
    : verMais
    ? itens.length
    : itensPorLinha;

  return (
    <>
      <div className="grade">
        {itens.slice(0, quantidade).map(item => (
          <article className="video" key={item.id}>
            <figure>
              <img src={item.imagem} alt={item.titulo} />
            </figure>

            <h2>
              <span>{item.ano}</span> - {item.titulo} ({item.pais})
            </h2>

            {item.diretor && (
              <p><strong>Direção:</strong> {item.diretor}</p>
            )}

            {item.temporadas && (
              <p><strong>Temporadas:</strong> {item.temporadas}</p>
            )}

            <p><strong>Sinopse:</strong> {item.sinopse}</p>
          </article>
        ))}
      </div>

      {!mostrarTodos && itens.length > itensPorLinha && (
        <div className="ver-mais-container">
          <button
            className="ver-mais-btn"
            onClick={() => setVerMais(!verMais)}
          >
            {verMais ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
      )}
    </>
  );
}
