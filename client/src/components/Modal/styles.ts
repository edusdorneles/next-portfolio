import styled from "styled-components";

export const ModalStyle = styled.div`
  transition: ${(props) => props.theme.transition};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #0008;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
  opacity: 0;

  &.modal__enabled {
    visibility: visible;
    opacity: 1;
  }

  .modal__container {
    background-color: ${(props) => props.theme.colors.primary};
    width: 480px;
    height: auto;
    border-radius: 5px;
    padding: 15px;
    position: relative;

    .modal__title {
      text-align: center;
    }

    .modal__children {
      padding-top: 10px;
    }

    .modal__close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      display: flex;
      cursor: pointer;

      &:hover {
        svg {
          color: ${(props) => props.theme.colors.secondary};
        }
      }

      svg {
        transition: ${(props) => props.theme.transition};
        font-size: 22px;
      }
    }
  }

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    .modal__container {
      width: 90%;
    }
  }
`;
