import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Styles
import { HeaderStyle, NavStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { FaHome } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  // Sempre que a localização mudar, atualiza o estado de "active"
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  return (
    <HeaderStyle>
      <Container className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Eduardo Dorneles - Logo" />
          </Link>
        </div>

        <NavStyle>
          <ul className="navbar__desktop">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>

          <ul className="navbar__mobile">
            <li>
              <Link to="/" className={active === "/" ? "active" : ""}>
                <FaHome />
              </Link>
            </li>
            <li>
              <Link
                to="/projetos"
                className={active === "/projetos" ? "active" : ""}
              >
                <FaPencilRuler />
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={active === "/contato" ? "active" : ""}
              >
                <MdEmail />
              </Link>
            </li>
          </ul>
        </NavStyle>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
