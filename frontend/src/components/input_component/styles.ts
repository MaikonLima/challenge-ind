import { IconButton, InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";

export const CssTextField = styled(TextField)<any>(
    ({ error, value }) => ({
        input: {
            paddingLeft: "1.5rem",
            color: "#282945",
            fontWeight: 500,
            "&::placeholder": {
                opacity: 1,
                color: "#282945",
                fontSize: 16,
                fontWeight: 500,
            },
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#d9e1e7cc",
        },
        "& .MuiOutlinedInput-input.Mui-disabled": {
            WebkitTextFillColor: "#809FB8",
            backgroundColor: "#F1F4F9",
            borderRadius: "16px",
            opacity: 1,
        },

        "& .MuiOutlinedInput-root.Mui-disabled": {
            WebkitTextFillColor: "#809FB8",
            borderRadius: "16px",
            opacity: 1,
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: `2px solid ${!error && value?.length > 0
                    ? "#1AD598"
                    : "#d9e1e7cc"
                    }`,
                borderRadius: "16px",
                color: "#282945",
                "&::placeholder": {
                    opacity: 1,
                },
            },
            "&:hover fieldset": {
                borderColor: "#d9e1e7cc",
                color: "#282945",
                "&::placeholder": {
                    opacity: 1,
                },
            },
            "&.Mui-focused fieldset": {
                border: `2px solid ${!error && value?.length > 0
                    ? "#1AD598"
                    : "#1976d3"
                    }`,
                opacity: 1,
                background: `${!error && value?.length > 0
                    ? "#FFFFFF0D"
                    : ""
                    } 0% 0% no-repeat padding-box`,
            },
        },
    }),
);

export const IconActions = styled(InputAdornment)<any>(
    ({ error, value }) => ({
        "&&": {
            display:
                error === true || value?.length > 0 ? "flex" : "none",
        },

    }),
);

export const StyledIconButton = styled(IconButton)`
  && {
    &:hover {
     background: none;
     cursor: auto;
    }

    &:active {
        background: transparent;
    }
  }
`;
