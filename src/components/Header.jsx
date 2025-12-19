import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/imagens/logocolorida.png';
import '../style.css';

export default function Header() {
  return (
    <div className="top">
      <header>
        <div className="logotitulo">
          <img
            src={logo}
            alt="Zumbi"
            className="logo"
          />
          <h1>ZOMBIOTECA</h1>
        </div>
      </header>

      <div className="navegacao">
        <nav>
          <ul>
            <li>
              <Link to="/">
                INÍCIO
              </Link>
            </li>

            <li>
              <Link to="/filmes">
                FILMES
              </Link>
            </li>

            <li>
              <Link to="/series">
                SÉRIES
              </Link>
            </li>

            <li>
              <Link to="/animacoes">
                ANIMAÇÕES
              </Link>
            </li>

            <li>
              <Link to="/sobre">
                SOBRE
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
