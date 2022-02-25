import styled from "styled-components";
import { shade } from "polished";

export const ProjectCardStyle = styled.div`
  height: 387px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  border: 1px solid #252525;

  .project-card__text {
    padding: 15px;

    .project-card__text__title {
      font-size: ${(props) => props.theme.fontSize.large};
      margin-bottom: 3px;
    }

    .project-card__text__initial-date {
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px 15px 15px;

    .link-buttons__preview {
      display: flex;

      .link-buttons__preview__link {
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

    .link-buttons__preview__edit {
      display: flex;

      button {
        background-color: ${(props) => props.theme.colors.secondary};
        transition: ${(props) => props.theme.transition};
        border: none;
        border-radius: 5px;
        width: 26px;
        height: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background-color: ${(props) =>
            shade(0.3, props.theme.colors.secondary)};
        }

        &:last-child {
          margin-left: 8px;
          background-color: #ff0000;

          &:hover {
            background-color: ${shade(0.5, "#FF0000")};
          }
        }

        svg {
          color: white;
          display: flex;
        }
      }
    }
  }
`;
