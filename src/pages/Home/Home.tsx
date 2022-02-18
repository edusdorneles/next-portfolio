import TitleDesc from "components/TitleDesc/TitleDesc";

// Styles
import { HomeStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <HomeStyle>
      <Container className="home__container">
        <div className="home__profile-image">
          <img
            src="/images/profile.jpg"
            alt="Eduardo Dorneles - Foto de Perfil"
          />
        </div>

        <TitleDesc
          title="front-end"
          firstDesc="Sou desenvolvedor front-end"
          secondDesc="Utilizo como principal ferramenta de trabalho, o React!"
        />

        <div className="home__link-buttons">
          <div className="link-buttons__link">
            <a
              href="https://wa.me/+5551993896982/"
              aria-label="Whatsapp"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="link-buttons__link">
            <a
              href="https://github.com/dududornelees/"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>

          <div className="link-buttons__link">
            <a
              href="https://www.linkedin.com/in/dududornelees/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </Container>
    </HomeStyle>
  );
};

export default Home;
