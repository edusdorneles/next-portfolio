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

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    .users__container {
      .users__cards {
        grid-template-columns: 1fr;
      }
    }
  }
`;
