import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background: #f1f4fa;
    width: 100%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: auto;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    transition: all 0.2s ease-in;
  }

  ::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 10px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }: any) => {
        return theme.colors.primary;
    }};
    }
  }

  button {
    cursor: pointer;

    &:disabled {
    cursor: not-allowed;
    background-color: #c6c6c6;
    color: #ffffff;
    border: none;

      &:hover {
        background-color: #c6c6c6;
      }

      &:active {
        background-color: #c6c6c6;
      }
    }
  }

  button, input {
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #4A4A4A;
    font-weight: bold;
  }

  p, small, sub {
    font-size: 14px;
  }

  h1 {
    font-size: 1.375rem;
  }

  h2 {
    font-size: 20px;
  }

  h5 {
    font-size: 14px;
  }

  small {
    color: #4A4A4A;
    font-size: 0.65rem;
    font-weight: 400;
  }
  
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
}
`;
