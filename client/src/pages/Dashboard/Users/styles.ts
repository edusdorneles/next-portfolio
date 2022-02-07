import styled from "styled-components";

export const UsersStyle = styled.main`
  .users__container {
    .users__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
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
