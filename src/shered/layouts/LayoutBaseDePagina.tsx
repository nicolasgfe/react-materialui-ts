import { Box, Icon, IconButton, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ReactNode } from 'react';
import { useDrawerContext } from '../contexts';

interface ILayoutBaseDePaginaProps {
  children: ReactNode;
  titulo: string;
  barraDeFerrmentas?: ReactNode;
}

export const LayoutBaseDePagina: React.FC<ILayoutBaseDePaginaProps> = ({ children, titulo, barraDeFerrmentas }) => {
  const smDowm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100%' display='flex' flexDirection='column' gap={1}>
      <Box padding={1} display='flex' alignItems='center' height={theme.spacing(smDowm ? 6 : mdDown ? 8 : 12)}>
        {smDowm && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          whiteSpace='nowrap'
          overflow='hidden'
          textOverflow='ellipsis'
          variant={smDowm ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {titulo}
        </Typography>
      </Box>

      {barraDeFerrmentas && (
        <Box>
          {barraDeFerrmentas}
        </Box>
      )}

      <Box flex={1} overflow='auto' >
        {children}
      </Box>
    </Box >
  );
};