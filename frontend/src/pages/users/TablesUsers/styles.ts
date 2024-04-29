import styled from "styled-components";

export const ContainerUsers = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-top: 15px;
    padding-right: 15px;
    padding-left: 20px;
    min-width: 550px;
`;

export const ContainerWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: 70vh;
  min-height: 56px;
  overflow: auto;
  box-shadow: 0px 1px 4px #00000029;
`;

export const TableContainer = styled.table`
  width: 100%;
  min-width: max-content;
  border-collapse: collapse;

  thead th {
    position: sticky;
    top: 0;
    background-color: #1976d3;
    z-index: 1;
  }

  thead {
    tr th {
      height: 51px;
      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;
      text-align: left;
      padding: 5px 15px;
      font-size: 0.8em;
      text-transform: uppercase;
      text-align: center;

      :first-child {
        border-radius: 4px 0px 0px 4px;
      }

      :last-child {
        border-radius: 0px 4px 4px 0px;
      }
    }
  }

  tbody {
    background-color: #ffffff;
    tr {
      height: 51px;
      border-radius: 8px;
      td {
        color: #616c84;
        padding: 5px 20px;
        border-bottom: 1px solid #edf1fc;
      }
    }
  }
`;

export const TableData = styled.div`
  width: 100%;
  height: 53px;
  background-color: #FF9C1A;
  border-radius: 5px;
`;

export const PaginationWrapper = styled.div`
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  padding: 0 1.5rem;

  display: flex;
  justify-content: flex-end;
`;

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const NavigatorButton = styled.button`
  display: flex;
  background-color: transparent;
  padding: 0.5rem;
  border-radius: 50%;
  border: none;
  transition: background-color 0.4s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

export const CurrentPage = styled.div`
  background-color: #1976d2;
  color: #ffffff;
  padding: 0.6rem 1rem;
  border-radius: 5px;
`;

export const TotalPages = styled.div`
  display: flex;
`;

export const TableActions = styled.div`
  display: flex;
  justify-content: center;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    color: #616c84;
  }
`;