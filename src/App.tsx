/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shered/contexts/ThemeContext';
import { MenuLateral } from './shered/components/menulateral/MenuLateral';
import { DrawerProvider } from './shered/contexts';

export const App = () => {

  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuLateral>
            <AppRoutes />
          </MenuLateral>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};

