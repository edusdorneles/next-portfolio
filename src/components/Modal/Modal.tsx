// Styles
import React, { SetStateAction } from "react";
import { ModalStyle } from "./styles";

// Icons
import { IoClose } from "react-icons/io5";

// Interfaces
interface Props {
  title: string;
  modalActive: boolean;
  setModalActive: React.Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({
  title,
  children,
  modalActive,
  setModalActive
}) => {
  return (
    <ModalStyle className={modalActive ? "modal__enabled" : ""}>
      <div className="modal__container">
        <div className="modal__title">
          <h3>{title}</h3>
        </div>

        <div className="modal__children">{children}</div>

        <div className="modal__close" onClick={() => setModalActive(false)}>
          <IoClose />
        </div>
      </div>
    </ModalStyle>
  );
};

export default Modal;
