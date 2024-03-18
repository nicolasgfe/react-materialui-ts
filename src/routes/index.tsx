import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shered/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

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
      <Route path="/pagina-inicial" element={<Dashboard />} />

      <Route path="*" element={<Navigate to={'/pagina-inicial'}></Navigate>} />
    </Routes>
  );
};