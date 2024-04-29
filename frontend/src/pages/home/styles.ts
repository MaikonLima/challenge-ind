import styled from "styled-components";

export const Container = styled.div`
    width: 1200px;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-right: 15px;
    padding-left: 20px;
    padding-bottom: 100px;
    
    margin-left: auto;
    margin-right: auto;

    border-radius: 16px;
    box-shadow: 3px 4px 12px #0000000f;
    background-color: #ffffff;

    @media screen and (max-width: 768px) { 
        width: 700px;
    }

    @media screen and (max-width: 1024px) { 
        width: 850px;
    }

    @media screen and (max-width: 480px) {
        width: 400px;
        padding-right: 10px;
        padding-left: 10px;
    }
`;


export const DivTitle = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    gap: 1rem;
`;

export const SubTitle = styled.h4`
    padding: 4px;
    color: #282945;
    gap: ${({ theme }) => theme.spacing.small};
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    opacity: 1;
`;

export const Row = styled.div`
    -webkit-box-flex: 1;
    flex-grow: 1;
    border-bottom: 1px solid black;
`;