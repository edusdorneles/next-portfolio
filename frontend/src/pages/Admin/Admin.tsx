import { useState } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import { useAuthContext } from "providers/AuthContext";

// Styles
import { AdminStyle } from "./styles";
import { Container } from "styles/Global";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Login, error } = useAuthContext();

  return (
    <AdminStyle>
      <Container className="admin__container">
        <TitleDesc
          title="admin"
          firstDesc="Faça login para ter acesso à área administrativa!"
        />

        <div className="admin__form__container">
          <form>
            <input
              name="email"
              type="email"
              placeholder="Email:"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
            />

            <input
              name="password"
              type="password"
              placeholder="Senha:"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
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
