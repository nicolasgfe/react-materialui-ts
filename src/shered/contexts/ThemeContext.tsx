import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { DarkTheme, LightTheme } from '../themes';

interface IThemeContextData {
  themeName: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as IThemeContextData);

interface IThemeProviderProp {
  children: ReactNode;
}

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IThemeProviderProp> = ({ children }) => {
  const [themeName, setThemeName] = useState<'dark' | 'light'>('light');
  const toggleTheme = useCallback(() => {
    setThemeName(oldThisName => oldThisName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;

    return DarkTheme;
  }, [themeName]);


  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width='100vw' height='100vh' bgcolor={theme?.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};