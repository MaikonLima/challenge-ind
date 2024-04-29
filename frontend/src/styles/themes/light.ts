import tinycolor from "tinycolor2";

const primary = "#1976d2";
const secondary = "#DFFFEF";
const warning = "#E6A400";
const success = "#38C05D";
const danger = "#EA4335";
const info = "#4C8BF5";

const text = "#7D7D8E";
const textToggle = "#525269";

const neutral = "#292929";
const dark = "#000";
const light = "#FFF";

const lightRate = 7;
const darkRate = 7;

export const setSpacing = ({ theme_spacing, gap }: any) => {
    switch (gap) {
        case "none":
            return "0px";

        case "small":
            return theme_spacing.spacing.small;

        case "medium":
            return theme_spacing.spacing.medium;

        case "large":
            return theme_spacing.spacing.large;

        default:
            return gap;
    }
};

export const setFontSize = ({ theme_size, gap }: any) => {
    switch (gap) {
        case "none":
            return "0px";

        case "mini":
            return theme_size.fonts.size.mini;

        case "small":
            return theme_size.fonts.size.small;

        case "medium":
            return theme_size.fonts.size.medium;

        case "large":
            return theme_size.fonts.size.large;

        default:
            return theme_size.fonts.size.large;
    }
};

const theme = {
    title: "SGU - Sistema de Gerenciamento de Usuários",

    fonts: {
        family: "Inter, sans-serif",
        size: {
            mini: "10px",
            small: "12px",
            medium: "18px",
            large: "24px",
            grand: "32px",
        },
    },

    shadows: ["3px 3px 5px rgba(0, 0, 0, 0.05)"],

    colors: {
        default: { light: "#ffffff", dark: "#292929" },
        disabled: "#0000000B",

        neutral: [
            tinycolor(neutral).lighten(0),
            tinycolor(neutral).lighten(10),
            tinycolor(neutral).lighten(20),
            tinycolor(neutral).lighten(30),
            tinycolor(neutral).lighten(40),
            tinycolor(neutral).lighten(50),
            tinycolor(neutral).lighten(60),
            tinycolor(neutral).lighten(70),
            tinycolor(neutral).lighten(80),
            tinycolor(neutral).lighten(90),
            tinycolor(neutral).lighten(100),
        ],

        primary: {
            main: primary,
            light: tinycolor(primary).lighten(lightRate),
            dark: tinycolor(primary).darken(darkRate),
        },

        secondary: {
            main: secondary,
            light: tinycolor(secondary).lighten(lightRate),
            dark: tinycolor(secondary).darken(darkRate),
        },

        info: {
            main: info,
            light: tinycolor(info).lighten(57),
            dark: tinycolor(info).lighten(13),
        },

        warning: {
            main: warning,
            light: tinycolor(warning).lighten(20),
            dark: tinycolor(warning).darken(35),
        },

        success: {
            main: success,
            light: tinycolor(success).lighten(17),
            dark: tinycolor(success).darken(50),
        },

        danger: {
            main: danger,
            light: tinycolor(danger).lighten(35),
            dark: tinycolor(danger).darken(35),
        },

        fade: {
            primary: tinycolor(primary).setAlpha(0.2),
            secondary: tinycolor(secondary).setAlpha(0.2),

            info: tinycolor(info).setAlpha(0.2),
            success: tinycolor(success).setAlpha(0.2),
            warning: tinycolor(warning).setAlpha(0.2),
            danger: tinycolor(danger).setAlpha(0.2),

            light: tinycolor(light).setAlpha(0.2),
            dark: tinycolor(dark).setAlpha(0.1),

            transparent: tinycolor(light).setAlpha(0),
        },

        backgrounds: {
            default: "#F1F4FA",
            overlay: "rgba(97,108,132,0.6)",
            soft: "#F5FCF7",
        },

        text: {
            default: { light: "#ffffff", dark: "#292929" },
            main: text,
            textTable: text,
            light: tinycolor(text).lighten(20),
            dark: tinycolor(text).darken(15),
        },

        toggle: {
            main: textToggle,
        },

        border: "rgba(214,214,214,1)",
    },

    shapes: {
        appbar: { height: "76px" },
        sidebarOpen: "300px",
        sidebarClose: "100px",
        radius: { small: "4px", medium: "8px", large: "16px" },
        small: "8px",
        medium: "16px",
        large: "20px",
    },

    spacing: { small: "16px", medium: "32px", large: "48px" },
};
export default theme;
