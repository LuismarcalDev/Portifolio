import "../Styles/Sobre.css";
import botsrap from "../imgs/habilidades/botstrap.png";
import c from "../imgs/habilidades/c.png";
import css from "../imgs/habilidades/css.png";
import html from "../imgs/habilidades/html.png";
import js from "../imgs/habilidades/js.png";
import node from "../imgs/habilidades/node.png";
import react from "../imgs/habilidades/react.png";
import typea from "../imgs/habilidades/typea.png";
import wind from "../imgs/habilidades/wind.png";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function SobreMim() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".sobre-reveal", {
      duration: 1000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      opacity: 0,
      reset: false,
      distance: "20px",
      origin: "bottom",
      interval: 80,
    });
  }, []);

  const techIcons = [
    { src: botsrap, alt: "Bootstrap", className: "reveal01" },
    { src: c, alt: "C", className: "reveal02" },
    { src: css, alt: "CSS", className: "reveal03" },
    { src: html, alt: "HTML", className: "reveal04" },
    { src: js, alt: "JavaScript", className: "reveal05" },
    { src: node, alt: "Node.js", className: "reveal06" },
    { src: react, alt: "React", className: "reveal07" },
    { src: typea, alt: "TypeScript", className: "reveal08" },
    { src: wind, alt: "Tailwind", className: "reveal09" },
  ];

  return (
    <section className="sobremim" id="sobre">
      <div className="container">
        <div className="habi" aria-hidden="true">
          {techIcons.map(({ src, alt, className }) => (
            <img key={alt} src={src} alt={alt} className={className} />
          ))}
        </div>

        <div className="cont-sobre card sobre-reveal">
          <h2>Sobre Mim</h2>
          <div className="texto-sobre">
            <p>Olá! Meu nome é Luis Felippe Marçal, tenho 21 anos e sou desenvolvedor Full Stack. Estudo programação há cerca de 4 anos, sempre buscando me aperfeiçoar na área.</p>
            <p>Atualmente, curso Análise e Desenvolvimento de Sistemas no Biopark Toledo (3º semestre) e, anteriormente, concluí o curso técnico em Informática integrado ao Ensino Médio, com duração de 4 anos.</p>
            <p>Sempre fui apaixonado por tecnologia e movido pela curiosidade. Foi essa paixão que me levou a transformar a programação em profissão e hobby. Sou autodidata e estou sempre buscando conhecimento — já fiz diversos cursos nas áreas de Front-End, Back-End e Web Design.</p>
            <p>Com foco no desenvolvimento web, também possuo experiência em Web Design, utilizando o Figma como ferramenta principal para criação de interfaces.</p>
          </div>
        </div>

        <div className="formacao card sobre-reveal">
          <div className="title-forma">
            <h3>Formação Acadêmica</h3>
            <hr />
          </div>
          <ul className="formacao-list">
            <li>Análise e Desenvolvimento de Sistemas - Biopark, 3º Período</li>
            <li>Ensino Médio Técnico em T.I. - 4 anos, Concluído</li>
            <li>Estudo em Programação autodidata através de vídeos no YouTube e fóruns online</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;
