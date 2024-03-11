import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shered/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Pagina Inicial'
      }
    ]);
  }, []);


  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleDrawerOpen}>Toogle Drawer</Button>} />

      <Route path="*" element={<Navigate to={'/pagina-inicial'}></Navigate>} />
    </Routes>
  );
};