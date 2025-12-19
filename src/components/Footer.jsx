// src/components/Footer.jsx
import React from 'react';
import emailIcon from '../assets/imagens/email.png';
import linkedinIcon from '../assets/imagens/linkedin.png';
import githubIcon from '../assets/imagens/github.png';
import '../style.css';

export default function Footer() {
  return (
    <footer>
      <div className="redes">
        <a href="mailto:danielisouza436@gmail.com" className="emailitem">
          <img src={emailIcon} alt="Email" className="socialicon" />
        </a>
        <a href="https://www.linkedin.com/in/daniscreides" target="_blank" rel="noopener noreferrer" className="socialitem">
          <img src={linkedinIcon} alt="Linkedin" className="socialicon" />
        </a>
        <a href="https://github.com/daniscreides" target="_blank" rel="noopener noreferrer" className="socialitem">
          <img src={githubIcon} alt="Github" className="socialicon" />
        </a>
      </div>
      <div className="rodape">
        <div className="creditos">
          <div className="autor">
            <h3>Desenvolvido por Daniscreides.</h3>
            <p>&copy; 2025 Zombioteca.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
