import "../Styles/Projetos.css"
import mack from "../imgs/habilidades/mack.png"
import agrojonner from "../imgs/habilidades/agrojonner.png"
import trevo from "../imgs/habilidades/trevo.png"
import koch from "../imgs/habilidades/koch.png"
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import alerta from "../imgs/alerta.png"

function Projetos(){
  const [showPopup, setShowPopup] = useState(false);
  
  const handleTrevoClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  };

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

   useEffect(() => {
  ScrollReveal().reveal("#pro1", {
   duration: 1800,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 200,
    distance: "25px",
    origin: "bottom",
    scale: 0.95
   
  });
}, []);

   useEffect(() => {
  ScrollReveal().reveal("#pro2", {
   duration: 1800,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 350,
    distance: "25px",
    origin: "bottom",
    scale: 0.95
   
  });
}, []);

   useEffect(() => {
  ScrollReveal().reveal("#pro3", {
   duration: 1800,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 500,
    distance: "25px",
    origin: "bottom",
    scale: 0.95
   
  });
}, []);

   useEffect(() => {
  ScrollReveal().reveal("#pro4", {
   duration: 1800,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 650,
    distance: "25px",
    origin: "bottom",
    scale: 0.95
   
  });
}, []);




    return(
        <div className="Projetos">
            <h2>Confira Meus Projetos </h2>
          

<div className="projetosGeral">

    <div className="projetos-Container" id="pro1" onClick={() => handleProjectClick("https://wiki-filmes-og.vercel.app/")}>
        <h3 id="title-project">WIKI | FILMES</h3>
        <img src={mack} alt="Wiki Filmes" />
        <div className="description">
          <p>React Js</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Figma</p>
          <p>API</p>
        </div>
    </div>

      <div className="projetos-Container trevo-container" id="pro2" onClick={handleTrevoClick}>
        <h3 id="title-project">TREVO BANK</h3>
        <img src={trevo} alt="Trevo Bank" id="celular" />
        <div className="description">
          <p>React Js</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Figma</p>
        </div>
        {showPopup && (
          <div className="trevo-popup">
            <img src={alerta} alt="Alerta" className="popup-icon" />
            <p>Este projeto não está disponível online pois é um aplicativo mobile.</p>
          </div>
        )}
    </div>

      <div className="projetos-Container" id="pro3" onClick={() => handleProjectClick("https://agro-joners.vercel.app/")}>
        <h3 id="title-project">AGRO JONES</h3>
        <img src={agrojonner} alt="Agro Jones" />
        <div className="description">
          <p>HTML</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Figma</p>
        </div>
    </div>

     <div className="projetos-Container" id="pro4" onClick={() => handleProjectClick("https://koch-charcutaria.vercel.app/")}>
        <h3 id="title-project">KOCH CHARCUTARIA</h3>
        <img src={koch} alt="Koch Charcutaria" />
        <div className="description">
          <p>Html</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Figma</p>
        </div>
    </div>

</div>
        </div>
    )
}export default Projetos
