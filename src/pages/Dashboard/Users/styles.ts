import styled from "styled-components";
import { shade } from "polished";

export const UsersStyle = styled.main`
  .users__container {
    .users__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    }

    .user-cards__new-user {
      border: 2px dashed ${(props) => props.theme.colors.secondary};
      transition: ${(props) => props.theme.transition};
      height: 80px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => shade(0.2, props.theme.colors.primary)};
      }

      svg {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 26px;
      }
    }
  }

  .modal__inner-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 15px;

    input {
      color: ${(props) => props.theme.colors.text};
      font-size: ${(props) => props.theme.fontSize.medium};
      background-color: ${(props) => props.theme.colors.primary};
      border: 1px solid #252525;
      padding: 8px;
      border-radius: 5px;
      resize: none;
      font-family: "Josefin Sans", sans-serif;

      &:focus {
        outline: 1px solid ${(props) => props.theme.colors.secondary};
      }

      &::-ms-reveal {
        filter: invert(100%);
      }
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

    .modal__message {
      border: 1px solid ${(props) => props.theme.colors.secondary};
      transition: ${(props) => props.theme.transition};
      border-radius: 5px;
      height: 34px;
      display: none;

      &.modal__message--active {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    .users__container {
      .users__cards {
        grid-template-columns: 1fr;
      }
    }
  }
`;
