import "../Styles/style.css";
import "../Styles/Header.css";
import { useState } from "react";

function Header({
  onInicioClick,
  onSobreClick,
  onHabilidadesClick,
  onProjetosClick,
  onContatoClick
}) {
  const [menuAberto, setMenuAberto] = useState(false);
  const aa = "</>";

  return (
    <header className="Header">
      <div className="icon"><h2>{aa}</h2></div>

      <nav className={`menu ${menuAberto ? "ativo" : ""}`}>
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            onInicioClick(); 
          }}
        >
          Início
        </a>
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            onProjetosClick(); 
          }}
        >
          Projetos
        </a>
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            onHabilidadesClick(); 
          }}
        >
          Habilidades
        </a>
        <a 
          href="#" 
          onClick={(e) => { 
            e.preventDefault(); 
            onSobreClick(); 
          }}
        >
          Sobre mim
        </a>
      </nav>

      <button className="contato" onClick={onContatoClick}>Contato</button>

      <button
        className={`hamburguer-btn ${menuAberto ? "open" : ""}`}
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;
