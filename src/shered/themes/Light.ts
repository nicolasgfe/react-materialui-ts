import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const LightTheme = createTheme({
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
      default: '#fffff',
      paper: '#f7f6f3',
    }
  }
});