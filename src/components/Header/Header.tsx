import { Link } from "react-router-dom";

// Styles
import { HeaderStyle, NavStyle } from "./styles";
import { Container } from "styles/Global";

const Header: React.FC = () => {
    return (
        <HeaderStyle>
            <Container className="header__container">
                <div className="header__logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Eduardo Dorneles - Logo"/>
                    </Link>
                </div>

                <NavStyle>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/projetos">Projetos</Link></li>
                        <li><Link to="/contato">Contato</Link></li>
                    </ul>
                </NavStyle>
            </Container>
        </HeaderStyle>
    )
}

export default Header;