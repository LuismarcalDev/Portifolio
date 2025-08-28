import "../Styles/Habilidades.css"
import botsrap from "../imgs/habilidades/botstrap.png"
import c from "../imgs/habilidades/c.png"
import css from "../imgs/habilidades/css.png"
import html from "../imgs/habilidades/html.png"
import js from "../imgs/habilidades/js.png"
import node from "../imgs/habilidades/node.png"
import react from "../imgs/habilidades/react.png"
import typea from "../imgs/habilidades/typea.png"
import wind from "../imgs/habilidades/wind.png"
import figma from "../imgs/habilidades/figma.png"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
function Habilidades(){

    useEffect(() => {
  ScrollReveal().reveal(".cont-habili", {
   duration: 1000,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 500 
   
  });
}, []);
    return(
        <div className="habilidades">
            <div className="cont-habili">
                <div className="icons">
                    <h2>Habilidades</h2>
                    <div className="slaa">
          <img src={botsrap} alt="" />
       
          <img src={css} alt="" />
         
          <img src={html} alt="" />
          <img src={js} alt="" />
           <img src={react} alt="" />
          <img src={node} alt="" />
          
          <img src={typea} alt="" />
          <img src={wind} alt="" />
             <img src={c} alt="" />
          <img src={figma} alt="" />
                    </div>
                </div>

                <div className="coluna"></div>
                <div className="aragam">
                    <h3>O que estou Estudando?</h3>
                   <div className="pp">
                <p>Conceitos avançados do Node, como criação de APIs próprias e requisições HTTP</p>
<p>Aprendendo conexão e tratamento de dados com Node.js e MySQL</p>
<p>Tipagem com TypeScript dentro do React TS e Node TS</p>
<p>Estudando Estrutura de Dados, como vetores, matrizes e grafos, em C</p>

                    
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Habilidades