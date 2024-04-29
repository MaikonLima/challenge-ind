import styled from "styled-components";

export const Container = styled.div`
    width: ${({ fullWidth }: any) => fullWidth && "100%"};
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-right: 15px;
    padding-left: 20px;
    padding-bottom:100px;
    
    margin-left: auto;
    margin-right: auto;

    border-radius: 16px;
    box-shadow: 3px 4px 12px #0000000f;
    background-color: #ffffff;
`;

export const Title = styled.h1` 
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: ${({ theme }) => theme.fonts.size.grand};
    color: #282945;
    font-family: "Inter", sans-serif;
    font-weight: 900;
`;

export const SubTitle = styled.h4`
    color: #282945;
    gap: ${({ theme }) => theme.spacing.small};
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
    opacity: 1;
    font-family: "Inter", sans-serif;
    font-weight: 600;
`;
