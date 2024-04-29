import styled from "styled-components";

export const DivMain = styled.div`
    width: 550px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-right: 15px;
    padding-left: 20px;
    padding-bottom:100px;
    background-color: #FFFFFF;
    
    margin-left: auto;
    margin-right: auto;

    border-radius: 16px;
    box-shadow: 3px 4px 12px #0000000f;
`;

export const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const TextTitle = styled.h1`
    margin-top: 30px;   
    font-size: 32px;
    font-weight: bold;
    color: #050505;
    text-align: center;
`;

export const TextMain = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: #050505;
`;

export const EmptyImageEmpty = styled.img``;