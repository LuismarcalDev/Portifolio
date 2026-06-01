import "../Styles/style.css";
import "../Styles/Inicio.css";
import { useEffect } from "react";

function Inicio() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 55, density: { enable: true, value_area: 900 } },
          color: { value: "#69ffe6" },
          shape: { type: "circle" },
          opacity: { value: 0.25, random: true },
          size: { value: 2, random: true },
          line_linked: {
            enable: true,
            distance: 140,
            color: "#69ffe6",
            opacity: 0.15,
            width: 1,
          },
          move: { enable: true, speed: 2, out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: { distance: 120, line_linked: { opacity: 0.3 } },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <section className="hero" id="inicio">
      <div id="particles-js" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-greeting hero-animate">Olá, eu sou</p>
        <h1 className="hero-animate hero-animate-delay-1">LUIS FELIPPE MARÇAL</h1>
        <h2 className="hero-animate hero-animate-delay-2">
          Desenvolvedor <span>Full Stack</span>
        </h2>
      </div>
    </section>
  );
}

export default Inicio;
