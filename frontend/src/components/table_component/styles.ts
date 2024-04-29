import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 56px;
  overflow-y: auto;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #ffffff;
  box-shadow: 0px 1px 4px #00000029;
  border-radius: 5px 5px 5px 5px;
`;

export const TableBox = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead th {
    position: sticky;
    top: 0;
    background-color: #1976d2;
    z-index: 1;
  }

  thead {
    background-color: #1976d2;

    tr th {
      &:first-child {
        padding-left: 3rem;
      }
      &:last-child {
        padding-right: 3rem;
      }
      font-size: 1rem !important;
      color: #ffffff;
      text-align: left !important;
      padding: 18px 15px;
      font-size: 0.8em;
      font-weight: 600;
      letter-spacing: 0px;

      :first-child {
        border-radius: 4px 0px 0px 4px;
      }

      :last-child {
        border-radius: 0px 4px 4px 0px;
      }
      &.center {
        text-align: center !important;
      }
    }
  }

  tbody {
    tr {
      td {
        &:first-child {
          padding-left: 3rem;
        }
        &:last-child {
          padding-right: 3rem;
        }
        max-width: 100px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #616c84;
        padding: 15px;
        text-align: left !important;
        border-bottom: 1px solid #edf1fc;

        :last-child {
          max-width: none;
        }
      }
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    color: #616c84;

    &:disabled {
      background: transparent;
    }
  }
`;

export const ActionsTime = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    color: #616c84;

    &:disabled {
      background: transparent;
    }
  }
`;

export const ActionsModalDate = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 20px;

  button {
    display: flex;
    background-color: transparent;
    border: none;
    color: #616c84;

    &:disabled {
      background: transparent;
    }
  }
`;

export const Empty = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;

  h2 {
    color: #636c82;
    text-align: center;
    font-size: 20px;
    font-family: Poppins;
    font-weight: 700;
    letter-spacing: -0.5px;
    margin-top: 51px;
  }

  p {
    color: #636c82;
    text-align: center;
    font-size: 18px;
    font-family: Poppins;
    font-weight: 500;
    height: 36px;
  }
`;

export const Progress = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0px;
`;
