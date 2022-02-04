import styled from "styled-components";

export const FooterStyle = styled.footer`
  height: 30px;
  width: 100%;
  font-size: ${(props) => props.theme.fontSize.small};
  background-color: ${(props) => props.theme.colors.primary};
  margin-top: ${(props) => props.theme.layoutMargin.marginTop};
  position: sticky;
  top: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Adaptação para mobile */
  @media (max-width: 768px) {
    margin-top: ${(props) => props.theme.mobileLayoutMargin.marginTop};
  }
`;
