import styled from "styled-components";

export const TitleDescStyle = styled.div`
  padding: 15px 0px;

  .title-desc__title {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 10px;

    h1 {
      padding: 6px 0px 4px 0px;
      width: 110px;
      font-weight: normal;
      background-color: ${(props) => props.theme.colors.secondary};
      border-radius: 5px;
      font-size: ${(props) => props.theme.fontSize.medium};
    }
  }

  .title-desc__desc {
    text-align: center;

    p {
      font-size: ${(props) => props.theme.fontSize.large};
      color: ${(props) => props.theme.colors.text};
    }
  }

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    .title-desc__title {
      h1 {
        font-size: ${(props) => props.theme.mobileFontSize.large};
      }
    }

    .title-desc__desc {
      p {
        font-size: ${(props) => props.theme.mobileFontSize.medium};
      }
    }
  }
`;
