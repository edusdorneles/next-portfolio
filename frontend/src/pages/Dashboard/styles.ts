import styled from "styled-components";
import { shade } from "polished";

export const DashboardStyle = styled.main`
  .dashboard__container {
    .dashboard__areas__container {
      display: flex;
      align-items: center;
      justify-content: center;

      .dashboard__area {
        background-color: ${(props) => props.theme.colors.primary};
        border: 1px solid ${(props) => props.theme.colors.secondary};
        transition: ${(props) => props.theme.transition};
        border-radius: 5px;
        margin: 0px 10px;
        width: 190px;
        height: 190px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-decoration: none;

        &:hover {
          background-color: ${(props) =>
            shade(0.3, props.theme.colors.primary)};
        }

        svg {
          color: ${(props) => props.theme.colors.secondary};
          font-size: 34px;
          margin-bottom: 6px;
        }

        p {
          color: ${(props) => props.theme.colors.text};
        }
      }
    }

    .dashboard__logout {
      margin-top: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSize.medium};
        background-color: ${(props) => props.theme.colors.secondary};
        transition: ${(props) => props.theme.transition};
        width: 400px;
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
    }
  }

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    .dashboard__container {      
      .dashboard__areas__container {
        flex-direction: column;

        .dashboard__area {
          &:first-child {
            margin-bottom: 15px;
          }
        }
      }

      .dashboard__logout button {
        width: 160px;
      }
    }
  }
`;
