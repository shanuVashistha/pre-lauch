import {createTheme, responsiveFontSizes} from "@mui/material";

const primary = {
    50: '#e5e6e8',
    100: '#bec1c6',
    200: '#9398a0',
    300: '#676e7a',
    400: '#474f5e',
    500: '#263041',
    600: '#222b3b',
    700: '#1c2432',
    800: '#171e2a',
    900: '#0d131c',
    A100: '#5e99ff',
    A200: '#2b78ff',
    A400: '#005af7',
    A700: '#0051de',
};

const secondary = {
    50: '#fef6e0',
    100: '#fde9b3',
    200: '#fcda80',
    300: '#fbcb4d',
    400: '#fabf26',
    500: '#f9b400',
    600: '#f8ad00',
    700: '#f7a400',
    800: '#f69c00',
    900: '#f58c00',
    A100: '#ffffff',
    A200: '#fff4e8',
    A400: '#ffdcb5',
    A700: '#ffd09c'
};

export const theme = responsiveFontSizes(createTheme({
    palette: {
        primary,
        secondary
    },
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: 12,
                }
            }
        }
    },
    typography: {fontFamily: "Poppins, sans-serif"}
}));
