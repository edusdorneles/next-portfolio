import { useState } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import { useAuthContext } from "providers/AuthContext";

// Styles
import { AdminStyle } from "./styles";
import { Container } from "styles/Global";

const Admin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, error } = useAuthContext();

  const enterKeyHandler = (key: React.KeyboardEvent) => {
    if (key.key === "Enter") {
      Login(email, password);
    }
  };

  return (
    <AdminStyle>
      <Container className="admin__container">
        <TitleDesc
          title="admin"
          firstDesc="Faça login para ter acesso à área administrativa!"
        />

        <div className="admin__form__container">
          <form onKeyPress={(key) => enterKeyHandler(key)}>
            <input
              name="email"
              type="email"
              placeholder="Email:"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />

            <input
              name="password"
              type="password"
              placeholder="Senha:"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <button
              type="button"
              onClick={() => {
                Login(email, password);
              }}
            >
              Entrar
            </button>

            <div
              className={error ? "error__container active" : "error__container"}
            >
              {error}
            </div>
          </form>
        </div>
      </Container>
    </AdminStyle>
  );
};

export default Admin;
