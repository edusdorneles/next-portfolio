import React, { useState, useEffect } from "react";
import TitleDesc from "components/TitleDesc/TitleDesc";
import UserCard from "components/UserCard/UserCard";
import Modal from "components/Modal/Modal";
import { useUsersContext } from "providers/UsersContext";

// Styles
import { UsersStyle } from "./styles";
import { Container } from "styles/Global";

// Icons
import { BsPlusLg } from "react-icons/bs";

const Users: React.FC = () => {
  const { fetchData, users, createUser, message } = useUsersContext();

  const [modalActive, setModalActive] = useState(false);

  // Create user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UsersStyle>
      <Container className="users__container">
        <TitleDesc
          title="usuários"
          firstDesc="Aqui você pode editar os usuários que tem acesso à área administrativa"
        />

        <div className="users__cards">
          {users?.map((user: User) => {
            return (
              <UserCard name={user.name} email={user.email} id={user.id} />
            );
          })}

          <div
            className="user-cards__new-user"
            onClick={() => {
              setModalActive(true);
            }}
          >
            <BsPlusLg />
          </div>
        </div>
      </Container>

      <Modal
        title="Criar usuário"
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <div className="modal__inputs">
          <input
            type="text"
            placeholder="Nome:"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
            }}
          />

          <input
            type="email"
            placeholder="Email:"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Senha:"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Confirmar senha:"
            value={confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword(e.target.value);
            }}
          />

          <button
            type="button"
            onClick={() => {
              createUser(
                name,
                email,
                password,
                confirmPassword,
                setName,
                setEmail,
                setPassword,
                setConfirmPassword,
                setModalActive
              );
            }}
          >
            Criar
          </button>

          <div
            className={
              message
                ? "modal__message modal__message--active"
                : "modal__message"
            }
          >
            {message}
          </div>
        </div>
      </Modal>
    </UsersStyle>
  );
};

export default Users;
