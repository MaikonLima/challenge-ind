import styled, { css } from "styled-components";
import { IconButton } from "@mui/material";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;


export const CrudActions = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0px 1px 4px #00000029;
  border-radius: 5px;
`;

export const SearchModelItem = styled.div`
  width: 400px;

  height: 48px;
  display: flex;
  background-color: #ffffff;
  padding: 0.7rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #707070;
  cursor: pointer;
  border: none;

  &:hover {
    border: none
  }

  input {
    flex-grow: 1;
    border: none;
    color: #737373;
    margin-left: 0.5rem;

    &:focus {
      outline: 0;
    }
  }

  button {
    display: flex;
    border: none;
    background-color: transparent;
  }
`;


export const ButtonSearch = styled.button`
  background-color: #FF9C1A;
  border: none;
  border-radius: 5px;
  padding: 0px 20px;
  color: white;
`;


export const Filters = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  margin-bottom: 20px;
`;

export const ContainerPlanning = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 20px;
    min-width: 550px;
`;

export const Title = styled.h1<any>`
    font-size: ${({ theme }) => theme.fonts.size.grand};
    color: #050505;
    font-weight: bold;
`;

export const BoxU = styled.div<any>`
    display: flex;
    flex: ${({ flex }: any) => (flex ? flex : null)};
    justify-content: ${({ justify }: any) =>
    justify ? justify : "flex-start"};

    align-items: ${({ align }: any) =>
    align ? align : "flex-start"};

    flex-direction: ${({ direction }: any) =>
    direction === "column" ? "column" : "row"};

    flex-wrap: ${({ wrap }: any) => wrap && "wrap"};

    width: ${({ width, fullWidth }: any) => {
    if (fullWidth) {
      return "100%";
    } else {
      return width ? width : "auto";
    }
  }};

    height: ${({ height }: any) => (height ? height : "auto")};
    background-color: ${({ background }: any) => background};

    @media (max-width: 800px) {
        flex-direction: column;
        flex-wrap: wrap;

        align-items: center;
        width: 100%;
    }
`;

export const PageActions = styled.div<any>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 42px;
    margin-right: 25px;
    margin-top: 10%;
    gap: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 800px) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
        height: auto;
    }
`;

export const ButtonIcones = styled.button<any>`
    width: 60px;
    height: 38px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat
        padding-box;
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 9px;
    opacity: 1;
    border: none;
`;

export const PageActionSearch = styled.div<any>`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 42px;
    width: 40rem;
    gap: ${({ theme }) => theme.spacing.medium};

    @media (max-width: 800px) {
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.large};
        height: auto;
    }
`;

export const ActionsList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 800px) {
        flex-direction: row;
        gap: 50px;
        height: auto;
    }

    div {
        display: flex;
        gap: ${({ theme }) => theme.spacing.small};
    }
`;

export const ButtonIcon = styled(IconButton)`
    display: flex;
    justify-content: center;
    align-items: center;

    background: none;
    border: none;

    padding: ${({ theme }) => theme.spacing.small};
    width: 40px;
    height: 40px;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;

export const ToggleContainer = styled.section`
    display: flex;
    gap: 5 !important;
`;

export const DivSearch = styled.div`
    width: 25.5rem;

    @media (max-width: 800px) {
        width: 100%;
        margin-left: 65px;
    }
`;

export const Footer = styled.div`
  display: flex;
  gap: 5px;
  padding-left: 2rem;
  color:"#0000008A";
`;

export const SpanCounterUser = styled.span`
  color:"#0000008A";
`;
