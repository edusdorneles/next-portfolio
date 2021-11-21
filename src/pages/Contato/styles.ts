import styled from "styled-components";

export const ContatoStyle = styled.div`
    .contato__form__container {
        .form__link-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 15px;
            grid-row-gap: 15px;
            margin-bottom: 15px;

            > a {
                color: ${props => props.theme.colors.text};
                font-size: ${props => props.theme.fontSize.medium};
                background-color: ${props => props.theme.colors.secondary};
                transition: ${props => props.theme.transition};
                text-decoration: none;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                padding: 8px;
                border-radius: 5px;            

                &:hover {
                    background-color: ${props => props.theme.colors.secondaryHover};
                }

                > * {
                    margin-right: 5px;
                }
            }
        }

        form {
            display: grid;
            grid-template-columns: 1fr;
            grid-row-gap: 15px;

            input, textarea {
                color: ${props => props.theme.colors.text};
                font-size: ${props => props.theme.fontSize.medium};
                background-color: ${props => props.theme.colors.primary};
                border: 1px solid #252525;
                padding: 8px;
                border-radius: 5px;
                resize: none;
                font-family: 'Josefin Sans', sans-serif;

                &:focus {
                    outline: 1px solid ${props => props.theme.colors.secondary};
                }
            }

            button {
                color: ${props => props.theme.colors.text};
                font-size: ${props => props.theme.fontSize.medium};
                background-color: ${props => props.theme.colors.secondary};
                transition: ${props => props.theme.transition};
                padding: 8px;
                border-radius: 5px;
                border: 1px solid #252525;
                cursor: pointer;
                font-family: 'Josefin Sans', sans-serif;

                &:hover {
                    background-color: ${props => props.theme.colors.secondaryHover};
                }
            }
        }
    }
`;