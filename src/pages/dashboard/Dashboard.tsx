import { BarraDeFerramentas } from '../../shered/components';
import { LayoutBaseDePagina } from '../../shered/layouts';

export const Dashboard = () => {

  return (

    <LayoutBaseDePagina
      titulo='Pagina Inicial'
      barraDeFerrmentas={(
        <BarraDeFerramentas />
      )}
    >
      Testando
    </LayoutBaseDePagina>
  );
};