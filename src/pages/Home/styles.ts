import styled from "styled-components";

export const HomeStyle = styled.div`
  .home__container > * {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .home__profile-image img {
    width: 220px;
    height: 220px;
    border-radius: 500px;
  }

  .home__link-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .link-buttons__link {
      background-color: #f5f5f5;
      margin: 0px 10px;
      border-radius: 100px;
      transition: ${(props) => props.theme.transition};

      &:hover {
        background-color: #cccccc;
      }

      a {
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${(props) => props.theme.fontSize.large};
        color: #151515;
      }
    }
  }
`;
