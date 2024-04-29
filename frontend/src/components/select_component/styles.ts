import { InputAdornment, TextField } from "@mui/material";
import { getValue } from "@mui/system";
import styled from "styled-components";

export const TextFieldSelect = styled(TextField)<any>(
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
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: `2px solid ${!error && value?.value?.length > 0
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
                border: `2px solid ${!error && value?.value?.length > 0
                    ? "#1AD598"
                    : "#ff9c1a"
                    }`,
                opacity: 1,
                background: `${!error && value?.value?.length > 0
                    ? "#FFFFFF0D"
                    : "#FF9C1A0D"
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
