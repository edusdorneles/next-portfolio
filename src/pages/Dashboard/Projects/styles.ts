import styled from "styled-components";

export const ProjectsStyle = styled.main`
  .projects__project-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 25px;

    .projects_projects-card--new {
      transition: ${(props) => props.theme.transition};
      width: 100%;
      height: 373px;
      border-radius: 5px;
      border: 2px dashed ${(props) => props.theme.colors.secondary};
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
      }

      svg {
        color: ${(props) => props.theme.colors.secondary};
        font-size: 40px;
      }
    }
  }

  /* Adaptação para mobile */
  @media (max-width: 992px) {
    .projects-card__container {
      grid-template-columns: 1fr 1fr;
      grid-gap: 15px;
    }
  }

  @media (max-width: 768px) {
    .projects-card__container {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
`;
