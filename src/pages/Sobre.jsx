import React from 'react';
import '../style.css';

export default function Sobre() {
  return (
    <>
      <div className="pagina-conteudo">
        <h1>MERGULHE NO MUNDO ZUMBI!</h1>
        <p id="paragrafo-inicial">
          SE VOCÊ É FÃ DE FILMES DE MORTOS-VIVOS, ESTE É O SEU LUGAR!
        </p>
        <p>
          O objetivo do nosso site é simples: ser o seu guia definitivo para aterrorizantes e emocionantes produções de zumbis. Chega de procurar por aí! Reunimos os melhores em uma lista completa e super fácil de navegar.
        </p>
      </div>

      <div className="observacao">
        <p>
          O site foi desenvolvido durante um curso de Front-End, utilizando React. O projeto teve como objetivo praticar componentização, organização de dados, responsividade e aplicação de boas práticas. Todas as informações vieram do IMDb, e as imagens são importadas localmente.
        </p>
      </div>
    </>
  );
}
