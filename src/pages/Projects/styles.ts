import styled from "styled-components";

export const ProjectsStyle = styled.div`
  .projects-card__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
  }

  /* Adaptação para mobile */
  @media (max-width: 992px) {
    .projects-card__container {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 15px;
      grid-row-gap: 15px;
    }
  }

  @media (max-width: 768px) {
    .projects-card__container {
      grid-template-columns: 1fr;
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }
  }
`;
