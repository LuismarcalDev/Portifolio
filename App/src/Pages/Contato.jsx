import "../Styles/Contato.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faFile } from "@fortawesome/free-solid-svg-icons";
import gitHub from "../imgs/contato/gitHub.png"
import whatsapp from "../imgs/contato/whatsapp.png"
import instagram from "../imgs/contato/instagram.png"
import behance from "../imgs/contato/behance.png"
import linkedin from "../imgs/contato/linkedin.png"
import facebook from "../imgs/contato/facebook.png"
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";
function Contato() {
   useEffect(() => {
  ScrollReveal().reveal("#pro01", {
   duration: 1200,
    easing: "ease-in-out",
    opacity: 0,
    reset: false,
    delay: 500 
   
  });
}, []);
  return (
    <div className="Contato">
      <div className="Contato-geral" id="pro01">
        <div className="left-conta">
          <h3>Como Me Achar</h3>
          <div className="control">
            <ul>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> Email: Luisfelippe55482@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> Telefone: (11) 995859-343
              </li>
              <li>
                <FontAwesomeIcon icon={faFile} /> Currículo
              </li>
            </ul>
          </div>
        </div>
        <div className="coluna" id="croco">

        </div>
        <div className="right-conta">
         
            <h3 id="dft">
                Quer saber mais sobre mim?
            </h3>
            <div className="cont-social">
                <ul>
                     <li>
                        <img src={gitHub} alt=""  onClick={() => window.open("https://github.com/LuismarcalDev", "_blank")}/>
                        GitHub
                    </li>
                    <li>
                        <img src={whatsapp} alt="" onClick={() => window.open("https://wa.me/5511995859343", "_blank")} />
                        WhatsApp
                    </li>
                      <li>
                        <img src={facebook} alt="" onClick={() => window.open("https://www.facebook.com/?locale=pt_BR", "_blank")} />
                        Facebook
                    </li>
                      <li>
                        <img src={instagram} alt=""  onClick={() => window.open("https://www.instagram.com/luisfelippe_marcal?igsh=MTR3dHA1MHJlbHg0aw==", "_blank")}/>
                        Instagram
                    </li>
                     

                      <li>
                        <img src={linkedin} alt="" onClick={() => window.open("https://www.linkedin.com/in/luisfelippedesenvolvedor/", "_blank")} />
                        Linkedin
                    </li>
                      <li>
                        <img src={behance} alt="" onClick={() => window.open("https://www.behance.net/lusifelippe", "_blank")} />
                        Behance
                    </li>
                </ul>
            </div>
       
        </div>
      </div>
    
    </div>
    
  );
}

export default Contato;
