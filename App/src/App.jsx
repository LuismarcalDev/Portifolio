import { useRef } from 'react';
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
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div ref={inicioRef}>
        <Inicio
          onInicioClick={() => scrollTo(inicioRef)}
          onSobreClick={() => scrollTo(sobreRef)}
          onHabilidadesClick={() => scrollTo(habilidadesRef)}
          onProjetosClick={() => scrollTo(projetosRef)}
          onContatoClick={() => scrollTo(contatoRef)}
        />
      </div>
      <div ref={sobreRef}><SobreMim /></div>
      <div ref={habilidadesRef}><Habilidades /></div>
      <div ref={projetosRef}><Projetos /></div>
      <div ref={contatoRef}><Contato /></div>
      <Footer />
    </div>
  );
}

export default App;
