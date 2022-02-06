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
  const { pathname } = useLocation();
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <HeaderStyle>
      <Container className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Eduardo Dorneles - Logo" />
          </Link>
        </div>

        <NavStyle>
          {!pathname.includes("/dashboard") ? (
            <>
              <ul className="navbar__desktop">
                <li>
                  <Link to="/" className={active === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className={active === "/projects" ? "active" : ""}
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={active === "/contact" ? "active" : ""}
                  >
                    Contato
                  </Link>
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
                    to="/projects"
                    className={active === "/projects" ? "active" : ""}
                  >
                    <FaPencilRuler />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={active === "/contact" ? "active" : ""}
                  >
                    <MdEmail />
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <ul>
              <li>
                <Link to="/dashboard">
                  Olá, {localStorage.getItem("user-name")?.split(" ")[0]}!
                </Link>
              </li>
            </ul>
          )}
        </NavStyle>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
