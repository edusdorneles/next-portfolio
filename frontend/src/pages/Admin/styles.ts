import styled from "styled-components";
import { shade } from "polished";

export const AdminStyle = styled.main`
  .admin__container {
    form {
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
        font-family: "Josefin Sans", sans-serif;

        &:focus {
          outline: 1px solid ${(props) => props.theme.colors.secondary};
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
      }

      .error__container {
        border: 1px solid ${(props) => props.theme.colors.secondary};
        transition: ${(props) => props.theme.transition};
        border-radius: 5px;
        height: 34px;
        visibility: hidden;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        &.active {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`;
