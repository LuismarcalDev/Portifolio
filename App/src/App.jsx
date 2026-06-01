import { useRef } from 'react';
import Header from './Pages/Header';
import Habilidades from './Pages/Habilidades';
import Inicio from './Pages/Inicio';
import SobreMim from './Pages/SobreMim';
import Projetos from './Pages/Projetos';
import Contato from './Pages/Contato';
import Footer from './Pages/Footer';
import './App.css';

function App() {
  const inicioRef = useRef(null);
  const sobreRef = useRef(null);
  const habilidadesRef = useRef(null);
  const projetosRef = useRef(null);
  const contatoRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onInicioClick={() => scrollTo(inicioRef)}
        onSobreClick={() => scrollTo(sobreRef)}
        onHabilidadesClick={() => scrollTo(habilidadesRef)}
        onProjetosClick={() => scrollTo(projetosRef)}
        onContatoClick={() => scrollTo(contatoRef)}
      />

      <main>
        <div ref={inicioRef} className="section-container">
          <Inicio />
        </div>
        <div ref={sobreRef} className="section-container">
          <SobreMim />
        </div>
        <div ref={habilidadesRef} className="section-container">
          <Habilidades />
        </div>
        <div ref={projetosRef} className="section-container">
          <Projetos />
        </div>
        <div ref={contatoRef} className="section-container">
          <Contato />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
