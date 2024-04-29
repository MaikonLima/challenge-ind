import styled from "styled-components";

export const Overlay = styled.div`
    z-index: 5;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(6px);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0px 1px 4px #00000029;
    border-radius: 16px;
    overflow: auto;
    padding: 3rem;
    max-width: 1500px;
    max-height: 90vh;
    width: 55%;

    @media (max-width: 800px) {
        padding: 2rem;
        width: 70%
    }
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fonts.size.grand};
    color: #050505;
    font-weight: bold;
    padding-left: 30px;

    @media (max-width: 800px) {
        padding-left: ${({ theme }) => theme.spacing.medium};
    }
`;

export const Form = styled.form<any>`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: ${({ fullWidth }: any) => fullWidth && "100%"};
    height: ${({ fullWidth }: any) => fullWidth && "100%"};
    background: #ffffff;
    border-radius: 4px;
    padding: 2rem;
`;

export const SubTitle = styled.h4`
    padding: 4px;
    color: #282945;
    gap: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fonts.size.large};
    display: flex;
    justify-content: flex-start;
    opacity: 1;
`;

export const BoxGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    padding: 10px 0;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: auto;
    }

    @media (max-width: 1366px) and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: auto;
    }
`;

export const BoxName = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: auto;
        margin-top: 16px;
    }

    @media (max-width: 1366px) and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: auto;
    }
`;

export const BoxNameHour = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: auto;
        margin-top: 16px;
    }

    @media (max-width: 1366px) and (min-width: 768px) {
        display: flex;
        flex-direction: column;
        gap: 32px;
        height: auto;
    }
`;

export const PageActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 42px;
    margin-top: 50px;
    margin-bottom: 10px;
    gap: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 800px) {
        flex-direction: row;
        gap: ${({ theme }) => theme.spacing.small};
        height: auto;
        justify-content: flex-start;
    }
`;
