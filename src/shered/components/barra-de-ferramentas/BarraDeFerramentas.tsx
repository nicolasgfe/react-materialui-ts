import { Box, Button, Paper, TextField, useTheme } from '@mui/material';

export const BarraDeFerramentas = () => {
  const theme = useTheme();
   
  return (
    <Box
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      display='flex'
      alignItems='center'
      height={theme.spacing(5)}
      component={Paper}
    >
      <TextField 
        size='small'
        placeholder='Pesquisar'
      />

      <Button>Novo</Button>
    </Box>
  );
};
