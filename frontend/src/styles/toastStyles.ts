import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

export const StyledToast = styled(ToastContainer)`
  &&&.Toastify__toast-container {
    margin-top: 4rem;
  }
`;
