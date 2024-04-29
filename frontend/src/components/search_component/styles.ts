import styled from "styled-components";

export const SearchIcon = styled.img<any>`
    width: 16px;
    right: 10%;
    position: relative;
`;

export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    z-index: 10;
    background-color: #ffffff;

    border-radius: 16px;

    border: 2px solid ${({ theme }) => theme.colors.border};

    width: 100%;

    &:focus:valid {
        border-color: #1976d2;
    }
`;

export const Input = styled.input`
    height: 56px;
    width: 40%;
    padding: 0px 16px;
    border-radius: 15px;
    font-size: 1em;
    border: 2px solid #d9e1e7;
    background-color: #ffffff;
    color: #282945;
    

    transition: border 0.2s ease-in-out;

    @media (max-width: 800px) {
        width: 100%;
        height: 70px;
    }

    &:focus:valid {
        border-color: #1976d2;
    }
`;
