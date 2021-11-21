import styled from "styled-components";

export const HeaderStyle = styled.header`
    height: 70px;
    background-color: ${props => props.theme.colors.primary};    
    margin-bottom: ${props => props.theme.layoutMargin.marginBottom};

    .header__container {
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-between;        
    }

    .header__logo img {
        height: 32px;
    }


    /* Adaptação para mobile */
    @media (max-width: 768px) {
        margin-bottom: ${props => props.theme.mobileLayoutMargin.marginBottom};
    }
`;

export const NavStyle = styled.nav`
    ul {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        
        li {
            padding: 10px;
            list-style: none;

            a {                
                color: ${props => props.theme.colors.text};
                font-size: ${props => props.theme.fontSize.medium};
                text-decoration: none;                
                transition: ${props => props.theme.transition};

                &:hover {
                    color: ${props => props.theme.colors.secondary}
                }

                &.active {
                    background-color: ${props => props.theme.colors.secondary};
                    color: white;
                }
            }
        }
    }

    .navbar__mobile {
        display: none;
        
        li {
            padding: 5px;

            a {
                padding: 5px;
                border-radius: 5px;
                font-size: 20px;
                display: flex;
            }            
        }
    }


    /* Adaptação para mobile */
    @media (max-width: 768px) {
        .navbar__desktop {display: none}
        .navbar__mobile {display: flex}
    }
`;