import styled from "styled-components";

export const LoadingStyle = styled.div`
    width: 100%;
    height: calc(100vh - 160px);
    display: flex;    
    align-items: center;
    justify-content: center;


    /* Adaptação para mobile */
    @media (max-width: 768px) {
        height: calc(100vh - 140px);
    }
`;