import "../Styles/Sobre.css"
import botsrap from "../imgs/habilidades/botstrap.png"
import c from "../imgs/habilidades/c.png"
import css from "../imgs/habilidades/css.png"
import html from "../imgs/habilidades/html.png"
import js from "../imgs/habilidades/js.png"
import node from "../imgs/habilidades/node.png"
import react from "../imgs/habilidades/react.png"
import typea from "../imgs/habilidades/typea.png"
import wind from "../imgs/habilidades/wind.png"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
function SobreMim(){
  useEffect(() => {
  ScrollReveal().reveal(".reveal01", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal02", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 500 // 1s depois
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal03", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 1000 // 1s depois
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal04", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 1500 // 1s depois
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal05", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 2000 
  });
}, []);

  useEffect(() => {
  ScrollReveal().reveal(".reveal06", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 2500 
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal07", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay:3000 
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal08", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay:3500 
  });
}, []);

  useEffect(() => {
  ScrollReveal().reveal(".reveal09", {
    duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay:4000
  });
}, []);
useEffect(() => {
  ScrollReveal().reveal(".formacao", {
    duration: 1000,
    distance: "50px",
    easing: "ease-in-out",
    origin: "left",
    reset: false,
    delay: 500 // 1 segundo de atraso
  });
}, []);

   
    return(

     <div className="sobremim">
           <div className="container">
        <div className="habi">
          <img src={botsrap} alt="" className="reveal01" />
          <img src={c} alt=""  className="reveal02"/>
          <img src={css} alt="" className="reveal03" />
          <img src={html} alt="" className="reveal04" />
          <img src={js} alt=""  className="reveal05"/>
          <img src={node} alt=""  className="reveal06"/>
          <img src={react} alt=""  className="reveal07"/>
          <img src={typea} alt=""  className="reveal08"/>
          <img src={wind} alt="" className="reveal09" />
        </div>
             <div className="cont-sobre">
                <h2>Sobre Mim</h2>
<p>Olá! Meu nome é Luis Felippe Marçal, tenho 20 anos e sou desenvolvedor Full Stack. Estudo programação há cerca de 3 anos, sempre buscando me aperfeiçoar na área.

Atualmente, curso Análise e Desenvolvimento de Sistemas no Biopark Toledo (2º semestre) e, anteriormente, concluí o curso técnico em Informática integrado ao Ensino Médio, com duração de 4 anos. <br />
Sempre fui apaixonado por tecnologia e movido pela curiosidade. Foi essa paixão que me levou a transformar a programação em profissão e hobby. Sou autodidata e estou sempre buscando conhecimento — já fiz diversos cursos nas áreas de Front-End, Back-End e Web Design.
Com foco no desenvolvimento web, também possuo experiência em Web Design, utilizando o Figma como ferramenta principal para criação de interfaces.
</p>


            </div>
            <div className="formacao">
              <div className="title-forma">
                  <h3>Formação Academica</h3>
                  <hr />
              </div>
             <ul>
              <ol>Análise e Desenvolvimento de Sistemas - Biopark, 2º Período</ol>
<ol>Ensino Médio Técnico em T.I. - 4 anos, Concluído</ol>
<ol>Estudo em Programação autodidata através de vídeos no YouTube e fóruns online</ol>

             </ul>
            </div>

           </div>
     </div>
    )
}
export default SobreMim