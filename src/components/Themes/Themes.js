import {createTheme} from '@mui/material/styles';

const themeNimbio = createTheme({
    palette: {
        header: {
            primary: {
                main: '#0583AD'
            },
            secondary: {
                main: '#FFFFFF'
            },
        },
        primary: {
            main: '#0583AD',
        },
        secondary: {
            main: '#FFFFFF',
        },
        contrastThreshold: 4.5,
    },
});

export default function Themes() {
    return (themeNimbio);
}