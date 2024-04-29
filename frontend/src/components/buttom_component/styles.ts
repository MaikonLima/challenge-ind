import styled from "styled-components";
import { LoadingButton } from "@mui/lab";

export const ButtonStyled = styled(LoadingButton)`
    && {
        text-transform: none;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        padding: 9px 20px;
        border-radius: 10px;

        width: ${({ width, fullwidth }: any) => {
            if (fullwidth) {
                return "100%";
            } else {
                return width ? width : "auto";
            }
        }};

        height: ${({ height }: any) => (height ? height : "auto")};

        transition: 0.3s;
        box-shadow: none;
        cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};

        &:hover {
            box-shadow: none;
        }

        @media (max-width: 800px) {
            width: 100%;
        }
    }
`;
