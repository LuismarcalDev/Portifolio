import "../Styles/Contato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import gitHub from "../imgs/contato/gitHub.png";
import whatsapp from "../imgs/contato/whatsapp.png";
import instagram from "../imgs/contato/instagram.png";
import linkedin from "../imgs/contato/linkedin.png";
import facebook from "../imgs/contato/facebook.png";
import curriculoPDF from "../assets/LuisFelippe_Marcal_currículo.pdf";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function Contato() {
  useEffect(() => {
    ScrollReveal().reveal(".contato-card", {
      duration: 1000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      opacity: 0,
      reset: false,
      distance: "24px",
      origin: "bottom",
    });
  }, []);

  const handleEmailClick = () => {
    window.location.href = "mailto:Luisfelippe55482@gmail.com";
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511995859343", "_blank", "noopener,noreferrer");
  };

  const handleCurriculoClick = () => {
    const link = document.createElement("a");
    link.href = curriculoPDF;
    link.download = "LuisFelippe_Marcal_curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="contato-section" id="contato">
      <div className="contato-card card">
        <div className="contato-col">
          <h3>Como Me Achar</h3>
          <ul className="contato-list">
            <li onClick={handleEmailClick}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email: Luisfelippe55482@gmail.com</span>
            </li>
            <li onClick={handleWhatsAppClick}>
              <FontAwesomeIcon icon={faPhone} />
              <span>Telefone: (11) 995859-343</span>
            </li>
            <li onClick={handleCurriculoClick}>
              <FontAwesomeIcon icon={faFile} />
              <span>Currículo</span>
            </li>
          </ul>
        </div>

        <div className="contato-divider" aria-hidden="true" />

        <div className="contato-col">
          <h3>Quer saber mais sobre mim?</h3>
          <ul className="contato-list">
            <li onClick={() => openLink("https://github.com/LuismarcalDev")}>
              <img src={gitHub} alt="" />
              <span>GitHub</span>
            </li>
            <li onClick={handleWhatsAppClick}>
              <img src={whatsapp} alt="" />
              <span>WhatsApp</span>
            </li>
            <li onClick={() => openLink("https://www.facebook.com/?locale=pt_BR")}>
              <img src={facebook} alt="" />
              <span>Facebook</span>
            </li>
            <li onClick={() => openLink("https://www.instagram.com/luisfelippe_marcal?igsh=MTR3dHA1MHJlbHg0aw==")}>
              <img src={instagram} alt="" />
              <span>Instagram</span>
            </li>
            <li onClick={() => openLink("https://www.linkedin.com/in/luisfelippedesenvolvedor/")}>
              <img src={linkedin} alt="" />
              <span>Linkedin</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contato;
