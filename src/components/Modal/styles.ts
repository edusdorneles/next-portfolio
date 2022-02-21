import styled from "styled-components";
import { shade } from "polished";

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
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      padding-top: 10px;

      input {
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSize.medium};
        background-color: ${(props) => props.theme.colors.primary};
        border: 1px solid #252525;
        padding: 8px;
        border-radius: 5px;
        font-family: "Josefin Sans", sans-serif;

        &:focus {
          outline: 1px solid ${(props) => props.theme.colors.secondary};
        }

        &[type="file"] {
          display: none;
        }
      }

      label {
        font-size: ${(props) => props.theme.fontSize.medium};
        border: 2px dashed #252525;
        text-align: center;
        color: #757575;
        padding: 8px;
        border-radius: 5px;
        font-family: "Josefin Sans", sans-serif;
        cursor: pointer;
      }

      button {
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSize.medium};
        background-color: ${(props) => props.theme.colors.secondary};
        transition: ${(props) => props.theme.transition};
        padding: 8px;
        border-radius: 5px;
        border: 1px solid #252525;
        cursor: pointer;
        font-family: "Josefin Sans", sans-serif;

        &:hover {
          background-color: ${(props) =>
            shade(0.3, props.theme.colors.secondary)};
        }
      }

      .modal__error {
        border: 1px solid ${(props) => props.theme.colors.secondary};
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSize.medium};
        display: none;
        padding: 8px;
        border-radius: 5px;

        &.modal__error--active {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
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
