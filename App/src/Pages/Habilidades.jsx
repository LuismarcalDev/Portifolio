import "../Styles/Habilidades.css";
import botsrap from "../imgs/habilidades/botstrap.png";
import css from "../imgs/habilidades/css.png";
import html from "../imgs/habilidades/html.png";
import js from "../imgs/habilidades/js.png";
import node from "../imgs/habilidades/node.png";
import react from "../imgs/habilidades/react.png";
import typea from "../imgs/habilidades/typea.png";
import wind from "../imgs/habilidades/wind.png";
import figma from "../imgs/habilidades/figma.png";
import ruby from "../imgs/habilidades/ruby.png";
import mysql from "../imgs/habilidades/mysql.png";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

const frontEndSkills = [
  { img: html, name: "HTML" },
  { img: css, name: "CSS" },
  { img: js, name: "JavaScript" },
  { img: react, name: "React" },
  { img: typea, name: "TypeScript" },
  { img: wind, name: "Tailwind" },
  { img: botsrap, name: "Bootstrap" },
];

const backEndSkills = [
  { img: node, name: "Node.js" },
  { img: ruby, name: "Ruby" },
  { img: mysql, name: "MySQL" },
  { img: figma, name: "Figma" },
];

const estudando = [
  "Conexão e integração com banco de dados",
  "Funções avançadas em React TSX",
  "Criação de APIs com Node.js e Express",
  "Deploy de banco de dados em VPS",
];

function Habilidades() {
  useEffect(() => {
    ScrollReveal().reveal(".cont-habili", {
      duration: 1000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      opacity: 0,
      reset: false,
      distance: "24px",
      origin: "bottom",
    });
  }, []);

  return (
    <section className="habilidades" id="habilidades">
      <h2 className="section-title">Minhas Habilidades</h2>
      <div className="cont-habili card">
        <div className="icons">
          <div className="categoria">
            <h3 className="categoria-titulo">Front-End</h3>
            <div className="skills-grid">
              {frontEndSkills.map(({ img, name }) => (
                <div key={name} className="skill-item">
                  <img src={img} alt={name} />
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="categoria">
            <h3 className="categoria-titulo">Back-End & Outros</h3>
            <div className="skills-grid">
              {backEndSkills.map(({ img, name }) => (
                <div key={name} className="skill-item">
                  <img src={img} alt={name} />
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-v" aria-hidden="true" />

        <div className="estudando-section">
          <h3 className="estudando-titulo">O que estou Estudando?</h3>
          <div className="estudo-list">
            {estudando.map((texto) => (
              <div key={texto} className="estudo-item">
                <p>{texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
