import TitleDesc from "components/TitleDesc/TitleDesc";
import { Link } from "react-router-dom";
import { useAuthContext } from "providers/AuthContext";

// Styles
import { DashboardStyle } from "./styles";
import { Container } from "styles/Global";

// Icos
import { FaPencilRuler } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const { signOut } = useAuthContext();

  return (
    <DashboardStyle>
      <Container className="dashboard__container">
        <TitleDesc
          title="dashboard"
          firstDesc="Bem-vindo à área administrativa!"
          secondDesc="Clique em uma das áreas abaixo para escolher o que editar."
        />

        <div className="dashboard__areas__container">
          <Link className="dashboard__area" to="/dashboard/projects">
            <div className="area__ico">
              <FaPencilRuler />
            </div>

            <div className="area__name">
              <p>Projetos</p>
            </div>
          </Link>

          <Link className="dashboard__area" to="/dashboard/users">
            <div className="area__ico">
              <FaUser />
            </div>

            <div className="area__name">
              <p>Usuários</p>
            </div>
          </Link>
        </div>

        <div className="dashboard__logout">
          <button
            type="button"
            onClick={() => {
              signOut();
            }}
          >
            Sair
          </button>
        </div>
      </Container>
    </DashboardStyle>
  );
};

export default Dashboard;
