import styled from "styled-components";

export const ProjectCardStyle = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  border: 1px solid #252525;

  .project-card__text {
    padding: 15px;

    .project-card__text__title {
      font-size: ${(props) => props.theme.fontSize.large};
      margin-bottom: 3px;
    }

    .project-card__text__data-inicio {
      font-size: ${(props) => props.theme.fontSize.small};
    }

    .project-card__text__desc {
      font-size: ${(props) => props.theme.fontSize.small};
      text-align: justify;
      margin-bottom: 15px;
    }

    .project-card__text__differential {
      font-size: ${(props) => props.theme.fontSize.small};
      text-align: justify;
    }
  }

  .project-card__image img {
    width: 100%;
    height: 170px;
    object-fit: cover;
  }

  .project-card__link-buttons {
    padding: 0px 15px 15px 15px;
    display: flex;
    align-items: center;

    .link-buttons__link {
      background-color: transparent;
      margin-right: 5px;
      border-radius: 100px;
      transition: ${(props) => props.theme.transition};

      &:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }

      a {
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${(props) => props.theme.fontSize.large};
        color: white;
      }
    }
  }
`;
