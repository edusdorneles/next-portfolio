import { useState } from "react";
import Modal from "components/Modal/Modal";
import { useUsersContext } from "providers/UsersContext";

// Styles
import { UserCardStyle } from "./styles";

// Icons
import { MdModeEditOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const UserCard: React.FC<User> = (props) => {
  const { deleteUser, updateUser, message } = useUsersContext();
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [updateModalActive, setUpdateModalActive] = useState(false);

  // Update states
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  return (
    <UserCardStyle>
      <div className="user-card__name">
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>

      <div className="user-card__buttons">
        <button
          onClick={() => {
            setUpdateModalActive(true);
          }}
        >
          <MdModeEditOutline />
        </button>

        <button
          onClick={() => {
            setDeleteModalActive(true);
          }}
        >
          <IoClose />
        </button>
      </div>

      {/* Modal to delete */}
      <Modal
        title="Deletar usuário"
        modalActive={deleteModalActive}
        setModalActive={setDeleteModalActive}
      >
        <div className="modal__inner-container">
          <p>Tem certeza que deseja excluir este usuário?</p>

          <button
            onClick={() => {
              deleteUser(props._id, setDeleteModalActive);
            }}
          >
            Deletar
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

      {/* Modal to update */}
      <Modal
        title="Atualizar usuário"
        modalActive={updateModalActive}
        setModalActive={setUpdateModalActive}
      >
        <div className="modal__inner-container">
          <p>Preencha apenas as áreas que você deseja alterar.</p>

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

          <button
            className="modall__button--att"
            onClick={() => {
              updateUser(props._id, name, email, setUpdateModalActive);
            }}
          >
            Atualizar
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
    </UserCardStyle>
  );
};

export default UserCard;
