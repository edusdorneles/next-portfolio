import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;        
        box-sizing: border-box;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
        background-color: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};        
    }

    #root {min-height: 100vh;}
`;

export const Container = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    
    @media (min-width: 768px) {    
        width: 750px;
    }

    @media (min-width: 992px) {    
        width: 970px;
    }    
`;