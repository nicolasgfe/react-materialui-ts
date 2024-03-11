import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[600],
      light: yellow[500],
      contrastText: '#fffff',
    },
    secondary: {
      main: cyan[400],
      dark: cyan[300],
      light: cyan[200],
      contrastText: '#fffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    }
  }
});