import "../Styles/Header.css";
import { useState } from "react";

function Header({
  onInicioClick,
  onSobreClick,
  onHabilidadesClick,
  onProjetosClick,
  onContatoClick,
}) {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleNav = (callback) => (e) => {
    e.preventDefault();
    setMenuAberto(false);
    callback();
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <button
          type="button"
          className="logo"
          onClick={handleNav(onInicioClick)}
          aria-label="Ir para o início"
        >
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">LF</span>
          <span className="logo-bracket">/&gt;</span>
        </button>

        <nav className={`nav-menu ${menuAberto ? "ativo" : ""}`} aria-label="Navegação principal">
          <a href="#inicio" onClick={handleNav(onInicioClick)}>Início</a>
          <a href="#projetos" onClick={handleNav(onProjetosClick)}>Projetos</a>
          <a href="#habilidades" onClick={handleNav(onHabilidadesClick)}>Habilidades</a>
          <a href="#sobre" onClick={handleNav(onSobreClick)}>Sobre mim</a>
          <a href="#contato" className="nav-contato-mobile" onClick={handleNav(onContatoClick)}>Contato</a>
        </nav>

        <button type="button" className="btn-contato" onClick={handleNav(onContatoClick)}>
          Contato
        </button>

        <button
          type="button"
          className={`hamburguer-btn ${menuAberto ? "open" : ""}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;
