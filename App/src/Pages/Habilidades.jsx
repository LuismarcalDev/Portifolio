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
import ruby from "../imgs/habilidades/ruby.png"
import csharp from "../imgs/habilidades/csharp.png"
import mysql from "../imgs/habilidades/mysql.png"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
function Habilidades(){

    useEffect(() => {
  ScrollReveal().reveal(".cont-habili", {
   duration: 2000,
    easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    opacity: 0,
    reset: false,
    delay: 200,
    distance: "30px",
    origin: "bottom",
    scale: 0.95
   
  });
}, []);
    return(
        <div className="habilidades">
            <h2 className="titulo-habilidades">Minhas Habilidades</h2>
            <div className="cont-habili">
                <div className="icons">
                    <div className="categoria">
                        <h3 className="categoria-titulo">Front-End</h3>
                        <div className="slaa">
                            <div className="skill-item">
                                <img src={html} alt="HTML" />
                                <span className="skill-name">HTML</span>
                            </div>
                            <div className="skill-item">
                                <img src={css} alt="CSS" />
                                <span className="skill-name">CSS</span>
                            </div>
                            <div className="skill-item">
                                <img src={js} alt="JavaScript" />
                                <span className="skill-name">JavaScript</span>
                            </div>
                            <div className="skill-item">
                                <img src={react} alt="React" />
                                <span className="skill-name">React</span>
                            </div>
                            <div className="skill-item">
                                <img src={typea} alt="TypeScript" />
                                <span className="skill-name">TypeScript</span>
                            </div>
                            <div className="skill-item">
                                <img src={wind} alt="Tailwind" />
                                <span className="skill-name">Tailwind</span>
                            </div>
                            <div className="skill-item">
                                <img src={botsrap} alt="Bootstrap" />
                                <span className="skill-name">Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="categoria">
                        <h3 className="categoria-titulo">Back-End & Outros</h3>
                        <div className="slaa">
                            <div className="skill-item">
                                <img src={node} alt="Node.js" />
                                <span className="skill-name">Node.js</span>
                            </div>
                            <div className="skill-item">
                                <img src={ruby} alt="Ruby" />
                                <span className="skill-name">Ruby</span>
                            </div>
                            <div className="skill-item">
                                <img src={mysql} alt="MySQL" />
                                <span className="skill-name">MySQL</span>
                            </div>
                            <div className="skill-item">
                                <img src={figma} alt="Figma" />
                                <span className="skill-name">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="coluna"></div>
                <div className="aragam">
                    <h3 className="estudando-titulo">O que estou Estudando?</h3>
                   <div className="pp">
                        <div className="estudo-item">
                            <p>Estudando conteúdos avançados de filtros em MySQL</p>
                        </div>
                        <div className="estudo-item">
                            <p>Aprendendo a desenvolver API em Ruby para utilizar no React TSX</p>
                        </div>
                        <div className="estudo-item">
                            <p>Começando conceitos iniciais com C# - Estrutura de dados e OOP</p>
                        </div>
                        <div className="estudo-item">
                            <p>Aprimorando o conhecimento em consumo de API em React TS</p>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Habilidades
