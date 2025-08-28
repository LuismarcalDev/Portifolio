import "../Styles/Projetos.css"
import mack from "../imgs/habilidades/mack.png"
import agrojonner from "../imgs/habilidades/agrojonner.png"
import trevo from "../imgs/habilidades/trevo.png"
import voxer from "../imgs/habilidades/voxer.png"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
import alerta from "../imgs/alerta.png"
function Projetos(){

   useEffect(() => {
  ScrollReveal().reveal("#pro1", {
   duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 500 
   
  });
}, []);

   useEffect(() => {
  ScrollReveal().reveal("#pro2", {
   duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 1000 
   
  });
}, []);

   useEffect(() => {
  ScrollReveal().reveal("#pro3", {
   duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 1500 
   
  });
}, []);

   useEffect(() => {
  ScrollReveal().reveal("#pro4", {
   duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 2000
   
  });
}, []);




    return(
        <div className="Projetos">
            <h2>Confira Meus Projetos </h2>
            <p id="sdd"><img src={alerta} alt="" /> Atenção, Projetos ainda não estão online</p>

<div className="projetosGeral">

    <div className="projetos-Container" id="pro1">
        <h3 id="title-project">WIKI | FILMES</h3>
<img src={mack} alt="" />
<div className="description">
  <p>React Js</p>
  <p>JavaScript</p>
  <p>CSS</p>
  <p>Figma</p>
  <p>API</p>
</div>
    </div>



      <div className="projetos-Container" id="pro2">
        <h3 id="title-project">TREVO BANK</h3>
<img src={trevo} alt="" id="celular" />
<div className="description">
  <p>React Js</p>
  <p>JavaScript</p>
  <p>CSS</p>
  <p>Figma</p>
</div>
    </div>



      <div className="projetos-Container" id="pro3">
        <h3 id="title-project">AGRO JONES</h3>
<img src={agrojonner} alt=""  />
<div className="description">
  <p>HTML</p>
  <p>JavaScript</p>
  <p>CSS</p>
  <p>Figma</p>
</div>
    </div>


     <div className="projetos-Container" id="pro4">
        <h3 id="title-project">VOXER SPACE</h3>
<img src={voxer} alt="" id="celular" />
<div className="description">
  <p>React Js</p>
  <p>JavaScript</p>
  <p>CSS</p>
  <p>Figma</p>
 
</div>
    </div>

</div>
        </div>
    )
}export default Projetos
