import { ThemeProvider } from "@mui/material";
import { ButtonStyled } from "./styles";
import { muiThemeDefault } from "../../styles/themes/materialUI";

export default function ButtonConponent({
    onClick,
    value,
    width,
    height,
    fullWidth,
    outlined,
    icon: Icon,
    loading,
    gap,
    error,
    iconPosition,
    disabled,
    ...rest
}: any) {
    return (
        <ThemeProvider theme={muiThemeDefault}>
            <ButtonStyled
                loading={loading}
                onClick={onClick}
                disabled={disabled}
                width={width}
                gap={gap}
                error={error}
                height={height}
                fullwidth={fullWidth}
                variant={outlined ? "outlined" : "contained"}
                endIcon={
                    iconPosition !== "left" && Icon ? <Icon /> : null
                }
                startIcon={
                    iconPosition === "left" && Icon ? <Icon /> : null
                }
                {...rest}
            >
                {value}
            </ButtonStyled>
        </ThemeProvider>
    );
}
