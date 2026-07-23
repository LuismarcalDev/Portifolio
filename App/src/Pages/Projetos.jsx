import "../Styles/Projetos.css";
import mack from "../imgs/habilidades/mack.png";
import agrojonner from "../imgs/habilidades/agrojonner.png";
import stockAvera from "../imgs/habilidades/stockavera.png";
import stockAveraApp from "../imgs/habilidades/stockavera-app.png";
import koch from "../imgs/habilidades/koch.png";
import alerta from "../imgs/alerta.png";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";

const projetos = [
  {
    id: "pro1",
    titulo: "WIKI | FILMES",
    img: mack,
    url: "https://wiki-filmes-og.vercel.app/",
    tags: ["React Js", "JavaScript", "CSS", "Figma", "API"],
  },
  {
    id: "pro2",
    titulo: "STOCK AVERA INSTITUCIONAL",
    img: stockAvera,
    url: "https://stockavera.com.br",
    tags: ["React Js", "TypeScript", "Tailwind CSS", "Figma"],
  },
  {
    id: "pro5",
    titulo: "STOCK AVERA",
    img: stockAveraApp,
    url: "https://app.stockavera.com.br/",
    tags: ["React Js", "TypeScript", "Express", "MySQL", "Tailwind CSS"],
  },
  {
    id: "pro3",
    titulo: "AGRO JONES",
    img: agrojonner,
    url: "https://agro-joners.vercel.app/",
    tags: ["HTML", "JavaScript", "CSS", "Figma"],
  },
  {
    id: "pro4",
    titulo: "KOCH CHARCUTARIA",
    img: koch,
    url: "https://koch-charcutaria.vercel.app/",
    tags: ["Html", "JavaScript", "CSS", "Figma"],
  },
];

function Projetos() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const sr = ScrollReveal();
    projetos.forEach(({ id }, index) => {
      sr.reveal(`#${id}`, {
        duration: 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        opacity: 0,
        reset: false,
        delay: index * 120,
        distance: "20px",
        origin: "bottom",
      });
    });
  }, []);

  const handleClick = (projeto) => {
    if (projeto.mobile) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 4000);
      return;
    }
    window.open(projeto.url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projetos-section" id="projetos">
      <h2 className="section-title">Confira Meus Projetos</h2>

      <div className="projetos-grid">
        {projetos.map((projeto) => (
          <article
            key={projeto.id}
            id={projeto.id}
            className="projeto-card"
            onClick={() => handleClick(projeto)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleClick(projeto)}
          >
            <h3 className="projeto-titulo">{projeto.titulo}</h3>
            <img
              src={projeto.img}
              alt={projeto.titulo}
              className={projeto.mobile ? "img-celular" : ""}
            />
            <div className="projeto-tags">
              {projeto.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {projeto.mobile && showPopup && (
              <div className="trevo-popup" role="status">
                <img src={alerta} alt="" className="popup-icon" />
                <p>Este projeto não está disponível online pois é um aplicativo mobile.</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
