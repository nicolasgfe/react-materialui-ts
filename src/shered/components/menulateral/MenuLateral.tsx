import { Avatar, Box, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';
import { useAppThemeContext, useDrawerContext } from '../../contexts';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IMenuLateralProp {
  children: ReactNode;
}

interface IListItemLink {
  to: string;
  icon: string;
  label: string;
  onClick?: (() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLink> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const hanleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={hanleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuLateral: React.FC<IMenuLateralProp> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'persistent'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" flex={1} flexDirection="column" >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              style={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src='https://scontent.ffbe1-1.fna.fbcdn.net/v/t39.30808-1/292323356_2427368757405193_3250643364279189178_n.jpg?stp=dst-jpg_p160x160&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bXiq7_9wKLoAX_0qVBs&_nc_ht=scontent.ffbe1-1.fna&oh=00_AfDxm2nZ9zDDybqs-4pLbXo4jNyRVbvO7WUXWPqCSMlLpg&oe=65EEFE0A'
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
        </Box>
        <Box>
          <List component="nav">
            <ListItemButton onClick={toggleTheme}>
              <ListItemIcon>
                <Icon>dark_mode</Icon>
              </ListItemIcon>
              <ListItemText primary='Alternar tema'/>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(28)} >
        {children}
      </Box>
    </>
  );
};