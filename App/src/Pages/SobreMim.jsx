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
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    distance: "15px",
    origin: "left",
    scale: 0.9
    
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal02", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 80,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal03", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 160,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal04", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 240,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal05", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 320,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);

  useEffect(() => {
  ScrollReveal().reveal(".reveal06", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 400,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal07", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 480,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);
  useEffect(() => {
  ScrollReveal().reveal(".reveal08", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 560,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);

  useEffect(() => {
  ScrollReveal().reveal(".reveal09", {
    duration: 1600,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 640,
    distance: "15px",
    origin: "left",
    scale: 0.9
  });
}, []);
  useEffect(() => {
    ScrollReveal().reveal(".reveal-texto", {
      duration: 1600,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      opacity: 0,
      reset: false,
      delay: 100,
      distance: "30px",
      origin: "bottom",
      scale: 0.95
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".formacao", {
      duration: 2000,
      distance: "40px",
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      origin: "right",
      reset: false,
      delay: 300,
      opacity: 0,
      scale: 0.95
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
                <h2 className="reveal-texto">Sobre Mim</h2>
                <div className="texto-sobre">
                    <p className="reveal-texto">Olá! Meu nome é Luis Felippe Marçal, tenho 21 anos e sou desenvolvedor Full Stack. Estudo programação há cerca de 4 anos, sempre buscando me aperfeiçoar na área.</p>
                    
                    <p className="reveal-texto">Atualmente, curso Análise e Desenvolvimento de Sistemas no Biopark Toledo (3º semestre) e, anteriormente, concluí o curso técnico em Informática integrado ao Ensino Médio, com duração de 4 anos.</p>
                    
                    <p className="reveal-texto">Sempre fui apaixonado por tecnologia e movido pela curiosidade. Foi essa paixão que me levou a transformar a programação em profissão e hobby. Sou autodidata e estou sempre buscando conhecimento — já fiz diversos cursos nas áreas de Front-End, Back-End e Web Design.</p>
                    
                    <p className="reveal-texto">Com foco no desenvolvimento web, também possuo experiência em Web Design, utilizando o Figma como ferramenta principal para criação de interfaces.</p>
                </div>
            </div>
            <div className="formacao">
              <div className="title-forma">
                  <h3>Formação Academica</h3>
                  <hr />
              </div>
             <ul>
              <ol>Análise e Desenvolvimento de Sistemas - Biopark, 3º Período</ol>
<ol>Ensino Médio Técnico em T.I. - 4 anos, Concluído</ol>
<ol>Estudo em Programação autodidata através de vídeos no YouTube e fóruns online</ol>

             </ul>
            </div>

           </div>
     </div>
    )
}
export default SobreMim