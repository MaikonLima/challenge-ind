import { createTheme } from "@mui/material";

import theme from "./light";

export const muiThemeDefault = createTheme({
    palette: {
        primary: {
            main: theme.colors.primary.main,
        },

        secondary: {
            main: theme.colors.secondary.main,
        },

        warning: {
            main: theme.colors.warning.main,
        },

        error: {
            main: theme.colors.danger.main,
        },

        success: {
            main: theme.colors.success.main,
        },

        info: {
            main: theme.colors.info.main,
        },

        text: {
            primary: theme.colors.text.main,
        },

        background: {
            default: theme.colors.backgrounds.default,
        },

        // contrastThreshold: 3,
        tonalOffset: 0.1,
    },
});
