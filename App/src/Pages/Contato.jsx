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
    ScrollReveal().reveal("#pro01", {
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

  const handleEmailClick = () => {
    window.location.href = 'mailto:Luisfelippe55482@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511995859343", "_blank");
  };

  const handleCurriculoClick = () => {
    const link = document.createElement('a');
    link.href = curriculoPDF;
    link.download = 'LuisFelippe_Marcal_curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="Contato">
      <div className="Contato-geral" id="pro01">
        <div className="left-conta">
          <h3>Como Me Achar</h3>
          <div className="control">
            <ul>
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
        </div>
        <div className="coluna"></div>
        <div className="right-conta">
          <h3 id="dft">Quer saber mais sobre mim?</h3>
          <div className="cont-social">
            <ul>
              <li onClick={() => window.open("https://github.com/LuismarcalDev", "_blank")}>
                <img src={gitHub} alt="GitHub" />
                <span>GitHub</span>
              </li>
              <li onClick={handleWhatsAppClick}>
                <img src={whatsapp} alt="WhatsApp" />
                <span>WhatsApp</span>
              </li>
              <li onClick={() => window.open("https://www.facebook.com/?locale=pt_BR", "_blank")}>
                <img src={facebook} alt="Facebook" />
                <span>Facebook</span>
              </li>
              <li onClick={() => window.open("https://www.instagram.com/luisfelippe_marcal?igsh=MTR3dHA1MHJlbHg0aw==", "_blank")}>
                <img src={instagram} alt="Instagram" />
                <span>Instagram</span>
              </li>
              <li onClick={() => window.open("https://www.linkedin.com/in/luisfelippedesenvolvedor/", "_blank")}>
                <img src={linkedin} alt="LinkedIn" />
                <span>Linkedin</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;;
