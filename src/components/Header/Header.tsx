import { useState } from 'react';
import { Link } from "react-router-dom";

// Styles
import { HeaderStyle, NavStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { FaHome } from 'react-icons/fa';
import { FaPencilRuler } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Header: React.FC = () => {
    const [active, setActive] = useState('home');

    return (
        <HeaderStyle>
            <Container className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Eduardo Dorneles - Logo"/>
                    </Link>
                </div>

                <NavStyle>
                    <ul className="navbar__desktop">
                        <li>
                            <Link 
                                onClick={() => {setActive('home')}} 
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => {setActive('projetos')}} 
                                to="/projetos"
                            >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => {setActive('contato')}} 
                                to="/contato"
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>

                    <ul className="navbar__mobile">
                        <li>
                            <Link 
                                onClick={() => {setActive('home')}} 
                                className={active === "home" ? "active" : ""} 
                                to="/"
                            >
                                <FaHome />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => {setActive('projetos')}} 
                                className={active === "projetos" ? "active" : ""} 
                                to="/projetos"
                            >
                                <FaPencilRuler />
                            </Link>
                        </li>
                        <li>
                            <Link 
                                onClick={() => {setActive('contato')}} 
                                className={active === "contato" ? "active" : ""} 
                                to="/contato"
                            >
                                <MdEmail />
                            </Link>
                        </li>
                    </ul>
                </NavStyle>
            </Container>
        </HeaderStyle>
    )
}

export default Header;