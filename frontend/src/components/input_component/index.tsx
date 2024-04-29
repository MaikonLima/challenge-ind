import InputAdornment from "@material-ui/core/InputAdornment";
import { IconButton } from "@mui/material";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import {
    CssTextField,
    IconActions,
    StyledIconButton,
} from "./styles";
import { DefaultInputProps } from "./input_props";

export function DefaultInput({
    label,
    placeholder,
    width,
    height,
    error,
    isMultiline,
    shrink,
    rows,
    small,
    line,
    adornment,
    type,
    icon: Icon,
    iconAction,
    value,
    toggleShowPassword,
    showPassword,
    isEmpty,
    autoComplete,
    interval,
    disabled,
    ...rest
}: DefaultInputProps) {
    const useWidth = width;

    const isPassword = showPassword ? "text" : "password";

    const InputIcon = () => {
        return showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />;
    };

    const inputProps = {
        ...rest,
    };

    return (
        <>
            <CssTextField
                type={type === "password" ? isPassword : type}
                label={label}
                placeholder={placeholder}
                variant="outlined"
                rows={rows}
                disabled={disabled}
                autoComplete={
                    autoComplete === "off" ? " " : autoComplete
                }
                style={{
                    width: useWidth,
                    borderRadius: "16px",
                }}
                error={error ? true : false}
                inputProps={inputProps}
                value={value}
                InputProps={{
                    endAdornment:
                        type === "password" ? (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={toggleShowPassword}
                                    edge="end"
                                >
                                    <InputIcon />
                                </IconButton>
                            </InputAdornment>
                        ) : Icon ? (
                            <IconActions
                                error={
                                    error || interval ? true : false
                                }
                                value={value}
                                position="end"
                            >
                                <StyledIconButton
                                    disableRipple
                                    aria-label="toggle password visibility"
                                    onClick={iconAction && iconAction}
                                    edge="end"
                                    disabled={disabled}
                                >
                                    <Icon
                                        style={{
                                            color:
                                                !error &&
                                                    value?.length > 0 &&
                                                    !disabled
                                                    ? "#1AD598"
                                                    : error
                                                        ? "#EA3A3D"
                                                        : null,
                                        }}
                                    />
                                </StyledIconButton>
                            </IconActions>
                        ) : null,
                }}
                multiline={isMultiline}
                InputLabelProps={{ shrink }}
                size={small ? "small" : "medium"}
                {...rest}
            />
        </>
    );
}
