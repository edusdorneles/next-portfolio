import { useState } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";

// Styles
import { AdminStyle } from "./styles";
import { Container } from "styles/Global";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

            <button type="button">Entrar</button>
          </form>
        </div>
      </Container>
    </AdminStyle>
  );
};

export default Admin;
