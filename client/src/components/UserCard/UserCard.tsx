import { useState } from "react";
import Modal from "components/Modal/Modal";
import { useUsersContext } from "providers/UsersContext";

// Styles
import { UserCardStyle } from "./styles";

// Icons
import { MdModeEditOutline } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const UserCard: React.FC<User> = (props) => {
  const { deleteUser, message } = useUsersContext();
  const [modalActive, setModalActive] = useState(false);

  return (
    <UserCardStyle>
      <div className="user-card__name">
        <p>{props.name}</p>
        <p>{props.email}</p>
      </div>

      <div className="user-card__buttons">
        <button>
          <MdModeEditOutline />
        </button>

        <button
          onClick={() => {
            setModalActive(true);
          }}
        >
          <IoClose />
        </button>
      </div>

      <Modal
        title="Deletar usuário"
        modalActive={modalActive}
        setModalActive={setModalActive}
      >
        <div className="modal__text">
          <p>Tem certeza que deseja excluir este usuário?</p>

          <button
            onClick={() => {
              deleteUser(props._id, setModalActive);
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
    </UserCardStyle>
  );
};

export default UserCard;
